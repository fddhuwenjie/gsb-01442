<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElDropdownMenu } from 'element-plus'
defineOptions({ name: 'AkDropdownMenu', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElDropdownMenu v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElDropdownMenu>
</template>
