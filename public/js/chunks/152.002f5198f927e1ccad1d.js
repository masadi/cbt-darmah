(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{1687:function(t,e,r){"use strict";r.r(e);var c=r(1981),n=r(384),a=r(381),o=r(382),i=r(257),b=r(17),s={components:{BCard:c.a,BCardHeader:n.a,BCardTitle:a.a,BCardBody:o.a,BImg:i.a},data:function(){return{downImg:r(751)}},computed:{imgUrl:function(){return"dark"===b.a.state.appConfig.layout.skin?(this.downImg=r(752),this.downImg):this.downImg}}},u=r(0),l=Object(u.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-card",{attrs:{"no-body":""}},[e("b-card-body",[e("b-card-title",{staticClass:"text-center"},[this._v("Sedang dalam pengembangan")]),this._v(" "),e("b-img",{attrs:{fluid:"",center:"",src:this.imgUrl,alt:"Coming soon page"}})],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports},1981:function(t,e,r){"use strict";r.d(e,"a",(function(){return k}));var c=r(8),n=r(56),a=r(5),o=r(2),i=r(24),b=r(57),s=r(85),u=r(13),l=r(1),O=r(232),f=r(382),d=r(384),j=r(385),p=r(257);function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y=Object(l.d)(Object(u.m)(m(m({},Object(u.k)(p.b,["src","alt","width","height","left","right"])),{},{bottom:Object(l.c)(o.g,!1),end:Object(l.c)(o.g,!1),start:Object(l.c)(o.g,!1),top:Object(l.c)(o.g,!1)})),a.s),v=Object(c.c)({name:a.s,functional:!0,props:y,render:function(t,e){var r=e.props,c=e.data,a=r.src,o=r.alt,i=r.width,b=r.height,s="card-img";return r.top?s+="-top":r.right||r.end?s+="-right":r.bottom?s+="-bottom":(r.left||r.start)&&(s+="-left"),t("img",Object(n.a)(c,{class:s,attrs:{src:a,alt:o,width:i,height:b}}))}});function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var C=Object(l.a)(y,l.f.bind(null,"img"));C.imgSrc.required=!1;var T=Object(l.d)(Object(u.m)(P(P(P(P(P(P({},f.b),d.b),j.b),C),O.a),{},{align:Object(l.c)(o.u),noBody:Object(l.c)(o.g,!1)})),a.n),k=Object(c.c)({name:a.n,functional:!0,props:T,render:function(t,e){var r,c=e.props,a=e.data,o=e.slots,u=e.scopedSlots,O=c.imgSrc,p=c.imgLeft,g=c.imgRight,m=c.imgStart,h=c.imgEnd,y=c.imgBottom,w=c.header,P=c.headerHtml,T=c.footer,k=c.footerHtml,D=c.align,V=c.textVariant,B=c.bgVariant,S=c.borderVariant,E=u||{},_=o(),H={},I=t(),z=t();if(O){var U=t(v,{props:Object(l.e)(C,c,l.h.bind(null,"img"))});y?z=U:I=U}var R=t(),G=Object(s.a)(i.t,E,_);(G||w||P)&&(R=t(d.a,{props:Object(l.e)(d.b,c),domProps:G?{}:Object(b.a)(P,w)},Object(s.b)(i.t,H,E,_)));var J=Object(s.b)(i.i,H,E,_);c.noBody||(J=t(f.a,{props:Object(l.e)(f.b,c)},J),c.overlay&&O&&(J=t("div",{staticClass:"position-relative"},[I,J,z]),I=t(),z=t()));var q=t();return(Object(s.a)(i.s,E,_)||T||k)&&(q=t(j.a,{props:Object(l.e)(j.b,c),domProps:G?{}:Object(b.a)(k,T)},Object(s.b)(i.s,H,E,_))),t(c.tag,Object(n.a)(a,{staticClass:"card",class:(r={"flex-row":p||m,"flex-row-reverse":(g||h)&&!(p||m)},x(r,"text-".concat(D),D),x(r,"bg-".concat(B),B),x(r,"border-".concat(S),S),x(r,"text-".concat(V),V),r)}),[I,R,J,q,z])}})},232:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var c=r(8),n=r(5),a=r(2),o=r(1),i=Object(o.d)({bgVariant:Object(o.c)(a.u),borderVariant:Object(o.c)(a.u),tag:Object(o.c)(a.u,"div"),textVariant:Object(o.c)(a.u)},n.n);Object(c.c)({props:i})},257:function(t,e,r){"use strict";r.d(e,"b",(function(){return j})),r.d(e,"a",(function(){return p}));var c=r(8),n=r(56),a=r(5),o=r(2),i=r(27),b=r(39),s=r(7),u=r(26),l=r(1),O=r(31);function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',j=Object(l.d)({alt:Object(l.c)(o.u),blank:Object(l.c)(o.g,!1),blankColor:Object(l.c)(o.u,"transparent"),block:Object(l.c)(o.g,!1),center:Object(l.c)(o.g,!1),fluid:Object(l.c)(o.g,!1),fluidGrow:Object(l.c)(o.g,!1),height:Object(l.c)(o.p),left:Object(l.c)(o.g,!1),right:Object(l.c)(o.g,!1),rounded:Object(l.c)(o.j,!1),sizes:Object(l.c)(o.f),src:Object(l.c)(o.u),srcset:Object(l.c)(o.f),thumbnail:Object(l.c)(o.g,!1),width:Object(l.c)(o.p)},a.kb),p=Object(c.c)({name:a.kb,functional:!0,props:j,render:function(t,e){var r,c=e.props,a=e.data,o=c.alt,l=c.src,j=c.block,p=c.fluidGrow,g=c.rounded,m=Object(u.c)(c.width)||null,h=Object(u.c)(c.height)||null,y=null,v=Object(i.b)(c.srcset).filter(b.a).join(","),w=Object(i.b)(c.sizes).filter(b.a).join(",");return c.blank&&(!h&&m?h=m:!m&&h&&(m=h),m||h||(m=1,h=1),l=function(t,e,r){var c=encodeURIComponent(d.replace("%{w}",Object(O.g)(t)).replace("%{h}",Object(O.g)(e)).replace("%{f}",r));return"data:image/svg+xml;charset=UTF-8,".concat(c)}(m,h,c.blankColor||"transparent"),v=null,w=null),c.left?y="float-left":c.right?y="float-right":c.center&&(y="mx-auto",j=!0),t("img",Object(n.a)(a,{attrs:{src:l,alt:o,width:m?Object(O.g)(m):null,height:h?Object(O.g)(h):null,srcset:v||null,sizes:w||null},class:(r={"img-thumbnail":c.thumbnail,"img-fluid":c.fluid||p,"w-100":p,rounded:""===g||!0===g},f(r,"rounded-".concat(g),Object(s.n)(g)&&""!==g),f(r,y,y),f(r,"d-block",j),r)}))}})},381:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return u}));var c=r(8),n=r(56),a=r(5),o=r(2),i=r(1),b=r(31),s=Object(i.d)({title:Object(i.c)(o.u),titleTag:Object(i.c)(o.u,"h4")},a.v),u=Object(c.c)({name:a.v,functional:!0,props:s,render:function(t,e){var r=e.props,c=e.data,a=e.children;return t(r.titleTag,Object(n.a)(c,{staticClass:"card-title"}),a||Object(b.g)(r.title))}})},382:function(t,e,r){"use strict";r.d(e,"b",(function(){return j})),r.d(e,"a",(function(){return p}));var c=r(8),n=r(56),a=r(5),o=r(2),i=r(13),b=r(1),s=r(232),u=r(381),l=r(383);function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j=Object(b.d)(Object(i.m)(f(f(f(f({},u.b),l.b),Object(b.a)(s.a,b.f.bind(null,"body"))),{},{bodyClass:Object(b.c)(o.e),overlay:Object(b.c)(o.g,!1)})),a.o),p=Object(c.c)({name:a.o,functional:!0,props:j,render:function(t,e){var r,c=e.props,a=e.data,o=e.children,i=c.bodyBgVariant,s=c.bodyBorderVariant,O=c.bodyTextVariant,f=t();c.title&&(f=t(u.a,{props:Object(b.e)(u.b,c)}));var j=t();return c.subTitle&&(j=t(l.a,{props:Object(b.e)(l.b,c),class:["mb-2"]})),t(c.bodyTag,Object(n.a)(a,{staticClass:"card-body",class:[(r={"card-img-overlay":c.overlay},d(r,"bg-".concat(i),i),d(r,"border-".concat(s),s),d(r,"text-".concat(O),O),r),c.bodyClass]}),[f,j,o])}})},383:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return u}));var c=r(8),n=r(56),a=r(5),o=r(2),i=r(1),b=r(31),s=Object(i.d)({subTitle:Object(i.c)(o.u),subTitleTag:Object(i.c)(o.u,"h6"),subTitleTextVariant:Object(i.c)(o.u,"muted")},a.t),u=Object(c.c)({name:a.t,functional:!0,props:s,render:function(t,e){var r=e.props,c=e.data,a=e.children;return t(r.subTitleTag,Object(n.a)(c,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),a||Object(b.g)(r.subTitle))}})},384:function(t,e,r){"use strict";r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return j}));var c=r(8),n=r(56),a=r(5),o=r(2),i=r(57),b=r(13),s=r(1),u=r(232);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=Object(s.d)(Object(b.m)(O(O({},Object(s.a)(u.a,s.f.bind(null,"header"))),{},{header:Object(s.c)(o.u),headerClass:Object(s.c)(o.e),headerHtml:Object(s.c)(o.u)})),a.r),j=Object(c.c)({name:a.r,functional:!0,props:d,render:function(t,e){var r,c=e.props,a=e.data,o=e.children,b=c.headerBgVariant,s=c.headerBorderVariant,u=c.headerTextVariant;return t(c.headerTag,Object(n.a)(a,{staticClass:"card-header",class:[c.headerClass,(r={},f(r,"bg-".concat(b),b),f(r,"border-".concat(s),s),f(r,"text-".concat(u),u),r)],domProps:o?{}:Object(i.a)(c.headerHtml,c.header)}),o)}})},385:function(t,e,r){"use strict";r.d(e,"b",(function(){return d})),r.d(e,"a",(function(){return j}));var c=r(8),n=r(56),a=r(5),o=r(2),i=r(57),b=r(13),s=r(1),u=r(232);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,c)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=Object(s.d)(Object(b.m)(O(O({},Object(s.a)(u.a,s.f.bind(null,"footer"))),{},{footer:Object(s.c)(o.u),footerClass:Object(s.c)(o.e),footerHtml:Object(s.c)(o.u)})),a.p),j=Object(c.c)({name:a.p,functional:!0,props:d,render:function(t,e){var r,c=e.props,a=e.data,o=e.children,b=c.footerBgVariant,s=c.footerBorderVariant,u=c.footerTextVariant;return t(c.footerTag,Object(n.a)(a,{staticClass:"card-footer",class:[c.footerClass,(r={},f(r,"bg-".concat(b),b),f(r,"border-".concat(s),s),f(r,"text-".concat(u),u),r)],domProps:o?{}:Object(i.a)(c.footerHtml,c.footer)}),o)}})},751:function(t,e){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/pages/coming-soon.svg"},752:function(t,e){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/pages/coming-soon-dark.svg"}}]);