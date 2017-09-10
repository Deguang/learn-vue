const webpack = require('webpack')

module.exports = {
    entry: './src/index.js', // 入口文件
    output:{  // 配置输出选项
        path:__dirname, // 输出路径为，当前路径下
        filename:'app.js' // 输出后的文件名称
    },
    resolve: {  // 模块解析规则
        alias: { // 创建包别名，便于引入
            vue: 'vue/dist/vue.js' //vue文件地址配置
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ // node_modules里的js文件不必额外解析
            }
        ]
    }
}