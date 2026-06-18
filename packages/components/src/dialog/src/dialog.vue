<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import { ElDialog } from 'element-plus'
import { dialogProps, dialogEmits } from './dialog'

defineOptions({
  name: 'AkDialog',
  inheritAttrs: false,
})

const props = defineProps(dialogProps)
const emit = defineEmits(dialogEmits)

const attrs = useAttrs()
const slots = useSlots()

const mergedProps = computed(() => ({
  ...props,
  ...attrs,
}))

const handleOpen = () => emit('open')
const handleOpened = () => emit('opened')
const handleClose = () => emit('close')
const handleClosed = () => emit('closed')
const handleOpenAutoFocus = () => emit('open-auto-focus')
const handleCloseAutoFocus = () => emit('close-auto-focus')
</script>

<template>
  <ElDialog
    v-bind="mergedProps"
    @open="handleOpen"
    @opened="handleOpened"
    @close="handleClose"
    @closed="handleClosed"
    @open-auto-focus="handleOpenAutoFocus"
    @close-auto-focus="handleCloseAutoFocus"
  >
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElDialog>
</template>
