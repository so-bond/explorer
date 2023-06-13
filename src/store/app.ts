// Utilities
import { listRegisters, RegisterId } from '@/lib'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    // @type: RegisterId[]
    registers: [] as RegisterId[],
    selectedRegister: undefined as string|undefined,
  }),

  actions: {
    async loadRegisters() {
      const l = await listRegisters();
      this.registers = l;
    },
  },
})
