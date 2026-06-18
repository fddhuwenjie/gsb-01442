# 快速开始

本节将介绍如何在项目中使用 Alkaid Plus。

## 完整引入

如果你对打包后的文件大小不是很在乎，可以使用完整引入的方式：

```ts
// main.ts
import { createApp } from 'vue'
import AlkaidPlus from 'alkaid-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(AlkaidPlus)
app.mount('#app')
```

## 按需引入

按需引入是推荐的使用方式，可以有效减小打包体积。

### Vite 配置

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AkResolver } from 'alkaid-plus/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        AkResolver(),
        ElementPlusResolver(),
      ],
    }),
  ],
})
```

### 使用组件

配置完成后，直接在模板中使用组件即可，无需手动导入：

```vue
<template>
  <AkButton type="primary">主要按钮</AkButton>
  <AkButton type="success">成功按钮</AkButton>
  <AkButton type="warning">警告按钮</AkButton>
  <AkButton type="danger">危险按钮</AkButton>
</template>
```

## 手动引入

如果不想使用自动引入，也可以手动引入需要的组件：

```vue
<script setup lang="ts">
import { AkButton, AkInput } from 'alkaid-plus'
</script>

<template>
  <AkInput v-model="value" placeholder="请输入内容" />
  <AkButton type="primary" @click="handleClick">提交</AkButton>
</template>
```

## 使用示例

### 表单示例

```vue
<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  type: '',
})

const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' },
  ],
}

const handleSubmit = () => {
  console.log('表单数据:', form)
}
</script>

<template>
  <AkForm :model="form" :rules="rules" label-width="80px">
    <AkFormItem label="姓名" prop="name">
      <AkInput v-model="form.name" placeholder="请输入姓名" />
    </AkFormItem>
    <AkFormItem label="邮箱" prop="email">
      <AkInput v-model="form.email" placeholder="请输入邮箱" />
    </AkFormItem>
    <AkFormItem label="类型" prop="type">
      <AkSelect v-model="form.type" placeholder="请选择类型">
        <AkOption label="类型一" value="1" />
        <AkOption label="类型二" value="2" />
      </AkSelect>
    </AkFormItem>
    <AkFormItem>
      <AkButton type="primary" @click="handleSubmit">提交</AkButton>
    </AkFormItem>
  </AkForm>
</template>
```

### 表格示例

```vue
<script setup lang="ts">
const tableData = [
  { date: '2024-01-01', name: '张三', address: '北京市朝阳区' },
  { date: '2024-01-02', name: '李四', address: '上海市浦东新区' },
  { date: '2024-01-03', name: '王五', address: '广州市天河区' },
]
</script>

<template>
  <AkTable :data="tableData" border stripe>
    <AkTableColumn prop="date" label="日期" width="180" />
    <AkTableColumn prop="name" label="姓名" width="180" />
    <AkTableColumn prop="address" label="地址" />
  </AkTable>
</template>
```

## 下一步

- 查看 [组件文档](/components/button) 了解所有可用组件
- 学习 [按需引入](/guide/on-demand) 优化打包体积
- 了解 [主题定制](/guide/theming) 实现品牌化
