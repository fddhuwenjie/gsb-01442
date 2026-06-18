import type { ExtractPropTypes, PropType, Component } from 'vue'

export const inputProps = {
  /**
   * 绑定值
   */
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  /**
   * 类型
   */
  type: {
    type: String as PropType<'text' | 'textarea' | 'password' | 'number'>,
    default: 'text',
  },
  /**
   * 最大输入长度
   */
  maxlength: {
    type: [String, Number] as PropType<string | number>,
    default: undefined,
  },
  /**
   * 最小输入长度
   */
  minlength: {
    type: [String, Number] as PropType<string | number>,
    default: undefined,
  },
  /**
   * 是否显示输入字数统计
   */
  showWordLimit: {
    type: Boolean,
    default: false,
  },
  /**
   * 输入框占位文本
   */
  placeholder: {
    type: String,
    default: '',
  },
  /**
   * 是否可清空
   */
  clearable: {
    type: Boolean,
    default: false,
  },
  /**
   * 切换密码图标
   */
  showPassword: {
    type: Boolean,
    default: false,
  },
  /**
   * 禁用状态
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * 输入框尺寸
   */
  size: {
    type: String as PropType<'' | 'large' | 'default' | 'small'>,
    default: '',
  },
  /**
   * 前缀图标
   */
  prefixIcon: {
    type: [String, Object] as PropType<string | Component>,
    default: undefined,
  },
  /**
   * 后缀图标
   */
  suffixIcon: {
    type: [String, Object] as PropType<string | Component>,
    default: undefined,
  },
  /**
   * 自适应内容高度
   */
  autosize: {
    type: [Boolean, Object] as PropType<boolean | { minRows?: number; maxRows?: number }>,
    default: false,
  },
  /**
   * 原生 autocomplete 属性
   */
  autocomplete: {
    type: String,
    default: 'off',
  },
  /**
   * 原生 name 属性
   */
  name: {
    type: String,
    default: '',
  },
  /**
   * 只读状态
   */
  readonly: {
    type: Boolean,
    default: false,
  },
  /**
   * 最大值
   */
  max: {
    type: [String, Number] as PropType<string | number>,
    default: undefined,
  },
  /**
   * 最小值
   */
  min: {
    type: [String, Number] as PropType<string | number>,
    default: undefined,
  },
  /**
   * 步长
   */
  step: {
    type: [String, Number] as PropType<string | number>,
    default: undefined,
  },
  /**
   * 输入框行数
   */
  rows: {
    type: Number,
    default: 2,
  },
  /**
   * 原生 autofocus 属性
   */
  autofocus: {
    type: Boolean,
    default: false,
  },
  /**
   * 原生 form 属性
   */
  form: {
    type: String,
    default: '',
  },
  /**
   * 输入框的 tabindex
   */
  tabindex: {
    type: [String, Number] as PropType<string | number>,
    default: 0,
  },
  /**
   * 输入时是否触发表单的校验
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  /**
   * input 元素的 id
   */
  id: {
    type: String,
    default: undefined,
  },
  /**
   * 等价于原生 input aria-label 属性
   */
  label: {
    type: String,
    default: undefined,
  },
  /**
   * 控制是否能被用户缩放
   */
  resize: {
    type: String as PropType<'none' | 'both' | 'horizontal' | 'vertical'>,
    default: undefined,
  },
  /**
   * 输入格式化
   */
  formatter: {
    type: Function as PropType<(value: string | number) => string>,
    default: undefined,
  },
  /**
   * 从格式化器输入中提取值
   */
  parser: {
    type: Function as PropType<(value: string) => string>,
    default: undefined,
  },
} as const

export const inputEmits = {
  'update:modelValue': (value: string) => true,
  input: (value: string) => true,
  change: (value: string) => true,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
}

export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = typeof inputEmits
