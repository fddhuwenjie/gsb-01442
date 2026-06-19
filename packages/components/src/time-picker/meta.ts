import type { ComponentMeta } from '../meta-types'

const meta: ComponentMeta = {
  dir: 'time-picker',
  exports: ['AkTimePicker', 'AkTimeSelect'],
  style: 'time-picker',
  exportStyles: {
    AkTimeSelect: 'time-select',
  },
  category: 'Form',
  label: 'TimePicker 时间选择',
  kind: 'component',
  inSidebar: false,
}

export default meta
