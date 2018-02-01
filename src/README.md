# 开发规范

## 关于组件库

`sailfish-ui`为网易七鱼的公共组件库，用于快速搭建符合七鱼风格的业务系统。

### 目录结构

```doc
src/
├─ index.js                         # 索引文件
├─ base/                            # 基础配置
│   ├─ global.css                   # CSS 的全局变量。仅用来声明全局变量
│   ├─ base.css                     # 基础 CSS 排版样式。
├─ category/                        # 二级目录，用于分类
│   ├─ u-search-box.vue
│   ├─ u-timeline.vue
│   └─ ...
├─ u-select.vue                     # Select 组件
├─ u-select-item.vue
├─ u-pagination.vue                 # Pagination 组件
└─ ...                              # 其它组件
```

### 索引文件

索引文件为一个简单的 ES6 模块，它仅仅用于引入和导出组件，不处理别的工作。

下面为一个索引文件的例子：

```javascript
export * from 'proto-ui.vusion';

import Select from './u-select.vue';
import SelectItem from './u-select-item.vue';
import Logo from './u-logo.vue';
import Sidebar from './u-sidebar.vue';
import SidebarItem from './u-sidebar-item.vue';
import Icon from './u-icon.vue';
import PicViewer from './u-picviewer.vue';


export {
    Select,
    SelectItem,
    Logo,
    Sidebar,
    SidebarItem,
    Icon,
    PicViewer
};
```

### base/global.css

用于定义`css`的全局变量，它与视觉设计中的配色、尺寸等设计方案是对应。它可以通过引入别的组件库的设计方案来继承。

为了能够灵活调整设计方案，比如主题色、圆角等等，我们不允许在具体的组件中直接引用它（这样会形成固定的依赖关系），而是用一个 `loader` 在每个 `css` 文件中注入它。因此，也请不要在`global.css`中添加除变量声明之外的内容，否则会产生大量的`css`。

### base/base.css

用于设置`css`的基础排版，如网页的默认颜色、字号、边距等等。它也可以通过引入别的组件库的基础排版来继承。

继承`proto-ui`中的`base.css`，它仅对`normalize.css`做了一些简单的扩展，统一使用`box-sizing: border-box`属性等。

比如下面为一个简单的`base.css`文件的例子：

```css
@import 'proto-ui.vusion/src/base/base.css';
body {
    color: #123344;
}

*:focus {
    outline: none
}
```

## 关于组件

使用vusion中的原型组件的设计思想

### 组件结构

在实际情况中，一个组件往往不仅仅包括模板（HTML）、样式（CSS）和逻辑（JS），还它所依赖的资源、文档、单元测试等。

为了更好的管理文件，我们采取**一个组件一个地方**的原则。

这样，一个 Vue 组件可以采用如下方式书写：

```doc
u-select.vue/index.html             # 组件模板
u-select.vue/index.js               # 组件逻辑
u-select.vue/module.css             # 组件样式
u-select.vue/assets/arrow-down.svg  # 相关资源
u-select.vue/test.spec.js           # 单元测试
u-select.vue/README.md              # 组件文档
u-select.vue/CHANGELOG.md           # 修改日志
```

#### index.js

```javascript
import Select from 'proto-ui.vusion/src/u-select.vue';

export default {
    name: 'u-select-xxxxx',
    mixins: [Select],
    props: {
        value: { type: Number, default: 0 }
    },
    data() {
        return {
            currentValue: this.value,
        };
    },
    methods: {
        onInput(value) {
        }
    },
    watch: {
        value(value) {
            this.currentValue = value;
        }
    }
};
```

**方法的放置顺序**

1. components
2. props
3. data
4. created
5. mounted
6. activited
7. update
8. beforeRouteUpdate
9. metods
10. filter
11. computed
12. watch

**方法的命名规范**

1. 动宾短语（good：jumpPage、openCarInfoDialog）（bad：go、nextPage、show、open、login）
2. ajax 方法以 get、post 开头，以 data 结尾（good：getListData、postFormData）（bad：takeData、confirmData、getList、postForm）
3. 事件方法以 on 开头（onTypeChange、onUsernameInput）
4. 尽量使用常用单词开头（set、get、open、close、jump）
5. 驼峰命名（good: getListData）（bad: get_list_data、getlistData）

#### module.css

为了避免全局选择器的冲突，也为了避免复杂繁琐的命名规范，Vusion 采用 [CSS Modules](https://github.com/css-modules/css-modules) 来解决这个问题。

### 组件的扩展与继承

七鱼组件库是从`vusion`的原型组件库继承而来。如果因为业务需要新开发的组件与于原型组件库中存在的组件相似，我们只需要对原型组件进行扩展。对于全新的业务组件，我们按照`vusion`的组件设计思想进行全新的开发。

扩展可以有不同的程度，比如只扩展样式、只改变图标、扩展样式和逻辑、甚至重写模板；另一方面，由于这些组件大都是在 `Vue` 中全局注册的，新组件可以与原组件同名，将原组件覆盖掉。为了方便描述，我们把同名的称为**扩展**，把异名的称为**继承**。

#### 仅扩展样式

```doc
<script>
import Select from 'proto-ui.vusion/src/u-select.vue';

export default Select;
</script>

<style module>
@import 'proto-ui.vusion/src/u-select.vue';

.root {
    height: 36px;
    border-color: #ccc;
}
</style>
```

组件的依赖关系仅由 JS 决定，因此`<script>`标签里的内容是必要的。

#### 在样式中修改图标

```
<script>
import Select from 'proto-ui.vusion/src/u-select.vue';

export default Select;
</script>

<style module>
@import 'proto-ui.vusion/src/u-select.vue';

.root:before {
    icon-font: url('../assets/my-arrow-down.svg');
}
</style>
```

#### 继承并修改样式

比如现在要创建一个新组件`<u-custom-select>`与`<u-select>`很相似。

```
<script>
import Select from 'proto-ui.vusion/src/u-select.vue';

export default {
    name: 'u-custom-select',
    mixins: [Select],
};
</script>

<style module>
@import 'proto-ui.vusion/src/u-select.vue';

.root {
    height: 36px;
    border-color: #ccc;
}
</style>
```

#### 扩展逻辑

这里使用的是 Vue 组件的extends或mixins扩展策略。

```javascript
<script>
import Select from 'proto-ui.vusion/src/u-select.vue';

export default {
    name: 'u-select',
    mixins: [Select],
    methods: {
        select() {
            // override
        },
    },
};
</script>
```

#### 继承并添加逻辑

与同名的同理，只需变更name字段即可。

```javascript
<script>
import Select from 'proto-ui.vusion/src/u-select.vue';

export default {
    name: 'u-custom-select',
    mixins: [Select],
    methods: {
        select() {
            // override
        },
    },
};
</script>
```
