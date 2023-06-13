<script setup lang="ts">
  import { to1000s, toDate, toDateTime, toTime } from '@/lib/utils';
  import { RegisterStatus, RegisterDetails, getRegisterDetails, DecodedEvent, loadEventsForRegister, InvestorInfo, getRegisterInvestors } from '@/lib';
  import { Ref, ref, watch } from 'vue';
  import expl from "@/components/ExplorerRedirect.vue"

  const props = defineProps({
    address: String,
  })
  const details: Ref<RegisterDetails|undefined> = ref(undefined);
  const events: Ref<DecodedEvent[]> = ref([]);
  const investors: Ref<InvestorInfo[]> = ref([]);

  watch(()=>props.address, async (address) => {
    if (address) {
      details.value = await getRegisterDetails(address);
      events.value = await loadEventsForRegister(address);
      investors.value = await getRegisterInvestors(address);
    } else {
      details.value = undefined;
      events.value = [];
      investors.value = [];
    }
  })

</script>

<template>
  <div v-if="details">
    <v-card v-if="details">
      <v-card-subtitle>address: {{ address }}<expl type="token" :id="address"/> </v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-col cols="2">Name:</v-col>
          <v-col cols="4">{{ details.name }}</v-col>
          <v-col cols="2">ISIN:</v-col>
          <v-col cols="4">{{ details.isin }}</v-col>
          <v-col cols="2">Units:</v-col>
          <v-col cols="4">{{ to1000s(details.expectedSupply) }} x {{ to1000s(details.unitValue) }} {{ details.currency }}</v-col>
          <v-col cols="2">Supply expected:</v-col>
          <v-col cols="4">{{ to1000s(details.expectedSupply * details.unitValue) }} {{ details.currency }}</v-col>
          <v-col cols="2">Coupon rate:</v-col>
          <v-col cols="4">{{ details.couponRate }} % p.a.</v-col>
          <v-col cols="2">Current supply:</v-col>
          <v-col cols="4">{{ to1000s(details.currentSupply * details.unitValue) }} {{ details.currency }}</v-col>
          <v-col cols="2">Status:</v-col>
          <v-col cols="4">{{ RegisterStatus[details.status] }}</v-col>
          <v-col cols="2">Creation:</v-col>
          <v-col cols="4">{{ toDate(details.creationDate) }}</v-col>
          <v-col cols="2">Issuance:</v-col>
          <v-col cols="4">{{ toDate(details.issuanceDate) }}</v-col>
          <v-col cols="2">Maturity:</v-col>
          <v-col cols="4">{{ toDate(details.maturityDate) }}</v-col>
          <v-col cols="2">Coupons:</v-col>
          <v-col cols="4">{{ details.couponDates.map(d=> toDate(d)).join(' | ') }}</v-col>
          <v-col cols="2">Record time:</v-col>
          <v-col cols="4">{{ toTime(details.cutOffTime) }}</v-col>
          <v-col cols="2">Next coupon date:</v-col>
          <v-col cols="4">{{ toDate(details.currentCouponDate) }}</v-col>
          <v-col cols="2">Next snapshot at:</v-col>
          <v-col cols="4">{{ toDateTime(details.currentSnapshotTimestamp) }}</v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-expansion-panels>
      <v-expansion-panel
        class="mt-4"
        title="Holders"
        >
        <v-expansion-panel-text >
          <table v-if="investors.length > 0"
            class="w-100"
            >
            <thead>
              <tr>
                <th>control by</th>
                <th>holder address</th>
                <th>balance</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="investor of investors" :key="investor.address">
                <td class="text-caption">{{ investor.custodian }}</td>
                <td class="text-caption" :class="investor.allowed?'':'text-decoration-line-through'">{{ investor.address }}</td>
                <td class="text-caption">{{ to1000s(investor.balance * details.unitValue) }} {{ details.currency }}</td>
              </tr>
            </tbody>
          </table>
          <div v-else>No investor</div>
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel
          class="mt-4"
          title="Events"
        >
        <v-expansion-panel-text >
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>event</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="event of events" :key="event.id">
                <td class="text-caption" style="width: 85px; vertical-align: top;"><expl type="block" :id="event.blockNumber" >{{ event.blockNumber }}</expl> / {{ event.logIndex }}</td>
                <td class="text-caption">{{ event.display }}</td>
              </tr>
            </tbody>
          </table>

        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
  <div v-else>No register selected</div>
</template>

<style scoped>
  table {
    border-collapse: collapse;
  }
  tr {
    border-bottom: 1px solid #000000;
  }
</style>