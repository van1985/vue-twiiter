import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Blog from './components/Blog.vue'
import Account from './components/Account.vue'
import User from './components/User.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/blog', component: Blog},
  { path: '/account', component: Account},
  { path: '/', component: User},
];

const router = new VueRouter({
  routes:routes
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
