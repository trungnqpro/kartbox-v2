<script lang="ts" setup>
const { awesome } = useAppConfig()
import IconCopy from '~/assets/svg/icons/copy.svg'

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
