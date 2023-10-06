<script lang="ts" setup>
const { awesome } = useAppConfig()

useHead({
  title: awesome.name,
  titleTemplate: `%s - ${awesome.name}`,
});

const route = useRoute().path;

</script>

<template>
  <Body
    class="antialiased duration-300 transition-colors text-[#fff] "
    :class="route == '/account' ? 'bg-[#010101]' : 'bg-[#140C1F]'"
  >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>
