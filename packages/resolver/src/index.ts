import type { ComponentResolver, ComponentInfo } from 'unplugin-vue-components'
import { componentStyleMap, directiveStyleMap } from './component-map.generated'

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

/**
 * 将 PascalCase 转换为 kebab-case（去除 Ak 前缀）
 */
function toKebabCase(str: string): string {
  return str
    .replace(/^Ak/, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
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
      if (!name.startsWith(prefix)) {
        return undefined
      }

      if (exclude.includes(name)) {
        return undefined
      }

      if (!(name in componentStyleMap)) {
        return undefined
      }

      const elComponentName = componentStyleMap[name]
      const kebabName = toKebabCase(name)
      void kebabName

      const result: ComponentInfo = {
        name,
        from: 'alkaid-plus',
      }

      if (importStyle && useElementPlusStyle) {
        if (importStyle === 'sass') {
          result.sideEffects = `element-plus/es/components/${elComponentName}/style/index`
        } else {
          result.sideEffects = `element-plus/es/components/${elComponentName}/style/css`
        }
      }

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
      if (!(name in directiveStyleMap)) {
        return undefined
      }

      const elDirectiveName = directiveStyleMap[name]

      const result: ComponentInfo = {
        name: `Ak${name}Directive`,
        from: 'alkaid-plus',
      }

      // 特殊处理：InfiniteScroll 导出名称为 AkInfiniteScroll（无 Directive 后缀）
      if (name === 'InfiniteScroll') {
        result.name = 'AkInfiniteScroll'
      }

      if (importStyle && useElementPlusStyle) {
        if (importStyle === 'sass') {
          result.sideEffects = `element-plus/es/components/${elDirectiveName}/style/index`
        } else {
          result.sideEffects = `element-plus/es/components/${elDirectiveName}/style/css`
        }
      }

      return result
    },
  }
}

export default AkResolver
