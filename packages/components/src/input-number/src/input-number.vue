<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElInputNumber } from 'element-plus'
defineOptions({ name: 'AkInputNumber', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElInputNumber v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElInputNumber>
</template>
