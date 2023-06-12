
<template>
  <div>
    <v-toolbar
      dark
      prominent
      
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-img inline :width="100" 
        src="@/assets/so|bond.svg"
      ></v-img>
      <v-toolbar-title> explorer</v-toolbar-title>

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