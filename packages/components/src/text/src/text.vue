<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElText } from 'element-plus'
defineOptions({ name: 'AkText', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElText v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElText>
</template>
