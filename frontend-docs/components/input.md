# Input 输入框

通过鼠标或键盘输入字符。

## 基础用法

```vue
<template>
  <AkInput v-model="input" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>
```

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件。

```vue
<template>
  <AkInput v-model="input" disabled placeholder="请输入内容" />
</template>
```

## 可清空

使用 `clearable` 属性即可得到一个可清空的输入框。

```vue
<template>
  <AkInput v-model="input" clearable placeholder="请输入内容" />
</template>
```

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框。

```vue
<template>
  <AkInput v-model="input" type="password" show-password placeholder="请输入密码" />
</template>
```

## 带图标的输入框

带有图标标记输入类型。

```vue
<template>
  <AkInput v-model="input1" placeholder="请输入内容" :prefix-icon="Search" />
  <AkInput v-model="input2" placeholder="请输入内容" :suffix-icon="Calendar" />
</template>
```

## 文本域

用于输入多行文本信息。

```vue
<template>
  <AkInput v-model="textarea" type="textarea" placeholder="请输入内容" />
</template>
```

## API

### Input Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `string \| number` | — |
| type | 类型 | `'text' \| 'textarea' \| 'password' \| 'number'` | `'text'` |
| maxlength | 最大输入长度 | `string \| number` | — |
| minlength | 最小输入长度 | `string \| number` | — |
| show-word-limit | 是否显示输入字数统计 | `boolean` | `false` |
| placeholder | 输入框占位文本 | `string` | — |
| clearable | 是否可清空 | `boolean` | `false` |
| show-password | 是否显示切换密码图标 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | — |
| prefix-icon | 前缀图标 | `string \| Component` | — |
| suffix-icon | 后缀图标 | `string \| Component` | — |
| rows | 输入框行数，仅 type 为 textarea 时有效 | `number` | `2` |
| autosize | textarea 高度自适应 | `boolean \| object` | `false` |
| readonly | 是否只读 | `boolean` | `false` |

### Input Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| blur | 失去焦点时触发 | `(event: FocusEvent)` |
| focus | 获得焦点时触发 | `(event: FocusEvent)` |
| change | 值改变时触发 | `(value: string \| number)` |
| input | 输入时触发 | `(value: string \| number)` |
| clear | 点击清空按钮时触发 | — |

### Input Slots

| 插槽名 | 说明 |
| --- | --- |
| prefix | 输入框头部内容 |
| suffix | 输入框尾部内容 |
| prepend | 输入框前置内容 |
| append | 输入框后置内容 |
