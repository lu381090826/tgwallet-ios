webpackJsonp([7],{587:function(e,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=s(0),t=(s(14),s(20),s(11)),i=(s(34),s(31)),r=(s(7),s(2)),c=(s(8),s(6));s(1),s(3);n.default.use(t.a).use(i.a).use(r.a).use(c.a);n.default.use(t.a).use(i.a).use(r.a).use(c.a);var o={name:"share",data:function(){return{shareUrl:"http://www.thanksgiving.cn/",sharewx:"",popupVisible:!1}},methods:{showShare:function(){var e=this;e.popupVisible=!0,plus.share.getServices(function(a){for(var s in a)"weixin"===a[s].id&&(e.sharewx=a[s])},function(e){Object(c.a)("获取分享服务列表失败："+e.message)})},shareWeixinMessage:function(){var e={title:"区块链公益平台",content:"积分购手机享9.5折",href:this.shareUrl,type:"web",thumbs:["http://www.thanksgiving.cn/static/img/gongyilogo.png"],extra:{scene:"WXSceneSession"}};this.sharewx.send(e,function(){Object(c.a)("分享成功！")},function(e){Object(c.a)("分享失败："+e.message)})}}},u={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"body yaoqing-body"},[n("div",[n("img",{attrs:{src:s(589),width:"100%"}}),e._v(" "),n("div",{staticClass:"button-area"},[n("van-button",{directives:[{name:"intervalclick",rawName:"v-intervalclick",value:{func:e.showShare},expression:"{func:showShare}"}],staticClass:"fenxiang",attrs:{size:"large",type:"default"}},[e._v("\n        立即分享\n      ")])],1)]),e._v(" "),n("van-popup",{attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(a){e.popupVisible=a},expression:"popupVisible"}},[n("div",{directives:[{name:"intervalclick",rawName:"v-intervalclick",value:{func:e.shareWeixinMessage},expression:"{func:shareWeixinMessage}"}],staticClass:"shareBox"},[n("div",[n("van-icon",{attrs:{name:"wechat",color:"#00cc24",size:"30px"}})],1),e._v("\n      分享给微信朋友\n    ")])])],1)},staticRenderFns:[]};var l=s(9)(o,u,!1,function(e){s(588)},"data-v-16988ca2",null).exports;new n.default({el:"#app",render:function(e){return e(l)}})},588:function(e,a){},589:function(e,a,s){e.exports=s.p+"assets/img/yaoqing.png"}},[587]);