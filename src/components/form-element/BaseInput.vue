<template>
  <input
    v-bind="$attrs"
    type="text"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="Shorten a link here..."
    class="input"
    autocomplete="none"
    :class="{ invalid: error }"
  />
  <p class="input-error" v-if="error">error</p>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["modelValue", "error"],
  emits: ["update:modelValue"],
  setup() {},
});
</script>

<style lang="scss">
.input {
  display: flex;
  width: 100%;
  font-size: 2rem;
  padding: 1.8rem;
  border-radius: 1.2rem;
  color: $neutral-gray;
  @include screen(custom, max, 576) {
    font-size: 1.5rem;
    padding: 1.3rem 2rem;
  }
  &:focus {
    &.invalid {
      color: $secondary-color;
      border: $secondary-color;
      &::placeholder {
        color: $secondary-color;
      }
    }
  }

  &-error {
    color: $secondary-color;
  }
}
</style>
