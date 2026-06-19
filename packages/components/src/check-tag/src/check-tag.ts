import type { ExtractPropTypes, PropType } from 'vue'

export const checkTagProps = {
  // 在此添加 props 定义
} as const

export const checkTagEmits = {
  // 在此添加 emits 定义
}

export type CheckTagProps = ExtractPropTypes<typeof checkTagProps>
export type CheckTagEmits = typeof checkTagEmits
