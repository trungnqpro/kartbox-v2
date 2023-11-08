<script setup lang="ts">
const HomeItem = {
  title: 'User identity in Kartbox ecosystem',
  contents: 'Games',
  detail:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}
const GameItem = [
  {
    img: '/images/home/Game_1.png',
    thumb: 'Dragon Kart',
    iconThumb: '/images/icons/game-control-act.png',
    title: 'Collect, Combine, Build, P2Earn',
    BtnTitle: 'Play now',
    active: true,
  },
  {
    img: '/images/home/Game_2.png',
    thumb: 'Versial',
    iconThumb: '/images/icons/game-control-act.png',
    title: 'Collect, Combine, Build, P2Earn',
    BtnTitle: 'Play now',
    active: true,
  },
  {
    img: '/images/home/Game_3.png',
    thumb: 'Coming soon',
    iconThumb: '/images/icons/game-control-dis.png',
    title: 'Coming soon',
    BtnTitle: 'Coming soon',
    active: false,
  },
]
</script>

<template>
  <div id="Games" class="pb-[10%] py-[5%] relative">
    <div class="container">
      <PageHomeItemHome
        :title="HomeItem.title"
        :contents="HomeItem.contents"
        :detail="HomeItem.detail"
        detailClass="max-w-[60%] text-[18px]"
      />
      <div class="flex gap-4 justify-center pt-8">
        <div v-for="(item, idx) in GameItem" :key="idx">
          <PageHomeItemsGameItems
            class="lg:max-w-[388px]"
            :title="item.title"
            :thumb="item.thumb"
            :iconThumb="item.iconThumb"
            :img="item.img"
            :BtnTitle="item.BtnTitle"
            :active="item.active"
          />
        </div>
      </div>
    </div>
    <div class="absolute top-[-10%] right-[-20%]">
      <div class="point_line"/>
    </div>
  </div>
</template>
