# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

```vue
<template>
  <AkButton @click="dialogVisible = true">打开对话框</AkButton>

  <AkDialog v-model="dialogVisible" title="提示" width="500">
    <span>这是一段信息</span>
    <template #footer>
      <AkButton @click="dialogVisible = false">取消</AkButton>
      <AkButton type="primary" @click="dialogVisible = false">确定</AkButton>
    </template>
  </AkDialog>
</template>

<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)
</script>
```

## 自定义内容

Dialog 组件的内容可以是任意的，甚至可以是表格或表单。

```vue
<template>
  <AkButton @click="dialogVisible = true">打开表单对话框</AkButton>

  <AkDialog v-model="dialogVisible" title="表单">
    <AkForm :model="form">
      <AkFormItem label="姓名">
        <AkInput v-model="form.name" />
      </AkFormItem>
      <AkFormItem label="地区">
        <AkSelect v-model="form.region" placeholder="请选择">
          <AkOption label="北京" value="beijing" />
          <AkOption label="上海" value="shanghai" />
        </AkSelect>
      </AkFormItem>
    </AkForm>
    <template #footer>
      <AkButton @click="dialogVisible = false">取消</AkButton>
      <AkButton type="primary" @click="dialogVisible = false">确定</AkButton>
    </template>
  </AkDialog>
</template>
```

## 可拖拽

设置 `draggable` 属性为 `true` 来拖动 Dialog。

```vue
<template>
  <AkDialog v-model="dialogVisible" title="可拖拽对话框" draggable>
    <span>可以拖拽标题栏移动对话框</span>
  </AkDialog>
</template>
```

## API

### Dialog Props

| 属性名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value / v-model | 是否显示 Dialog | `boolean` | — |
| title | Dialog 的标题 | `string` | — |
| width | Dialog 的宽度 | `string \| number` | `'50%'` |
| fullscreen | 是否为全屏 Dialog | `boolean` | `false` |
| top | Dialog CSS 中的 margin-top 值 | `string` | `'15vh'` |
| modal | 是否需要遮罩层 | `boolean` | `true` |
| append-to-body | Dialog 自身是否插入至 body 元素上 | `boolean` | `false` |
| lock-scroll | 是否在 Dialog 出现时将 body 滚动锁定 | `boolean` | `true` |
| custom-class | Dialog 的自定义类名 | `string` | — |
| open-delay | Dialog 打开的延时时间 | `number` | `0` |
| close-delay | Dialog 关闭的延时时间 | `number` | `0` |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | `boolean` | `true` |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog | `boolean` | `true` |
| show-close | 是否显示关闭按钮 | `boolean` | `true` |
| before-close | 关闭前的回调，会暂停 Dialog 的关闭 | `Function` | — |
| draggable | 是否可拖拽 | `boolean` | `false` |
| center | 是否让 Dialog 的 header 和 footer 部分居中排列 | `boolean` | `false` |
| destroy-on-close | 当关闭 Dialog 时，销毁其中的元素 | `boolean` | `false` |

### Dialog Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| open | Dialog 打开的回调 | — |
| opened | Dialog 打开动画结束时的回调 | — |
| close | Dialog 关闭的回调 | — |
| closed | Dialog 关闭动画结束时的回调 | — |
| open-auto-focus | 输入焦点聚焦在 Dialog 内容时的回调 | — |
| close-auto-focus | 输入焦点从 Dialog 内容失焦时的回调 | — |

### Dialog Slots

| 插槽名 | 说明 |
| --- | --- |
| default | Dialog 的内容 |
| header | 对话框标题的内容 |
| footer | Dialog 按钮操作区的内容 |
