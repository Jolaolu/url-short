<template>
  <header class="header">
    <div class="header-nav">
      <logo-icon class="header-logo" />
      <nav class="">
        <div class="header-links">
          <!-- this should ordinarily be nuxt-link or 
        router link but doesn't make sense to use a router
         since we are not implementing other pages -->
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
      </nav>
    </div>

    <div class="header-auth">
      <a class="login" href="#">Login</a>
      <a class="signup btn" href="#">Sign Up</a>
    </div>
  </header>
</template>
<script>
import { defineComponent } from "vue";
import LogoIcon from "../icons/LogoIcon.vue";

export default defineComponent({
  setup() {},
  components: { LogoIcon },
});
</script>
<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 0 12rem;
  &-nav {
    display: flex;
  }
  &-logo {
    color: black;
    margin-right: 5rem;
  }
  &-links {
    a {
      margin-right: 3rem;
      &:hover {
        color: $neutral-dark-blue;
      }
    }
  }
  &-auth {
    .login {
      margin-right: 4rem;
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
