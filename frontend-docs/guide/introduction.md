# 介绍

## 什么是 Alkaid Plus？

Alkaid Plus 是一个基于 [Element Plus](https://element-plus.org) 的企业级 Vue 3 组件库。它对 Element Plus 的所有组件进行了二次封装，保持原有 API 完全兼容的同时，提供了更好的扩展性和企业级特性。

## 特性

### 🚀 完全兼容

- 所有 Props、Events、Slots、Methods 与 Element Plus 完全一致
- 无缝迁移，无需修改现有代码
- 组件命名统一使用 `Ak` 前缀

### 📦 按需引入

- 支持 Tree Shaking，只打包使用到的组件
- 配合 `unplugin-vue-components` 实现自动按需引入
- 提供专用的 `AkResolver` 解析器

### 🔧 TypeScript 支持

- 完整的类型定义文件
- IDE 智能提示支持
- Volar 插件兼容

### 🎨 主题定制

- 基于 CSS 变量的主题系统
- 继承 Element Plus 主题变量
- 支持深度定制

### 🏢 企业级特性

- 预留扩展接口，支持业务定制
- 统一的命名空间管理
- 完善的文档和示例

## 组件列表

Alkaid Plus 封装了 Element Plus 的全部组件，包括但不限于：

**Basic 基础组件**
- AkButton 按钮
- AkIcon 图标
- AkLink 链接

**Form 表单组件**
- AkInput 输入框
- AkSelect 选择器
- AkForm 表单
- AkCheckbox 多选框
- AkRadio 单选框

**Data 数据展示**
- AkTable 表格
- AkPagination 分页
- AkTree 树形控件
- AkTag 标签

**Navigation 导航**
- AkMenu 菜单
- AkTabs 标签页
- AkBreadcrumb 面包屑

**Feedback 反馈**
- AkDialog 对话框
- AkMessage 消息提示
- AkNotification 通知

## 浏览器支持

Alkaid Plus 支持所有现代浏览器：

| 浏览器 | 支持版本 |
| :--- | :--- |
| Chrome | 最新 2 个版本 |
| Firefox | 最新 2 个版本 |
| Safari | 最新 2 个版本 |
| Edge | 最新 2 个版本 |

::: tip 提示
不支持 IE11 及更早版本的浏览器。
:::

## 版本

- Vue >= 3.4
- Element Plus >= 2.5
- TypeScript >= 5.0
