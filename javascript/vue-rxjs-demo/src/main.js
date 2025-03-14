import Vue from 'vue';
import App from './App.vue';
import VueRx from 'vue-rx';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(VueRx)
Vue.use(Buefy)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
