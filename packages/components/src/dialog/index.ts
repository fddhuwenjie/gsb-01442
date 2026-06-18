import { withInstall } from '@alkaid-plus/utils'
import Dialog from './src/dialog.vue'

export const AkDialog = withInstall(Dialog)
export default AkDialog

export * from './src/dialog'
export type { DialogInstance } from './src/instance'
