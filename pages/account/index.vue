<script setup lang="ts">
const AccountSidebar = () => import("../../components/Navigation/AccountSidebar.vue");
definePageMeta({ layout: 'page' })

</script>

<template>
  <div class="container pt-[5%]">
    <div class="grid grid-cols-2">
      <div class="menu flex justify-center">
        <AccountSidebar />
      </div>
      <div>
        áđấ
      </div>
    </div>
  </div>
</template>
