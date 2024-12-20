import { defineStore } from 'pinia'
import type { WebBonoType } from '~/types/BonosTypes'
export const useBonosStore = defineStore('UseBonos', () => {
  const baseUrl = 'https://main.d3200t5poujf7w.amplifyapp.com/bono/locale'
  const bonoId = ref('3k9mpk')
  const bonoData = ref<WebBonoType | null>(null)


  const getBono = async () => {
    try {
      const response = await useFetch<WebBonoType>(`${baseUrl}/${bonoId.value}`)
      bonoData.value = response.data.value
      console.log(bonoData.value)
    } catch (error) {
      console.error('Error fetching bono:', error)
      throw error
    }
  }




  return {
    getBono,
    bonoId,
    bonoData
  }
})
