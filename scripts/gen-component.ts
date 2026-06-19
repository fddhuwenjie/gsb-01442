/**
 * 组件生成脚本
 * 用于快速生成 Element Plus 组件的二次封装模板
 *
 * 使用方法: pnpm gen ComponentName [category]
 *
 * 支持的分类: Basic, Form, Data, Navigation, Feedback, Layout, Others (默认: Others)
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const componentsDir = resolve(__dirname, '../packages/components/src')
const dataFilePath = resolve(componentsDir, 'component-data.mjs')

const componentName = process.argv[2]
const category = (process.argv[3] || 'Others') as string

const validCategories = ['Basic', 'Form', 'Data', 'Navigation', 'Feedback', 'Layout', 'Others']
if (!validCategories.includes(category)) {
  console.error(`❌ 无效的分类: ${category}`)
  console.error(`   支持的分类: ${validCategories.join(', ')}`)
  process.exit(1)
}

if (!componentName) {
  console.error('请提供组件名称，例如: pnpm gen Dialog Form')
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

// 创建目录
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
writeFileSync(resolve(srcDir, `${kebab}.vue`), vueContent)
writeFileSync(resolve(srcDir, `${kebab}.ts`), tsContent)
writeFileSync(resolve(srcDir, 'instance.ts'), instanceContent)

console.log(`✅ 组件 Ak${pascal} 创建成功！`)
console.log(`   目录: packages/components/src/${kebab}/`)
console.log()
console.log(`📝 下一步操作:`)
console.log(`   1. 在 packages/components/src/component-data.mjs 中添加组件条目：`)
console.log(`      {`)
console.log(`        name: '${pascal}',`)
console.log(`        kebabName: '${kebab}',`)
console.log(`        path: './${kebab}',`)
console.log(`        category: '${category}',`)
console.log(`        docTitle: '${pascal} 组件',`)
console.log(`        exportNames: ['Ak${pascal}'],`)
console.log(`      },`)
console.log()
console.log(`   2. 运行 pnpm sync-components 同步所有配置`)
console.log(`   3. (可选) 创建文档: frontend-docs/components/${kebab}.md`)
console.log()

// 尝试自动追加到 component-data.mjs
try {
  let dataContent = readFileSync(dataFilePath, 'utf-8')
  const entryTemplate = `  {
    name: '${pascal}',
    kebabName: '${kebab}',
    path: './${kebab}',
    category: '${category}',
    docTitle: '${pascal}',
    exportNames: ['Ak${pascal}'],
  },`

  const directiveListMarker = 'export const directiveList'
  const directiveListIndex = dataContent.indexOf(directiveListMarker)
  if (directiveListIndex !== -1) {
    const beforeDirectiveList = dataContent.slice(0, directiveListIndex)
    const closeBracketIndex = beforeDirectiveList.lastIndexOf(']')
    const lastEntryMarker = '  },'
    const lastEntryIndex = beforeDirectiveList.lastIndexOf(lastEntryMarker)

    if (closeBracketIndex !== -1 && lastEntryIndex !== -1) {
      const insertPos = lastEntryIndex + lastEntryMarker.length
      dataContent =
        dataContent.slice(0, insertPos) +
        '\n' +
        entryTemplate +
        dataContent.slice(insertPos)
      writeFileSync(dataFilePath, dataContent, 'utf-8')
      console.log(`✨ 已自动在 component-data.mjs 中添加组件条目`)
      console.log(`   请检查 component-data.mjs 确认条目是否已正确添加`)
      console.log()
      console.log(`🚀 然后运行: pnpm sync-components`)
    }
  }
} catch (e) {
  console.log(`ℹ️  请手动在 component-data.mjs 中添加组件条目`)
}
