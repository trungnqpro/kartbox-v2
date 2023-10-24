<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useAccount } from 'use-wagmi'
import type { AwesomeLayoutPageNavbarMenu } from '~/types'
import { useWalletStore } from '~/stores/wallet'
import { useUser } from '~/stores/authUser'
const { setConnectWallet } = useWalletStore()
const { awesome } = useAppConfig()
const menus = computed(
  () => (awesome?.layout?.navbar?.menus || []) as AwesomeLayoutPageNavbarMenu[]
)
const isConnected = computed(() => useWalletStore().isConnected)
const isLogin = ref(false)
const { address } = useAccount({
  onConnect: async (data) => await setConnectWallet(true),
  onDisconnect: async () => {
    await setConnectWallet(false)
  },
})
</script>

<template>
  <header
    class="flex fixed backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 dark:border-gray-50/[0.2] bg-[#0B0B0F] p-4">
    <!-- content -->
    <div class="flex-1 flex items-center max-w-screen-2xl mx-auto px-4">
      <!-- title -->
      <div>
        <slot name="title">
          <NuxtLink to="/" class="font-bold text-lg text-primary-500">
            <img src="/images/logo/logo.svg" alt="" />
          </NuxtLink>
        </slot>
      </div>
      <!-- menus -->
      <div class="flex justify-between w-full">
        <div class="flex space-x-4 items-center pl-8 font-bold" :class="{ 'divide-x divide-gray-500': menus.length > 0 }">
          <div class="flex text-[16px] items-center">
            <!-- dynamic menus -->
            <template v-for="(item, i) in menus" :key="i">
              <LayoutMenuWrapper :menu="item" />
            </template>
          </div>
        </div>
        <client-only>
          <div class="Wallet">
            <div v-if="!isConnected">
              <button class="w-[182px] h-[40px] rounded bg-[#FF9900]" @click="isLogin = true">
                Connect Wallet
              </button>
            </div>
            <div v-else>
              <PageHomeUser />
            </div>
          </div>
        </client-only>
      </div>
    </div>
    <!--    <PageHomeModalLogin :is-login="isLogin" @close-Modal="isLogin = false" />-->
  </header>
</template>

<style lang="scss">
.modal-login {
  .Common-modal {
    max-width: 40%;
  }
}
</style>
