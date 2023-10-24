<script setup lang="ts">
import { useUser } from '~/stores/authUser'

definePageMeta({ layout: 'page' })
import { useProfile } from '~/stores/profile'
const { SlectedNav } = useProfile();
const { getProfile } = useUser()

getProfile()

const screen = useAwesomeScreen()

let selectedTab = ref(0)

function changeTab(index: any) {
  SlectedNav(index)
}

watch(
  () => useProfile().$state.count,
  (value: number) => {
    selectedTab.value = value
  },
  { deep: true, immediate: true }
);

</script>

<template>
  <div class="container pt-[5%]">
    <LayoutWrapper>
      <LayoutSection>
        <div class="mb-6">
          <HeadlessTabGroup :selectedIndex="selectedTab" @change="changeTab" as="div"
            class="flex flex-col md:flex-row md:space-x-4" :vertical="screen.higherThan('md')">
            <HeadlessTabList class="md:border-r border-solid border-gray-800 w-full md:w-1/6 flex md:flex-col mb-2 pr-4">
              <PageHomeAccountSidebar />
            </HeadlessTabList>
            <HeadlessTabPanels class="flex-1 pl-4">
              <HeadlessTabPanel>
                <PageHomeAccountProfile />
              </HeadlessTabPanel>
              <HeadlessTabPanel>
                <PageHomeAccountWallet />
              </HeadlessTabPanel>
              <HeadlessTabPanel>
                <PageHomeAccountSocial />
              </HeadlessTabPanel>
              <HeadlessTabPanel>
                <PageHomeAccountAccessToken />
              </HeadlessTabPanel>
              <HeadlessTabPanel>
                <PageHomeAccountApps />
              </HeadlessTabPanel>
            </HeadlessTabPanels>
          </HeadlessTabGroup>
        </div>
      </LayoutSection>
    </LayoutWrapper>
  </div>
</template>
