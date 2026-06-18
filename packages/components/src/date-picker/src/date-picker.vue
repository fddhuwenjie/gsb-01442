<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElDatePicker } from 'element-plus'
defineOptions({ name: 'AkDatePicker', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElDatePicker v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElDatePicker>
</template>
