<script setup lang="ts">
import { useToast } from '~/composables/ui/useToast'
definePageMeta({ layout: 'page' })
const toast = useToast()

</script>

<template>
  <div class="Access-Token flex flex-col gap-4">
    <span @click="toast.add({ title: 'Hello world!' })" class="text-[36px] font-bold">Connected Apps</span>
    <span class="text-[#787878]">
      These are apps which you connected to your account. You can see the
      information these apps have access to and revoke aceess.
    </span>
  </div>
</template>
