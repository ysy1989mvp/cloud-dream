(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/index/index"],{"5a60":function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{animate:!1,marqueeList:[],defaultURL:this.util.uploaddata.cdnurl,background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,data:null}},created:function(){setInterval(this.showMarquee,2e3)},onLoad:function(){var t=this,n={},a="/api/index/index";this.util.request(a,"GET",n,function(n){200==n.statusCode?1==n.data.code?(t.data=n.data.data,t.marqueeList=t.data.notice,console.log(JSON.stringify(t.data)," at pages\\home\\index\\index.vue:129")):t.util.showWindow("后台请求失败"):t.util.showWindow("请求失败")})},mounted:function(){},methods:{navito:function(t){window.location.href=t},changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value},help:function(){t.navigateTo({url:"../help/index",animationType:"slide-in-right",animationDuration:300})},becomevip:function(){t.navigateTo({url:"../becomevip/index/index",animationType:"slide-in-right",animationDuration:300})},task_detail:function(n){t.navigateTo({url:"../../me/task-detail/task-detail?id="+n})},howsave:function(){t.navigateTo({url:"../../me/how-save/how-save"})},showMarquee:function(){var t=this;this.animate=!0,setTimeout(function(){t.marqueeList.push(t.marqueeList[0]),t.marqueeList.shift(),t.animate=!1},500)}}};n.default=a}).call(this,a("6e42")["default"])},"9e47":function(t,n,a){"use strict";var i=a("da0f"),e=a.n(i);e.a},a051:function(t,n,a){"use strict";a.r(n);var i=a("c5e1"),e=a("b327");for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);a("9e47");var u=a("2877"),r=Object(u["a"])(e["default"],i["a"],i["b"],!1,null,null,null);n["default"]=r.exports},b327:function(t,n,a){"use strict";a.r(n);var i=a("5a60"),e=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(n,t,function(){return i[t]})}(o);n["default"]=e.a},c5e1:function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},e=[];a.d(n,"a",function(){return i}),a.d(n,"b",function(){return e})},da0f:function(t,n,a){}},[["d7a1","common/runtime","common/vendor"]]]);