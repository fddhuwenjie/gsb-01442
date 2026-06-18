# Notification 通知

悬浮出现在页面角落，显示全局的通知提醒消息。

## 基础用法

Notification 组件提供通知功能。

```vue
<template>
  <AkButton @click="open">打开通知</AkButton>
</template>

<script setup>
import { AkNotification } from 'alkaid-plus'

const open = () => {
  AkNotification({
    title: '标题名称',
    message: '这是一条通知消息',
  })
}
</script>
```

## 不同类型

用来显示「成功、警告、消息、错误」类的通知。

```vue
<template>
  <AkButton @click="openSuccess">成功</AkButton>
  <AkButton @click="openWarning">警告</AkButton>
  <AkButton @click="openInfo">消息</AkButton>
  <AkButton @click="openError">错误</AkButton>
</template>

<script setup>
import { AkNotification } from 'alkaid-plus'

const openSuccess = () => {
  AkNotification.success({
    title: '成功',
    message: '这是一条成功的提示消息',
  })
}

const openWarning = () => {
  AkNotification.warning({
    title: '警告',
    message: '这是一条警告的提示消息',
  })
}

const openInfo = () => {
  AkNotification.info({
    title: '消息',
    message: '这是一条消息的提示消息',
  })
}

const openError = () => {
  AkNotification.error({
    title: '错误',
    message: '这是一条错误的提示消息',
  })
}
</script>
```

## 自定义弹出位置

可以让 Notification 从屏幕四角中的任意一角弹出。

```vue
<script setup>
import { AkNotification } from 'alkaid-plus'

const open = (position) => {
  AkNotification({
    title: '自定义位置',
    message: '这是一条通知消息',
    position,
  })
}
</script>
```

## API

### Notification 配置项

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `string` | — |
| message | 通知栏正文内容 | `string \| VNode` | — |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | `boolean` | `false` |
| type | 通知的类型 | `'success' \| 'warning' \| 'info' \| 'error'` | — |
| icon | 自定义图标 | `string \| Component` | — |
| customClass | 自定义类名 | `string` | — |
| duration | 显示时间，单位为毫秒。设为 0 则不会自动关闭 | `number` | `4500` |
| position | 自定义弹出位置 | `'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'` | `'top-right'` |
| showClose | 是否显示关闭按钮 | `boolean` | `true` |
| onClose | 关闭时的回调函数 | `Function` | — |
| onClick | 点击 Notification 时的回调函数 | `Function` | — |
| offset | 偏移的距离 | `number` | `0` |

### Notification 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| AkNotification | 显示通知 | `(options: NotificationOptions) => NotificationHandle` |
| AkNotification.success | 显示成功通知 | `(options: NotificationOptions) => NotificationHandle` |
| AkNotification.warning | 显示警告通知 | `(options: NotificationOptions) => NotificationHandle` |
| AkNotification.info | 显示消息通知 | `(options: NotificationOptions) => NotificationHandle` |
| AkNotification.error | 显示错误通知 | `(options: NotificationOptions) => NotificationHandle` |
| AkNotification.closeAll | 关闭所有通知 | `() => void` |
