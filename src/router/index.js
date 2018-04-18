import Vue from 'vue'
import Router from 'vue-router'

//Views
import HomeView from '@/views/Home/Home'
import CommentsView from '@/views/Comments/Comments'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/comments',
      name: 'Comments',
      component: CommentsView
    }
  ]
})