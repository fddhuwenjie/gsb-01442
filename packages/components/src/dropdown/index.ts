import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Dropdown from './src/dropdown.vue'
import DropdownMenu from './src/dropdown-menu.vue'
import DropdownItem from './src/dropdown-item.vue'
export const AkDropdown = withInstall(Dropdown)
export const AkDropdownMenu = withInstall(DropdownMenu)
export const AkDropdownItem = withInstall(DropdownItem)
export const AkDropdownWithAll = withInstallMultiple(Dropdown, [DropdownMenu, DropdownItem])
export default AkDropdown
