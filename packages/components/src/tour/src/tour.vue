<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElTour } from 'element-plus'
defineOptions({ name: 'AkTour', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElTour v-bind="attrs">
    <slot />
  </ElTour>
</template>
