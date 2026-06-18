# Form 表单

表单包含输入框、单选框、下拉选择、多选框等用户输入的组件。

## 基础用法

最基础的表单包括各种输入表单项，比如 input、select、radio、checkbox 等。

```vue
<template>
  <AkForm :model="form" label-width="80px">
    <AkFormItem label="姓名">
      <AkInput v-model="form.name" />
    </AkFormItem>
    <AkFormItem label="地区">
      <AkSelect v-model="form.region" placeholder="请选择地区">
        <AkOption label="北京" value="beijing" />
        <AkOption label="上海" value="shanghai" />
      </AkSelect>
    </AkFormItem>
    <AkFormItem>
      <AkButton type="primary">提交</AkButton>
      <AkButton>取消</AkButton>
    </AkFormItem>
  </AkForm>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  region: '',
})
</script>
```

## 表单验证

Form 组件允许你验证用户的输入是否符合规范。

```vue
<template>
  <AkForm ref="formRef" :model="form" :rules="rules" label-width="80px">
    <AkFormItem label="姓名" prop="name">
      <AkInput v-model="form.name" />
    </AkFormItem>
    <AkFormItem label="邮箱" prop="email">
      <AkInput v-model="form.email" />
    </AkFormItem>
    <AkFormItem>
      <AkButton type="primary" @click="submitForm">提交</AkButton>
      <AkButton @click="resetForm">重置</AkButton>
    </AkFormItem>
  </AkForm>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formRef = ref()
const form = reactive({
  name: '',
  email: '',
})

const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' },
  ],
}

const submitForm = async () => {
  const valid = await formRef.value.validate()
  if (valid) {
    console.log('验证通过')
  }
}

const resetForm = () => {
  formRef.value.resetFields()
}
</script>
```

## API

### Form Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model | 表单数据对象 | `object` | — |
| rules | 表单验证规则 | `object` | — |
| inline | 行内表单模式 | `boolean` | `false` |
| label-position | 标签位置 | `'left' \| 'right' \| 'top'` | `'right'` |
| label-width | 标签宽度 | `string \| number` | — |
| label-suffix | 标签后缀 | `string` | — |
| hide-required-asterisk | 是否隐藏必填字段的标签旁边的红色星号 | `boolean` | `false` |
| show-message | 是否显示校验错误信息 | `boolean` | `true` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | — |
| disabled | 是否禁用 | `boolean` | `false` |

### Form Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| validate | 验证整个表单 | `(callback?: Function) => Promise` |
| validateField | 验证指定字段 | `(props, callback?: Function) => Promise` |
| resetFields | 重置表单 | `(props?: string \| string[]) => void` |
| scrollToField | 滚动到指定字段 | `(prop: string) => void` |
| clearValidate | 清除验证 | `(props?: string \| string[]) => void` |

### FormItem Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prop | 表单域字段名 | `string` | — |
| label | 标签文本 | `string` | — |
| label-width | 标签宽度 | `string \| number` | — |
| required | 是否必填 | `boolean` | `false` |
| rules | 验证规则 | `object \| array` | — |
| error | 表单域验证错误信息 | `string` | — |
| show-message | 是否显示校验错误信息 | `boolean` | `true` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | — |
