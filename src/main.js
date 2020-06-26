import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCompositionApi from "@vue/composition-api";
import  "./icons/index";//改写引入自定义组件
// // 自定义全局组件
// Vue.component('svg-icon',{
//   template: "<div>{{msg}}</div>",
//   data(){
//     return {
//       msg: "这tm是啥"
//     }
//   }
// })

Vue.use(ElementUI);
Vue.use(VueCompositionApi);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
