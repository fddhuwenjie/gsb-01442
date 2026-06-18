<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElStep } from 'element-plus'
defineOptions({ name: 'AkStep', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElStep v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElStep>
</template>
