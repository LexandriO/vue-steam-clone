import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style/global.scss';

Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: h => h(App)
});

app.$mount('#app');
