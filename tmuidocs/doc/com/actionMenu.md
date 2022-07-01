<!--
 * @Autor: 小超1263375375
 * @Date: 2022-06-17 14:39:05
 * @LastEditors: 小超1263375375
 * @LastEditTime: 2022-06-18 10:53:24
 * @FilePath: \tm-vuetify-for-vue3\tmuidocs\doc\com\ActionMenu.md
 * @Description: 
 * 
 * Copyright (c) 2022 by 小超1263375375, All Rights Reserved. 
-->
---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 底部操作栏
从底部弹出的快速操作菜单栏，对于单项可选项目操作，非常有用，且便利。

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/daohang/actionMenu"></webview>

::: details 示例模板

@[code vue](pages/daohang/actionMenu.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| list | Array | [] | [] |  |
| rangKey | String | 'text' |  |
| modelValue | Boolean | false |  |
| color | String | "white" |  |

### :rose: 事件
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| update:modelValue |  | false/true | v-model:显示和隐藏 |
| change |  | listitem | 当点击项目时触发，返回listitem数据 |
| cancel |  |  | 点击取消时触发 |

list[]格式为listitem 如下：
```ts
interface listitem {
	text ? : string,
	disabled ? : boolean,
	[prop: string]: any;
}
```

### :corn: slot插槽

无

### :green_salad: ref方法

无

| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |

### :rage: 贡献者：小超1263375375


