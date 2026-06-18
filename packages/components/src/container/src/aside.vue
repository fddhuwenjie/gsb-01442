<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElAside } from 'element-plus'
defineOptions({ name: 'AkAside', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElAside v-bind="attrs">
    <slot />
  </ElAside>
</template>
