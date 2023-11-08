<script lang="ts" setup>
const props = defineProps({
  emptyTip: {
    type: String,
    required: false,
    default: 'This page is empty',
  },
})
</script>

<template>
  <ContentDoc>
    <template #default="{ doc }">
      <LayoutHeader>
        <LayoutTitle :text="doc.title" />
      </LayoutHeader>
      <LayoutSection>
        <ContentRenderer :value="doc" />
      </LayoutSection>
    </template>
    <template #empty>
      <h1>{{ emptyTip }}</h1>
    </template>
    <template #not-found>
      <AwesomeError :code="404" wrap />
    </template>
  </ContentDoc>
</template>
