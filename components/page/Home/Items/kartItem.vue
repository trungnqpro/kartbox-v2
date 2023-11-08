<script setup lang="ts">
const props = defineProps({
  label: {
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
})
</script>
<template>
  <div
    class="
      advantage-card
      relative
      rounded-[15px]
      pt-[60px]
      pb-[38px]
      px-[35px]
    "
  >
    <div
      class="
        mb-[30px] flex justify-center
      "
    >
      <img :src="symbol" alt="">
    </div>
    <p
      class="
        text-[15px]
        lg:text-[18px]
        leading-[22px]
        text-secondary
        text-center
        break-words
      "
    >
      {{  detail }}
    </p>
  </div>
</template>

<style scoped>
.advantage-card {
  background: linear-gradient(148deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.05) 100%);
  filter: drop-shadow(5px 5px 30px rgba(0, 0, 0, 0.25));
}
</style>