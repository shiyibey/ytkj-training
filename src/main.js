import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入axios
import axios  from 'axios'
//配置全局变量
Vue.prototype.$http = axios

//全局注册elementui
Vue.use(ElementUI);


//配置工作环境  默认false (开发环境) true生产环境
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
