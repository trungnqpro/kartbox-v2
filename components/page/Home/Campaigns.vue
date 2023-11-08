<script setup lang="ts">
const HomeItem = {
  title: 'View and search for campaigns on the Kartbox platform',
  contents: 'Campaigns',
  detail:
    'Creating your first campaign on Kartbox is very easy thanks to our simple 3-step setup process. Just fill in the Campaign Information, Rewards, and Participation sections.',
}
const GameItem = [
  {
    img: '/images/home/Campaigns_1.png',
    thumb: 'Scroll X Vooi Incentivized Testnet Campaign',
    title: 'Explore Mode Onchain Functionality on Testnet, Trade to Mint NFT &amp; Earn Loyalty Points!',
    active: true,
    imgCamp: '/images/icons/campaignicon_1.png',
    titleCamp: 'PancakeSwap',
    icon: '/images/icons/Certificate.png'
  },
  {
    img: '/images/home/Campaigns_2.png',
    thumb: 'Scroll X Vooi Incentivized Testnet Campaign',
    title: 'Explore Mode Onchain Functionality on Testnet, Trade to Mint NFT &amp; Earn Loyalty Points!',
    active: true,
    imgCamp: '/images/icons/campaignicon_2.png',
    titleCamp: 'PancakeSwap',
    icon: '/images/icons/Certificate.png'
  },
  {
    img: '/images/home/Campaigns_3.png',
    thumb: 'Scroll X Vooi Incentivized Testnet Campaign',
    title: 'Explore Mode Onchain Functionality on Testnet, Trade to Mint NFT &amp; Earn Loyalty Points!',
    active: false,
    imgCamp: '/images/icons/campaignicon_3.png',
    titleCamp: 'PancakeSwap',
    icon: '/images/icons/Certificate.png'
  },
]
</script>

<template>
  <div id="Campaigns" class="container pb-[10%] py-[5%] relative">
    <PageHomeItemHome
      :title="HomeItem.title"
      :contents="HomeItem.contents"
      :detail="HomeItem.detail"
      detailClass="max-w-[60%] text-[18px]"
    />
    <div class="flex gap-4 justify-center pt-8">
      <div v-for="(item, idx) in GameItem" :key="idx">
        <PageHomeItemsCampaignsItem
          class="lg:max-w-[388px]"
          :title="item.title"
          :thumb="item.thumb"
          :img="item.img"
          :active="item.active"
          :imgCamp="item.imgCamp"
          :titleCamp="item.titleCamp"
          :icon="item.icon"
        />
      </div>
    </div>
    <div class="absolute top-[-20%] left-[-35%]">
      <div class="point_line"/>
    </div>
  </div>
</template>
