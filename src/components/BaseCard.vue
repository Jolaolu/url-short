<template>
  <article class="statistics-card">
    <div class="card-img">
      <img
        :src="require(`@/assets/images/${card.image}`)"
        :alt="card.title"
        srcset=""
      />
    </div>

    <h3>{{ card.title }}</h3>
    <p>{{ card.content }}</p>
  </article>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    card: {
      type: Object,
      required: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.statistics-card {
  padding: 2rem 3rem 4rem;
  background-color: white;
  width: 32rem;
  margin: 0 2rem;
  text-align: left;
  border-radius: 0.5rem;
  @include screen(custom, max, 576) {
    width: 90%;
    margin: 0 0 5rem;
    text-align: center;
  }
  h3 {
    color: black;
  }
  p {
    font-size: 1.5rem;
  }
  .card-img {
    width: 8rem;
    height: 8rem;
    margin-top: -7rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: $neutral-dark-violet;
    @include screen(custom, max, 576) {
      margin: -7rem auto 2rem;
    }
  }
  &:nth-of-type(2) {
    margin-top: 6rem;
    @include screen(custom, max, 576) {
      margin-top: 5rem;
    }
  }
  &:nth-of-type(3) {
    margin-top: 12rem;
    @include screen(custom, max, 576) {
      margin-top: 5rem;
    }
  }
}
</style>
