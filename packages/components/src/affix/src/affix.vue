<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElAffix } from 'element-plus'
defineOptions({ name: 'AkAffix', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElAffix v-bind="attrs">
    <slot />
  </ElAffix>
</template>
