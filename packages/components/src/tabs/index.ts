import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Tabs from './src/tabs.vue'
import TabPane from './src/tab-pane.vue'
export const AkTabs = withInstall(Tabs)
export const AkTabPane = withInstall(TabPane)
export const AkTabsWithPane = withInstallMultiple(Tabs, [TabPane])
export default AkTabs
