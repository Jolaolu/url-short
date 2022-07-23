<template>
  <base-button
    :class="{ copied: showCopied }"
    class="copy"
    @click="copyToClipboard(textToCopy)"
  >
    <span v-if="showCopied">copied!</span>
    <span v-else> copy </span>
  </base-button>
</template>
<script>
import { defineComponent, onBeforeUnmount, ref } from "vue";
import { toClipboard } from "@soerenmartius/vue3-clipboard";
import BaseButton from "./BaseButton.vue";

export default defineComponent({
  components: { BaseButton },
  props: {
    textToCopy: {
      type: String,
      required: true,
    },
  },
  setup() {
    const showCopied = ref(false);
    const timeout = ref(null);

    const copyToClipboard = (data) => {
      toClipboard(data);
      showCopied.value = true;
      timeout.value = setTimeout(() => {
        showCopied.value = false;
      }, 700);
    };

    onBeforeUnmount(() => {
      clearTimeout(timeout.value);
    });
    return {
      showCopied,
      copyToClipboard,
    };
  },
});
</script>
<style lang="scss">
.copy {
  width: 8rem;
}
</style>
