# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

```vue
<template>
  <AkSelect v-model="value" placeholder="请选择">
    <AkOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </AkSelect>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { value: '1', label: '选项1' },
  { value: '2', label: '选项2' },
  { value: '3', label: '选项3' },
]
</script>
```

## 禁用状态

设置 `disabled` 属性为禁用状态。

```vue
<template>
  <AkSelect v-model="value" disabled placeholder="请选择">
    <AkOption label="选项1" value="1" />
  </AkSelect>
</template>
```

## 可清空

设置 `clearable` 属性，可将选择器清空。

```vue
<template>
  <AkSelect v-model="value" clearable placeholder="请选择">
    <AkOption label="选项1" value="1" />
  </AkSelect>
</template>
```

## 多选

设置 `multiple` 属性即可启用多选。

```vue
<template>
  <AkSelect v-model="value" multiple placeholder="请选择">
    <AkOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </AkSelect>
</template>
```

## 可搜索

设置 `filterable` 属性即可启用搜索功能。

```vue
<template>
  <AkSelect v-model="value" filterable placeholder="请选择">
    <AkOption v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
  </AkSelect>
</template>
```

## API

### Select Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 绑定值 | `any` | — |
| multiple | 是否多选 | `boolean` | `false` |
| disabled | 是否禁用 | `boolean` | `false` |
| clearable | 是否可以清空选项 | `boolean` | `false` |
| collapse-tags | 多选时是否折叠 Tag | `boolean` | `false` |
| placeholder | 占位符 | `string` | `'请选择'` |
| filterable | 是否可搜索 | `boolean` | `false` |
| remote | 是否远程搜索 | `boolean` | `false` |
| remote-method | 远程搜索方法 | `Function` | — |
| loading | 是否正在加载 | `boolean` | `false` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | — |

### Select Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中值发生变化时触发 | `(value)` |
| visible-change | 下拉框出现/隐藏时触发 | `(visible: boolean)` |
| remove-tag | 多选模式下移除 tag 时触发 | `(tagValue)` |
| clear | 可清空的单选模式下清空时触发 | — |
| blur | 失去焦点时触发 | `(event: FocusEvent)` |
| focus | 获得焦点时触发 | `(event: FocusEvent)` |

### Option Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 选项的值 | `any` | — |
| label | 选项的标签 | `string \| number` | — |
| disabled | 是否禁用 | `boolean` | `false` |
