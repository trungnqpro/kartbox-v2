<script setup lang="ts">
definePageMeta({ layout: 'page' })
import { useToast } from '~/composables/ui/useToast'
const toast = useToast();
function change() {
  toast.add({ title: 'Change profile success' })
}
</script>

<template>
  <div class="Access-Token flex flex-col gap-4">
    <span @click="change()" class="text-[36px] font-bold">Connected Apps</span>
    <span class="text-[#787878]">
      These are apps which you connected to your account. You can see the
      information these apps have access to and revoke aceess.
    </span>
  </div>
</template>
