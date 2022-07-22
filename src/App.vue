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
          <base-input class="home-shortener__form-input" />
          <base-button class="home-shortener__form-button btn"
            >Shorten It!</base-button
          >
        </div>
      </div>
      <div class="hoe-shortened-links"></div>
      <div class="home-statistics-content">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statisties dashboard
        </p>
      </div>
      <div class="statistics-card"></div>
    </section>
    <section class="home-cta">
      <h1 class="home-cta__title">Boost your links today</h1>
      <a class="home-cta__btn btn" href="#">Get Started</a>
    </section>
    <base-footer />
  </main>
</template>

<script>
import BaseHeader from "./components/layout/BaseHeader.vue";
import BaseInput from "./components/form-element/BaseInput.vue";
import BaseButton from "./components/form-element/BaseButton.vue";
import BaseFooter from "./components/layout/BaseFooter.vue";
export default {
  name: "App",
  components: {
    BaseHeader,
    BaseInput,
    BaseButton,
    BaseFooter,
  },
};
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
    @include screen(custom, max, $breakpoint-middle) {
      padding: 0;
    }
    &__title {
      font-weight: bold;
      font-size: 8rem;
      color: black;
      margin-top: 3rem;
    }
    &__text {
      max-width: 60rem;
    }
    &__image {
      img {
        position: absolute;
        right: -12rem;
        top: 8rem;
      }
    }
    &__subtitle {
      font-size: 2.2rem;
      padding-bottom: 5rem;
    }
  }
  &-statistics {
    position: relative;
    padding: 5rem 0;
    width: 100%;
    background: rgba($color: #c4c4c4, $alpha: 0.5);
  }
  &-shortener {
    width: 85%;
    margin: 0 auto;
    padding: 4rem 7rem;
    height: 15rem;
    z-index: 2;
    background: url("~assets/images/bg-shorten-desktop.svg"),
      $primary-color-violet;
    border-radius: 1rem;
    background-size: cover;
    margin-top: -13rem;
    &__form {
      display: flex;
      &-input {
        width: 80%;
        margin-right: 2rem;
      }
      &-button {
        border-radius: 1rem;
        background: $primary-color-cyan;
        color: white;
        padding: 1rem 4rem;
        font-weight: bold;
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
    &__btn {
      background: $primary-color-cyan;
      padding: 1.2rem 4rem;
      color: white;
      font-size: $body-font-size;
      font-weight: bold;
      border-radius: 3.5rem;
    }
    &__title {
      font-size: 4.5rem;
      color: white;
      margin-bottom: 4rem;
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
