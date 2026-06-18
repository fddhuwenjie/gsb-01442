<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElOptionGroup } from 'element-plus'
import { optionGroupProps } from './select'

defineOptions({
  name: 'AkOptionGroup',
  inheritAttrs: false,
})

const props = defineProps(optionGroupProps)
const attrs = useAttrs()
const slots = useSlots()
</script>

<template>
  <ElOptionGroup v-bind="{ ...props, ...attrs }">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElOptionGroup>
</template>
