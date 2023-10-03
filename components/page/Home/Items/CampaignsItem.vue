<template>
  <div>
    <div
      class="article-item w-full relative px-[10px] pb-[20px] pt-[10px] rounded-[15px] lg:rounded-[15px]"
    >
      <div class="mb-[32px] lg:mb-[35px] rounded-inherit">
        <img
          class="w-full rounded-[8px] lg:rounded-[8px] aspect-[315/193]"
          :src="img"
        />
      </div>
      <div class="px-[20px] flex gap-x-2">
        <span class="box-border border rounded-md p-1 border-orange-500 text-[#F90]"> NFT </span>
        <span class="box-border border rounded-md p-1 border-orange-500 text-[#F90]"> 1000 POINT </span>
      </div>
      <div class="text-[24px] text-[#fff] px-[20px] pt-[10px] font-bold">{{ thumb }}</div>
      <div class="text-[16px] text-[#9A9A9A] pt-[10px] px-[20px]">
        {{ title }}
      </div>

      <div class="flex px-[20px] pt-[20px]">
        <img :src="imgCamp" />
        <div class="flex pl-2 pt-3">
          <span class="pr-2 font-bold"> {{ titleCamp }} </span>
          <div>
            <img :src="icon" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'thumb',
    'img',
    'iconThumb',
    'active',
    'imgCamp',
    'titleCamp',
    'icon',
  ],
}
</script>

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
