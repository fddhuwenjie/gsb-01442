<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElTreeSelect } from 'element-plus'
defineOptions({ name: 'AkTreeSelect', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElTreeSelect v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElTreeSelect>
</template>
