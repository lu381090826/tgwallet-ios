webpackJsonp([40],{726:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var l=t(0),n=(t(14),t(13),t(10)),r=(t(17),t(15)),i=(t(36),t(33)),u=(t(7),t(2)),c=(t(30),t(28)),s=(t(8),t(6)),d=t(1),o=t(3);l.default.use(n.a).use(r.a).use(i.a).use(u.a).use(c.a).use(s.a);l.default.use(n.a).use(r.a).use(i.a).use(u.a).use(c.a).use(s.a);var v={data:function(){return{idcard:"",realname:"",phone:""}},methods:{submitAudit:function(){Object(d.a)(o.a.buyTgSubmitAudit,{idcard:this.idcard,realname:this.realname,contactPhone:this.phone}).then(function(e){c.a.alert({message:"您的申请已提交，1-3工作日内会有人工客服主动联系，请保持电话畅通。"}).then(function(){plus.webview.currentWebview().close()})})}}},p={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticStyle:{padding:"2%"}},[t("div",{staticClass:"box"},[t("van-cell-group",[t("van-cell",[t("van-field",{attrs:{label:"身份证",type:"text",placeholder:"请输入身份证号码",required:"",clearable:""},model:{value:e.idcard,callback:function(a){e.idcard=a},expression:"idcard"}})],1),e._v(" "),t("van-cell",[t("van-field",{attrs:{label:"姓名",type:"text",placeholder:"请输入真实姓名",required:"",clearable:""},model:{value:e.realname,callback:function(a){e.realname=a},expression:"realname"}})],1),e._v(" "),t("van-cell",[t("van-field",{attrs:{label:"联系电话",type:"text",placeholder:"请输入可联系您的电话",required:"",clearable:""},model:{value:e.phone,callback:function(a){e.phone=a},expression:"phone"}})],1)],1),e._v(" "),t("div",{staticStyle:{"margin-top":"6%","margin-bottom":"6%"}},[t("van-button",{directives:[{name:"intervalclick",rawName:"v-intervalclick",value:{func:e.submitAudit},expression:"{func:submitAudit}"}],staticClass:"button-blue",attrs:{size:"large"}},[e._v("\n        提交审核\n      ")])],1)],1)])},staticRenderFns:[]},b=t(9)(v,p,!1,null,null,null).exports;new l.default({el:"#app",render:function(e){return e(b)}})}},[726]);