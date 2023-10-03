<script setup lang="ts">
const HomeItem = {
  title: 'Create & develop the Web3 community within the Kartbox ecosystem',
  contents: 'Spaces',
  detail:
    'Kartbox Space is where your project exists on Kartbox. It is a public profile that users can track, view, and participate in the campaigns you create. Space administrators can also log into their Space to manage campaigns and NFT contracts. Of course, you can also use Space as your brand page and add discordant information, media, Twitter, and other details to let Galaxy users know more about your brand.',
}
const SwiperItem = [
  {
    name: 'John Smith',
    nickName: '@Jsmith',
    detail: '1 campaign is active !',
    symbol: '/images/icons/Space_1.png',
    icon: '/images/icons/Certificate.png',
    Categories: 'Bridge, NFT, Web3, Infrastructure, Layer 2',
  },
  {
    name: 'John Smith',
    nickName: '@Jsmith',
    detail: '1 campaign is active !',
    symbol: '/images/icons/Space_2.png',
    icon: '/images/icons/Certificate.png',
    Categories: 'Bridge, NFT, Web3, Infrastructure, Layer 2',
  },
  {
    name: 'John Smith',
    nickName: '@Jsmith',
    detail: '1 campaign is active !',
    symbol: '/images/icons/Space_3.png',
    icon: '/images/icons/Certificate.png',
    Categories: 'Bridge, NFT, Web3, Infrastructure, Layer 2',
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
    <div class="pt-[5%]">
      <Swiper
        class="swiper-card "
        :width="425"
        :modules="[SwiperAutoplay, SwiperZoom]"
        :slides-per-view="1"
        :centeredSlides="true"
        :loop="false"
        :effect="'creative'"
      >
        <SwiperSlide v-for="(slide, idx) in SwiperItem" :key="idx">
          <PageHomeItemsSpaceItems
            class="min-w-[414px] max-w-[414px]"
            :detail="slide.detail"
            :symbol="slide.symbol"
            :name="slide.name"
            :nickName="slide.nickName"
            :Categories="slide.Categories"
            :icon="slide.icon"
          />
        </SwiperSlide>
        <PageHomeSwiperControls />
      </Swiper>
    </div>
  </div>
</template>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-wrapper {
  justify-content: center;
}
.swiper-card {
    position: relative;
}
</style>
