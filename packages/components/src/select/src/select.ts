import type { ExtractPropTypes, PropType, Component } from 'vue'

export const selectProps = {
  modelValue: {
    type: [String, Number, Boolean, Object, Array] as PropType<any>,
    default: undefined,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  valueKey: {
    type: String,
    default: 'value',
  },
  size: {
    type: String as PropType<'' | 'large' | 'default' | 'small'>,
    default: '',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  collapseTags: {
    type: Boolean,
    default: false,
  },
  collapseTagsTooltip: {
    type: Boolean,
    default: false,
  },
  multipleLimit: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    default: '',
  },
  effect: {
    type: String as PropType<'dark' | 'light'>,
    default: 'light',
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  placeholder: {
    type: String,
    default: '',
  },
  filterable: {
    type: Boolean,
    default: false,
  },
  allowCreate: {
    type: Boolean,
    default: false,
  },
  filterMethod: {
    type: Function as PropType<(query: string) => void>,
    default: undefined,
  },
  remote: {
    type: Boolean,
    default: false,
  },
  remoteMethod: {
    type: Function as PropType<(query: string) => void>,
    default: undefined,
  },
  remoteShowSuffix: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingText: {
    type: String,
    default: '',
  },
  noMatchText: {
    type: String,
    default: '',
  },
  noDataText: {
    type: String,
    default: '',
  },
  popperClass: {
    type: String,
    default: '',
  },
  reserveKeyword: {
    type: Boolean,
    default: true,
  },
  defaultFirstOption: {
    type: Boolean,
    default: false,
  },
  teleported: {
    type: Boolean,
    default: true,
  },
  persistent: {
    type: Boolean,
    default: true,
  },
  automaticDropdown: {
    type: Boolean,
    default: false,
  },
  clearIcon: {
    type: [String, Object] as PropType<string | Component>,
    default: undefined,
  },
  fitInputWidth: {
    type: Boolean,
    default: false,
  },
  suffixIcon: {
    type: [String, Object] as PropType<string | Component>,
    default: undefined,
  },
  tagType: {
    type: String as PropType<'success' | 'info' | 'warning' | 'danger' | ''>,
    default: 'info',
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
  placement: {
    type: String as PropType<
      | 'top'
      | 'top-start'
      | 'top-end'
      | 'bottom'
      | 'bottom-start'
      | 'bottom-end'
      | 'left'
      | 'left-start'
      | 'left-end'
      | 'right'
      | 'right-start'
      | 'right-end'
    >,
    default: 'bottom-start',
  },
  maxCollapseTags: {
    type: Number,
    default: 1,
  },
} as const

export const optionProps = {
  value: {
    type: [String, Number, Boolean, Object] as PropType<any>,
    required: true,
  },
  label: {
    type: [String, Number],
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const

export const optionGroupProps = {
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const

export const selectEmits = {
  'update:modelValue': (val: any) => true,
  change: (val: any) => true,
  'visible-change': (visible: boolean) => typeof visible === 'boolean',
  'remove-tag': (tag: any) => true,
  clear: () => true,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
}

export type SelectProps = ExtractPropTypes<typeof selectProps>
export type OptionProps = ExtractPropTypes<typeof optionProps>
export type OptionGroupProps = ExtractPropTypes<typeof optionGroupProps>
export type SelectEmits = typeof selectEmits
