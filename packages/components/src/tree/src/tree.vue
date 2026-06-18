<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElTree } from 'element-plus'
defineOptions({ name: 'AkTree', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElTree v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElTree>
</template>
