import Vue from 'vue'
import Router from 'vue-router'
import BookList from './book_list.vue'

Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
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
