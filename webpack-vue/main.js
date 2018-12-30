// 这是 main.js 是我们项目的JS入口文件

// 1. 导入 Jquery
// import *** from *** 是ES6中导入模块的方式
// 由于 ES6的代码，太高级了，浏览器解析不了，所以，这一行执行会报错
// import $ from 'jquery'

// import "./src/css/index.css"

// import "./src/css/1.less"

import Vue from "vue"
import app from "./src/app.vue"
let vm=new Vue({
    el:"#app",
    data:{
        msg:"what do you nong sha  zi "
    },
    methods: {
        
    },
    render:c =>c(app),
})