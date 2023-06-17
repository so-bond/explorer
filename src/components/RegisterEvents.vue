<script setup lang="ts">
  import { DecodedEvent, loadEventsForRegister } from '@/lib';
  import { Ref, onMounted, ref, watch } from 'vue';
  import expl from "@/components/ExplorerRedirect.vue"

  const props = defineProps({
    address: String,
  })
  const events: Ref<DecodedEvent[]> = ref([]);
  const message: Ref<string> = ref('');

  const loadRegister = async (address: string|undefined) => {
    // message.value = '';
    try {
      if (address) {
        events.value = await loadEventsForRegister(address);
      } else {
        events.value = [];
        message.value = "No register selected";
      }
    } catch (error) {
      console.log("Exception when loading the register", error);
      
      events.value = [];
      message.value = (error as Error).message
    }
  };

  watch(()=>props.address,async (address) => {
    message.value = "Loading events...";
    await loadRegister(address as string)
    message.value = "";
  });
  
  onMounted(() => {
    message.value = "Loading events...";
    loadRegister(props.address).then(() => {
      message.value = "";
    });
  });


</script>

<template>
  <table v-if="!message">
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