(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1269:function(t,e){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/pages/not-authorized.svg"},1270:function(t,e){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/pages/not-authorized-dark.svg"},1271:function(t,e,n){"use strict";n(660)},1272:function(t,e,n){(e=n(20)(!1)).push([t.i,".misc-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper .misc-inner {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n}\n[dir] .misc-wrapper .brand-logo {\n  margin: 0;\n}\n[dir=ltr] .misc-wrapper .brand-logo {\n  left: 2rem;\n}\n[dir=rtl] .misc-wrapper .brand-logo {\n  right: 2rem;\n}\n.misc-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n@media (max-height: 625px) {\n[dir] .misc-wrapper .misc-inner {\n    margin-top: 4rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 40.95px;\n}",""]),t.exports=e},1563:function(t,e,n){"use strict";n.r(e);var r=n(59),i=n(223),a=n(89),s=n(53),c=n(15),o=n(200),l={components:{BLink:r.a,BImg:i.a,BButton:a.a,VuexyLogo:s.a},data:function(){return{downImg:n(1269)}},computed:{imgUrl:function(){return"dark"===c.a.state.appConfig.layout.skin?(this.downImg=n(1270),this.downImg):this.downImg}},methods:{loginRoute:function(){var t=JSON.parse(localStorage.getItem("userData"));return Object(o.a)(t?t.role:null)}}},u=(n(1271),n(0)),g=Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"misc-wrapper"},[n("b-link",{staticClass:"brand-logo"},[n("vuexy-logo"),t._v(" "),n("h2",{staticClass:"brand-text text-primary ml-1"},[t._v("\n      Vuexy\n    ")])],1),t._v(" "),n("div",{staticClass:"misc-inner p-2 p-sm-3"},[n("div",{staticClass:"w-100 text-center"},[n("h2",{staticClass:"mb-1"},[t._v("\n        You are not authorized! 🔐\n      ")]),t._v(" "),n("p",{staticClass:"mb-2"},[t._v("\n        You don’t have permission to access this page. Go Home!!\n      ")]),t._v(" "),n("b-button",{staticClass:"mb-1 btn-sm-block",attrs:{variant:"primary",to:t.loginRoute()}},[t._v("Back to Home")]),t._v(" "),n("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Not authorized page"}})],1)])],1)}),[],!1,null,null,null);e.default=g.exports},223:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return h}));var r=n(8),i=n(47),a=n(5),s=n(2),c=n(22),o=n(35),l=n(7),u=n(21),g=n(1),m=n(27);function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var b='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',d=Object(g.d)({alt:Object(g.c)(s.u),blank:Object(g.c)(s.g,!1),blankColor:Object(g.c)(s.u,"transparent"),block:Object(g.c)(s.g,!1),center:Object(g.c)(s.g,!1),fluid:Object(g.c)(s.g,!1),fluidGrow:Object(g.c)(s.g,!1),height:Object(g.c)(s.p),left:Object(g.c)(s.g,!1),right:Object(g.c)(s.g,!1),rounded:Object(g.c)(s.j,!1),sizes:Object(g.c)(s.f),src:Object(g.c)(s.u),srcset:Object(g.c)(s.f),thumbnail:Object(g.c)(s.g,!1),width:Object(g.c)(s.p)},a.kb),h=Object(r.c)({name:a.kb,functional:!0,props:d,render:function(t,e){var n,r=e.props,a=e.data,s=r.alt,g=r.src,d=r.block,h=r.fluidGrow,f=r.rounded,w=Object(u.c)(r.width)||null,v=Object(u.c)(r.height)||null,j=null,O=Object(c.b)(r.srcset).filter(o.a).join(","),x=Object(c.b)(r.sizes).filter(o.a).join(",");return r.blank&&(!v&&w?v=w:!w&&v&&(w=v),w||v||(w=1,v=1),g=function(t,e,n){var r=encodeURIComponent(b.replace("%{w}",Object(m.g)(t)).replace("%{h}",Object(m.g)(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(r)}(w,v,r.blankColor||"transparent"),O=null,x=null),r.left?j="float-left":r.right?j="float-right":r.center&&(j="mx-auto",d=!0),t("img",Object(i.a)(a,{attrs:{src:g,alt:s,width:w?Object(m.g)(w):null,height:v?Object(m.g)(v):null,srcset:O||null,sizes:x||null},class:(n={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||h,"w-100":h,rounded:""===f||!0===f},p(n,"rounded-".concat(f),Object(l.n)(f)&&""!==f),p(n,j,j),p(n,"d-block",d),n)}))}})},53:function(t,e,n){"use strict";var r={components:{BImg:n(223).a},data:function(){return{sideImg:n(306)}},computed:{imgUrl:function(){return this.sideImg}}},i=n(0),a=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("b-img",{attrs:{src:this.imgUrl,height:"24",alt:"Logo"}})}),[],!1,null,null,null);e.a=a.exports},660:function(t,e,n){var r=n(1272);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(23)(r,i);r.locals&&(t.exports=r.locals)}}]);