<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: 'Components' })
import useCustomFetch from '~/composables/api/base/useCustomFetch'
import { usePingStore } from '~/stores/ping'

const pingStore = usePingStore()

const isOpen = ref(false)
const items = [
  [
    {
      label: 'ben@example.com',
      slot: 'account',
      disabled: true,
    },
  ],
  [
    {
      label: 'Settings',
      icon: 'i-heroicons-cog-8-tooth',
    },
  ],
  [
    {
      label: 'Documentation',
      icon: 'i-heroicons-book-open',
    },
    {
      label: 'Changelog',
      icon: 'i-heroicons-megaphone',
    },
    {
      label: 'Status',
      icon: 'i-heroicons-signal',
    },
  ],
  [
    {
      label: 'Sign out',
      icon: 'i-heroicons-arrow-left-on-rectangle',
    },
  ],
]

// test use useCustomFetch
const { data, pending, refresh, execute, error, status } =
  await useCustomFetch<object>('/beers')

// test call fake server api
const callFakeApi = () => useCustomFetch<object>('/fkapi/ping')

pingStore.fetchList()
</script>

<template>
  <div>
    <CommonIcon name="i-heroicons-light-bulb" color="red" />
    <CommonAvatar src="/images/home/NFT_Cards.png" />
    <CommonLink>Link</CommonLink>
    <button label="Open" @click="isOpen = true">open</button>
    <div>
      <CommonModal v-model="isOpen">
        <div class="text-[#333]">đâsd</div>
      </CommonModal>
      <CommonCard
        ><template #header />
        Body
        <template #footer />
      </CommonCard>
    </div>
    <CommonContainer> hello how sowf luly </CommonContainer>
    <CommonDropdown
      :items="items"
      :ui="{ item: { disabled: 'cursor-text select-text' } }"
      :popper="{ placement: 'bottom-start' }"
    >
      <CommonAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />
      <template #account="{ item }">
        <div class="text-left">
          <p>Signed in as</p>
          <p class="truncate font-medium text-gray-900 dark:text-white">
            {{ item.label }}
          </p>
        </div>
      </template>
      <template #item="{ item }">
        <span class="truncate">{{ item.label }}</span>
        <CommonIcon
          :name="item.icon"
          class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"
        />
      </template>
    </CommonDropdown>
    <!-- Test useFetch -->
    <div>
      <span v-if="pending">Loading...</span>
      <span v-else-if="data">Todos: {{ data[0] }}</span>
      <span v-else-if="error">Error: {{ error }}</span>
      <br />
      <button label="fetch data" @click="refresh">Refresh fetchData</button>
      <br />
      <br />
      <button label="fetch data" @click="callFakeApi">
        Call fake server api
      </button>

      <br />
      <br />
      <div>Data from store api: <br />{{ pingStore.list }}</div>
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>
