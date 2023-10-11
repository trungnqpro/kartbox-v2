<script setup lang="ts">
const props = defineProps({
  isUserName: {
    type: Boolean,
  },
})
const value = computed(() => props.isUserName)
</script>

<template>
  <CommonModal v-model="value" class="modal-User">
    <div class="text-right p-3">
      <Button @click="$emit('closeModal')">
        <img src="/images/icons/clear.png" alt="" />
      </Button>
      <div class="flex flex-col p-16 gap-8 pt-0 text-left">
        <span class="text-[32px]">Choose Your Name</span>
        <input
          class="profile-input"
          type="user"
          placeholder="At least 4 charactersm"
        />
        <Button class="w-[128px] h-[48px] rounded bg-[#FF9900]"> Save </Button>
      </div>
    </div>
  </CommonModal>
</template>
