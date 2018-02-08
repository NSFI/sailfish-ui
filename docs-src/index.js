import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import * as Library from 'library';
import '../src/base/base.css';

import GlobalLayout from './common/u-global-layout.vue';
import Article from './common/u-article.vue';
import './common/atom-one-light.css';

const Components = Object.assign({}, Library, {
    GlobalLayout,
    Article
});

import { installComponents } from 'vusion-utils';
installComponents(Components, Vue);

import routes from './routes';
new Vue({
    router: new VueRouter({
        base: '/sailfish-ui/',
        mode: 'hash',
        routes,
        scrollBehavior: (to, from, savedPosition) => savedPosition || { x: 0, y: 0 },
    }),
}).$mount('#app');
