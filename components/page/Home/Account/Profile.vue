<template>
  <div class="flex flex-col gap-8">
    <div class="profile_title text-[36px] font-bold">User Profile</div>
    <div class="profile_img flex gap-4">
      <div class="relative">
        <CommonAvatar :src="url" size="3xl" />
        <input
          id="upload-photo"
          class="opacity-0 absolute z-[-1]"
          type="file"
          accept="image/*"
          @change="onFileChanged($event)"
        />
        <label for="upload-photo"
          ><img
            class="absolute bottom-0 right-[-10%] cursor-pointer"
            src="/images/icons/Camera_icon.png"
        /></label>
      </div>
      <div>
        <span class="font-bold text-[20px]">
          Profile Images {{ AccountData.id }}</span
        >
        <br />
        <span class="text-[#B1B5C3]">
          We recommend an image of at least 300x300. Gifs work too. Max 5mb.
        </span>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <span> Username </span>
      <input
        v-model="AccountData.username"
        class="profile-input"
        placeholder="info"
      />
    </div>
    <div class="flex flex-col gap-4">
      <span> Email </span>
      <input
        v-model="AccountData.email"
        class="profile-input"
        type="email"
        placeholder="info@email.com"
      />
    </div>
    <div>
      <button
        @click="ChangeProfile"
        class="w-[220px] h-[48px] rounded bg-[#FF9900]"
      >
        Update Profile
      </button>
    </div>
  </div>
</template>

<script lang="ts">
definePageMeta({ layout: 'page' })
import { useUser } from '~/stores/authUser'

export default defineComponent({
  async setup() {
    const useUserStore = useUser()
    const { updateProfile, getProfile } = useUser()
    // console.log('[getProfile] 1')
    // await getProfile()
    // console.log('[getProfile] 2')

    const file = ref<File | null>()
    let url = ref<any>(null)

    function onFileChanged($event: Event) {
      const target = $event.target as HTMLInputElement
      if (target && target.files) {
        file.value = target.files[0]
        url.value = URL.createObjectURL(target.files[0])
      }
    }
    const AccountData = computed(() => useUserStore.profile)

    async function ChangeProfile() {
      const payload = {
        username: AccountData.username,
        email: AccountData.email,
      }
      await updateProfile(payload)
      await getProfile()
    }

    return {
      onFileChanged,
      ChangeProfile,
      url,
      AccountData,
      // getProfile,
    }
  },

  // mounted() {
  //   this.getProfile()
  // },
})
</script>
