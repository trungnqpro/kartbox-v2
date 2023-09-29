<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ title: 'Blank Page' })
</script>

<template>
  <LayoutWrapper>
    <LayoutHeader>
      <LayoutTitle text="Blank Page" class="capitalize" />
    </LayoutHeader>
    <LayoutSection>
      <LayoutSectionTitle text="Section Title" />
      <div>My Content</div>
    </LayoutSection>
    <LayoutSection>
      <LayoutSectionTitle text="Another Section" />
      <div>My Content</div>
    </LayoutSection>
  </LayoutWrapper>
</template>
