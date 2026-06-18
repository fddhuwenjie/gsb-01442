import { computed, getCurrentInstance, ref, unref } from 'vue'
import type { ComponentInternalInstance, Ref, ComputedRef } from 'vue'

/**
 * 获取当前组件实例（安全版本）
 */
export const useCurrentInstance = (): ComponentInternalInstance => {
  const instance = getCurrentInstance()
  if (!instance) {
    throw new Error('useCurrentInstance must be called within setup()')
  }
  return instance
}

/**
 * 获取组件的 props 代理
 */
export const useProps = <T extends Record<string, any>>(): ComputedRef<T> => {
  const instance = useCurrentInstance()
  return computed(() => instance.props as T)
}

/**
 * 获取组件的 attrs 代理
 */
export const useAttrs = (): ComputedRef<Record<string, unknown>> => {
  const instance = useCurrentInstance()
  return computed(() => instance.attrs)
}

/**
 * 获取组件的 slots 代理
 */
export const useSlots = () => {
  const instance = useCurrentInstance()
  return instance.slots
}

/**
 * 获取组件的 emit
 */
export const useEmit = () => {
  const instance = useCurrentInstance()
  return instance.emit
}

/**
 * 获取组件的 exposed
 */
export const useExpose = <T extends Record<string, any>>(exposed: T) => {
  const instance = useCurrentInstance()
  instance.exposed = exposed
  return exposed
}

/**
 * 创建命名空间
 */
export const useNamespace = (block: string, prefix = 'ak') => {
  const namespace = prefix
  const b = () => `${namespace}-${block}`
  const e = (element: string) => `${namespace}-${block}__${element}`
  const m = (modifier: string) => `${namespace}-${block}--${modifier}`
  const be = (element: string, modifier: string) => `${namespace}-${block}__${element}--${modifier}`
  const em = (element: string, modifier: string) => `${namespace}-${block}__${element}--${modifier}`
  const is = (name: string, state?: boolean) => (state ?? true ? `is-${name}` : '')

  const cssVar = (object: Record<string, string>) => {
    const styles: Record<string, string> = {}
    for (const key in object) {
      styles[`--${namespace}-${block}-${key}`] = object[key]
    }
    return styles
  }

  const cssVarBlock = (object: Record<string, string>) => {
    const styles: Record<string, string> = {}
    for (const key in object) {
      styles[`--${namespace}-${key}`] = object[key]
    }
    return styles
  }

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    is,
    cssVar,
    cssVarBlock,
  }
}

/**
 * 解包 Ref
 */
export const unrefElement = <T>(elRef: Ref<T> | T): T => {
  return unref(elRef)
}

/**
 * 创建可控的 v-model
 */
export const useVModel = <T>(
  props: Record<string, any>,
  key: string,
  emit: (event: string, ...args: any[]) => void,
  options?: { passive?: boolean; defaultValue?: T }
): Ref<T> => {
  const { passive = false, defaultValue } = options ?? {}

  const getValue = () => (props[key] !== undefined ? props[key] : defaultValue)

  if (passive) {
    const proxy = ref(getValue()) as Ref<T>
    return proxy
  }

  return computed({
    get: () => getValue(),
    set: (value) => {
      emit(`update:${key}`, value)
    },
  }) as Ref<T>
}
