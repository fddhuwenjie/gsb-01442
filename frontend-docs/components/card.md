# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

卡片包含标题、内容和操作区域。

```vue
<template>
  <AkCard style="width: 480px">
    <template #header>
      <div class="card-header">
        <span>卡片名称</span>
        <AkButton type="text">操作按钮</AkButton>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">
      {{ '列表内容 ' + o }}
    </div>
  </AkCard>
</template>
```

## 简单卡片

卡片可以只有内容区域。

```vue
<template>
  <AkCard style="width: 480px">
    <div v-for="o in 4" :key="o" class="text item">
      {{ '列表内容 ' + o }}
    </div>
  </AkCard>
</template>
```

## 带图片

可配置定义更丰富的内容展示。

```vue
<template>
  <AkCard :body-style="{ padding: '0px' }">
    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" />
    <div style="padding: 14px">
      <span>好吃的汉堡</span>
      <div class="bottom">
        <time class="time">{{ currentDate }}</time>
        <AkButton type="text" class="button">操作按钮</AkButton>
      </div>
    </div>
  </AkCard>
</template>
```

## 带有阴影效果

可对阴影的显示进行配置。

```vue
<template>
  <AkRow :gutter="12">
    <AkCol :span="8">
      <AkCard shadow="always">总是显示</AkCard>
    </AkCol>
    <AkCol :span="8">
      <AkCard shadow="hover">悬浮时显示</AkCard>
    </AkCol>
    <AkCol :span="8">
      <AkCard shadow="never">从不显示</AkCard>
    </AkCol>
  </AkRow>
</template>
```

## API

### Card Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| header | 卡片的标题 | `string` | — |
| body-style | body 的 CSS 样式 | `object` | — |
| body-class | body 的自定义类名 | `string` | — |
| shadow | 卡片阴影显示时机 | `'always' \| 'hover' \| 'never'` | `'always'` |

### Card Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 自定义内容 |
| header | 卡片标题内容 |
