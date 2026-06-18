# Checkbox 多选框

在一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换。

```vue
<template>
  <AkCheckbox v-model="checked">选项</AkCheckbox>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(true)
</script>
```

## 禁用状态

多选框不可用状态。

```vue
<template>
  <AkCheckbox v-model="checked" disabled>选项</AkCheckbox>
</template>
```

## 多选框组

适用于多个勾选框绑定到同一个数组的情景。

```vue
<template>
  <AkCheckboxGroup v-model="checkedList">
    <AkCheckbox value="A">选项 A</AkCheckbox>
    <AkCheckbox value="B">选项 B</AkCheckbox>
    <AkCheckbox value="C">选项 C</AkCheckbox>
  </AkCheckboxGroup>
</template>

<script setup>
import { ref } from 'vue'
const checkedList = ref(['A', 'B'])
</script>
```

## 按钮样式

按钮样式的多选组合。

```vue
<template>
  <AkCheckboxGroup v-model="checkedList">
    <AkCheckboxButton value="A">选项 A</AkCheckboxButton>
    <AkCheckboxButton value="B">选项 B</AkCheckboxButton>
    <AkCheckboxButton value="C">选项 C</AkCheckboxButton>
  </AkCheckboxGroup>
</template>
```

## API

### Checkbox Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `boolean` | — |
| value | 选中状态的值 | `string \| number \| boolean` | — |
| label | 选中状态的值（已废弃，请使用 value） | `string \| number \| boolean` | — |
| true-value | 选中时的值 | `string \| number` | — |
| false-value | 未选中时的值 | `string \| number` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| border | 是否显示边框 | `boolean` | `false` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | — |
| name | 原生 name 属性 | `string` | — |
| checked | 当前是否勾选 | `boolean` | `false` |
| indeterminate | 设置不确定状态 | `boolean` | `false` |

### CheckboxGroup Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `array` | `[]` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| min | 可被勾选的 checkbox 的最小数量 | `number` | — |
| max | 可被勾选的 checkbox 的最大数量 | `number` | — |
| text-color | 按钮形式激活时的文本颜色 | `string` | `#ffffff` |
| fill | 按钮形式激活时的填充色和边框色 | `string` | `#409eff` |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 绑定值变化时触发 | `(value: array)` |
