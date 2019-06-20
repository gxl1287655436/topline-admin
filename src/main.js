import Vue from 'vue'
import App from './App.vue'
// 引入 element 组件
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 优先查找文件，如果没有这个文件，就会查找这个目录
import router from './router'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
