import type { PropType, ExtractPropTypes } from 'vue'

/**
 * 创建可为空的类型
 */
export const definePropType = <T>(val: any): PropType<T> => val

/**
 * 构建 Props 工具类型
 */
export type BuildPropType<T, V, D> = {
  type: PropType<T>
  required?: boolean
  default?: D
  validator?: (val: V) => boolean
}

/**
 * 从 Props 定义中提取类型
 */
export type ExtractPropType<T> = T extends BuildPropType<infer U, any, any> ? U : never

/**
 * 可写的 Prop 类型
 */
export type Writable<T> = { -readonly [P in keyof T]: T[P] }

/**
 * 可写的 Props 类型
 */
export type WritableArray<T> = T extends readonly (infer U)[] ? U[] : T

/**
 * 从组件 Props 中提取类型
 */
export type ExtractComponentProps<T> = T extends new (...args: any[]) => { $props: infer P }
  ? P
  : never

/**
 * 创建字符串字面量 Prop
 */
export const buildStringProp = <T extends string>(defaultValue?: T) => ({
  type: String as PropType<T>,
  default: defaultValue,
})

/**
 * 创建数字 Prop
 */
export const buildNumberProp = (defaultValue?: number) => ({
  type: Number,
  default: defaultValue,
})

/**
 * 创建布尔 Prop
 */
export const buildBooleanProp = (defaultValue = false) => ({
  type: Boolean,
  default: defaultValue,
})

/**
 * 创建数组 Prop
 */
export const buildArrayProp = <T>() => ({
  type: Array as PropType<T[]>,
  default: () => [],
})

/**
 * 创建对象 Prop
 */
export const buildObjectProp = <T extends object>(defaultValue?: () => T) => ({
  type: Object as PropType<T>,
  default: defaultValue ?? (() => ({})),
})

/**
 * 创建函数 Prop
 */
export const buildFunctionProp = <T extends (...args: any[]) => any>() => ({
  type: Function as PropType<T>,
})
