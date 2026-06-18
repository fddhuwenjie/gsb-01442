<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElMain } from 'element-plus'
defineOptions({ name: 'AkMain', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElMain v-bind="attrs">
    <slot />
  </ElMain>
</template>
