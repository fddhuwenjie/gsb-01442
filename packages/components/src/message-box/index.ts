import { withInstallFunction } from '@alkaid-plus/utils'
import { ElMessageBox } from 'element-plus'

export const AkMessageBox = withInstallFunction(ElMessageBox, '$akMsgBox')

export default AkMessageBox
