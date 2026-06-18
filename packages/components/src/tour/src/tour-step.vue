<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElTourStep } from 'element-plus'
defineOptions({ name: 'AkTourStep', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElTourStep v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElTourStep>
</template>
