import { ref, computed, getCurrentInstance } from 'vue'

let idCounter = 0

/**
 * 生成唯一 ID
 */
export const useId = (prefix = 'ak') => {
  const instance = getCurrentInstance()
  const id = computed(() => {
    if (instance?.props?.id) {
      return String(instance.props.id)
    }
    return `${prefix}-${++idCounter}`
  })

  return id
}

/**
 * 生成唯一 ID (非响应式)
 */
export const generateId = (prefix = 'ak') => {
  return `${prefix}-${++idCounter}`
}

/**
 * 重置 ID 计数器 (仅用于测试)
 */
export const resetIdCounter = () => {
  idCounter = 0
}
