<script setup lang="ts">
const HomeItem = {
  title: 'NFT trading market of applications and games on the Kartbox platform',
  contents: 'NFT Marketplace',
  detail:
    'Each KART has a randomly generated hash power that can be upgraded by consuming other KART NFTs. The total hash power is calculated by adding up the hash power of all your KARTs. The amount of KARTBOX tokens mined is dependent on your weighted average of the total hash power across the platform.',
}
const BoxRaf = [
  {
    name: 'BOX Raffle',
    link: '',
  },
  {
    name: 'Buy BOX',
    link: '',
  },
  {
    name: 'Buy KART',
    link: '',
  },
]
const NFT_Cards = [
  {
    level: 'Level 8',
    img: '/images/home/Lilly_1.png',
    difficult: 3,
    name: 'Character',
    nameNFt: 'Pikalong',
    Price: '125,000',
  },
  {
    level: 'Level 10',
    img: '/images/home/Lilly_2.png',
    difficult: 1,
    name: 'Material',
    nameNFt: 'Mystery CB2',
    Price: '125,000',
  },
  {
    level: 'Level 4',
    img: '/images/home/Lilly_3.png',
    difficult: 2,
    name: 'Cars',
    nameNFt: 'Varahara GT',
    Price: '125,000',
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
    <div class="flex flex-row justify-center gap-8 pt-5">
      <div class="text-[#f90] flex" v-for="(item, idx) in BoxRaf" :key="idx">
        <a :href="item.link">{{ item.name }}</a>
        <div class="pt-1 pl-2">
          <img src="/images/icons/link.png" alt="" />
        </div>
      </div>
    </div>
    <div class="pt-[5%]">
      <Swiper
      :effect="'coverflow'"
      :centeredSlides="true"
      :slidesPerView="3"
      :coverflowEffect="{
      }"
      :pagination="true"
      :modules="[SwiperEffectCoverflow]"
      class="mySwiper"
      >
        <SwiperSlide v-for="(item, idx) in NFT_Cards" :key="idx">
          <PageHomeItemsNFTItems
            :key="idx"
            :level="item.level"
            :img="item.img"
            :difficult="item.difficult"
            :name="item.name"
            :nameNFt="item.nameNFt"
            :Price="item.Price"
          />
        </SwiperSlide>
        <PageHomeSwiperControls />
      </Swiper>
    </div>
  </div>
</template>

<style>
.swiper-slide-shadow-left {
  background-image: unset !important;
}
.swiper-slide-shadow-right {
  background-image: unset !important;
}
</style>
