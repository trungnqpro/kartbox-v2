<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: '',
  },
  detail: {
    type: String,
    default: '',
  },
  symbol: {
    type: String,
    default: '',
  },
  nickName: {
    type: String,
    default: '',
  },
  Categories: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div
    class="advantage-card relative rounded-[15px] pt-[30px] pb-[38px] px-[30px]"
  >
    <div class="mb-[30px] flex">
      <div class="pr-[20px]">
        <img :src="symbol" alt="" />
      </div>
      <div class="flex justify-between w-full">
        <div>
          <div class="flex">
            <span class="text-[20px] pr-[10px]">{{ name }}</span>
            <div>
              <img :src="icon" alt="" />
            </div>
          </div>
          <span class="text-[16px]"> {{ nickName }} </span>
        </div>
        <div>
          <img src="/images/icons/register.png" alt="" />
        </div>
      </div>
    </div>
    <div
      class="text-[16px] lg:text-[16px] leading-[22px] text-secondary break-words"
    >
      <span class="font-bold">Categories</span> <br />
      <span>{{ Categories }}</span>
    </div>
  </div>
</template>

<style scoped>
.advantage-card {
  background: linear-gradient(
    148deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(10px);
}
</style>
