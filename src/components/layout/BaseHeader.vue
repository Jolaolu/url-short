<template>
  <header class="header">
    <div class="header-menu">
      <logo-icon class="header-logo" />
      <base-button
        class="header-hamburger"
        @click="isHamburgerToggled = !isHamburgerToggled"
      >
        <hamburger-icon class="" />
      </base-button>
    </div>
    <nav :class="{ '-hidden': isHamburgerToggled }" class="header-nav">
      <div class="header-links">
        <!-- this should ordinarily be a 
        router-link but doesn't make sense to use a router
         since we are not implementing other pages -->
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
      </div>
      <div class="header-auth">
        <a class="login" href="#">Login</a>
        <a class="signup btn" href="#">Sign Up</a>
      </div>
    </nav>
  </header>
</template>
<script>
import { defineComponent, ref } from "vue";
import LogoIcon from "../icons/LogoIcon.vue";
import HamburgerIcon from "../icons/HamburgerIcon.vue";
import BaseButton from "../form-element/BaseButton.vue";

export default defineComponent({
  setup() {
    const isHamburgerToggled = ref(true);
    return {
      isHamburgerToggled,
    };
  },
  components: { LogoIcon, HamburgerIcon, BaseButton },
});
</script>
<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: bold;
  padding: 0 12rem;
  @include screen(custom, max, 576) {
    align-items: center;
    flex-direction: column;
    padding: 0 2rem;
  }
  &-hamburger {
    display: none;
    @include screen(custom, max, 576) {
      display: block;
      color: $neutral-gray-violet;
    }
  }
  &-menu {
    display: flex;
    align-items: flex-start;
    margin-bottom: 2rem;
    justify-content: space-between;
    @include screen(custom, max, 576) {
      width: 100%;
    }
  }
  &-nav {
    width: 80%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @include screen(custom, max, 576) {
      z-index: 2;
      width: 100%;
      align-items: center;
      flex-direction: column;
      background: $primary-color-violet;
      border-radius: 1.5rem;
      color: white;
      text-align: center;
      padding: 4rem 3rem;
    }
    &.-hidden {
      @include screen(custom, max, 576) {
        display: none;
      }
    }
  }
  &-logo {
    color: black;
    margin-right: 5rem;
  }
  &-links {
    @include screen(custom, max, 576) {
      display: flex;
      flex-direction: column;
    }
    a {
      margin-right: 3rem;
      @include screen(custom, max, 576) {
        margin-right: 0;
        margin-bottom: 3rem;
      }
      &:hover {
        color: $neutral-dark-blue;
      }
    }
  }
  &-auth {
    @include screen(custom, max, 576) {
      display: flex;
      flex-direction: column;
    }
    .login {
      margin-right: 4rem;
      @include screen(custom, max, 576) {
        padding-top: 3rem;
        border-top: 1px solid $neutral-gray-violet;
        margin-right: 0;
        margin-bottom: 3rem;
      }
    }
    a:nth-child(2) {
      background: $primary-color-cyan;
      padding: 1rem 3rem;
      color: white;
      border-radius: 3.5rem;
    }
  }
}
</style>
