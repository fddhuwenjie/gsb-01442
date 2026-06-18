<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElCalendar } from 'element-plus'
defineOptions({ name: 'AkCalendar', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElCalendar v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElCalendar>
</template>
