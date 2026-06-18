<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElDescriptionsItem } from 'element-plus'
defineOptions({ name: 'AkDescriptionsItem', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElDescriptionsItem v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElDescriptionsItem>
</template>
