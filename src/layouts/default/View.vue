<template>
  <v-main>
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';

  //
  console.log("Default.vue", useRoute().name);
</script>
