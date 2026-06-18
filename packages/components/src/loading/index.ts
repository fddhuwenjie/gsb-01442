import { withInstallDirective, withInstallFunction } from '@alkaid-plus/utils'
import { ElLoading, vLoading } from 'element-plus'

export const AkLoading = withInstallFunction(ElLoading.service, '$akLoading')
export const AkLoadingDirective = withInstallDirective(vLoading, 'loading')

export default AkLoading
