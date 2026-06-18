<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElBacktop } from 'element-plus'
defineOptions({ name: 'AkBacktop', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElBacktop v-bind="attrs">
    <slot />
  </ElBacktop>
</template>
