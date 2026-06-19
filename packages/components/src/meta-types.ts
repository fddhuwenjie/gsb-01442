export type ComponentCategory =
  | 'Basic'
  | 'Form'
  | 'Data'
  | 'Navigation'
  | 'Feedback'
  | 'Layout'
  | 'Others'

export type ComponentKind = 'component' | 'function' | 'directive'

export interface ComponentMeta {
  /**
   * 目录名（kebab-case），如 'button', 'date-picker'
   */
  dir: string

  /**
   * 该目录导出的所有组件/函数/指令的 PascalCase 名称（含 Ak 前缀）
   * 如 ['AkButton', 'AkButtonGroup']
   */
  exports: string[]

  /**
   * 对应的 Element Plus 样式模块名（kebab-case），如 'button', 'date-picker'
   * 用于 resolver 自动导入样式。默认与 dir 同名。
   */
  style?: string

  /**
   * 子导出的样式覆盖映射。当同目录下的不同导出对应不同样式模块时使用。
   * 例如 time-picker 目录下 AkTimeSelect 对应 'time-select' 样式：
   *   exportStyles: { AkTimeSelect: 'time-select' }
   */
  exportStyles?: Record<string, string>

  /**
   * 组件分类
   */
  category: ComponentCategory

  /**
   * 中文名称，用于文档侧边栏
   */
  label: string

  /**
   * 组件类型
   * - 'component': SFC 组件（withInstall）
   * - 'function': 函数式调用（withInstallFunction），如 ElMessage
   * - 'directive': 指令（withInstallDirective），如 vLoading
   */
  kind: ComponentKind

  /**
   * 是否在文档侧边栏中显示
   * @default true
   */
  inSidebar?: boolean
}
