/**
 * 组件同步脚本
 * 从 packages/components/src/registry.ts 读取组件清单，自动生成：
 * 1. packages/components/src/index.ts - 组件导出
 * 2. packages/alkaid-plus/src/index.ts - 主入口全量注册
 * 3. packages/resolver/src/index.ts - 自动导入解析器
 * 4. frontend-docs/.vitepress/components.generated.ts - 文档侧边栏
 *
 * 使用方法: pnpm sync-components
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const dataPath = pathToFileURL(resolve(rootDir, 'packages/components/src/component-data.mjs')).href
const { componentList, directiveList, categoryLabels } = await import(dataPath)

type LocalComponentEntry = {
  name: string
  kebabName: string
  path: string
  category: string
  docTitle: string
  exportNames: string[]
  isPlugin?: boolean
  subComponents?: Record<string, string>
}

function generateComponentsIndex(): string {
  const exportsByCategory = new Map<string, LocalComponentEntry[]>()

  componentList.forEach((entry) => {
    if (!exportsByCategory.has(entry.category)) {
      exportsByCategory.set(entry.category, [])
    }
    exportsByCategory.get(entry.category)!.push(entry)
  })

  const categoryOrder: string[] = ['Basic', 'Form', 'Data', 'Navigation', 'Feedback', 'Layout', 'Others']

  let content = `// Alkaid Plus Components
// 基于 Element Plus 的二次封装组件库
// 此文件由 scripts/sync-components.ts 自动生成，请勿手动修改

`

  categoryOrder.forEach((category) => {
    const entries = exportsByCategory.get(category)
    if (!entries || entries.length === 0) return

    content += `// ${categoryLabels[category as keyof typeof categoryLabels]}\n`
    entries.forEach((entry) => {
      content += `export * from '${entry.path}'\n`
    })
    content += '\n'
  })

  return content
}

function generateAlkaidPlusIndex(): string {
  const allExports: string[] = []
  componentList.forEach((entry) => {
    entry.exportNames.forEach((name) => {
      allExports.push(name)
    })
  })

  const imports = allExports.map((name) => `  ${name},`).join('\n')
  const componentsArray = allExports.map((name) => `  ${name},`).join('\n')

  return `import type { App, Plugin } from 'vue'
import { makeInstaller } from '@alkaid-plus/utils'

// 导出所有组件
export * from '@alkaid-plus/components'

// 导出所有 hooks
export * from '@alkaid-plus/hooks'

// 导出所有工具函数
export * from '@alkaid-plus/utils'

// 导入所有组件用于全量注册
// 此部分由 scripts/sync-components.ts 自动生成
import {
${imports}
} from '@alkaid-plus/components'

// 所有组件列表
// 此文件由 scripts/sync-components.ts 自动生成，请勿手动修改
const components: Plugin[] = [
${componentsArray}
]

// 创建安装器
const installer = makeInstaller(components)

// 默认导出
export default installer

// 版本信息
export const version = '1.0.0'

/**
 * 全量安装 Alkaid Plus
 *
 * @example
 * \`\`\`ts
 * import { createApp } from 'vue'
 * import AlkaidPlus from 'alkaid-plus'
 * import 'alkaid-plus/dist/index.css'
 *
 * const app = createApp(App)
 * app.use(AlkaidPlus)
 * \`\`\`
 */
export const install = installer.install
`
}

function generateResolver(): string {
  const componentMapping: Record<string, string> = {}
  componentList.forEach((entry) => {
    entry.exportNames.forEach((name) => {
      if (!name.endsWith('Directive')) {
        if (entry.subComponents && entry.subComponents[name]) {
          componentMapping[name] = entry.subComponents[name]
        } else {
          componentMapping[name] = entry.kebabName
        }
      }
    })
  })

  const directiveMapping: Record<string, string> = {}
  directiveList.forEach((d: { name: string; kebabName: string }) => {
    directiveMapping[d.name] = d.kebabName
  })

  const componentEntries = Object.entries(componentMapping)
    .map(([k, v]) => `  ${k}: '${v}',`)
    .join('\n')

  const directiveEntries = Object.entries(directiveMapping)
    .map(([k, v]) => `    ${k}: '${v}',`)
    .join('\n')

  return `import type { ComponentResolver, ComponentInfo } from 'unplugin-vue-components'

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

// 所有 Alkaid Plus 组件映射到对应的 Element Plus 组件
// 此映射由 scripts/sync-components.ts 自动生成
const components: Record<string, string> = {
${componentEntries}
}

// 将 PascalCase 转换为 kebab-case
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
 * \`\`\`ts
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
 * \`\`\`
 */
export function AkResolver(options: AlkaidPlusResolverOptions = {}): ComponentResolver {
  const {
    importStyle = 'css',
    useElementPlusStyle = true,
    prefix = 'Ak',
    exclude = [],
    directives = true,
    autoImportElementPlus = true,
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

      const componentName = name
      if (!(componentName in components)) {
        return undefined
      }

      const elComponentName = components[componentName]
      const kebabName = toKebabCase(name)

      const result: ComponentInfo = {
        name: componentName,
        from: 'alkaid-plus',
      }

      if (importStyle && useElementPlusStyle) {
        if (importStyle === 'sass') {
          result.sideEffects = \`element-plus/es/components/\${elComponentName}/style/index\`
        } else {
          result.sideEffects = \`element-plus/es/components/\${elComponentName}/style/css\`
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

  const directives: Record<string, string> = {
${directiveEntries}
  }

  return {
    type: 'directive',
    resolve: (name: string): ComponentInfo | undefined => {
      if (!(name in directives)) {
        return undefined
      }

      const elDirectiveName = directives[name]

      const result: ComponentInfo = {
        name: \`Ak\${name}Directive\`,
        from: 'alkaid-plus',
      }

      if (importStyle && useElementPlusStyle) {
        if (importStyle === 'sass') {
          result.sideEffects = \`element-plus/es/components/\${elDirectiveName}/style/index\`
        } else {
          result.sideEffects = \`element-plus/es/components/\${elDirectiveName}/style/css\`
        }
      }

      return result
    },
  }
}

export default AkResolver
`
}

function generateDocsComponents(): string {
  const categoryOrder: string[] = ['Basic', 'Form', 'Data', 'Navigation', 'Feedback', 'Layout', 'Others']
  const docsSidebar: Array<{ text: string; items: Array<{ text: string; link: string }> }> = []

  categoryOrder.forEach((category) => {
    const entries = componentList.filter(
      (e) => e.category === category && !e.isPlugin && !e.exportNames.some((n) => n.endsWith('Directive'))
    )
    if (entries.length === 0) return

    const items = entries
      .filter((e) => {
        const docPath = resolve(rootDir, 'frontend-docs/components', `${e.kebabName}.md`)
        return existsSync(docPath)
      })
      .map((e) => ({
        text: e.docTitle,
        link: `/components/${e.kebabName}`,
      }))

    docsSidebar.push({
      text: categoryLabels[category as keyof typeof categoryLabels],
      items,
    })
  })

  return `// 此文件由 scripts/sync-components.ts 自动生成，请勿手动修改
import type { DefaultTheme } from 'vitepress'

export const componentSidebar: DefaultTheme.SidebarItem[] = ${JSON.stringify(docsSidebar, null, 2)}
`
}

function main() {
  console.log('🔄 正在同步组件配置...\n')

  const files = [
    {
      path: resolve(rootDir, 'packages/components/src/index.ts'),
      content: generateComponentsIndex(),
      label: '组件导出 (packages/components/src/index.ts)',
    },
    {
      path: resolve(rootDir, 'packages/alkaid-plus/src/index.ts'),
      content: generateAlkaidPlusIndex(),
      label: '主入口 (packages/alkaid-plus/src/index.ts)',
    },
    {
      path: resolve(rootDir, 'packages/resolver/src/index.ts'),
      content: generateResolver(),
      label: 'Resolver (packages/resolver/src/index.ts)',
    },
    {
      path: resolve(rootDir, 'frontend-docs/.vitepress/components.generated.ts'),
      content: generateDocsComponents(),
      label: '文档配置 (frontend-docs/.vitepress/components.generated.ts)',
    },
  ]

  files.forEach((file) => {
    mkdirSync(dirname(file.path), { recursive: true })
    writeFileSync(file.path, file.content, 'utf-8')
    console.log(`✅ 已生成: ${file.label}`)
  })

  console.log('\n✨ 组件同步完成！')
  console.log(`📦 共处理 ${componentList.length} 个组件`)
  console.log(`🔌 共处理 ${directiveList.length} 个指令`)
}

main()
