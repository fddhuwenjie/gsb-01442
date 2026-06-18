<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElSpace } from 'element-plus'
defineOptions({ name: 'AkSpace', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElSpace v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElSpace>
</template>
