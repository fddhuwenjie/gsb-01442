<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElDrawer } from 'element-plus'
defineOptions({ name: 'AkDrawer', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElDrawer v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElDrawer>
</template>
