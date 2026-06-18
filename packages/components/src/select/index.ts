import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Select from './src/select.vue'
import Option from './src/option.vue'
import OptionGroup from './src/option-group.vue'

export const AkSelect = withInstall(Select)
export const AkOption = withInstall(Option)
export const AkOptionGroup = withInstall(OptionGroup)
export const AkSelectWithOptions = withInstallMultiple(Select, [Option, OptionGroup])

export default AkSelect

export * from './src/select'
export type { SelectInstance, OptionInstance, OptionGroupInstance } from './src/instance'
