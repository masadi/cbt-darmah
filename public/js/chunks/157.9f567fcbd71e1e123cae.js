(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1237:function(t,n,e){"use strict";e(645)},1238:function(t,n,e){(n=e(20)(!1)).push([t.i,".misc-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper .misc-inner {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n}\n[dir] .misc-wrapper .brand-logo {\n  margin: 0;\n}\n[dir=ltr] .misc-wrapper .brand-logo {\n  left: 2rem;\n}\n[dir=rtl] .misc-wrapper .brand-logo {\n  right: 2rem;\n}\n.misc-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n@media (max-height: 625px) {\n[dir] .misc-wrapper .misc-inner {\n    margin-top: 4rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 40.95px;\n}",""]),t.exports=n},1550:function(t,n,e){"use strict";e.r(n);var r=e(59),i=e(89),s=e(223),a=e(53),c=e(15),o={components:{VuexyLogo:a.a,BLink:r.a,BButton:i.a,BImg:s.a},data:function(){return{downImg:e(571)}},computed:{imgUrl:function(){return"dark"===c.a.state.appConfig.layout.skin?(this.downImg=e(572),this.downImg):this.downImg}}},l=(e(1237),e(0)),u=Object(l.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"misc-wrapper"},[e("b-link",{staticClass:"brand-logo"},[e("vuexy-logo"),t._v(" "),e("h2",{staticClass:"brand-text text-primary ml-1"},[t._v("\n        Vuexy\n      ")])],1),t._v(" "),e("div",{staticClass:"misc-inner p-2 p-sm-3"},[e("div",{staticClass:"w-100 text-center"},[e("h2",{staticClass:"mb-1"},[t._v("\n          Page Not Found 🕵🏻‍♀️\n        ")]),t._v(" "),e("p",{staticClass:"mb-2"},[t._v("\n          Oops! 😖 The requested URL was not found on this server.\n        ")]),t._v(" "),e("b-button",{staticClass:"mb-2 btn-sm-block",attrs:{variant:"primary",to:{path:"/"}}},[t._v("\n          Back to home\n        ")]),t._v(" "),e("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Error page"}})],1)])],1)}),[],!1,null,null,null);n.default=u.exports},223:function(t,n,e){"use strict";e.d(n,"b",(function(){return d})),e.d(n,"a",(function(){return h}));var r=e(8),i=e(47),s=e(5),a=e(2),c=e(22),o=e(35),l=e(7),u=e(21),g=e(1),m=e(27);function p(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var b='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',d=Object(g.d)({alt:Object(g.c)(a.u),blank:Object(g.c)(a.g,!1),blankColor:Object(g.c)(a.u,"transparent"),block:Object(g.c)(a.g,!1),center:Object(g.c)(a.g,!1),fluid:Object(g.c)(a.g,!1),fluidGrow:Object(g.c)(a.g,!1),height:Object(g.c)(a.p),left:Object(g.c)(a.g,!1),right:Object(g.c)(a.g,!1),rounded:Object(g.c)(a.j,!1),sizes:Object(g.c)(a.f),src:Object(g.c)(a.u),srcset:Object(g.c)(a.f),thumbnail:Object(g.c)(a.g,!1),width:Object(g.c)(a.p)},s.kb),h=Object(r.c)({name:s.kb,functional:!0,props:d,render:function(t,n){var e,r=n.props,s=n.data,a=r.alt,g=r.src,d=r.block,h=r.fluidGrow,f=r.rounded,w=Object(u.c)(r.width)||null,v=Object(u.c)(r.height)||null,j=null,O=Object(c.b)(r.srcset).filter(o.a).join(","),x=Object(c.b)(r.sizes).filter(o.a).join(",");return r.blank&&(!v&&w?v=w:!w&&v&&(w=v),w||v||(w=1,v=1),g=function(t,n,e){var r=encodeURIComponent(b.replace("%{w}",Object(m.g)(t)).replace("%{h}",Object(m.g)(n)).replace("%{f}",e));return"data:image/svg+xml;charset=UTF-8,".concat(r)}(w,v,r.blankColor||"transparent"),O=null,x=null),r.left?j="float-left":r.right?j="float-right":r.center&&(j="mx-auto",d=!0),t("img",Object(i.a)(s,{attrs:{src:g,alt:a,width:w?Object(m.g)(w):null,height:v?Object(m.g)(v):null,srcset:O||null,sizes:x||null},class:(e={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||h,"w-100":h,rounded:""===f||!0===f},p(e,"rounded-".concat(f),Object(l.n)(f)&&""!==f),p(e,j,j),p(e,"d-block",d),e)}))}})},53:function(t,n,e){"use strict";var r={components:{BImg:e(223).a},data:function(){return{sideImg:e(306)}},computed:{imgUrl:function(){return this.sideImg}}},i=e(0),s=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("b-img",{attrs:{src:this.imgUrl,height:"24",alt:"Logo"}})}),[],!1,null,null,null);n.a=s.exports},571:function(t,n){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/pages/error.svg"},572:function(t,n){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/pages/error-dark.svg"},645:function(t,n,e){var r=e(1238);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(23)(r,i);r.locals&&(t.exports=r.locals)}}]);