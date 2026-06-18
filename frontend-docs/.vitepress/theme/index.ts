import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'

const theme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Element Plus 组件在 Markdown 中直接使用时会自动导入
  },
}

export default theme
