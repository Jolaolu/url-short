import { shallowMount } from "@vue/test-utils";
import { cardsContent } from "../helpers";
import BaseCard from "./BaseCard.vue";

function mountComponent(propsData = {}) {
  return shallowMount(BaseCard, {
    propsData,
  });
}

describe("BaseCard", () => {
  it("renders card content", async () => {
    const wrapper = mountComponent({ card: cardsContent[0] });
    expect(wrapper.find(".card-img img").attributes("alt")).toBe(
      cardsContent[0].title
    );
  });
});
