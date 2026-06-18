<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElCheckboxButton } from 'element-plus'
defineOptions({ name: 'AkCheckboxButton', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElCheckboxButton v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElCheckboxButton>
</template>
