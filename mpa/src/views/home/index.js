/** @format */
import 'babel-polyfill';
import Vue from 'vue';
import App from '@/components/pages/home';
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
});
