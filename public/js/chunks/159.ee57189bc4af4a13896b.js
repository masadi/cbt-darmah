(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{1860:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var c=n(48),r=n(5),o=n(2),a=n(23),i=n(67),s=n(35),l=n(205),u=n(13),b=n(1),O=n(27);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=["start","end","center"],p=Object(l.a)((function(t,e){return(e=Object(O.h)(Object(O.g)(e)))?Object(O.c)(["row-cols",t,e].filter(s.a).join("-")):null})),g=Object(l.a)((function(t){return Object(O.c)(t.replace("cols",""))})),v=[],y={name:r.Ob,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(i.b)().reduce((function(t,e){return t[Object(b.g)(e,"cols")]=Object(b.c)(o.p),t}),Object(u.c)(null)),v=Object(u.h)(t),Object(b.d)(Object(u.m)(d(d({},t),{},{alignContent:Object(b.c)(o.u,null,(function(t){return Object(a.a)(Object(a.b)(j,"between","around","stretch"),t)})),alignH:Object(b.c)(o.u,null,(function(t){return Object(a.a)(Object(a.b)(j,"between","around"),t)})),alignV:Object(b.c)(o.u,null,(function(t){return Object(a.a)(Object(a.b)(j,"baseline","stretch"),t)})),noGutters:Object(b.c)(o.g,!1),tag:Object(b.c)(o.u,"div")})),r.Ob)),this.props},render:function(t,e){var n,r=e.props,o=e.data,a=e.children,i=r.alignV,s=r.alignH,l=r.alignContent,u=[];return v.forEach((function(t){var e=p(g(t),r[t]);e&&u.push(e)})),u.push((h(n={"no-gutters":r.noGutters},"align-items-".concat(i),i),h(n,"justify-content-".concat(s),s),h(n,"align-content-".concat(l),l),n)),t(r.tag,Object(c.a)(o,{staticClass:"row",class:u}),a)}}},1861:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var c=n(8),r=n(48),o=n(5),a=n(2),i=n(1),s=Object(i.d)({textTag:Object(i.c)(a.u,"p")},o.u),l=Object(c.c)({name:o.u,functional:!0,props:s,render:function(t,e){var n=e.props,c=e.data,o=e.children;return t(n.textTag,Object(r.a)(c,{staticClass:"card-text"}),o)}})},1869:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var c=n(8),r=n(48),o=n(5),a=n(2),i=n(23),s=n(6),l=n(13),u=n(1),b=n(92),O=n(59);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=["a","router-link","button","b-link"],p=Object(l.j)(O.b,["event","routerTag"]);delete p.href.default,delete p.to.default;var g=Object(u.d)(Object(l.m)(d(d({},p),{},{action:Object(u.c)(a.g,!1),button:Object(u.c)(a.g,!1),tag:Object(u.c)(a.u,"div"),variant:Object(u.c)(a.u)})),o.tb),v=Object(c.c)({name:o.tb,functional:!0,props:g,render:function(t,e){var n,c=e.props,o=e.data,a=e.children,l=c.button,f=c.variant,d=c.active,g=c.disabled,v=Object(b.d)(c),y=l?"button":v?O.a:c.tag,m=!!(c.action||v||l||Object(i.a)(j,c.tag)),w={},S={};return Object(s.t)(y,"button")?(o.attrs&&o.attrs.type||(w.type="button"),c.disabled&&(w.disabled=!0)):S=Object(u.e)(p,c),t(y,Object(r.a)(o,{attrs:w,props:S,staticClass:"list-group-item",class:(n={},h(n,"list-group-item-".concat(f),f),h(n,"list-group-item-action",m),h(n,"active",d),h(n,"disabled",g),n)}),a)}})},1872:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var c=n(8),r=n(48),o=n(5),a=n(2),i=n(7),s=n(1);var l=Object(s.d)({flush:Object(s.c)(a.g,!1),horizontal:Object(s.c)(a.j,!1),tag:Object(s.c)(a.u,"div")},o.sb),u=Object(c.c)({name:o.sb,functional:!0,props:l,render:function(t,e){var n=e.props,c=e.data,o=e.children,a=""===n.horizontal||n.horizontal;a=!n.flush&&a;var s,l,u,b={staticClass:"list-group",class:(s={"list-group-flush":n.flush,"list-group-horizontal":!0===a},l="list-group-horizontal-".concat(a),u=Object(i.n)(a),l in s?Object.defineProperty(s,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[l]=u,s)};return t(n.tag,Object(r.a)(c,b),o)}})},1875:function(t,e,n){"use strict";n.d(e,"a",(function(){return G}));var c,r=n(8),o=n(5),a=n(30),i=n(12),s=n(26),l=n(2),u=n(19),b=n(6),O=n(17),f=n(50),d=n(13),h=n(1),j=n(55),p=n(31),g=n(82),v=n(28),y=n(54),m=n(180),w=n(131);function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function P(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){C(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=Object(O.d)(o.z,"request-state"),E=Object(O.d)(o.z,"toggle"),z=Object(O.e)(o.z,"state"),x=Object(O.e)(o.z,"sync-state"),T=Object(f.a)("visible",{type:l.g,defaultValue:!1,event:i.d}),_=T.mixin,D=T.props,$=T.prop,A=T.event,F=Object(h.d)(Object(d.m)(P(P(P({},p.b),D),{},{ariaLabel:Object(h.c)(l.u),ariaLabelledby:Object(h.c)(l.u),backdrop:Object(h.c)(l.g,!1),backdropVariant:Object(h.c)(l.u,"dark"),bgVariant:Object(h.c)(l.u,"light"),bodyClass:Object(h.c)(l.e),closeLabel:Object(h.c)(l.u),footerClass:Object(h.c)(l.e),footerTag:Object(h.c)(l.u,"footer"),headerClass:Object(h.c)(l.e),headerTag:Object(h.c)(l.u,"header"),lazy:Object(h.c)(l.g,!1),noCloseOnBackdrop:Object(h.c)(l.g,!1),noCloseOnEsc:Object(h.c)(l.g,!1),noCloseOnRouteChange:Object(h.c)(l.g,!1),noEnforceFocus:Object(h.c)(l.g,!1),noHeader:Object(h.c)(l.g,!1),noHeaderClose:Object(h.c)(l.g,!1),noSlide:Object(h.c)(l.g,!1),right:Object(h.c)(l.g,!1),shadow:Object(h.c)(l.j,!1),sidebarClass:Object(h.c)(l.e),tag:Object(h.c)(l.u,"div"),textVariant:Object(h.c)(l.u,"dark"),title:Object(h.c)(l.u),width:Object(h.c)(l.u),zIndex:Object(h.c)(l.p)})),o.Pb),L=function(t,e){if(e.noHeader)return t();var n=e.normalizeSlot(u.t,e.slotScope);if(!n){var c=function(t,e){var n=e.normalizeSlot(u.gb,e.slotScope)||e.title;return n?t("strong",{attrs:{id:e.safeId("__title__")}},[n]):t("span")}(t,e),r=function(t,e){if(e.noHeaderClose)return t();var n=e.closeLabel,c=e.textVariant,r=e.hide;return t(m.a,{props:{ariaLabel:n,textVariant:c},on:{click:r},ref:"close-button"},[e.normalizeSlot(u.u)||t(y.s)])}(t,e);n=e.right?[r,c]:[c,r]}return t(e.headerTag,{staticClass:"".concat("b-sidebar","-header"),class:e.headerClass,key:"header"},n)},V=function(t,e){return t("div",{staticClass:"".concat("b-sidebar","-body"),class:e.bodyClass,key:"body"},[e.normalizeSlot(u.i,e.slotScope)])},I=function(t,e){var n=e.normalizeSlot(u.s,e.slotScope);return n?t(e.footerTag,{staticClass:"".concat("b-sidebar","-footer"),class:e.footerClass,key:"footer"},[n]):t()},B=function(t,e){var n=L(t,e);return e.lazy&&!e.isOpen?n:[n,V(t,e),I(t,e)]},R=function(t,e){if(!e.backdrop)return t();var n=e.backdropVariant;return t("div",{directives:[{name:"show",value:e.localShow}],staticClass:"b-sidebar-backdrop",class:C({},"bg-".concat(n),n),on:{click:e.onBackdropClick}})},G=Object(r.c)({name:o.Pb,mixins:[j.a,p.a,_,g.a,v.a],inheritAttrs:!1,props:F,data:function(){var t=!!this[$];return{localShow:t,isOpen:t}},computed:{transitionProps:function(){return this.noSlide?{css:!0}:{css:!0,enterClass:"",enterActiveClass:"slide",enterToClass:"show",leaveClass:"show",leaveActiveClass:"slide",leaveToClass:""}},slotScope:function(){return{hide:this.hide,right:this.right,visible:this.localShow}},hasTitle:function(){var t=this.$scopedSlots,e=this.$slots;return!(this.noHeader||this.hasNormalizedSlot(u.t)||!this.normalizeSlot(u.gb,this.slotScope,t,e)&&!this.title)},titleId:function(){return this.hasTitle?this.safeId("__title__"):null},computedAttrs:function(){return P(P({},this.bvAttrs),{},{id:this.safeId(),tabindex:"-1",role:"dialog","aria-modal":this.backdrop?"true":"false","aria-hidden":this.localShow?null:"true","aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||this.titleId||null})}},watch:(c={},C(c,$,(function(t,e){t!==e&&(this.localShow=t)})),C(c,"localShow",(function(t,e){t!==e&&(this.emitState(t),this.$emit(A,t))})),C(c,"$route",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.noCloseOnRouteChange||t.fullPath===e.fullPath||this.hide()})),c),created:function(){this.$_returnFocusEl=null},mounted:function(){var t=this;this.listenOnRoot(E,this.handleToggle),this.listenOnRoot(k,this.handleSync),this.$nextTick((function(){t.emitState(t.localShow)}))},activated:function(){this.emitSync()},beforeDestroy:function(){this.localShow=!1,this.$_returnFocusEl=null},methods:{hide:function(){this.localShow=!1},emitState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.localShow;this.emitOnRoot(z,this.safeId(),t)},emitSync:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.localShow;this.emitOnRoot(x,this.safeId(),t)},handleToggle:function(t){t&&t===this.safeId()&&(this.localShow=!this.localShow)},handleSync:function(t){var e=this;t&&t===this.safeId()&&this.$nextTick((function(){e.emitSync(e.localShow)}))},onKeydown:function(t){var e=t.keyCode;!this.noCloseOnEsc&&e===s.f&&this.localShow&&this.hide()},onBackdropClick:function(){this.localShow&&!this.noCloseOnBackdrop&&this.hide()},onTopTrapFocus:function(){var t=Object(b.n)(this.$refs.content);this.enforceFocus(t.reverse()[0])},onBottomTrapFocus:function(){var t=Object(b.n)(this.$refs.content);this.enforceFocus(t[0])},onBeforeEnter:function(){this.$_returnFocusEl=Object(b.g)(a.i?[document.body]:[]),this.isOpen=!0},onAfterEnter:function(t){Object(b.f)(t,Object(b.g)())||this.enforceFocus(t),this.$emit(i.V)},onAfterLeave:function(){this.enforceFocus(this.$_returnFocusEl),this.$_returnFocusEl=null,this.isOpen=!1,this.$emit(i.w)},enforceFocus:function(t){this.noEnforceFocus||Object(b.d)(t)}},render:function(t){var e,n=this.bgVariant,c=this.width,r=this.textVariant,o=this.localShow,a=""===this.shadow||this.shadow,i=t(this.tag,{staticClass:"b-sidebar",class:[(e={shadow:!0===a},C(e,"shadow-".concat(a),a&&!0!==a),C(e,"".concat("b-sidebar","-right"),this.right),C(e,"bg-".concat(n),n),C(e,"text-".concat(r),r),e),this.sidebarClass],style:{width:c},attrs:this.computedAttrs,directives:[{name:"show",value:o}],ref:"content"},[B(t,this)]);i=t("transition",{props:this.transitionProps,on:{beforeEnter:this.onBeforeEnter,afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[i]);var s=t(w.a,{props:{noFade:this.noSlide}},[R(t,this)]),l=t(),u=t();return this.backdrop&&o&&(l=t("div",{attrs:{tabindex:"0"},on:{focus:this.onTopTrapFocus}}),u=t("div",{attrs:{tabindex:"0"},on:{focus:this.onBottomTrapFocus}})),t("div",{staticClass:"b-sidebar-outer",style:{zIndex:this.zIndex},attrs:{tabindex:"-1"},on:{keydown:this.onKeydown}},[l,i,u,s])}})},302:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var c=n(36),r=n.n(c),o=n(8),a=n(48),i=n(5),s=n(2),l=n(43),u=n(13),b=n(1),O=n(27),f=n(54),d=n(306);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=Object(u.j)(d.b,["content"]),v=Object(b.d)(Object(u.m)(j(j({},g),{},{icon:Object(b.c)(s.u)})),i.ib),y=Object(o.c)({name:i.ib,functional:!0,props:v,render:function(t,e){var n=e.data,c=e.props,o=e.parent,i=Object(O.e)(Object(O.h)(c.icon||"")).replace(l.p,"");return t(i&&function t(e,n){if(!e)return r.a.component(n);var c=(e.$options||{}).components;return c&&c[n]||t(e.$parent,n)}(o,"BIcon".concat(i))||f.a,Object(a.a)(n,{props:Object(b.e)(g,c)}))}})},349:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var c=n(48),r=n(5),o=n(2),a=n(43),i=n(23),s=n(67),l=n(35),u=n(7),b=n(205),O=n(13),f=n(1),d=n(27);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){p(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=["auto","start","end","center","baseline","stretch"],v=Object(b.a)((function(t,e,n){var c=t;if(!Object(u.p)(n)&&!1!==n)return e&&(c+="-".concat(e)),"col"!==t||""!==n&&!0!==n?(c+="-".concat(n),Object(d.c)(c)):Object(d.c)(c)})),y=Object(O.c)(null),m={name:r.y,functional:!0,get props(){return delete this.props,this.props=(t=Object(s.b)().filter(l.a),e=t.reduce((function(t,e){return t[e]=Object(f.c)(o.i),t}),Object(O.c)(null)),n=t.reduce((function(t,e){return t[Object(f.g)(e,"offset")]=Object(f.c)(o.p),t}),Object(O.c)(null)),c=t.reduce((function(t,e){return t[Object(f.g)(e,"order")]=Object(f.c)(o.p),t}),Object(O.c)(null)),y=Object(O.a)(Object(O.c)(null),{col:Object(O.h)(e),offset:Object(O.h)(n),order:Object(O.h)(c)}),Object(f.d)(Object(O.m)(j(j(j(j({},e),n),c),{},{alignSelf:Object(f.c)(o.u,null,(function(t){return Object(i.a)(g,t)})),col:Object(f.c)(o.g,!1),cols:Object(f.c)(o.p),offset:Object(f.c)(o.p),order:Object(f.c)(o.p),tag:Object(f.c)(o.u,"div")})),r.y));var t,e,n,c},render:function(t,e){var n,r=e.props,o=e.data,i=e.children,s=r.cols,l=r.offset,u=r.order,b=r.alignSelf,O=[];for(var f in y)for(var d=y[f],h=0;h<d.length;h++){var j=v(f,d[h].replace(f,""),r[d[h]]);j&&O.push(j)}var g=O.some((function(t){return a.e.test(t)}));return O.push((p(n={col:r.col||!g&&!s},"col-".concat(s),s),p(n,"offset-".concat(l),l),p(n,"order-".concat(u),u),p(n,"align-self-".concat(b),b),n)),t(r.tag,Object(c.a)(o,{class:O}),i)}}},536:function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"a",(function(){return C}));var c=n(8),r=n(5),o=n(12),a=n(2),i=n(19),s=n(7),l=n(22),u=n(13),b=n(1),O=n(92),f=n(28),d=n(302),h=n(54),j=n(89),p=n(59);function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,c)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=["sm",null,"lg"],w=function(t){return t=Object(s.n)(t)&&Object(s.i)(t)?Object(l.b)(t,0):t,Object(s.h)(t)?"".concat(t,"px"):t||null},S=Object(u.j)(p.b,["active","event","routerTag"]),P=Object(b.d)(Object(u.m)(v(v({},S),{},{alt:Object(b.c)(a.u,"avatar"),ariaLabel:Object(b.c)(a.u),badge:Object(b.c)(a.j,!1),badgeLeft:Object(b.c)(a.g,!1),badgeOffset:Object(b.c)(a.u),badgeTop:Object(b.c)(a.g,!1),badgeVariant:Object(b.c)(a.u,"primary"),button:Object(b.c)(a.g,!1),buttonType:Object(b.c)(a.u,"button"),icon:Object(b.c)(a.u),rounded:Object(b.c)(a.j,!1),size:Object(b.c)(a.p),square:Object(b.c)(a.g,!1),src:Object(b.c)(a.u),text:Object(b.c)(a.u),variant:Object(b.c)(a.u,"secondary")})),r.c),C=Object(c.c)({name:r.c,mixins:[f.a],inject:{getBvAvatarGroup:{default:function(){return function(){return null}}}},props:P,data:function(){return{localSrc:this.src||null}},computed:{bvAvatarGroup:function(){return this.getBvAvatarGroup()},computedSize:function(){var t=this.bvAvatarGroup;return w(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,n=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===n||(n||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===m.indexOf(t)?"calc(".concat(t," * ").concat(.4,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,n=e?e.overlapScale:0,c=t&&n?"calc(".concat(t," * -").concat(n,")"):null;return c?{marginLeft:c,marginRight:c}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,n=this.badgeLeft,c=this.badgeOffset||"0px";return{fontSize:-1===m.indexOf(t)?"calc(".concat(t," * ").concat(.4*.7," )"):null,top:e?c:null,bottom:e?null:c,left:n?c:null,right:n?null:c}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(o.y,t)},onClick:function(t){this.$emit(o.f,t)}},render:function(t){var e,n=this.computedVariant,c=this.disabled,r=this.computedRounded,o=this.icon,a=this.localSrc,s=this.text,l=this.fontStyle,u=this.marginStyle,f=this.computedSize,g=this.button,w=this.buttonType,P=this.badge,C=this.badgeVariant,k=this.badgeStyle,E=!g&&Object(O.d)(this),z=g?j.a:E?p.a:"span",x=this.alt,T=this.ariaLabel||null,_=null;this.hasNormalizedSlot()?_=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):a?(_=t("img",{style:n?{}:{width:"100%",height:"100%"},attrs:{src:a,alt:x},on:{error:this.onImgError}}),_=t("span",{staticClass:"b-avatar-img"},[_])):_=o?t(d.a,{props:{icon:o},attrs:{"aria-hidden":"true",alt:x}}):s?t("span",{staticClass:"b-avatar-text",style:l},[t("span",s)]):t(h.m,{attrs:{"aria-hidden":"true",alt:x}});var D=t(),$=this.hasNormalizedSlot(i.d);if(P||""===P||$){var A=!0===P?"":P;D=t("span",{staticClass:"b-avatar-badge",class:y({},"badge-".concat(C),C),style:k},[$?this.normalizeSlot(i.d):A])}return t(z,{staticClass:"b-avatar",class:(e={},y(e,"".concat("b-avatar","-").concat(f),f&&-1!==m.indexOf(f)),y(e,"badge-".concat(n),!g&&n),y(e,"rounded",!0===r),y(e,"rounded-".concat(r),r&&!0!==r),y(e,"disabled",c),e),style:v(v({},u),{},{width:f,height:f}),attrs:{"aria-label":T||null},props:g?{variant:n,disabled:c,type:w}:E?Object(b.e)(S,this):{},on:g||E?{click:this.onClick}:{}},[_,D])}})},564:function(t,e,n){"use strict";n.d(e,"a",(function(){return D}));var c=n(5),r=n(30),o=n(12),a=n(26),i=n(43),s=n(23),l=n(154),u=n(6),b=n(17),O=n(7),f=n(42),d=n(13),h=n(147),j="__BV_toggle",p="".concat(j,"_HANDLER__"),g="".concat(j,"_CLICK__"),v="".concat(j,"_STATE__"),y="".concat(j,"_TARGETS__"),m=Object(b.d)(c.z,"toggle"),w=Object(b.e)(c.z,"state"),S=Object(b.e)(c.z,"sync-state"),P=Object(b.d)(c.z,"request-state"),C=[a.e,a.l],k=function(t){return!Object(s.a)(["button","a"],t.tagName.toLowerCase())},E=function(t){var e=t[g];e&&(Object(b.a)(t,"click",e,o.eb),Object(b.a)(t,"keydown",e,o.eb)),t[g]=null},z=function(t,e){t[p]&&e&&Object(h.a)(e).$off([w,S],t[p]),t[p]=null},x=function(t,e){e?(Object(u.y)(t,"collapsed"),Object(u.b)(t,"not-collapsed"),Object(u.E)(t,"aria-expanded","true")):(Object(u.y)(t,"not-collapsed"),Object(u.b)(t,"collapsed"),Object(u.E)(t,"aria-expanded","false"))},T=function(t,e){t[e]=null,delete t[e]},_=function(t,e,n){if(r.i&&Object(l.a)(n,e)){k(t)&&(Object(u.o)(t,"role")||Object(u.E)(t,"role","button"),Object(u.o)(t,"tabindex")||Object(u.E)(t,"tabindex","0")),x(t,t[v]);var c=function(t,e){var n=t.modifiers,c=t.arg,r=t.value,o=Object(d.h)(n||{});if(r=Object(O.n)(r)?r.split(i.w):r,Object(u.t)(e.tagName,"a")){var a=Object(u.h)(e,"href")||"";i.m.test(a)&&o.push(a.replace(i.l,""))}return Object(s.b)(c,r).forEach((function(t){return Object(O.n)(t)&&o.push(t)})),o.filter((function(t,e,n){return t&&n.indexOf(t)===e}))}(e,t);c.length>0?(Object(u.E)(t,"aria-controls",c.join(" ")),Object(u.F)(t,"overflow-anchor","none")):(Object(u.x)(t,"aria-controls"),Object(u.A)(t,"overflow-anchor")),Object(u.B)((function(){!function(t,e){if(E(t),e){var n=function(n){"keydown"===n.type&&!Object(s.a)(C,n.keyCode)||Object(u.r)(t)||(t[y]||[]).forEach((function(t){Object(h.a)(e).$emit(m,t)}))};t[g]=n,Object(b.b)(t,"click",n,o.eb),k(t)&&Object(b.b)(t,"keydown",n,o.eb)}}(t,Object(l.a)(n,e))})),Object(f.a)(c,t[y])||(t[y]=c,c.forEach((function(t){Object(h.a)(Object(l.a)(n,e)).$emit(P,t)})))}},D={bind:function(t,e,n){t[v]=!1,t[y]=[],function(t,e){if(z(t,e),e){var n=function(e,n){Object(s.a)(t[y]||[],e)&&(t[v]=n,x(t,n))};t[p]=n,Object(h.a)(e).$on([w,S],n)}}(t,Object(l.a)(n,e)),_(t,e,n)},componentUpdated:_,updated:_,unbind:function(t,e,n){E(t),z(t,Object(l.a)(n,e)),T(t,p),T(t,g),T(t,v),T(t,y),Object(u.y)(t,"collapsed"),Object(u.y)(t,"not-collapsed"),Object(u.x)(t,"aria-expanded"),Object(u.x)(t,"aria-controls"),Object(u.x)(t,"role"),Object(u.A)(t,"overflow-anchor")}}}}]);