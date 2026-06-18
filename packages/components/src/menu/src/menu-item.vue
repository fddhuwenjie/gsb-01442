<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElMenuItem } from 'element-plus'
defineOptions({ name: 'AkMenuItem', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElMenuItem v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElMenuItem>
</template>
