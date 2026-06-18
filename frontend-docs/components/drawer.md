# Drawer 抽屉

有些时候，Dialog 组件并不满足我们的需求，比如你的表单很长，亦或是你需要临时展示一些文档，Drawer 拥有和 Dialog 几乎相同的 API，在 UI 上带来不一样的体验。

## 基础用法

呼出一个临时的侧边栏，可以从多个方向呼出。

```vue
<template>
  <AkButton @click="drawer = true">打开抽屉</AkButton>

  <AkDrawer v-model="drawer" title="我是标题" direction="rtl">
    <span>Hi there!</span>
  </AkDrawer>
</template>

<script setup>
import { ref } from 'vue'
const drawer = ref(false)
</script>
```

## 不同方向

Drawer 可以通过 `direction` 属性设置打开方向。

```vue
<template>
  <AkButton @click="openDrawer('ltr')">从左往右开</AkButton>
  <AkButton @click="openDrawer('rtl')">从右往左开</AkButton>
  <AkButton @click="openDrawer('ttb')">从上往下开</AkButton>
  <AkButton @click="openDrawer('btt')">从下往上开</AkButton>

  <AkDrawer v-model="drawer" :direction="direction" title="标题">
    <span>内容</span>
  </AkDrawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const direction = ref('rtl')

const openDrawer = (dir) => {
  direction.value = dir
  drawer.value = true
}
</script>
```

## 自定义内容

和 Dialog 组件一样，Drawer 同样可以在其内部嵌套各种丰富的操作。

```vue
<template>
  <AkDrawer v-model="drawer" title="编辑用户">
    <AkForm :model="form">
      <AkFormItem label="姓名">
        <AkInput v-model="form.name" />
      </AkFormItem>
    </AkForm>
    <template #footer>
      <AkButton @click="drawer = false">取消</AkButton>
      <AkButton type="primary" @click="drawer = false">保存</AkButton>
    </template>
  </AkDrawer>
</template>
```

## API

### Drawer Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 是否显示 Drawer | `boolean` | `false` |
| append-to-body | Drawer 自身是否插入至 body 元素上 | `boolean` | `false` |
| lock-scroll | 是否在 Drawer 出现时将 body 滚动锁定 | `boolean` | `true` |
| before-close | 关闭前的回调，会暂停 Drawer 的关闭 | `Function` | — |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Drawer | `boolean` | `true` |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Drawer | `boolean` | `true` |
| open-delay | Drawer 打开的延时时间 | `number` | `0` |
| close-delay | Drawer 关闭的延时时间 | `number` | `0` |
| custom-class | Drawer 的自定义类名 | `string` | — |
| destroy-on-close | 控制是否在关闭 Drawer 之后将子元素全部销毁 | `boolean` | `false` |
| modal | 是否需要遮罩层 | `boolean` | `true` |
| direction | Drawer 打开的方向 | `'rtl' \| 'ltr' \| 'ttb' \| 'btt'` | `'rtl'` |
| show-close | 是否显示关闭按钮 | `boolean` | `true` |
| size | Drawer 窗体的大小 | `string \| number` | `'30%'` |
| title | Drawer 的标题 | `string` | — |
| with-header | 控制是否显示 header 栏 | `boolean` | `true` |

### Drawer Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| open | Drawer 打开的回调 | — |
| opened | Drawer 打开动画结束时的回调 | — |
| close | Drawer 关闭的回调 | — |
| closed | Drawer 关闭动画结束时的回调 | — |

### Drawer Slots

| 插槽名 | 说明 |
| --- | --- |
| default | Drawer 的内容 |
| header | Drawer 标题区的内容 |
| footer | Drawer 页脚区的内容 |
