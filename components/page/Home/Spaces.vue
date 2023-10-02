<script setup lang="ts">
const HomeItem = {
  title: 'Create & develop the Web3 community within the Kartbox ecosystem',
  contents: 'Spaces',
  detail:
    'Kartbox Space is where your project exists on Kartbox. It is a public profile that users can track, view, and participate in the campaigns you create. Space administrators can also log into their Space to manage campaigns and NFT contracts. Of course, you can also use Space as your brand page and add discordant information, media, Twitter, and other details to let Galaxy users know more about your brand.',
}
</script>

<template>
  <div class="container pb-[10%]">
    <PageHomeItemHome
      :title="HomeItem.title"
      :contents="HomeItem.contents"
      :detail="HomeItem.detail"
      detailClass="max-w-[60%] text-[18px]"
    />
    <div>
      <Swiper
        :width="240"
        :modules="[SwiperAutoplay, SwiperEffectCube]"
        :slides-per-view="1"
        :loop="true"
        :effect="'cards'"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="slide in 10" :key="slide">
          <strong>{{ slide }}</strong>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
