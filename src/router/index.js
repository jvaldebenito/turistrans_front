import Vue from 'vue'
import Router from 'vue-router'

//Views
import HomeView from '@/views/Home/Home'
import CheckView from '@/views/Check/Check'
import CommentsView from '@/views/Comments/Comments'
import MusicView from '@/views/Music/Music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/check',
      name: 'Check',
      component: CheckView
    },
    {
      path: '/comments',
      name: 'Comments',
      component: CommentsView
    },
    {
      path: '/music',
      name: 'Music',
      component: MusicView
    }
  ]
})