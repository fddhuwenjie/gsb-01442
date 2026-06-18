# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

```vue
<template>
  <div>
    <AkButton>默认按钮</AkButton>
    <AkButton type="primary">主要按钮</AkButton>
    <AkButton type="success">成功按钮</AkButton>
    <AkButton type="warning">警告按钮</AkButton>
    <AkButton type="danger">危险按钮</AkButton>
    <AkButton type="info">信息按钮</AkButton>
  </div>

  <div style="margin-top: 16px">
    <AkButton plain>朴素按钮</AkButton>
    <AkButton type="primary" plain>主要按钮</AkButton>
    <AkButton type="success" plain>成功按钮</AkButton>
    <AkButton type="warning" plain>警告按钮</AkButton>
    <AkButton type="danger" plain>危险按钮</AkButton>
    <AkButton type="info" plain>信息按钮</AkButton>
  </div>

  <div style="margin-top: 16px">
    <AkButton round>圆角按钮</AkButton>
    <AkButton type="primary" round>主要按钮</AkButton>
    <AkButton type="success" round>成功按钮</AkButton>
    <AkButton type="warning" round>警告按钮</AkButton>
    <AkButton type="danger" round>危险按钮</AkButton>
    <AkButton type="info" round>信息按钮</AkButton>
  </div>
</template>
```

## 禁用状态

使用 `disabled` 属性来定义按钮是否被禁用。

```vue
<template>
  <AkButton disabled>默认按钮</AkButton>
  <AkButton type="primary" disabled>主要按钮</AkButton>
</template>
```

## 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

```vue
<template>
  <AkButton type="primary" :loading="loading" @click="handleClick">
    {{ loading ? '加载中...' : '点击加载' }}
  </AkButton>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>
```

## 尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择。

```vue
<template>
  <AkButton size="large">大型按钮</AkButton>
  <AkButton>默认按钮</AkButton>
  <AkButton size="small">小型按钮</AkButton>
</template>
```

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

```vue
<template>
  <AkButtonGroup>
    <AkButton type="primary">上一页</AkButton>
    <AkButton type="primary">下一页</AkButton>
  </AkButtonGroup>
</template>
```

## API

### Button Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | — |
| type | 类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | — |
| plain | 是否为朴素按钮 | `boolean` | `false` |
| text | 是否为文字按钮 | `boolean` | `false` |
| bg | 是否显示文字按钮背景颜色 | `boolean` | `false` |
| link | 是否为链接按钮 | `boolean` | `false` |
| round | 是否为圆角按钮 | `boolean` | `false` |
| circle | 是否为圆形按钮 | `boolean` | `false` |
| loading | 是否为加载中状态 | `boolean` | `false` |
| loading-icon | 自定义加载中图标 | `string \| Component` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| icon | 图标组件 | `string \| Component` | — |
| autofocus | 是否默认聚焦 | `boolean` | `false` |
| native-type | 原生 type 属性 | `'button' \| 'submit' \| 'reset'` | `'button'` |
| auto-insert-space | 自动在两个中文字符之间插入空格 | `boolean` | — |
| color | 自定义按钮颜色 | `string` | — |
| dark | dark 模式 | `boolean` | `false` |
| tag | 自定义元素标签 | `string \| Component` | `'button'` |

### Button Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | `(event: MouseEvent) => void` |

### Button Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 按钮内容 |
| loading | 自定义加载中组件 |
| icon | 自定义图标组件 |

### ButtonGroup Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | — |
| type | 类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | — |

### ButtonGroup Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 按钮组内容 |
