<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElCheckbox } from 'element-plus'
defineOptions({ name: 'AkCheckbox', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElCheckbox v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElCheckbox>
</template>
