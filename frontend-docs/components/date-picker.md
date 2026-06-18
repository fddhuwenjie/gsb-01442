# DatePicker 日期选择器

用于选择或输入日期。

## 基础用法

以「日」为基本单位，基础的日期选择控件。

```vue
<template>
  <AkDatePicker v-model="value" type="date" placeholder="选择日期" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

## 其他日期单位

通过扩展基础的日期选择，可以选择周、月、年或多个日期。

```vue
<template>
  <AkDatePicker v-model="value1" type="week" placeholder="选择周" />
  <AkDatePicker v-model="value2" type="month" placeholder="选择月" />
  <AkDatePicker v-model="value3" type="year" placeholder="选择年" />
  <AkDatePicker v-model="value4" type="dates" placeholder="选择多个日期" />
</template>
```

## 选择日期范围

可在一个选择器中选择一个时间范围。

```vue
<template>
  <AkDatePicker
    v-model="value"
    type="daterange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
  />
</template>
```

## 日期时间选择器

在同一个选择器里选择日期和时间。

```vue
<template>
  <AkDatePicker v-model="value" type="datetime" placeholder="选择日期时间" />
</template>
```

## API

### DatePicker Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `Date \| string \| number \| array` | — |
| readonly | 是否只读 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | — |
| editable | 文本框可输入 | `boolean` | `true` |
| clearable | 是否显示清除按钮 | `boolean` | `true` |
| placeholder | 占位内容 | `string` | — |
| start-placeholder | 范围选择时开始日期的占位内容 | `string` | — |
| end-placeholder | 范围选择时结束日期的占位内容 | `string` | — |
| type | 显示类型 | `'year' \| 'month' \| 'date' \| 'dates' \| 'week' \| 'datetime' \| 'datetimerange' \| 'daterange' \| 'monthrange'` | `'date'` |
| format | 显示在输入框中的格式 | `string` | — |
| value-format | 绑定值的格式 | `string` | — |
| range-separator | 选择范围时的分隔符 | `string` | `'-'` |
| default-value | 默认显示的时间 | `Date \| array` | — |
| shortcuts | 设置快捷选项 | `array` | — |
| disabledDate | 设置禁用状态 | `Function` | — |

### DatePicker Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 用户确认选定的值时触发 | `(value)` |
| blur | 失去焦点时触发 | `(event: FocusEvent)` |
| focus | 获得焦点时触发 | `(event: FocusEvent)` |
| visible-change | 日期选择器显示/隐藏时触发 | `(visibility: boolean)` |
