/**
 * 由 manifest 派生的"可全量安装组件"集合。
 *
 * alkaid-plus 包不再需要在 src/index.ts 里维护一个长长的 import + 数组，
 * 它只要 `import { installableComponents } from '@alkaid-plus/components'`。
 */
import type { Plugin } from 'vue'

import { AkButton, AkButtonGroup } from './button'
import { AkIcon } from './icon'
import { AkLink } from './link'
import { AkScrollbar } from './scrollbar'
import { AkSpace } from './space'
import { AkText } from './text'

import { AkInput } from './input'
import { AkInputNumber } from './input-number'
import { AkSelect, AkOption, AkOptionGroup } from './select'
import { AkCascader } from './cascader'
import { AkCheckbox, AkCheckboxButton, AkCheckboxGroup } from './checkbox'
import { AkRadio, AkRadioButton, AkRadioGroup } from './radio'
import { AkSwitch } from './switch'
import { AkDatePicker } from './date-picker'
import { AkTimePicker, AkTimeSelect } from './time-picker'
import { AkColorPicker } from './color-picker'
import { AkRate } from './rate'
import { AkSlider } from './slider'
import { AkUpload } from './upload'
import { AkForm, AkFormItem } from './form'
import { AkAutocomplete } from './autocomplete'

import { AkTable, AkTableColumn } from './table'
import { AkTag } from './tag'
import { AkProgress } from './progress'
import { AkTree } from './tree'
import { AkPagination } from './pagination'
import { AkBadge } from './badge'
import { AkAvatar } from './avatar'
import { AkSkeleton, AkSkeletonItem } from './skeleton'
import { AkEmpty } from './empty'
import { AkDescriptions, AkDescriptionsItem } from './descriptions'
import { AkResult } from './result'
import { AkStatistic, AkCountdown } from './statistic'

import { AkMenu, AkMenuItem, AkMenuItemGroup, AkSubMenu } from './menu'
import { AkTabs, AkTabPane } from './tabs'
import { AkBreadcrumb, AkBreadcrumbItem } from './breadcrumb'
import { AkDropdown, AkDropdownMenu, AkDropdownItem } from './dropdown'
import { AkSteps, AkStep } from './steps'
import { AkPageHeader } from './page-header'

import { AkAlert } from './alert'
import { AkDialog } from './dialog'
import { AkDrawer } from './drawer'
import { AkPopconfirm } from './popconfirm'
import { AkPopover } from './popover'
import { AkTooltip } from './tooltip'

import { AkContainer, AkHeader, AkAside, AkMain, AkFooter } from './container'
import { AkRow } from './row'
import { AkCol } from './col'
import { AkDivider } from './divider'
import { AkCard } from './card'
import { AkCollapse, AkCollapseItem } from './collapse'

import { AkAffix } from './affix'
import { AkBacktop } from './backtop'
import { AkCalendar } from './calendar'
import { AkCarousel, AkCarouselItem } from './carousel'
import { AkImage, AkImageViewer } from './image'
import { AkTimeline, AkTimelineItem } from './timeline'
import { AkTransfer } from './transfer'
import { AkTreeSelect } from './tree-select'
import { AkTableV2 } from './virtualized-table'
import { AkWatermark } from './watermark'
import { AkTour, AkTourStep } from './tour'
import { AkAnchor, AkAnchorLink } from './anchor'
import { AkSegmented } from './segmented'
import { AkMention } from './mention'

/**
 * 全量安装组件集合。
 *
 * 顺序与 manifest 保持一致；新增组件时，只需要在 manifest 中追加一项，
 * 然后在这里追加一行 `import` 与一个数组成员（gen 脚本会代劳）。
 */
export const installableComponents: Plugin[] = [
  AkButton, AkButtonGroup,
  AkIcon, AkLink, AkScrollbar, AkSpace, AkText,

  AkInput, AkInputNumber,
  AkSelect, AkOption, AkOptionGroup,
  AkCascader,
  AkCheckbox, AkCheckboxButton, AkCheckboxGroup,
  AkRadio, AkRadioButton, AkRadioGroup,
  AkSwitch,
  AkDatePicker,
  AkTimePicker, AkTimeSelect,
  AkColorPicker, AkRate, AkSlider, AkUpload,
  AkForm, AkFormItem,
  AkAutocomplete,

  AkTable, AkTableColumn,
  AkTag, AkProgress, AkTree, AkPagination,
  AkBadge, AkAvatar,
  AkSkeleton, AkSkeletonItem,
  AkEmpty,
  AkDescriptions, AkDescriptionsItem,
  AkResult,
  AkStatistic, AkCountdown,

  AkMenu, AkMenuItem, AkMenuItemGroup, AkSubMenu,
  AkTabs, AkTabPane,
  AkBreadcrumb, AkBreadcrumbItem,
  AkDropdown, AkDropdownMenu, AkDropdownItem,
  AkSteps, AkStep,
  AkPageHeader,

  AkAlert, AkDialog, AkDrawer,
  AkPopconfirm, AkPopover, AkTooltip,

  AkContainer, AkHeader, AkAside, AkMain, AkFooter,
  AkRow, AkCol, AkDivider, AkCard,
  AkCollapse, AkCollapseItem,

  AkAffix, AkBacktop, AkCalendar,
  AkCarousel, AkCarouselItem,
  AkImage, AkImageViewer,
  AkTimeline, AkTimelineItem,
  AkTransfer, AkTreeSelect,
  AkTableV2, AkWatermark,
  AkTour, AkTourStep,
  AkAnchor, AkAnchorLink,
  AkSegmented, AkMention,
]
