(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{135:function(t,e,n){"use strict";n(52);var i=n(1838),a={props:{accordion:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},type:{type:String,default:"default"}},data:function(){return{collapseID:""}},computed:{collapseClasses:function(){var t=[];return t.push({default:"collapse-default",border:"collapse-border",shadow:"collapse-shadow",margin:"collapse-margin"}[this.type]),t}},created:function(){this.collapseID=Object(i.a)()}},r=n(0),o=Object(r.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"collapse-icon",class:this.collapseClasses,attrs:{role:"tablist"}},[this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},136:function(t,e,n){"use strict";var i=n(1811),a=n(340),r=n(338),o=n(1825),s=n(1838),c={components:{BCard:i.a,BCardHeader:a.a,BCardBody:r.a,BCollapse:o.a},props:{isVisible:{type:Boolean,default:!1},title:{type:String,required:!0}},data:function(){return{visible:!1,collapseItemID:"",openOnHover:this.$parent.hover}},computed:{accordion:function(){return this.$parent.accordion?"accordion-".concat(this.$parent.collapseID):null}},created:function(){this.collapseItemID=Object(s.a)(),this.visible=this.isVisible},methods:{updateVisible:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.visible=t,this.$emit("visible",t)},collapseOpen:function(){this.openOnHover&&this.updateVisible(!0)},collapseClose:function(){this.openOnHover&&this.updateVisible(!1)}}},l=n(0),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{class:{open:t.visible},attrs:{"no-body":""},on:{mouseenter:t.collapseOpen,mouseleave:t.collapseClose}},[n("b-card-header",{class:{collapsed:!t.visible},attrs:{"aria-expanded":t.visible?"true":"false","aria-controls":t.collapseItemID,role:"tab","data-toggle":"collapse"},on:{click:function(e){return t.updateVisible(!t.visible)}}},[t._t("header",[n("span",{staticClass:"lead collapse-title"},[t._v(t._s(t.title))])])],2),t._v(" "),n("b-collapse",{attrs:{id:t.collapseItemID,accordion:t.accordion,role:"tabpanel"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("b-card-body",[t._t("default")],2)],1)],1)}),[],!1,null,null,null);e.a=u.exports},1825:function(t,e,n){"use strict";n.d(e,"a",(function(){return B}));var i,a=n(8),r=n(5),o=n(30),s=n(12),c=n(2),l=n(19),u=n(6),h=n(17),p=n(49),b=n(13),d=n(1),f=n(31),v=n(82),O=n(28),j=n(47),g={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},m={enter:function(t){Object(u.F)(t,"height",0),Object(u.B)((function(){Object(u.w)(t),Object(u.F)(t,"height","".concat(t.scrollHeight,"px"))}))},afterEnter:function(t){Object(u.A)(t,"height")},leave:function(t){Object(u.F)(t,"height","auto"),Object(u.F)(t,"display","block"),Object(u.F)(t,"height","".concat(Object(u.i)(t).height,"px")),Object(u.w)(t),Object(u.F)(t,"height",0)},afterLeave:function(t){Object(u.A)(t,"height")}},y={appear:Object(d.c)(c.g,!1)},w=Object(a.c)({name:r.A,functional:!0,props:y,render:function(t,e){var n=e.props,i=e.data,a=e.children;return t("transition",Object(j.a)(i,{props:g,on:m},{props:n}),a)}});function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){C(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function C(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var z=Object(h.d)(r.z,"toggle"),E=Object(h.d)(r.z,"request-state"),P=Object(h.e)(r.z,"accordion"),D=Object(h.e)(r.z,"state"),x=Object(h.e)(r.z,"sync-state"),I=Object(p.a)("visible",{type:c.g,defaultValue:!1}),$=I.mixin,A=I.props,R=I.prop,_=I.event,V=Object(d.d)(Object(b.m)(k(k(k({},f.b),A),{},{accordion:Object(d.c)(c.u),appear:Object(d.c)(c.g,!1),isNav:Object(d.c)(c.g,!1),tag:Object(d.c)(c.u,"div")})),r.z),B=Object(a.c)({name:r.z,mixins:[f.a,$,O.a,v.a],props:V,data:function(){return{show:this[R],transitioning:!1}},computed:{classObject:function(){var t=this.transitioning;return{"navbar-collapse":this.isNav,collapse:!t,show:this.show&&!t}},slotScope:function(){var t=this;return{visible:this.show,close:function(){t.show=!1}}}},watch:(i={},C(i,R,(function(t){t!==this.show&&(this.show=t)})),C(i,"show",(function(t,e){t!==e&&this.emitState()})),i),created:function(){this.show=this[R]},mounted:function(){var t=this;this.show=this[R],this.listenOnRoot(z,this.handleToggleEvent),this.listenOnRoot(P,this.handleAccordionEvent),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(E,(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&o.i&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){Object(h.c)(t,window,"resize",this.handleResize,s.db),Object(h.c)(t,window,"orientationchange",this.handleResize,s.db)},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit(s.U)},onAfterEnter:function(){this.transitioning=!1,this.$emit(s.V)},onLeave:function(){this.transitioning=!0,this.$emit(s.x)},onAfterLeave:function(){this.transitioning=!1,this.$emit(s.w)},emitState:function(){var t=this.show,e=this.accordion,n=this.safeId();this.$emit(_,t),this.emitOnRoot(D,n,t),e&&t&&this.emitOnRoot(P,n,e)},emitSync:function(){this.emitOnRoot(x,this.safeId(),this.show)},checkDisplayBlock:function(){var t=this.$el,e=Object(u.p)(t,"show");Object(u.y)(t,"show");var n="block"===Object(u.k)(t).display;return e&&Object(u.b)(t,"show"),n},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===Object(u.k)(this.$el).display&&(!Object(u.v)(e,".nav-link,.dropdown-item")&&!Object(u.e)(".nav-link,.dropdown-item",e)||this.checkDisplayBlock()||(this.show=!1))},handleToggleEvent:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvent:function(t,e){var n=this.accordion,i=this.show;if(n&&n===e){var a=t===this.safeId();(a&&!i||!a&&i)&&this.toggle()}},handleResize:function(){this.show="block"===Object(u.k)(this.$el).display}},render:function(t){var e=this.appear,n=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},this.normalizeSlot(l.i,this.slotScope));return t(w,{props:{appear:e},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[n])}})},1838:function(t,e,n){"use strict";var i,a=new Uint8Array(16);function r(){if(!i&&!(i="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(a)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=function(t){return"string"==typeof t&&o.test(t)},c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));var u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n};e.a=function(t,e,n){var i=(t=t||{}).random||(t.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,e){n=n||0;for(var a=0;a<16;++a)e[n+a]=i[a];return e}return u(i)}},297:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var i=n(36),a=n.n(i),r=n(8),o=n(47),s=n(5),c=n(2),l=n(43),u=n(13),h=n(1),p=n(27),b=n(55),d=n(299);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=Object(u.j)(d.b,["content"]),g=Object(h.d)(Object(u.m)(v(v({},j),{},{icon:Object(h.c)(c.u)})),s.ib),m=Object(r.c)({name:s.ib,functional:!0,props:g,render:function(t,e){var n=e.data,i=e.props,r=e.parent,s=Object(p.e)(Object(p.h)(i.icon||"")).replace(l.p,"");return t(s&&function t(e,n){if(!e)return a.a.component(n);var i=(e.$options||{}).components;return i&&i[n]||t(e.$parent,n)}(r,"BIcon".concat(s))||b.a,Object(o.a)(n,{props:Object(h.e)(j,i)}))}})},358:function(t,e){t.exports="/images/_/_/_/_/dashboard-2022/resources/js/src/assets/images/banner/banner.png"},534:function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"a",(function(){return C}));var i=n(8),a=n(5),r=n(12),o=n(2),s=n(19),c=n(7),l=n(21),u=n(13),h=n(1),p=n(91),b=n(28),d=n(297),f=n(55),v=n(89),O=n(59);function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=["sm",null,"lg"],w=function(t){return t=Object(c.n)(t)&&Object(c.i)(t)?Object(l.b)(t,0):t,Object(c.h)(t)?"".concat(t,"px"):t||null},S=Object(u.j)(O.b,["active","event","routerTag"]),k=Object(h.d)(Object(u.m)(g(g({},S),{},{alt:Object(h.c)(o.u,"avatar"),ariaLabel:Object(h.c)(o.u),badge:Object(h.c)(o.j,!1),badgeLeft:Object(h.c)(o.g,!1),badgeOffset:Object(h.c)(o.u),badgeTop:Object(h.c)(o.g,!1),badgeVariant:Object(h.c)(o.u,"primary"),button:Object(h.c)(o.g,!1),buttonType:Object(h.c)(o.u,"button"),icon:Object(h.c)(o.u),rounded:Object(h.c)(o.j,!1),size:Object(h.c)(o.p),square:Object(h.c)(o.g,!1),src:Object(h.c)(o.u),text:Object(h.c)(o.u),variant:Object(h.c)(o.u,"secondary")})),a.c),C=Object(i.c)({name:a.c,mixins:[b.a],inject:{getBvAvatarGroup:{default:function(){return function(){return null}}}},props:k,data:function(){return{localSrc:this.src||null}},computed:{bvAvatarGroup:function(){return this.getBvAvatarGroup()},computedSize:function(){var t=this.bvAvatarGroup;return w(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,n=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===n||(n||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===y.indexOf(t)?"calc(".concat(t," * ").concat(.4,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,n=e?e.overlapScale:0,i=t&&n?"calc(".concat(t," * -").concat(n,")"):null;return i?{marginLeft:i,marginRight:i}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,n=this.badgeLeft,i=this.badgeOffset||"0px";return{fontSize:-1===y.indexOf(t)?"calc(".concat(t," * ").concat(.4*.7," )"):null,top:e?i:null,bottom:e?null:i,left:n?i:null,right:n?null:i}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(r.y,t)},onClick:function(t){this.$emit(r.f,t)}},render:function(t){var e,n=this.computedVariant,i=this.disabled,a=this.computedRounded,r=this.icon,o=this.localSrc,c=this.text,l=this.fontStyle,u=this.marginStyle,b=this.computedSize,j=this.button,w=this.buttonType,k=this.badge,C=this.badgeVariant,z=this.badgeStyle,E=!j&&Object(p.d)(this),P=j?v.a:E?O.a:"span",D=this.alt,x=this.ariaLabel||null,I=null;this.hasNormalizedSlot()?I=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):o?(I=t("img",{style:n?{}:{width:"100%",height:"100%"},attrs:{src:o,alt:D},on:{error:this.onImgError}}),I=t("span",{staticClass:"b-avatar-img"},[I])):I=r?t(d.a,{props:{icon:r},attrs:{"aria-hidden":"true",alt:D}}):c?t("span",{staticClass:"b-avatar-text",style:l},[t("span",c)]):t(f.q,{attrs:{"aria-hidden":"true",alt:D}});var $=t(),A=this.hasNormalizedSlot(s.d);if(k||""===k||A){var R=!0===k?"":k;$=t("span",{staticClass:"b-avatar-badge",class:m({},"badge-".concat(C),C),style:z},[A?this.normalizeSlot(s.d):R])}return t(P,{staticClass:"b-avatar",class:(e={},m(e,"".concat("b-avatar","-").concat(b),b&&-1!==y.indexOf(b)),m(e,"badge-".concat(n),!j&&n),m(e,"rounded",!0===a),m(e,"rounded-".concat(a),a&&!0!==a),m(e,"disabled",i),e),style:g(g({},u),{},{width:b,height:b}),attrs:{"aria-label":x||null},props:j?{variant:n,disabled:i,type:w}:E?Object(h.e)(S,this):{},on:j||E?{click:this.onClick}:{}},[I,$])}})},617:function(t,e){t.exports="/images/_/_/_/_/dashboard-2022/resources/js/src/assets/images/illustration/faq-illustrations.svg"}}]);