(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-badge/uni-badge"],{"1c93":function(e,t,n){"use strict";n.r(t);var u=n("ea12"),i=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);t["default"]=i.a},"1ef3":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return i})},"2fed":function(e,t,n){},"452f":function(e,t,n){"use strict";n.r(t);var u=n("1ef3"),i=n("1c93");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("cfe9");var r=n("2877"),f=Object(r["a"])(i["default"],u["a"],u["b"],!1,null,null,null);t["default"]=f.exports},cfe9:function(e,t,n){"use strict";var u=n("2fed"),i=n.n(u);i.a},ea12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"uni-badge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},computed:{setClass:function(){var e=["uni-badge-"+this.type,"uni-badge--"+this.size];return!0===this.inverted&&e.push("uni-badge-inverted"),e.join(" ")}},methods:{onClick:function(){this.$emit("click")}}};t.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-badge/uni-badge-create-component',
    {
        'components/uni-badge/uni-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("452f"))
        })
    },
    [['components/uni-badge/uni-badge-create-component']]
]);                
