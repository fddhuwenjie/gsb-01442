import { ref, onBeforeUnmount } from 'vue'

/**
 * 节流 Hook
 */
export const useThrottle = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 300
) => {
  let lastTime = 0
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  const isPending = ref(false)

  const throttledFn = (...args: Parameters<T>) => {
    const now = Date.now()
    const remaining = delay - (now - lastTime)

    if (remaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
      lastTime = now
      isPending.value = false
      fn(...args)
    } else if (!timeoutId) {
      isPending.value = true
      timeoutId = setTimeout(() => {
        lastTime = Date.now()
        timeoutId = null
        isPending.value = false
        fn(...args)
      }, remaining)
    }
  }

  const cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
      isPending.value = false
    }
  }

  onBeforeUnmount(() => {
    cancel()
  })

  return {
    throttledFn,
    cancel,
    isPending,
  }
}

/**
 * 防抖 Hook
 */
export const useDebounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay: number = 300
) => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  const isPending = ref(false)

  const debouncedFn = (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    isPending.value = true
    timeoutId = setTimeout(() => {
      fn(...args)
      isPending.value = false
      timeoutId = null
    }, delay)
  }

  const cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
      isPending.value = false
    }
  }

  onBeforeUnmount(() => {
    cancel()
  })

  return {
    debouncedFn,
    cancel,
    isPending,
  }
}
