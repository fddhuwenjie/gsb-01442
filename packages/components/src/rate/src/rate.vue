<script setup lang="ts">
import { useAttrs } from 'vue'
import { ElRate } from 'element-plus'
defineOptions({ name: 'AkRate', inheritAttrs: false })
const attrs = useAttrs()
</script>
<template>
  <ElRate v-bind="attrs" />
</template>
