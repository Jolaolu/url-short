import { shallowMount } from "@vue/test-utils";
import BaseInput from "./BaseInput.vue";

function mountComponent(propsData = {}) {
  return shallowMount(BaseInput, {
    propsData,
  });
}

describe("BaseInput", () => {
  it("displays error message", () => {
    const wrapper = mountComponent({ error: "error" });
    expect(wrapper.find(".input-error").element.textContent).toBe("error");
    expect(wrapper.find(".input").element.classList).toContain("invalid");
  });
  it("emits search text", async () => {
    const input = "heyyy";
    const wrapper = mountComponent({ modelValue: "" });
    await wrapper.find(".input").setValue(input);
    expect(wrapper.emitted("update:modelValue")[0][0]).toBe(input);
  });
});
