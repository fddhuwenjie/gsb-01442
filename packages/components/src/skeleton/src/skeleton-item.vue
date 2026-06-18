<script setup lang="ts">
import { useAttrs } from 'vue'
import { ElSkeletonItem } from 'element-plus'
defineOptions({ name: 'AkSkeletonItem', inheritAttrs: false })
const attrs = useAttrs()
</script>
<template>
  <ElSkeletonItem v-bind="attrs" />
</template>
