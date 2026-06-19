/**
 * Alkaid Plus 组件清单（Single Source of Truth）
 *
 * 这里是整个组件库的"中央登记处"。所有需要按组件维度同步的下游模块
 * （全量安装器、自动导入 resolver、global.d.ts 类型声明、文档站侧边栏）
 * 都从此清单派生信息，而不再各自维护一份名单。
 *
 * 新增组件时，只需要：
 *   1) 在 packages/components/src/<kebab>/ 下创建组件实现
 *   2) 在本文件的 manifest 中追加一项
 *   3) 在 packages/components/src/index.ts 中加一条 export *（gen 脚本会代劳）
 *   4) 如需上文档站，则补一篇 frontend-docs/components/<kebab>.md
 *
 * 不再需要：手工同步 resolver 映射、alkaid-plus 安装数组、global.d.ts、
 * vitepress sidebar——这些都会自动生效。
 */

/** 组件分组，决定了文档侧边栏分组、注释里的归类 */
export type ComponentCategory =
  | 'basic'
  | 'form'
  | 'data'
  | 'navigation'
  | 'feedback'
  | 'layout'
  | 'others'

export interface ComponentSubItem {
  /** 子组件的 PascalCase 名（不含 Ak 前缀），例如 'ButtonGroup' */
  name: string
}

export interface ComponentManifestItem {
  /** 主组件 PascalCase 名（不含前缀），如 'Button' */
  name: string
  /** 目录名 / kebab 名，如 'button'、'date-picker' */
  kebab: string
  /** 分组 */
  category: ComponentCategory
  /** Element Plus 同名组件目录（用于 resolver 的 sideEffects 样式路径） */
  elStyle: string
  /** 子组件（同目录下另外被 withInstall 的组件） */
  subComponents?: ComponentSubItem[]
  /** 是否在文档站展示，默认 true */
  showInDocs?: boolean
  /** 文档侧边栏标题，默认 `${name} ${docZh ?? ''}` */
  docTitle?: string
  /** 中文小标题（用于侧边栏） */
  docZh?: string
}

/**
 * 各分组的中文标题（用于文档侧边栏分组标题）。
 */
export const CATEGORY_LABELS: Record<ComponentCategory, string> = {
  basic: 'Basic 基础组件',
  form: 'Form 表单组件',
  data: 'Data 数据展示',
  navigation: 'Navigation 导航',
  feedback: 'Feedback 反馈',
  layout: 'Layout 布局',
  others: 'Others 其他',
}

/**
 * 组件清单——按分组顺序排列。
 */
export const COMPONENT_MANIFEST: ComponentManifestItem[] = [
  // Basic
  { name: 'Button', kebab: 'button', category: 'basic', elStyle: 'button', docZh: '按钮', subComponents: [{ name: 'ButtonGroup' }] },
  { name: 'Icon', kebab: 'icon', category: 'basic', elStyle: 'icon', docZh: '图标' },
  { name: 'Link', kebab: 'link', category: 'basic', elStyle: 'link', docZh: '链接' },
  { name: 'Scrollbar', kebab: 'scrollbar', category: 'basic', elStyle: 'scrollbar', docZh: '滚动条' },
  { name: 'Space', kebab: 'space', category: 'basic', elStyle: 'space', showInDocs: false },
  { name: 'Text', kebab: 'text', category: 'basic', elStyle: 'text', showInDocs: false },

  // Form
  { name: 'Input', kebab: 'input', category: 'form', elStyle: 'input', docZh: '输入框' },
  { name: 'InputNumber', kebab: 'input-number', category: 'form', elStyle: 'input-number', showInDocs: false },
  {
    name: 'Select', kebab: 'select', category: 'form', elStyle: 'select', docZh: '选择器',
    subComponents: [{ name: 'Option' }, { name: 'OptionGroup' }],
  },
  {
    name: 'Cascader', kebab: 'cascader', category: 'form', elStyle: 'cascader', showInDocs: false,
    subComponents: [{ name: 'CascaderPanel' }],
  },
  {
    name: 'Checkbox', kebab: 'checkbox', category: 'form', elStyle: 'checkbox', docZh: '多选框',
    subComponents: [{ name: 'CheckboxButton' }, { name: 'CheckboxGroup' }],
  },
  {
    name: 'Radio', kebab: 'radio', category: 'form', elStyle: 'radio', docZh: '单选框',
    subComponents: [{ name: 'RadioButton' }, { name: 'RadioGroup' }],
  },
  { name: 'Switch', kebab: 'switch', category: 'form', elStyle: 'switch', docZh: '开关' },
  { name: 'DatePicker', kebab: 'date-picker', category: 'form', elStyle: 'date-picker', docZh: '日期选择器' },
  {
    name: 'TimePicker', kebab: 'time-picker', category: 'form', elStyle: 'time-picker', showInDocs: false,
    subComponents: [{ name: 'TimeSelect' }],
  },
  { name: 'ColorPicker', kebab: 'color-picker', category: 'form', elStyle: 'color-picker', showInDocs: false },
  { name: 'Rate', kebab: 'rate', category: 'form', elStyle: 'rate', showInDocs: false },
  { name: 'Slider', kebab: 'slider', category: 'form', elStyle: 'slider', showInDocs: false },
  { name: 'Upload', kebab: 'upload', category: 'form', elStyle: 'upload', showInDocs: false },
  {
    name: 'Form', kebab: 'form', category: 'form', elStyle: 'form', docZh: '表单',
    subComponents: [{ name: 'FormItem' }],
  },
  { name: 'Autocomplete', kebab: 'autocomplete', category: 'form', elStyle: 'autocomplete', showInDocs: false },

  // Data
  {
    name: 'Table', kebab: 'table', category: 'data', elStyle: 'table', docZh: '表格',
    subComponents: [{ name: 'TableColumn' }],
  },
  { name: 'Tag', kebab: 'tag', category: 'data', elStyle: 'tag', docZh: '标签' },
  { name: 'Progress', kebab: 'progress', category: 'data', elStyle: 'progress', showInDocs: false },
  { name: 'Tree', kebab: 'tree', category: 'data', elStyle: 'tree', docZh: '树形控件' },
  { name: 'Pagination', kebab: 'pagination', category: 'data', elStyle: 'pagination', docZh: '分页' },
  { name: 'Badge', kebab: 'badge', category: 'data', elStyle: 'badge', showInDocs: false },
  { name: 'Avatar', kebab: 'avatar', category: 'data', elStyle: 'avatar', showInDocs: false },
  {
    name: 'Skeleton', kebab: 'skeleton', category: 'data', elStyle: 'skeleton', showInDocs: false,
    subComponents: [{ name: 'SkeletonItem' }],
  },
  { name: 'Empty', kebab: 'empty', category: 'data', elStyle: 'empty', showInDocs: false },
  {
    name: 'Descriptions', kebab: 'descriptions', category: 'data', elStyle: 'descriptions', showInDocs: false,
    subComponents: [{ name: 'DescriptionsItem' }],
  },
  { name: 'Result', kebab: 'result', category: 'data', elStyle: 'result', showInDocs: false },
  {
    name: 'Statistic', kebab: 'statistic', category: 'data', elStyle: 'statistic', showInDocs: false,
    subComponents: [{ name: 'Countdown' }],
  },

  // Navigation
  {
    name: 'Menu', kebab: 'menu', category: 'navigation', elStyle: 'menu', docZh: '菜单',
    subComponents: [{ name: 'MenuItem' }, { name: 'MenuItemGroup' }, { name: 'SubMenu' }],
  },
  {
    name: 'Tabs', kebab: 'tabs', category: 'navigation', elStyle: 'tabs', docZh: '标签页',
    subComponents: [{ name: 'TabPane' }],
  },
  {
    name: 'Breadcrumb', kebab: 'breadcrumb', category: 'navigation', elStyle: 'breadcrumb', docZh: '面包屑',
    subComponents: [{ name: 'BreadcrumbItem' }],
  },
  {
    name: 'Dropdown', kebab: 'dropdown', category: 'navigation', elStyle: 'dropdown', docZh: '下拉菜单',
    subComponents: [{ name: 'DropdownMenu' }, { name: 'DropdownItem' }],
  },
  {
    name: 'Steps', kebab: 'steps', category: 'navigation', elStyle: 'steps', showInDocs: false,
    subComponents: [{ name: 'Step' }],
  },
  { name: 'PageHeader', kebab: 'page-header', category: 'navigation', elStyle: 'page-header', showInDocs: false },

  // Feedback
  { name: 'Alert', kebab: 'alert', category: 'feedback', elStyle: 'alert', docZh: '提示' },
  { name: 'Dialog', kebab: 'dialog', category: 'feedback', elStyle: 'dialog', docZh: '对话框' },
  { name: 'Drawer', kebab: 'drawer', category: 'feedback', elStyle: 'drawer', docZh: '抽屉' },
  { name: 'Popconfirm', kebab: 'popconfirm', category: 'feedback', elStyle: 'popconfirm', showInDocs: false },
  { name: 'Popover', kebab: 'popover', category: 'feedback', elStyle: 'popover', showInDocs: false },
  { name: 'Tooltip', kebab: 'tooltip', category: 'feedback', elStyle: 'tooltip', showInDocs: false },

  // Layout
  {
    name: 'Container', kebab: 'container', category: 'layout', elStyle: 'container', docZh: '容器',
    subComponents: [{ name: 'Header' }, { name: 'Aside' }, { name: 'Main' }, { name: 'Footer' }],
  },
  { name: 'Row', kebab: 'row', category: 'layout', elStyle: 'row', showInDocs: false },
  { name: 'Col', kebab: 'col', category: 'layout', elStyle: 'col', showInDocs: false },
  { name: 'Divider', kebab: 'divider', category: 'layout', elStyle: 'divider', docZh: '分割线' },
  { name: 'Card', kebab: 'card', category: 'layout', elStyle: 'card', docZh: '卡片' },
  {
    name: 'Collapse', kebab: 'collapse', category: 'layout', elStyle: 'collapse', showInDocs: false,
    subComponents: [{ name: 'CollapseItem' }],
  },

  // Others
  { name: 'Affix', kebab: 'affix', category: 'others', elStyle: 'affix', showInDocs: false },
  { name: 'Backtop', kebab: 'backtop', category: 'others', elStyle: 'backtop', showInDocs: false },
  { name: 'Calendar', kebab: 'calendar', category: 'others', elStyle: 'calendar', showInDocs: false },
  {
    name: 'Carousel', kebab: 'carousel', category: 'others', elStyle: 'carousel', showInDocs: false,
    subComponents: [{ name: 'CarouselItem' }],
  },
  {
    name: 'Image', kebab: 'image', category: 'others', elStyle: 'image', showInDocs: false,
    subComponents: [{ name: 'ImageViewer' }],
  },
  {
    name: 'Timeline', kebab: 'timeline', category: 'others', elStyle: 'timeline', showInDocs: false,
    subComponents: [{ name: 'TimelineItem' }],
  },
  { name: 'Transfer', kebab: 'transfer', category: 'others', elStyle: 'transfer', showInDocs: false },
  { name: 'TreeSelect', kebab: 'tree-select', category: 'others', elStyle: 'tree-select', showInDocs: false },
  { name: 'TableV2', kebab: 'virtualized-table', category: 'others', elStyle: 'table-v2', showInDocs: false },
  { name: 'Watermark', kebab: 'watermark', category: 'others', elStyle: 'watermark', showInDocs: false },
  {
    name: 'Tour', kebab: 'tour', category: 'others', elStyle: 'tour', showInDocs: false,
    subComponents: [{ name: 'TourStep' }],
  },
  {
    name: 'Anchor', kebab: 'anchor', category: 'others', elStyle: 'anchor', showInDocs: false,
    subComponents: [{ name: 'AnchorLink' }],
  },
  { name: 'Segmented', kebab: 'segmented', category: 'others', elStyle: 'segmented', showInDocs: false },
  { name: 'Mention', kebab: 'mention', category: 'others', elStyle: 'mention', showInDocs: false },
]

/** 指令清单。形式与组件不同，单独列出。 */
export interface DirectiveManifestItem {
  /** 指令的 PascalCase 名（不含前缀），如 'Loading' */
  name: string
  /** Element Plus 样式目录名 */
  elStyle: string
}

export const DIRECTIVE_MANIFEST: DirectiveManifestItem[] = [
  { name: 'Loading', elStyle: 'loading' },
  { name: 'InfiniteScroll', elStyle: 'infinite-scroll' },
]

/** 前缀常量——所有下游用同一来源 */
export const COMPONENT_PREFIX = 'Ak'

/**
 * 展开 manifest，得到所有可注册的组件名（含前缀，含子组件）。
 * 例如 Button + ButtonGroup 会被展开为 ['AkButton', 'AkButtonGroup']。
 */
export function getAllRegistrableNames(prefix: string = COMPONENT_PREFIX): string[] {
  const names: string[] = []
  for (const item of COMPONENT_MANIFEST) {
    names.push(`${prefix}${item.name}`)
    if (item.subComponents) {
      for (const sub of item.subComponents) names.push(`${prefix}${sub.name}`)
    }
  }
  return names
}

/**
 * 构造 resolver 用的 PascalName -> elStyle 映射。
 * 把每个 manifest item 的 elStyle 同时挂在主组件和它的子组件上。
 */
export function buildResolverComponentMap(
  prefix: string = COMPONENT_PREFIX
): Record<string, string> {
  const map: Record<string, string> = {}
  for (const item of COMPONENT_MANIFEST) {
    map[`${prefix}${item.name}`] = item.elStyle
    if (item.subComponents) {
      for (const sub of item.subComponents) map[`${prefix}${sub.name}`] = item.elStyle
    }
  }
  return map
}

/**
 * 按分组聚合可在文档站展示的组件。
 */
export function getDocComponentsByCategory(): Array<{
  category: ComponentCategory
  label: string
  items: ComponentManifestItem[]
}> {
  const order: ComponentCategory[] = [
    'basic', 'form', 'data', 'navigation', 'feedback', 'layout', 'others',
  ]
  return order
    .map((category) => ({
      category,
      label: CATEGORY_LABELS[category],
      items: COMPONENT_MANIFEST.filter(
        (m) => m.category === category && m.showInDocs !== false,
      ),
    }))
    .filter((g) => g.items.length > 0)
}
