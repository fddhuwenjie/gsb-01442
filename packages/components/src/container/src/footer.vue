<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElFooter } from 'element-plus'
defineOptions({ name: 'AkFooter', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElFooter v-bind="attrs">
    <slot />
  </ElFooter>
</template>
