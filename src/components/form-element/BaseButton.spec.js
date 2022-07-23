import { shallowMount } from "@vue/test-utils";
import BaseButton from "./BaseButton.vue";

function mountComponent(slots = {}) {
  return shallowMount(BaseButton, {
    slots,
  });
}

describe("BaseButton", () => {
  it("displays slot content", async () => {
    const wrapper = mountComponent({ default: "1234" });
    expect(wrapper.find(".button").element.textContent).toContain("1234");
  });
  it("emits click event", () => {
    const wrapper = mountComponent({ default: "1234" });
    wrapper.findComponent(".button").trigger("click");
    expect(wrapper.emitted("click")).toBeDefined();
  });
});
