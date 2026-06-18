<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElTimeSelect } from 'element-plus'
defineOptions({ name: 'AkTimeSelect', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElTimeSelect v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElTimeSelect>
</template>
