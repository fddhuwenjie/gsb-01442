<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElCard } from 'element-plus'
defineOptions({ name: 'AkCard', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElCard v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElCard>
</template>
