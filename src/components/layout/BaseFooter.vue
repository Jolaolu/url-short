<template>
  <footer class="footer">
    <logo-icon class="logo" />
    <nav class="footer-links">
      <ul class="Features">
        <li v-for="(link, index) in features" :key="index">
          <a href="#" v-if="index !== 0">{{ link }}</a>
          <p v-else>{{ link }}</p>
        </li>
      </ul>
      <ul class="resources">
        <li v-for="(link, index) in resources" :key="index">
          <a href="#" v-if="index !== 0">{{ link }}</a>
          <p v-else>{{ link }}</p>
        </li>
      </ul>
      <ul class="company">
        <li v-for="(link, index) in company" :key="index">
          <a href="#" v-if="index !== 0">{{ link }}</a>
          <p v-else>{{ link }}</p>
        </li>
      </ul>
    </nav>
    <ul class="footer-icons">
      <li>
        <a href="#">
          <facebook-icon />
        </a>
      </li>
      <li>
        <a href="#">
          <twitter-icon />
        </a>
      </li>
      <li>
        <a href="#">
          <pinterest-icon />
        </a>
      </li>
      <li>
        <a href="#">
          <instagram-icon />
        </a>
      </li>
    </ul>
  </footer>
</template>
<script>
import { defineComponent } from "vue";
import LogoIcon from "../icons/LogoIcon.vue";
import FacebookIcon from "../icons/FacebookIcon.vue";
import TwitterIcon from "../icons/TwitterIcon.vue";
import PinterestIcon from "../icons/PinterestIcon.vue";
import InstagramIcon from "../icons/InstagramIcon.vue";

export default defineComponent({
  components: {
    LogoIcon,
    FacebookIcon,
    TwitterIcon,
    PinterestIcon,
    InstagramIcon,
  },
  setup() {
    const company = ["Company", "About", "Our Team", "Careers", "Contact"];
    const resources = ["Resources", "Blog", "Developers", "Support"];
    const features = [
      "Features",
      "Link Shortening",
      "Branded Links",
      "Analytics",
    ];
    return {
      features,
      company,
      resources,
    };
  },
});
</script>
<style lang="scss">
.footer {
  min-height: 20%;
  padding-bottom: 6rem;
  padding: 6rem 12rem 8rem;
  background: $neutral-dark-blue;
  display: flex;
  justify-content: center;
  @include screen(small) {
  }
  &-links {
    display: flex;
    align-items: flex-start;
    & > ul {
      margin-right: 10rem;
      li {
        color: $neutral-gray;
        font-size: 1.4rem;
        margin-bottom: 1rem;
        &:hover {
          color: $primary-color-cyan;
        }
        &:first-child {
          color: white;
          margin-bottom: 2rem;
          font-weight: bold;
          font-size: 1.8rem;
        }
      }
    }
  }
  &-icons {
    display: flex;
    align-items: flex-start;
    li {
      margin-right: 2.8rem;
      & svg {
        color: white;
        &:hover {
          color: $primary-color-cyan;
        }
      }
    }
  }
  .logo {
    margin-right: 15rem;
    color: white;
  }
}
</style>
