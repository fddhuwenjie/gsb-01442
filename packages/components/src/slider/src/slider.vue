<script setup lang="ts">
import { useAttrs } from 'vue'
import { ElSlider } from 'element-plus'
defineOptions({ name: 'AkSlider', inheritAttrs: false })
const attrs = useAttrs()
</script>
<template>
  <ElSlider v-bind="attrs" />
</template>
