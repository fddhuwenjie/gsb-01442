import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Steps from './src/steps.vue'
import Step from './src/step.vue'
export const AkSteps = withInstall(Steps)
export const AkStep = withInstall(Step)
export const AkStepsWithStep = withInstallMultiple(Steps, [Step])
export default AkSteps
