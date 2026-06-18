import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Timeline from './src/timeline.vue'
import TimelineItem from './src/timeline-item.vue'
export const AkTimeline = withInstall(Timeline)
export const AkTimelineItem = withInstall(TimelineItem)
export const AkTimelineWithItem = withInstallMultiple(Timeline, [TimelineItem])
export default AkTimeline
