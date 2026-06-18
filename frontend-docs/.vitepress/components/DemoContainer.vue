<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title?: string
  description?: string
}>()

const showCode = ref(false)

const toggleCode = () => {
  showCode.value = !showCode.value
}
</script>

<template>
  <div class="demo-container">
    <div v-if="title || description" class="demo-container__header">
      <h4 v-if="title">{{ title }}</h4>
      <p v-if="description">{{ description }}</p>
    </div>

    <div class="demo-container__preview">
      <slot name="preview" />
    </div>

    <div class="demo-container__actions">
      <button @click="toggleCode">
        {{ showCode ? '隐藏代码' : '查看代码' }}
      </button>
    </div>

    <div v-show="showCode" class="demo-container__code">
      <slot name="code" />
    </div>
  </div>
</template>

<style scoped>
.demo-container__header {
  padding: 16px 24px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.demo-container__header h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
}

.demo-container__header p {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
</style>
