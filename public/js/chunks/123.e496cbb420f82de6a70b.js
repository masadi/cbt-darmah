(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1340:function(t,e){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/illustration/faq-illustrations.svg"},1341:function(t,e,a){"use strict";a(683)},1342:function(t,e,a){(e=a(19)(!1)).push([t.i,"[dir] .faq-search {\n  background-size: cover;\n  background-color: rgba(115, 103, 240, 0.12) !important;\n}\n[dir] .faq-search .faq-search-input .input-group:focus-within {\n  box-shadow: none;\n}\n[dir] .faq-contact .faq-contact-card {\n  background-color: rgba(186, 191, 199, 0.12);\n}\n@media (min-width: 992px) {\n[dir] .faq-search .card-body {\n    padding: 8rem !important;\n}\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n[dir] .faq-search .card-body {\n    padding: 6rem !important;\n}\n}\n@media (min-width: 768px) {\n.faq-search .faq-search-input .input-group {\n    width: 576px;\n}\n[dir] .faq-search .faq-search-input .input-group {\n    margin: 0 auto;\n}\n.faq-navigation {\n    height: 550px;\n}\n}\n.faq-navigation .nav.nav-pills {\n  height: 100%;\n}",""]),t.exports=e},158:function(t,e,a){"use strict";a(52);var n=a(1918),i={props:{accordion:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},type:{type:String,default:"default"}},data:function(){return{collapseID:""}},computed:{collapseClasses:function(){var t=[];return t.push({default:"collapse-default",border:"collapse-border",shadow:"collapse-shadow",margin:"collapse-margin"}[this.type]),t}},created:function(){this.collapseID=Object(n.a)()}},s=a(0),r=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"collapse-icon",class:this.collapseClasses,attrs:{role:"tablist"}},[this._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},159:function(t,e,a){"use strict";var n=a(1888),i=a(344),s=a(342),r=a(1903),o=a(1918),c={components:{BCard:n.a,BCardHeader:i.a,BCardBody:s.a,BCollapse:r.a},props:{isVisible:{type:Boolean,default:!1},title:{type:String,required:!0}},data:function(){return{visible:!1,collapseItemID:"",openOnHover:this.$parent.hover}},computed:{accordion:function(){return this.$parent.accordion?"accordion-".concat(this.$parent.collapseID):null}},created:function(){this.collapseItemID=Object(o.a)(),this.visible=this.isVisible},methods:{updateVisible:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.visible=t,this.$emit("visible",t)},collapseOpen:function(){this.openOnHover&&this.updateVisible(!0)},collapseClose:function(){this.openOnHover&&this.updateVisible(!1)}}},l=a(0),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{class:{open:t.visible},attrs:{"no-body":""},on:{mouseenter:t.collapseOpen,mouseleave:t.collapseClose}},[a("b-card-header",{class:{collapsed:!t.visible},attrs:{"aria-expanded":t.visible?"true":"false","aria-controls":t.collapseItemID,role:"tab","data-toggle":"collapse"},on:{click:function(e){return t.updateVisible(!t.visible)}}},[t._t("header",[a("span",{staticClass:"lead collapse-title"},[t._v(t._s(t.title))])])],2),t._v(" "),a("b-collapse",{attrs:{id:t.collapseItemID,accordion:t.accordion,role:"tabpanel"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("b-card-body",[t._t("default")],2)],1)],1)}),[],!1,null,null,null);e.a=u.exports},1610:function(t,e,a){"use strict";a.r(e);var n=a(438),i=a(1888),s=a(1886),r=a(348),o=a(532),c=a(342),l=a(1890),u=a(1889),p=a(1887),h=a(529),d=a(1910),b=a(1912),f=a(226),v=a(158),m=a(159),g={components:{BAvatar:o.a,AppCollapseItem:m.a,AppCollapse:v.a},props:{options:{type:Object,default:function(){}}}},O=a(0),y=Object(O.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.options?a("div",[a("div",{staticClass:"d-flex align-items-center"},[a("b-avatar",{staticClass:"mr-1",attrs:{rounded:"",size:"42",variant:"light-primary"}},[a("feather-icon",{attrs:{icon:t.options.icon,size:"20"}})],1),t._v(" "),a("div",[a("h4",{staticClass:"mb-0"},[t._v("\n        "+t._s(t.options.title)+"\n      ")]),t._v(" "),a("span",[t._v(t._s(t.options.subtitle))])])],1),t._v(" "),a("app-collapse",{staticClass:"mt-2",attrs:{id:"faq-payment-qna",accordion:"",type:"margin"}},t._l(t.options.qandA,(function(e,n){return a("app-collapse-item",{key:n,attrs:{title:e.question}},[t._v("\n      "+t._s(e.ans)+"\n    ")])})),1)],1):t._e()}),[],!1,null,null,null).exports,j={components:{BForm:n.a,BCard:i.a,BRow:s.a,BCol:r.a,BAvatar:o.a,BCardBody:c.a,BInputGroup:l.a,BFormInput:u.a,BCardText:p.a,BInputGroupPrepend:h.a,BTabs:d.a,BTab:b.a,BImg:f.a,FaqQuestionAnswer:y},data:function(){return{faqSearchQuery:"",faqData:{}}},watch:{faqSearchQuery:{immediate:!0,handler:function(){this.fetchData()}}},methods:{fetchData:function(){var t=this;this.$http.get("/faq/data",{params:{q:this.faqSearchQuery}}).then((function(e){t.$ability.update([{action:"manage"},{subject:"all"}]),t.faqData=e.data}))}}},w=(a(1341),Object(O.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{attrs:{id:"faq-search-filter"}},[n("b-card",{staticClass:"faq-search",style:{backgroundImage:"url("+a(448)+")"},attrs:{"no-body":""}},[n("b-card-body",{staticClass:"text-center"},[n("h2",{staticClass:"text-primary"},[t._v("\n          Let's answer some questions\n        ")]),t._v(" "),n("b-card-text",{staticClass:"mb-2"},[t._v("\n          or choose a category to quickly find the help you need\n        ")]),t._v(" "),n("b-form",{staticClass:"faq-search-input"},[n("b-input-group",{staticClass:"input-group-merge"},[n("b-input-group-prepend",{attrs:{"is-text":""}},[n("feather-icon",{attrs:{icon:"SearchIcon"}})],1),t._v(" "),n("b-form-input",{attrs:{id:"searchbar",placeholder:"Search faq..."},model:{value:t.faqSearchQuery,callback:function(e){t.faqSearchQuery=e},expression:"faqSearchQuery"}})],1)],1)],1)],1)],1),t._v(" "),n("section",{attrs:{id:"faq-tabs"}},[n("b-tabs",{attrs:{vertical:"","content-class":"col-12 col-md-8 col-lg-9",pills:"","nav-wrapper-class":"faq-navigation col-md-4 col-lg-3 col-12","nav-class":"nav-left"},scopedSlots:t._u([{key:"tabs-end",fn:function(){return[n("b-img",{staticClass:"d-none d-md-block mt-auto",attrs:{fluid:"",src:a(1340)}})]},proxy:!0}])},t._l(t.faqData,(function(e,a,i){return n("b-tab",{key:a,attrs:{active:!i},scopedSlots:t._u([{key:"title",fn:function(){return[n("feather-icon",{staticClass:"mr-1",attrs:{icon:e.icon,size:"18"}}),t._v(" "),n("span",{staticClass:"font-weight-bold"},[t._v(t._s(e.title))])]},proxy:!0}],null,!0)},[t._v(" "),n("faq-question-answer",{attrs:{options:e}})],1)})),1)],1),t._v(" "),n("section",{staticClass:"faq-contact"},[n("b-row",{staticClass:"mt-5 pt-75 text-center"},[n("b-col",{attrs:{cols:"12"}},[n("h2",[t._v("You still have a question?")]),t._v(" "),n("b-card-text",{staticClass:"mb-3"},[t._v("\n          If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!\n        ")])],1),t._v(" "),n("b-col",{attrs:{sm:"6"}},[n("b-card",{staticClass:"shadow-none py-1 faq-contact-card"},[n("b-avatar",{staticClass:"mb-2",attrs:{size:"42",rounded:"",variant:"light-primary"}},[n("feather-icon",{attrs:{icon:"PhoneCallIcon",size:"18"}})],1),t._v(" "),n("h4",[t._v("+ (810) 2548 2568")]),t._v(" "),n("span",{staticClass:"text-body"},[t._v("We are always happy to help!")])],1)],1),t._v(" "),n("b-col",{attrs:{sm:"6"}},[n("b-card",{staticClass:"shadow-none py-1 faq-contact-card"},[n("b-avatar",{staticClass:"mb-2",attrs:{size:"42",rounded:"",variant:"light-primary"}},[n("feather-icon",{attrs:{icon:"MailIcon",size:"18"}})],1),t._v(" "),n("h4",[t._v("hello@help.com")]),t._v(" "),n("span",{staticClass:"text-body"},[t._v("Best way to get answer faster!")])],1)],1)],1)],1)])}),[],!1,null,null,null));e.default=w.exports},1903:function(t,e,a){"use strict";a.d(e,"a",(function(){return R}));var n,i=a(8),s=a(5),r=a(30),o=a(12),c=a(2),l=a(20),u=a(6),p=a(17),h=a(50),d=a(13),b=a(1),f=a(31),v=a(83),m=a(28),g=a(48),O={css:!0,enterClass:"",enterActiveClass:"collapsing",enterToClass:"collapse show",leaveClass:"collapse show",leaveActiveClass:"collapsing",leaveToClass:"collapse"},y={enter:function(t){Object(u.F)(t,"height",0),Object(u.B)((function(){Object(u.w)(t),Object(u.F)(t,"height","".concat(t.scrollHeight,"px"))}))},afterEnter:function(t){Object(u.A)(t,"height")},leave:function(t){Object(u.F)(t,"height","auto"),Object(u.F)(t,"display","block"),Object(u.F)(t,"height","".concat(Object(u.i)(t).height,"px")),Object(u.w)(t),Object(u.F)(t,"height",0)},afterLeave:function(t){Object(u.A)(t,"height")}},j={appear:Object(b.c)(c.g,!1)},w=Object(i.c)({name:s.A,functional:!0,props:j,render:function(t,e){var a=e.props,n=e.data,i=e.children;return t("transition",Object(g.a)(n,{props:O,on:y},{props:a}),i)}});function _(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function C(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_(Object(a),!0).forEach((function(e){S(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function S(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var q=Object(p.d)(s.z,"toggle"),x=Object(p.d)(s.z,"request-state"),k=Object(p.e)(s.z,"accordion"),z=Object(p.e)(s.z,"state"),I=Object(p.e)(s.z,"sync-state"),B=Object(h.a)("visible",{type:c.g,defaultValue:!1}),E=B.mixin,P=B.props,D=B.prop,A=B.event,$=Object(b.d)(Object(d.m)(C(C(C({},f.b),P),{},{accordion:Object(b.c)(c.u),appear:Object(b.c)(c.g,!1),isNav:Object(b.c)(c.g,!1),tag:Object(b.c)(c.u,"div")})),s.z),R=Object(i.c)({name:s.z,mixins:[f.a,E,m.a,v.a],props:$,data:function(){return{show:this[D],transitioning:!1}},computed:{classObject:function(){var t=this.transitioning;return{"navbar-collapse":this.isNav,collapse:!t,show:this.show&&!t}},slotScope:function(){var t=this;return{visible:this.show,close:function(){t.show=!1}}}},watch:(n={},S(n,D,(function(t){t!==this.show&&(this.show=t)})),S(n,"show",(function(t,e){t!==e&&this.emitState()})),n),created:function(){this.show=this[D]},mounted:function(){var t=this;this.show=this[D],this.listenOnRoot(q,this.handleToggleEvent),this.listenOnRoot(k,this.handleAccordionEvent),this.isNav&&(this.setWindowEvents(!0),this.handleResize()),this.$nextTick((function(){t.emitState()})),this.listenOnRoot(x,(function(e){e===t.safeId()&&t.$nextTick(t.emitSync)}))},updated:function(){this.emitSync()},deactivated:function(){this.isNav&&this.setWindowEvents(!1)},activated:function(){this.isNav&&this.setWindowEvents(!0),this.emitSync()},beforeDestroy:function(){this.show=!1,this.isNav&&r.i&&this.setWindowEvents(!1)},methods:{setWindowEvents:function(t){Object(p.c)(t,window,"resize",this.handleResize,o.db),Object(p.c)(t,window,"orientationchange",this.handleResize,o.db)},toggle:function(){this.show=!this.show},onEnter:function(){this.transitioning=!0,this.$emit(o.U)},onAfterEnter:function(){this.transitioning=!1,this.$emit(o.V)},onLeave:function(){this.transitioning=!0,this.$emit(o.x)},onAfterLeave:function(){this.transitioning=!1,this.$emit(o.w)},emitState:function(){var t=this.show,e=this.accordion,a=this.safeId();this.$emit(A,t),this.emitOnRoot(z,a,t),e&&t&&this.emitOnRoot(k,a,e)},emitSync:function(){this.emitOnRoot(I,this.safeId(),this.show)},checkDisplayBlock:function(){var t=this.$el,e=Object(u.p)(t,"show");Object(u.y)(t,"show");var a="block"===Object(u.k)(t).display;return e&&Object(u.b)(t,"show"),a},clickHandler:function(t){var e=t.target;this.isNav&&e&&"block"===Object(u.k)(this.$el).display&&(!Object(u.v)(e,".nav-link,.dropdown-item")&&!Object(u.e)(".nav-link,.dropdown-item",e)||this.checkDisplayBlock()||(this.show=!1))},handleToggleEvent:function(t){t===this.safeId()&&this.toggle()},handleAccordionEvent:function(t,e){var a=this.accordion,n=this.show;if(a&&a===e){var i=t===this.safeId();(i&&!n||!i&&n)&&this.toggle()}},handleResize:function(){this.show="block"===Object(u.k)(this.$el).display}},render:function(t){var e=this.appear,a=t(this.tag,{class:this.classObject,directives:[{name:"show",value:this.show}],attrs:{id:this.safeId()},on:{click:this.clickHandler}},this.normalizeSlot(l.i,this.slotScope));return t(w,{props:{appear:e},on:{enter:this.onEnter,afterEnter:this.onAfterEnter,leave:this.onLeave,afterLeave:this.onAfterLeave}},[a])}})},1918:function(t,e,a){"use strict";var n,i=new Uint8Array(16);function s(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(i)}var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var o=function(t){return"string"==typeof t&&r.test(t)},c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));var u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!o(a))throw TypeError("Stringified UUID is invalid");return a};e.a=function(t,e,a){var n=(t=t||{}).random||(t.rng||s)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){a=a||0;for(var i=0;i<16;++i)e[a+i]=n[i];return e}return u(n)}},300:function(t,e,a){"use strict";a.d(e,"a",(function(){return y}));var n=a(36),i=a.n(n),s=a(8),r=a(48),o=a(5),c=a(2),l=a(43),u=a(13),p=a(1),h=a(27),d=a(54),b=a(304);function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var g=Object(u.j)(b.b,["content"]),O=Object(p.d)(Object(u.m)(v(v({},g),{},{icon:Object(p.c)(c.u)})),o.ib),y=Object(s.c)({name:o.ib,functional:!0,props:O,render:function(t,e){var a=e.data,n=e.props,s=e.parent,o=Object(h.e)(Object(h.h)(n.icon||"")).replace(l.p,"");return t(o&&function t(e,a){if(!e)return i.a.component(a);var n=(e.$options||{}).components;return n&&n[a]||t(e.$parent,a)}(s,"BIcon".concat(o))||d.a,Object(r.a)(a,{props:Object(p.e)(g,n)}))}})},448:function(t,e){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/banner/banner.png"},532:function(t,e,a){"use strict";a.d(e,"b",(function(){return w})),a.d(e,"a",(function(){return S}));var n=a(8),i=a(5),s=a(12),r=a(2),o=a(20),c=a(7),l=a(22),u=a(13),p=a(1),h=a(96),d=a(28),b=a(300),f=a(54),v=a(92),m=a(59);function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function O(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){y(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function y(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var j=["sm",null,"lg"],w=function(t){return t=Object(c.n)(t)&&Object(c.i)(t)?Object(l.b)(t,0):t,Object(c.h)(t)?"".concat(t,"px"):t||null},_=Object(u.j)(m.b,["active","event","routerTag"]),C=Object(p.d)(Object(u.m)(O(O({},_),{},{alt:Object(p.c)(r.u,"avatar"),ariaLabel:Object(p.c)(r.u),badge:Object(p.c)(r.j,!1),badgeLeft:Object(p.c)(r.g,!1),badgeOffset:Object(p.c)(r.u),badgeTop:Object(p.c)(r.g,!1),badgeVariant:Object(p.c)(r.u,"primary"),button:Object(p.c)(r.g,!1),buttonType:Object(p.c)(r.u,"button"),icon:Object(p.c)(r.u),rounded:Object(p.c)(r.j,!1),size:Object(p.c)(r.p),square:Object(p.c)(r.g,!1),src:Object(p.c)(r.u),text:Object(p.c)(r.u),variant:Object(p.c)(r.u,"secondary")})),i.c),S=Object(n.c)({name:i.c,mixins:[d.a],inject:{getBvAvatarGroup:{default:function(){return function(){return null}}}},props:C,data:function(){return{localSrc:this.src||null}},computed:{bvAvatarGroup:function(){return this.getBvAvatarGroup()},computedSize:function(){var t=this.bvAvatarGroup;return w(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,a=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===a||(a||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===j.indexOf(t)?"calc(".concat(t," * ").concat(.4,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,a=e?e.overlapScale:0,n=t&&a?"calc(".concat(t," * -").concat(a,")"):null;return n?{marginLeft:n,marginRight:n}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,a=this.badgeLeft,n=this.badgeOffset||"0px";return{fontSize:-1===j.indexOf(t)?"calc(".concat(t," * ").concat(.4*.7," )"):null,top:e?n:null,bottom:e?null:n,left:a?n:null,right:a?null:n}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(s.y,t)},onClick:function(t){this.$emit(s.f,t)}},render:function(t){var e,a=this.computedVariant,n=this.disabled,i=this.computedRounded,s=this.icon,r=this.localSrc,c=this.text,l=this.fontStyle,u=this.marginStyle,d=this.computedSize,g=this.button,w=this.buttonType,C=this.badge,S=this.badgeVariant,q=this.badgeStyle,x=!g&&Object(h.d)(this),k=g?v.a:x?m.a:"span",z=this.alt,I=this.ariaLabel||null,B=null;this.hasNormalizedSlot()?B=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):r?(B=t("img",{style:a?{}:{width:"100%",height:"100%"},attrs:{src:r,alt:z},on:{error:this.onImgError}}),B=t("span",{staticClass:"b-avatar-img"},[B])):B=s?t(b.a,{props:{icon:s},attrs:{"aria-hidden":"true",alt:z}}):c?t("span",{staticClass:"b-avatar-text",style:l},[t("span",c)]):t(f.m,{attrs:{"aria-hidden":"true",alt:z}});var E=t(),P=this.hasNormalizedSlot(o.d);if(C||""===C||P){var D=!0===C?"":C;E=t("span",{staticClass:"b-avatar-badge",class:y({},"badge-".concat(S),S),style:q},[P?this.normalizeSlot(o.d):D])}return t(k,{staticClass:"b-avatar",class:(e={},y(e,"".concat("b-avatar","-").concat(d),d&&-1!==j.indexOf(d)),y(e,"badge-".concat(a),!g&&a),y(e,"rounded",!0===i),y(e,"rounded-".concat(i),i&&!0!==i),y(e,"disabled",n),e),style:O(O({},u),{},{width:d,height:d}),attrs:{"aria-label":I||null},props:g?{variant:a,disabled:n,type:w}:x?Object(p.e)(_,this):{},on:g||x?{click:this.onClick}:{}},[B,E])}})},683:function(t,e,a){var n=a(1342);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(21)(n,i);n.locals&&(t.exports=n.locals)}}]);