<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElPopover } from 'element-plus'
defineOptions({ name: 'AkPopover', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElPopover v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElPopover>
</template>
