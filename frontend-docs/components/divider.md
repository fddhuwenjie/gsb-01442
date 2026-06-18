# Divider 分割线

区隔内容的分割线。

## 基础用法

对不同段落的文本进行分割。

```vue
<template>
  <div>
    <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
    <AkDivider />
    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
  </div>
</template>
```

## 设置文案

可以在分割线上自定义文案内容。

```vue
<template>
  <div>
    <span>头上一片晴天，心中一个想念</span>
    <AkDivider content-position="left">少年包青天</AkDivider>
    <span>饿了别叫妈, 叫饿了么</span>
    <AkDivider><AkIcon><Star /></AkIcon></AkDivider>
    <span>为了无法计算的价值</span>
    <AkDivider content-position="right">阿里云</AkDivider>
  </div>
</template>
```

## 垂直分割线

```vue
<template>
  <div>
    <span>雨纷纷</span>
    <AkDivider direction="vertical" />
    <span>旧故里</span>
    <AkDivider direction="vertical" />
    <span>草木深</span>
  </div>
</template>
```

## 虚线

可以设置分割线为虚线。

```vue
<template>
  <div>
    <span>待到春来二月八</span>
    <AkDivider border-style="dashed" />
    <span>我花开后百花杀</span>
  </div>
</template>
```

## API

### Divider Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 设置分割线方向 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| border-style | 设置分隔符样式 | `'none' \| 'solid' \| 'hidden' \| 'dashed' \| ...` | `'solid'` |
| content-position | 设置分割线文案的位置 | `'left' \| 'right' \| 'center'` | `'center'` |

### Divider Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 分割线的内容 |
