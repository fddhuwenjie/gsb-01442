<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElCol } from 'element-plus'
defineOptions({ name: 'AkCol', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElCol v-bind="attrs">
    <slot />
  </ElCol>
</template>
