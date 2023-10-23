import { defu, createDefu } from 'defu'
import { extendTailwindMerge } from 'tailwind-merge'
import type { Strategy } from '~/types'

const customTwMerge = extendTailwindMerge({
  classGroups: {
    icons: [(classPart: string) => /^i-/.test(classPart)],
  },
})

const defuTwMerge = createDefu((obj, key, value, namespace) => {
  if (
    namespace !== 'default' &&
    typeof obj[key] === 'string' &&
    typeof value === 'string' &&
    obj[key] &&
    value
  ) {
    // @ts-ignore
    obj[key] = customTwMerge(obj[key], value)
    return true
  }
})

export function mergeConfig<T>(strategy: Strategy, ...configs: any[]): T {
  if (strategy === 'override') {
    return defu({}, ...configs) as T
  }

  return defuTwMerge({}, ...configs) as T
}

export function hexToRgb(hex: string) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (_, r, g, b) {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(
        result[3],
        16
      )}`
    : null
}

export function getSlotsChildren(slots: any) {
  let children = slots.default?.()
  if (children.length) {
    children = children
      .flatMap((c) => {
        if (typeof c.type === 'symbol') {
          if (typeof c.children === 'string') {
            // `v-if="false"` or commented node
            return
          }
          return c.children
        } else if (c.type.name === 'ContentSlot') {
          return c.ctx.slots.default?.()
        }
        return c
      })
      .filter(Boolean)
  }
  return children
}
export const limitLetter = (_val = '', _numberSlice = 18) => {
  if (_val.length <= _numberSlice) return _val
  return `${_val.substring(0, _numberSlice / 2)}...${_val.substring(
    _val.length - _numberSlice / 2 - 3
  )}`
}

export const replaceNullWithEmptyString = (obj = {}) => {
  for (const key in obj) {
    if (obj[key] === null) {
      obj[key] = ''
    }
  }
  return obj
}

export * from './lodash'
