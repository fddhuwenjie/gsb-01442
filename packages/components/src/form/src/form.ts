import type { ExtractPropTypes, PropType } from 'vue'
import type { FormRules } from 'element-plus'

export const formProps = {
  model: {
    type: Object as PropType<Record<string, any>>,
    default: undefined,
  },
  rules: {
    type: Object as PropType<FormRules>,
    default: undefined,
  },
  labelPosition: {
    type: String as PropType<'left' | 'right' | 'top'>,
    default: 'right',
  },
  requireAsteriskPosition: {
    type: String as PropType<'left' | 'right'>,
    default: 'left',
  },
  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  labelSuffix: {
    type: String,
    default: '',
  },
  inline: {
    type: Boolean,
    default: false,
  },
  inlineMessage: {
    type: Boolean,
    default: false,
  },
  statusIcon: {
    type: Boolean,
    default: false,
  },
  showMessage: {
    type: Boolean,
    default: true,
  },
  validateOnRuleChange: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String as PropType<'' | 'large' | 'default' | 'small'>,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  scrollToError: {
    type: Boolean,
    default: false,
  },
  scrollIntoViewOptions: {
    type: [Object, Boolean] as PropType<ScrollIntoViewOptions | boolean>,
    default: undefined,
  },
} as const

export const formItemProps = {
  label: {
    type: String,
    default: '',
  },
  labelWidth: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  prop: {
    type: [String, Array] as PropType<string | string[]>,
    default: '',
  },
  required: {
    type: Boolean,
    default: undefined,
  },
  rules: {
    type: [Object, Array] as PropType<object | object[]>,
    default: undefined,
  },
  error: {
    type: String,
    default: '',
  },
  validateStatus: {
    type: String as PropType<'' | 'error' | 'validating' | 'success'>,
    default: '',
  },
  for: {
    type: String,
    default: undefined,
  },
  inlineMessage: {
    type: [String, Boolean] as PropType<string | boolean>,
    default: '',
  },
  showMessage: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String as PropType<'' | 'large' | 'default' | 'small'>,
    default: '',
  },
} as const

export const formEmits = {
  validate: (prop: string, isValid: boolean, message: string) => true,
}

export type FormProps = ExtractPropTypes<typeof formProps>
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
export type FormEmits = typeof formEmits
