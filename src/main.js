import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./plugins/tweet-embed"
import "./plugins/instagram-embed"
import "./plugins/youtube-embed"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
