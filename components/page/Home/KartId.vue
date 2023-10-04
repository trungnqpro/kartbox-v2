<script setup lang="ts">
const LIST = [
  {
    detail:
      'Kart ID can be a shared username representing your multi-chain/multi-wallet identity in Web3.',
    symbol: '/images/icons/Wallet.png',
  },
  {
    detail:
      'You can display login information collected in the Web3 world and showcase your achievements.',
    symbol: '/images/icons/Information.png',
  },
  {
    detail:
      'Developers can integrate Kart ID toolkit and provide customized features for users based on their digital verification information',
    symbol: '/images/icons/Intergrate.png',
  },
  {
    detail:
      "Many other features will be added, and you will soon be able to use Kart ID across Kartbox's extensive partner network.",
    symbol: '/images/icons/Features.png',
  },
]
const HomeItem = {
  title: 'User identity in Kartbox ecosystem',
  contents: 'Kart ID',
  detail:
    'Kartbox is a magical space where verified digital information appears everywhere, and we are elevating them to new heights.',
}
</script>

<template>
  <div class="container py-[10%] pt-[20%] relative">
    <PageHomeItemHome
      :title="HomeItem.title"
      :contents="HomeItem.contents"
      :detail="HomeItem.detail"
      detailClass="max-w-[50%]"
    />
    <div
      class="flex lg:justify-center w-full px-5 gap-x-[19px] overflow-x-auto pt-[5%]"
    >
      <PageHomeItemsKartItem
        v-for="(item, idx) in LIST"
        :key="idx"
        class="min-w-[308px] max-w-[308px]"
        :detail="item.detail"
        :symbol="item.symbol"
      />
    </div>
  </div>
  <img class="absolute top-[50%] left-[-10%]" src="/images/home/Vector.png" alt="">
</template>