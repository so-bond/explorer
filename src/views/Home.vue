<template>
  <v-container>
    <!-- <v-btn @click="whenClicked">Button</v-btn> -->
    <v-autocomplete 
      :items="registerNames"
      item-title="display"
      item-value="address"
      v-model="store.selectedRegister"
      label="Select a register"
      clearable
      @update:modelValue="goToRegister"
      >
    </v-autocomplete>
    <!-- <RegisterDetails :address="store.selectedRegister" /> -->
  </v-container>
</template>

<script lang="ts" setup>
  // import RegisterDetails from "@/components/RegisterDetails.vue";
  import router from "@/router";
  import {useAppStore} from "@/store/app";
  import { computed, onMounted } from "vue";

  // initiatlize the store
  const store = useAppStore();

  onMounted(() => {
    console.log("Home.vue mounted");
    store.loadRegisters();
  });

  // create data fields

  const registerNames = computed(() => store.registers.map((r) => ({display: `${r.name} - (${r.isin})`, address: r.address})))

  // Functions

  function goToRegister() {
    if (store.selectedRegister) router.push(`/register/${store.selectedRegister}`)
    store.selectedRegister=undefined;
  }
</script>
