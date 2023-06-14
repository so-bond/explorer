// Utilities
import { awaitInitialization, listRegisters, RegisterId, listTrades, TradeBase } from '@/lib'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    // @type: RegisterId[]
    registers: [] as RegisterId[],
    selectedRegister: undefined as string|undefined,

    trades: [] as TradeBase[],
  }),

  actions: {
    async loadRegisters() {
      const l = await listRegisters();
      this.registers = l;
      
    },
    async loadTrades() {
      if (this.trades.length==0) {
        this.trades = await listTrades();
      }
    }
  },
})
