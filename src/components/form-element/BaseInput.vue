<template>
  <input
    v-bind="$attrs"
    type="text"
    v-model="inputValue"
    placeholder="Shorten a link here..."
    class="input"
    autocomplete="none"
    :class="{ invalid: error }"
  />
  <p class="input-error" v-if="error">please add a link</p>
</template>
<style lang="scss">
.input {
  display: flex;
  width: 100%;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 1.2rem;
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
