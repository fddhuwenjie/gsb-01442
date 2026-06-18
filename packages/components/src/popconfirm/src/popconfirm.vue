<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElPopconfirm } from 'element-plus'
defineOptions({ name: 'AkPopconfirm', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElPopconfirm v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElPopconfirm>
</template>
