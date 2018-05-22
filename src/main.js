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
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
}
firebase.initializeApp(config)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
