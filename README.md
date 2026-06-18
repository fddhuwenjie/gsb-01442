# Alkaid Plus

基于 Element Plus 二次封装的企业级 Vue 3 组件库。

## 1 How to Run

> ⚠️ **说明**：本项目未上传至 GitHub，也未进行线上部署。请按以下步骤在本地运行。

### 环境要求

- Node.js >= 18.12
- pnpm >= 8.0

### 方式一：Docker 运行（推荐）

```bash
# 进入项目根目录
cd /项目路径/1442

# 启动服务
docker compose up --build -d

# 访问文档站点
open http://localhost:8081
```

### 方式二：本地开发运行

```bash
# 1. 进入项目根目录
cd /项目路径/1442

# 2. 安装 pnpm（如未安装）
npm install -g pnpm

# 3. 安装项目依赖
pnpm install

# 4. 启动文档站点开发服务
pnpm dev:docs

# 5. 浏览器访问
open http://localhost:5173
```

## 2 Services

| 服务 | 端口 | 描述 |
| --- | --- | --- |
| frontend-docs | 8081 (Docker) / 5173 (本地) | 组件库文档站点 |

## 3 测试账号

本项目为前端组件库，无需登录，无测试账号。

## 4 题目内容

实现一个基于element-plus 所有组件进行二次封装的组件库属性方法、slot与原组件相同，我后期额外自己扩展；要求可以让引用方按需引入，支持业务方使用 unplugin-vue-components 的自动引入逻辑，提供typescript支持，提供doc文档站点说明；如果有缺少的方面你可以补充，按完善成熟企业级使用为背景。


实现一个基于 Element Plus 所有组件进行二次封装的组件库：

- 属性、方法、slot 与原组件相同，后期可扩展
- 支持按需引入
- 支持 unplugin-vue-components 自动引入
- 提供 TypeScript 支持
- 提供文档站点说明

## 5 项目介绍

### 概述

Alkaid Plus 对 Element Plus 的 70+ 组件进行了统一封装，所有组件使用 `Ak` 前缀（如 `AkButton`、`AkInput`），API 与原组件完全兼容。

### 核心特性

| 特性 | 说明 |
| --- | --- |
| 完全兼容 | Props、Events、Slots、Methods 与 Element Plus 一致 |
| 按需引入 | 支持 Tree Shaking，自动按需加载 |
| TypeScript | 完整类型定义，IDE 智能提示 |
| 自动导入 | 提供 AkResolver 配合 unplugin-vue-components |

### 项目结构

```
1442/
├── packages/
│   ├── alkaid-plus/       # 主包入口
│   ├── components/        # 70+ 组件源码
│   ├── hooks/             # Vue 组合式函数
│   ├── utils/             # 工具函数
│   ├── theme/             # 主题样式
│   └── resolver/          # 自动导入解析器
├── frontend-docs/         # VitePress 文档站点
├── docker-compose.yml     # Docker 配置
└── README.md
```

### 使用示例

```vue
<template>
  <AkButton type="primary">按钮</AkButton>
  <AkInput v-model="value" placeholder="请输入" />
  <AkSelect v-model="selected">
    <AkOption label="选项1" value="1" />
  </AkSelect>
</template>
```
