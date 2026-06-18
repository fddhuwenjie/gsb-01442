<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElTag } from 'element-plus'
defineOptions({ name: 'AkTag', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElTag v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElTag>
</template>
