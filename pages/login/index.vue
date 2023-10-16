<script setup lang="ts">
import { limitLetter } from '@/utils/index'
import { useUser } from '~/stores/authUser'
const isShowLogin = ref(false)
const { login, getProfileUser, getProfile, updateProfile, getWallet } =
  useUser()
const listAccount = ref(JSON.parse(useLocalStorage('Accounts').value || '[]'))
console.log(listAccount.value)
const handleLogin = async (account) => {
  const { profile } = await login(account)
  // TODO UPDATE PROFILE USER LOCAL STORAGE
  navigateTo('/')
}
</script>

<template>
  <client-only>
    <div class="h-screen p-60">
      <div class="flex justify-center items-center">
        <common-card class="border border-sky-500">
          <!-- Login -->
          <div v-if="isShowLogin">
            <div class="title flex items-center flex-col mb-5">
              <div class="text-3xl">Sign in to your account</div>
            </div>
            <div class="flex flex-col space-y-4">
              <div class="flex flex-col">
                <input
                  type="text"
                  placeholder="name@compan.com"
                  class="p-2 border border-gray-300 text-neutral-950"
                />
              </div>
              <div class="flex flex-col">
                <input
                  type="password"
                  placeholder="******"
                  class="p-2 border border-gray-300 text-neutral-950"
                />
              </div>
              <div class="flex justify-between item-end">
                <div class="flex">
                  <input
                    type="checkbox"
                    class="form-checkbox h-5 w-5 text-blue-500"
                  />
                  <div class="ps-1">Remember me</div>
                </div>
                <div>Forgot password</div>
              </div>
              <button
                type="submit"
                class="p-2 bg-blue-700 text-white font-bold rounded"
              >
                Sign In
              </button>
              <div>
                Don't have an account?<span class="text-sky-400">Sign Up</span>
              </div>
            </div>
          </div>
          <!-- End Login -->
          <div v-if="!isShowLogin && listAccount.length" class="py-6 px-8 flex flex-col">
            <div class="text-center text-3xl mb-4">Choose an account</div>
            <div>
              <div
                v-for="(account, idx) in listAccount"
                :key="idx"
                class="flex py-2 items-center border-b-2 border-blue-600 cursor-pointer"
                @click="handleLogin(account)"
              >
                <CommonAvatar
                  src="https://avatars.githubusercontent.com/u/739984?v=4"
                />
                <div class="ps-3">
                  <div>
                    {{ account.name || 'demo' }}
                  </div>
                  <div>
                    {{ limitLetter(account.address, 10) }}
                  </div>
                </div>
              </div>
              <div
                class="flex py-3 border-b-2 border-blue-600 items-center mb-8 cursor-pointer"
                @click="isShowLogin = true"
              >
                <CommonAvatar
                />
                <div class="ps-3">
                  Use another account
                </div>
              </div>
            </div>
          </div>
        </common-card>
      </div>
    </div>
  </client-only>
</template>

<style scoped></style>
