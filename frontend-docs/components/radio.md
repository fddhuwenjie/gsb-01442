# Radio 单选框

在一组备选项中进行单选。

## 基础用法

单选框不应该有太多的可选项，如果你有很多的可选项你应该使用选择框而不是单选框。

```vue
<template>
  <AkRadioGroup v-model="radio">
    <AkRadio value="1">选项 A</AkRadio>
    <AkRadio value="2">选项 B</AkRadio>
  </AkRadioGroup>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('1')
</script>
```

## 禁用状态

设置 `disabled` 属性即可。

```vue
<template>
  <AkRadioGroup v-model="radio">
    <AkRadio value="1" disabled>选项 A</AkRadio>
    <AkRadio value="2">选项 B</AkRadio>
  </AkRadioGroup>
</template>
```

## 按钮样式

按钮样式的单选组合。

```vue
<template>
  <AkRadioGroup v-model="radio">
    <AkRadioButton value="1">选项 A</AkRadioButton>
    <AkRadioButton value="2">选项 B</AkRadioButton>
    <AkRadioButton value="3">选项 C</AkRadioButton>
  </AkRadioGroup>
</template>
```

## API

### Radio Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `string \| number \| boolean` | — |
| value | 单选框的值 | `string \| number \| boolean` | — |
| label | 单选框对应的值（已废弃，请使用 value） | `string \| number \| boolean` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| border | 是否显示边框 | `boolean` | `false` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | — |
| name | 原生 name 属性 | `string` | — |

### RadioGroup Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `string \| number \| boolean` | — |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| text-color | 按钮形式激活时的文本颜色 | `string` | `#ffffff` |
| fill | 按钮形式激活时的填充色和边框色 | `string` | `#409eff` |

### RadioGroup Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 绑定值变化时触发 | `(value: string \| number \| boolean)` |
