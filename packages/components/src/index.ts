// Alkaid Plus Components
// 基于 Element Plus 的二次封装组件库

// 组件清单（中央登记处，下游 resolver / 全量安装器 / 文档站均从此派生）
export * from './manifest'

// 由 manifest 派生的全量安装组件数组（供 alkaid-plus 总入口消费）
export { installableComponents } from './installable'

// Basic 基础组件
export * from './button'
export * from './icon'
export * from './link'
export * from './scrollbar'
export * from './space'
export * from './text'

// Form 表单组件
export * from './input'
export * from './input-number'
export * from './select'
export * from './cascader'
export * from './checkbox'
export * from './radio'
export * from './switch'
export * from './date-picker'
export * from './time-picker'
export * from './color-picker'
export * from './rate'
export * from './slider'
export * from './upload'
export * from './form'
export * from './autocomplete'

// Data 数据展示组件
export * from './table'
export * from './tag'
export * from './progress'
export * from './tree'
export * from './pagination'
export * from './badge'
export * from './avatar'
export * from './skeleton'
export * from './empty'
export * from './descriptions'
export * from './result'
export * from './statistic'

// Navigation 导航组件
export * from './menu'
export * from './tabs'
export * from './breadcrumb'
export * from './dropdown'
export * from './steps'
export * from './page-header'

// Feedback 反馈组件
export * from './alert'
export * from './dialog'
export * from './drawer'
export * from './message'
export * from './message-box'
export * from './notification'
export * from './loading'
export * from './popconfirm'
export * from './popover'
export * from './tooltip'

// Layout 布局组件
export * from './container'
export * from './row'
export * from './col'
export * from './divider'
export * from './card'
export * from './collapse'

// Others 其他组件
export * from './affix'
export * from './backtop'
export * from './calendar'
export * from './carousel'
export * from './image'
export * from './infinite-scroll'
export * from './timeline'
export * from './transfer'
export * from './tree-select'
export * from './virtualized-table'
export * from './watermark'
export * from './tour'
export * from './anchor'
export * from './segmented'
export * from './mention'
