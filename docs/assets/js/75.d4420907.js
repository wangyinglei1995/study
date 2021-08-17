(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{149:function(e,a,n){"use strict";n.r(a);var t=n(0),s=Object(t.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"vue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue"}},[e._v("#")]),e._v(" VUE")]),e._v(" "),n("h4",{attrs:{id:"_1、vue是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、vue是什么"}},[e._v("#")]),e._v(" 1、Vue是什么?")]),e._v(" "),n("ul",[n("li",[e._v("Vue是一个渐进式的javascript开发框架，通过组件的开发，最后进行组件的组合，合并组件形成页面")]),e._v(" "),n("li",[e._v("构造器(构造函数)")]),e._v(" "),n("li",[e._v("自动化构建工具")])]),e._v(" "),n("h5",{attrs:{id:"优点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[e._v("#")]),e._v(" 优点")]),e._v(" "),n("ol",[n("li",[e._v("组件化开发")]),e._v(" "),n("li",[e._v("单页面路由")]),e._v(" "),n("li",[e._v("丰富的Api方法")]),e._v(" "),n("li",[e._v("双向的数据绑定")]),e._v(" "),n("li",[e._v("单向数据流")]),e._v(" "),n("li",[e._v("易于结合其他第三库")])]),e._v(" "),n("h5",{attrs:{id:"缺点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[e._v("#")]),e._v(" 缺点")]),e._v(" "),n("ol",[n("li",[e._v("生态系统不够完善")]),e._v(" "),n("li",[e._v("可扩展性稍差")])]),e._v(" "),n("blockquote",[n("p",[e._v("1、全局安装   npm install -g vue-cli")])]),e._v(" "),n("blockquote",[n("p",[e._v("2、创建项目 vue init webpack myprojuct")])]),e._v(" "),n("blockquote",[n("p",[e._v("3、安装依赖包 npm install")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('下包：\n    cnpm i --save-dev vue\n\nCDN:内容分发网络/智能虚拟网络\nv-on:click 缩写 @click\nv-on:click="alert($event)" // 阻止默认行为\nv-on:click.prevent="alert" // 利用修饰符阻止默认行为\n\n指令\nv-show\nv-html\nv-text\nv-bind:src="list.img"  // 绑定属性  所有属性都可以\nv-for="list in lists"  // 循环\n\n\n插值\n{{message}}\nv-html="message"  // 可以解析html元素\nv-text="message"  // 只能解析字符串\n\n<div id="app">\n    {{message}}\n    {{message+""}} // 表达式\n    <input type="text" v-model="message">\n    <button v-on:click="alert">点击</button>\n</div>\n\nlet vm = new Vue({ \n    el:"#app",  // 挂载对象\n    data:{ // 实例属性    // data是一个方法返回一个对象\n        message:"世界您好!"\n    }, \n    beforeCreate(){   // 创建\n        // 挂载元素 实例属性 实例方法 都没有生成\n    },\n    created(){   // 创建完成\n        // 挂载元素 还是没有被初始化\n        // 实例属性 实例方法 编译出来\n    },\n    beforeMount(){  \n        // 挂载元素 初始化了，但是模板还没有被编译，原样输出\n        // 实例属性 实例方法 编译出来\n    },\n    mounted(){\n        // 挂载元素 初始化 模板被编译\n        // 属性 初始化\n        // 方法初始化\n    },\n    beforeUpdate(){\n        // 数据更新前\n    },\n    updated(){\n        // 数据更新后\n        // 当数据发生改变都会被updated捕获到\n    }\n    methods:{  // 方法\n        alert(e){\n            // e.preventDefault();\n            alert(this.message)\n        }\n    }\n})\n')])])]),n("h4",{attrs:{id:"_2、app-vue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、app-vue"}},[e._v("#")]),e._v(" 2、app.vue")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('自动添加前缀\npostcss-loader\nautoprefixer\nsass-loader\n{\n    loader:\'postcss-loader\',\n    optiond:{\n        sourceMap:true,\n        config:{\n            \n        }\n    }\n}\n\nvue init webpack-simple aaa\nvue\nvue-loader\nvue-template-compiler \nvue-style-loader\n\n<template>\n    <div>\n        <h1 v-bind:style="{fontSize:\'12px\'}">绑定样式</h1> // 直接赋值形式\n        <h2 v-bind:style="styleObj">绑定样式</h2> // 对象形式\n        <h3 v-bind:style="[obj1,obj2]">绑定样式</h3>  // 数组形式\n        \n        <p v-bind:class="[\'text-res\':true]">绑定类</p>  // 数组形式\n    </div>\n</template>\n<script>\n    export default:{\n        name:\'app\',\n        data(){\n            return{\n                styleObj:{\n                    fontSize:"20px",\n                    color:"red"\n                },\n                obj1:{\n                    color:"#dec"\n                },\n                 obj2:{\n                    color:"green"\n                }\n            }\n        },\n        computed:{\n            // computed 属性默认只有 getter ，不过在需要时你也可以提供一个 setter\n            sum(){\n                return Number(this.vall)+Number(this.val2)\n            }\n        },\n        watch:{ // 监听新值和旧值\n            slogin(){\n                \n            }\n        }\n    }\n<\/script>\n<style scoped> // 只在当前作用域里生效\n    .text-red{\n        color:red;\n    }\n</style>\n')])])]),n("h4",{attrs:{id:"_3、ajax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、ajax"}},[e._v("#")]),e._v(" 3、ajax")]),e._v(" "),n("ul",[n("li",[e._v("axios")])]),e._v(" "),n("h4",{attrs:{id:"_4、取dom元素"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、取dom元素"}},[e._v("#")]),e._v(" 4、取dom元素")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('  ref="aaa"   this.$refs.aaa\n')])])]),n("h4",{attrs:{id:"_6、轮播图-element-ui"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6、轮播图-element-ui"}},[e._v("#")]),e._v(" 6、轮播图 element-ui")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('main.js\nimport Element from \'element-ui\'\n\nVue.use(Element)\n\n页面\n<el-carousel :interval="3000">\n    <el-carousel-item v-for="(list,ind) in Imgs" :key="ind">\n        <img :src="list.picUrl" class="img_res">\n    </el-carousel-item>\n</el-carousel>\n\nstyle\n @import url(\'element-ui/lib/theme-chalk/index.css\');\n')])])]),n("h4",{attrs:{id:"_7、mock"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7、mock"}},[e._v("#")]),e._v(" 7、mock")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("下包：\n    mock-axios-adapter\n\nimport mockjs from 'mockjs';\nimport axios from 'axios';\nimport axiosAdapter from 'mock-axios-adapter'  // 拦截axios请求\n\n\nconst mock = new axiosAdapter(axios);\n\nmock.onGet('地址').reply(200,{\n    errCode:0,\n    errMsg:'',\n    result:[{\n        url:'./static/img/banner.jpg'\n    }]\n})\n\n")])])]),n("h4",{attrs:{id:"_8、vue-lazyload"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_8、vue-lazyload"}},[e._v("#")]),e._v(" 8、vue-lazyload")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("1、安装插件\nnpm install vue-lazyload --save-dev\n\n2. main.js引入插件：\nimport VueLazyLoad from 'vue-lazyload'\nVue.use(VueLazyLoad,{\n    error:'./static/error.png',\n    loading:'./static/loading.png'\n})\n\n3. vue文件中将需要懒加载的图片绑定 v-bind:src 修改为 v-lazy \n<img class=\"item-pic\" v-lazy=\"newItem.picUrl\"/>\n\n")])])]),n("h4",{attrs:{id:"_9、插槽"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_9、插槽"}},[e._v("#")]),e._v(" 9、插槽")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<slot></slot>\n\n两端对齐：\nvertival-align:sub\n\n")])])]),n("h4",{attrs:{id:"_10、缓存页面"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_10、缓存页面"}},[e._v("#")]),e._v(" 10、缓存页面")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("用这个标签包裹起来\n\n<keep-alive>\n    <router-view/>\n</keep-alive>\n")])])]),n("h4",{attrs:{id:"_11、事件修饰符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_11、事件修饰符"}},[e._v("#")]),e._v(" 11、事件修饰符")]),e._v(" "),n("blockquote",[n("p",[e._v(".stop\n.prevent\n.capture\n.self\n.once")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\x3c!-- 阻止单击事件冒泡 --\x3e\n<a v-on:click.stop="doThis"></a>\n\x3c!-- 提交事件不再重载页面 --\x3e\n<form v-on:submit.prevent="onSubmit"></form>\n\x3c!-- 修饰符可以串联  --\x3e\n<a v-on:click.stop.prevent="doThat"></a>\n\x3c!-- 只有修饰符 --\x3e\n<form v-on:submit.prevent></form>\n\x3c!-- 添加事件侦听器时使用事件捕获模式 --\x3e\n<div v-on:click.capture="doThis">...</div>\n\x3c!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 --\x3e\n<div v-on:click.self="doThat">...</div>\n\n\x3c!-- click 事件只能点击一次，2.1.4版本新增 --\x3e\n<a v-on:click.once="doThis"></a>\n')])])]),n("h4",{attrs:{id:"_12、按键修饰符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_12、按键修饰符"}},[e._v("#")]),e._v(" 12、按键修饰符")]),e._v(" "),n("p",[e._v(".enter")]),e._v(" "),n("p",[e._v(".tab")]),e._v(" "),n("p",[e._v('.delete (捕获 "删除" 和 "退格" 键)')]),e._v(" "),n("p",[e._v(".esc")]),e._v(" "),n("p",[e._v(".space")]),e._v(" "),n("p",[e._v(".up")]),e._v(" "),n("p",[e._v(".down")]),e._v(" "),n("p",[e._v(".left  // 检测鼠标左键")]),e._v(" "),n("p",[e._v(".right")]),e._v(" "),n("p",[e._v(".ctrl")]),e._v(" "),n("p",[e._v(".alt")]),e._v(" "),n("p",[e._v(".shift")]),e._v(" "),n("p",[e._v(".meta")]),e._v(" "),n("h4",{attrs:{id:"_13、表单修饰符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_13、表单修饰符"}},[e._v("#")]),e._v(" 13、表单修饰符")]),e._v(" "),n("ul",[n("li",[e._v(".lazy")]),e._v(" "),n("li",[e._v(".number")]),e._v(" "),n("li",[e._v(".trim")])])])}],!1,null,null,null);a.default=s.exports}}]);