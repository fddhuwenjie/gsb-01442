<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElCarouselItem } from 'element-plus'
defineOptions({ name: 'AkCarouselItem', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElCarouselItem v-bind="attrs">
    <slot />
  </ElCarouselItem>
</template>
