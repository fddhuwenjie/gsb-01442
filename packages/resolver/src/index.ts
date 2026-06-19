import type { ComponentResolver, ComponentInfo } from 'unplugin-vue-components'
// 走 monorepo tsconfig paths（@alkaid-plus/* → packages/*\/src）解析到
// `packages/components/src/manifest.ts`。
// 在 tsup 构建时，由 tsup.config.ts 中的 esbuildOptions.alias 把它显式
// 重写为绝对源码路径，并通过 noExternal 把 manifest 内联进 resolver 自己的 dist；
// 这样源码态、构建态、发布态三种情况下都能稳定解析，且发布产物不依赖
// `@alkaid-plus/components` 是否预先生成 dist。
import {
  buildResolverComponentMap,
  COMPONENT_PREFIX,
  DIRECTIVE_MANIFEST,
} from '@alkaid-plus/components/manifest'

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
 * Alkaid Plus 组件解析器
 *
 * 注意：组件名映射现已从 @alkaid-plus/components/manifest 派生，
 * 不再在本文件中重复维护。新增组件时只需更新 manifest，本 resolver 自动生效。
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
    prefix = COMPONENT_PREFIX,
    exclude = [],
  } = options

  // 按调用方传入的 prefix 重新展开 manifest，保证用户自定义前缀仍可用
  const components =
    prefix === COMPONENT_PREFIX
      ? buildResolverComponentMap()
      : buildResolverComponentMap(prefix)

  return {
    type: 'component',
    resolve: (name: string): ComponentInfo | undefined => {
      // 检查是否是 Alkaid Plus 组件
      if (!name.startsWith(prefix)) {
        return undefined
      }

      // 检查是否在排除列表中
      if (exclude.includes(name)) {
        return undefined
      }

      // 检查组件是否存在
      const componentName = name
      if (!(componentName in components)) {
        return undefined
      }

      const elComponentName = components[componentName]

      // 构建导入信息
      const result: ComponentInfo = {
        name: componentName,
        from: 'alkaid-plus',
      }

      // 处理样式导入
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

  // 由 manifest 派生
  const directives: Record<string, string> = Object.fromEntries(
    DIRECTIVE_MANIFEST.map((d) => [d.name, d.elStyle])
  )

  return {
    type: 'directive',
    resolve: (name: string): ComponentInfo | undefined => {
      if (!(name in directives)) {
        return undefined
      }

      const elDirectiveName = directives[name]

      const result: ComponentInfo = {
        name: `Ak${name}Directive`,
        from: 'alkaid-plus',
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
