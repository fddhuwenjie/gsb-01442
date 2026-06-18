# 主题定制

Alkaid Plus 继承了 Element Plus 的主题系统，支持通过 CSS 变量和 SASS 变量进行定制。

## CSS 变量

Element Plus 使用 CSS 变量来管理主题色和其他样式变量。你可以通过覆盖这些变量来实现主题定制。

### 全局覆盖

在你的全局样式文件中覆盖 CSS 变量：

```css
:root {
  /* 主色 */
  --el-color-primary: #409eff;
  --el-color-primary-light-3: #79bbff;
  --el-color-primary-light-5: #a0cfff;
  --el-color-primary-light-7: #c6e2ff;
  --el-color-primary-light-8: #d9ecff;
  --el-color-primary-light-9: #ecf5ff;
  --el-color-primary-dark-2: #337ecc;

  /* 成功色 */
  --el-color-success: #67c23a;

  /* 警告色 */
  --el-color-warning: #e6a23c;

  /* 危险色 */
  --el-color-danger: #f56c6c;

  /* 信息色 */
  --el-color-info: #909399;
}
```

### 品牌色定制

如果你需要定制品牌色，可以修改主色变量：

```css
:root {
  --el-color-primary: #722ed1; /* 紫色主题 */
  --el-color-primary-light-3: #9254de;
  --el-color-primary-light-5: #b37feb;
  --el-color-primary-light-7: #d3adf7;
  --el-color-primary-light-8: #e6d6f7;
  --el-color-primary-light-9: #f5ebff;
  --el-color-primary-dark-2: #531dab;
}
```

## SASS 变量

如果你使用 SASS，可以通过覆盖 SASS 变量来定制主题。

### 配置 SASS

首先配置 Vite 加载 Element Plus 的 SASS 文件：

```ts
// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/element/index.scss" as *;`,
      },
    },
  },
})
```

### 覆盖变量

创建 `src/styles/element/index.scss`：

```scss
// 覆盖 Element Plus 变量
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #722ed1,
    ),
    'success': (
      'base': #52c41a,
    ),
    'warning': (
      'base': #faad14,
    ),
    'danger': (
      'base': #ff4d4f,
    ),
    'error': (
      'base': #ff4d4f,
    ),
    'info': (
      'base': #909399,
    ),
  )
);
```

## 暗色模式

Element Plus 支持暗色模式，只需在 HTML 元素上添加 `dark` 类名：

```ts
// 切换暗色模式
const toggleDark = () => {
  document.documentElement.classList.toggle('dark')
}
```

在你的样式文件中定义暗色模式变量：

```css
html.dark {
  --el-bg-color: #141414;
  --el-bg-color-page: #0a0a0a;
  --el-text-color-primary: rgba(255, 255, 255, 0.85);
  --el-text-color-regular: rgba(255, 255, 255, 0.65);
  --el-border-color: #434343;
}
```

## 使用 VueUse

推荐使用 VueUse 的 `useDark` 来管理暗色模式：

```ts
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
```

## 组件级定制

你也可以对单个组件进行样式定制：

```vue
<template>
  <AkButton class="custom-button" type="primary">
    自定义按钮
  </AkButton>
</template>

<style scoped>
.custom-button {
  --el-button-bg-color: #722ed1;
  --el-button-border-color: #722ed1;
  --el-button-hover-bg-color: #9254de;
  --el-button-hover-border-color: #9254de;
}
</style>
```
