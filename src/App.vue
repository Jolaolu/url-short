<template>
  <main class="home">
    <base-header />
    <section class="home-hero">
      <div class="home-hero__text">
        <h1 class="home-hero__title">More than just shorter links</h1>
        <p class="home-hero__subtitle">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <a class="home-cta__btn btn" href="#">Get Started</a>
      </div>
      <div class="home-hero__image">
        <img
          :src="require('@/assets/images/illustration-working.svg')"
          alt=""
          srcset=""
        />
      </div>
    </section>
    <section class="home-statistics">
      <div class="home-shortener">
        <div class="home-shortener__form">
          <base-input
            class="home-shortener__form-input"
            @update:modelValue="(newValue) => (link = newValue)"
            :modelValue="link"
            :error="error"
          />
          <base-button
            @click="shortenLink(link)"
            class="home-shortener__form-button btn"
            >Shorten It!</base-button
          >
        </div>
      </div>
      <div v-if="links && links.length > 0" class="home-shortened-links">
        <article class="article" v-for="(link, index) in links" :key="index">
          <p>{{ link.original }}</p>
          <div class="copy">
            <p>{{ link.shortened }}</p>
            <copy-to-clipboard :text-to-copy="link.shortened" />
          </div>
        </article>
      </div>
      <div class="home-statistics-content">
        <h2 class="home-statistics-title">Advanced Statistics</h2>
        <p class="home-statistics-subtitle">
          Track how your links are performing across the web with our advanced
          statisties dashboard
        </p>
      </div>
      <div class="statistics-cards">
        <base-card
          v-for="(card, index) in cardsContent"
          :key="index"
          :card="card"
          :index="index"
        />
      </div>
    </section>
    <section class="home-cta">
      <h1 class="home-cta__title">Boost your links today</h1>
      <a class="home-cta__btn btn" href="#">Get Started</a>
    </section>
    <base-footer />
  </main>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { fetchData } from "./services";
import { cardsContent } from "./helpers";
import BaseHeader from "./components/layout/BaseHeader.vue";
import BaseInput from "./components/form-element/BaseInput.vue";
import BaseButton from "./components/form-element/BaseButton.vue";
import BaseFooter from "./components/layout/BaseFooter.vue";
import BaseCard from "./components/BaseCard.vue";
import CopyToClipboard from "./components/form-element/CopyToClipboard.vue";

export default defineComponent({
  name: "App",
  components: {
    BaseHeader,
    BaseInput,
    BaseButton,
    BaseFooter,
    BaseCard,
    CopyToClipboard,
  },
  setup() {
    const links = ref(null);
    const link = ref("");
    const error = ref("");

    const shortenLink = async (url) => {
      if (!url) {
        error.value = "Please add a link";
        return;
      }
      const shortCode = await fetchData(url);
      if (shortCode.ok) {
        if (!links.value) {
          links.value = [];
        }
        links.value.push({
          original: url,
          shortened: shortCode.result.short_link,
        });
        sessionStorage.setItem("shortened-links", JSON.stringify(links.value));
      } else {
        error.value = "Could not shorten the url";
      }
    };

    onMounted(() => {
      links.value = JSON.parse(sessionStorage.getItem("shortened-links"));
    });
    return {
      error,
      link,
      links,
      cardsContent,
      shortenLink,
    };
  },
});
</script>

<style lang="scss">
.home {
  color: $neutral-gray;
  font-family: $font-primary;
  padding-top: 6rem;
  max-width: $breakpoint-desktop;
  font-size: $body-font-size;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  &-hero {
    display: flex;
    position: relative;
    padding: 12rem 12rem 15rem;
    margin-bottom: 6rem;
    @include screen(custom, max, 576) {
      padding: 0 0 6rem;
      margin-bottom: 12rem;
      flex-direction: column-reverse;
    }
    &__title {
      font-weight: bold;
      font-size: 8rem;
      color: black;
      margin-top: 3rem;
      @include screen(custom, max, 576) {
        font-size: 3rem;
        max-width: 70%;
        margin: 3rem auto;
        text-align: center;
      }
    }
    &__text {
      max-width: 60rem;
      @include screen(custom, max, 576) {
        padding: 0 3rem;
        text-align: center;
      }
    }
    &__image {
      img {
        position: absolute;
        right: -12rem;
        top: 8rem;
        @include screen(custom, max, 576) {
          position: relative;
          top: 0;
          right: -10rem;
        }
      }
    }
    &__subtitle {
      font-size: 2.2rem;
      padding-bottom: 5rem;
      @include screen(custom, max, 576) {
        font-size: 1.8rem;
        text-align: center;
      }
    }
  }
  &-statistics {
    position: relative;
    padding: 5rem 0;
    width: 100%;
    background: #f0f1f6;
    &-content {
      padding-top: 8rem;
      text-align: center;
      width: 55rem;
      margin: 0 auto;
      @include screen(custom, max, 576) {
        width: 82%;
      }
    }
    &-title {
      color: #000;
      font-size: 3rem;
      @include screen(custom, max, 576) {
        margin-top: 1.8rem;
      }
    }
    &-subtitle {
      color: $neutral-gray-violet;
      font-size: 2rem;
      @include screen(custom, max, 576) {
        margin-top: 1.8rem;
        font-size: 1.6rem;
      }
    }
    .statistics-cards {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding: 15rem 0 8rem;
      @include screen(custom, max, 576) {
        flex-direction: column;
        align-items: center;
      }
    }
  }
  &-shortener {
    width: 85%;
    margin: 0 auto;
    padding: 0 4rem;
    display: flex;
    align-items: center;
    height: 16rem;
    z-index: 2;
    background: url("~assets/images/bg-shorten-desktop.svg"),
      $primary-color-violet;
    border-radius: 1rem;
    background-size: cover;
    margin-top: -13rem;
    @include screen(custom, max, 576) {
      background-image: url("~assets/images/bg-shorten-mobile.svg");
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
  &-shortened-links {
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
  &-cta {
    background-size: cover;
    height: 25rem;
    background: url("~assets/images/bg-boost-desktop.svg"),
      $primary-color-violet;
    text-align: center;
    padding: 5rem 0;
    @include screen(custom, max, 576) {
      background-size: cover;
      height: 20rem;
      background-image: url("~assets/images/bg-boost-mobile.svg");
      background-color: $primary-color-violet;
    }
    &__btn {
      background: $primary-color-cyan;
      padding: 1.2rem 4rem;
      color: white;
      font-size: $body-font-size;
      font-weight: bold;
      border-radius: 3.5rem;
      @include screen(custom, max, 576) {
        font-size: 1.6rem;
        padding: 1.2rem 2rem;
      }
    }
    &__title {
      font-size: 4.5rem;
      color: white;
      margin-bottom: 4rem;
      @include screen(custom, max, 576) {
        font-size: 2rem;
      }
    }
  }
}
.btn {
  &:hover {
    opacity: 0.7;
  }
  &:visited {
    color: white;
  }
}
</style>
