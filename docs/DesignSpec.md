# Alkaid Plus 设计规范

## 1. 设计理念

Alkaid Plus 遵循 Element Plus 的设计语言，在保持一致性的同时提供企业级的扩展能力。

## 2. 色彩系统

### 主色

| 名称 | 色值 | 用途 |
| --- | --- | --- |
| Primary | #409EFF | 主要操作、链接、强调 |
| Success | #67C23A | 成功状态 |
| Warning | #E6A23C | 警告状态 |
| Danger | #F56C6C | 危险操作、错误状态 |
| Info | #909399 | 信息展示 |

### 中性色

| 名称 | 色值 | 用途 |
| --- | --- | --- |
| 主要文字 | #303133 | 标题、正文 |
| 常规文字 | #606266 | 段落文字 |
| 次要文字 | #909399 | 辅助信息 |
| 占位文字 | #A8ABB2 | 输入框占位符 |
| 边框色 | #DCDFE6 | 分割线、边框 |
| 背景色 | #F2F3F5 | 页面背景 |

## 3. 字体规范

### 字体族

```css
font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
```

### 字号

| 名称 | 大小 | 用途 |
| --- | --- | --- |
| Extra Large | 20px | 大标题 |
| Large | 18px | 标题 |
| Medium | 16px | 小标题 |
| Base | 14px | 正文 |
| Small | 13px | 辅助文字 |
| Extra Small | 12px | 最小文字 |

## 4. 间距规范

| 名称 | 大小 | 用途 |
| --- | --- | --- |
| Extra Large | 24px | 模块间距 |
| Large | 20px | 区块间距 |
| Medium | 16px | 元素间距 |
| Default | 12px | 标准间距 |
| Small | 8px | 紧凑间距 |
| Extra Small | 4px | 最小间距 |

## 5. 圆角规范

| 名称 | 大小 | 用途 |
| --- | --- | --- |
| Base | 4px | 按钮、输入框 |
| Small | 2px | 标签、徽章 |
| Round | 20px | 圆角按钮 |
| Circle | 100% | 圆形元素 |

## 6. 阴影规范

```css
/* 基础阴影 */
box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, 0.04),
  0px 8px 20px rgba(0, 0, 0, 0.08);

/* 轻量阴影 */
box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);

/* 深色阴影 */
box-shadow: 0px 16px 48px 16px rgba(0, 0, 0, 0.08),
  0px 12px 32px rgba(0, 0, 0, 0.12),
  0px 8px 16px -8px rgba(0, 0, 0, 0.16);
```

## 7. 过渡动画

```css
/* 全部属性 */
transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

/* 淡入淡出 */
transition: opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

/* 边框颜色 */
transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
```

## 8. 组件尺寸

| 尺寸 | 高度 | 用途 |
| --- | --- | --- |
| Large | 40px | 大型表单 |
| Default | 32px | 默认尺寸 |
| Small | 24px | 紧凑布局 |

## 9. 响应式断点

| 名称 | 尺寸 | 用途 |
| --- | --- | --- |
| XS | < 768px | 手机 |
| SM | >= 768px | 平板竖屏 |
| MD | >= 992px | 平板横屏 |
| LG | >= 1200px | 桌面 |
| XL | >= 1920px | 大屏幕 |
