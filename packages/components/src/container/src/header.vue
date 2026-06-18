<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElHeader } from 'element-plus'
defineOptions({ name: 'AkHeader', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElHeader v-bind="attrs">
    <slot />
  </ElHeader>
</template>
