<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElTabs } from 'element-plus'
defineOptions({ name: 'AkTabs', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElTabs v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElTabs>
</template>
