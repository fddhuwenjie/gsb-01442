import { componentList as rawComponentList, directiveList as rawDirectiveList, categoryLabels as rawCategoryLabels } from './component-data.mjs'

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

export const componentList = rawComponentList as ComponentEntry[]
export const directiveList = rawDirectiveList as DirectiveEntry[]
export const categoryLabels = rawCategoryLabels as Record<ComponentCategory, string>

const componentMap = new Map<string, ComponentEntry>()
componentList.forEach((entry) => {
  entry.exportNames.forEach((name) => {
    componentMap.set(name, entry)
  })
})

export function getComponentEntry(exportName: string): ComponentEntry | undefined {
  return componentMap.get(exportName)
}

export function getComponentsByCategory(category: ComponentCategory): ComponentEntry[] {
  return componentList.filter((entry) => entry.category === category)
}

export async function getAllComponentPlugins(): Promise<any[]> {
  return Promise.all(
    componentList.map(async (entry) => {
      const mod = await import(entry.path)
      return entry.exportNames.map((name) => mod[name]).filter(Boolean)
    })
  ).then((arrays) => arrays.flat())
}
