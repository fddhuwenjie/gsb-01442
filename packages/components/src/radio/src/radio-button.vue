<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElRadioButton } from 'element-plus'
defineOptions({ name: 'AkRadioButton', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElRadioButton v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElRadioButton>
</template>
