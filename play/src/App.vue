<script setup lang="ts">
import { ref } from 'vue'
import { AkButton, AkInput, AkSelect, AkOption } from '@alkaid-plus/components'

const inputValue = ref('')
const selectValue = ref('')
const loading = ref(false)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<template>
  <div style="padding: 24px; max-width: 800px; margin: 0 auto;">
    <h1>Alkaid Plus Playground</h1>
    <p style="color: #666; margin-bottom: 24px;">
      这是 Alkaid Plus 组件库的开发调试页面
    </p>

    <div style="margin-bottom: 24px;">
      <h3>Button 按钮</h3>
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <AkButton>默认按钮</AkButton>
        <AkButton type="primary">主要按钮</AkButton>
        <AkButton type="success">成功按钮</AkButton>
        <AkButton type="warning">警告按钮</AkButton>
        <AkButton type="danger">危险按钮</AkButton>
        <AkButton type="primary" :loading="loading" @click="handleClick">
          {{ loading ? '加载中...' : '点击加载' }}
        </AkButton>
      </div>
    </div>

    <div style="margin-bottom: 24px;">
      <h3>Input 输入框</h3>
      <AkInput
        v-model="inputValue"
        placeholder="请输入内容"
        clearable
        style="width: 300px;"
      />
      <p style="margin-top: 8px; color: #666;">输入值: {{ inputValue }}</p>
    </div>

    <div style="margin-bottom: 24px;">
      <h3>Select 选择器</h3>
      <AkSelect
        v-model="selectValue"
        placeholder="请选择"
        clearable
        style="width: 300px;"
      >
        <AkOption label="选项一" value="1" />
        <AkOption label="选项二" value="2" />
        <AkOption label="选项三" value="3" />
      </AkSelect>
      <p style="margin-top: 8px; color: #666;">选中值: {{ selectValue }}</p>
    </div>
  </div>
</template>

<style>
body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
