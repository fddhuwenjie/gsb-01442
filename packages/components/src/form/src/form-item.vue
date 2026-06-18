<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElFormItem } from 'element-plus'
import { formItemProps } from './form'

defineOptions({
  name: 'AkFormItem',
  inheritAttrs: false,
})

const props = defineProps(formItemProps)
const attrs = useAttrs()
const slots = useSlots()
</script>

<template>
  <ElFormItem v-bind="{ ...props, ...attrs }">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElFormItem>
</template>
