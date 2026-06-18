<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElCollapse } from 'element-plus'
defineOptions({ name: 'AkCollapse', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElCollapse v-bind="attrs">
    <slot />
  </ElCollapse>
</template>
