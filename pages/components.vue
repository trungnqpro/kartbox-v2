<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: 'Components' })

const isOpen = ref(false)
</script>

<template>
  <div>
    <CommonIcon name="i-heroicons-light-bulb" color="red" />
    <CommonAvatar src="/images/home/NFT_Cards.png" />
    <CommonLink>Link</CommonLink>
    <button label="Open" @click="isOpen = true">open</button>
    <div>
      <CommonModal v-model="isOpen">
        <div class="text-[#333]">đâsd</div>
      </CommonModal>
      <CommonCard
        ><template #header />
        Body
        <template #footer />
      </CommonCard>
    </div>
    <CommonContainer>
      hello how sowf luly
    </CommonContainer>
  </div>
</template>
