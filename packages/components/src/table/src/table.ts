import type { ExtractPropTypes, PropType, CSSProperties } from 'vue'

export const tableProps = {
  data: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default: undefined,
  },
  maxHeight: {
    type: [String, Number] as PropType<string | number>,
    default: undefined,
  },
  stripe: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<'' | 'large' | 'default' | 'small'>,
    default: '',
  },
  fit: {
    type: Boolean,
    default: true,
  },
  showHeader: {
    type: Boolean,
    default: true,
  },
  highlightCurrentRow: {
    type: Boolean,
    default: false,
  },
  currentRowKey: {
    type: [String, Number] as PropType<string | number>,
    default: undefined,
  },
  rowClassName: {
    type: [String, Function] as PropType<
      string | ((data: { row: any; rowIndex: number }) => string)
    >,
    default: '',
  },
  rowStyle: {
    type: [Object, Function] as PropType<
      CSSProperties | ((data: { row: any; rowIndex: number }) => CSSProperties)
    >,
    default: undefined,
  },
  cellClassName: {
    type: [String, Function] as PropType<
      | string
      | ((data: { row: any; column: any; rowIndex: number; columnIndex: number }) => string)
    >,
    default: '',
  },
  cellStyle: {
    type: [Object, Function] as PropType<
      | CSSProperties
      | ((data: {
          row: any
          column: any
          rowIndex: number
          columnIndex: number
        }) => CSSProperties)
    >,
    default: undefined,
  },
  headerRowClassName: {
    type: [String, Function] as PropType<
      string | ((data: { row: any; rowIndex: number }) => string)
    >,
    default: '',
  },
  headerRowStyle: {
    type: [Object, Function] as PropType<
      CSSProperties | ((data: { row: any; rowIndex: number }) => CSSProperties)
    >,
    default: undefined,
  },
  headerCellClassName: {
    type: [String, Function] as PropType<
      | string
      | ((data: { row: any; column: any; rowIndex: number; columnIndex: number }) => string)
    >,
    default: '',
  },
  headerCellStyle: {
    type: [Object, Function] as PropType<
      | CSSProperties
      | ((data: {
          row: any
          column: any
          rowIndex: number
          columnIndex: number
        }) => CSSProperties)
    >,
    default: undefined,
  },
  rowKey: {
    type: [String, Function] as PropType<string | ((row: any) => string)>,
    default: undefined,
  },
  emptyText: {
    type: String,
    default: '',
  },
  defaultExpandAll: {
    type: Boolean,
    default: false,
  },
  expandRowKeys: {
    type: Array as PropType<string[]>,
    default: undefined,
  },
  defaultSort: {
    type: Object as PropType<{ prop: string; order: 'ascending' | 'descending' | null }>,
    default: () => ({}),
  },
  tooltipEffect: {
    type: String as PropType<'dark' | 'light'>,
    default: 'dark',
  },
  tooltipOptions: {
    type: Object,
    default: undefined,
  },
  showSummary: {
    type: Boolean,
    default: false,
  },
  sumText: {
    type: String,
    default: '',
  },
  summaryMethod: {
    type: Function as PropType<(data: { columns: any[]; data: any[] }) => (string | number)[]>,
    default: undefined,
  },
  spanMethod: {
    type: Function as PropType<
      (data: {
        row: any
        column: any
        rowIndex: number
        columnIndex: number
      }) => { rowspan: number; colspan: number } | [number, number] | void
    >,
    default: undefined,
  },
  selectOnIndeterminate: {
    type: Boolean,
    default: true,
  },
  indent: {
    type: Number,
    default: 16,
  },
  lazy: {
    type: Boolean,
    default: false,
  },
  load: {
    type: Function as PropType<
      (row: any, treeNode: any, resolve: (data: any[]) => void) => void
    >,
    default: undefined,
  },
  treeProps: {
    type: Object as PropType<{ hasChildren?: string; children?: string }>,
    default: () => ({ hasChildren: 'hasChildren', children: 'children' }),
  },
  tableLayout: {
    type: String as PropType<'fixed' | 'auto'>,
    default: 'fixed',
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false,
  },
  flexible: {
    type: Boolean,
    default: false,
  },
} as const

export const tableColumnProps = {
  type: {
    type: String as PropType<'default' | 'selection' | 'index' | 'expand'>,
    default: 'default',
  },
  index: {
    type: [Number, Function] as PropType<number | ((index: number) => number)>,
    default: undefined,
  },
  label: {
    type: String,
    default: '',
  },
  columnKey: {
    type: String,
    default: undefined,
  },
  prop: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  minWidth: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  fixed: {
    type: [Boolean, String] as PropType<boolean | 'left' | 'right'>,
    default: false,
  },
  renderHeader: {
    type: Function as PropType<(data: { column: any; $index: number }) => any>,
    default: undefined,
  },
  sortable: {
    type: [Boolean, String] as PropType<boolean | 'custom'>,
    default: false,
  },
  sortMethod: {
    type: Function as PropType<(a: any, b: any) => number>,
    default: undefined,
  },
  sortBy: {
    type: [String, Array, Function] as PropType<
      string | string[] | ((row: any, index: number) => string)
    >,
    default: undefined,
  },
  sortOrders: {
    type: Array as PropType<('ascending' | 'descending' | null)[]>,
    default: () => ['ascending', 'descending', null],
  },
  resizable: {
    type: Boolean,
    default: true,
  },
  formatter: {
    type: Function as PropType<
      (row: any, column: any, cellValue: any, index: number) => any
    >,
    default: undefined,
  },
  showOverflowTooltip: {
    type: [Boolean, Object] as PropType<boolean | object>,
    default: undefined,
  },
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left',
  },
  headerAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: undefined,
  },
  className: {
    type: String,
    default: '',
  },
  labelClassName: {
    type: String,
    default: '',
  },
  selectable: {
    type: Function as PropType<(row: any, index: number) => boolean>,
    default: undefined,
  },
  reserveSelection: {
    type: Boolean,
    default: false,
  },
  filters: {
    type: Array as PropType<{ text: string; value: string }[]>,
    default: undefined,
  },
  filterPlacement: {
    type: String,
    default: undefined,
  },
  filterMultiple: {
    type: Boolean,
    default: true,
  },
  filterMethod: {
    type: Function as PropType<(value: any, row: any, column: any) => boolean>,
    default: undefined,
  },
  filteredValue: {
    type: Array as PropType<string[]>,
    default: undefined,
  },
} as const

export const tableEmits = {
  select: (...args: any[]) => true,
  'select-all': (selection: any[]) => true,
  'selection-change': (selection: any[]) => true,
  'cell-mouse-enter': (...args: any[]) => true,
  'cell-mouse-leave': (...args: any[]) => true,
  'cell-click': (...args: any[]) => true,
  'cell-dblclick': (...args: any[]) => true,
  'cell-contextmenu': (...args: any[]) => true,
  'row-click': (...args: any[]) => true,
  'row-contextmenu': (...args: any[]) => true,
  'row-dblclick': (...args: any[]) => true,
  'header-click': (...args: any[]) => true,
  'header-contextmenu': (...args: any[]) => true,
  'sort-change': (args: any) => true,
  'filter-change': (filters: any) => true,
  'current-change': (...args: any[]) => true,
  'header-dragend': (...args: any[]) => true,
  'expand-change': (...args: any[]) => true,
}

export type TableProps = ExtractPropTypes<typeof tableProps>
export type TableColumnProps = ExtractPropTypes<typeof tableColumnProps>
export type TableEmits = typeof tableEmits
