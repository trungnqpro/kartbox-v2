<script setup lang="ts">
definePageMeta({ layout: 'page' })
</script>
<template>
  <div class="flex flex-col gap-8">
    <div class="profile_title text-[36px] font-bold">User Profile</div>
    <div class="profile_img flex gap-4">
      <CommonAvatar src="" size="3xl" />
      <div>
        <span class="font-bold text-[20px]"> Profile Images </span> <br />
        <span class="text-[#B1B5C3]">
          We recommend an image of at least 300x300. Gifs work too. Max 5mb.
        </span>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <span> Username </span>
      <input
        class="profile-input"
        type="email"
        placeholder="info"
      />
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
</style>
