<script lang="ts" setup>
import { computed } from 'vue'
import {
  AwesomeLayoutPageNavbarMenu,
  AwesomeLayoutPageNavbarMenuDropdownItem,
} from '../../../types'
import { NuxtApp } from '#app'

const nuxtApp = useNuxtApp()

const props = defineProps({
  menu: {
    type: Object as () =>
      | AwesomeLayoutPageNavbarMenu
      | AwesomeLayoutPageNavbarMenuDropdownItem,
    required: true,
  },
  isDropdown: {
    type: Boolean,
    default: false,
  },
})
const route = useRoute()

const path = computed(() => route.fullPath)
</script>

<template>
  <template v-if="menu?.type === 'link' && isDropdown">
    <NuxtLink :to="parseMenuRoute(menu?.to)" #="{ isActive }">
      <div
        :class="[
          'transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-lg w-full text-[#fff]',
          isActive ? 'font-bold' : '',
        ]"
      >
        {{ parseMenuTitle(menu?.title) }}
      </div>
    </NuxtLink>
  </template>
  <template v-else-if="menu?.type === 'link'">
    <NuxtLink :to="parseMenuRoute(menu?.to)">
      <span
        :class="path == menu.to ? 'menu-active' : ''"
        class="text-[#fff] p-6"
        style=""
        >{{ parseMenuTitle(menu?.title) }}</span
      >
    </NuxtLink>
  </template>
  <template v-else-if="menu?.type === 'button'">
    <AwesomeButton
      :text="parseMenuTitle(menu?.title)"
      size="xs"
      :to="parseMenuRoute(menu.to)"
    />
  </template>
</template>
<style>
.menu-active {
  background: linear-gradient(
    to top,
    rgba(255, 166, 0, 0.377),
    rgba(255, 165, 0, 0)
  );
  @apply border-b-2 border-orange-400;
}
</style>
