<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElImage } from 'element-plus'
defineOptions({ name: 'AkImage', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElImage v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElImage>
</template>
