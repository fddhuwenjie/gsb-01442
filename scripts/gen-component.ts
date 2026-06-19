/**
 * 组件生成脚本
 * 用于快速生成 Element Plus 组件的二次封装模板
 *
 * 使用方法: pnpm gen ComponentName [category]
 *   category 可选 basic | form | data | navigation | feedback | layout | others
 *   未指定则默认 others
 *
 * 该脚本会一次性完成下列工作，新增组件无需手工散点同步：
 *   1) 在 packages/components/src/<kebab>/ 下生成组件模板（.vue / .ts / instance.ts / index.ts）
 *   2) 在 packages/components/src/index.ts 末尾追加 `export * from './<kebab>'`
 *   3) 在 packages/components/src/manifest.ts 的 COMPONENT_MANIFEST 中追加一项
 *   4) 在 packages/components/src/installable.ts 中追加 import + 数组成员
 *
 * 完成后，resolver、alkaid-plus 全量安装、global.d.ts、文档站侧边栏会自动生效。
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(__dirname, '..')
const componentsDir = resolve(repoRoot, 'packages/components/src')

const componentName = process.argv[2]
const category = (process.argv[3] ?? 'others') as
  | 'basic' | 'form' | 'data' | 'navigation' | 'feedback' | 'layout' | 'others'

if (!componentName) {
  console.error('请提供组件名称，例如: pnpm gen Dialog')
  console.error('用法: pnpm gen <ComponentName> [category]')
  process.exit(1)
}

const validCategories = ['basic', 'form', 'data', 'navigation', 'feedback', 'layout', 'others']
if (!validCategories.includes(category)) {
  console.error(`category 必须是: ${validCategories.join(' | ')}`)
  process.exit(1)
}

// 转换命名格式
const kebabCase = (str: string) =>
  str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

const pascalCase = (str: string) =>
  str.replace(/(^|-)(.)/g, (_, __, c) => c.toUpperCase())

const camelCase = (str: string) => {
  const pascal = pascalCase(str)
  return pascal.charAt(0).toLowerCase() + pascal.slice(1)
}

const kebab = kebabCase(componentName)
const pascal = pascalCase(componentName)
const camel = camelCase(componentName)

const componentDir = resolve(componentsDir, kebab)
const srcDir = resolve(componentDir, 'src')

// === 1. 创建组件模板目录 ===
if (!existsSync(srcDir)) {
  mkdirSync(srcDir, { recursive: true })
}

// index.ts
const indexContent = `import { withInstall } from '@alkaid-plus/utils'
import ${pascal} from './src/${kebab}.vue'

export const Ak${pascal} = withInstall(${pascal})
export default Ak${pascal}

export * from './src/${kebab}'
export type { ${pascal}Instance } from './src/instance'
`

// component.vue
const vueContent = `<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import { El${pascal} } from 'element-plus'
import { ${camel}Props, ${camel}Emits } from './${kebab}'

defineOptions({
  name: 'Ak${pascal}',
  inheritAttrs: false,
})

const props = defineProps(${camel}Props)
const emit = defineEmits(${camel}Emits)

const attrs = useAttrs()
const slots = useSlots()

const mergedProps = computed(() => ({
  ...props,
  ...attrs,
}))
</script>

<template>
  <El${pascal} v-bind="mergedProps">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </El${pascal}>
</template>
`

// component.ts
const tsContent = `import type { ExtractPropTypes, PropType } from 'vue'

export const ${camel}Props = {
  // 在此添加 props 定义
} as const

export const ${camel}Emits = {
  // 在此添加 emits 定义
}

export type ${pascal}Props = ExtractPropTypes<typeof ${camel}Props>
export type ${pascal}Emits = typeof ${camel}Emits
`

// instance.ts
const instanceContent = `import type ${pascal} from './${kebab}.vue'

export type ${pascal}Instance = InstanceType<typeof ${pascal}>
`

writeFileSync(resolve(componentDir, 'index.ts'), indexContent)
writeFileSync(resolve(srcDir, `${kebab}.vue`), vueContent)
writeFileSync(resolve(srcDir, `${kebab}.ts`), tsContent)
writeFileSync(resolve(srcDir, 'instance.ts'), instanceContent)

// === 2. 在 components/src/index.ts 中追加 export ===
const componentsIndexPath = resolve(componentsDir, 'index.ts')
const componentsIndex = readFileSync(componentsIndexPath, 'utf-8')
const exportLine = `export * from './${kebab}'`
if (!componentsIndex.includes(exportLine)) {
  writeFileSync(
    componentsIndexPath,
    componentsIndex.trimEnd() + `\n${exportLine}\n`,
  )
}

// === 3. 在 manifest.ts 中追加一项 ===
const manifestPath = resolve(componentsDir, 'manifest.ts')
const manifest = readFileSync(manifestPath, 'utf-8')
const manifestEntry = `  { name: '${pascal}', kebab: '${kebab}', category: '${category}', elStyle: '${kebab}', showInDocs: false },`
const alreadyInManifest = new RegExp(`name: '${pascal}'`).test(manifest)
if (!alreadyInManifest) {
  // 在 COMPONENT_MANIFEST 数组的右括号 `]` 之前插入
  const updated = manifest.replace(
    /(export const COMPONENT_MANIFEST: ComponentManifestItem\[\] = \[[\s\S]*?)(\n\])/,
    (_match, body, tail) => `${body}\n${manifestEntry}${tail}`,
  )
  writeFileSync(manifestPath, updated)
}

// === 4. 在 installable.ts 中追加 import + 数组成员 ===
const installablePath = resolve(componentsDir, 'installable.ts')
const installable = readFileSync(installablePath, 'utf-8')
const importLine = `import { Ak${pascal} } from './${kebab}'`
const arrayMember = `  Ak${pascal},`
let installableUpdated = installable
if (!installableUpdated.includes(importLine)) {
  // 在最后一个 `import {` 之后追加
  installableUpdated = installableUpdated.replace(
    /((?:^|\n)import \{[^}]+\} from '\.\/[a-z-]+'\n)(?![\s\S]*\nimport \{)/,
    (m) => `${m}${importLine}\n`,
  )
}
if (!installableUpdated.includes(arrayMember)) {
  installableUpdated = installableUpdated.replace(
    /(\n\]\s*$)/,
    `\n${arrayMember}$1`,
  )
}
writeFileSync(installablePath, installableUpdated)

// === 完成 ===
console.log(`✅ 组件 Ak${pascal} 创建成功！`)
console.log(`   目录:    packages/components/src/${kebab}/`)
console.log(`   分组:    ${category}`)
console.log(`已自动同步：`)
console.log(`   - packages/components/src/index.ts (export)`)
console.log(`   - packages/components/src/manifest.ts (新增条目)`)
console.log(`   - packages/components/src/installable.ts (注册到全量安装)`)
console.log(``)
console.log(`无需手工修改：resolver 映射 / alkaid-plus 安装数组 / global.d.ts / 文档 sidebar`)
console.log(`如需上文档站，请在 manifest 中将 showInDocs 改为 true，并在 frontend-docs/components/${kebab}.md 撰写文档。`)
