import type { Plugin } from 'vue'
import { makeInstaller } from '@alkaid-plus/utils'

// 导出所有组件（类型 + 值，支持按需引入 tree-shaking）
export * from '@alkaid-plus/components'

// 导出所有 hooks
export * from '@alkaid-plus/hooks'

// 导出所有工具函数
export * from '@alkaid-plus/utils'

// 自动收集的全量安装组件列表（由 scripts/refresh-registry.ts 生成）
import { _akAllComponents } from './component-list.generated'

// 创建安装器
const installer = makeInstaller(_akAllComponents as Plugin[])

// 默认导出
export default installer

// 版本信息
export const version = '1.0.0'

/**
 * 全量安装 Alkaid Plus
 *
 * @example
 * ```ts
 * import { createApp } from 'vue'
 * import AlkaidPlus from 'alkaid-plus'
 * import 'alkaid-plus/dist/index.css'
 *
 * const app = createApp(App)
 * app.use(AlkaidPlus)
 * ```
 */
export const install = installer.install
