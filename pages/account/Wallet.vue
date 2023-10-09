<script setup lang="ts">
definePageMeta({ layout: 'page' })

const Social = [
  {
    name: 'Connect Twitter Account',
    icon: '/images/icons/social_1.png',
  },
  {
    name: 'Connect Discord Account',
    icon: '/images/icons/social_2.png',
  },
  {
    name: 'Connect Github Account',
    icon: '/images/icons/social_3.png',
  },
  {
    name: 'Connect Telegram Account',
    icon: '/images/icons/social_4.png',
  },
]
</script>
<template>
  <div class="flex flex-col gap-8">
    <div class="profile_title text-[36px] font-bold">Wallet Address</div>
    <div class="flex flex-col gap-4">
      <span> Address List </span>
      <CommonCard class="wallet-card">
        <span> EVM Chain </span>
      </CommonCard>
    </div>
    <CommonCard class="wallet-card">
      <span> Add Address </span>
      <div class="grid gap-8 grid-cols-2 grid-row-2 py-8 text-[16px]">
        <button
          v-for="(item, idx) in Social"
          :key="idx"
          class="w-full h-[51px] rounded flex gap-8 p-2 pl-4"
          style="background: rgba(47, 50, 65, 0.5)"
        >
          <img class="pt-2" :src="item.icon" />
          <span class="font-bold pt-1"> {{ item.name }} </span>
        </button>
      </div>
    </CommonCard>
  </div>
</template>
<style>
/* .profile-input {
  background: var(--base-color-dark-transparent, rgba(47, 50, 65, 0.5));
  @apply w-[50%] h-[48px] p-[20px] pr-[8rem] rounded-lg;
} */
.wallet-card {
   background: rgba(47, 50, 65, 0.50) !important
}
</style>
