(this["webpackJsonpstore-macias-nicolas"]=this["webpackJsonpstore-macias-nicolas"]||[]).push([[0],{50:function(e,t,c){},73:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){},78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),s=c.n(r),i=c(24),a=c.n(i),o=(c(50),c(3)),u=c(15),j=c.n(u),d=c(18),b="https://coding-challenge-api.aerolab.co",l="/store-macias-nicolas",O=c(21),h=c.n(O);h.a.defaults.headers.common.Authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmYyNTVlN2IxYjllMDAwMjA3OWJjYTQiLCJpYXQiOjE2MDk3MTcyMjN9.OiV8wFjofPQ_3dQq9imjOYLkXzIc1QOAmiqNmvwXqbY");var m=function(e){return{type:"SET_PRODUCTS",products:e}},f=function(){return function(e){var t="".concat(b,"/user/me");h.a.get(t).then((function(e){return e.data})).then((function(t){e(function(e){return{type:"SET_USER",user:e}}(t))})).catch((function(e){return console.log(e)}))}},x=function(){return function(e){var t="".concat(b,"/products");h.a.get(t).then((function(e){return e.data})).then((function(t){e(m(t))})).catch((function(e){return console.log(e)}))}},v=c(11),p=c(102),g=(c(73),function(e){var t=e.children;return Object(n.jsx)("div",{className:"badge row center",children:t})}),N=c.p+"static/media/aerolab-logo.40b78ac9.svg",y=c.p+"static/media/coin.1fc21bda.svg",S=c(9),w=function(e){var t=e.Render;return Object(n.jsx)(S.b,{to:"".concat(l),children:Object(n.jsx)(t,{})})},C=c(23),E=c(42),R=c(12),k=c(6),T={user:null,products:[]},I=function(e){return{SET_USER:function(t){var c=t.user;return Object(k.a)(Object(k.a)({},e),{},{user:c})},SET_PRODUCTS:function(t){var c=t.products;return Object(k.a)(Object(k.a)({},e),{},{products:Object(R.a)(c)})},CLEAR_USER:function(){return Object(k.a)(Object(k.a)({},e),{},{user:null})}}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=I(e),r=n[c];return r?r(t):e},U=Object(C.c)(P,Object(C.a)(E.a)),F=(c(75),Object(v.c)(null,{getUser:f})((function(e){var t=e.getUser,c=Object(r.useState)(null),s=Object(o.a)(c,2),i=s[0],a=s[1];Object(r.useEffect)((function(){var e=U.getState().user;return e?a(e):t(),U.subscribe((function(){var e=U.getState().user;a(e)}))}),[t]);return Object(n.jsxs)("div",{className:"bar-container row",children:[Object(n.jsx)(w,{Render:function(){return Object(n.jsx)("img",{src:N,alt:"kite",height:"36",width:"36"})}}),Object(n.jsx)("div",{className:"row",children:i?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"bar-text center",children:i.name}),Object(n.jsx)("div",{className:"center",children:Object(n.jsxs)(g,{children:[Object(n.jsx)("p",{className:"bar-text",children:i.points.toLocaleString()}),Object(n.jsx)("img",{src:y,alt:"coin",height:"24",width:"24"})]})})]}):Object(n.jsx)("div",{className:"center",children:Object(n.jsx)(p.a,{})})})]})}))),Y=(c(76),function(){return Object(n.jsx)("div",{className:"banner",children:Object(n.jsx)("p",{className:"title",children:"Electronics"})})}),L=c.p+"static/media/buy-blue.13783e2a.svg",_=(c(77),function(e){var t=e.difference,c=e.hasEnough;return e.hasUser?c?Object(n.jsx)("img",{src:L,alt:"buy-blue",width:"42",height:"42"}):Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"remaining-container",children:[Object(n.jsxs)("p",{className:"amount-missing",children:["You need ",Math.abs(t).toLocaleString()]}),Object(n.jsx)("img",{src:y,alt:"coin",width:"20",height:"20"})]})}):Object(n.jsx)(p.a,{})}),G=c.p+"static/media/buy-white.3eddcc1e.svg",M=function(e){var t=e.number,c=e.separator,n=e.distance,r=c||",",s=n||3;return t.toString().split("").reverse().reduce((function(e,t,c,n){var i=c+1,a=i%s===0&&i<n.length&&"-"!==n[i];return["".concat(a?r:"").concat(t)].concat(Object(R.a)(e))}),[]).join("")},D=function(e){var t=e.number,c=e.separator,r=e.distance;if(!t||Number.isNaN(t))return Object(n.jsx)(n.Fragment,{});var s=M({number:t,separator:c,distance:r});return Object(n.jsx)(n.Fragment,{children:s})},J=(c(78),function(e){var t=e.displayNumber,c=e.hasEnough,r=e.productId,s={Redeem:{text:"Redeem now",linkTo:"/redeem/".concat(r)},Coins:{text:"Get coins",linkTo:"/coins"}}[c?"Redeem":"Coins"];return Object(n.jsxs)("div",{className:"action-button-container",children:[Object(n.jsx)("div",{className:"img-block",children:Object(n.jsx)("img",{src:G,alt:"buy-white",width:"48",height:"48"})}),Object(n.jsx)("div",{className:"action-block",children:Object(n.jsxs)("div",{className:"value",children:[Object(n.jsx)("p",{children:Object(n.jsx)(D,{number:t})}),Object(n.jsx)("div",{className:"coin-container",children:Object(n.jsx)("img",{src:y,alt:"coin",height:"30",width:"30"})})]})}),Object(n.jsx)("div",{className:"button-container",children:Object(n.jsx)(S.b,{to:"".concat(l).concat(s.linkTo),children:Object(n.jsx)("button",{className:"action-button",children:s.text})})})]})}),A=function(e){return function(t){return Object(n.jsx)(v.b.Consumer,{children:function(c){var r=c.store.getState().user;return Object(n.jsx)(e,Object(k.a)({user:r},t))}})}},H=(c(79),function(e){return function(t){return Object(n.jsx)("div",{className:"indicator-container",children:Object(n.jsx)(e,Object(k.a)({},t))})}}),Q=(c(80),A(H((function(e){var t,c=e.cost,r=e.user,s=e.isHover,i=e.productId,a=(null!==(t=null===r||void 0===r?void 0:r.points)&&void 0!==t?t:0)-c,o=a>=0;return s?Object(n.jsx)(J,{displayNumber:o?c:a,hasEnough:o,productId:i}):Object(n.jsx)(_,{hasEnough:o,hasUser:!!r,difference:a})})))),q=(c(81),function(e){var t=e.img,c=e.name,s=e.category,i=e.cost,a=e._id,u=e.avoidContainer,j=e.avoidTransition,d=Object(r.useState)(!1),b=Object(o.a)(d,2),l=b[0],O=b[1];return Object(n.jsxs)("div",{className:"product-container column center ".concat(!j&&"transition"),onMouseEnter:function(){return O(!0)},onMouseLeave:function(){return O(!1)},children:[!u&&Object(n.jsx)(Q,{cost:i,isHover:l,productId:a}),Object(n.jsx)("img",{className:"product-image",src:t.hdUrl,alt:"product-".concat(c),width:"230"}),Object(n.jsxs)("div",{className:"text-block column",children:[Object(n.jsx)("p",{className:"category",children:s}),Object(n.jsx)("p",{className:"name",children:c})]})]})}),X=(c(82),function(e){var t=e.products,c=void 0===t?[]:t,r=e.sortProducts;return Object(n.jsxs)("div",{className:"center column",children:[Object(n.jsxs)("div",{className:"product-list-options row",children:[Object(n.jsxs)("div",{className:"product-list-filter row",children:[Object(n.jsx)("p",{children:"Sort by:"}),[{name:"Name",sortFn:function(e){return e.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}))}},{name:"Lowest price",sortFn:function(e){return e.sort((function(e,t){return e.cost-t.cost}))}},{name:"Highest price",sortFn:function(e){return e.sort((function(e,t){return t.cost-e.cost}))}}].map((function(e,t){var s,i=e.name,a=e.sortFn;return Object(n.jsx)("button",{onClick:(s=a,function(){r(c,s)}),children:i},t)}))]}),Object(n.jsxs)("div",{className:"navigation-options row",children:[Object(n.jsx)("div",{className:"center",children:Object(n.jsx)(S.b,{to:"".concat(l,"/coins"),children:Object(n.jsx)("button",{children:"Get coins"})})}),Object(n.jsx)("div",{className:"center",children:Object(n.jsx)(S.b,{to:"".concat(l,"/history"),children:Object(n.jsx)("button",{children:"Redeem history"})})})]})]}),Object(n.jsx)("div",{className:"product-list",children:c.map((function(e,t){return Object(n.jsx)(q,Object(k.a)({},e),"product-".concat(t))}))})]})});c(83);var z=Object(v.c)(null,{getProducts:x,sortProducts:function(e,t){return function(c){var n=t(e);c(m(n))}}})((function(e){var t=e.getProducts,c=e.sortProducts,s=Object(r.useState)([]),i=Object(o.a)(s,2),a=i[0],u=i[1];return Object(r.useEffect)((function(){t()}),[t]),Object(r.useEffect)((function(){return U.subscribe((function(){var e=U.getState().products;u(e)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(F,{}),Object(n.jsx)(Y,{}),Object(n.jsx)(X,{products:a,sortProducts:c})]})})),B=c(4),V=function(){return Object(n.jsx)("div",{className:"center",children:Object(n.jsx)(p.a,{})})},W=(c(84),function(e){var t=e.success;return Object(n.jsx)("div",{className:"animated-face-container center ".concat(t?"jump-animation":"rotate-animation"),children:Object(n.jsx)("div",{className:t?void 0:"face-rotate-animation",children:Object(n.jsx)("h3",{children:t?"\u25d5\u203f\u25d5":" \u0ca0_\u0ca0"})})})}),Z=(c(85),Object(B.h)((function(e){var t=e.success,c=e.onRetry,r=e.history,s=t?"The product was successfully redeemed":"There was an error trying to redeem this product",i=t?"See redeem history":"Try again",a=t?function(){return r.push("".concat(l,"/history"))}:c;return Object(n.jsxs)("div",{className:"center column",children:[Object(n.jsxs)("div",{className:"message-card success-color",children:[Object(n.jsx)("h1",{children:t?"Success":"Oops"}),Object(n.jsx)(W,{success:t}),Object(n.jsx)("p",{className:"redem-message",children:s}),Object(n.jsx)("button",{className:"action-button",onClick:a,children:i})]}),Object(n.jsx)(w,{Render:function(){return Object(n.jsx)("button",{className:"return-buttons",children:"Go back"})}})]})}))),K=(c(86),Object(v.c)(null,{redeemProduct:function(e){return function(){var t=Object(d.a)(j.a.mark((function t(c){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(b,"/redeem"),r={productId:e},t.abrupt("return",h.a.post(n,r).then((function(e){return e.data})).then((function(e){var t=e.message;return function(e){e({type:"CLEAR_USER"})}(c),f()(c),t})).catch((function(e){return"The product can not be redeemed now"})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getProducts:x})((function(e){var t=e.redeemProduct,c=e.getProducts,s=Object(r.useState)(null),i=Object(o.a)(s,2),a=i[0],u=i[1],b=Object(r.useState)(!1),l=Object(o.a)(b,2),O=l[0],h=l[1],m=Object(r.useState)(!1),f=Object(o.a)(m,2),x=f[0],v=f[1],p=Object(r.useState)(null),g=Object(o.a)(p,2),N=g[0],y=g[1],S=Object(B.g)().productId;Object(r.useEffect)((function(){var e=function(e){var t=e.find((function(e){return e._id===S}));u(t)},t=U.getState().products;if(!t.length)return c(),U.subscribe((function(){var t=U.getState().products;t&&e(t)}));e(t)}),[c,S]);var C=function(){var e=Object(d.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,t(S);case 3:c=e.sent,v(!0),h(!1),y("You've redeem the product successfully"===c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(!a)return Object(n.jsx)(V,{});return Object(n.jsxs)("div",{children:[Object(n.jsx)(F,{}),O?Object(n.jsx)(V,{}):x?Object(n.jsx)(Z,{success:N,onRetry:C}):Object(n.jsxs)("div",{className:"redem-container",children:[Object(n.jsx)("div",{className:"product-description",children:Object(n.jsxs)("div",{className:"card-description",children:[Object(n.jsx)(q,Object(k.a)(Object(k.a)({},a),{},{avoidContainer:!0,avoidTransition:!0})),Object(n.jsxs)("div",{className:"redeem-information",children:[Object(n.jsxs)("div",{className:"column",children:[Object(n.jsxs)("h3",{className:"title",children:["Redeem ",a.name]}),Object(n.jsxs)("p",{children:["You're about to spend ",M({number:a.cost})," in this product"]})]}),Object(n.jsxs)("div",{className:"button-container",children:[Object(n.jsx)("h5",{children:"Do you want to continue?"}),Object(n.jsx)("div",{className:"center",children:Object(n.jsx)("button",{className:"confirm-button",onClick:C,children:"Yes"})}),Object(n.jsx)("div",{className:"center",children:Object(n.jsx)(w,{Render:function(){return Object(n.jsx)("button",{className:"confirm-button",children:"No"})}})})]})]})]})}),Object(n.jsx)("div",{className:"center",children:Object(n.jsx)(w,{Render:function(){return Object(n.jsx)("button",{className:"return-button",children:"Go back"})}})})]})]})}))),$=function(e){var t=e.dataGroup,c=void 0===t?[]:t,n=e.page,r=void 0===n?0:n,s=e.register,i=void 0===s?30:s,a=c.length,o=r*i,u=++r*i;return o>a?[]:c.slice(o,a>u?u:a)},ee=c(43),te=c.n(ee),ce=(c(88),function(e){var t=e.name,c=e.createDate,r=e.cost,s=e.category;return Object(n.jsxs)("div",{className:"register",children:[Object(n.jsxs)("div",{className:"product-description column",children:[Object(n.jsxs)("h4",{children:["You redeemed: ",t," (",s,")"]}),Object(n.jsxs)("p",{className:"cost-description",children:["You spent: ",M({number:r})]})]}),Object(n.jsx)("h5",{children:te()(c).fromNow()})]})}),ne=(c(89),function(e){e.getUser;var t=Object(r.useState)([]),c=Object(o.a)(t,2),s=c[0],i=c[1],a=Object(r.useState)([]),u=Object(o.a)(a,2),j=u[0],d=u[1],b=Object(r.useState)(0),l=Object(o.a)(b,2),O=l[0],h=l[1],m=Object(r.useState)(null),f=Object(o.a)(m,2),x=f[0],v=f[1];Object(r.useEffect)((function(){var e=function(e){var t,c=null!==(t=e.redeemHistory)&&void 0!==t?t:[],n=Object(R.a)(c).reverse(),r=$({dataGroup:n,page:O});i(n),d(r)},t=U.getState().user;if(!t)return U.subscribe((function(){var t=U.getState().user;t&&e(t)}));e(t)}),[]),Object(r.useEffect)((function(){if(s.length){var e=$({dataGroup:s,page:O});e.length||v("You've reached the end of the queue"),d((function(t){return[].concat(Object(R.a)(t),Object(R.a)(e))}))}}),[O]);var p=function(){h(O+1)};return Object(n.jsxs)("div",{className:"column",children:[Object(n.jsx)(F,{}),Object(n.jsx)("div",{className:"register-container",children:j.length&&j.map((function(e,t){return Object(n.jsx)(ce,Object(k.a)({},e),t)}))}),Object(n.jsx)("div",{className:"center",children:Object(n.jsx)("p",{className:"end-message",children:x})}),Object(n.jsx)("div",{className:"center history-action-container",children:Object(n.jsx)("button",{onClick:p,children:"More"})}),Object(n.jsx)("div",{className:"center history-action-container",children:Object(n.jsx)(w,{Render:function(){return Object(n.jsx)("button",{onClick:p,children:"Home"})}})})]})}),re=(c(90),Object(v.c)(null,{getCoins:function(e){return function(){var t=Object(d.a)(j.a.mark((function t(c){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(b,"/user/points"),r={amount:e},t.abrupt("return",h.a.post(n,r).then((function(e){return e.data})).then((function(e){var t=e.message;return function(e){e({type:"CLEAR_USER"})}(c),f()(c),t})).catch((function(e){return"This action cannot be completed now"})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.getCoins,c=Object(r.useState)("1000"),s=Object(o.a)(c,2),i=s[0],a=s[1],u=Object(r.useState)(!1),b=Object(o.a)(u,2),l=b[0],O=b[1],h=Object(r.useState)(null),m=Object(o.a)(h,2),f=m[0],x=m[1],v=function(){var e=Object(d.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,t(Number(i));case 3:c=e.sent,O(!1),x(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"column",children:[Object(n.jsx)(F,{}),Object(n.jsxs)("div",{className:"coins-container column",children:[Object(n.jsx)("h1",{children:"Get more coins!"}),Object(n.jsxs)("div",{className:"coins-form",onSubmit:v,children:[Object(n.jsxs)("label",{className:"column",children:["How many coins do you want?",Object(n.jsx)("div",{children:Object(n.jsxs)("select",{className:"coins-select",value:i,onChange:function(e){e.preventDefault(),e.persist();var t=e.target;a(t.value)},children:[Object(n.jsxs)("option",{value:"1000",children:[M({number:1e3})," coins"]}),Object(n.jsxs)("option",{value:"5000",children:[M({number:5e3})," coins"]}),Object(n.jsxs)("option",{value:"7500",children:[M({number:7500})," coins"]})]})})]}),Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:f})}),l?Object(n.jsx)(V,{}):Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("button",{className:"coins-form-button",onClick:v,children:"Get coins"}),Object(n.jsx)(w,{Render:function(){return Object(n.jsx)("button",{className:"coins-form-button",children:"Home"})}})]})]})]})]})}))),se=[{route:"".concat(l,"/"),exact:!0,Component:z},{route:"".concat(l,"/redeem/:productId"),Component:K},{route:"".concat(l,"/history"),Component:ne},{route:"".concat(l,"/coins"),Component:re}],ie=function(){return Object(n.jsx)(B.a,{to:l})},ae=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(B.b,{exact:!0,path:"**",children:Object(n.jsx)(ie,{})})})},oe=function(){return Object(n.jsxs)(B.d,{children:[se.map((function(e,t){var c=e.route,r=e.exact,s=e.Component;return Object(n.jsx)(B.b,{exact:!!r,path:c,children:Object(n.jsx)(s,{})},t)})),Object(n.jsx)(ae,{})]})},ue=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,103)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(v.a,{store:U,children:Object(n.jsx)(S.a,{children:Object(n.jsx)(oe,{})})})}),document.getElementById("root")),ue()}},[[91,1,2]]]);
//# sourceMappingURL=main.a78d11b9.chunk.js.map