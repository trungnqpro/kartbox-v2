<script setup lang="ts">
definePageMeta({ layout: 'page' })
function RefreshToken() {
  console.log('abababa');
  
}
</script>

<template>
  <div class="Access-Token flex flex-col gap-8">
    <span class="text-[36px] font-bold">Access Token</span>
    <span class="text-[#787878]">
      You can use the Access Token feature to manage the credentials you curate.
      This includes amending/replacing/removing items. In the future, Galxe will
      support the use of Access Tokens to manage campaigns, NFT metadata, and so
      much more.
    </span>
    <div class="bg-[#23262F] w-full p-3 px-4 rounded-md flex justify-between">
      <span>{{ 'yAo*****FpkR' }}</span>
      <div class="flex gap-2">
        <button @click="RefreshToken">
          <img src="/images/icons/refresh_icon.png" />
        </button>
        <button>
          <img src="/images/icons/delete_icon.png" />
        </button>
      </div>
    </div>
  </div>
</template>
