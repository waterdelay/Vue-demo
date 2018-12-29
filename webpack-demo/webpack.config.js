//Common.js规范 

const path = require('path')

const webpack = require("webpack")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: {
        path: path.join(__dirname, "main.js")
    },
    output: {
        path: path.join(__dirname, "dist"),//必须写绝对路径
        filename: "bundle.js",
    },
    mode: "development",//设置成开发者模式
    devServer: {
        contentBase: path.join(__dirname, "src"),//托管跟路径
        compress: false, //关闭压缩
        port: 3000,//端口号
        open: true,//自动打开浏览器
        hot: true,// 2. 开启热更新  如果设置hot为true 需要手动添加HMR插件
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            // Options...这里可以写些配置  但是不怎么需要够用
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',// 如果不指定template, 默认生成一个空的HTML5页面, 指定template表示从哪个HTML文件编译一个新的HTML出来
            filename: 'index.html',// 默认值就是index.html, 便于开发人员自己查看
        })

    ],
    module: {
        rules: [//匹配规则

            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            //通过正则来匹配类型

            //loader是有加载顺序的,顺序是从右到左
            //要先css转换成webpack认识的,最后交给style来在css文件夹中生成style标签样式
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },


            { test:/\.(png|jpg|gif|jpeg|bmp)$/,use:['url-loader?limit=10240&name=[hash:8]-[name].[ext]']
                // use:[
                //     {
                //         loader:'url-loader',
                //         options:{
                //             limit:8192  //限制 单位为byte(b)  8192字节是8kb
                //         }
                //     }
                // ]
            },
        ]
    },
}