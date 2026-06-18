import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'
export const AkCollapse = withInstall(Collapse)
export const AkCollapseItem = withInstall(CollapseItem)
export const AkCollapseWithItem = withInstallMultiple(Collapse, [CollapseItem])
export default AkCollapse
