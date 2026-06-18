# 安装

## 环境准备

在开始之前，请确保你的开发环境满足以下要求：

- Node.js >= 18.0.0
- pnpm >= 8.0.0（推荐）或 npm >= 9.0.0

## 使用包管理器安装

我们推荐使用 pnpm 来安装 Alkaid Plus：

```bash
# pnpm（推荐）
pnpm add alkaid-plus element-plus

# npm
npm install alkaid-plus element-plus

# yarn
yarn add alkaid-plus element-plus
```

## 安装依赖

Alkaid Plus 依赖于 Element Plus，需要同时安装：

```bash
pnpm add element-plus
```

## 按需引入（推荐）

如果你只使用部分组件，推荐使用按需引入的方式，可以有效减小打包体积。

首先安装 `unplugin-vue-components` 和 `unplugin-auto-import`：

```bash
pnpm add -D unplugin-vue-components unplugin-auto-import
```

然后在 `vite.config.ts` 中配置：

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { AkResolver } from 'alkaid-plus/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        AkResolver(),
        ElementPlusResolver(),
      ],
    }),
  ],
})
```

## CDN 使用

你也可以通过 CDN 直接使用 Alkaid Plus：

```html
<head>
  <!-- 引入 Vue 3 -->
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <!-- 引入 Element Plus 样式 -->
  <link rel="stylesheet" href="https://unpkg.com/element-plus/dist/index.css" />
  <!-- 引入 Element Plus -->
  <script src="https://unpkg.com/element-plus"></script>
  <!-- 引入 Alkaid Plus -->
  <script src="https://unpkg.com/alkaid-plus"></script>
</head>
```

## TypeScript 支持

Alkaid Plus 使用 TypeScript 编写，提供了完整的类型定义。

在 `tsconfig.json` 中添加类型声明：

```json
{
  "compilerOptions": {
    "types": ["alkaid-plus/global"]
  }
}
```

这样就可以获得完整的组件类型提示。
