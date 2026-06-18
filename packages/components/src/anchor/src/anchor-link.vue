<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElAnchorLink } from 'element-plus'
defineOptions({ name: 'AkAnchorLink', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElAnchorLink v-bind="attrs">
    <slot />
  </ElAnchorLink>
</template>
