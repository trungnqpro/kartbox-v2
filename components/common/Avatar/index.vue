<template>
  <span :class="wrapperClass">
    <img
      v-if="url && !error"
      :class="imgClass"
      :alt="alt"
      :src="url"
      v-bind="attrs"
      @error="onError"
    />
    <span v-else-if="text" :class="ui.text">{{ text }}</span>
    <CommonIcon v-else-if="icon" :name="icon" :class="iconClass" />
    <span v-else-if="placeholder" :class="ui.placeholder">{{
      placeholder
    }}</span>

    <span v-if="chipColor" :class="chipClass">
      {{ chipText }}
    </span>
    <slot />
  </span>
</template>

<script lang="ts">
import { twJoin, twMerge } from 'tailwind-merge'
import type { PropType } from 'vue'
import { computed, defineComponent, ref, toRef, watch } from 'vue'
import { useUI } from '../../../composables/ui/useUI'
import type {
  AvatarChipColor,
  AvatarChipPosition,
  AvatarSize,
  Strategy,
} from '~/types'
import { mergeConfig } from '../../../utils'

import appConfig from '~/app.config'

const config = mergeConfig<typeof appConfig.ui.avatar>(
  appConfig.ui.strategy,
  appConfig.ui.avatar,
  appConfig.ui.avatar
)

export default defineComponent({
  components: {
    // UIcon,
  },
  inheritAttrs: false,
  props: {
    src: {
      type: [String, Boolean],
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: () => config.default.icon,
    },
    size: {
      type: String as PropType<AvatarSize>,
      default: () => config.default.size,
      validator(value: string) {
        return Object.keys(config.size).includes(value)
      },
    },
    chipColor: {
      type: String as PropType<AvatarChipColor>,
      default: () => config.default.chipColor,
      validator(value: string) {
        return ['gray', ...appConfig.ui.colors].includes(value)
      },
    },
    chipPosition: {
      type: String as PropType<AvatarChipPosition>,
      default: () => config.default.chipPosition,
      validator(value: string) {
        return Object.keys(config.chip.position).includes(value)
      },
    },
    chipText: {
      type: [String, Number],
      default: null,
    },
    imgClass: {
      type: String,
      default: '',
    },
    class: {
      type: [String, Object, Array] as PropType<any>,
      default: undefined,
    },
    ui: {
      type: Object as PropType<
        Partial<typeof config & { strategy?: Strategy }>
      >,
      default: undefined,
    },
  },
  setup(props) {
    const { ui, attrs } = useUI('avatar', toRef(props, 'ui'), config)

    const url = computed(() => {
      if (typeof props.src === 'boolean') {
        return null
      }
      return props.src
    })

    const placeholder = computed(() => {
      return (props.alt || '')
        .split(' ')
        .map((word) => word.charAt(0))
        .join('')
        .substring(0, 2)
    })

    const wrapperClass = computed(() => {
      return twMerge(
        twJoin(
          ui.value.wrapper,
          (error.value || !url.value) && ui.value.background,
          ui.value.rounded,
          ui.value.size[props.size]
        ),
        props.class
      )
    })

    const imgClass = computed(() => {
      return twMerge(
        twJoin(ui.value.rounded, ui.value.size[props.size]),
        props.imgClass
      )
    })

    const iconClass = computed(() => {
      return twJoin(ui.value.icon.base, ui.value.icon.size[props.size])
    })

    const chipClass = computed(() => {
      return twJoin(
        ui.value.chip.base,
        ui.value.chip.size[props.size],
        ui.value.chip.position[props.chipPosition],
        ui.value.chip.background.replaceAll('{color}', props.chipColor)
      )
    })

    const error = ref(false)

    watch(
      () => props.src,
      () => {
        if (error.value) {
          error.value = false
        }
      }
    )

    function onError() {
      error.value = true
    }

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      attrs,
      wrapperClass,
      // eslint-disable-next-line vue/no-dupe-keys
      imgClass,
      iconClass,
      chipClass,
      url,
      placeholder,
      error,
      onError,
    }
  },
})
</script>
