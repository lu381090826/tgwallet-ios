webpackJsonp([41],{575:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(0),a=(r(14),r(103),r(104)),o=(r(105),r(106)),i=(r(8),r(6)),s=(r(30),r(28)),u=(r(66),r(67)),l=(r(7),r(2)),d=(r(17),r(15)),c=(r(13),r(10)),v=r(12),f=r(1),m=r(3),b=r(4),g=r(46),p=r(37),_=r(80);n.default.use(d.a).use(c.a),n.default.use(l.a),n.default.use(u.a),n.default.use(s.a),n.default.use(i.a),n.default.use(a.a).use(o.a);n.default.use(d.a).use(c.a),n.default.use(l.a),n.default.use(u.a),n.default.use(s.a),n.default.use(i.a),n.default.use(a.a).use(o.a);var k={created:function(){plus.key.addEventListener("backbutton",function(){var t=plus.webview.currentWebview().parent();Object(v.d)(t)&&t.close()});var t=this;plus.key.addEventListener("init",function(){t.init()}),t.init()},methods:{init:function(){var t=this;Object(f.a)(m.a.shopOrderGetOrderList,{pageSize:30,orderType:g.a.shop}).then(function(e){t.orderList=e})},gotoOrderDetail:function(t){Object(b.a)({url:"./shop.orderDetail.html",id:"shop.orderDetail",title:"订单详情",needLoaded:!0},{},{orderId:t})},getDesc:function(t){var e="";switch(Number(t)){case 100:e="待付款";break;case 150:e="待发货";break;case 160:e="待收货"}return e},refund:function(t){s.a.confirm({title:"申请退款",message:"确定要退款吗？"}).then(function(){s.a.alert({title:"提示",message:"暂不支持线上退款，请邮箱至381090826@qq.com进行人工退款。"})})},gotoCancel:function(t){var e=this;s.a.confirm({title:"取消订单",message:"确定要取消吗？"}).then(function(){i.a.loading("正在取消订单，请稍等..."),setTimeout(function(){Object(f.a)(m.a.shopOrderCancel,{orderId:t}).then(function(t){i.a.success("取消成功"),e.init()})},100)})},gotoPay:function(t,e){console.log("payType"+e),e.toString()===_.a.eth_tg?Object(b.a)({url:"./wallet.send.html",id:"wallet.send",title:"收银台",needLoaded:!0},{},{orderId:t,orderType:g.a.shop,tokenAddress:p.a.tokenAddress}):e.toString()===_.a.wxpay&&Object(b.a)({url:"./wallet.sendLegalCurrency.html",id:"wallet.sendLegalCurrency",title:"收银台",needLoaded:!0},{},{orderId:t,orderType:g.a.shop})}},data:function(){return{active:0,orderList:null}}},y={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[r("van-tab",{attrs:{title:"全部"}},[null!==t.orderList?r("van-cell-group",t._l(t.orderList,function(e,n){return r("van-cell",{key:n},t._l(e.orderDetailList,function(n,a){return r("van-card",{key:a,attrs:{num:n.buyNum,price:n.totalAmount,title:n.skuName,desc:t.getDesc(e.status)}},[r("div",{attrs:{slot:"thumb"},on:{click:function(r){t.gotoOrderDetail(e.orderId)}},slot:"thumb"},[r("img",{attrs:{src:n.img}})]),t._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[100===e.status?r("div",[r("van-button",{attrs:{size:"mini"},on:{click:function(r){t.gotoPay(e.orderId,e.payType)}}},[t._v("去付款")]),t._v(" "),r("van-button",{attrs:{size:"mini"},on:{click:function(r){t.gotoCancel(e.orderId)}}},[t._v("取消订单")])],1):r("div",[r("van-button",{attrs:{size:"mini"},on:{click:function(r){t.refund(e.orderId)}}},[t._v("申请退款")])],1)])])}),1)}),1):t._e()],1),t._v(" "),r("van-tab",{attrs:{title:"待付款"}},[null!==t.orderList?r("van-cell-group",t._l(t.orderList,function(e,n){return 100===e.status?r("van-cell",{key:n},t._l(e.orderDetailList,function(n,a){return r("van-card",{key:a,attrs:{desc:t.getDesc(e.status),num:n.buyNum,price:n.totalAmount,title:n.skuName}},[r("div",{attrs:{slot:"thumb"},on:{click:function(r){t.gotoOrderDetail(e.orderId)}},slot:"thumb"},[r("img",{attrs:{src:n.img}})]),t._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("van-button",{attrs:{size:"mini"},on:{click:function(r){t.gotoPay(e.orderId,e.payType)}}},[t._v("去付款")]),t._v(" "),r("van-button",{attrs:{size:"mini"},on:{click:function(r){t.gotoCancel(e.orderId)}}},[t._v("取消订单")])],1)])}),1):t._e()}),1):t._e()],1),t._v(" "),r("van-tab",{attrs:{title:"待发货"}},[null!==t.orderList?r("van-cell-group",t._l(t.orderList,function(e,n){return 150===e.status?r("van-cell",{key:n},t._l(e.orderDetailList,function(n,a){return r("van-card",{key:a,attrs:{num:n.buyNum,price:n.totalAmount,title:n.skuName,desc:t.getDesc(e.status)}},[r("div",{attrs:{slot:"thumb"},on:{click:function(r){t.gotoOrderDetail(e.orderId)}},slot:"thumb"},[r("img",{attrs:{src:n.img}})]),t._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("van-button",{attrs:{size:"mini"},on:{click:function(r){t.refund(e.orderId)}}},[t._v("申请退款")])],1)])}),1):t._e()}),1):t._e()],1),t._v(" "),r("van-tab",{attrs:{title:"待收货"}},[null!==t.orderList?r("van-cell-group",t._l(t.orderList,function(e,n){return 160===e.status?r("van-cell",{key:n},t._l(e.orderDetailList,function(n,a){return r("van-card",{key:a,attrs:{desc:t.getDesc(e.status),num:n.buyNum,price:n.totalAmount,title:n.skuName}},[r("div",{attrs:{slot:"thumb"},on:{click:function(r){t.gotoOrderDetail(e.orderId)}},slot:"thumb"},[r("img",{attrs:{src:n.img}})]),t._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("van-button",{attrs:{size:"mini"},on:{click:function(r){t.refund(e.orderId)}}},[t._v("申请退款")])],1)])}),1):t._e()}),1):t._e()],1)],1)],1)},staticRenderFns:[]},h=r(9)(k,y,!1,null,null,null).exports;new n.default({el:"#app",render:function(t){return t(h)}})}},[575]);