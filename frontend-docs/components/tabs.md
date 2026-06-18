# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

## 基础用法

基础的、简洁的标签页。

```vue
<template>
  <AkTabs v-model="activeName" @tab-click="handleClick">
    <AkTabPane label="用户管理" name="first">用户管理</AkTabPane>
    <AkTabPane label="配置管理" name="second">配置管理</AkTabPane>
    <AkTabPane label="角色管理" name="third">角色管理</AkTabPane>
    <AkTabPane label="定时任务补偿" name="fourth">定时任务补偿</AkTabPane>
  </AkTabs>
</template>

<script setup>
import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>
```

## 卡片风格

设置 `type="card"` 可以显示卡片风格的标签。

```vue
<template>
  <AkTabs v-model="activeName" type="card">
    <AkTabPane label="用户管理" name="first">用户管理</AkTabPane>
    <AkTabPane label="配置管理" name="second">配置管理</AkTabPane>
    <AkTabPane label="角色管理" name="third">角色管理</AkTabPane>
  </AkTabs>
</template>
```

## 带有边框的卡片风格

设置 `type="border-card"` 可以显示带有边框的卡片风格。

```vue
<template>
  <AkTabs type="border-card">
    <AkTabPane label="用户管理">用户管理</AkTabPane>
    <AkTabPane label="配置管理">配置管理</AkTabPane>
    <AkTabPane label="角色管理">角色管理</AkTabPane>
  </AkTabs>
</template>
```

## 标签位置

可以通过 `tab-position` 设置标签的位置。

```vue
<template>
  <AkTabs tab-position="left">
    <AkTabPane label="用户管理">用户管理</AkTabPane>
    <AkTabPane label="配置管理">配置管理</AkTabPane>
    <AkTabPane label="角色管理">角色管理</AkTabPane>
  </AkTabs>
</template>
```

## API

### Tabs Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值，选中选项卡的 name | `string` | — |
| type | 风格类型 | `'' \| 'card' \| 'border-card'` | `''` |
| closable | 标签是否可关闭 | `boolean` | `false` |
| addable | 标签是否可增加 | `boolean` | `false` |
| editable | 标签是否同时可增加和关闭 | `boolean` | `false` |
| tab-position | 选项卡所在位置 | `'top' \| 'right' \| 'bottom' \| 'left'` | `'top'` |
| stretch | 标签的宽度是否自撑开 | `boolean` | `false` |

### Tabs Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| tab-click | tab 被选中时触发 | `(pane: TabsPaneContext, ev: Event)` |
| tab-change | activeName 改变时触发 | `(name: string)` |
| tab-remove | 点击 tab 移除按钮时触发 | `(name: string)` |
| tab-add | 点击 tab 新增按钮时触发 | — |
| edit | 点击 tab 的新增或移除按钮后触发 | `(paneName: string \| undefined, action: 'remove' \| 'add')` |

### TabPane Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 选项卡标题 | `string` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| name | 与选项卡绑定值对应的标识符 | `string \| number` | — |
| closable | 标签是否可关闭 | `boolean` | `false` |
| lazy | 标签是否延迟渲染 | `boolean` | `false` |
