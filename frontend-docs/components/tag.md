# Tag 标签

用于标记和选择。

## 基础用法

由 `type` 属性来选择 tag 的类型。

```vue
<template>
  <AkTag>标签一</AkTag>
  <AkTag type="success">标签二</AkTag>
  <AkTag type="info">标签三</AkTag>
  <AkTag type="warning">标签四</AkTag>
  <AkTag type="danger">标签五</AkTag>
</template>
```

## 可移除标签

设置 `closable` 属性可以定义一个标签是否可移除。

```vue
<template>
  <AkTag closable @close="handleClose">标签一</AkTag>
  <AkTag type="success" closable>标签二</AkTag>
</template>
```

## 不同尺寸

Tag 组件提供三种尺寸，通过 `size` 属性来配置。

```vue
<template>
  <AkTag size="large">大型标签</AkTag>
  <AkTag>默认标签</AkTag>
  <AkTag size="small">小型标签</AkTag>
</template>
```

## 主题

Tag 组件提供了三个不同的主题：`dark`、`light` 和 `plain`。

```vue
<template>
  <AkTag effect="dark">Dark</AkTag>
  <AkTag effect="light">Light</AkTag>
  <AkTag effect="plain">Plain</AkTag>
</template>
```

## 圆形标签

Tag 可以是圆形的。

```vue
<template>
  <AkTag round>标签一</AkTag>
  <AkTag type="success" round>标签二</AkTag>
</template>
```

## API

### Tag Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | `'success' \| 'info' \| 'warning' \| 'danger' \| ''` | `''` |
| closable | 是否可关闭 | `boolean` | `false` |
| disable-transitions | 是否禁用渐变动画 | `boolean` | `false` |
| hit | 是否有边框描边 | `boolean` | `false` |
| color | 背景色 | `string` | — |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | — |
| effect | 主题 | `'dark' \| 'light' \| 'plain'` | `'light'` |
| round | 是否为圆形 | `boolean` | `false` |

### Tag Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击 Tag 时触发 | `(event: MouseEvent)` |
| close | 关闭 Tag 时触发 | `(event: MouseEvent)` |

### Tag Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 标签内容 |
