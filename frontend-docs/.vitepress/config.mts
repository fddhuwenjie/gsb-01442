import { defineConfig } from 'vitepress'
import { componentSidebar } from './components.generated'

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
      '/components/': componentSidebar,
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
