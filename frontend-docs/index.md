---
layout: home

hero:
  name: Alkaid Plus
  text: 企业级 Vue 3 组件库
  tagline: 基于 Element Plus 的二次封装，开箱即用
  image:
    src: /logo.svg
    alt: Alkaid Plus
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/quickstart
    - theme: alt
      text: 组件文档
      link: /components/button
    - theme: alt
      text: GitHub
      link: https://github.com/alkaid-plus/alkaid-plus

features:
  - icon: 🚀
    title: 开箱即用
    details: 基于 Element Plus 二次封装，保持原有 API 的同时支持业务扩展，无需重新学习。
  - icon: 📦
    title: 按需引入
    details: 支持 Tree Shaking，配合 unplugin-vue-components 实现自动按需引入。
  - icon: 🔧
    title: TypeScript
    details: 完整的 TypeScript 类型定义，提供良好的 IDE 智能提示体验。
  - icon: 🎨
    title: 主题定制
    details: 基于 CSS 变量的主题系统，轻松实现品牌定制。
  - icon: 📚
    title: 详尽文档
    details: 提供完整的组件文档和使用示例，快速上手开发。
  - icon: 🏢
    title: 企业级
    details: 经过生产环境验证，适用于企业级中后台应用开发。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(120deg, #409eff 30%, #67c23a);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #409eff50 50%, #67c23a50 50%);
  --vp-home-hero-image-filter: blur(40px);
}
</style>
