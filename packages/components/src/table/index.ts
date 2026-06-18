import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Table from './src/table.vue'
import TableColumn from './src/table-column.vue'

export const AkTable = withInstall(Table)
export const AkTableColumn = withInstall(TableColumn)
export const AkTableWithColumn = withInstallMultiple(Table, [TableColumn])

export default AkTable

export * from './src/table'
export type { TableInstance, TableColumnInstance } from './src/instance'
