import { onBeforeUnmount, ref, type Ref } from 'vue'

/**
 * 可取消的延时执行
 */
export const useTimeout = () => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  const isPending = ref(false)

  const registerTimeout = (fn: () => void, delay: number) => {
    cancelTimeout()
    isPending.value = true
    timeoutId = setTimeout(() => {
      fn()
      isPending.value = false
    }, delay)
  }

  const cancelTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
      isPending.value = false
    }
  }

  onBeforeUnmount(() => {
    cancelTimeout()
  })

  return {
    registerTimeout,
    cancelTimeout,
    isPending,
  }
}

/**
 * 延迟执行
 */
export const useDelay = (delay: number) => {
  const { registerTimeout, cancelTimeout, isPending } = useTimeout()

  const start = (fn: () => void) => {
    registerTimeout(fn, delay)
  }

  return {
    start,
    cancel: cancelTimeout,
    isPending,
  }
}
