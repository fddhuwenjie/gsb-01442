/**
 * Alkaid Plus — Single Source of Truth for the component registry.
 *
 * 新增组件时，只需在此数组中追加一条记录，再运行 `pnpm codegen` 即可自动生成：
 *   - packages/components/src/index.ts         （按分类的 barrel 导出）
 *   - packages/alkaid-plus/src/components.generated.ts
 *   - packages/alkaid-plus/global.d.ts         （GlobalComponents 类型补充）
 *   - packages/resolver/src/component-map.generated.ts
 *   - frontend-docs/.vitepress/components.generated.mts
 *
 * 注意：运行 `pnpm gen <ComponentName>` 脚手架会自动追加条目并运行 codegen，
 * 手动新增时只需改这一个文件。
 */

export type ComponentCategory =
  | 'basic'
  | 'form'
  | 'data'
  | 'navigation'
  | 'feedback'
  | 'layout'
  | 'other'

export type ComponentKind = 'component' | 'function' | 'directive'

export interface SubComponentEntry {
  /** 子组件导出名（带 Ak 前缀），如 "AkButtonGroup" */
  name: string
  /** 覆盖该子组件对应的 Element Plus 样式目录，默认继承父组件的 elStyleKey */
  elStyleKey?: string
}

export interface ComponentEntry {
  /** packages/components/src/ 下的 kebab-case 目录名 */
  folder: string
  /** 主导出名（带 Ak 前缀），如 "AkButton" */
  name: string
  /** 分类 */
  category: ComponentCategory
  /** 组件种类：常规组件 / 函数式调用 / 指令 */
  kind: ComponentKind
  /** 同目录下额外导出的子组件 */
  subComponents?: SubComponentEntry[]
  /** Element Plus 样式目录名，默认与 folder 相同；子组件默认继承此值 */
  elStyleKey?: string
  /** 文档侧栏元信息；不填则不出现在侧栏 */
  docs?: {
    /** 侧栏显示名，如 "Button 按钮" */
    label?: string
  }
}

export interface DirectiveEntry {
  /** 模板中使用的指令名（不含 v- 前缀），如 "Loading" */
  name: string
  /** 实际导入名（带 Ak 前缀），如 "AkLoadingDirective" */
  importName: string
  /** Element Plus 样式目录 */
  elStyleKey: string
}

export const CATEGORY_LABELS: Record<ComponentCategory, string> = {
  basic: 'Basic 基础组件',
  form: 'Form 表单组件',
  data: 'Data 数据展示',
  navigation: 'Navigation 导航',
  feedback: 'Feedback 反馈',
  layout: 'Layout 布局',
  other: 'Others 其他组件',
}

export const CATEGORY_ORDER: ComponentCategory[] = [
  'basic',
  'form',
  'data',
  'navigation',
  'feedback',
  'layout',
  'other',
]

/**
 * 组件清单 —— 按分类排序。
 * 新增组件只需在此数组末尾（或对应分类下）追加一项。
 */
export const components: ComponentEntry[] = [
  // ─── Basic ────────────────────────────────────────────────
  {
    folder: 'button',
    name: 'AkButton',
    category: 'basic',
    kind: 'component',
    subComponents: [{ name: 'AkButtonGroup' }],
    docs: { label: 'Button 按钮' },
  },
  {
    folder: 'icon',
    name: 'AkIcon',
    category: 'basic',
    kind: 'component',
    docs: { label: 'Icon 图标' },
  },
  {
    folder: 'link',
    name: 'AkLink',
    category: 'basic',
    kind: 'component',
    docs: { label: 'Link 链接' },
  },
  {
    folder: 'scrollbar',
    name: 'AkScrollbar',
    category: 'basic',
    kind: 'component',
    docs: { label: 'Scrollbar 滚动条' },
  },
  { folder: 'space', name: 'AkSpace', category: 'basic', kind: 'component' },
  { folder: 'text', name: 'AkText', category: 'basic', kind: 'component' },

  // ─── Form ─────────────────────────────────────────────────
  {
    folder: 'input',
    name: 'AkInput',
    category: 'form',
    kind: 'component',
    docs: { label: 'Input 输入框' },
  },
  { folder: 'input-number', name: 'AkInputNumber', category: 'form', kind: 'component' },
  {
    folder: 'select',
    name: 'AkSelect',
    category: 'form',
    kind: 'component',
    subComponents: [{ name: 'AkOption' }, { name: 'AkOptionGroup' }],
    docs: { label: 'Select 选择器' },
  },
  {
    folder: 'cascader',
    name: 'AkCascader',
    category: 'form',
    kind: 'component',
    subComponents: [{ name: 'AkCascaderPanel' }],
  },
  {
    folder: 'checkbox',
    name: 'AkCheckbox',
    category: 'form',
    kind: 'component',
    subComponents: [{ name: 'AkCheckboxButton' }, { name: 'AkCheckboxGroup' }],
    docs: { label: 'Checkbox 多选框' },
  },
  {
    folder: 'radio',
    name: 'AkRadio',
    category: 'form',
    kind: 'component',
    subComponents: [{ name: 'AkRadioButton' }, { name: 'AkRadioGroup' }],
    docs: { label: 'Radio 单选框' },
  },
  {
    folder: 'switch',
    name: 'AkSwitch',
    category: 'form',
    kind: 'component',
    docs: { label: 'Switch 开关' },
  },
  {
    folder: 'date-picker',
    name: 'AkDatePicker',
    category: 'form',
    kind: 'component',
    docs: { label: 'DatePicker 日期选择器' },
  },
  {
    folder: 'time-picker',
    name: 'AkTimePicker',
    category: 'form',
    kind: 'component',
    subComponents: [{ name: 'AkTimeSelect', elStyleKey: 'time-select' }],
  },
  { folder: 'color-picker', name: 'AkColorPicker', category: 'form', kind: 'component' },
  { folder: 'rate', name: 'AkRate', category: 'form', kind: 'component' },
  { folder: 'slider', name: 'AkSlider', category: 'form', kind: 'component' },
  { folder: 'upload', name: 'AkUpload', category: 'form', kind: 'component' },
  {
    folder: 'form',
    name: 'AkForm',
    category: 'form',
    kind: 'component',
    subComponents: [{ name: 'AkFormItem' }],
    docs: { label: 'Form 表单' },
  },
  { folder: 'autocomplete', name: 'AkAutocomplete', category: 'form', kind: 'component' },

  // ─── Data ─────────────────────────────────────────────────
  {
    folder: 'table',
    name: 'AkTable',
    category: 'data',
    kind: 'component',
    subComponents: [{ name: 'AkTableColumn' }],
    docs: { label: 'Table 表格' },
  },
  {
    folder: 'tag',
    name: 'AkTag',
    category: 'data',
    kind: 'component',
    docs: { label: 'Tag 标签' },
  },
  { folder: 'progress', name: 'AkProgress', category: 'data', kind: 'component' },
  {
    folder: 'tree',
    name: 'AkTree',
    category: 'data',
    kind: 'component',
    docs: { label: 'Tree 树形控件' },
  },
  {
    folder: 'pagination',
    name: 'AkPagination',
    category: 'data',
    kind: 'component',
    docs: { label: 'Pagination 分页' },
  },
  { folder: 'badge', name: 'AkBadge', category: 'data', kind: 'component' },
  { folder: 'avatar', name: 'AkAvatar', category: 'data', kind: 'component' },
  {
    folder: 'skeleton',
    name: 'AkSkeleton',
    category: 'data',
    kind: 'component',
    subComponents: [{ name: 'AkSkeletonItem' }],
  },
  { folder: 'empty', name: 'AkEmpty', category: 'data', kind: 'component' },
  {
    folder: 'descriptions',
    name: 'AkDescriptions',
    category: 'data',
    kind: 'component',
    subComponents: [{ name: 'AkDescriptionsItem' }],
  },
  { folder: 'result', name: 'AkResult', category: 'data', kind: 'component' },
  {
    folder: 'statistic',
    name: 'AkStatistic',
    category: 'data',
    kind: 'component',
    subComponents: [{ name: 'AkCountdown', elStyleKey: 'countdown' }],
  },

  // ─── Navigation ───────────────────────────────────────────
  {
    folder: 'menu',
    name: 'AkMenu',
    category: 'navigation',
    kind: 'component',
    subComponents: [
      { name: 'AkMenuItem' },
      { name: 'AkMenuItemGroup' },
      { name: 'AkSubMenu' },
    ],
    docs: { label: 'Menu 菜单' },
  },
  {
    folder: 'tabs',
    name: 'AkTabs',
    category: 'navigation',
    kind: 'component',
    subComponents: [{ name: 'AkTabPane' }],
    docs: { label: 'Tabs 标签页' },
  },
  {
    folder: 'breadcrumb',
    name: 'AkBreadcrumb',
    category: 'navigation',
    kind: 'component',
    subComponents: [{ name: 'AkBreadcrumbItem' }],
    docs: { label: 'Breadcrumb 面包屑' },
  },
  {
    folder: 'dropdown',
    name: 'AkDropdown',
    category: 'navigation',
    kind: 'component',
    subComponents: [{ name: 'AkDropdownMenu' }, { name: 'AkDropdownItem' }],
    docs: { label: 'Dropdown 下拉菜单' },
  },
  {
    folder: 'steps',
    name: 'AkSteps',
    category: 'navigation',
    kind: 'component',
    subComponents: [{ name: 'AkStep' }],
  },
  { folder: 'page-header', name: 'AkPageHeader', category: 'navigation', kind: 'component' },

  // ─── Feedback ─────────────────────────────────────────────
  {
    folder: 'alert',
    name: 'AkAlert',
    category: 'feedback',
    kind: 'component',
    docs: { label: 'Alert 提示' },
  },
  {
    folder: 'dialog',
    name: 'AkDialog',
    category: 'feedback',
    kind: 'component',
    docs: { label: 'Dialog 对话框' },
  },
  {
    folder: 'drawer',
    name: 'AkDrawer',
    category: 'feedback',
    kind: 'component',
    docs: { label: 'Drawer 抽屉' },
  },
  {
    folder: 'message',
    name: 'AkMessage',
    category: 'feedback',
    kind: 'function',
    docs: { label: 'Message 消息提示' },
  },
  { folder: 'message-box', name: 'AkMessageBox', category: 'feedback', kind: 'function' },
  {
    folder: 'notification',
    name: 'AkNotification',
    category: 'feedback',
    kind: 'function',
    docs: { label: 'Notification 通知' },
  },
  {
    folder: 'loading',
    name: 'AkLoading',
    category: 'feedback',
    kind: 'function',
  },
  { folder: 'popconfirm', name: 'AkPopconfirm', category: 'feedback', kind: 'component' },
  { folder: 'popover', name: 'AkPopover', category: 'feedback', kind: 'component' },
  { folder: 'tooltip', name: 'AkTooltip', category: 'feedback', kind: 'component' },

  // ─── Layout ───────────────────────────────────────────────
  {
    folder: 'container',
    name: 'AkContainer',
    category: 'layout',
    kind: 'component',
    subComponents: [
      { name: 'AkHeader' },
      { name: 'AkAside' },
      { name: 'AkMain' },
      { name: 'AkFooter' },
    ],
    docs: { label: 'Container 容器' },
  },
  { folder: 'row', name: 'AkRow', category: 'layout', kind: 'component' },
  { folder: 'col', name: 'AkCol', category: 'layout', kind: 'component' },
  {
    folder: 'divider',
    name: 'AkDivider',
    category: 'layout',
    kind: 'component',
    docs: { label: 'Divider 分割线' },
  },
  {
    folder: 'card',
    name: 'AkCard',
    category: 'layout',
    kind: 'component',
    docs: { label: 'Card 卡片' },
  },
  {
    folder: 'collapse',
    name: 'AkCollapse',
    category: 'layout',
    kind: 'component',
    subComponents: [{ name: 'AkCollapseItem' }],
  },

  // ─── Other ────────────────────────────────────────────────
  { folder: 'affix', name: 'AkAffix', category: 'other', kind: 'component' },
  { folder: 'backtop', name: 'AkBacktop', category: 'other', kind: 'component' },
  { folder: 'calendar', name: 'AkCalendar', category: 'other', kind: 'component' },
  {
    folder: 'carousel',
    name: 'AkCarousel',
    category: 'other',
    kind: 'component',
    subComponents: [{ name: 'AkCarouselItem' }],
  },
  {
    folder: 'image',
    name: 'AkImage',
    category: 'other',
    kind: 'component',
    subComponents: [{ name: 'AkImageViewer' }],
  },
  { folder: 'infinite-scroll', name: 'AkInfiniteScroll', category: 'other', kind: 'directive' },
  {
    folder: 'timeline',
    name: 'AkTimeline',
    category: 'other',
    kind: 'component',
    subComponents: [{ name: 'AkTimelineItem' }],
  },
  { folder: 'transfer', name: 'AkTransfer', category: 'other', kind: 'component' },
  { folder: 'tree-select', name: 'AkTreeSelect', category: 'other', kind: 'component' },
  {
    folder: 'virtualized-table',
    name: 'AkTableV2',
    category: 'other',
    kind: 'component',
    elStyleKey: 'table-v2',
  },
  { folder: 'watermark', name: 'AkWatermark', category: 'other', kind: 'component' },
  {
    folder: 'tour',
    name: 'AkTour',
    category: 'other',
    kind: 'component',
    subComponents: [{ name: 'AkTourStep' }],
  },
  {
    folder: 'anchor',
    name: 'AkAnchor',
    category: 'other',
    kind: 'component',
    subComponents: [{ name: 'AkAnchorLink' }],
  },
  { folder: 'segmented', name: 'AkSegmented', category: 'other', kind: 'component' },
  { folder: 'mention', name: 'AkMention', category: 'other', kind: 'component' },
  { folder: 'check-tag', name: 'AkCheckTag', category: 'form', kind: 'component' },

]

/**
 * 指令清单 —— 对应 AkDirectiveResolver 的映射表。
 * key 是模板中使用的指令名（不含 v-），value 是 ak 导出名 + el 样式目录。
 */
export const directives: DirectiveEntry[] = [
  { name: 'Loading', importName: 'AkLoadingDirective', elStyleKey: 'loading' },
  { name: 'InfiniteScroll', importName: 'AkInfiniteScroll', elStyleKey: 'infinite-scroll' },
]
