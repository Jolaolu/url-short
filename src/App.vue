<template>
  <main class="home">
    <base-header />
  </main>
</template>

<script>
import BaseHeader from "./components/layout/BaseHeader.vue";
export default {
  name: "App",
  components: { BaseHeader },
};
</script>

<style lang="scss">
.home {
  font-family: $font-primary;
  padding: 6rem 12rem 0;
}
</style>
