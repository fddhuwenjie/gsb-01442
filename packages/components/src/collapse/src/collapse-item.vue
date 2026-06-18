<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElCollapseItem } from 'element-plus'
defineOptions({ name: 'AkCollapseItem', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElCollapseItem v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElCollapseItem>
</template>
