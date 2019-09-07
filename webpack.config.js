var path = require('path')
var webpack = require("webpack");
var htmlWebpackPlugin = require('html-webpack-plugin')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
// var styleVariables = require('./src/main.js')
module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
    ],
    devServer: {//配置此静态文件服务器，可以用来预览打包后项目
        inline: true,//打包后加入一个websocket客户端
        hot: true,//热加载
        contentBase: path.resolve(__dirname, 'dist'),//开发服务运行时的文件根目录
        host: 'localhost',//主机地址
        port: 3000,//端口号
        compress: true//开发服务器是否启动gzip等压缩
    },
    module: {
        rules: [
            { test: /.vue$/, loader: "vue-loader" },
            { test:/\.scss$/,use:[ 'style-loader' , 'css-loader' , 'sass-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=5000&name=[hash:8]-[name].[ext]' },
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}
