import { withInstall } from '@alkaid-plus/utils'
import Input from './src/input.vue'

export const AkInput = withInstall(Input)
export default AkInput

export * from './src/input'
export type { InputInstance } from './src/instance'
