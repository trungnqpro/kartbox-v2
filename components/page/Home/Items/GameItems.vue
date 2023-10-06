<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  BtnTitle: {
    type: String,
    default: '',
  },
  thumb: {
    type: String,
    default: '',
  },
  img: {
    type: String,
    default: '',
  },
  iconThumb: {
    type: String,
    default: '',
  },
  active: {
    type: Boolean,
    default: true,
  },
})
</script>
<template>
  <div>
    <div
      class="article-item w-full relative px-[10px] pb-[20px] pt-[10px] rounded-[15px] lg:rounded-[15px]"
    >
      <div class="mb-[32px] lg:mb-[35px] bg-[#242424] rounded-inherit">
        <img
          class="w-full rounded-[8px] lg:rounded-[8px] aspect-[315/193]"
          :src="img"
        />
      </div>
      <div class="flex">
        <div class="pr-[15px] pl-[15px]">
          <img class="pt-[5px]" :src="iconThumb" alt="" />
        </div>
        <div>
          <span class="text-[24px] text-[#fff]">{{ thumb }}</span> <br />
          <span class="text-[16px] text-[#9A9A9A]">{{ title }}</span>
        </div>
      </div>
      <div class="px-[20px] py-[20px]">
        <button
          class="w-full h-[60px] rounded-md border bg-[#FF99000D]"
          :class="active ? 'border-orange-400' : 'border-gray-600'"
        >
          {{ BtnTitle }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-item {
  background: linear-gradient(
    148deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  filter: drop-shadow(5px 5px 30px rgba(0, 0, 0, 0.25));
}
</style>
