import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Anchor from './src/anchor.vue'
import AnchorLink from './src/anchor-link.vue'
export const AkAnchor = withInstall(Anchor)
export const AkAnchorLink = withInstall(AnchorLink)
export const AkAnchorWithLink = withInstallMultiple(Anchor, [AnchorLink])
export default AkAnchor
