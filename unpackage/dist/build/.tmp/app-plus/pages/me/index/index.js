(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/index/index"],{"1b01":function(e,t,n){"use strict";var a=n("7fa5"),o=n.n(a);o.a},"40e6":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},"7fa5":function(e,t,n){},"9bef":function(e,t,n){"use strict";n.r(t);var a=n("40e6"),o=n("bc33");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("1b01");var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},bc33:function(e,t,n){"use strict";n.r(t);var a=n("c48a"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},c48a:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{imgurl:this.util.uploaddata.cdnurl,data:{}}},onLoad:function(){var e=this,t={},n="/api/user/center";this.util.request(n,"GET",t,function(t){200==t.statusCode&&1==t.data.code?e.data=t.data.data:e.util.showWindow("请求失败")})},methods:{toRecharge:function(){e.navigateTo({url:"../recharge/recharge"})},toMyRelease:function(){e.navigateTo({url:"../my-release/my-release"})},toAccountManage:function(){e.navigateTo({url:"../account-manage/account-manage"})},toHelpCenter:function(){e.navigateTo({url:"../help-center/help-center"})},toTaskRecords:function(){e.navigateTo({url:"../task-records/task-records"})},toWithdrawal:function(){e.navigateTo({url:"../withdrawal/withdrawal"})},toSetting:function(){e.navigateTo({url:"../setting/setting"})},toChannel:function(){e.navigateTo({url:"../channel-merchants/channel-merchants"})},toHowSave:function(){e.navigateTo({url:"../how-save/how-save"})},toHowRelease:function(){e.navigateTo({url:"../how-release/how-release"})},becomevip:function(){e.navigateTo({url:"../../home/becomevip/index/index"})}}};t.default=n}).call(this,n("6e42")["default"])}},[["ee3b","common/runtime","common/vendor"]]]);