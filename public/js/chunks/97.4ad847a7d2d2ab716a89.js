(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1060:function(t,e,n){var a=n(61),r=n(152),i=Math.floor,c=a("".charAt),o=a("".replace),s=a("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,a,p,d){var b=n+t.length,f=a.length,h=u;return void 0!==p&&(p=r(p),h=l),o(d,h,(function(r,o){var l;switch(c(o,0)){case"$":return"$";case"&":return t;case"`":return s(e,0,n);case"'":return s(e,b);case"<":l=p[s(o,1,-1)];break;default:var u=+o;if(0===u)return r;if(u>f){var d=i(u/10);return 0===d?r:d<=f?void 0===a[d-1]?c(o,1):a[d-1]+c(o,1):r}l=a[u-1]}return void 0===l?"":l}))}},1061:function(t,e,n){"use strict";n(530)},1062:function(t,e,n){(e=n(19)(!1)).push([t.i,".toastification-close-icon[data-v-5044ad47], .toastification-title[data-v-5044ad47] {\n  line-height: 26px;\n}\n.toastification-title[data-v-5044ad47] {\n  color: inherit;\n}",""]),t.exports=e},1245:function(t,e,n){"use strict";n(642)},1246:function(t,e,n){(e=n(19)(!1)).push([t.i,".misc-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper .misc-inner {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n}\n[dir] .misc-wrapper .brand-logo {\n  margin: 0;\n}\n[dir=ltr] .misc-wrapper .brand-logo {\n  left: 2rem;\n}\n[dir=rtl] .misc-wrapper .brand-logo {\n  right: 2rem;\n}\n.misc-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n@media (max-height: 625px) {\n[dir] .misc-wrapper .misc-inner {\n    margin-top: 4rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 40.95px;\n}",""]),t.exports=e},1641:function(t,e,n){"use strict";n.r(e);n(73),n(71),n(231),n(84);var a=n(59),r=n(227),i=n(93),c=n(53),o=n(15),s=n(176),l=n(33),u={components:{BLink:a.a,BImg:r.a,BButton:i.a,VuexyLogo:c.a},data:function(){return{downImg:n(573),app:o.a.state.appConfig.app}},computed:{imgUrl:function(){return"dark"===o.a.state.appConfig.layout.skin?(this.downImg=n(574),this.downImg):this.downImg}},methods:{loginRoute:function(){var t=JSON.parse(localStorage.getItem("userData"));return Object(s.a)(t?t.role:null)}},mounted:function(){var t=this;this.$http.post("/auth/login-by-token",{access_token:this.$route.query.access_token}).then((function(e){var n=e.data;n.user?(localStorage.setItem("accessToken",n.accessToken),localStorage.setItem("refreshToken",n.accessToken),localStorage.setItem("userData",JSON.stringify(n.user)),t.$ability.update(n.user.ability),t.$router.replace("/").then((function(){t.$toast({component:l.a,position:"bottom-center",props:{title:"Selamat Datang ".concat(n.user.name),icon:"CoffeeIcon",variant:"success",text:"Anda telah berhasil masuk sebagai ".concat(n.user.role,". Sekarang Anda dapat mulai berselancar di Aplikasi Simazah!")}})}))):t.$router.replace({name:"misc-not-authorized"})}))}},p=(n(1245),n(0)),d=Object(p.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"misc-wrapper"},[n("b-link",{staticClass:"brand-logo"},[n("vuexy-logo"),t._v(" "),n("h2",{staticClass:"brand-text text-primary ml-1"},[t._v("\n      "+t._s(t.app.name)+" Versi "+t._s(t.app.version)+"\n    ")])],1),t._v(" "),n("div",{staticClass:"misc-inner p-2 p-sm-3"},[n("div",{staticClass:"w-100 text-center"},[n("h2",{staticClass:"mb-1"},[t._v("\n        Proses Login 🔐\n      ")]),t._v(" "),n("p",{staticClass:"mb-2"},[t._v("\n        Silahkan tunggu beberapa saat. Anda akan dialihkan ke laman Beranda\n      ")]),t._v(" "),n("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Not authorized page"}})],1)])],1)}),[],!1,null,null,null);e.default=d.exports},227:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return g}));var a=n(8),r=n(47),i=n(5),c=n(2),o=n(23),s=n(35),l=n(7),u=n(22),p=n(1),d=n(27);function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',h=Object(p.d)({alt:Object(p.c)(c.u),blank:Object(p.c)(c.g,!1),blankColor:Object(p.c)(c.u,"transparent"),block:Object(p.c)(c.g,!1),center:Object(p.c)(c.g,!1),fluid:Object(p.c)(c.g,!1),fluidGrow:Object(p.c)(c.g,!1),height:Object(p.c)(c.p),left:Object(p.c)(c.g,!1),right:Object(p.c)(c.g,!1),rounded:Object(p.c)(c.j,!1),sizes:Object(p.c)(c.f),src:Object(p.c)(c.u),srcset:Object(p.c)(c.f),thumbnail:Object(p.c)(c.g,!1),width:Object(p.c)(c.p)},i.kb),g=Object(a.c)({name:i.kb,functional:!0,props:h,render:function(t,e){var n,a=e.props,i=e.data,c=a.alt,p=a.src,h=a.block,g=a.fluidGrow,m=a.rounded,v=Object(u.c)(a.width)||null,O=Object(u.c)(a.height)||null,j=null,y=Object(o.b)(a.srcset).filter(s.a).join(","),w=Object(o.b)(a.sizes).filter(s.a).join(",");return a.blank&&(!O&&v?O=v:!v&&O&&(v=O),v||O||(v=1,O=1),p=function(t,e,n){var a=encodeURIComponent(f.replace("%{w}",Object(d.g)(t)).replace("%{h}",Object(d.g)(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(a)}(v,O,a.blankColor||"transparent"),y=null,w=null),a.left?j="float-left":a.right?j="float-right":a.center&&(j="mx-auto",h=!0),t("img",Object(r.a)(i,{attrs:{src:p,alt:c,width:v?Object(d.g)(v):null,height:O?Object(d.g)(O):null,srcset:y||null,sizes:w||null},class:(n={"img-thumbnail":a.thumbnail,"img-fluid":a.fluid||g,"w-100":g,rounded:""===m||!0===m},b(n,"rounded-".concat(m),Object(l.n)(m)&&""!==m),b(n,j,j),b(n,"d-block",h),n)}))}})},231:function(t,e,n){"use strict";var a=n(356),r=n(120),i=n(61),c=n(351),o=n(60),s=n(119),l=n(87),u=n(229),p=n(230),d=n(306),b=n(99),f=n(169),h=n(438),g=n(305),m=n(1060),v=n(352),O=n(92)("replace"),j=Math.max,y=Math.min,w=i([].concat),x=i([].push),k=i("".indexOf),S=i("".slice),_="$0"==="a".replace(/./,"$0"),C=!!/./[O]&&""===/./[O]("a","$0");c("replace",(function(t,e,n){var i=C?"$":"$0";return[function(t,n){var a=f(this),i=u(t)?void 0:g(t,O);return i?r(i,t,a,n):r(e,b(a),t,n)},function(t,r){var c=s(this),o=b(t);if("string"==typeof r&&-1===k(r,i)&&-1===k(r,"$<")){var u=n(e,c,o,r);if(u.done)return u.value}var f=l(r);f||(r=b(r));var g=c.global;if(g){var O=c.unicode;c.lastIndex=0}for(var _=[];;){var C=v(c,o);if(null===C)break;if(x(_,C),!g)break;""===b(C[0])&&(c.lastIndex=h(o,d(c.lastIndex),O))}for(var $,z="",I=0,P=0;P<_.length;P++){for(var A=b((C=_[P])[0]),B=j(y(p(C.index),o.length),0),D=[],T=1;T<C.length;T++)x(D,void 0===($=C[T])?$:String($));var E=C.groups;if(f){var G=w([A],D,B,o);void 0!==E&&x(G,E);var L=b(a(r,void 0,G))}else L=m(A,o,B,D,E,r);B>=I&&(z+=S(o,I,B)+L,I=B+A.length)}return z+S(o,I)}]}),!!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!_||C)},304:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n(36),r=n.n(a),i=n(8),c=n(47),o=n(5),s=n(2),l=n(43),u=n(13),p=n(1),d=n(27),b=n(56),f=n(307);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=Object(u.j)(f.b,["content"]),O=Object(p.d)(Object(u.m)(g(g({},v),{},{icon:Object(p.c)(s.u)})),o.ib),j=Object(i.c)({name:o.ib,functional:!0,props:O,render:function(t,e){var n=e.data,a=e.props,i=e.parent,o=Object(d.e)(Object(d.h)(a.icon||"")).replace(l.p,"");return t(o&&function t(e,n){if(!e)return r.a.component(n);var a=(e.$options||{}).components;return a&&a[n]||t(e.$parent,n)}(i,"BIcon".concat(o))||b.a,Object(c.a)(n,{props:Object(p.e)(v,a)}))}})},33:function(t,e,n){"use strict";var a={components:{BAvatar:n(533).a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},r=(n(1061),n(0)),i=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toastification"},[n("div",{staticClass:"d-flex align-items-start"},[n("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[n("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),n("div",{staticClass:"d-flex flex-grow-1"},[n("div",[t.title?n("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?n("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),n("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():n("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"5044ad47",null);e.a=i.exports},53:function(t,e,n){"use strict";var a={components:{BImg:n(227).a},data:function(){return{sideImg:n(258)}},computed:{imgUrl:function(){return this.sideImg}}},r=n(0),i=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("b-img",{attrs:{src:this.imgUrl,height:"24",alt:"Logo"}})}),[],!1,null,null,null);e.a=i.exports},530:function(t,e,n){var a=n(1062);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(21)(a,r);a.locals&&(t.exports=a.locals)},533:function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"a",(function(){return S}));var a=n(8),r=n(5),i=n(12),c=n(2),o=n(20),s=n(7),l=n(22),u=n(13),p=n(1),d=n(96),b=n(28),f=n(304),h=n(56),g=n(93),m=n(59);function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=["sm",null,"lg"],w=function(t){return t=Object(s.n)(t)&&Object(s.i)(t)?Object(l.b)(t,0):t,Object(s.h)(t)?"".concat(t,"px"):t||null},x=Object(u.j)(m.b,["active","event","routerTag"]),k=Object(p.d)(Object(u.m)(O(O({},x),{},{alt:Object(p.c)(c.u,"avatar"),ariaLabel:Object(p.c)(c.u),badge:Object(p.c)(c.j,!1),badgeLeft:Object(p.c)(c.g,!1),badgeOffset:Object(p.c)(c.u),badgeTop:Object(p.c)(c.g,!1),badgeVariant:Object(p.c)(c.u,"primary"),button:Object(p.c)(c.g,!1),buttonType:Object(p.c)(c.u,"button"),icon:Object(p.c)(c.u),rounded:Object(p.c)(c.j,!1),size:Object(p.c)(c.p),square:Object(p.c)(c.g,!1),src:Object(p.c)(c.u),text:Object(p.c)(c.u),variant:Object(p.c)(c.u,"secondary")})),r.c),S=Object(a.c)({name:r.c,mixins:[b.a],inject:{getBvAvatarGroup:{default:function(){return function(){return null}}}},props:k,data:function(){return{localSrc:this.src||null}},computed:{bvAvatarGroup:function(){return this.getBvAvatarGroup()},computedSize:function(){var t=this.bvAvatarGroup;return w(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,n=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===n||(n||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===y.indexOf(t)?"calc(".concat(t," * ").concat(.4,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,n=e?e.overlapScale:0,a=t&&n?"calc(".concat(t," * -").concat(n,")"):null;return a?{marginLeft:a,marginRight:a}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,n=this.badgeLeft,a=this.badgeOffset||"0px";return{fontSize:-1===y.indexOf(t)?"calc(".concat(t," * ").concat(.4*.7," )"):null,top:e?a:null,bottom:e?null:a,left:n?a:null,right:n?null:a}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(i.y,t)},onClick:function(t){this.$emit(i.f,t)}},render:function(t){var e,n=this.computedVariant,a=this.disabled,r=this.computedRounded,i=this.icon,c=this.localSrc,s=this.text,l=this.fontStyle,u=this.marginStyle,b=this.computedSize,v=this.button,w=this.buttonType,k=this.badge,S=this.badgeVariant,_=this.badgeStyle,C=!v&&Object(d.d)(this),$=v?g.a:C?m.a:"span",z=this.alt,I=this.ariaLabel||null,P=null;this.hasNormalizedSlot()?P=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):c?(P=t("img",{style:n?{}:{width:"100%",height:"100%"},attrs:{src:c,alt:z},on:{error:this.onImgError}}),P=t("span",{staticClass:"b-avatar-img"},[P])):P=i?t(f.a,{props:{icon:i},attrs:{"aria-hidden":"true",alt:z}}):s?t("span",{staticClass:"b-avatar-text",style:l},[t("span",s)]):t(h.m,{attrs:{"aria-hidden":"true",alt:z}});var A=t(),B=this.hasNormalizedSlot(o.d);if(k||""===k||B){var D=!0===k?"":k;A=t("span",{staticClass:"b-avatar-badge",class:j({},"badge-".concat(S),S),style:_},[B?this.normalizeSlot(o.d):D])}return t($,{staticClass:"b-avatar",class:(e={},j(e,"".concat("b-avatar","-").concat(b),b&&-1!==y.indexOf(b)),j(e,"badge-".concat(n),!v&&n),j(e,"rounded",!0===r),j(e,"rounded-".concat(r),r&&!0!==r),j(e,"disabled",a),e),style:O(O({},u),{},{width:b,height:b}),attrs:{"aria-label":I||null},props:v?{variant:n,disabled:a,type:w}:C?Object(p.e)(x,this):{},on:v||C?{click:this.onClick}:{}},[P,A])}})},573:function(t,e){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/pages/not-authorized.svg"},574:function(t,e){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/pages/not-authorized-dark.svg"},642:function(t,e,n){var a=n(1246);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(21)(a,r);a.locals&&(t.exports=a.locals)}}]);