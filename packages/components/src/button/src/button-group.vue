<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElButtonGroup } from 'element-plus'
import { buttonGroupProps } from './button'

defineOptions({
  name: 'AkButtonGroup',
  inheritAttrs: false,
})

const props = defineProps(buttonGroupProps)
const attrs = useAttrs()
const slots = useSlots()
</script>

<template>
  <ElButtonGroup v-bind="{ ...props, ...attrs }">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElButtonGroup>
</template>
