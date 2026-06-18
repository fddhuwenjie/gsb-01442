import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Menu from './src/menu.vue'
import MenuItem from './src/menu-item.vue'
import MenuItemGroup from './src/menu-item-group.vue'
import SubMenu from './src/sub-menu.vue'
export const AkMenu = withInstall(Menu)
export const AkMenuItem = withInstall(MenuItem)
export const AkMenuItemGroup = withInstall(MenuItemGroup)
export const AkSubMenu = withInstall(SubMenu)
export const AkMenuWithAll = withInstallMultiple(Menu, [MenuItem, MenuItemGroup, SubMenu])
export default AkMenu
