# Icon 图标

Element Plus 提供了一套常用的图标集合。

## 基础用法

直接使用 Element Plus 图标组件。

```vue
<template>
  <AkIcon :size="20">
    <Edit />
  </AkIcon>
</template>

<script setup>
import { Edit } from '@element-plus/icons-vue'
</script>
```

## 图标集合

Element Plus 提供了丰富的图标，请参考 [Element Plus Icons](https://element-plus.org/zh-CN/component/icon.html)。

## API

### Icon Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 图标大小 | `number \| string` | — |
| color | 图标颜色 | `string` | — |

### Icon Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义图标组件 |
