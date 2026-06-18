<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElRadio } from 'element-plus'
defineOptions({ name: 'AkRadio', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElRadio v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElRadio>
</template>
