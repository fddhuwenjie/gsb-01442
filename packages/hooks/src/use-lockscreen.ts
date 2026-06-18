import { onBeforeUnmount, onMounted, ref, watch, type Ref } from 'vue'
import { useNamespace } from '@alkaid-plus/utils'

/**
 * 锁定屏幕滚动
 */
export const useLockscreen = (trigger: Ref<boolean>) => {
  const ns = useNamespace('popup')

  let scrollbarWidth = 0
  let originalOverflow = ''
  let originalPaddingRight = ''

  const getScrollbarWidth = () => {
    const outer = document.createElement('div')
    outer.style.visibility = 'hidden'
    outer.style.overflow = 'scroll'
    document.body.appendChild(outer)

    const inner = document.createElement('div')
    outer.appendChild(inner)

    const width = outer.offsetWidth - inner.offsetWidth
    outer.remove()

    return width
  }

  const lock = () => {
    const hasScrollbar = document.body.scrollHeight > window.innerHeight
    if (!hasScrollbar) return

    scrollbarWidth = getScrollbarWidth()
    originalOverflow = document.body.style.overflow
    originalPaddingRight = document.body.style.paddingRight

    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
    document.body.classList.add(ns.b())
  }

  const unlock = () => {
    document.body.style.overflow = originalOverflow
    document.body.style.paddingRight = originalPaddingRight
    document.body.classList.remove(ns.b())
  }

  watch(trigger, (val) => {
    if (val) {
      lock()
    } else {
      unlock()
    }
  })

  onMounted(() => {
    if (trigger.value) {
      lock()
    }
  })

  onBeforeUnmount(() => {
    unlock()
  })
}
