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
    <div class="profile_title text-[36px] font-bold">Social Accounts</div>
    <div class="flex flex-col gap-4">
      <span class="font-bold text-[20px]">
        Email Address (Only visible to you)
      </span>
    </div>
    <div class="flex flex-col gap-4">
      <div class="w-[70%] relative">
        <input
          class="profile-input w-full"
          type="email"
          placeholder="Enter Email"
        />
        <button class="absolute right-[5%] top-[25%] text-[#F90]">
          Send a Code
        </button>
      </div>
      <div class="subscribe-form">
        <input type="email" placeholder="Enter Code" />
        <button type="button">Verify</button>
      </div>
    </div>
    <div>
      <span class="text-[20px] font-bold">Link Your Social TAGS</span>
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
    </div>
  </div>
</template>
<style>
.subscribe-form {
  @apply h-[48px]
    mb-[34px]
    lg:mb-[40px]
    flex
    items-center;

  input {
    background: var(--base-color-dark-transparent, rgba(47, 50, 65, 0.5));
    @apply leading-[16px]
      w-[54%]
      rounded-l-[5px]
      border-none
      px-[24px]
      h-full;
  }

  button {
    @apply w-[112px]
      h-full
      text-[16px]
      leading-[24px]
      rounded-r-[5px]
      bg-[#f90]
      outline-none;
  }
}
</style>
