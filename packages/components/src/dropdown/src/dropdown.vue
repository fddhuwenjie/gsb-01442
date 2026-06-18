<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElDropdown } from 'element-plus'
defineOptions({ name: 'AkDropdown', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElDropdown v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElDropdown>
</template>
