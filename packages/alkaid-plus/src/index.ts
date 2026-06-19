import type { App, Plugin } from 'vue'
import { makeInstaller } from '@alkaid-plus/utils'

// All component named exports and the flat install list come from the generated file.
// To register a new component, edit scripts/components.manifest.ts and run `pnpm codegen`.
import { allComponents } from './components.generated'

// Re-export every component (AkButton, AkInput, ...), type, hooks and utils
export * from './components.generated'
export * from '@alkaid-plus/hooks'
export * from '@alkaid-plus/utils'

// Expose the component list for advanced usage (e.g. custom installers)
export { allComponents }

// Create the installer from the generated component list
const installer = makeInstaller(allComponents as Plugin[])

export default installer

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
