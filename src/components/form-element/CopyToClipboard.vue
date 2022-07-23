<template>
  <base-button
    ref="button"
    :class="{ copied: showCopied }"
    class="copy"
    @click="copyToClipboard(textToCopy)"
  >
    {{ showCopied ? "copied!" : "copy" }}
  </base-button>
</template>
<script>
import { defineComponent, ref, onBeforeUnmount } from "vue";
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

    const copyToClipboard = async (data) => {
      try {
        await toClipboard(data);
      } catch (error) {
        console.log(error);
      }
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
