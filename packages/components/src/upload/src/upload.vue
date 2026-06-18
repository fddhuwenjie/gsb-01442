<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElUpload } from 'element-plus'
defineOptions({ name: 'AkUpload', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElUpload v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElUpload>
</template>
