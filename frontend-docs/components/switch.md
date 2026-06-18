# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

```vue
<template>
  <AkSwitch v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>
```

## 禁用状态

设置 `disabled` 属性即可。

```vue
<template>
  <AkSwitch v-model="value" disabled />
</template>
```

## 文字描述

使用 `active-text` 和 `inactive-text` 属性来设置开关的文字描述。

```vue
<template>
  <AkSwitch v-model="value" active-text="开" inactive-text="关" />
</template>
```

## 扩展的 value 类型

设置 `active-value` 和 `inactive-value` 属性，接受 Boolean、String 或 Number 类型的值。

```vue
<template>
  <AkSwitch v-model="value" active-value="100" inactive-value="0" />
</template>
```

## API

### Switch Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `boolean \| string \| number` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| loading | 是否显示加载中 | `boolean` | `false` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | — |
| width | 宽度 | `number \| string` | — |
| inline-prompt | 图标或文本是否显示在点内 | `boolean` | `false` |
| active-icon | 打开时显示的图标 | `string \| Component` | — |
| inactive-icon | 关闭时显示的图标 | `string \| Component` | — |
| active-text | 打开时的文字描述 | `string` | — |
| inactive-text | 关闭时的文字描述 | `string` | — |
| active-value | 打开时的值 | `boolean \| string \| number` | `true` |
| inactive-value | 关闭时的值 | `boolean \| string \| number` | `false` |
| active-color | 打开时的背景色 | `string` | — |
| inactive-color | 关闭时的背景色 | `string` | — |
| name | 原生 name 属性 | `string` | — |
| validate-event | 改变时是否触发表单验证 | `boolean` | `true` |

### Switch Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 状态发生变化时触发 | `(value: boolean \| string \| number)` |
