<template>
    <div>
        <div :class="$style.side">
            <u-sidebar collapsible size="small">
                <u-sidebar-group expanded title="Rule">
                    <u-sidebar-item to="/components/u-base">规范 <small>Rule</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group expanded title="Basic">
                    <u-sidebar-item to="/components/u-link">链接 <small>Link</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-button">摁钮 <small>Button</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-badge">徽章 <small>Badge</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-label">标签 <small>Label</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-icon">图标 <small>Icon</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-logo">标识 <small>Logo</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Layout">
                    <u-sidebar-item to="/components/u-linear-layout">线性布局 <small>LinearLayout</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-grid-layout">栅格布局 <small>GridLayout</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Navigation">
                    <u-sidebar-item to="/components/u-navbar">导航栏 <small>Navbar</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-sidebar">侧边栏 <small>Sidebar</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-tabs">标签页 <small>Tabs</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-steps">步骤条 <small>Steps</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-pagination">翻页器 <small>Pagination</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-collapse">折叠面板 <small>Collapse</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Form">
                    <u-sidebar-item to="/components/u-input">单行输入 <small>Input</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-number-input">数字输入 <small>NumberInput</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-textarea">多行输入 <small>Textarea</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-radios">单选组 <small>Radios</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-checkboxes">多选组 <small>Checkboxes</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-switch">开关 <small>Switch</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-select">选择框 <small>Select</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-slider">滑块 <small>Slider</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-combo-slider">复合滑块 <small>ComboSlider</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-form">表单 <small>Form</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Data">
                    <u-sidebar-item to="/components/u-list-view">列表选择 <small>ListView</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-tree-view">树型选择 <small>TreeView</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="DateTime">
                    <u-sidebar-item to="/components/u-calendar">日历 <small>Calendar</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-date-picker">日期选择 <small>DatePicker</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-time-picker">时间选择 <small>TimePicker</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-date-time-picker">日期时间 <small>DateTimePicker</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Popper">
                    <u-sidebar-item to="/components/u-popper">弹出层 <small>Popper</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-popover">弹出框 <small>Popover</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-picviewer">图片查看器 <small>PictrueView</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Progress & Chart">
                    <u-sidebar-item to="/components/u-linear-progress">线型进度条 <small>LinearProgress</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-circular-progress">圆型进度条 <small>CircularProgress</small></u-sidebar-item>
                </u-sidebar-group>
                <u-sidebar-group title="Mixin & Utils">
                    <u-sidebar-item to="/components/u-emitter">触发器 <small>Emitter</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-router-item">路由项 <small>RouterItem</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-draggable">拖拽 <small>Draggable</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-droppable">拖放 <small>Droppable</small></u-sidebar-item>
                    <u-sidebar-item to="/components/u-dragger">拖拽器 <small>Dragger</small></u-sidebar-item>
                </u-sidebar-group>
            </u-sidebar>
        </div>
        <div :class="$style.main">
            <router-view></router-view>
        </div>
    </div>
</template>

<style module>
.side {
    position: fixed;
    width: 185px;
    top: 64px;
    bottom: 0;
    background: #f0f6fa;
    overflow: auto;
}

.main {
    margin-left: 185px;
    padding: 40px;
}
</style>
