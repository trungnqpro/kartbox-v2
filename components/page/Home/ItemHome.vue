<template>
  <div class="text-center">
    <div
      class="text-[24px]"
      style="
        background: linear-gradient(90deg, #fff 0%, #f90 99.96%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      "
    >
      {{ title }}
    </div>
    <div class="text-[64px]">{{ contents }}</div>
    <div class="text-[24px] flex justify-center">
      <div class="max-w-[50%]">{{ detail }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'contents', 'detail'],
}
</script>
