import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Checkbox from './src/checkbox.vue'
import CheckboxButton from './src/checkbox-button.vue'
import CheckboxGroup from './src/checkbox-group.vue'
export const AkCheckbox = withInstall(Checkbox)
export const AkCheckboxButton = withInstall(CheckboxButton)
export const AkCheckboxGroup = withInstall(CheckboxGroup)
export const AkCheckboxWithAll = withInstallMultiple(Checkbox, [CheckboxButton, CheckboxGroup])
export default AkCheckbox
