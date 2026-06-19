export type ComponentCategory =
  | 'Basic'
  | 'Form'
  | 'Data'
  | 'Navigation'
  | 'Feedback'
  | 'Layout'
  | 'Others'

export interface ComponentEntry {
  name: string
  kebabName: string
  path: string
  category: ComponentCategory
  docTitle: string
  exportNames: string[]
  isPlugin?: boolean
  subComponents?: Record<string, string>
}

export interface DirectiveEntry {
  name: string
  kebabName: string
  path: string
}

export const componentList: ComponentEntry[]
export const directiveList: DirectiveEntry[]
export const categoryLabels: Record<ComponentCategory, string>
