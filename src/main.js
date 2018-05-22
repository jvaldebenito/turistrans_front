// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AtUI from 'at-ui'
import 'at-ui-style'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(AtUI)

var config = {
  apiKey: "AIzaSyAWsauQP-8lVpo0TDXpcbQv2akXug3zixc",
  authDomain: "turistrans-6ce80.firebaseapp.com",
  databaseURL: "https://turistrans-6ce80.firebaseio.com",
  projectId: "turistrans-6ce80",
  storageBucket: "turistrans-6ce80.appspot.com",
  messagingSenderId: "1025528560710"
}
firebase.initializeApp(config)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
