<script setup lang="ts">
const wallet = [
  {
    name: 'BNB Chain',
    icon: '/images/icons/BNB_icon.png',
  },
  {
    name: 'Polygon',
    icon: '/images/icons/Polygon_icon.png',
  },
  {
    name: 'Ethereum',
    icon: '/images/icons/Ethereum_icon.png',
  },
  {
    name: 'Optimism',
    icon: '/images/icons/Optimism_icon.png',
  },
]
const props = defineProps({
  isNetWork: {
    type: Boolean,
  },
})
const value = computed(() => props.isNetWork)
</script>

<template>
  <CommonModal v-model="value" class="modal-login">
    <div class="text-right p-3">
      <button @click="$emit('closeModal')">
        <img src="/images/icons/clear.png" alt="" />
      </button>
    </div>
    <div class="p-8 pt-0">
      <span class="text-[40px] font-bold"> Select a Network </span> <br />
      <span>to explore Kartbox </span>
      <div class="grid gap-8 grid-cols-2 grid-row-2 py-8 text-[16px]">
        <button
          v-for="(item, idx) in wallet"
          :key="idx"
          class="w-full h-[51px] rounded flex gap-8 p-2 pl-4"
          style="background: rgba(255, 255, 255, 0.08)"
        >
          <img :src="item.icon" />
          <span class="font-bold pt-1"> {{ item.name }} </span>
        </button>
      </div>
    </div>
  </CommonModal>
</template>
