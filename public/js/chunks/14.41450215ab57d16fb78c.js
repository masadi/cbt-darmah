(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{214:function(t,n,e){"use strict";var r={components:{BImg:e(310).a},data:function(){return{sideImg:e(255)}},computed:{imgUrl:function(){return this.sideImg}}},a=e(13),i=Object(a.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("b-img",{attrs:{src:this.imgUrl,height:"24",alt:"Logo"}})}),[],!1,null,null,null);n.a=i.exports},310:function(t,n,e){"use strict";e.d(n,"b",(function(){return b})),e.d(n,"a",(function(){return h}));var r=e(5),a=e(41),i=e(6),s=e(1),c=e(14),l=e(22),o=e(4),u=e(16),m=e(0),p=e(15);function g(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var d='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',b=Object(m.d)({alt:Object(m.c)(s.r),blank:Object(m.c)(s.g,!1),blankColor:Object(m.c)(s.r,"transparent"),block:Object(m.c)(s.g,!1),center:Object(m.c)(s.g,!1),fluid:Object(m.c)(s.g,!1),fluidGrow:Object(m.c)(s.g,!1),height:Object(m.c)(s.m),left:Object(m.c)(s.g,!1),right:Object(m.c)(s.g,!1),rounded:Object(m.c)(s.j,!1),sizes:Object(m.c)(s.f),src:Object(m.c)(s.r),srcset:Object(m.c)(s.f),thumbnail:Object(m.c)(s.g,!1),width:Object(m.c)(s.m)},i.J),h=Object(r.c)({name:i.J,functional:!0,props:b,render:function(t,n){var e,r=n.props,i=n.data,s=r.alt,m=r.src,b=r.block,h=r.fluidGrow,f=r.rounded,w=Object(u.b)(r.width)||null,v=Object(u.b)(r.height)||null,j=null,O=Object(c.b)(r.srcset).filter(l.a).join(","),x=Object(c.b)(r.sizes).filter(l.a).join(",");return r.blank&&(!v&&w?v=w:!w&&v&&(w=v),w||v||(w=1,v=1),m=function(t,n,e){var r=encodeURIComponent(d.replace("%{w}",Object(p.g)(t)).replace("%{h}",Object(p.g)(n)).replace("%{f}",e));return"data:image/svg+xml;charset=UTF-8,".concat(r)}(w,v,r.blankColor||"transparent"),O=null,x=null),r.left?j="float-left":r.right?j="float-right":r.center&&(j="mx-auto",b=!0),t("img",Object(a.a)(i,{attrs:{src:m,alt:s,width:w?Object(p.g)(w):null,height:v?Object(p.g)(v):null,srcset:O||null,sizes:x||null},class:(e={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||h,"w-100":h,rounded:""===f||!0===f},g(e,"rounded-".concat(f),Object(o.m)(f)&&""!==f),g(e,j,j),g(e,"d-block",b),e)}))}})},323:function(t,n,e){var r=e(508);"string"==typeof r&&(r=[[t.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(42)(r,a);r.locals&&(t.exports=r.locals)},505:function(t,n){t.exports="/images/_/_/_/_/cbt-darmah/resources/js/src/assets/images/pages/error.svg"},506:function(t,n){t.exports="/images/_/_/_/_/cbt-darmah/resources/js/src/assets/images/pages/error-dark.svg"},507:function(t,n,e){"use strict";e(323)},508:function(t,n,e){(n=e(39)(!1)).push([t.i,".misc-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper .misc-inner {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n}\n[dir] .misc-wrapper .brand-logo {\n  margin: 0;\n}\n[dir=ltr] .misc-wrapper .brand-logo {\n  left: 2rem;\n}\n[dir=rtl] .misc-wrapper .brand-logo {\n  right: 2rem;\n}\n.misc-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n@media (max-height: 625px) {\n[dir] .misc-wrapper .misc-inner {\n    margin-top: 4rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 40.95px;\n}",""]),t.exports=n},538:function(t,n,e){"use strict";e.r(n);var r=e(43),a=e(120),i=e(310),s=e(214),c=e(20),l={components:{VuexyLogo:s.a,BLink:r.a,BButton:a.a,BImg:i.a},data:function(){return{downImg:e(505),app:c.a.state.appConfig.app}},computed:{imgUrl:function(){return"dark"===c.a.state.appConfig.layout.skin?(this.downImg=e(506),this.downImg):this.downImg}}},o=(e(507),e(13)),u=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"misc-wrapper"},[e("b-link",{staticClass:"brand-logo"},[e("vuexy-logo"),t._v(" "),e("h2",{staticClass:"brand-text text-primary ml-1"},[t._v("\n        "+t._s(t.app.name)+" Versi "+t._s(t.app.version)+"\n      ")])],1),t._v(" "),e("div",{staticClass:"misc-inner p-2 p-sm-3"},[e("div",{staticClass:"w-100 text-center"},[e("h2",{staticClass:"mb-1"},[t._v("\n          Halaman tidak ditemukan 🕵🏻‍♀️\n        ")]),t._v(" "),e("p",{staticClass:"mb-2"},[t._v("\n          Oops! 😖 Alamat yang diminta tidak ditemukan di aplikasi ini.\n        ")]),t._v(" "),e("b-button",{staticClass:"mb-2 btn-sm-block",attrs:{variant:"primary",to:{path:"/"}}},[t._v("\n          Kembali ke Beranda\n        ")]),t._v(" "),e("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Error page"}})],1)])],1)}),[],!1,null,null,null);n.default=u.exports}}]);