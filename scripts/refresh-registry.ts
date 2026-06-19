/**
 * refresh-registry.ts
 *
 * 组件注册中心刷新脚本
 *
 * 扫描 packages/components/src/*\/meta.ts，从每个组件的元数据
 * 自动生成/更新以下文件，消除多点同步：
 *   1. packages/components/src/index.ts           — 静态 export 列表（保 tree-shaking）
 *   2. packages/alkaid-plus/src/component-list.generated.ts — 全量安装组件数组
 *   3. packages/resolver/src/component-map.generated.ts     — resolver 组件名→样式模块映射
 *   4. packages/alkaid-plus/global.d.ts           — Vue GlobalComponents 类型声明
 *   5. frontend-docs/.vitepress/sidebar.generated.ts — 文档侧边栏
 *
 * 新增组件时只需：
 *   1) 在 packages/components/src/<kebab-name>/ 下编写组件
 *   2) 在同目录下添加 meta.ts（导出 ComponentMeta）
 *   3) 运行 pnpm registry
 * 其他所有入口、resolver、类型、文档导航全部自动同步。
 */

import { readdirSync, statSync, writeFileSync, existsSync } from 'fs'
import { resolve, dirname, basename } from 'path'
import { fileURLToPath } from 'url'
import { pathToFileURL } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(__dirname, '..')
const componentsSrc = resolve(projectRoot, 'packages/components/src')

// ─── 类型 ───────────────────────────────────────────────
import type { ComponentMeta, ComponentCategory } from '../packages/components/src/meta-types'

type CategoryLabel = Record<ComponentCategory, string>

const CATEGORY_LABELS: CategoryLabel = {
  Basic: 'Basic 基础组件',
  Form: 'Form 表单组件',
  Data: 'Data 数据展示',
  Navigation: 'Navigation 导航',
  Feedback: 'Feedback 反馈',
  Layout: 'Layout 布局',
  Others: 'Others 其他',
}

const CATEGORY_ORDER: ComponentCategory[] = [
  'Basic',
  'Form',
  'Data',
  'Navigation',
  'Feedback',
  'Layout',
  'Others',
]

// ─── 扫描并加载 meta ─────────────────────────────────────
async function loadAllMeta(): Promise<ComponentMeta[]> {
  const entries = readdirSync(componentsSrc)
  const metas: ComponentMeta[] = []

  for (const entry of entries) {
    const dirPath = resolve(componentsSrc, entry)
    if (!statSync(dirPath).isDirectory()) continue

    const metaPath = resolve(dirPath, 'meta.ts')
    if (!existsSync(metaPath)) {
      // 没有 meta.ts 的目录（如可能存在的 shared/utils）直接跳过
      continue
    }

    const metaUrl = pathToFileURL(metaPath).href
    const mod = await import(metaUrl)
    const meta: ComponentMeta = mod.default || mod.meta
    if (!meta) {
      console.warn(`⚠️  ${entry}/meta.ts 没有导出 default 或 meta，已跳过`)
      continue
    }
    metas.push(meta)
  }

  // 按分类顺序、然后 dir 名排序
  metas.sort((a, b) => {
    const ca = CATEGORY_ORDER.indexOf(a.category)
    const cb = CATEGORY_ORDER.indexOf(b.category)
    if (ca !== cb) return ca - cb
    return a.dir.localeCompare(b.dir)
  })

  return metas
}

// ─── 1. 生成 components/src/index.ts ────────────────────
function genComponentsIndex(metas: ComponentMeta[]): string {
  const lines: string[] = [
    '// Alkaid Plus Components',
    '// 基于 Element Plus 的二次封装组件库',
    '// ===============================================',
    '//  ⚠️ 本文件由 scripts/refresh-registry.ts 自动生成',
    '//  请勿手动修改，新增组件后请运行 pnpm registry',
    '// ===============================================',
    '',
  ]

  const grouped = new Map<ComponentCategory, ComponentMeta[]>()
  for (const cat of CATEGORY_ORDER) grouped.set(cat, [])
  for (const m of metas) grouped.get(m.category)!.push(m)

  for (const cat of CATEGORY_ORDER) {
    const list = grouped.get(cat)!
    if (list.length === 0) continue
    lines.push(`// ${CATEGORY_LABELS[cat]}`)
    for (const m of list) {
      lines.push(`export * from './${m.dir}'`)
    }
    lines.push('')
  }

  return lines.join('\n')
}

// ─── 2. 生成 alkaid-plus/src/component-list.generated.ts ─
function genComponentList(metas: ComponentMeta[]): string {
  // 全量安装规则：
  // - kind === 'component' 的目录下所有导出均为 SFC 组件，全部注册（含子组件如 AkOption/AkFormItem/AkTableColumn/AkButtonGroup）
  // - kind === 'function'（AkMessage/AkMessageBox/AkNotification/AkLoading service）不自动注册
  // - kind === 'directive'（vInfiniteScroll）不自动注册
  // - 以 'Directive' 结尾的导出（如 AkLoadingDirective）也不注册为组件
  const componentMetas = metas.filter((m) => m.kind === 'component')

  const installExports: string[] = []
  for (const m of componentMetas) {
    for (const exp of m.exports) {
      if (exp.endsWith('Directive')) continue
      installExports.push(exp)
    }
  }

  const importBlock =
    `import {\n` +
    installExports.map((n) => `  ${n},`).join('\n') +
    `\n} from '@alkaid-plus/components'`

  const componentArray = installExports.map((n) => `  ${n},`).join('\n')

  return `// ===============================================
//  ⚠️ 本文件由 scripts/refresh-registry.ts 自动生成
//  请勿手动修改，新增组件后请运行 pnpm registry
// ===============================================
// @ts-nocheck

${importBlock}

import type { Plugin } from 'vue'

/**
 * 全量安装的组件列表（仅 SFC 组件，含子组件）
 * 包含每个 component 类型目录下的全部导出（如 AkButton + AkButtonGroup、AkSelect + AkOption + AkOptionGroup、
 * AkForm + AkFormItem、AkTable + AkTableColumn 等）。
 * 函数式组件（Message/Notification/MessageBox/Loading service）和指令（vLoading/vInfiniteScroll）
 * 不自动注册，与 Element Plus 行为一致，需手动导入使用。
 */
export const _akAllComponents: Plugin[] = [
${componentArray}
]
`
}

// ─── 3. 生成 resolver/src/component-map.generated.ts ─────
function genResolverMap(metas: ComponentMeta[]): string {
  const lines: string[] = [
    '// ===============================================',
    '//  ⚠️ 本文件由 scripts/refresh-registry.ts 自动生成',
    '//  请勿手动修改，新增组件后请运行 pnpm registry',
    '// ===============================================',
    '',
    '/** 组件 PascalName → Element Plus 样式模块名（kebab-case） */',
    'export const componentStyleMap: Record<string, string> = {',
  ]

  const directiveEntries: [string, string][] = []

  for (const m of metas) {
    const defaultStyle = m.style || m.dir
    for (const exp of m.exports) {
      // 子导出样式优先级：exportStyles[exp] > m.style > m.dir
      const style = m.exportStyles?.[exp] || defaultStyle
      // 检测指令导出：以 Directive 结尾
      if (exp.endsWith('Directive')) {
        // AkLoadingDirective -> Loading
        const directiveName = exp.replace(/^Ak/, '').replace(/Directive$/, '')
        directiveEntries.push([directiveName, style])
        continue
      }
      // 纯指令目录（如 infinite-scroll），kind === 'directive'
      if (m.kind === 'directive') {
        // AkInfiniteScroll -> InfiniteScroll
        const directiveName = exp.replace(/^Ak/, '')
        directiveEntries.push([directiveName, style])
        continue
      }
      // 函数式组件（Message/Notification/MessageBox/Loading service）
      // 不加入组件样式映射（它们是服务，不是模板组件）
      if (m.kind === 'function') {
        continue
      }
      // SFC 组件
      lines.push(`  ${exp}: '${style}',`)
    }
  }

  lines.push('}')
  lines.push('')
  lines.push('/** 指令名 → Element Plus 样式模块名 */')
  lines.push('export const directiveStyleMap: Record<string, string> = {')
  for (const [name, style] of directiveEntries) {
    lines.push(`  ${name}: '${style}',`)
  }

  lines.push('}')
  lines.push('')

  return lines.join('\n')
}

// ─── 4. 生成 alkaid-plus/global.d.ts ────────────────────
function genGlobalDts(metas: ComponentMeta[]): string {
  const componentExports: string[] = []
  for (const m of metas) {
    for (const exp of m.exports) {
      // 指令导出（以 Directive 结尾）和函数式组件不加入 GlobalComponents
      if (exp.endsWith('Directive')) continue
      if (m.kind === 'function' || m.kind === 'directive') continue
      componentExports.push(exp)
    }
  }

  const importLines = componentExports.map((n) => `  ${n},`).join('\n')
  const globalLines = componentExports
    .map((n) => `    ${n}: typeof ${n}`)
    .join('\n')

  return `// Alkaid Plus Global Type Definitions
// ===============================================
//  ⚠️ 本文件由 scripts/refresh-registry.ts 自动生成
//  请勿手动修改，新增组件后请运行 pnpm registry
// ===============================================

import type {
${importLines}
} from 'alkaid-plus'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
${globalLines}
  }
}

export {}
`
}

// ─── 5. 生成 frontend-docs/.vitepress/sidebar.generated.ts ─
function genSidebar(metas: ComponentMeta[]): string {
  const sidebarEntries: string[] = []

  const grouped = new Map<ComponentCategory, ComponentMeta[]>()
  for (const cat of CATEGORY_ORDER) grouped.set(cat, [])
  for (const m of metas) {
    if (m.inSidebar === false) continue
    grouped.get(m.category)!.push(m)
  }

  for (const cat of CATEGORY_ORDER) {
    const list = grouped.get(cat)!
    if (list.length === 0) continue

    const items = list
      .map((m) => `        { text: '${m.label}', link: '/components/${m.dir}' },`)
      .join('\n')

    sidebarEntries.push(
      `    {
      text: '${CATEGORY_LABELS[cat]}',
      items: [
${items}
      ],
    },`
    )
  }

  return `// ===============================================
//  ⚠️ 本文件由 scripts/refresh-registry.ts 自动生成
//  请勿手动修改，新增组件后请运行 pnpm registry
// ===============================================

import type { DefaultTheme } from 'vitepress'

export const componentSidebar: DefaultTheme.SidebarItem[] = [
${sidebarEntries.join('\n')}
]
`
}

// ─── 主流程 ─────────────────────────────────────────────
async function main() {
  console.log('🔍 扫描组件元数据...')
  const metas = await loadAllMeta()
  console.log(`   发现 ${metas.length} 个组件目录`)

  const outputs: [string, string][] = [
    [resolve(componentsSrc, 'index.ts'), genComponentsIndex(metas)],
    [
      resolve(projectRoot, 'packages/alkaid-plus/src/component-list.generated.ts'),
      genComponentList(metas),
    ],
    [
      resolve(projectRoot, 'packages/resolver/src/component-map.generated.ts'),
      genResolverMap(metas),
    ],
    [resolve(projectRoot, 'packages/alkaid-plus/global.d.ts'), genGlobalDts(metas)],
    [
      resolve(projectRoot, 'frontend-docs/.vitepress/sidebar.generated.ts'),
      genSidebar(metas),
    ],
  ]

  for (const [filePath, content] of outputs) {
    writeFileSync(filePath, content, 'utf-8')
    console.log(`✅ 生成 ${basename(dirname(filePath))}/${basename(filePath)}`)
  }

  console.log('\n🎉 注册表刷新完成！')
}

main().catch((err) => {
  console.error('❌ 刷新失败:', err)
  process.exit(1)
})
