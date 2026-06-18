# Pagination 分页

当数据量过多时，使用分页分解数据。

## 基础用法

设置 `layout`，表示需要显示的内容，用逗号分隔，布局元素会依次显示。

```vue
<template>
  <AkPagination
    v-model:current-page="currentPage"
    :page-size="10"
    :total="100"
    layout="prev, pager, next"
  />
</template>

<script setup>
import { ref } from 'vue'
const currentPage = ref(1)
</script>
```

## 设置最大页码按钮数

默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。

```vue
<template>
  <AkPagination
    :page-size="10"
    :pager-count="11"
    :total="1000"
    layout="prev, pager, next"
  />
</template>
```

## 带有背景色的分页

设置 `background` 属性可以为分页按钮添加背景色。

```vue
<template>
  <AkPagination
    background
    :page-size="10"
    :total="100"
    layout="prev, pager, next"
  />
</template>
```

## 附加功能

根据场景需要，可以添加其他功能模块。

```vue
<template>
  <AkPagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :page-sizes="[10, 20, 30, 40]"
    :total="400"
    layout="total, sizes, prev, pager, next, jumper"
  />
</template>
```

## API

### Pagination Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| page-size / v-model:page-size | 每页显示条目个数 | `number` | `10` |
| total | 总条目数 | `number` | — |
| page-count | 总页数 | `number` | — |
| pager-count | 页码按钮的数量 | `number` | `7` |
| current-page / v-model:current-page | 当前页数 | `number` | `1` |
| layout | 组件布局 | `string` | `'prev, pager, next, jumper, ->, total'` |
| page-sizes | 每页显示个数选择器的选项设置 | `number[]` | `[10, 20, 30, 40, 50, 100]` |
| popper-class | 每页显示个数选择器的下拉框类名 | `string` | — |
| prev-text | 替代图标显示的上一页文字 | `string` | — |
| next-text | 替代图标显示的下一页文字 | `string` | — |
| small | 是否使用小型分页样式 | `boolean` | `false` |
| background | 是否为分页按钮添加背景色 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| hide-on-single-page | 只有一页时是否隐藏 | `boolean` | `false` |

### Pagination Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| size-change | page-size 改变时触发 | `(pageSize: number)` |
| current-change | current-page 改变时触发 | `(currentPage: number)` |
| prev-click | 点击上一页按钮改变当前页时触发 | `(currentPage: number)` |
| next-click | 点击下一页按钮改变当前页时触发 | `(currentPage: number)` |
