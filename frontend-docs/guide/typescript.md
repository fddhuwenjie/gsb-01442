# TypeScript 支持

Alkaid Plus 使用 TypeScript 编写，提供完整的类型定义。

## 全局组件类型

在 `tsconfig.json` 中添加类型声明，以获得全局组件的类型提示：

```json
{
  "compilerOptions": {
    "types": ["alkaid-plus/global"]
  }
}
```

## Volar 支持

如果你使用 Volar，可以获得更好的模板类型检查和自动补全。

确保在 `tsconfig.json` 中启用 `vue` 类型：

```json
{
  "compilerOptions": {
    "types": ["alkaid-plus/global"]
  },
  "vueCompilerOptions": {
    "target": 3
  }
}
```

## 组件 Props 类型

你可以导入组件的 Props 类型：

```ts
import type { ButtonProps, InputProps, TableProps } from 'alkaid-plus'

// 使用类型
const buttonProps: ButtonProps = {
  type: 'primary',
  size: 'large',
  loading: false,
}
```

## 组件实例类型

获取组件实例的类型：

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { InputInstance, FormInstance } from 'alkaid-plus'

const inputRef = ref<InputInstance>()
const formRef = ref<FormInstance>()

const focusInput = () => {
  inputRef.value?.focus()
}

const validateForm = async () => {
  const valid = await formRef.value?.validate()
  if (valid) {
    // 表单验证通过
  }
}
</script>

<template>
  <AkForm ref="formRef">
    <AkFormItem>
      <AkInput ref="inputRef" />
    </AkFormItem>
  </AkForm>
</template>
```

## 事件类型

组件事件的类型定义：

```vue
<script setup lang="ts">
const handleChange = (value: string) => {
  console.log('输入值:', value)
}

const handleSelect = (value: string | number | boolean | object) => {
  console.log('选中值:', value)
}
</script>

<template>
  <AkInput @change="handleChange" />
  <AkSelect @change="handleSelect" />
</template>
```

## 泛型组件

某些组件支持泛型，如 Table：

```vue
<script setup lang="ts">
interface User {
  id: number
  name: string
  email: string
}

const tableData = ref<User[]>([
  { id: 1, name: '张三', email: 'zhangsan@example.com' },
  { id: 2, name: '李四', email: 'lisi@example.com' },
])
</script>

<template>
  <AkTable :data="tableData">
    <AkTableColumn prop="id" label="ID" />
    <AkTableColumn prop="name" label="姓名" />
    <AkTableColumn prop="email" label="邮箱" />
  </AkTable>
</template>
```

## 类型导出

Alkaid Plus 导出了所有组件的类型定义：

```ts
// Props 类型
import type {
  ButtonProps,
  InputProps,
  SelectProps,
  TableProps,
  FormProps,
  DialogProps,
  // ... 更多组件 Props
} from 'alkaid-plus'

// Emits 类型
import type {
  ButtonEmits,
  InputEmits,
  SelectEmits,
  // ... 更多组件 Emits
} from 'alkaid-plus'

// Instance 类型
import type {
  ButtonInstance,
  InputInstance,
  SelectInstance,
  TableInstance,
  FormInstance,
  // ... 更多组件 Instance
} from 'alkaid-plus'
```
