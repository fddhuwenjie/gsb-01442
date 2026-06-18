<script setup lang="ts">
import { computed, useAttrs, useSlots, ref } from 'vue'
import { ElForm } from 'element-plus'
import { formProps, formEmits } from './form'
import type { FormInstance as ElFormInstance } from 'element-plus'

defineOptions({
  name: 'AkForm',
  inheritAttrs: false,
})

const props = defineProps(formProps)
const emit = defineEmits(formEmits)

const attrs = useAttrs()
const slots = useSlots()

const formRef = ref<ElFormInstance>()

const mergedProps = computed(() => ({
  ...props,
  ...attrs,
}))

const handleValidate = (prop: string, isValid: boolean, message: string) => {
  emit('validate', prop, isValid, message)
}

// 暴露 ElForm 的方法
defineExpose({
  validate: (callback?: (isValid: boolean) => void) => formRef.value?.validate(callback),
  validateField: (
    props?: string | string[],
    callback?: (isValid: boolean) => void
  ) => formRef.value?.validateField(props, callback),
  resetFields: (props?: string | string[]) => formRef.value?.resetFields(props),
  scrollToField: (prop: string) => formRef.value?.scrollToField(prop),
  clearValidate: (props?: string | string[]) => formRef.value?.clearValidate(props),
})
</script>

<template>
  <ElForm ref="formRef" v-bind="mergedProps" @validate="handleValidate">
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElForm>
</template>
