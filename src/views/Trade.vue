<script lang="ts" setup>
  import RegisterDetails from "@/components/RegisterDetails.vue";
  import expl from "@/components/ExplorerRedirect.vue"
  import { TradeDetails, getTradeDetails, TradeStatus } from "@/lib";
  // import {useAppStore} from "@/store/app";
  import { computed, Ref, ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import { ellipsisAddress, ellipsisCodehash, to1000s } from "@/lib/utils";
  // const store = useAppStore();
  let address = useRoute().params.address.toString();
  // if(Array.isArray(address)) address = address[0];
  const register = computed(()=>trade.value?trade.value.register:undefined);
  const trade: Ref<TradeDetails|undefined> = ref(undefined);

  onMounted(() => {
    getTradeDetails(address).then(value=>trade.value=value)
  });
</script>

<template>
  <v-container>
    <RegisterDetails :address="register" />
    <v-card class="mt-8">
      <v-card-subtitle>Trade address: {{ address }}<expl type="address" :id="address"/></v-card-subtitle>
      <v-card-text v-if="trade">
        <v-row>
          <v-col class="v-col-4 v-col-lg-2">Seller:</v-col>
          <v-col class="v-col-8 v-col-lg-4">{{ ellipsisAddress(trade.seller) }}<expl type="address" :id="trade.seller"/></v-col>
          <v-col class="v-col-4 v-col-lg-2">Buyer:</v-col>
          <v-col class="v-col-8 v-col-lg-4">{{ ellipsisAddress(trade.buyer) }}<expl type="address" :id="trade.buyer"/></v-col>
          <v-col class="v-col-4 v-col-lg-2">Status:</v-col>
          <v-col class="v-col-8 v-col-lg-4">{{ TradeStatus[trade.status] }}</v-col>
          <v-col class="v-col-4 v-col-lg-2">Quantity:</v-col>
          <v-col class="v-col-8 v-col-lg-4">{{ to1000s(trade.quantity) }}</v-col>
          <v-col class="v-col-4 v-col-lg-2">Payment Id:</v-col>
          <v-col class="v-col-8 v-col-lg-4">{{ trade.paymentId }}</v-col>
          <v-col class="v-col-4 v-col-lg-2">Price:</v-col>
          <v-col class="v-col-8 v-col-lg-4">{{ to1000s(trade.price,4) }}%</v-col>
          <v-col class="v-col-4 v-col-lg-2">CodeHash:</v-col>
          <v-col class="v-col-8 v-col-lg-4">{{ trade.codehash?ellipsisCodehash(trade.codehash):'not found' }}</v-col>
          <v-col class="v-col-4 v-col-lg-2">Allowed:</v-col>
          <v-col class="v-col-8 v-col-lg-4">{{ trade.approvedInRegister?'Yes':'No' }}</v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
