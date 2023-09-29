<template>
  <div class="overflow-x-hidden">
    <LayoutHeaderNavbar class="h-[64px] max-h-[64px]" />
    <LayoutContent>
      <slot />
    </LayoutContent>
    <LayoutFooter class="h-[52px] md:h-[42px]" />
  </div>
</template>
