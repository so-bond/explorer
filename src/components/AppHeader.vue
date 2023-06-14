
<template>
  <div>
    <v-toolbar
      dark
      prominent
      
    >
      <v-app-bar-nav-icon @click="$router.push('/')"></v-app-bar-nav-icon>
      <img class="pa-8" height="100"
        src="https://raw.githubusercontent.com/so-bond/.github/main/images/so%7Cbond.svg"
      ><img>
      <v-toolbar-title> explorer - {{ $route.meta.title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn> -->
    </v-toolbar>
  </div>
</template>

<script lang="ts">
  export default {
    name: "AppHeader",
  };

</script>
