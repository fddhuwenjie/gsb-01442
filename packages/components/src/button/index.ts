import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const AkButton = withInstall(Button)
export const AkButtonGroup = withInstall(ButtonGroup)

// 也导出带有子组件的版本
export const AkButtonWithGroup = withInstallMultiple(Button, [ButtonGroup])

export default AkButton

export * from './src/button'
export type { ButtonInstance, ButtonGroupInstance } from './src/instance'
