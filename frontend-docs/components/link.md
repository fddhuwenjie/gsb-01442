# Link 链接

文字超链接组件。

## 基础用法

基础的文字链接用法。

```vue
<template>
  <AkLink href="https://element-plus.org" target="_blank">默认链接</AkLink>
  <AkLink type="primary">主要链接</AkLink>
  <AkLink type="success">成功链接</AkLink>
  <AkLink type="warning">警告链接</AkLink>
  <AkLink type="danger">危险链接</AkLink>
  <AkLink type="info">信息链接</AkLink>
</template>
```

## 禁用状态

文字链接不可用状态。

```vue
<template>
  <AkLink disabled>默认链接</AkLink>
  <AkLink type="primary" disabled>主要链接</AkLink>
</template>
```

## 下划线

文字链接下划线。

```vue
<template>
  <AkLink :underline="false">无下划线</AkLink>
  <AkLink>有下划线</AkLink>
</template>
```

## API

### Link Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | `'default'` |
| underline | 是否下划线 | `boolean` | `true` |
| disabled | 是否禁用状态 | `boolean` | `false` |
| href | 原生 href 属性 | `string` | — |
| target | 原生 target 属性 | `string` | `_self` |
| icon | 图标组件 | `string \| Component` | — |

### Link Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 链接内容 |
| icon | 自定义图标 |
