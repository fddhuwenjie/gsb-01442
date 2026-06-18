<script setup lang="ts">
import { computed, useAttrs, useSlots, ref } from 'vue'
import { ElInput } from 'element-plus'
import { inputProps, inputEmits } from './input'
import type { InputInstance as ElInputInstance } from 'element-plus'

defineOptions({
  name: 'AkInput',
  inheritAttrs: false,
})

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const attrs = useAttrs()
const slots = useSlots()

const inputRef = ref<ElInputInstance>()

// 合并 props 和 attrs
const mergedProps = computed(() => ({
  ...props,
  ...attrs,
}))

// 事件转发
const handleInput = (value: string) => emit('input', value)
const handleChange = (value: string) => emit('change', value)
const handleFocus = (evt: FocusEvent) => emit('focus', evt)
const handleBlur = (evt: FocusEvent) => emit('blur', evt)
const handleClear = () => emit('clear')

// 暴露 ElInput 的方法
defineExpose({
  /** 获取 input 元素 */
  get input() {
    return inputRef.value?.input
  },
  /** 获取 textarea 元素 */
  get textarea() {
    return inputRef.value?.textarea
  },
  /** 获取 ref 元素 */
  get ref() {
    return inputRef.value?.ref
  },
  /** 使 input 获取焦点 */
  focus: () => inputRef.value?.focus(),
  /** 使 input 失去焦点 */
  blur: () => inputRef.value?.blur(),
  /** 选中 input 中的文字 */
  select: () => inputRef.value?.select(),
  /** 清除 input 值 */
  clear: () => inputRef.value?.clear(),
  /** 触发 input 内容调整 */
  resizeTextarea: () => inputRef.value?.resizeTextarea(),
})
</script>

<template>
  <ElInput
    ref="inputRef"
    v-bind="mergedProps"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    @clear="handleClear"
  >
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElInput>
</template>
