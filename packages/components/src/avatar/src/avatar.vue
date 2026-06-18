<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElAvatar } from 'element-plus'
defineOptions({ name: 'AkAvatar', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElAvatar v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElAvatar>
</template>
