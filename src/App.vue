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
      <link-shortener />
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
import { defineComponent } from "vue";
import { cardsContent } from "./helpers";
import BaseHeader from "./components/layout/BaseHeader.vue";
import BaseFooter from "./components/layout/BaseFooter.vue";
import BaseCard from "./components/BaseCard.vue";
import LinkShortener from "./components/LinkShortener.vue";

export default defineComponent({
  name: "App",
  components: {
    BaseHeader,
    BaseFooter,
    BaseCard,
    LinkShortener,
  },
  setup() {
    return {
      cardsContent,
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
