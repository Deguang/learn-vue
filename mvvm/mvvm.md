# 如何实现双向绑定——MVVM

## 什么是双向绑定

## 主流的双向绑定实现

* 发布-订阅模式（backbone.js）
    * 通过 sub、pub 的方式实现数据和试图的绑定监听，使用 vm.set('property', value) 更新数据
* 脏检查（angular.js）
    * angular.js 使用脏检查的方式对数据变更进行判断，决定是否更新视图，在特定的事件触发时进入脏值检查，例如
        * DOM 事件：用户输入文本、点击按钮等（ng-click）；
        * XHR 响应事件；
        * 浏览器 location 变更事件；
        * Timer 事件；
        * 执行 $digest() 或 $apply();
* 数据劫持（vue.js）



---

## _参考_
* [剖析Vue实现原理 - 如何实现双向绑定mvvm](https://github.com/DMQ/mvvm)
* [谈谈JavaScript中的双向数据绑定](http://www.html-js.com/article/Study-of-twoway-data-binding-JavaScript-talk-about-JavaScript-every-day)