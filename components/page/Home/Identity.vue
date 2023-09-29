<script setup lang="ts">
const HomeItem = {
  title: 'User identity in Kartbox ecosystem',
  contents: 'Kart',
  detail:
    'Kartbox is a magical space where verified digital information appears everywhere, and we are elevating them to new heights.',
}
</script>

<template>
  <div class="container">
    <PageHomeItemHome
      :title="HomeItem.title"
      :contents="HomeItem.contents"
      :detail="HomeItem.detail"
    />
  </div>
</template>
