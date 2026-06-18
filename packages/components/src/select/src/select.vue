<script setup lang="ts">
import { computed, useAttrs, useSlots, ref } from 'vue'
import { ElSelect } from 'element-plus'
import { selectProps, selectEmits } from './select'

defineOptions({
  name: 'AkSelect',
  inheritAttrs: false,
})

const props = defineProps(selectProps)
const emit = defineEmits(selectEmits)

const attrs = useAttrs()
const slots = useSlots()

const selectRef = ref<InstanceType<typeof ElSelect>>()

const mergedProps = computed(() => ({
  ...props,
  ...attrs,
}))

// 事件转发
const handleChange = (val: any) => emit('change', val)
const handleVisibleChange = (visible: boolean) => emit('visible-change', visible)
const handleRemoveTag = (tag: any) => emit('remove-tag', tag)
const handleClear = () => emit('clear')
const handleBlur = (evt: FocusEvent) => emit('blur', evt)
const handleFocus = (evt: FocusEvent) => emit('focus', evt)

// 暴露方法
defineExpose({
  focus: () => selectRef.value?.focus(),
  blur: () => selectRef.value?.blur(),
})
</script>

<template>
  <ElSelect
    ref="selectRef"
    v-bind="mergedProps"
    @change="handleChange"
    @visible-change="handleVisibleChange"
    @remove-tag="handleRemoveTag"
    @clear="handleClear"
    @blur="handleBlur"
    @focus="handleFocus"
  >
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElSelect>
</template>
