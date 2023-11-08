<script setup lang="ts">
import { defineEmits } from 'vue';
import { useToast } from '~/composables/ui/useToast'


const props = defineProps({
  isUserName: {
    type: Boolean,
  },
})
const emit = defineEmits();
const { updateProfile, getProfile } = useUser()
const username = ref('')
const isOpen = computed(() => props.isUserName)
const toast = useToast()


async function updateName() {
  await updateProfile({username})
  await getProfile()
  emit('closeModal')
  username.value = ''
  toast.add({ title: 'Update User Name Success!' })
}
</script>

<template>
  <CommonModal v-model="isOpen" class="modal-User">
    <div class="text-right p-3">
      <button @click="$emit('closeModal')">
        <img src="/images/icons/clear.png" alt="" />
      </button>
      <div class="flex flex-col p-16 gap-8 pt-0 text-left">
        <span class="text-[32px]">Choose Your Name</span>
        <input
          v-model="username"
          class="profile-input"
          type="user"
          placeholder="At least 4 charactersm"
        />
        <button @click="updateName" class="w-[128px] h-[48px] rounded bg-[#FF9900]"> Save </button>
      </div>
    </div>
  </CommonModal>
</template>
