# Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 基础表格

基础的表格展示用法。

```vue
<template>
  <AkTable :data="tableData" border>
    <AkTableColumn prop="date" label="日期" width="180" />
    <AkTableColumn prop="name" label="姓名" width="180" />
    <AkTableColumn prop="address" label="地址" />
  </AkTable>
</template>

<script setup>
const tableData = [
  { date: '2024-01-01', name: '张三', address: '北京市朝阳区' },
  { date: '2024-01-02', name: '李四', address: '上海市浦东新区' },
  { date: '2024-01-03', name: '王五', address: '广州市天河区' },
]
</script>
```

## 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

```vue
<template>
  <AkTable :data="tableData" stripe>
    <AkTableColumn prop="date" label="日期" />
    <AkTableColumn prop="name" label="姓名" />
    <AkTableColumn prop="address" label="地址" />
  </AkTable>
</template>
```

## 固定表头

纵向内容过多时，可选择固定表头。

```vue
<template>
  <AkTable :data="tableData" height="250">
    <AkTableColumn prop="date" label="日期" />
    <AkTableColumn prop="name" label="姓名" />
    <AkTableColumn prop="address" label="地址" />
  </AkTable>
</template>
```

## 多选

选择多行数据时使用 Checkbox。

```vue
<template>
  <AkTable :data="tableData" @selection-change="handleSelectionChange">
    <AkTableColumn type="selection" width="55" />
    <AkTableColumn prop="date" label="日期" />
    <AkTableColumn prop="name" label="姓名" />
    <AkTableColumn prop="address" label="地址" />
  </AkTable>
</template>
```

## API

### Table Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 显示的数据 | `array` | — |
| height | 表格高度 | `string \| number` | — |
| max-height | 表格最大高度 | `string \| number` | — |
| stripe | 是否为斑马纹 | `boolean` | `false` |
| border | 是否带有纵向边框 | `boolean` | `false` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | — |
| fit | 列的宽度是否自撑开 | `boolean` | `true` |
| show-header | 是否显示表头 | `boolean` | `true` |
| highlight-current-row | 是否高亮当前行 | `boolean` | `false` |
| row-key | 行数据的 Key | `string \| Function` | — |
| empty-text | 空数据时显示的文本 | `string` | `'暂无数据'` |
| default-expand-all | 是否默认展开所有行 | `boolean` | `false` |
| default-sort | 默认排序 | `object` | — |

### Table Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 手动勾选时触发 | `(selection, row)` |
| select-all | 全选时触发 | `(selection)` |
| selection-change | 选择项发生变化时触发 | `(selection)` |
| cell-click | 单元格被点击时触发 | `(row, column, cell, event)` |
| row-click | 行被点击时触发 | `(row, column, event)` |
| sort-change | 排序条件发生变化时触发 | `({ column, prop, order })` |

### TableColumn Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 列类型 | `'selection' \| 'index' \| 'expand'` | — |
| prop | 字段名称 | `string` | — |
| label | 显示的标题 | `string` | — |
| width | 列宽 | `string \| number` | — |
| min-width | 列最小宽度 | `string \| number` | — |
| fixed | 列是否固定 | `'left' \| 'right' \| boolean` | — |
| sortable | 是否可排序 | `boolean \| 'custom'` | `false` |
| align | 对齐方式 | `'left' \| 'center' \| 'right'` | `'left'` |
| formatter | 格式化内容 | `Function` | — |
