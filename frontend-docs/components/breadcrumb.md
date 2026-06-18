# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础用法

在 `AkBreadcrumb` 中使用 `AkBreadcrumbItem` 标签表示从首页开始的每一级。

```vue
<template>
  <AkBreadcrumb separator="/">
    <AkBreadcrumbItem :to="{ path: '/' }">首页</AkBreadcrumbItem>
    <AkBreadcrumbItem><a href="/">活动管理</a></AkBreadcrumbItem>
    <AkBreadcrumbItem>活动列表</AkBreadcrumbItem>
    <AkBreadcrumbItem>活动详情</AkBreadcrumbItem>
  </AkBreadcrumb>
</template>
```

## 图标分隔符

通过设置 `separator-icon` 可使用相应的图标作为分隔符。

```vue
<template>
  <AkBreadcrumb :separator-icon="ArrowRight">
    <AkBreadcrumbItem :to="{ path: '/' }">首页</AkBreadcrumbItem>
    <AkBreadcrumbItem>活动管理</AkBreadcrumbItem>
    <AkBreadcrumbItem>活动列表</AkBreadcrumbItem>
  </AkBreadcrumb>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>
```

## API

### Breadcrumb Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| separator | 分隔符 | `string` | `'/'` |
| separator-icon | 图标分隔符的组件或组件名 | `string \| Component` | — |

### BreadcrumbItem Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| to | 路由跳转目标，同 vue-router 的 to 属性 | `string \| object` | — |
| replace | 如果设置该属性为 true, 导航将不会留下历史记录 | `boolean` | `false` |

### BreadcrumbItem Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义内容 |
