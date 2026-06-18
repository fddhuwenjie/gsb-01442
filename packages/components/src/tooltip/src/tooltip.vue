<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElTooltip } from 'element-plus'
defineOptions({ name: 'AkTooltip', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElTooltip v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElTooltip>
</template>
