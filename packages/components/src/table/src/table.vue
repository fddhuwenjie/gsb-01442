<script setup lang="ts">
import { computed, useAttrs, useSlots, ref } from 'vue'
import { ElTable } from 'element-plus'
import { tableProps, tableEmits } from './table'
import type { TableInstance as ElTableInstance } from 'element-plus'

defineOptions({
  name: 'AkTable',
  inheritAttrs: false,
})

const props = defineProps(tableProps)
const emit = defineEmits(tableEmits)

const attrs = useAttrs()
const slots = useSlots()

const tableRef = ref<ElTableInstance>()

const mergedProps = computed(() => ({
  ...props,
  ...attrs,
}))

// 事件转发
const handleSelect = (...args: any[]) => emit('select', ...args)
const handleSelectAll = (selection: any[]) => emit('select-all', selection)
const handleSelectionChange = (selection: any[]) => emit('selection-change', selection)
const handleCellMouseEnter = (...args: any[]) => emit('cell-mouse-enter', ...args)
const handleCellMouseLeave = (...args: any[]) => emit('cell-mouse-leave', ...args)
const handleCellClick = (...args: any[]) => emit('cell-click', ...args)
const handleCellDblclick = (...args: any[]) => emit('cell-dblclick', ...args)
const handleCellContextmenu = (...args: any[]) => emit('cell-contextmenu', ...args)
const handleRowClick = (...args: any[]) => emit('row-click', ...args)
const handleRowContextmenu = (...args: any[]) => emit('row-contextmenu', ...args)
const handleRowDblclick = (...args: any[]) => emit('row-dblclick', ...args)
const handleHeaderClick = (...args: any[]) => emit('header-click', ...args)
const handleHeaderContextmenu = (...args: any[]) => emit('header-contextmenu', ...args)
const handleSortChange = (args: any) => emit('sort-change', args)
const handleFilterChange = (filters: any) => emit('filter-change', filters)
const handleCurrentChange = (...args: any[]) => emit('current-change', ...args)
const handleHeaderDragend = (...args: any[]) => emit('header-dragend', ...args)
const handleExpandChange = (...args: any[]) => emit('expand-change', ...args)

// 暴露方法
defineExpose({
  clearSelection: () => tableRef.value?.clearSelection(),
  getSelectionRows: () => tableRef.value?.getSelectionRows(),
  toggleRowSelection: (row: any, selected?: boolean) =>
    tableRef.value?.toggleRowSelection(row, selected),
  toggleAllSelection: () => tableRef.value?.toggleAllSelection(),
  toggleRowExpansion: (row: any, expanded?: boolean) =>
    tableRef.value?.toggleRowExpansion(row, expanded),
  setCurrentRow: (row?: any) => tableRef.value?.setCurrentRow(row),
  clearSort: () => tableRef.value?.clearSort(),
  clearFilter: (columnKeys?: string[]) => tableRef.value?.clearFilter(columnKeys),
  doLayout: () => tableRef.value?.doLayout(),
  sort: (prop: string, order: string) => tableRef.value?.sort(prop, order),
  scrollTo: (options: ScrollToOptions | number, yCoord?: number) =>
    tableRef.value?.scrollTo(options, yCoord),
  setScrollTop: (top?: number) => tableRef.value?.setScrollTop(top),
  setScrollLeft: (left?: number) => tableRef.value?.setScrollLeft(left),
})
</script>

<template>
  <ElTable
    ref="tableRef"
    v-bind="mergedProps"
    @select="handleSelect"
    @select-all="handleSelectAll"
    @selection-change="handleSelectionChange"
    @cell-mouse-enter="handleCellMouseEnter"
    @cell-mouse-leave="handleCellMouseLeave"
    @cell-click="handleCellClick"
    @cell-dblclick="handleCellDblclick"
    @cell-contextmenu="handleCellContextmenu"
    @row-click="handleRowClick"
    @row-contextmenu="handleRowContextmenu"
    @row-dblclick="handleRowDblclick"
    @header-click="handleHeaderClick"
    @header-contextmenu="handleHeaderContextmenu"
    @sort-change="handleSortChange"
    @filter-change="handleFilterChange"
    @current-change="handleCurrentChange"
    @header-dragend="handleHeaderDragend"
    @expand-change="handleExpandChange"
  >
    <template v-for="(_, slotName) in slots" :key="slotName" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </ElTable>
</template>
