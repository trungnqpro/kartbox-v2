import { useStorage } from '@vueuse/core'



export const isAccountStorageAvailable = () => {
  return useStorage('Accounts', []).value.length
}
