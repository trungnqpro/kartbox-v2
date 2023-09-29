<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router'
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
    <NuxtLink :to="parseMenuRoute(menu?.to)" #="{ isActive }">
      <span
        :class="{
          'font-bold': !!isActive, 
        }"
        class="text-[#fff]"
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
