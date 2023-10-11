<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  isLogin: {
    type: Boolean,
  },
})
const value = computed(() => props.isLogin)
const wallet = [
  {
    name: 'Metamask',
    icon: '/images/icons/metamask_icon.png',
  },
  {
    name: 'CoinbaseWallet',
    icon: '/images/icons/CoinbaseWallet_icon.png',
  },
  {
    name: 'WalletConnect',
    icon: '/images/icons/WalletConnect_icon.png',
  },
  {
    name: 'TrustWallet',
    icon: '/images/icons/TrustWallet_icon.png',
  },
]
</script>

<template>
  <CommonModal v-model="value" class="modal-login">
    <div class="text-right p-3">
      <Button @click="$emit('closeModal')">
        <img src="/images/icons/clear.png" alt="" />
      </Button>
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
          v-for="(item, idx) in wallet"
          :key="idx"
          class="w-full h-[51px] rounded flex gap-8 p-2 pl-4"
          style="background: rgba(255, 255, 255, 0.08)"
        >
          <img :src="item.icon" />
          <span class="font-bold pt-1"> {{ item.name }} </span>
        </button>
      </div>
    </div>
  </CommonModal>
</template>
