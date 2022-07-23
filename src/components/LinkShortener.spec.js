import { shallowMount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import { yahooMock } from "@/helpers/mock";
import LinkShortener from "./LinkShortener.vue";

function setGlobal(resolveValue) {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(resolveValue),
    })
  );
}

function mountComponent() {
  return shallowMount(LinkShortener, {});
}

describe("LinkShortener", () => {
  beforeEach(() => {
    setGlobal({ ...yahooMock });
  });
  it("displays shortened url", async () => {
    const wrapper = mountComponent();
    await wrapper
      .findComponent("base-input-stub")
      .vm.$emit("update:modelValue", "www.yahoo.com");
    await wrapper.findComponent("base-button-stub").vm.$emit("click");
    await wrapper.vm.$nextTick();
    expect(
      wrapper.findComponent("base-button-stub").attributes("disabled")
    ).toBe("true");
    await flushPromises();
    expect(wrapper.find(".copy p").element.textContent).toContain(
      yahooMock.result.full_short_link
    );
  });
  it("displays error when shortening fails", async () => {
    const wrapper = mountComponent();
    setGlobal(new Error());
    await wrapper
      .findComponent("base-input-stub")
      .vm.$emit("update:modelValue", "www.yahoo.com");
    await wrapper.findComponent("base-button-stub").vm.$emit("click");
    await wrapper.vm.$nextTick();
    expect(
      wrapper.findComponent("base-button-stub").attributes("disabled")
    ).toBe("true");
    await flushPromises();
    expect(
      wrapper.findComponent("base-input-stub").attributes("error")
    ).not.toBe("");
  });
  it.only("displays error when no link is inputed", async () => {
    const wrapper = mountComponent();
    await wrapper.findComponent("base-button-stub").vm.$emit("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent("base-input-stub").attributes("error")).toBe(
      "Please add a link"
    );
  });
});
