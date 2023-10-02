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
    BtnTitle: 'Play now',
    active: true,
  },
  {
    img: '/images/home/Campaigns_2.png',
    thumb: 'Scroll X Vooi Incentivized Testnet Campaign',
    title: 'Explore Mode Onchain Functionality on Testnet, Trade to Mint NFT &amp; Earn Loyalty Points!',
    BtnTitle: 'Play now',
    active: true,
  },
  {
    img: '/images/home/Campaigns_3.png',
    thumb: 'Scroll X Vooi Incentivized Testnet Campaign',
    title: 'Explore Mode Onchain Functionality on Testnet, Trade to Mint NFT &amp; Earn Loyalty Points!',
    BtnTitle: 'Coming soon',
    active: false,
  },
]
</script>

<template>
  <div class="container pb-[10%]">
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
          :BtnTitle="item.BtnTitle"
          :active="item.active"
        />
      </div>
    </div>
  </div>
</template>
