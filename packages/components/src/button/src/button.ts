import type { ExtractPropTypes, PropType, Component } from 'vue'
import type { ButtonType, ButtonNativeType } from 'element-plus'

// Button Props 定义
export const buttonProps = {
  /**
   * 按钮大小
   */
  size: {
    type: String as PropType<'' | 'default' | 'small' | 'large'>,
    default: '',
  },
  /**
   * 按钮类型
   */
  type: {
    type: String as PropType<ButtonType>,
    default: '',
  },
  /**
   * 是否为朴素按钮
   */
  plain: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否为文字按钮
   */
  text: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否显示文字按钮背景颜色
   */
  bg: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否为链接按钮
   */
  link: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否为圆角按钮
   */
  round: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否为圆形按钮
   */
  circle: {
    type: Boolean,
    default: false,
  },
  /**
   * 是否为加载中状态
   */
  loading: {
    type: Boolean,
    default: false,
  },
  /**
   * 自定义加载中图标
   */
  loadingIcon: {
    type: [String, Object] as PropType<string | Component>,
    default: undefined,
  },
  /**
   * 是否为禁用状态
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 按钮图标
   */
  icon: {
    type: [String, Object] as PropType<string | Component>,
    default: undefined,
  },
  /**
   * 是否聚焦自动插入空格
   */
  autofocus: {
    type: Boolean,
    default: false,
  },
  /**
   * 原生 type 属性
   */
  nativeType: {
    type: String as PropType<ButtonNativeType>,
    default: 'button',
  },
  /**
   * 自动在两个中文字符之间插入空格
   */
  autoInsertSpace: {
    type: Boolean,
    default: undefined,
  },
  /**
   * 自定义按钮颜色
   */
  color: {
    type: String,
    default: '',
  },
  /**
   * dark 模式
   */
  dark: {
    type: Boolean,
    default: false,
  },
  /**
   * 自定义元素标签
   */
  tag: {
    type: [String, Object] as PropType<string | Component>,
    default: 'button',
  },
} as const

// Button Emits 定义
export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

// ButtonGroup Props 定义
export const buttonGroupProps = {
  /**
   * 按钮组大小
   */
  size: {
    type: String as PropType<'' | 'default' | 'small' | 'large'>,
    default: '',
  },
  /**
   * 按钮组类型
   */
  type: {
    type: String as PropType<ButtonType>,
    default: '',
  },
} as const

// 导出类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
