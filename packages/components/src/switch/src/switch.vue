<script setup lang="ts">
import { useAttrs } from 'vue'
import { ElSwitch } from 'element-plus'
defineOptions({ name: 'AkSwitch', inheritAttrs: false })
const attrs = useAttrs()
</script>
<template>
  <ElSwitch v-bind="attrs" />
</template>
