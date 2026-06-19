import { withInstall } from '@alkaid-plus/utils'
import CheckTag from './src/check-tag.vue'

export const AkCheckTag = withInstall(CheckTag)
export default AkCheckTag

export * from './src/check-tag'
export type { CheckTagInstance } from './src/instance'
