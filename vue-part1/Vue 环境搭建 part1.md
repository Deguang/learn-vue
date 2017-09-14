Vue 官方提供了 vue-cli 来快速构建 vue 项目框架，避免从入门到放弃的混沌。脚手架 提供了 webpack、webpack-simple、browserify、browserify-simple、pwa、simple 等 6 种模版，详细配置、介绍参见 [vue-cli](https://github.com/vuejs/vue-cli)、[vuejs-template](http://vuejs-templates.github.io/webpack/)。


All in one 的脚手架工具提供了全面丰富的配置和功能，可以让开发者略过基础环境搭建、直面业务代码，这是官方友好地降低入门门槛。但脚手架的 ‘一键构建’ 相当于把基础环境的构建、webpack 或者 browserify 等配置对我们做了隔离，带来了对构建逻辑的陌生，在一定程度上提高了解决问题、优化性能的可控性。这里我们抛开脚手架，从零开始搭建一套 vue 开发环境，实现 dev 热重启，prod 打包构建等开发部署需求。

**1.** 基础环境 node + npm + webpack

* 通过 `node -v` 检查 node 版本，若返回 `v*.*.*`，则表明环境中已安装 node，否则 安装 <a href="http://nodejs.cn/download/">node</a>。

* 通过 `npm -v` 检查 npm，一般的 安装了 node 即附带了 npm。

* 安装 webpack，`npm install -g webapck`，通过 `webpack -version` 检查 webpack 安装状态


**2.** 初始化项目

* 创建项目目录

    mkdir vue-part1 && cd vue-part1

* 初始化 npm，按照提示 一路完成初始化，得到一个 `package.json` 文件

    npm init

* 创建基础项目文件结构

    touch index.html webpack.config.js

    mkdir src && cd src

    touch main.js App.vue



完成第 2 步操作后的项目结构如下：


    ├── index.html
    ├── package.json
    ├── webpack.config.js
    └── src
        ├── App.vue
        └── index.js


**3.** 初始化文件内容

3.1. index.html

```html
    <body>
        <!-- vue 实例根实例挂载点-->
        <div id="app">
            <!-- 路由匹配到的组件将渲染在这里 -->
            <app></app>
        </div>
        <!-- 打包后的js文件 -->
        <script src="app.js"></script>
    </body>
```

3.2. App.vue

```html
    <template>
        <div>
            <p>part1 of learn vue</p>
            <p>{{ msg }}</p>
        </div>
    </template>
    <script>
    export default {
        data() {
            return {
                msg: 'Hello world!' // 入门必备文案
            }
        }
    }
    </script>
    <style>
        body {
            background-color: #ccc;
        }
        #app {
            border: 1px solid #000;
        }
    </style>
```

3.3. index.js

```javascript
    import Vue from 'vue'
    import App from './App.vue'

    new Vue({
        el: '#app',
        components: {
            app: App
        }
    })
```

3.4. webpack.config.js

```javascript
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
```

**4.** 安装依赖 && 第一次打包编译

    npm i vue vue-loader vue-template-compile webpack babel-loader css-loader --save


安装依赖而后执行 webpack，这时候在根目录新创建了一个 app.js 文件，便是我们在 webapck.config.js 中配置的 output 文件

    ├── app.js // <---- 打包编译输出的结果
    ├── index.html
    ├── node_modules
    ├── package.json
    ├── src
    │ ├── App.vue
    │ └── index.js
    └── webpack.config.js


然后使用浏览器打开 index.html 文件，可以看到如下文案：

> part1 of learn vue  
> Hello world!

