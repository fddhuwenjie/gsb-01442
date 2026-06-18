<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElResult } from 'element-plus'
defineOptions({ name: 'AkResult', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElResult v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElResult>
</template>
