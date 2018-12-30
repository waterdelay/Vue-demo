
import Vue from "vue"
// 1. 导入 vue-router 包
import  VueRouter from 'vue-router'

// 2. 手动安装 VueRouter 
Vue.use(VueRouter)
// 导入 app 组件

import app from "./src/app.vue"
// 导入 login 组件

import login from "./src/dw/login.vue"
// 导入 regsiter 组件

import regsiter from "./src/dw/regsiter.vue"
// 设置路由

let router = new VueRouter({
	routes: [
        { path: '/login', component:login,
        // children:[
        //     {
        //         path: 'login', component: login,  
        //     }
        // ]
        },
        {path:'/regsiter',component:regsiter}
        
	]
})

let vm=new Vue({
    el:"#app",
    data:{
        msg:"what do you nong sha  zi "
    },
    methods: {
        
    },
    render:c =>c(app),// 注意： App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染 组件， 渲染出来的组件，只能放到 el: '#app' 所指定的 元素中；
    // login 和 regsiter 组件， 是通过 路由匹配监听到的，所以， 这两个组件，只能展示到 属于 路由的 <router-view></router-view> 中去；
    router
})