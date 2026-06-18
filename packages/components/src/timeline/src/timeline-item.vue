<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElTimelineItem } from 'element-plus'
defineOptions({ name: 'AkTimelineItem', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElTimelineItem v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElTimelineItem>
</template>
