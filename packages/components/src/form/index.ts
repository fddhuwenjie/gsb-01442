import { withInstall, withInstallMultiple } from '@alkaid-plus/utils'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

export const AkForm = withInstall(Form)
export const AkFormItem = withInstall(FormItem)
export const AkFormWithItem = withInstallMultiple(Form, [FormItem])

export default AkForm

export * from './src/form'
export type { FormInstance, FormItemInstance } from './src/instance'
