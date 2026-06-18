<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElSubMenu } from 'element-plus'
defineOptions({ name: 'AkSubMenu', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElSubMenu v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElSubMenu>
</template>
