<script setup lang="ts">
import { useAttrs } from 'vue'
import { ElColorPicker } from 'element-plus'
defineOptions({ name: 'AkColorPicker', inheritAttrs: false })
const attrs = useAttrs()
</script>
<template>
  <ElColorPicker v-bind="attrs" />
</template>
