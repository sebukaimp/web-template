
import { defineStore } from 'pinia';


export const useBonoStore = defineStore('bonoStore', {
  state: () => ({
    bonoData: null as any,
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchBonoData(bonoId: string) {
      this.loading = true;
      this.error = null;

      try {
        const response = await fetch(`https://main.d3200t5poujf7w.amplifyapp.com/bono/locale/3k9mpk`);
        if (!response.ok) throw new Error('No se pudo obtener el bono');
        this.bonoData = await response.json();
      } catch (err) {
        this.error = (err as Error).message;
      } finally {
        this.loading = false;
      }
    },
  },
});
