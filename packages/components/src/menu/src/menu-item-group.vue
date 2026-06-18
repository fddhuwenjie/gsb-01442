<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElMenuItemGroup } from 'element-plus'
defineOptions({ name: 'AkMenuItemGroup', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElMenuItemGroup v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElMenuItemGroup>
</template>
