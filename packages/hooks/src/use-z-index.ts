import { ref, computed } from 'vue'

const zIndex = ref(2000)

/**
 * 获取下一个 z-index
 */
export const useZIndex = (initialValue?: number) => {
  if (initialValue !== undefined) {
    zIndex.value = initialValue
  }

  const currentZIndex = computed(() => zIndex.value)

  const nextZIndex = () => {
    zIndex.value++
    return zIndex.value
  }

  return {
    initialZIndex: currentZIndex,
    currentZIndex,
    nextZIndex,
  }
}

/**
 * 设置初始 z-index
 */
export const setInitialZIndex = (value: number) => {
  zIndex.value = value
}
