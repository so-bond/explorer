<template>
  <v-app>
    <v-main>
      <AppHeader />
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  // import Home from '@/views/Home.vue'
  import AppHeader from '@/components/AppHeader.vue'
</script>
