---
title: 面试题
sidebar: auto
sidebarDepth: 2
---
# 面试题

## 1.异常捕获前端监控 

### 前端监控目的
1. 提升用户体验
2. 更快的发现发现异常、定位异常、解决异常
3. 了解业务数据，指导产品升级——数据驱动业务的思想

### try...cache异常捕获

1. try cache无法捕捉setTimeout、then 回调函数中的错误，原因在于执行异步任务时，try cache所在函数已经出栈。try写在.then里面和setTimeout里面是可以的。
2. 同理，try捕捉的回调如果和try所在函数在一次事件循环里就可以捕获错误。
3. Promise内部错误和Promise.reject的error try也无法捕获，因为Promise内部的错误需要.cache捕获
4. try可以捕获async、await的错误，因为生成器内部throw了

## 异常信息可以分为两类：运行时错误、接口错误。

### 运行时错误

语法错误、类型错误、范围错误、引用错误、eval错误、URL错误、资源加载错误
1. 非promise
a. window.addEventListener('error',{})
2. promise错误
a. Promise被reject且没有reject处理器的时候，会触发unhandlerejection事件，所以通过监听unhandlerejection的事件来捕获错误。Promise.allSettled都失败也是这个错误
b.  window.addEventListener('unhandledrejection',

### 接口错误

请求拦截、响应拦截中判断捕获上报

### 埋点监控

对于埋点方案：
- 手动埋点（侵入性强，和业务强关联，用于需要精确搜集并分析数据，不过该方式耗时耗力，且容易出现误差，后续要调整，成本较高）
- 可视化埋点（提供一个可视化的埋点控制台，只能在可视化平台已支持的页面进行埋点）
- 无埋点（就是全埋点，监控页面发生的一切行为，优点是前端只需要处理一次埋点脚本，不过数据量过大会产生大量的脏数据，需要后端进行数据清洗）。

### 上报方式

埋点通常采用new Image方式（通常是gif格式字节更小）来上传，上报的数据作为URL参数拼接到一个1x1像素的透明图片URL中
- 没有跨域问题
- 不会阻塞页面加载
现在的浏览器如果支持Navigator.sendBeacon(url, data)方法，优先使用该方法来实现，它的主要作用就是用于统计数据发送到web服务器。当然如果不支持的话就继续使用图片的方式来上传数据。

### SDK

简化开发过程并提高效率


## 
