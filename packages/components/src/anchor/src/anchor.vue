<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElAnchor } from 'element-plus'
defineOptions({ name: 'AkAnchor', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElAnchor v-bind="attrs">
    <slot />
  </ElAnchor>
</template>
