<script setup lang="ts">
const props = defineProps({
  level: {
    type: String,
    default: '',
  },
  difficult: {
    type: Number,
    default: '',
  },
  img: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  nameNFt: {
    type: String,
    default: '',
  },
  Price: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div>
    <div
      class="article-item w-full relative px-[10px] pb-[20px] pt-[10px] rounded-[15px] lg:rounded-[15px]"
    >
      <div class="absolute top-0 w-full flex justify-center">
        <div class="relative">
          <img src="/images/home/Subtract.png" />
          <span class="absolute top-1 w-full text-center font-bold">{{
            level
          }}</span>
        </div>
      </div>
      <div class="mb-[32px] pt-[15%] lg:mb-[35px] rounded-inherit">
        <img class="w-full rounded-[8px] lg:rounded-[8px]" :src="img" />
      </div>
      <div class="price-item bg-slate-800 rounded-md relative">
        <div class="absolute top-[-20%] w-full flex justify-center">
          <img v-if="difficult == 3" src="/images/home/Rarity_1.png" />
          <img v-if="difficult == 1" src="/images/home/Rarity_2.png" />
          <img v-if="difficult == 2" src="/images/home/Rarity_3.png" />
        </div>
        <div class="flex justify-between pt-5 w-full px-4 text-[#828FAD]">
          <div>
            {{ name }}
          </div>
          <div>Price</div>
        </div>
        <div class="flex justify-between py-2 w-full px-4 font-bold">
          <div class="">
            {{ nameNFt }}
          </div>
          <div class="flex">
            <img class="pr-2" src="/images/home/dragon_logo.png" /> {{ Price }}
          </div>
        </div>
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
.price-item {
  background: var(--neutral-color-dark-gray-800, #101828);
}
</style>
