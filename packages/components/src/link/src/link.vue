<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElLink } from 'element-plus'
defineOptions({ name: 'AkLink', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElLink v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElLink>
</template>
