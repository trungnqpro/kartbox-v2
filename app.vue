<script lang="ts" setup>
import { watch } from 'vue'
const { awesome } = useAppConfig()

useHead({
  title: awesome.name,
  titleTemplate: `%s - ${awesome.name}`,
})

const route = useRoute()
const account = ref(false)

watch(
  route,
  (value) => {
    if (value.fullPath == '/account') {
      return (account.value = true)
    }
    account.value = false
  },
  { deep: true, immediate: true }
)
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
  </Body>
</template>
