import { defineConfig } from 'vitepress'
// 直接从组件库源码读取 manifest，避免依赖 alkaid-plus 的构建产物
// （VitePress 的 config 在 dev 阶段就会立刻执行，alkaid-plus/dist 可能尚未生成；
//  且 manifest.ts 是纯 TS 数据，没有 Vue / Element Plus 运行时副作用，
//  以源码方式引用最稳定，也不需要改动 pnpm-lock.yaml）。
import {
  getDocComponentsByCategory,
  type ComponentManifestItem,
} from '../../packages/components/src/manifest'

// 从组件库的 manifest 派生侧边栏，避免在文档站手工维护一份与组件清单
// 完全重复的目录。新增组件时，只要 manifest 中标记 showInDocs 不为 false，
// 这里立刻就能出现对应入口。
const componentsSidebar = getDocComponentsByCategory().map((group) => ({
  text: group.label,
  items: group.items.map((item: ComponentManifestItem) => ({
    text: item.docTitle ?? `${item.name}${item.docZh ? ' ' + item.docZh : ''}`,
    link: `/components/${item.kebab}`,
  })),
}))

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
      '/components/': componentsSidebar,
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
