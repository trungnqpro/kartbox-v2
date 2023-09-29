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
  contents: 'Kart',
  detail:
    'Kartbox is a magical space where verified digital information appears everywhere, and we are elevating them to new heights.',
}
</script>

<template>
  <div class="container py-[10%] pt-[20%]">
    <PageHomeItemHome
      :title="HomeItem.title"
      :contents="HomeItem.contents"
      :detail="HomeItem.detail"
    />
    <div
      class="flex lg:justify-center w-full px-5 gap-x-[19px] overflow-x-auto pt-[5%]"
    >
      <PageHomeKartItem
        v-for="(item, idx) in LIST"
        :key="idx"
        data-aos="zoom-in"
        class="min-w-[308px] max-w-[308px]"
        :detail="item.detail"
        :symbol="item.symbol"
      />
    </div>
  </div>
</template>
