<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElCascaderPanel } from 'element-plus'
defineOptions({ name: 'AkCascaderPanel', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElCascaderPanel v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElCascaderPanel>
</template>
