(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/regist/regist"],{"0f1c":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{send:"发 送",nickname:"",mobile:"",vcode:"",idcard:"",password:"",confirmPwd:""}},methods:{smsSend:function(){var t=this,i={mobile:this.mobile,event:"register"},e="/api/sms/send";this.util.request(e,"POST",i,function(i){200==i.statusCode?1==i.data.code?(t.util.showWindow("验证码发送成功"),t.send=60,setInterval(function(){t.send>0&&t.send--},1e3)):t.util.showWindow(i.data.msg):t.util.showWindow("请求失败")})},regist:function(){var i=this;if(""!=this.nickname.trim())if(""!=this.mobile.trim()&&/^1[3456789]\d{9}$/.test(this.mobile))if(""!=this.vcode.trim())if(""!=this.idcard.trim()&&0!=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(this.idcard))if(""!=this.password.trim())if(""!=this.confirmPwd.trim()&&this.password==this.confirmPwd){var e={nickname:this.nickname,mobile:this.mobile,vcode:this.vcode,idcard:this.idcard,password:this.password},s="/api/user/register";this.util.request(s,"POST",e,function(e){200==e.statusCode?1==e.data.code?(i.util.token=e.data.data.userinfo.token,t.switchTab({url:"../../home/index/index"})):i.util.showWindow("注册失败"):i.util.showWindow("注册请求失败")})}else this.util.showWindow("确认密码输入错误");else this.util.showWindow("密码输入错误");else this.util.showWindow("身份证号码错误");else this.util.showWindow("验证码输入错误");else this.util.showWindow("电话号码输入错误");else this.util.showWindow("昵称输入错误")}}};i.default=e}).call(this,e("6e42")["default"])},"41ed":function(t,i,e){"use strict";var s=e("d00d"),n=e.n(s);n.a},"658b":function(t,i,e){"use strict";e.r(i);var s=e("0f1c"),n=e.n(s);for(var o in s)"default"!==o&&function(t){e.d(i,t,function(){return s[t]})}(o);i["default"]=n.a},d00d:function(t,i,e){},d24a:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement;t._self._c},n=[];e.d(i,"a",function(){return s}),e.d(i,"b",function(){return n})},fe05:function(t,i,e){"use strict";e.r(i);var s=e("d24a"),n=e("658b");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("41ed");var d=e("2877"),r=Object(d["a"])(n["default"],s["a"],s["b"],!1,null,null,null);i["default"]=r.exports}},[["2365","common/runtime","common/vendor"]]]);