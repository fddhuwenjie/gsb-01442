<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElWatermark } from 'element-plus'
defineOptions({ name: 'AkWatermark', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElWatermark v-bind="attrs">
    <slot />
  </ElWatermark>
</template>
