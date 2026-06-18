<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElCheckboxGroup } from 'element-plus'
defineOptions({ name: 'AkCheckboxGroup', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElCheckboxGroup v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElCheckboxGroup>
</template>
