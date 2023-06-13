// Utilities
import { awaitInitialization, listRegisters, RegisterId } from '@/lib'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    // @type: RegisterId[]
    registers: [] as RegisterId[],
    selectedRegister: undefined as string|undefined,
  }),

  actions: {
    async loadRegisters() {
      await awaitInitialization(3000);
      const l = await listRegisters();
      this.registers = l;
    },
  },
})
