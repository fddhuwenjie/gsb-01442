import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Descriptions from './src/descriptions.vue'
import DescriptionsItem from './src/descriptions-item.vue'
export const AkDescriptions = withInstall(Descriptions)
export const AkDescriptionsItem = withInstall(DescriptionsItem)
export const AkDescriptionsWithItem = withInstallMultiple(Descriptions, [DescriptionsItem])
export default AkDescriptions
