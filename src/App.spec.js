import { shallowMount } from "@vue/test-utils";
import App from "./App.vue";

function mountComponent() {
  return shallowMount(App, {});
}

describe("App", () => {
  it("renders content", () => {
    const wrapper = mountComponent();
    expect(wrapper.find(".home").exists()).toBeTruthy();
  });
});
