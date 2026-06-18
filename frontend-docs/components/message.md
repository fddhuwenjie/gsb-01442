# Message 消息提示

常用于主动操作后的反馈提示。

## 基础用法

从顶部出现，3 秒后自动消失。

```vue
<template>
  <AkButton @click="open">打开消息提示</AkButton>
</template>

<script setup>
import { AkMessage } from 'alkaid-plus'

const open = () => {
  AkMessage('这是一条消息提示')
}
</script>
```

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

```vue
<template>
  <AkButton @click="openSuccess">成功</AkButton>
  <AkButton @click="openWarning">警告</AkButton>
  <AkButton @click="openInfo">消息</AkButton>
  <AkButton @click="openError">错误</AkButton>
</template>

<script setup>
import { AkMessage } from 'alkaid-plus'

const openSuccess = () => {
  AkMessage.success('恭喜你，这是一条成功消息')
}

const openWarning = () => {
  AkMessage.warning('警告哦，这是一条警告消息')
}

const openInfo = () => {
  AkMessage.info('这是一条消息提示')
}

const openError = () => {
  AkMessage.error('错了哦，这是一条错误消息')
}
</script>
```

## 可关闭

可以添加关闭按钮。

```vue
<script setup>
import { AkMessage } from 'alkaid-plus'

const open = () => {
  AkMessage({
    showClose: true,
    message: '这是一条可关闭的消息',
  })
}
</script>
```

## API

### Message 配置项

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| message | 消息文字 | `string \| VNode` | — |
| type | 消息类型 | `'success' \| 'warning' \| 'info' \| 'error'` | `'info'` |
| icon | 自定义图标 | `string \| Component` | — |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | `boolean` | `false` |
| customClass | 自定义类名 | `string` | — |
| duration | 显示时间，单位为毫秒。设为 0 则不会自动关闭 | `number` | `3000` |
| showClose | 是否显示关闭按钮 | `boolean` | `false` |
| center | 文字是否居中 | `boolean` | `false` |
| onClose | 关闭时的回调函数 | `Function` | — |
| offset | Message 距离窗口顶部的偏移量 | `number` | `16` |
| appendTo | 设置 message 的根元素 | `string \| HTMLElement` | `document.body` |

### Message 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| AkMessage | 显示消息 | `(options: MessageOptions \| string) => MessageHandler` |
| AkMessage.success | 显示成功消息 | `(options: MessageOptions \| string) => MessageHandler` |
| AkMessage.warning | 显示警告消息 | `(options: MessageOptions \| string) => MessageHandler` |
| AkMessage.info | 显示消息 | `(options: MessageOptions \| string) => MessageHandler` |
| AkMessage.error | 显示错误消息 | `(options: MessageOptions \| string) => MessageHandler` |
| AkMessage.closeAll | 关闭所有消息 | `() => void` |
