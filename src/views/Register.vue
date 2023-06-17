<template>
  <v-container>
    <RegisterDetails :address="register" />
    <v-expansion-panels multiple>
      <v-expansion-panel
        class="mt-4"
        title="Holders" eager
        >
        <v-expansion-panel-text >
          <RegisterInvestors :address="register" />
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
          class="mt-4"
          title="Events"
          eager
        >
        <v-expansion-panel-text >
          <RegisterEvents :address="register" />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts" setup>
  import RegisterDetails from "@/components/RegisterDetails.vue";
  import RegisterInvestors from "@/components/RegisterInvestors.vue";
  import RegisterEvents from "@/components/RegisterEvents.vue";
  // import {useAppStore} from "@/store/app";
  import { computed } from "vue";
  import { useRoute } from "vue-router";

  console.log("Register.vue", useRoute().params.address);
  
  // const store = useAppStore();
  let address = useRoute().params.address.toString();
  // if(Array.isArray(address)) address = address[0];
  const register = computed(() => address);
</script>
