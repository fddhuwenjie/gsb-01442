<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElTimeline } from 'element-plus'
defineOptions({ name: 'AkTimeline', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElTimeline v-bind="attrs">
    <slot />
  </ElTimeline>
</template>
