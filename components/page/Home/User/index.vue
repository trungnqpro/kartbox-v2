<template>
  <div class="flex gap-4">
    <button class="flex gap-2 rounded-lg bg-[#17191E] p-2" @click="isNetWork = true">
      <img src="/images/icons/Coin.png" />
      <span class="pt-[2px]">BNB Chain</span>
    </button>
    <CommonDropdown class="pt-1" :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
      :popper="{ placement: 'bottom-end' }">
      <CommonAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />
      <template #account="{ item }">
        <CommonAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />
        <div :class="AccountData.username ? 'flex flex-col flex-col-reverse' : ''" class="text-left">
          <p class="truncate text-gray-400">
            {{ item.WalletAdress }}
          </p>
          <p v-if="AccountData.username" class="font-medium "> {{ AccountData.username }}</p>
          <button v-else @click="isUserName = true" class="text-[#E5A403]">Set up username</button>
        </div>
      </template>
      <template class="text-left" #item="{ item }">
        <nuxt-link class="w-full text-left" :to="item.href" @click="changRouter(item)">
          <span class="truncate w-full">{{ item.label }}</span>
        </nuxt-link>
      </template>
    </CommonDropdown>
  </div>
  <PageHomeModalUser :isUserName="isUserName" @close-Modal="isUserName = false" />

  <PageHomeModalNetwork :isNetWork="isNetWork" @close-Modal="isNetWork = false" />
</template>

<script lang="ts">
import { formatString } from '@/utils/index'
import { useUser } from '~/stores/authUser'

export default defineComponent({
  setup() {
    const { getProfile } = useUser()
    const { SlectedNav } = useProfile();
    const useUserStore = useUser()
    const AccountData = computed(() => useUserStore.profile || { username: '' })
    const Token = JSON.parse(useLocalStorage('Accounts', '').value)[0].address
    const items = [
      [
        {
          slot: 'account',
          WalletAdress: formatString(Token),
          disabled: false,
        },
      ],
      [
        {
          label: 'View on BNB Chain',
        },
        {
          label: 'Settings',
          href: '/account',
          type: 'account'
        },
        {
          label: 'Change Wallet',
          href: '/account',
          type: 'wallet'
        },
        {
          label: 'Logout',
          type: 'logout'
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

    getProfile()

    function changRouter(data: object) {
      const typeToIndex: { [key: string]: number } = {
        "account": 0,
        "wallet": 1,
        "logout": 3
      };
      const selectedIndex = typeToIndex[(data as any).type];
      if (selectedIndex !== undefined && selectedIndex !== 3) {
        SlectedNav(selectedIndex)
      } else if (selectedIndex == 3) {
        localStorage.clear();
        location.reload();
      }
    }
    return {
      isUserName,
      isNetWork,
      items,
      AccountData,
      changRouter
    }
  }
})

</script>

<style lang="scss">
.modal-User {
  .Common-modal {
    @apply xl:max-w-[30%]
  }
}
</style>
