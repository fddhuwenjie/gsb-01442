# Tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。

## 基础用法

基础的树形结构展示。

```vue
<template>
  <AkTree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
</template>

<script setup>
const handleNodeClick = (data) => {
  console.log(data)
}

const data = [
  {
    label: '一级 1',
    children: [
      { label: '二级 1-1', children: [{ label: '三级 1-1-1' }] },
    ],
  },
  {
    label: '一级 2',
    children: [
      { label: '二级 2-1', children: [{ label: '三级 2-1-1' }] },
      { label: '二级 2-2', children: [{ label: '三级 2-2-1' }] },
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>
```

## 可选择

适用于需要选择层级时使用。

```vue
<template>
  <AkTree
    :data="data"
    show-checkbox
    node-key="id"
    :default-expanded-keys="[2, 3]"
    :default-checked-keys="[5]"
    :props="defaultProps"
  />
</template>
```

## 懒加载

适用于数据需要异步加载的场景。

```vue
<template>
  <AkTree :props="props" :load="loadNode" lazy show-checkbox />
</template>

<script setup>
const props = {
  label: 'name',
  children: 'zones',
  isLeaf: 'leaf',
}

const loadNode = (node, resolve) => {
  if (node.level === 0) {
    return resolve([{ name: 'region' }])
  }
  setTimeout(() => {
    resolve([{ name: `leaf ${node.level}`, leaf: true }])
  }, 500)
}
</script>
```

## API

### Tree Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 展示数据 | `array` | — |
| empty-text | 内容为空的时候展示的文本 | `string` | — |
| node-key | 每个树节点用来作为唯一标识的属性 | `string` | — |
| props | 配置选项 | `object` | — |
| render-after-expand | 是否在第一次展开某个树节点后才渲染其子节点 | `boolean` | `true` |
| load | 加载子树数据的方法 | `Function` | — |
| highlight-current | 是否高亮当前选中节点 | `boolean` | `false` |
| default-expand-all | 是否默认展开所有节点 | `boolean` | `false` |
| expand-on-click-node | 是否在点击节点的时候展开或者收缩节点 | `boolean` | `true` |
| check-on-click-node | 是否在点击节点的时候选中节点 | `boolean` | `false` |
| auto-expand-parent | 展开子节点的时候是否自动展开父节点 | `boolean` | `true` |
| default-expanded-keys | 默认展开的节点的 key 的数组 | `array` | — |
| show-checkbox | 节点是否可被选择 | `boolean` | `false` |
| check-strictly | 在显示复选框的情况下，是否严格的遵循父子不互相关联 | `boolean` | `false` |
| default-checked-keys | 默认勾选的节点的 key 的数组 | `array` | — |
| current-node-key | 当前选中的节点 | `string \| number` | — |
| accordion | 是否每次只打开一个同级树节点展开 | `boolean` | `false` |
| indent | 相邻级节点间的水平缩进 | `number` | `16` |
| lazy | 是否懒加载子节点 | `boolean` | `false` |
| draggable | 是否开启拖拽节点功能 | `boolean` | `false` |

### Tree Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| node-click | 节点被点击时触发 | `(data, node, TreeNode)` |
| node-contextmenu | 节点被右键点击时触发 | `(event, data, node, TreeNode)` |
| check-change | 节点选中状态发生变化时触发 | `(data, checked, indeterminate)` |
| check | 点击节点复选框之后触发 | `(data, { checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys })` |
| current-change | 当前选中节点变化时触发 | `(data, node)` |
| node-expand | 节点被展开时触发 | `(data, node, TreeNode)` |
| node-collapse | 节点被关闭时触发 | `(data, node, TreeNode)` |
