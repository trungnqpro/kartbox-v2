<script setup lang="ts">

definePageMeta({ layout: 'page' })
</script>
<template>
  <div class="flex flex-col gap-8">
    <div class="profile_title text-[36px] font-bold">Wallet Address</div>
    <div class="flex flex-col gap-4">
      <span> Address List </span>
      <CommonCard class="wallet-card">
        <span>
            EVM Chain
        </span>
      </CommonCard>
    </div>
    <div class="flex flex-col gap-4">
      <span> Email </span>
      <input class="profile-input" type="email" placeholder="info@email.com" />
    </div>
    <div>
      <Button class="w-[220px] h-[48px] rounded bg-[#FF9900]">
        Update Profile
      </Button>
    </div>
  </div>
</template>
<style>
/* .profile-input {
  background: var(--base-color-dark-transparent, rgba(47, 50, 65, 0.5));
  @apply w-[50%] h-[48px] p-[20px] pr-[8rem] rounded-lg;
} */
.wallet-card {

}
</style>
