# Alert 提示

用于页面中展示重要的提示信息。

## 基础用法

Alert 组件不属于浮层元素，不会自动消失或关闭。

```vue
<template>
  <AkAlert title="成功提示的文案" type="success" />
  <AkAlert title="消息提示的文案" type="info" />
  <AkAlert title="警告提示的文案" type="warning" />
  <AkAlert title="错误提示的文案" type="error" />
</template>
```

## 主题

Alert 组件提供了两个不同的主题：`light` 和 `dark`。

```vue
<template>
  <AkAlert title="成功提示的文案" type="success" effect="dark" />
  <AkAlert title="消息提示的文案" type="info" effect="dark" />
  <AkAlert title="警告提示的文案" type="warning" effect="dark" />
  <AkAlert title="错误提示的文案" type="error" effect="dark" />
</template>
```

## 可关闭

设置 `closable` 属性来显示关闭按钮，点击即可关闭。

```vue
<template>
  <AkAlert title="不可关闭的 alert" type="success" :closable="false" />
  <AkAlert title="可关闭的 alert" type="success" />
</template>
```

## 带有辅助性文字介绍

包含标题和内容，解释更详细的警告。

```vue
<template>
  <AkAlert title="带辅助性文字介绍" type="success">
    这是一段说明文字这是一段说明文字
  </AkAlert>
</template>
```

## 带有图标

通过设置 `show-icon` 属性来显示 Alert 的 icon。

```vue
<template>
  <AkAlert title="成功提示的文案" type="success" show-icon />
  <AkAlert title="消息提示的文案" type="info" show-icon />
  <AkAlert title="警告提示的文案" type="warning" show-icon />
  <AkAlert title="错误提示的文案" type="error" show-icon />
</template>
```

## API

### Alert Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | Alert 标题 | `string` | — |
| type | Alert 类型 | `'success' \| 'warning' \| 'info' \| 'error'` | `'info'` |
| description | 描述性文本 | `string` | — |
| closable | 是否可关闭 | `boolean` | `true` |
| center | 文字是否居中 | `boolean` | `false` |
| close-text | 自定义关闭按钮文本 | `string` | — |
| show-icon | 是否显示图标 | `boolean` | `false` |
| effect | 主题样式 | `'light' \| 'dark'` | `'light'` |

### Alert Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| close | 关闭 Alert 时触发的事件 | `(event: MouseEvent)` |

### Alert Slots

| 插槽名 | 说明 |
| --- | --- |
| default | Alert 内容描述 |
| title | 标题的内容 |
