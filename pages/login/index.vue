<script setup lang="ts">
import { useStorage } from '@vueuse/core'
import userAvatar from '~/assets/images/defaultUser.webp'
import { useDisconnect, useSignMessage } from 'use-wagmi'
import { limitLetter } from '@/utils/index'
import { useUser } from '~/stores/authUser'
const { disconnectAsync } = useDisconnect()
const isShowLogin = ref(useStorage('Accounts', []).value.length)
const flag = ref(false)
const { login } = useUser()
const {
  data: signMessageData,
  signMessage,
  variables,
  signMessageAsync,
} = useSignMessage()
let listAccount = computed(() => {
  console.log(useLocalStorage('Accounts'), 'computed')
  return useStorage('Accounts', []).value
})
watch(flag, async (value) => {
  console.log('watch', value)
  listAccount = useStorage('Accounts', []).value
})
const handleLogin = async (account) => {
  const payload = {
    address: account.address,
    chain: account.chain,
    publisher: 'metamask',
    signature: account.signature,
  }
  console.log(listAccount, 'account')
  const { profile } = await login(payload)
  if (listAccount.value && listAccount.value.length) {
    const localUser = listAccount.value.map((item) => {
      if (item.address === account.address) {
        return {
          ...item,
          ...profile,
        }
      }
      return item
      localStorage.setItem('Accounts', JSON.stringify(localUser))
    })
  }
  navigateTo('/')
}
const hanldeUserMoreAccount = async () => {
  console.log('handleUserMoreAccount')
  await disconnectAsync()
  isShowLogin.value = false
}
console.log(
  isShowLogin.value,
  'isShowLogin',
  useLocalStorage('Accounts').value !== 'undefined'
)
</script>

<template>
  <client-only>
    <div class="h-screen p-60">
      <div class="flex justify-center items-center">
        <common-card
          v-if="isShowLogin && listAccount.length"
          class="border border-sky-500"
        >
          <div class="py-6 px-8 flex flex-col">
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
                    {{ account.username || 'demo' }}
                  </div>
                  <div>
                    {{ limitLetter(account.address, 10) }}
                  </div>
                </div>
              </div>
              <div
                class="flex py-3 border-b-2 border-blue-600 items-center mb-8 cursor-pointer"
              >
                <CommonAvatar :src="userAvatar" />
                <div class="ps-3" @click="hanldeUserMoreAccount()">
                  Use another account
                </div>
              </div>
            </div>
          </div>
        </common-card>
      </div>
      <PageHomeModalLogin
        :is-login="!isShowLogin"
        @close-Modal="isShowLogin = true"
        @rerender="flag = !flag"
      />
      <div v-if="flag"></div>
    </div>
  </client-only>
</template>

<style scoped></style>
