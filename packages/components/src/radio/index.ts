import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Radio from './src/radio.vue'
import RadioButton from './src/radio-button.vue'
import RadioGroup from './src/radio-group.vue'
export const AkRadio = withInstall(Radio)
export const AkRadioButton = withInstall(RadioButton)
export const AkRadioGroup = withInstall(RadioGroup)
export const AkRadioWithAll = withInstallMultiple(Radio, [RadioButton, RadioGroup])
export default AkRadio
