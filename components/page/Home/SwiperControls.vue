<script setup lang="ts">
const swiper = useSwiper()
</script>

<template>
  <button class="absolute top-[35%] left-[37px] z-10" @click="swiper.slidePrev()"><img src="/images/icons/pre_btn.png" alt=""></button>
  <button class="absolute top-[35%] right-[43px] z-10" @click="swiper.slideNext()"><img src="/images/icons/next_btn.png" alt=""></button>
</template>