<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-container>
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
    
    <v-expansion-panels>
      <v-expansion-panel class="mt-4"
        title="Trades"
        @group:selected="loadTrades"
        >
        <v-expansion-panel-text class="text-caption">
          <VDataTableServer
            :headers="tradeHeaders"
            :items="store.trades"
            class="elevation-1"
            height="400"
            item-value="name"
            :loading="loading" :items-length="100"
            
          >
          <template v-slot:item.register="{item}">
            <router-link :to="`register/${item.value.register}`">{{ ellipsisAddress(item.value.register) }}</router-link>
          </template>
          <template v-slot:item.actors="{item}">
            <div class="text-no-wrap">seller: {{ ellipsisAddress(item.value.seller) }}</div>
            <div class="text-no-wrap">buyer: {{ ellipsisAddress(item.value.buyer) }}</div>
          </template>
          <template v-slot:item.address="{item}">
            <div class="text-no-wrap">address: {{ ellipsisAddress(item.value.address) }}</div>
            <div class="text-no-wrap" :class="item.value.approvedInRegister?'':'striked'">hash: {{ ellipsisCodehash(item.value.codehash) }}</div>
          </template>
          <template v-slot:item.quantity="{item}">
            <span>{{ to1000s(item.value.quantity) }}</span>
          </template>
          </VDataTableServer>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<style>
  .striked {
    text-decoration: line-through;
  }
</style>

<script lang="ts" setup>
  import {VDataTableServer} from "vuetify/labs/VDataTable"
  import router from "@/router";
  import {useAppStore} from "@/store/app";
  import { computed, onMounted, ref } from "vue";
  import { to1000s, ellipsisAddress, ellipsisCodehash } from "@/lib/utils";
  import { DataTableHeader } from "@/lib/vuetify-types";

  // initiatlize the store
  const store = useAppStore();

  onMounted(() => {
    console.log("Home.vue mounted");
    store.loadRegisters();
  });

  // create data fields
  const loading = ref(true);
  const registerNames = computed(() => store.registers.map((r) => ({display: `${r.name} - (${r.isin})`, address: r.address})))
  const tradeHeaders : DataTableHeader[] = [
    { title: "register", key: "register"},
    { title: "buyer/seller", key: "actors"},
    // { title: "seller", key: "seller"},
    // { title: "buyer", key: "buyer"},
    { title: "quantity", key: "quantity", align: "end"},
    { title: "trade", key: "address"},
  ]

  // Functions

  function goToRegister() {
    if (store.selectedRegister) router.push(`/register/${store.selectedRegister}`)
    store.selectedRegister=undefined;
  }

  function loadTrades() {
    loading.value = true;
    store.loadTrades().then(() => loading.value = false);
  }
</script>
