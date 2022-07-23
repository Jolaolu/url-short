<template>
  <div class="shortener">
    <div class="shortener__form">
      <base-input
        class="shortener__form-input"
        @update:modelValue="(newValue) => (link = newValue)"
        :modelValue="link"
        :error="error"
      />
      <base-button
        :disabled="isLoading"
        @click="shortenLink(link)"
        class="shortener__form-button btn"
        >Shorten It!</base-button
      >
    </div>
  </div>
  <div v-if="links && links.length > 0" class="shortened-links">
    <article class="article" v-for="(link, index) in links" :key="index">
      <p>{{ link.original }}</p>
      <div class="copy">
        <p>{{ link.shortened }}</p>
        <copy-to-clipboard :text-to-copy="link.shortened" />
      </div>
    </article>
  </div>
</template>
<script>
import { defineComponent, ref, onMounted } from "vue";
import { fetchData } from "../services";
import CopyToClipboard from "./form-element/CopyToClipboard.vue";
import BaseInput from "./form-element/BaseInput.vue";
import BaseButton from "./form-element/BaseButton.vue";
export default defineComponent({
  components: {
    BaseInput,
    BaseButton,
    CopyToClipboard,
  },
  setup() {
    const links = ref(null);
    const link = ref("");
    const error = ref("");
    const isLoading = ref(false);

    const shortenLink = async (url) => {
      if (!url) {
        error.value = "Please add a link";
        return;
      }
      isLoading.value = true;
      const shortCode = await fetchData(url);
      console.log(shortCode);
      if (shortCode.ok) {
        if (!links.value) {
          links.value = [];
        }
        links.value.push({
          original: url,
          shortened: shortCode.result.full_short_link,
        });
        sessionStorage.setItem("shortened-links", JSON.stringify(links.value));
      } else {
        error.value = "Could not shorten the url";
      }
      isLoading.value = false;
      link.value = "";
    };

    onMounted(() => {
      links.value = JSON.parse(sessionStorage.getItem("shortened-links"));
    });
    return {
      error,
      isLoading,
      link,
      links,
      shortenLink,
    };
  },
});
</script>
<style lang="scss">
.shortener {
  width: 85%;
  margin: 0 auto;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  height: 16rem;
  z-index: 2;
  background: url("~@/assets/images/bg-shorten-desktop.svg"),
    $primary-color-violet;
  border-radius: 1rem;
  background-size: cover;
  margin-top: -13rem;
  @include screen(custom, max, 576) {
    background-image: url("~@/assets/images/bg-shorten-mobile.svg");
    background-color: $primary-color-violet;
    padding: 2.5rem 2rem;
  }
  &__form {
    display: flex;
    align-items: flex-start;
    width: 100%;
    @include screen(custom, max, 576) {
      flex-direction: column;
    }
    &-input {
      width: 95%;
      @include screen(custom, max, 576) {
        width: 100%;
        margin-bottom: 1rem;
      }
    }
    &-button {
      border-radius: 1rem;
      background: $primary-color-cyan;
      color: white;
      padding: 2rem 4rem;
      font-weight: bold;
      width: 18%;
      @include screen(custom, max, 576) {
        width: 100%;
        margin-top: 1rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
      }
    }
  }
}
.shortened-links {
  margin-top: 3rem;
  .article {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    background: white;
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    @include screen(custom, max, 576) {
    }
    p {
      font-size: 1.6rem;
      color: $neutral-dark-blue;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      overflow: hidden;
      max-width: 75%;
    }
  }
  .copy {
    display: flex;
    p {
      color: $primary-color-cyan;
    }
    button {
      width: 8rem;
      display: block;
      text-align: center;
      margin-left: 2rem;
      padding: 0.5rem 1rem;
      font-size: 1.4rem;
      border-radius: 0.5rem;
      color: white;
      background-color: $primary-color-cyan;
      &.copied {
        background: $neutral-dark-violet;
      }
    }
  }
}
</style>
