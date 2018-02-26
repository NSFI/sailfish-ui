# 侧边栏 Sidebar

## 示例
### 基本形式

#### 路由模式

``` html
<u-sidebar>
    <u-sidebar-item to="/components/u-navbar">导航栏</u-sidebar-item>
    <u-sidebar-item to="/components/u-sidebar">侧边栏</u-sidebar-item>
    <u-sidebar-item to="/components/u-tabs">标签页</u-sidebar-item>
</u-sidebar>
```

#### value模式

``` html
<u-sidebar value="3" :router="false">
    <u-sidebar-item value="1">导航栏</u-sidebar-item>
    <u-sidebar-item value="2">侧边栏</u-sidebar-item>
    <u-sidebar-item value="3">标签页</u-sidebar-item>
</u-sidebar>
```

### 只读、禁用、禁用某一项

``` html
<u-grid-layout>
    <u-grid-layout-column :span="4">
        <u-sidebar disabled>
            <u-sidebar-item to="/components/u-navbar">导航栏</u-sidebar-item>
            <u-sidebar-item to="/components/u-sidebar">侧边栏</u-sidebar-item>
            <u-sidebar-item to="/components/u-tabs">标签页</u-sidebar-item>
        </u-sidebar>
    </u-grid-layout-column>
    <u-grid-layout-column :span="4">
        <u-sidebar>
            <u-sidebar-item disabled to="/components/u-navbar">导航栏</u-sidebar-item>
            <u-sidebar-item to="/components/u-sidebar">侧边栏</u-sidebar-item>
            <u-sidebar-item to="/components/u-tabs">标签页</u-sidebar-item>
        </u-sidebar>
    </u-grid-layout-column>
</u-grid-layout>
```

### 分隔符

``` html
<u-sidebar>
    <u-sidebar-item to="/components/u-navbar">导航栏</u-sidebar-item>
    <u-sidebar-item to="/components/u-sidebar">侧边栏</u-sidebar-item>
    <u-sidebar-item to="/components/u-tabs">标签页</u-sidebar-item>
    <u-sidebar-divider></u-sidebar-divider>
    <u-sidebar-item to="/components/u-steps">步骤条</u-sidebar-item>
    <u-sidebar-item to="/components/u-pagination">翻页器</u-sidebar-item>
</u-sidebar>
```

### 分组

``` html
<u-grid-layout>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>默认，无折叠功能</p>
            <u-sidebar>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item to="/components/u-navbar">导航栏</u-sidebar-item>
                    <u-sidebar-item to="/components/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item to="/components/u-tabs">标签页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item>单行输入</u-sidebar-item>
                    <u-sidebar-item>多行输入</u-sidebar-item>
                    <u-sidebar-item>选择框</u-sidebar-item>
                    <u-sidebar-item>表单</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>开启折叠功能</p>
            <u-sidebar collapsible>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation" expanded disabled>
                    <u-sidebar-item to="/components/u-navbar">导航栏</u-sidebar-item>
                    <u-sidebar-item to="/components/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item to="/components/u-tabs">标签页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form" :collapsible="false">
                    <u-sidebar-item>单行输入</u-sidebar-item>
                    <u-sidebar-item>多行输入</u-sidebar-item>
                    <u-sidebar-item>选择框</u-sidebar-item>
                    <u-sidebar-item>表单</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>手风琴模式</p>
            <u-sidebar collapsible accordion>
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item to="/components/u-navbar">导航栏</u-sidebar-item>
                    <u-sidebar-item to="/components/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item to="/components/u-tabs">标签页</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item>单行输入</u-sidebar-item>
                    <u-sidebar-item>多行输入</u-sidebar-item>
                    <u-sidebar-item>选择框</u-sidebar-item>
                    <u-sidebar-item>表单</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
    <u-grid-layout-row>
        <u-grid-layout-column :span="4">
            <p>触发方式：整行点击均可触发（默认）</p>
            <u-sidebar collapsible expand-trigger="click">
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item to="/components/u-navbar">导航栏</u-sidebar-item>
                    <u-sidebar-item to="/components/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item to="/components/u-tabs">标签页</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
        <u-grid-layout-column :span="4">
            <p>触发方式：仅点击小箭头时触发</p>
            <u-sidebar collapsible expand-trigger="click-expander">
                <u-sidebar-group title="Basic">
                    <u-sidebar-item>链接</u-sidebar-item>
                    <u-sidebar-item>按钮</u-sidebar-item>
                    <u-sidebar-item>标签</u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item to="/components/u-navbar">导航栏</u-sidebar-item>
                    <u-sidebar-item to="/components/u-sidebar">侧边栏</u-sidebar-item>
                    <u-sidebar-item to="/components/u-tabs">标签页</u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </u-grid-layout-column>
    </u-grid-layout-row>
</u-grid-layout>
```

## Sidebar API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| router | Boolean | `true` | 是否根据vue-router来控制选择哪一项 |
| href | String |  | 链接地址 |
| target | String |  | 打开方式 |
| to | String, Location |  | 需要vue-router，与`<router-link>`的`to`属性相同。可以是一个字符串或者是描述目标位置的对象。 |
| replace | Boolean | `false` | 需要vue-router，与`<router-link>`的`replace`属性相同。如果为`true`，当点击时，会调用`router.replace()`而不是`router.push()`，于是导航后不会留下`history `记录。 |
| exact | Boolean | `false` | 需要vue-router，与`<router-link>`的`exact`属性相同。是否与路由完全一致时才高亮显示。 |
| value.sync, v-model | Any | | 当前选择的值 |
| field | String | `'title'` | 显示文本字段 |
| collapsible | Boolean | `false` | 分组是否可以折叠 |
| accordion | Boolean | `false` | 是否每次只会展开一个分组 |
| expandTrigger | String | `'click'` | 展开/折叠的触发方式。可选值：`'click'`表示整行点击均可触发、`'click-expander'`表示仅点击小箭头时触发 |
| readonly | Boolean | `false` | 是否只读 |
| disabled | Boolean | `false` | 是否禁用 |

### Slots

#### (default)

插入`<u-sidebar-item>`、`<u-sidebar-divider>`或`<u-sidebar-group>`子组件。

### Events

#### @before-select

选择某一项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 选择项的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 选择项相关对象 |
| $event.itemVM | SidebarItem | 选择项子组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @input

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event | Any | 选择项的值 |

#### @select

选择某一项时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 改变后的值 |
| $event.oldValue | Any | 旧的值 |
| $event.item | Object | 单选模式中，选择项相关对象 |
| $event.itemVM | SidebarItem |  单选模式中，选择项子组件 |
| $event.items | Array\<Object\> | 多选模式中，所有选中项相关对象的数组 |
| $event.itemVMs | Array\<SidebarItem\> | 多选模式中，所有选中项子组件的数组 |

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | SidebarGroup | 分组组件 |

### Methods

#### toggleAll(expanded)

展开/折叠所有分组

| Param | Type | Description |
| ----- | ---- | ----------- |
| expanded | Boolean | 展开/折叠 |

## SidebarItem API
### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| value | Any | | 此项的值 |
| disabled | Boolean | `false` | 禁用此项 |
| item | Object | | 相关对象。当选择此项时，抛出的事件会传递该对象，便于开发 |

### Slots

#### (default)

插入文本或HTML。

### Events

#### @before-select

选择此项前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.value | Any | 此项的值 |
| $event.item | Object | 此项的相关对象 |
| $event.itemVM | SidebarItem | 此组件 |
| $event.preventDefault | Function | 阻止选择流程 |

#### @before-navigate

使用router相关属性切换路由前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String, Location | `to`属性的值 |
| $event.replace | Boolean | `replace`属性的值 |
| $event.exact | Boolean | `exact`属性的值 |
| $event.preventDefault | Function | 阻止切换流程 |

#### @navigate

使用router相关属性切换路由时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.to | String, Location | `to`属性的值 |
| $event.replace | Boolean | `replace`属性的值 |
| $event.exact | Boolean | `exact`属性的值 |

## SidebarGroup API

### Props/Attrs

| Prop/Attr | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| title | String |  | 显示的标题 |
| collapsible | Boolean |  | `false` | 是否可以折叠 |
| expanded.sync | Boolean | `false` | 展开/折叠状态 |
| disabled | Boolean | `false` | 是否禁用。禁用时无法展开/折叠 |

### Slots

#### (default)

插入`<u-sidebar-item>`或`<u-sidebar-divider>`子组件。

#### title

自定义标题文本。

#### extra

在右侧可以附加组件。

### Events

#### @before-toggle

展开/折叠此分组前触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | TreeViewNode | 分组组件 |
| $event.preventDefault | Function | 阻止展开/折叠流程 |

#### @toggle

展开/折叠某分组时触发

| Param | Type | Description |
| ----- | ---- | ----------- |
| $event.expanded | Boolean | 展开/折叠状态 |
| $event.groupVM | TreeViewNode | 分组组件 |

## SidebarDivider API

无
