webpackJsonp([6],{520:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=(n(14),n(7),n(2)),o=n(1),l=n(3),s=n(12),c=(Number,String,String,String,{name:"paopao",data:function(){return{paoClass:"qiu float-animation",loading:0}},props:{weight:Number,x:String,y:String,animationDelay:String},methods:{paoClick:function(){var t=this,e=this;1!==this.loading?(this.loading=1,Object(o.a)(l.a.forestCollect,{energy:this.weight,walletAddress:plus.storage.getItem("walletAddress")}).then(function(e){t.paoClass="qiu animation",Object(s.a)(e)||(t.$emit("reflash"),t.loading=0)})):setTimeout(function(){e.loading=0},300)}}}),r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"intervalclick",rawName:"v-intervalclick",value:{func:t.paoClick},expression:"{func:paoClick}"}],class:t.paoClass,style:{top:t.y,left:t.x,animationDelay:t.animationDelay}},[n("div",{staticClass:"pao-text"},[t._v(t._s(t.weight)+" Tg")])])},staticRenderFns:[]};var u=n(9)(c,r,!1,function(t){n(522)},null,null).exports,h=(String,String,String,{name:"Forest-Cloud",props:{left:String,top:String,width:String}}),d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"cloud1",style:{left:this.left,top:this.top,width:this.width}})},staticRenderFns:[]};var f=n(9)(h,d,!1,function(t){n(523)},null,null).exports,m=n(4);i.default.use(a.a);i.default.use(a.a);var g={components:{ForestCloud:f},data:function(){return{items:[],clientHeight:"",skyHeight:"",cloudItems:[],totalEnergy:0,collectInfo:{},walletName:plus.storage.getItem("walletName")}},mounted:function(){this.clientHeight=""+document.documentElement.clientHeight,window.onresize=function(){this.clientHeight=""+document.documentElement.clientHeight},this.skyHeight=this.clientHeight-160+"px"},watch:{clientHeight:function(){}},methods:{gotoMycollect:function(){Object(m.b)({url:"./forest.mycollection.html",id:"forest.mycollection",title:"收集记录"})},append:function(){for(var t=0;t<2;t++){var e=300*Math.random(),n=20*Math.random(),i=100*Math.random();Math.random();this.cloudItems.push({component:f,left:e+"px",top:n+"%",width:i+"px"})}for(var a=0;a<5;a++){var o=200*Math.random(),l=o>301?151:o+"px",s=200*Math.random(),c=(s>this.skyHeight?this.skyHeight-150:s)+"px",r=Math.random();this.items.push({component:u,weight:.02,x:l,y:c,animationDelay:r+"s"})}},changeFixed:function(t){this.$refs.homePage.style.height=t+"px"},reflash:function(){var t=this;Object(o.a)(l.a.forestCollectInfo).then(function(e){t.collectInfo=e})}},created:function(){this.append(),this.reflash()}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"forestBody",staticClass:"forest-body"},[n("div",{staticClass:"container"},[n("div",{staticClass:"blueSky",style:{height:t.skyHeight}},[n("ul",t._l(t.cloudItems,function(t,e){return n(t.component,{key:e,tag:"li",attrs:{left:t.left,top:t.top,width:t.width}})}),1),t._v(" "),n("div",{staticStyle:{width:"70%"}},[n("ul",t._l(t.items,function(e,i){return n(e.component,{key:i,tag:"li",staticStyle:{float:"left"},attrs:{weight:e.weight,x:e.x,y:e.y,animationDelay:e.animationDelay},on:{reflash:t.reflash}})}),1)])]),t._v(" "),n("div",{staticClass:"grassLand"},[n("div",{directives:[{name:"intervalclick",rawName:"v-intervalclick",value:{func:t.gotoMycollect},expression:"{func:gotoMycollect}"}],staticClass:"my-collection"},[n("div",{staticStyle:{color:"#009e04","font-weight":"bold"}},[t._v("已收集："+t._s(t.collectInfo.totalCollectTg)+"Tg")]),t._v(" "),n("div",{staticStyle:{color:"#009e04","font-size":"11px"}},[t._v("采集的能量将由区块链发放到钱包-"+t._s(t.walletName))])])])])])},staticRenderFns:[]};var v=n(9)(g,p,!1,function(t){n(521)},null,null).exports;new i.default({el:"#app",render:function(t){return t(v)}})},521:function(t,e){},522:function(t,e){},523:function(t,e){}},[520]);