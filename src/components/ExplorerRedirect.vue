<script setup lang="ts">
  import { computed } from "vue";

  const props = defineProps({
    id: {
      type: [String, Number],
    },
    type: {
      type: String,
      required: true,
      validator(value: string) {
        // The value must match one of these strings
        return ['block', 'tx', 'token', 'account'].includes(value)
      }
    },
  });

  function getExplorerUrl() {
    const w: any = window;
    if (w.AppConfig && w.AppConfig.explorerUrl) {
      return w.AppConfig.explorerUrl;
    } else return undefined;
  }

  const url = computed(() => {
    let explorerUrl = getExplorerUrl();
    if (!explorerUrl) return "./";
    while (explorerUrl.endsWith('/')) explorerUrl = explorerUrl.slice(0, explorerUrl.length-1)
    const u = new URL(`${props.type}/${props.id}`, `${explorerUrl}/`)
    return u.href;
  });

  function open(url: string) {
    window.open(url, 'POCR-EXPLORER')
  }
</script>

<template>
  <span>
    <a v-if="$slots.default" :href="url" target="POCR-EXPLORER"><slot></slot></a>
    <v-icon v-else small color="blue" @click="open(url)">mdi-open-in-new</v-icon>
  </span>
</template>
