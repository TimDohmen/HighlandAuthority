import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AuthService from "./AuthService"
import { RpgAwesome } from '../node_modules/rpg-awesome/css/rpg-awesome.min.css'

async function init() {
  let user = await AuthService.Authenticate()
  if (user) { store.commit("setUser", user) }
  else { router.push({ name: 'login' }) }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}
init()
