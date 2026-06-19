<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import { ElCheckTag } from 'element-plus'
import { checkTagProps, checkTagEmits } from './check-tag'

defineOptions({
  name: 'AkCheckTag',
  inheritAttrs: false,
})

const props = defineProps(checkTagProps)
const emit = defineEmits(checkTagEmits)

const attrs = useAttrs()
const slots = useSlots()

const mergedProps = computed(() => ({
  ...props,
  ...attrs,
}))
</script>

<template>
  <ElCheckTag v-bind="mergedProps">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElCheckTag>
</template>
