<script async setup lang="ts">
import { computed } from 'vue'
import {
  useAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useConnect,
  useSignMessage,
} from 'use-wagmi'
import { useUser } from '~/stores/authUser'
import { useWalletStore } from '~/stores/wallet'
const props = defineProps({
  isLogin: {
    type: Boolean,
  },
})
const value = computed(() => props.isLogin)
const { login, getProfileUser, getProfile, updateProfile, getWallet } = useUser()
const { SignMessage, ConnectWallet } = useWalletStore()
const { data: signMessageData, signMessage, variables, signMessageAsync } = useSignMessage()
const { connect, connectors, isLoading, error, pendingConnector, connectAsync } = useConnect()
const { connector, isReconnecting } = useAccount()

const { address } = useAccount({
  onConnect: (data) => console.log('connected', data),
  onDisconnect: () => console.log('disconnected'),
})
const { disconnect } = useDisconnect()
const singMess = async () => {
  const result = await signMessageAsync({ message: 'kartbox' })
  await login({
    publisher: 'metamask',
    chain: 'ethereum',
    address,
    signature: signMessageData,
  })
  await getProfile()
  await updateProfile({
    username: 'testUser',
  })
  await getWallet()
}
const handleConnectWallet = async (connector: any) => {
  // await ConnectWallet(connector)
  await connectAsync({ connector })
}
</script>

<template>
  <CommonModal v-model="value" class="modal-login">
    <div class="text-right p-3">
      <button @click="$emit('closeModal')">
        <img src="/images/icons/clear.png" alt="" />
      </button>
    </div>
    <div class="p-8 pt-0">
      <span class="text-[40px] font-bold"> Log in to Kartbox </span> <br />
      <span
        >By connecting a wallet, you agree to
        <a class="text-[#E5A403]">Terms of Service</a> And
        <a class="text-[#E5A403]">Privacy Policy.</a>
        <a @click="singMess">sign message</a>
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
