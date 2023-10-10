<script setup lang="ts">
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
              class="md:border-r border-solid border-gray-800 w-full md:w-1/6 flex md:flex-col mb-2 pr-4"
            >
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
