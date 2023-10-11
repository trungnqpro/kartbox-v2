<script setup lang="ts">
const items = [
  [
    {
      slot: 'account',
      WalletAdress: '0x4550...f57c',
      disabled: false,
    },
  ],
  [
    {
      label: 'View on BNB Chain',
    },
    {
      label: 'Settings',
    },
    {
      label: 'Change Wallet',
    },
    {
      label: 'Logout',
    },
  ],
  [
    {
      label: 'My NFTs/OATs',
    },
    {
      label: 'My Spaces',
    },
  ],
]
const isUserName = ref(false)
const isNetWork = ref(false)
</script>

<template>
  <div class="flex gap-4">
    <button
      class="flex gap-2 rounded-lg bg-[#17191E] p-2"
      @click="isNetWork = true"
    >
      <img src="/images/icons/Coin.png" />
      <span class="pt-[2px]">BNB Chain</span>
    </button>
    <CommonDropdown
      class="pt-1"
      :items="items"
      :ui="{ item: { disabled: 'cursor-text select-text' } }"
      :popper="{ placement: 'bottom-end' }"
    >
      <CommonAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />
      <template #account="{ item }">
        <CommonAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
        />
        <div class="text-left">
          <p class="truncate font-medium text-gray-900 dark:text-white">
            {{ item.WalletAdress }}
          </p>
          <botton @click="isUserName = true" class="text-[#E5A403]"
            >Set up username</botton
          >
        </div>
      </template>
      <template #item="{ item }">
        <span class="truncate">{{ item.label }}</span>
      </template>
    </CommonDropdown>
  </div>
  <PageHomeModalUser
    :isUserName="isUserName"
    @close-Modal="isUserName = false"
  />

  <PageHomeModalNetwork
    :isNetWork="isNetWork"
    @close-Modal="isNetWork = false"
  />
</template>

<style lang="scss">
.modal-User {
  .Common-modal {
    max-width: 30%;
  }
}
</style>
