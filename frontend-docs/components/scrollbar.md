# Scrollbar 滚动条

用于替换浏览器原生滚动条。

## 基础用法

通过 `height` 属性设置滚动条高度，若不设置则根据父容器高度自适应。

```vue
<template>
  <AkScrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </AkScrollbar>
</template>
```

## 横向滚动

当元素宽度大于滚动条宽度时，会显示横向滚动条。

```vue
<template>
  <AkScrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </AkScrollbar>
</template>
```

## API

### Scrollbar Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| height | 滚动条高度 | `string \| number` | — |
| max-height | 滚动条最大高度 | `string \| number` | — |
| native | 是否使用原生滚动条样式 | `boolean` | `false` |
| wrap-style | 包裹容器的自定义样式 | `string \| object` | — |
| wrap-class | 包裹容器的自定义类名 | `string` | — |
| view-style | 视图的自定义样式 | `string \| object` | — |
| view-class | 视图的自定义类名 | `string` | — |
| noresize | 不响应容器尺寸变化 | `boolean` | `false` |
| tag | 视图的元素标签 | `string` | `'div'` |
| always | 滚动条总是显示 | `boolean` | `false` |
| min-size | 滚动条最小尺寸 | `number` | `20` |

### Scrollbar Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| scroll | 滚动时触发 | `({ scrollTop, scrollLeft })` |

### Scrollbar Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义内容 |
