//导入vue模块

import Vue from "vue"
//导入路由模块
import VueRouter from 'vue-router'
// 手动安装路由模块到Vue上
Vue.use(VueRouter)
//引入app组件
import app from "./src/app.vue"

//导入自定义路由模块
import router from "./router.js"

//抽离路由
//引入login组件
//import login from "./src/dw/login.vue"

//引入regsiter组件
//import regsiter from './src/dw/regsiter.vue'

// let router= new VueRouter({
//      routes:[
//         {path:"/login",component:login},
//         {path:"regsiter",component:regsiter}
//      ]   
// })

let vm =new Vue({
        el:"#app",
        data:{
                msg:"最大的Vue假数据",
        },
        methods:{},
        render:c=>c(app),
        // 实现路由挂载
        router   //实际是router:router 的简写
})