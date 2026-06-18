# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

## 基础用法

悬停在下拉菜单上以展开更多操作。

```vue
<template>
  <AkDropdown>
    <span>
      下拉菜单<AkIcon><ArrowDown /></AkIcon>
    </span>
    <template #dropdown>
      <AkDropdownMenu>
        <AkDropdownItem>黄金糕</AkDropdownItem>
        <AkDropdownItem>狮子头</AkDropdownItem>
        <AkDropdownItem>螺蛳粉</AkDropdownItem>
        <AkDropdownItem disabled>双皮奶</AkDropdownItem>
        <AkDropdownItem divided>蚵仔煎</AkDropdownItem>
      </AkDropdownMenu>
    </template>
  </AkDropdown>
</template>
```

## 触发方式

可以配置点击激活或者悬停激活。

```vue
<template>
  <AkDropdown trigger="click">
    <span>点击触发</span>
    <template #dropdown>
      <AkDropdownMenu>
        <AkDropdownItem>黄金糕</AkDropdownItem>
        <AkDropdownItem>狮子头</AkDropdownItem>
      </AkDropdownMenu>
    </template>
  </AkDropdown>
</template>
```

## 菜单隐藏方式

可以通过 `hide-on-click` 属性来配置。

```vue
<template>
  <AkDropdown :hide-on-click="false">
    <span>下拉菜单</span>
    <template #dropdown>
      <AkDropdownMenu>
        <AkDropdownItem>黄金糕</AkDropdownItem>
        <AkDropdownItem>狮子头</AkDropdownItem>
      </AkDropdownMenu>
    </template>
  </AkDropdown>
</template>
```

## API

### Dropdown Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 菜单按钮类型 | `string` | — |
| size | 菜单尺寸 | `'large' \| 'default' \| 'small'` | — |
| max-height | 菜单最大高度 | `string \| number` | — |
| split-button | 下拉触发元素呈现为按钮组 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| placement | 菜单弹出位置 | `string` | `'bottom'` |
| trigger | 触发下拉的行为 | `'hover' \| 'click' \| 'contextmenu'` | `'hover'` |
| hide-on-click | 是否在点击菜单项后隐藏菜单 | `boolean` | `true` |
| show-timeout | 展开下拉菜单的延时 | `number` | `150` |
| hide-timeout | 收起下拉菜单的延时 | `number` | `150` |

### Dropdown Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | split-button 为 true 时，点击左侧按钮的回调 | — |
| command | 点击菜单项触发的事件回调 | `(command: string \| number \| object)` |
| visible-change | 下拉框出现/隐藏时触发 | `(visible: boolean)` |

### DropdownItem Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| command | 指令 | `string \| number \| object` | — |
| disabled | 是否禁用 | `boolean` | `false` |
| divided | 是否显示分隔符 | `boolean` | `false` |
| icon | 自定义图标 | `string \| Component` | — |
