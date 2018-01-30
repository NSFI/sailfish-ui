# Icon

## 示例

### 基本形式

```html
<u-linear-layout>
    <u-icon name="close">close</u-icon>
    <u-icon name="arrowleft">arrowleft</u-icon>
    <u-icon name="arrowright">arrowright</u-icon>
    <u-icon name="download">download</u-icon>
    <u-icon name="fullscreen" size="large">fullscreen</u-icon>
    <u-icon name="notfullscreen" size="small">notfullscreen</u-icon>
    <u-icon name="one2one">one2one</u-icon>
    <u-icon name="rotate">rotate</u-icon>
    <u-icon name="zoomin">zoomin</u-icon>
    <u-icon name="zoomout">zoomout</u-icon>
</u-linear-layout>
```

### 显示title

```html
<u-icon name="close" title="close">close</u-icon>
```

### 只读和禁用

```html
<u-linear-layout>
    <u-icon name="arrowright" disabled="disabled">arrowright</u-icon>
    <u-icon name="download" cursor="pointer">download</u-icon>
    <u-icon name="rotate"  cursor="pointer" disabled="disabled">rotate</u-icon>
    <u-icon name="zoomin" >zoomin</u-icon>
</u-linear-layout>
```

## API

### Attrs/Props

Attr/Prop | Type   | Default | Require | Description
--------- | ------ | ------- | ------- | ------------------------------
name      | String | none    | 是       | 设置图标
title     | String | none    | 否       | 设置title属性
disabled  | String | ''      | 否       | 可选值:'disabled' 设置禁用
cursor    | String | default | 否       | 可选值:'pointer','default' 设置鼠标形状
size      | String | middle  | 否       | 可选值:'small','middle','large'

### Slots

Slot      | Description
--------- | -----------
| (default)
