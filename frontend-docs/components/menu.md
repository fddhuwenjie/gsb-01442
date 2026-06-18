# Menu 菜单

为网站提供导航功能的菜单。

## 顶栏

适用广泛的基础用法。

```vue
<template>
  <AkMenu mode="horizontal" :default-active="activeIndex" @select="handleSelect">
    <AkMenuItem index="1">处理中心</AkMenuItem>
    <AkSubMenu index="2">
      <template #title>我的工作台</template>
      <AkMenuItem index="2-1">选项1</AkMenuItem>
      <AkMenuItem index="2-2">选项2</AkMenuItem>
    </AkSubMenu>
    <AkMenuItem index="3">消息中心</AkMenuItem>
  </AkMenu>
</template>

<script setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
```

## 侧栏

垂直菜单，可内嵌子菜单。

```vue
<template>
  <AkMenu default-active="1" class="el-menu-vertical-demo">
    <AkSubMenu index="1">
      <template #title>
        <span>导航一</span>
      </template>
      <AkMenuItemGroup title="分组一">
        <AkMenuItem index="1-1">选项1</AkMenuItem>
        <AkMenuItem index="1-2">选项2</AkMenuItem>
      </AkMenuItemGroup>
    </AkSubMenu>
    <AkMenuItem index="2">导航二</AkMenuItem>
    <AkMenuItem index="3">导航三</AkMenuItem>
  </AkMenu>
</template>
```

## 折叠

```vue
<template>
  <AkMenu default-active="1" :collapse="isCollapse">
    <AkMenuItem index="1">
      <template #title>导航一</template>
    </AkMenuItem>
    <AkMenuItem index="2">
      <template #title>导航二</template>
    </AkMenuItem>
  </AkMenu>
</template>
```

## API

### Menu Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| mode | 模式 | `'horizontal' \| 'vertical'` | `'vertical'` |
| collapse | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用） | `boolean` | `false` |
| ellipsis | 是否省略多余的子项（仅在横向模式生效） | `boolean` | `true` |
| background-color | 菜单的背景色 | `string` | `#ffffff` |
| text-color | 菜单的文字颜色 | `string` | `#303133` |
| active-text-color | 当前激活菜单的文字颜色 | `string` | `#409eff` |
| default-active | 页面加载时默认激活菜单的 index | `string` | — |
| default-openeds | 默认打开的 sub-menu 的 index 的数组 | `string[]` | — |
| unique-opened | 是否只保持一个子菜单的展开 | `boolean` | `false` |
| menu-trigger | 子菜单打开的触发方式 | `'hover' \| 'click'` | `'hover'` |
| router | 是否启用 vue-router 模式 | `boolean` | `false` |

### Menu Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 菜单激活回调 | `(index: string, indexPath: string[], item, routerResult)` |
| open | sub-menu 展开的回调 | `(index: string, indexPath: string[])` |
| close | sub-menu 收起的回调 | `(index: string, indexPath: string[])` |

### MenuItem Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| index | 唯一标志 | `string` | — |
| route | Vue Router 路由对象 | `object` | — |
| disabled | 是否禁用 | `boolean` | `false` |

### SubMenu Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| index | 唯一标志 | `string` | — |
| popper-offset | 弹出菜单的偏移量 | `number` | `6` |
| show-timeout | 展开 sub-menu 的延时 | `number` | `300` |
| hide-timeout | 收起 sub-menu 的延时 | `number` | `300` |
| disabled | 是否禁用 | `boolean` | `false` |
