import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vueHeadful from 'vue-headful'
import VS2 from 'vue-script2'
import BootstrapVue from 'bootstrap-vue'
import VuePageTransition from 'vue-page-transition'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueGallery from 'vue-gallery';

import routes from './routes';

Vue.use(VS2)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VuePageTransition)
Vue.component('vue-headful', vueHeadful);

Vue.component('carol', VueGallery);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
