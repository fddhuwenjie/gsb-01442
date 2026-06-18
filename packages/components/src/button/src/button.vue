<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import { ElButton } from 'element-plus'
import { buttonProps, buttonEmits } from './button'

defineOptions({
  name: 'AkButton',
  inheritAttrs: false,
})

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)

const attrs = useAttrs()
const slots = useSlots()

// 合并 props 和 attrs，传递给 ElButton
const mergedProps = computed(() => ({
  ...props,
  ...attrs,
}))

// 转发事件
const handleClick = (evt: MouseEvent) => {
  emit('click', evt)
}
</script>

<template>
  <ElButton v-bind="mergedProps" @click="handleClick">
    <!-- 转发所有插槽 -->
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElButton>
</template>
