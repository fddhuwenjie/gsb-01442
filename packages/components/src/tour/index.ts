import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Tour from './src/tour.vue'
import TourStep from './src/tour-step.vue'
export const AkTour = withInstall(Tour)
export const AkTourStep = withInstall(TourStep)
export const AkTourWithStep = withInstallMultiple(Tour, [TourStep])
export default AkTour
