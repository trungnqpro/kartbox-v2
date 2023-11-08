<template>
  <HeadlessTab v-for="(item, i) in menu" :key="i" v-slot="{ selected }" as="template" class="gap-4">
    <button :class="[
      'md:w-full text-left px-3 rounded py-2.5 text-sm leading-5 transition-all hover:bg-[#FF9500] hover:text-gray-900',
      selected ? 'font-extrabold bg-[#FF9500]' : 'text-white font-bold',
    ]" class="flex gap-4 lessTab-btn">
      <img :class="selected ? 'filter brightness-0 invert' : ''" :src="item.icon" alt="" />
      <span> {{ item.title }} </span>
    </button>
  </HeadlessTab>
</template>

<script lang="ts">
export default defineComponent({
  data() {
    const menu = [
      {
        title: 'Profile Setting',
        href: '/account/profile',
        icon: '/images/icons/profile_icon.png',
      },
      {
        title: 'Wallet Address',
        href: '/account/profile',
        icon: '/images/icons/wallet_icon.png',
      },
      {
        title: 'Social Accounts',
        href: '/account/profile',
        icon: '/images/icons/Socical_icon.png',
      },
      {
        title: 'Access Token',
        href: '/account/profile',
        icon: '/images/icons/Token_icon.png',
      },
      {
        title: 'Connected Apps',
        href: '/account/profile',
        icon: '/images/icons/Connet_icon.png',
      },
    ]
    return {
      menu
    }
  },
})
</script>

<style lang="scss">
[role=tablist] {
  @apply gap-4 md:w-1/4
}

.lessTab-btn:hover {
  img {
    filter: brightness(0%);
  }
}
</style>
