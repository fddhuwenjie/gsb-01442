import type { ExtractPropTypes, PropType } from 'vue'

export const dialogProps = {
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: '50%',
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  top: {
    type: String,
    default: '15vh',
  },
  modal: {
    type: Boolean,
    default: true,
  },
  modalClass: {
    type: String,
    default: undefined,
  },
  appendToBody: {
    type: Boolean,
    default: false,
  },
  appendTo: {
    type: String,
    default: 'body',
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  customClass: {
    type: String,
    default: '',
  },
  openDelay: {
    type: Number,
    default: 0,
  },
  closeDelay: {
    type: Number,
    default: 0,
  },
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  beforeClose: {
    type: Function as PropType<(done: () => void) => void>,
    default: undefined,
  },
  draggable: {
    type: Boolean,
    default: false,
  },
  overflow: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  alignCenter: {
    type: Boolean,
    default: false,
  },
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  closeIcon: {
    type: [String, Object] as PropType<string | object>,
    default: undefined,
  },
  zIndex: {
    type: Number,
    default: undefined,
  },
  headerAriaLevel: {
    type: String,
    default: '2',
  },
} as const

export const dialogEmits = {
  'update:modelValue': (value: boolean) => typeof value === 'boolean',
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  'open-auto-focus': () => true,
  'close-auto-focus': () => true,
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>
export type DialogEmits = typeof dialogEmits
