<template>
  <v-container>
    <RegisterDetails :address="register" />
  </v-container>
</template>

<script lang="ts" setup>
  import RegisterDetails from "@/components/RegisterDetails.vue";
  // import {useAppStore} from "@/store/app";
  import { computed } from "vue";
  import { useRoute } from "vue-router";

  console.log("Register.vue", useRoute().params.address);
  
  // const store = useAppStore();
  let address = useRoute().params.address.toString();
  // if(Array.isArray(address)) address = address[0];
  const register = computed(() => address);
</script>
