// Alkaid Plus Global Type Definitions
// 由 @alkaid-plus/components/manifest 派生，无需手工维护组件清单。
//
// 实现方式：通过 namespace import 把 alkaid-plus 整个模块当作一个对象类型，
// 然后用映射类型把所有以 `Ak` 开头的导出按同名形式塞进 GlobalComponents。
// 这样新增组件只要在 manifest + components 主入口暴露 AkXxx，IDE 和 volar
// 立刻就能识别，不用再手工同步本文件。

import type * as AlkaidPlus from 'alkaid-plus'

type AlkaidExports = typeof AlkaidPlus

/** 提取所有以 Ak 开头的导出 key */
type AlkaidComponentKeys = {
  [K in keyof AlkaidExports]: K extends `Ak${string}` ? K : never
}[keyof AlkaidExports]

/** 把这些 Ak* 导出映射成 GlobalComponents 的同名条目 */
type AlkaidGlobalComponents = {
  [K in AlkaidComponentKeys]: AlkaidExports[K]
}

declare module '@vue/runtime-core' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface GlobalComponents extends AlkaidGlobalComponents {}
}

export {}
