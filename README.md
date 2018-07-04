# react-web-dom
this is react-web flex dom

## `View`

使用`flex`布局，模拟`react-native`的`View`组件

### Props

Prop | Description | Type | Default
------ | ------ | ------ | ------
`style` | 样式 | `object` | {}
`className` | 类名 | `string` | undefined

## `ScrollView`

使用`flex`布局，模拟`react-native`的`ScrollView`组件

### Props

Prop | Description | Type | Default
------ | ------ | ------ | ------
`style` | 样式 | `object` | {}
`className` | 类名 | `string` | undefined
`block` | if true 使用 `block`布局 | `boolean` | false

### Methods

* ##### `scrollTopTo` \(_number_\): 滚动到指定高度
* ##### `getLayout` \(_undefined_\): 返回组件布局数据`{height,width,offsetHeight,scrollTop}`

## `ViewMax`

使用`flex`布局，并且获取当前窗体的最大宽度和高度来布局，一般用于最外层容器

### Props

Prop | Description | Type | Default
------ | ------ | ------ | ------
`style` | 样式 | `object` | {}
`className` | 类名 | `string` | undefined

## `Text`

模拟`react-native`的`Text`组件，使用`span`布局

### Props

Prop | Description | Type | Default
------ | ------ | ------ | ------
`style` | 样式 | `object` | {}
`className` | 类名 | `string` | undefined
