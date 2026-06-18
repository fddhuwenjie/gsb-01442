import { withInstallFunction } from '@alkaid-plus/utils'
import { ElMessage } from 'element-plus'

// Message 是函数式调用，直接导出 Element Plus 的 Message
export const AkMessage = withInstallFunction(ElMessage, '$akMessage')

export default AkMessage
