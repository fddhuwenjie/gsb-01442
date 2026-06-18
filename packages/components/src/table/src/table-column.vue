<script setup lang="ts">
import { useAttrs, useSlots } from 'vue'
import { ElTableColumn } from 'element-plus'
import { tableColumnProps } from './table'

defineOptions({
  name: 'AkTableColumn',
  inheritAttrs: false,
})

const props = defineProps(tableColumnProps)
const attrs = useAttrs()
const slots = useSlots()
</script>

<template>
  <ElTableColumn v-bind="{ ...props, ...attrs }">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElTableColumn>
</template>
