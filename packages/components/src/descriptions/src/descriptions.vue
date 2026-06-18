<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElDescriptions } from 'element-plus'
defineOptions({ name: 'AkDescriptions', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElDescriptions v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElDescriptions>
</template>
