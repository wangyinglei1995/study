(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{191:function(e,t,l){"use strict";l.r(t);var s=l(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"content"},[l("h1",{attrs:{id:"小程序组件化"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#小程序组件化","aria-hidden":"true"}},[e._v("#")]),e._v(" 小程序组件化")]),e._v(" "),l("h5",{attrs:{id:"wxml节点信息api"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#wxml节点信息api","aria-hidden":"true"}},[e._v("#")]),e._v(" wxml节点信息API")]),e._v(" "),l("ul",[l("li",[e._v("在小程序中使用"),l("strong",[e._v("wx.createSelectorQuery()"),l("strong",[e._v("获取到")]),e._v("SelectorQuery")]),e._v("对象，这个对象提供了对应的节点操作方法\n"),l("ul",[l("li",[l("strong",[e._v("in(this)")]),e._v("  将节点选区范围指向当前组件，默认只会查找当期页面")]),e._v(" "),l("li",[l("strong",[e._v("select()")]),e._v(" 根据css选择器查询到匹配结果的第一个元素节点，返回的 NodesRef对象实例")]),e._v(" "),l("li",[l("strong",[e._v("selectAll()")]),e._v("  和select一样只不过他可以匹配多个")]),e._v(" "),l("li",[l("strong",[e._v("selectViewport()")]),e._v("   选择显示区域(页面)，可用于获取显示区域的尺寸、滚动位置等信息，返回一个NodesRef对象实例。")]),e._v(" "),l("li",[l("strong",[e._v("exec()")]),e._v("   执行所有的请求，请求结果按请求次序构成数组，在callback的第一个参数中返回。")])])])]),e._v(" "),l("h5",{attrs:{id:"nodesref对象"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#nodesref对象","aria-hidden":"true"}},[e._v("#")]),e._v(" NodesRef对象")]),e._v(" "),l("p",[e._v("1、 "),l("strong",[e._v("boundingClientRect([callback])")])]),e._v(" "),l("blockquote",[l("p",[e._v("获取节点信息， 返回值相对于显示区域，以像素为单位。\n返回节点的信息有"),l("strong",[e._v("left、right、top、bottom、width、height")]),e._v("  如果提供了callback回调函数，在执行selectQuery的exec方法后，节点信息会在callback中返回")])]),e._v(" "),l("p",[e._v("2、"),l("strong",[e._v("scrollOffset([callback])")])]),e._v(" "),l("blockquote",[l("p",[e._v("获取滚动位置信息，只针对与scroll-view组件以及viewport页面起作用，返回值是"),l("strong",[e._v("scrollLeft、scrollTop")]),e._v("，如果提供了callback回调函数，在执行selectQuery的exec方法后，节点信息会在callback中返回")])]),e._v(" "),l("p",[e._v("3、"),l("strong",[e._v("fields(Object, [callback])")])]),e._v(" "),l("blockquote",[l("p",[e._v("指定获取那些信息 （id, dataset, rect, size, scrollOffset ,  properties=[获取的常规属性名称（注:id class style 除外）], computedStyle=[获取的样式名称]）")])])])}],!1,null,null,null);t.default=r.exports}}]);