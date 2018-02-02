# PictrueView

## 示例

```vue
<template>
<div>
    <u-grid-layout :class="$style.con">
        <u-grid-layout-row :repeat="3">
            <u-grid-layout-column :span="1"><img src="./assets/thumbnails/tibet-1.jpg" @click="showPic(0)"></u-grid-layout-column>
            <u-grid-layout-column :span="1"><img src="./assets/thumbnails/tibet-2.jpg" @click="showPic(1)"></u-grid-layout-column>
            <u-grid-layout-column :span="1"><img src="./assets/thumbnails/tibet-3.jpg" @click="showPic(2)"></u-grid-layout-column>
        </u-grid-layout-row>
        <u-grid-layout-row :repeat="3">
            <u-grid-layout-column :span="1"><img src="./assets/thumbnails/tibet-4.jpg" @click="showPic(3)"></u-grid-layout-column>
            <u-grid-layout-column :span="1"><img src="./assets/thumbnails/tibet-5.jpg" @click="showPic(4)"></u-grid-layout-column>
            <u-grid-layout-column :span="1"><img src="./assets/thumbnails/tibet-6.jpg" @click="showPic(5)"></u-grid-layout-column>
        </u-grid-layout-row>
        <u-grid-layout-row :repeat="3">
            <u-grid-layout-column :span="1"><img src="./assets/thumbnails/tibet-7.jpg" @click="showPic(6)"></u-grid-layout-column>
            <u-grid-layout-column :span="1"><img src="./assets/thumbnails/tibet-8.jpg" @click="showPic(7)"></u-grid-layout-column>
            <u-grid-layout-column :span="1"><img src="./assets/thumbnails/tibet-9.jpg" @click="showPic(8)"></u-grid-layout-column>
        </u-grid-layout-row>
    </u-grid-layout>
    <u-picviewer :pics=pics :show.sync=show :index.sync=index></u-picviewer>
</div>
</template>

<script>
export default {
    data() {
        return {
            show: false,
            index: 0,
            pics: [{
                    name: 'tibet-1',
                    src: '/images/tibet-1.jpg'
                }, {
                    name: 'tibet-2',
                    src: '/images/tibet-2.jpg'
                }, {
                    name: 'tibet-3',
                    src: '/images/tibet-3.jpg'
                }, {
                    name: 'tibet-4',
                    src: '/images/tibet-4.jpg'
                }, {
                    name: 'tibet-5',
                    src: '/images/tibet-5.jpg'
                }, {
                    name: 'tibet-6',
                    src: '/images/tibet-6.jpg'
                }, {
                    name: 'tibet-7',
                    src: '/images/tibet-7.jpg'
                }, {
                    name: 'tibet-8',
                    src: '/images/tibet-8.jpg'
                }, {
                    name: 'tibet-9',
                    src: '/images/tibet-9.jpg'
                }]
        };
    },
    methods: {
        showPic(index) {
            this.show = true;
            this.index = index;
        }
    },
};
</script>

<style module>
    .con{
        width: 450px;
    }
    img {
        width: 100%;
    }
</style>
```

## API

### Attrs/props

Prop       | Type    | Default | Description
---------- | ------- | ------- | -----------------------
pics       | Array   |         | 要预览的图片数组
show.sync  | Boolean | `false` | 是否显示图片查看器(组件内改变后同步到该数据)
index.sync | Number  | `0`     | 当前显示哪张图片(组件内改变后同步到该数据)
