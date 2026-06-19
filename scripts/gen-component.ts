/**
 * 组件生成脚本
 * 用于快速生成 Element Plus 组件的二次封装模板，
 * 并自动在 scripts/components.manifest.ts 中注册，然后运行 codegen。
 *
 * 使用方法: pnpm gen ComponentName [category]
 *   category 可选: basic | form | data | navigation | feedback | layout | other
 *   默认: other
 *
 * 示例:
 *   pnpm gen Rate form
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(__dirname, '..')
const componentsDir = resolve(ROOT, 'packages/components/src')
const manifestPath = resolve(__dirname, 'components.manifest.ts')

const componentName = process.argv[2]
const category = (process.argv[3] || 'other') as
  | 'basic'
  | 'form'
  | 'data'
  | 'navigation'
  | 'feedback'
  | 'layout'
  | 'other'

const validCategories = ['basic', 'form', 'data', 'navigation', 'feedback', 'layout', 'other']
if (!validCategories.includes(category)) {
  console.error(`无效分类: ${category}，可选值: ${validCategories.join(', ')}`)
  process.exit(1)
}

if (!componentName) {
  console.error('请提供组件名称，例如: pnpm gen Rate form')
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
const exportName = `Ak${pascal}`

const componentDir = resolve(componentsDir, kebab)
const srcDir = resolve(componentDir, 'src')

// ─── 1. Scaffold component files ───────────────────────────────────────────
if (!existsSync(srcDir)) {
  mkdirSync(srcDir, { recursive: true })
}

// index.ts
const indexContent = `import { withInstall } from '@alkaid-plus/utils'
import ${pascal} from './src/${kebab}.vue'

export const ${exportName} = withInstall(${pascal})
export default ${exportName}

export * from './src/${kebab}'
export type { ${pascal}Instance } from './src/instance'
`

// component.vue
const vueContent = `<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import { El${pascal} } from 'element-plus'
import { ${camel}Props, ${camel}Emits } from './${kebab}'

defineOptions({
  name: '${exportName}',
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

console.log(`✅ 组件 ${exportName} 创建成功！`)
console.log(`   目录: packages/components/src/${kebab}/`)

// ─── 2. Append to manifest ─────────────────────────────────────────────────
const manifestContent = readFileSync(manifestPath, 'utf-8')

const newEntry = `  { folder: '${kebab}', name: '${exportName}', category: '${category}', kind: 'component' },\n`

// Find the end of the `components` array (the line that is just `]` before the directives block)
const directivesMarker = '\n/**\n * 指令清单'
const directivesIdx = manifestContent.indexOf(directivesMarker)
const componentsSection = directivesIdx === -1
  ? manifestContent
  : manifestContent.slice(0, directivesIdx)
const closingBracket = componentsSection.lastIndexOf('\n]')
if (closingBracket === -1) {
  console.error('❌ 无法定位 manifest 中的组件数组结束位置')
  process.exit(1)
}

// Check for duplicate
if (manifestContent.includes(`folder: '${kebab}'`)) {
  console.log(`ℹ️  组件 ${exportName} 已在 manifest 中注册，跳过 manifest 更新`)
} else {
  const before = manifestContent.slice(0, closingBracket)
  const after = manifestContent.slice(closingBracket)
  const updated = before + '\n' + newEntry + after
  writeFileSync(manifestPath, updated, 'utf-8')
  console.log(`✅ 已在 manifest 中注册 ${exportName} (category: ${category})`)
}

// ─── 3. Run codegen ────────────────────────────────────────────────────────
console.log('\n🔄 Running codegen...')
execSync(`npx tsx ${resolve(__dirname, 'codegen.ts')}`, {
  cwd: ROOT,
  stdio: 'inherit',
})

console.log(`\n🎉 完成！新增组件 "${exportName}" 已全链路注册。`)
console.log(`   接下来你只需编辑 packages/components/src/${kebab}/src/*.vue 实现组件逻辑，`)
console.log(`   以及（可选）新建 frontend-docs/components/${kebab}.md 编写文档，`)
console.log(`   并在 manifest 条目中补上 docs.label 即可在侧栏显示。`)
