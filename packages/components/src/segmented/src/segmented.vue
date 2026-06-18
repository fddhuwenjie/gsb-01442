<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElSegmented } from 'element-plus'
defineOptions({ name: 'AkSegmented', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElSegmented v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElSegmented>
</template>
