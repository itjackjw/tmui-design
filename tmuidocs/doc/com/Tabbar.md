---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 底部导航栏 Tabbar

内部只能放置,tm-tabbar-item。

---

### :hot_pepper: 示例

<webview url="https://tmui.design/h5/#/pages/daohang/tabbar"></webview>

::: details 示例模板

@[code vue](pages/daohang/tabbar.nvue)

:::

### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数

本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| transprent | [Boolean, String] | false | 是否透明 |
| color | [String] | white | 背景颜色 |
| text | [Boolean] | false | 是否浅色背景 |
| round | [Number, String] | 0 | 圆角0-25，单位rpx |
| shadow | [Number] | 0 | 投影, 0-25 |
| width | [Number] | 0 | 宽度，单位rpx， 如果为0取当前窗口宽度 |
| bottom | [Number] | 0 | 底部偏移，单位rpx|
| showSafe | [Boolean] | false | 是否显示安全区域 |

### :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click |  |  |  |

### :corn: slot插槽

默认default，注意：内部只能放置,tm-tabbar-item

### :green_salad: ref方法
| 方法名 | 参数 | 返回值 | 描述 |
| :--: | :--: | :--: | :-- |
| tmTabbarId |  |  |  |
| setNowurl |  |  |  |
| pushKey |  |  |  |
| delKey |  |  |  |

# 子组件 tm-tabbar-item

### :seedling: 参数

本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| followTheme | [Boolean, String] | true | 是否跟随主题，可选值：false, true |
| transprent | Boolean | true | 是否透明 |
| color | String | white | 背景主题色 |
| fontColor | String | grey-darken-1 | 文字主题色 |
| activeColor | String | primary | 激活后的主题色 |
| active | Boolean | false |当前是否是活动项  |
| btnTop | Boolean | false | 是否开启向上凸起的按钮 |
| text | String | '' | 展示文字 |
| icon | String | '' | 选中图标 |
| unicon | String | '' | 未选中时的图标，如果不填写默认使用相同的图标 |
| textSize | Number | 20 | 字体大小 |
| iconSize | Number | 38 | icon尺寸 |
| dot | [Boolean, String] | false | 是否显示圆点，可选值：false, true |
| dotColor | [String] | red | 圆点颜色 |
| dotIcon | [Boolean, String] | false | 圆点使用icon图标 |
| count | [Number, String] | 0 | count为数字时，显示数字角标，如果为string是显示文本角标 |
| maxCount | [Number, String] | 99 | 最大数值 |
| url | [String] | "" | 链接地址 |
| openType | [String] | navigate | 链接打开方式同官方 |
| beforeClick | [Function, Boolean] | ()=>false | 打开链接之前执行的勾子函数，返回fase阻止打开。也可以返回new Promise |
| load | [Boolean, String] | false | 是否开启异步加载动效，可选值：false, true |

### :rose: 事件

| 事件名 | 参数 | 返回数据 | 描述 |
| click | 无 | 无 |  项目被点击时触发 |
| beforeClick |  无| 无 |  点击切换之前执行，如果返回false或者`Promise<false>`时，将阻止链接的切换。如果没有提供url链接地地址将只作为切换使用|

### :green_salad: ref方法
无

### :couplekiss: 文档贡献

此页文档由ygy贡献([git](https://gitee.com/ygy-promise),[github](https://github.com/ygy-97))，如果对该框架感兴趣的可以参与我们一同进步！