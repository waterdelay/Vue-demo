//导入路由模块
import VueRouter from 'vue-router'
// 手动安装路由模块到Vue上
// Vue.use(VueRouter)


//引入login模块
import login from "./src/dw/login.vue"

//引入regsiter模块
import regsiter from './src/dw/regsiter.vue'
//创建路由对象
let router= new VueRouter({
     routes:[
        {path:"/login",component:login},
        {path:"regsiter",component:regsiter}
     ]   
})
//把路由对象暴露出去
export default router