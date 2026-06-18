<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElIcon } from 'element-plus'

defineOptions({ name: 'AkIcon', inheritAttrs: false })

const attrs = useAttrs()
const slots = useSlots()
</script>

<template>
  <ElIcon v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElIcon>
</template>
