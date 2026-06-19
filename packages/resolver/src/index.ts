import type { ComponentResolver, ComponentInfo } from 'unplugin-vue-components'
import { componentMap, directiveMap } from './component-map.generated'

export interface AlkaidPlusResolverOptions {
  /**
   * 是否导入样式
   * @default 'css'
   */
  importStyle?: boolean | 'css' | 'sass'

  /**
   * 是否使用 Element Plus 的样式
   * @default true
   */
  useElementPlusStyle?: boolean

  /**
   * 组件前缀
   * @default 'Ak'
   */
  prefix?: string

  /**
   * 排除的组件
   * @default []
   */
  exclude?: string[]

  /**
   * 指令支持
   * @default true
   */
  directives?: boolean

  /**
   * 自动导入 Element Plus
   * @default true
   */
  autoImportElementPlus?: boolean
}

function resolveSideEffects(
  elComponentName: string,
  importStyle: boolean | 'css' | 'sass',
  useElementPlusStyle: boolean
): string | undefined {
  if (!importStyle || !useElementPlusStyle) return undefined
  if (importStyle === 'sass') {
    return `element-plus/es/components/${elComponentName}/style/index`
  }
  return `element-plus/es/components/${elComponentName}/style/css`
}

/**
 * Alkaid Plus 组件解析器
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import Components from 'unplugin-vue-components/vite'
 * import { AkResolver } from '@alkaid-plus/resolver'
 *
 * export default defineConfig({
 *   plugins: [
 *     Components({
 *       resolvers: [AkResolver()],
 *     }),
 *   ],
 * })
 * ```
 */
export function AkResolver(options: AlkaidPlusResolverOptions = {}): ComponentResolver {
  const {
    importStyle = 'css',
    useElementPlusStyle = true,
    prefix = 'Ak',
    exclude = [],
  } = options

  return {
    type: 'component',
    resolve: (name: string): ComponentInfo | undefined => {
      if (!name.startsWith(prefix)) return undefined
      if (exclude.includes(name)) return undefined
      if (!(name in componentMap)) return undefined

      const elComponentName = componentMap[name]

      const result: ComponentInfo = {
        name,
        from: 'alkaid-plus',
      }

      const sideEffects = resolveSideEffects(elComponentName, importStyle, useElementPlusStyle)
      if (sideEffects) result.sideEffects = sideEffects

      return result
    },
  }
}

/**
 * Alkaid Plus 指令解析器
 */
export function AkDirectiveResolver(
  options: Pick<AlkaidPlusResolverOptions, 'importStyle' | 'useElementPlusStyle'> = {}
): ComponentResolver {
  const { importStyle = 'css', useElementPlusStyle = true } = options

  return {
    type: 'directive',
    resolve: (name: string): ComponentInfo | undefined => {
      const meta = directiveMap[name]
      if (!meta) return undefined

      const result: ComponentInfo = {
        name: meta.importName,
        from: 'alkaid-plus',
      }

      const sideEffects = resolveSideEffects(meta.elStyleKey, importStyle, useElementPlusStyle)
      if (sideEffects) result.sideEffects = sideEffects

      return result
    },
  }
}

export default AkResolver
