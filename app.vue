<script lang="ts" setup>
const { awesome } = useAppConfig()

useHead({
  title: awesome.name,
  titleTemplate: `%s - ${awesome.name}`,
})

const route = useRoute()
const account = ref(false)

watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    account.value = newPath === '/account';
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <Body
    class="antialiased duration-300 transition-colors text-[#fff]"
    :class="account ? 'bg-[#010101]' : 'bg-[#140C1F]'"
  >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    <CommonNotifications/>
  </Body>
</template>
