<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElCarousel } from 'element-plus'
defineOptions({ name: 'AkCarousel', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElCarousel v-bind="attrs">
    <slot />
  </ElCarousel>
</template>
