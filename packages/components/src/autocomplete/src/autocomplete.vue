<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElAutocomplete } from 'element-plus'
defineOptions({ name: 'AkAutocomplete', inheritAttrs: false })
const attrs = useAttrs()
const slots = useSlots()
</script>
<template>
  <ElAutocomplete v-bind="attrs">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElAutocomplete>
</template>
