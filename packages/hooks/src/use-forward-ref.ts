import { provide, inject, ref, type Ref, type InjectionKey } from 'vue'

export type ForwardRefContext = {
  setForwardRef: <T>(el: T) => void
}

const FORWARD_REF_KEY: InjectionKey<ForwardRefContext> = Symbol('forwardRef')

/**
 * 提供 ref 转发
 */
export const useForwardRefProvide = <T>(ref: Ref<T | undefined>) => {
  const setForwardRef = (el: T) => {
    ref.value = el
  }

  provide(FORWARD_REF_KEY, {
    setForwardRef,
  })
}

/**
 * 注入 ref 转发
 */
export const useForwardRef = <T>(fallbackRef: Ref<T | undefined>) => {
  const context = inject(FORWARD_REF_KEY, undefined)

  if (context) {
    return (el: T) => {
      fallbackRef.value = el
      context.setForwardRef(el)
    }
  }

  return (el: T) => {
    fallbackRef.value = el
  }
}

/**
 * 创建 ref 转发
 */
export const useForwardRefContext = <T>() => {
  const forwardRef = ref<T>()

  const setRef = (el: T | undefined) => {
    forwardRef.value = el as T
  }

  return {
    forwardRef,
    setRef,
  }
}
