# 按需引入

按需引入可以有效减小打包体积，推荐在生产环境中使用。

## 自动引入（推荐）

使用 `unplugin-vue-components` 配合 `AkResolver` 实现组件的自动按需引入。

### 安装依赖

```bash
pnpm add -D unplugin-vue-components unplugin-auto-import
```

### Vite 配置

```ts
// vite.config.ts
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
        // Alkaid Plus 组件解析器
        AkResolver({
          // 是否导入样式，可选 'css' | 'sass' | false
          importStyle: 'css',
          // 是否使用 Element Plus 样式
          useElementPlusStyle: true,
        }),
        // Element Plus 解析器（用于直接使用 El 开头的组件）
        ElementPlusResolver(),
      ],
    }),
  ],
})
```

### Webpack 配置

```js
// webpack.config.js
const Components = require('unplugin-vue-components/webpack')
const AutoImport = require('unplugin-auto-import/webpack')
const { AkResolver } = require('alkaid-plus/resolver')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  plugins: [
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
}
```

## AkResolver 配置项

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| importStyle | 是否导入样式 | `boolean \| 'css' \| 'sass'` | `'css'` |
| useElementPlusStyle | 是否使用 Element Plus 样式 | `boolean` | `true` |
| prefix | 组件前缀 | `string` | `'Ak'` |
| exclude | 排除的组件列表 | `string[]` | `[]` |
| directives | 是否支持指令 | `boolean` | `true` |

## 手动引入

如果不使用自动引入，可以手动按需引入组件：

```ts
import { AkButton, AkInput, AkSelect } from 'alkaid-plus'
import 'element-plus/es/components/button/style/css'
import 'element-plus/es/components/input/style/css'
import 'element-plus/es/components/select/style/css'
```

## 使用 SASS 样式

如果你的项目使用 SASS，可以配置使用 SASS 样式：

```ts
AkResolver({
  importStyle: 'sass',
})
```

这样可以自定义 Element Plus 的 SASS 变量来实现主题定制。
