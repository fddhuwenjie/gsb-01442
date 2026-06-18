import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Breadcrumb from './src/breadcrumb.vue'
import BreadcrumbItem from './src/breadcrumb-item.vue'
export const AkBreadcrumb = withInstall(Breadcrumb)
export const AkBreadcrumbItem = withInstall(BreadcrumbItem)
export const AkBreadcrumbWithItem = withInstallMultiple(Breadcrumb, [BreadcrumbItem])
export default AkBreadcrumb
