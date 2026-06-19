import { makeInstaller } from '@alkaid-plus/utils'
import { installableComponents } from '@alkaid-plus/components'

// 导出所有组件
export * from '@alkaid-plus/components'

// 导出所有 hooks
export * from '@alkaid-plus/hooks'

// 导出所有工具函数
export * from '@alkaid-plus/utils'

// 创建安装器（组件清单由 @alkaid-plus/components 的 manifest 单点维护）
const installer = makeInstaller(installableComponents)

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
