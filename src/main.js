import Vue from 'vue'
import Router from 'vue-router'
import BookList from './BookList.vue'
import './assets/tailwind.css'

Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/books'
    },
    {
      path: '/books',
      component: BookList,
      meta: {},
      children: []
    }
  ]
});

new Vue({
  router: router,
  render: h => h(BookList),
}).$mount('#app')
