/**
 * 组件生成脚本
 * 用于快速生成 Element Plus 组件的二次封装模板
 *
 * 使用方法: pnpm gen ComponentName
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const componentsDir = resolve(__dirname, '../packages/components/src')

const componentName = process.argv[2]

if (!componentName) {
  console.error('请提供组件名称，例如: pnpm gen Dialog')
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

// 写入文件
writeFileSync(resolve(componentDir, 'index.ts'), indexContent)
writeFileSync(resolve(srcDir, `${kebab}.vue`), vueContent)
writeFileSync(resolve(srcDir, `${kebab}.ts`), tsContent)
writeFileSync(resolve(srcDir, 'instance.ts'), instanceContent)

console.log(\`✅ 组件 Ak${pascal} 创建成功！\`)
console.log(\`   目录: packages/components/src/${kebab}/\`)
console.log(\`\n请记得在 packages/components/src/index.ts 中导出该组件\`)
