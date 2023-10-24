<template>
  <div class="flex flex-col gap-8">
    <div class="profile_title text-[36px] font-bold">Wallet Address</div>
    <div class="flex flex-col gap-4">
      <span class="font-bold text-[20px]"> Address List </span>
      <CommonCard class="wallet-card">
        <div class="flex flex-col gap-4">
          <span class="font-bold text-[20px]"> EVM Chain </span>
          <div class="bg-[#060708] w-full p-3 px-4 rounded-md flex justify-between">
            <span class="text-[#F90]">{{ formatString(Token) }}</span>
            <button @click="CopyToken">
              <img src="/images/icons/copy_icon.png" />
            </button>
          </div>
          <button class="w-full rounded-md p-3 bg-[#060708] flex justify-center">
            <img src="/images/icons/add_icon.png" />
          </button>
        </div>
      </CommonCard>
    </div>
    <div class="flex flex-col gap-4">
      <span class="font-bold text-[20px]"> Add Address </span>
      <CommonCard class="wallet-card">
        <div class="grid gap-8 grid-cols-2 grid-row-2 py-2 text-[16px]">
          <button v-for="(item, idx) in Social" :key="idx" class="btn-address">
            <img :src="item.icon" />
            <span class="font-bold pt-1"> {{ item.name }} </span>
          </button>
        </div>
      </CommonCard>
    </div>
  </div>
</template>

<script lang="ts">
definePageMeta({ layout: 'page' })
import { defineComponent } from 'vue'
import { formatString } from '@/utils/index'
import { useToast } from '~/composables/ui/useToast'

export default defineComponent({
  setup() {
    const Token = JSON.parse(useLocalStorage('Accounts', '').value)[0].address
    const Social = [
      {
        name: 'BNB Chain',
        icon: '/images/icons/BNB_icon.png',
      },
      {
        name: 'Polygon',
        icon: '/images/icons/Polygon_icon.png',
      },
      {
        name: 'Ethereum',
        icon: '/images/icons/Ethereum_icon.png',
      },
      {
        name: 'Optimism',
        icon: '/images/icons/Optimism_icon.png',
      },
    ]
    const toast = useToast()

    function CopyToken() {
      const tempInput = document.createElement('input');
      tempInput.value = Token;
      document.body.appendChild(tempInput);

      tempInput.select();
      document.execCommand('copy');

      document.body.removeChild(tempInput);
      toast.add({ title: 'Coppy Token Done!' })
    }

    return {
      Social,
      Token,
      CopyToken,
      formatString,
    }
  }

})

</script>

<style>
/* .profile-input {
  background: var(--base-color-dark-transparent, rgba(47, 50, 65, 0.5));
  @apply w-[50%] h-[48px] p-[20px] pr-[8rem] rounded-lg;
} */
.wallet-card {
  background: rgba(47, 50, 65, 0.5) !important;
}

.btn-address {
  background: #080809;
  @apply w-full h-[51px] rounded flex gap-8 p-2 pl-4;
}
</style>
