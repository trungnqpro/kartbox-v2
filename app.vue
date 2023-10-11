<script lang="ts" setup>
const { awesome } = useAppConfig()

useHead({
  title: awesome.name,
  titleTemplate: `%s - ${awesome.name}`,
});
</script>

<script lang="ts">
export default {
  data() {
    return {
      router : this.$route.path
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        this.router = to.path
      },
      immediate: true,
    },
  }
}
</script>

<template>
  <Body
    class="antialiased duration-300 transition-colors text-[#fff] "
    :class="router == '/account' ? 'bg-[#010101]' : 'bg-[#140C1F]'"
  >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>
