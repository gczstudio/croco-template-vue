/** @format */
import 'babel-polyfill';
{{#if_eq library "element"}}
import 'element-ui/lib/theme-chalk/index.css';
{{/if_eq}}
{{#if_eq library "iview"}}
import 'iview/src/styles/index.less';
{{/if_eq}}

import Vue from 'vue';
import App from '@/components/pages/elements';

// 导入插件
import plugin from '@/plugins';
import router from '@/router';
{{#if_eq vuex true}}
import store from '@/store';
{{/if_eq}}

{{#if_eq library "element"}}
import { Table, TableColumn } from 'element-ui';
Vue.use(Table);
Vue.use(TableColumn);
{{/if_eq}}
{{#if_eq library "iview"}}
import iView from 'iview';
Vue.use(iView);
{{/if_eq}}


Vue.config.productionTip = false;

Vue.use(plugin);


new Vue({
  el: '#app',
  {{#if_eq vuex true}}store,{{/if_eq}}
  router,
  components: { App },
  template: '<App/>'
});
