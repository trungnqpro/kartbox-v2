<script lang="ts" setup>
const { awesome } = useAppConfig()
</script>

<template>
  <div class="pb-[5%] container text-[20px] relative ">
    <div class="grid lg:grid-cols-4 gap-[6%] pt-[2%] border-t border-solid border-gray-800">
      <div>
        <img src="/images/logo/logo.svg" alt="" />
      </div>
      <div class="gap-y-6 flex flex-col text-[#96839B]">
        <span>
          Kartbox is a leading platform for building the Web3 community. Kartbox
          drives the development of Optimism, Polygon, Arbitrum, and partners
          with customer loyalty programs based on rewards.
        </span>
        <div class="flex gap-x-5 pt-2">
          <img src="/images/icons/Vector.png" alt="" />
          <img src="/images/icons/Vector_1.png" alt="" />
          <img src="/images/icons/Vector_2.png" alt="" />
          <img src="/images/icons/Vector_3.png" alt="" />
        </div>
        <span> All rights reserved @Kartbox.io </span>
      </div>
      <div>
        <h4 class="font-bold">About</h4>
        <ul class="text-[#96839B] pt-[10%] gap-4 flex flex-col">
          <li>Kart ID</li>
          <li>Games</li>
          <li>Spaces</li>
          <li>Campaigns</li>
          <li>Marketplace</li>
        </ul>
      </div>
      <div>
        <h4 class="font-bold">Support</h4>
        <ul class="text-[#96839B] pt-[10%] gap-4 flex flex-col">
          <li>Help & Support</li>
          <li>Item Details</li>
          <li>Author Profile</li>
          <li>Collection</li>
        </ul>
      </div>
    </div>
    <div class="w-full absolute flex justify-center top-[-30%]">
      <div class="point_line"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.point_line {
  filter: blur(200px);
  @apply bg-[#f90] w-[262px] h-[165px];
}
</style>
