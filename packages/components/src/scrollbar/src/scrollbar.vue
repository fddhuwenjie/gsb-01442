<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElScrollbar } from 'element-plus'
defineOptions({ name: 'AkScrollbar', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElScrollbar v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElScrollbar>
</template>
