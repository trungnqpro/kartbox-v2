<script setup lang="ts">
import AccountSidebar from '../../components/Navigation/AccountSidebar.vue'
import Profile from './profile.vue'
import Wallet from './Wallet.vue'
import Social from './Social.vue'
import AccessToken from './AccessToken.vue'
import Apps from './Apps.vue'
definePageMeta({ layout: 'page' })

const screen = useAwesomeScreen()
</script>

<template>
  <div class="container pt-[5%]">
    <LayoutWrapper>
      <LayoutSection>
        <div class="mb-6">
          <HeadlessTabGroup
            as="div"
            class="flex flex-col md:flex-row md:space-x-4"
            :vertical="screen.higherThan('md')"
          >
            <HeadlessTabList
              class="w-full md:w-1/6 flex md:flex-col rounded-lg mb-2"
            >
              <AccountSidebar />
            </HeadlessTabList>
            <HeadlessTabPanels class="flex-1">
              <HeadlessTabPanel>
                <Profile />
              </HeadlessTabPanel>
              <HeadlessTabPanel>
                <Wallet />
              </HeadlessTabPanel>
              <HeadlessTabPanel>
                <Social />
              </HeadlessTabPanel>
              <HeadlessTabPanel>
                <AccessToken />
              </HeadlessTabPanel>
              <HeadlessTabPanel>
                <Apps />
              </HeadlessTabPanel>
            </HeadlessTabPanels>
          </HeadlessTabGroup>
        </div>
      </LayoutSection>
    </LayoutWrapper>
  </div>
</template>
