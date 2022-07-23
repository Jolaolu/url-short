import { shallowMount } from "@vue/test-utils";
import CopyToClipboard from "./CopyToClipboard.vue";

function mountComponent(propsData = {}) {
  return shallowMount(CopyToClipboard, {
    propsData,
  });
}

describe("CopyToClipboard", () => {
  it("copies clipboard content", async () => {
    const wrapper = mountComponent({ textToCopy: "1234" });
    await wrapper.findComponent({ ref: "button" }).vm.$emit("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.find(".copy").element.classList).toContain("copied");
  });
});
