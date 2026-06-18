import { withInstallFunction } from '@alkaid-plus/utils'
import { ElNotification } from 'element-plus'

export const AkNotification = withInstallFunction(ElNotification, '$akNotify')

export default AkNotification
