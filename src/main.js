/**
 * Created by 10392 on 2018/11/29.
 */
import Vue from  'vue'
import App from './app.vue'

//设置vue的提示功能关闭
Vue.config.productionTip = false
//声明当前组件的类型  为应用
App.myType = 'app'

//生成应用的实实例
const app = new Vue(App)
//挂载整个应用
app.$mount()
