(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/promotes/index/index"],{"245f":function(i,n,a){"use strict";a.r(n);var e=a("afd1"),t=a.n(e);for(var o in e)"default"!==o&&function(i){a.d(n,i,function(){return e[i]})}(o);n["default"]=t.a},5466:function(i,n,a){"use strict";var e=function(){var i=this,n=i.$createElement;i._self._c},t=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return t})},ab87:function(i,n,a){"use strict";var e=a("cf0f"),t=a.n(e);t.a},afd1:function(i,n,a){"use strict";(function(i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{data:{avatar:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIxMDAiIHdpZHRoPSIxMDAiPjxyZWN0IGZpbGw9InJnYigxNjksMjI5LDE2MCkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+PHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIj7lsI88L3RleHQ+PC9zdmc+",is_member:!0,team_number:210,apprentice_number:12,income_sum:2400,income_task:25.5,income_prize_sum:251.2,income_task_apprentice_prize_sum:350.04,income_team_prize_sum:500,income_channel_manager_prize_sum:400}}},onLoad:function(){var i=this,n={},a="/api/user/apprenticeoverview";this.util.request(a,"GET",n,function(n){200==n.statusCode?1==n.data.code?i.data=n.data.data:i.util.showWindow(n.data.msg):i.util.showWindow("请求失败")})},methods:{promotes:function(){i.navigateTo({url:"../QRCode/index/index",animationType:"slide-in-right",animationDuration:300})},awarddetail:function(){i.navigateTo({url:"../awarddetail/index",animationType:"slide-in-right",animationDuration:300})},prentice:function(){i.navigateTo({url:"../prentice/index",animationType:"slide-in-right",animationDuration:300})}}};n.default=a}).call(this,a("6e42")["default"])},cdc3:function(i,n,a){"use strict";a.r(n);var e=a("5466"),t=a("245f");for(var o in t)"default"!==o&&function(i){a.d(n,i,function(){return t[i]})}(o);a("ab87");var u=a("2877"),r=Object(u["a"])(t["default"],e["a"],e["b"],!1,null,null,null);n["default"]=r.exports},cf0f:function(i,n,a){}},[["19e4","common/runtime","common/vendor"]]]);