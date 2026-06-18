<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElDivider } from 'element-plus'
defineOptions({ name: 'AkDivider', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElDivider v-bind="attrs">
    <slot />
  </ElDivider>
</template>
