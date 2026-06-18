<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElRow } from 'element-plus'
defineOptions({ name: 'AkRow', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElRow v-bind="attrs">
    <slot />
  </ElRow>
</template>
