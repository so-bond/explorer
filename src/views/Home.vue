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
      >
    </v-autocomplete>
    <RegisterDetails :address="store.selectedRegister" />
  </v-container>
</template>

<script lang="ts" setup>
  import RegisterDetails from "@/components/RegisterDetails.vue";
  import {useAppStore} from "@/store/app";
  import { computed } from "vue";

  // initiatlize the store
  const store = useAppStore();
  store.loadRegisters();

  // create data fields

  const registerNames = computed(() => store.registers.map((r) => ({display: `${r.name} - (${r.isin})`, address: r.address})))

  // Functions

  // function whenClicked() {
  //   console.log("clicked", {...store.registers});
  // }
</script>
