<script setup lang="ts">
  import { to1000s, toDate, toDateTime, toTime } from '@/lib/utils';
  import { RegisterStatus, RegisterDetails, getRegisterDetails} from '@/lib';
  import { Ref, onMounted, ref, watch } from 'vue';
  import expl from "@/components/ExplorerRedirect.vue"

  const props = defineProps({
    address: String,
  })
  const details: Ref<RegisterDetails|undefined> = ref(undefined);
  const message: Ref<string> = ref('');

  const loadRegister = async (address: string|undefined) => {
    message.value = '';
    try {
      if (address) {
        details.value = await getRegisterDetails(address);
      } else {
        details.value = undefined;
        message.value = "No register selected";
      }
    } catch (error) {
      console.log("Exception when loading the register", error);
      
      details.value = undefined;
      message.value = (error as Error).message
    }
  };

  watch(()=>props.address,async (address) => {
    await loadRegister(address as string)
  });

  onMounted(() => {
    loadRegister(props.address)
  });


</script>

<template>
  <v-card v-if="details">
    <v-card-subtitle>Register address: {{ address }}<expl type="token" :id="address"/> </v-card-subtitle>
    <v-card-text>
      <v-row>
        <v-col class="v-col-4 v-col-lg-2">Name:</v-col>
        <v-col class="v-col-8 v-col-lg-4">{{ details.name }}</v-col>
        <v-col class="v-col-4 v-col-lg-2">ISIN:</v-col>
        <v-col class="v-col-8 v-col-lg-4">{{ details.isin }}</v-col>
        <v-col class="v-col-4 v-col-lg-2">Units:</v-col>
        <v-col class="v-col-8 v-col-lg-4">{{ to1000s(details.expectedSupply) }} x {{ to1000s(details.unitValue) }} {{ details.currency }}</v-col>
        <v-col class="v-col-4 v-col-lg-2">Supply expected:</v-col>
        <v-col class="v-col-8 v-col-lg-4">{{ to1000s(details.expectedSupply * details.unitValue) }} {{ details.currency }}</v-col>
        <v-col class="v-col-4 v-col-lg-2">Coupon rate:</v-col>
        <v-col class="v-col-8 v-col-lg-4">{{ details.couponRate }} % p.a.</v-col>
        <v-col class="v-col-4 v-col-lg-2">Current supply:</v-col>
        <v-col class="v-col-8 v-col-lg-4">{{ to1000s(details.currentSupply * details.unitValue) }} {{ details.currency }}</v-col>
        <v-col class="v-col-4 v-col-lg-2">Status:</v-col>
        <v-col class="v-col-8 v-col-lg-4">{{ RegisterStatus[details.status] }}</v-col>
        <v-col class="v-col-4 v-col-lg-2">Creation:</v-col>
        <v-col class="v-col-8 v-col-lg-4">{{ toDate(details.creationDate) }}</v-col>
        <v-col class="v-col-4 v-col-lg-2">Issuance:</v-col>
        <v-col class="v-col-8 v-col-lg-4">{{ toDate(details.issuanceDate) }}</v-col>
        <v-col class="v-col-4 v-col-lg-2">Maturity:</v-col>
        <v-col class="v-col-8 v-col-lg-4">{{ toDate(details.maturityDate) }}</v-col>
        <v-col class="v-col-4 v-col-lg-2">Coupons:</v-col>
        <v-col class="v-col-8 v-col-lg-4">{{ details.couponDates.map(d=> toDate(d)).join(' | ') }}</v-col>
        <v-col class="v-col-4 v-col-lg-2">Record time:</v-col>
        <v-col class="v-col-8 v-col-lg-4">{{ toTime(details.cutOffTime) }}</v-col>
        <v-col class="v-col-4 v-col-lg-2">Next coupon date:</v-col>
        <v-col class="v-col-8 v-col-lg-4">{{ toDate(details.currentCouponDate) }}</v-col>
        <v-col class="v-col-4 v-col-lg-2">Next snapshot at:</v-col>
        <v-col class="v-col-8 v-col-lg-4">{{ toDateTime(details.currentSnapshotTimestamp) }}</v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <div v-else>{{ message }}</div>
</template>

<style scoped>
  table {
    border-collapse: collapse;
  }
  tr {
    border-bottom: 1px solid #000000;
  }
</style>