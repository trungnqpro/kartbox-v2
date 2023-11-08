<script async setup lang="ts">
import { computed } from 'vue'
import {
  useAccount,
  useDisconnect,
  useConnect,
  useSignMessage,
} from 'use-wagmi'
import { useUser } from '~/stores/authUser'
import { useWalletStore } from '~/stores/wallet'
import {getListAccountStorage, isAccountStorageAvailable} from "~/utils/common";
const { setConnectWallet } = useWalletStore()
const emit = defineEmits(['closeModal'])
const config = useRuntimeConfig()
const props = defineProps({
  isLogin: {
    type: Boolean,
  },
})
const value = computed(() => props.isLogin)
const { login } = useUser()
const { address } = useAccount()
const { data: signMessageData, signMessageAsync } = useSignMessage()
const {
  connectors,
  isLoading,
  error,
  pendingConnector,
  connectAsync,
} = useConnect()
const { connector, isReconnecting } = useAccount()

const { disconnect } = useDisconnect()
const handleConnectWallet = async (connector: any) => {
  try {
    /** Connect wallet Wagmi **/
    await connectAsync({ connector })
    setConnectWallet(true)
    /** get signature User **/
    await signMessageAsync({ message: 'kartbox' })
    /** set localStorage **/
    const payload = [
      {
        publisher: 'metamask',
        chain: 'ethereum',
        address: address.value,
        signature: signMessageData.value,
      },
    ]
    if (isAccountStorageAvailable()) {
      const accounts = getListAccountStorage()
      await login(payload[0])
      if (!accounts.find((item) => item.address === payload[0].address)) {
        await accounts.push(...payload)
      }
      await localStorage.setItem('Accounts', JSON.stringify(accounts))
      navigateTo('/')
    } else {
      localStorage.setItem('Accounts', JSON.stringify(payload))
    }
    emit('rerender')
    emit('closeModal')
  } catch (error) {
    console.log(error, ['error ConnectWallet'])
    emit('closeModal')
  }
}
</script>

<template>
  <CommonModal v-model="value" class="modal-login">
    <div class="text-right p-3">
      <button @click="emit('closeModal')">
        <img src="/images/icons/clear.png" alt="" />
      </button>
    </div>
    <div class="p-8 pt-0">
      <span class="text-[40px] font-bold"> Log in to Kartbox </span> <br />
      <span
        >By connecting a wallet, you agree to
        <a class="text-[#E5A403]">Terms of Service</a> And
        <a class="text-[#E5A403]">Privacy Policy.</a>
      </span>
      <div class="grid gap-8 grid-cols-2 grid-row-2 py-8 text-[16px]">
        <button
          v-for="(item, idx) in connectors"
          :key="idx"
          class="w-full h-[51px] rounded flex gap-8 p-2 pl-4"
          style="background: rgba(255, 255, 255, 0.08)"
          :disabled="!item.ready || isReconnecting || connector?.id === item.id"
          @click="() => handleConnectWallet(item)"
        >
          <img :src="item.options.icon" />
          <span class="font-bold pt-1"> {{ item.name }} </span>
          <span v-if="!item.ready"> (unsupported)</span>
          <span v-if="isLoading && item.id === pendingConnector?.id">…</span>
        </button>
      </div>
    </div>
  </CommonModal>
</template>
