import Vue from 'vue';
import Layout from './views/layout.vue';
import Index from './views/index.vue';
import Components from './views/components.vue';

const Empty = Vue.extend({ template: '<div>待开发...</div>' });

export default [
    { path: '/', component: Layout, children: [
        { path: '', component: Index, redirect: '/components' },
        { path: 'components', component: Components, children: [
            { path: '', redirect: 'u-base' },
            /* Basic */
            { path: 'u-base', component: () => import('../src/README.md') },
            { path: 'u-link', component: () => import('proto-ui.vusion/src/u-link.vue/README.md') },
            { path: 'u-button', component: () => import('proto-ui.vusion/src/u-button.vue/README.md') },
            { path: 'u-badge', component: () => import('proto-ui.vusion/src/u-badge.vue/README.md') },
            { path: 'u-label', component: () => import('proto-ui.vusion/src/u-label.vue/README.md') },
            { path: 'u-icon', component: () => import('../src/u-icon.vue/README.md') },
            { path: 'u-logo', component: () => import('../src/u-logo.vue/README.md') },
            /* Layout */
            { path: 'u-linear-layout', component: () => import('proto-ui.vusion/src/u-linear-layout.vue/README.md') },
            { path: 'u-grid-layout', component: () => import('proto-ui.vusion/src/u-grid-layout.vue/README.md') },
            /* Navigation */
            { path: 'u-navbar', component: () => import('proto-ui.vusion/src/u-navbar.vue/README.md') },
            { path: 'u-sidebar', component: () => import('proto-ui.vusion/src/u-sidebar.vue/README.md') },
            { path: 'u-tabs', component: () => import('proto-ui.vusion/src/u-tabs.vue/README.md') },
            { path: 'u-steps', component: () => import('proto-ui.vusion/src/u-steps.vue/README.md') },
            { path: 'u-pagination', component: () => import('proto-ui.vusion/src/u-pagination.vue/README.md') },
            { path: 'u-collapse', component: () => import('proto-ui.vusion/src/u-collapse.vue/README.md') },
            /* Form */
            { path: 'u-input', component: () => import('proto-ui.vusion/src/u-input.vue/README.md') },
            { path: 'u-number-input', component: () => import('../src/u-number-input.vue/README.md') },
            { path: 'u-textarea', component: () => import('proto-ui.vusion/src/u-textarea.vue/README.md') },
            { path: 'u-radios', component: () => import('proto-ui.vusion/src/u-radios.vue/README.md') },
            { path: 'u-checkboxes', component: () => import('proto-ui.vusion/src/u-checkboxes.vue/README.md') },
            { path: 'u-switch', component: () => import('proto-ui.vusion/src/u-switch.vue/README.md') },
            { path: 'u-select', component: () => import('proto-ui.vusion/src/u-select.vue/README.md') },
            { path: 'u-slider', component: () => import('proto-ui.vusion/src/u-slider.vue/README.md') },
            { path: 'u-combo-slider', component: () => import('../src/u-combo-slider.vue/README.md') },
            { path: 'u-form', component: () => import('proto-ui.vusion/src/u-form.vue/README.md') },
            /* Data */
            { path: 'u-list-view', component: () => import('proto-ui.vusion/src/u-list-view.vue/README.md') },
            { path: 'u-tree-view', component: () => import('proto-ui.vusion/src/u-tree-view.vue/README.md') },
            /* Popper */
            { path: 'u-popper', component: () => import('proto-ui.vusion/src/u-popper.vue/README.md') },
            { path: 'u-picviewer', component: () => import('../src/u-picviewer.vue/README.md') },
            /* Progress & Chart */
            { path: 'u-linear-progress', component: () => import('proto-ui.vusion/src/u-linear-progress.vue/README.md') },
            { path: 'u-circular-progress', component: () => import('proto-ui.vusion/src/u-circular-progress.vue/README.md') },
            /* Mixin & Utils */
            { path: 'u-emitter', component: () => import('proto-ui.vusion/src/u-emitter.vue/README.md') },
            { path: 'u-router-item', component: () => import('proto-ui.vusion/src/u-router-item.vue/README.md') },
            { path: 'u-collapse-transition', component: () => import('proto-ui.vusion/src/u-collapse-transition.vue/README.md') },
            { path: 'u-draggable', component: () => import('proto-ui.vusion/src/u-draggable.vue/README.md') },
            { path: 'u-droppable', component: () => import('proto-ui.vusion/src/u-droppable.vue/README.md') },
            { path: 'u-dragger', component: () => import('proto-ui.vusion/src/u-dragger.vue/README.md') },
        ] },
    ] },
    { path: '*', redirect: '/components' },
];
