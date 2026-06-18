<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElPagination } from 'element-plus'
defineOptions({ name: 'AkPagination', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElPagination v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElPagination>
</template>
