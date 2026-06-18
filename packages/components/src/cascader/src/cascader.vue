<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElCascader } from 'element-plus'
defineOptions({ name: 'AkCascader', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElCascader v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElCascader>
</template>
