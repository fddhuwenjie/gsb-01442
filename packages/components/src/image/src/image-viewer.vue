<script setup lang="ts">
import { useAttrs } from 'vue'
import { ElImageViewer } from 'element-plus'
defineOptions({ name: 'AkImageViewer', inheritAttrs: false })
const attrs = useAttrs()
</script>
<template>
  <ElImageViewer v-bind="attrs" />
</template>
