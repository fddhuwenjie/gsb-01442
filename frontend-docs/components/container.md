# Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构。

## 常用布局

```vue
<template>
  <AkContainer>
    <AkHeader>Header</AkHeader>
    <AkMain>Main</AkMain>
  </AkContainer>

  <AkContainer>
    <AkHeader>Header</AkHeader>
    <AkMain>Main</AkMain>
    <AkFooter>Footer</AkFooter>
  </AkContainer>

  <AkContainer>
    <AkAside width="200px">Aside</AkAside>
    <AkMain>Main</AkMain>
  </AkContainer>

  <AkContainer>
    <AkHeader>Header</AkHeader>
    <AkContainer>
      <AkAside width="200px">Aside</AkAside>
      <AkMain>Main</AkMain>
    </AkContainer>
  </AkContainer>
</template>
```

## 实例

```vue
<template>
  <AkContainer style="height: 500px; border: 1px solid #eee">
    <AkAside width="200px" style="background-color: rgb(238, 241, 246)">
      <AkMenu default-active="1">
        <AkSubMenu index="1">
          <template #title>导航一</template>
          <AkMenuItem index="1-1">选项1</AkMenuItem>
          <AkMenuItem index="1-2">选项2</AkMenuItem>
        </AkSubMenu>
        <AkMenuItem index="2">导航二</AkMenuItem>
      </AkMenu>
    </AkAside>

    <AkContainer>
      <AkHeader style="background-color: #fff; border-bottom: 1px solid #eee">
        Header
      </AkHeader>
      <AkMain>Main</AkMain>
    </AkContainer>
  </AkContainer>
</template>
```

## API

### Container Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 子元素的排列方向 | `'horizontal' \| 'vertical'` | 子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal |

### Header Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| height | 顶栏高度 | `string` | `'60px'` |

### Aside Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| width | 侧边栏宽度 | `string` | `'300px'` |

### Footer Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| height | 底栏高度 | `string` | `'60px'` |

### Slots

所有容器组件都支持默认插槽：

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义内容 |
