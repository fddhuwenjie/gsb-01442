<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElContainer } from 'element-plus'
defineOptions({ name: 'AkContainer', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElContainer v-bind="attrs">
    <slot />
  </ElContainer>
</template>
