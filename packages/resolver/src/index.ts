import type { ComponentResolver, ComponentInfo } from 'unplugin-vue-components'

export interface AlkaidPlusResolverOptions {
  /**
   * 是否导入样式
   * @default 'css'
   */
  importStyle?: boolean | 'css' | 'sass'

  /**
   * 是否使用 Element Plus 的样式
   * @default true
   */
  useElementPlusStyle?: boolean

  /**
   * 组件前缀
   * @default 'Ak'
   */
  prefix?: string

  /**
   * 排除的组件
   * @default []
   */
  exclude?: string[]

  /**
   * 指令支持
   * @default true
   */
  directives?: boolean

  /**
   * 自动导入 Element Plus
   * @default true
   */
  autoImportElementPlus?: boolean
}

// 所有 Alkaid Plus 组件映射到对应的 Element Plus 组件
// 此映射由 scripts/sync-components.ts 自动生成
const components: Record<string, string> = {
  AkButton: 'button',
  AkButtonGroup: 'button',
  AkIcon: 'icon',
  AkLink: 'link',
  AkScrollbar: 'scrollbar',
  AkSpace: 'space',
  AkText: 'text',
  AkInput: 'input',
  AkInputNumber: 'input-number',
  AkSelect: 'select',
  AkOption: 'select',
  AkOptionGroup: 'select',
  AkCascader: 'cascader',
  AkCheckbox: 'checkbox',
  AkCheckboxButton: 'checkbox',
  AkCheckboxGroup: 'checkbox',
  AkRadio: 'radio',
  AkRadioButton: 'radio',
  AkRadioGroup: 'radio',
  AkSwitch: 'switch',
  AkDatePicker: 'date-picker',
  AkTimePicker: 'time-picker',
  AkTimeSelect: 'time-select',
  AkColorPicker: 'color-picker',
  AkRate: 'rate',
  AkSlider: 'slider',
  AkUpload: 'upload',
  AkForm: 'form',
  AkFormItem: 'form',
  AkAutocomplete: 'autocomplete',
  AkTable: 'table',
  AkTableColumn: 'table',
  AkTag: 'tag',
  AkProgress: 'progress',
  AkTree: 'tree',
  AkPagination: 'pagination',
  AkBadge: 'badge',
  AkAvatar: 'avatar',
  AkSkeleton: 'skeleton',
  AkSkeletonItem: 'skeleton',
  AkEmpty: 'empty',
  AkDescriptions: 'descriptions',
  AkDescriptionsItem: 'descriptions',
  AkResult: 'result',
  AkStatistic: 'statistic',
  AkCountdown: 'statistic',
  AkMenu: 'menu',
  AkMenuItem: 'menu',
  AkMenuItemGroup: 'menu',
  AkSubMenu: 'menu',
  AkTabs: 'tabs',
  AkTabPane: 'tabs',
  AkBreadcrumb: 'breadcrumb',
  AkBreadcrumbItem: 'breadcrumb',
  AkDropdown: 'dropdown',
  AkDropdownMenu: 'dropdown',
  AkDropdownItem: 'dropdown',
  AkSteps: 'steps',
  AkStep: 'steps',
  AkPageHeader: 'page-header',
  AkAlert: 'alert',
  AkDialog: 'dialog',
  AkDrawer: 'drawer',
  AkMessage: 'message',
  AkMessageBox: 'message-box',
  AkNotification: 'notification',
  AkLoading: 'loading',
  AkPopconfirm: 'popconfirm',
  AkPopover: 'popover',
  AkTooltip: 'tooltip',
  AkContainer: 'container',
  AkHeader: 'container',
  AkAside: 'container',
  AkMain: 'container',
  AkFooter: 'container',
  AkRow: 'row',
  AkCol: 'col',
  AkDivider: 'divider',
  AkCard: 'card',
  AkCollapse: 'collapse',
  AkCollapseItem: 'collapse',
  AkAffix: 'affix',
  AkBacktop: 'backtop',
  AkCalendar: 'calendar',
  AkCarousel: 'carousel',
  AkCarouselItem: 'carousel',
  AkImage: 'image',
  AkImageViewer: 'image',
  AkInfiniteScroll: 'infinite-scroll',
  AkTimeline: 'timeline',
  AkTimelineItem: 'timeline',
  AkTransfer: 'transfer',
  AkTreeSelect: 'tree-select',
  AkTableV2: 'virtualized-table',
  AkWatermark: 'watermark',
  AkTour: 'tour',
  AkTourStep: 'tour',
  AkAnchor: 'anchor',
  AkAnchorLink: 'anchor',
  AkSegmented: 'segmented',
  AkMention: 'mention',
}

// 将 PascalCase 转换为 kebab-case
function toKebabCase(str: string): string {
  return str
    .replace(/^Ak/, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase()
}

/**
 * Alkaid Plus 组件解析器
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import Components from 'unplugin-vue-components/vite'
 * import { AkResolver } from '@alkaid-plus/resolver'
 *
 * export default defineConfig({
 *   plugins: [
 *     Components({
 *       resolvers: [AkResolver()],
 *     }),
 *   ],
 * })
 * ```
 */
export function AkResolver(options: AlkaidPlusResolverOptions = {}): ComponentResolver {
  const {
    importStyle = 'css',
    useElementPlusStyle = true,
    prefix = 'Ak',
    exclude = [],
    directives = true,
    autoImportElementPlus = true,
  } = options

  return {
    type: 'component',
    resolve: (name: string): ComponentInfo | undefined => {
      if (!name.startsWith(prefix)) {
        return undefined
      }

      if (exclude.includes(name)) {
        return undefined
      }

      const componentName = name
      if (!(componentName in components)) {
        return undefined
      }

      const elComponentName = components[componentName]
      const kebabName = toKebabCase(name)

      const result: ComponentInfo = {
        name: componentName,
        from: 'alkaid-plus',
      }

      if (importStyle && useElementPlusStyle) {
        if (importStyle === 'sass') {
          result.sideEffects = `element-plus/es/components/${elComponentName}/style/index`
        } else {
          result.sideEffects = `element-plus/es/components/${elComponentName}/style/css`
        }
      }

      return result
    },
  }
}

/**
 * Alkaid Plus 指令解析器
 */
export function AkDirectiveResolver(
  options: Pick<AlkaidPlusResolverOptions, 'importStyle' | 'useElementPlusStyle'> = {}
): ComponentResolver {
  const { importStyle = 'css', useElementPlusStyle = true } = options

  const directives: Record<string, string> = {
    Loading: 'loading',
    InfiniteScroll: 'infinite-scroll',
  }

  return {
    type: 'directive',
    resolve: (name: string): ComponentInfo | undefined => {
      if (!(name in directives)) {
        return undefined
      }

      const elDirectiveName = directives[name]

      const result: ComponentInfo = {
        name: `Ak${name}Directive`,
        from: 'alkaid-plus',
      }

      if (importStyle && useElementPlusStyle) {
        if (importStyle === 'sass') {
          result.sideEffects = `element-plus/es/components/${elDirectiveName}/style/index`
        } else {
          result.sideEffects = `element-plus/es/components/${elDirectiveName}/style/css`
        }
      }

      return result
    },
  }
}

export default AkResolver
