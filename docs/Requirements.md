# Alkaid-Plus 组件库需求文档

## 项目概述

基于 Element Plus 所有组件进行二次封装的企业级 Vue 3 组件库。

## 核心需求

### 1. 组件封装

- [ ] 封装 Element Plus 全部组件（70+ 组件）
- [ ] 保持原组件的所有 Props、Events、Slots、Methods、Expose
- [ ] 统一命名前缀：`Ak` (如 AkButton, AkInput)
- [ ] 预留扩展接口，支持后期自定义功能

### 2. 按需引入

- [ ] 支持 Tree Shaking
- [ ] 每个组件独立打包
- [ ] 提供完整包和按需引入两种方式
- [ ] CSS 变量支持

### 3. unplugin-vue-components 自动引入

- [ ] 提供 `AkResolver` 解析器
- [ ] 自动导入组件和样式
- [ ] 支持组件前缀配置

### 4. TypeScript 支持

- [ ] 完整的类型定义 (.d.ts)
- [ ] 组件 Props 类型导出
- [ ] IDE 智能提示支持
- [ ] Volar 插件支持

### 5. 文档站点

- [ ] VitePress 驱动的文档站点
- [ ] 组件实时演示
- [ ] API 文档自动生成
- [ ] 快速开始指南
- [ ] 主题定制说明

### 6. 工程化

- [ ] Monorepo 架构 (pnpm workspace)
- [ ] ESLint + Prettier 代码规范
- [ ] Vitest 单元测试
- [ ] GitHub Actions CI/CD
- [ ] Changesets 版本管理

## 技术栈

- **框架**: Vue 3.4+
- **UI 基础**: Element Plus 2.x
- **构建工具**: Vite 5.x + Rollup
- **类型系统**: TypeScript 5.x
- **文档**: VitePress 1.x
- **包管理**: pnpm 9.x
- **容器**: Docker + docker-compose

## 目录结构

```
alkaid-plus/
├── packages/
│   ├── components/          # 组件源码
│   ├── hooks/               # 组合式函数
│   ├── utils/               # 工具函数
│   ├── theme/               # 主题样式
│   ├── resolver/            # unplugin resolver
│   └── alkaid-plus/         # 主包入口
├── frontend-docs/           # 文档站点
├── play/                    # 开发调试
├── docs/                    # 项目文档
├── docker-compose.yml
└── README.md
```

## 交付标准

1. `docker compose up --build -d` 可正确运行
2. 文档站点通过 `localhost:8081` 访问
3. 所有组件通过 TypeScript 类型检查
4. 提供完整的 npm 发布配置
