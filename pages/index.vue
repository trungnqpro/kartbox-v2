<script lang="ts" setup>
const { awesome } = useAppConfig()

definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: awesome?.name || 'Nuxt 3 Awesome Starter' })
</script>

<template>
  <div>
    <PageHomeAbout />
    <PageHomeKartId />
    <PageHomeGames />
    <PageHomeSpaces />
    <PageHomeCampaigns />
    <PageHomeNFTMarket />
    <PageHomeContacts />
  </div>
</template>
