<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

defineProps<{
  title?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()

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
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col p-8 bg-[#17191E] rounded-lg w-[40%]"
    @update:model-value="(val) => emit('update:modelValue', val)"
  >
    <ClientOnly>
      <button class="ml-auto" @click="emit('update:modelValue', false)">
        <Icon name="clarity:window-close-line" class="w-10 h-10" />
      </button>
    </ClientOnly>
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
  </VueFinalModal>
</template>
