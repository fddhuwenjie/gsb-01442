import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Alkaid Plus',
  description: '基于 Element Plus 的企业级 Vue 3 组件库',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#409eff' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/button' },
      { text: 'API', link: '/api/components' },
      {
        text: '相关链接',
        items: [
          { text: 'Element Plus', link: 'https://element-plus.org' },
          { text: 'Vue 3', link: 'https://vuejs.org' },
          { text: 'GitHub', link: 'https://github.com/alkaid-plus/alkaid-plus' },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '安装', link: '/guide/installation' },
            { text: '快速开始', link: '/guide/quickstart' },
          ],
        },
        {
          text: '进阶',
          items: [
            { text: '按需引入', link: '/guide/on-demand' },
            { text: '主题定制', link: '/guide/theming' },
            { text: 'TypeScript', link: '/guide/typescript' },
          ],
        },
      ],
      '/components/': [
        {
          text: 'Basic 基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' },
            { text: 'Icon 图标', link: '/components/icon' },
            { text: 'Link 链接', link: '/components/link' },
            { text: 'Scrollbar 滚动条', link: '/components/scrollbar' },
          ],
        },
        {
          text: 'Form 表单组件',
          items: [
            { text: 'Input 输入框', link: '/components/input' },
            { text: 'Select 选择器', link: '/components/select' },
            { text: 'Form 表单', link: '/components/form' },
            { text: 'Radio 单选框', link: '/components/radio' },
            { text: 'Checkbox 多选框', link: '/components/checkbox' },
            { text: 'Switch 开关', link: '/components/switch' },
            { text: 'DatePicker 日期选择器', link: '/components/date-picker' },
          ],
        },
        {
          text: 'Data 数据展示',
          items: [
            { text: 'Table 表格', link: '/components/table' },
            { text: 'Tag 标签', link: '/components/tag' },
            { text: 'Pagination 分页', link: '/components/pagination' },
            { text: 'Tree 树形控件', link: '/components/tree' },
          ],
        },
        {
          text: 'Navigation 导航',
          items: [
            { text: 'Menu 菜单', link: '/components/menu' },
            { text: 'Tabs 标签页', link: '/components/tabs' },
            { text: 'Breadcrumb 面包屑', link: '/components/breadcrumb' },
            { text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
          ],
        },
        {
          text: 'Feedback 反馈',
          items: [
            { text: 'Dialog 对话框', link: '/components/dialog' },
            { text: 'Drawer 抽屉', link: '/components/drawer' },
            { text: 'Message 消息提示', link: '/components/message' },
            { text: 'Notification 通知', link: '/components/notification' },
            { text: 'Alert 提示', link: '/components/alert' },
          ],
        },
        {
          text: 'Layout 布局',
          items: [
            { text: 'Container 容器', link: '/components/container' },
            { text: 'Card 卡片', link: '/components/card' },
            { text: 'Divider 分割线', link: '/components/divider' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alkaid-plus/alkaid-plus' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Alkaid Plus Team',
    },

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
      label: '页面导航',
    },
  },

  markdown: {
    lineNumbers: true,
  },
})
