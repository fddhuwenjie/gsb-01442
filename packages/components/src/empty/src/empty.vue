<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElEmpty } from 'element-plus'
defineOptions({ name: 'AkEmpty', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElEmpty v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElEmpty>
</template>
