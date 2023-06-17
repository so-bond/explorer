<script setup lang="ts">
  import { to1000s } from '@/lib/utils';
  import { RegisterDetails, getRegisterDetails, InvestorInfo, getRegisterInvestors } from '@/lib';
  import { Ref, onMounted, ref, watch } from 'vue';

  const props = defineProps({
    address: String,
  })

  const details: Ref<RegisterDetails|undefined> = ref(undefined);
  const investors: Ref<InvestorInfo[]> = ref([]);
  const message: Ref<string> = ref('');

  const loadRegister = async (address: string|undefined) => {
    //message.value = '';
    try {
      if (address) {
        details.value = await getRegisterDetails(address);
        investors.value = await getRegisterInvestors(address);
      } else {
        details.value = undefined;
        investors.value = [];
        message.value = "No register selected";
      }
    } catch (error) {
      console.log("Exception when loading the register", error);
      details.value = undefined;
      investors.value = [];
      message.value = (error as Error).message
    }
  };

  watch(()=>props.address,async (address) => {
    message.value = "Loading holders...";
    await loadRegister(address as string)
    message.value = "";
  });

  onMounted(() => {
    message.value = "Loading holders...";
    loadRegister(props.address).then(() => {
      message.value = "";
    });
  });


</script>

<template>
  <table v-if="details && investors.length > 0"
    class="w-100"
    >
    <thead>
      <tr>
        <th>controlled by</th>
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