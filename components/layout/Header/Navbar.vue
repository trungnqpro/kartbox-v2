<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router'
import { AwesomeLayoutPageNavbarMenu } from '../../../types'
import { ref } from 'vue'

const { awesome } = useAppConfig()
const $screen = useAwesomeScreen()

const menus = computed(
  () => (awesome?.layout?.navbar?.menus || []) as AwesomeLayoutPageNavbarMenu[]
)

const open = ref<boolean>(false)
const showModal = () => {
  open.value = true
}
// drawer
</script>

<template>
  <header
    class="flex fixed backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-950/10 dark:border-gray-50/[0.2] bg-[#0B0B0F] dark:bg-gray-950/[0.5]"
  >
    <!-- content -->
    <div
      class="flex-1 flex items-center max-w-screen-2xl mx-auto px-4"
    >
      <!-- title -->
      <div>
        <slot name="title">
          <NuxtLink to="/" class="font-bold text-lg text-primary-500">
            <img src="/images/logo/logo.svg" alt="" />
          </NuxtLink>
        </slot>
      </div>
      <!-- menus -->
      <div class="flex justify-between w-full">
        <div
          class="flex space-x-4 items-center pl-8 font-bold"
          :class="{ 'divide-x divide-gray-500': menus.length > 0 }"
        >
          <div class="flex space-x-8 text-[16px] items-center">
            <!-- dynamic menus -->
            <template v-for="(item, i) in menus" :key="i">
              <LayoutMenuWrapper :menu="item" />
            </template>
          </div>
        </div>
        <div>
          <button
            class="w-[182px] h-[40px] rounded bg-[#FF9900]"
            @click="showModal"
          >
            Connect Wallet
          </button>
        </div>
      </div>

      <a-modal
        v-model:open="open"
        title=""
        :footer="false"
        width="804px"
        centered
      >
        <PageHomeModalLogin />
      </a-modal>
    </div>
  </header>
</template>

<style lang="scss">
.ant-modal-content {
  background-color: #17191e !important;
  .ant-modal-close {
    color: #fff;
  }
}
</style>
