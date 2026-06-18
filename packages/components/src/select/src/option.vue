<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElOption } from 'element-plus'
import { optionProps } from './select'

defineOptions({
  name: 'AkOption',
  inheritAttrs: false,
})

const props = defineProps(optionProps)
const attrs = useAttrs()
const slots = useSlots()
</script>

<template>
  <ElOption v-bind="{ ...props, ...attrs }">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElOption>
</template>
