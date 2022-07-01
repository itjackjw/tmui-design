---
title: tmui 3.0 组件库
---

<dirtoc></dirtoc>

##### 组件库文档 tmui.design

# 折叠面板 Collapse
通过折叠面板收纳内容区域。

---

### :hot_pepper: 示例效果

<webview url="https://tmui.design/h5/#/pages/showdata/collapse"></webview>

::: details 示例代码

@[code vue](pages/showdata/collapse.nvue)

:::


### :hot_pepper: 兼容性

| APP-VUE | APP-NVUE | 小程序 | WEB/H5 | VUE3/TS |
| --- | --- | --- | --- | --- |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |

### :seedling: 参数
## Collapse

| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| activeKey | Array | [] | 当前展开并激活的面板,为下面的CollapseItem的name字段合集 |
| defaultActiveKey | Array | [] | 默认展开的面板,为下面的CollapseItem的name字段合集 |
| accordion | Boolean,String | false | 是否设置为单个面板展开，默认fase，允许 多个面板同时展开 |
| border | Number,String | 2 | 边框 |

## CollapseItem
本组件含有公共属性 [公共属性](/doc/spec/组件公共样式.md)
| 参数名 | 类型 | 默认值 | 描述 |
| :--: | :--: | :--: | :-- |
| color | String | white | 主题色 |
| title | String |  | 面板标题 |
| name | Number, String |  | 必填，标识，用来展开和关闭的标识,Collapse的activeKey，defaultActiveKey数组标识就是此值 |
| activeColor | String | primary |  |
| margin | Array | [0, 0] | 外间距[x,y]x=左右，y=上下 |
| padding | Array | [32, 0] | 内间距[x,y]x=左右，y=上下 |
| disabled | Boolean, String | false | 面板是否可以打开或收起 |

### :rose: 事件
## Collapse
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| change |  |  |  |

## CollapseItem
| 事件名 | 参数 | 返回数据 | 描述 |
| --- | --- | --- | --- |
| click |  |  |  |

### :corn: slot插槽
默认default

### :green_salad: ref方法
无

### :couplekiss: 文档贡献
此页文档由[﹎wj潕钶取玳](https://gitee.com/dxwj)贡献，如果对该框架感兴趣的可以参与我们一同进步！