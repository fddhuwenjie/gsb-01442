/**
 * 组件生成脚本
 * 用于快速生成 Element Plus 组件的二次封装模板
 *
 * 使用方法:
 *   pnpm gen ComponentName              → 生成组件（默认 Others 分类）
 *   pnpm gen ComponentName -- --cat=Basic  → 指定分类
 *   pnpm gen ComponentName -- --label="中文名"  → 指定中文标签
 *
 * 生成后会自动运行 pnpm registry 刷新所有同步文件（导出列表、resolver、类型、文档）
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { execSync } from 'child_process'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const componentsDir = resolve(__dirname, '../packages/components/src')

const args = process.argv.slice(2)
const componentName = args[0]

if (!componentName) {
  console.error('请提供组件名称，例如: pnpm gen Dialog')
  console.error('可选参数: --cat=<Category> 指定分类 (Basic/Form/Data/Navigation/Feedback/Layout/Others)')
  console.error('          --label=<"中文名称"> 指定文档显示名')
  process.exit(1)
}

// 解析可选参数
let category = 'Others'
let label = ''
for (let i = 1; i < args.length; i++) {
  if (args[i].startsWith('--cat=')) {
    category = args[i].slice(6)
  } else if (args[i].startsWith('--label=')) {
    label = args[i].slice(8)
  }
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
const akPascal = `Ak${pascal}`

if (!label) {
  label = pascal
}

const componentDir = resolve(componentsDir, kebab)
const srcDir = resolve(componentDir, 'src')

if (existsSync(componentDir)) {
  console.error(`❌ 组件目录已存在: packages/components/src/${kebab}/`)
  process.exit(1)
}

// 创建目录
mkdirSync(srcDir, { recursive: true })

// index.ts
const indexContent = `import { withInstall } from '@alkaid-plus/utils'
import ${pascal} from './src/${kebab}.vue'

export const ${akPascal} = withInstall(${pascal})

export default ${akPascal}

export * from './src/${kebab}'
export type { ${pascal}Instance } from './src/instance'
`

// meta.ts
const metaContent = `import type { ComponentMeta } from '../meta-types'

const meta: ComponentMeta = {
  dir: '${kebab}',
  exports: ['${akPascal}'],
  style: '${kebab}',
  category: '${category}',
  label: '${label}',
  kind: 'component',
  inSidebar: false,
}

export default meta
`

// component.vue
const vueContent = `<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import { El${pascal} } from 'element-plus'
import { ${camel}Props, ${camel}Emits } from './${kebab}'

defineOptions({
  name: '${akPascal}',
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
const tsContent = `import type { ExtractPropTypes } from 'vue'

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

// 写入文件
writeFileSync(resolve(componentDir, 'index.ts'), indexContent)
writeFileSync(resolve(componentDir, 'meta.ts'), metaContent)
writeFileSync(resolve(srcDir, `${kebab}.vue`), vueContent)
writeFileSync(resolve(srcDir, `${kebab}.ts`), tsContent)
writeFileSync(resolve(srcDir, 'instance.ts'), instanceContent)

console.log(`✅ 组件 ${akPascal} 创建成功！`)
console.log(`   目录: packages/components/src/${kebab}/`)
console.log(`   分类: ${category}`)
console.log()

// 自动刷新注册表
console.log('🔄 正在刷新组件注册表...')
try {
  execSync('pnpm registry', { cwd: resolve(__dirname, '..'), stdio: 'inherit' })
} catch {
  console.error('⚠️  注册表刷新失败，请手动运行 pnpm registry')
  process.exit(1)
}

console.log()
console.log('🎉 组件注册完成！接下来你可以:')
console.log(`   1. 编辑 packages/components/src/${kebab}/src/${kebab}.vue 实现组件逻辑`)
console.log(`   2. 编辑 packages/components/src/${kebab}/meta.ts 更新元数据（分类/中文名等）`)
console.log(`   3. 如果需要文档，创建 frontend-docs/components/${kebab}.md 并将 meta.ts 中 inSidebar 设为 true`)
