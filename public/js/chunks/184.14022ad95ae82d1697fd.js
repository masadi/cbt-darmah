(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1835:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n(8),r=n(47),o=n(5),s=n(2),c=n(1),a=Object(c.d)({textTag:Object(c.c)(s.u,"p")},o.u),l=Object(i.c)({name:o.u,functional:!0,props:a,render:function(t,e){var n=e.props,i=e.data,o=e.children;return t(n.textTag,Object(r.a)(i,{staticClass:"card-text"}),o)}})},304:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i=n(36),r=n.n(i),o=n(8),s=n(47),c=n(5),a=n(2),l=n(43),u=n(13),h=n(1),d=n(27),b=n(55),f=n(305);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=Object(u.j)(f.b,["content"]),O=Object(h.d)(Object(u.m)(v(v({},y),{},{icon:Object(h.c)(a.u)})),c.ib),g=Object(o.c)({name:c.ib,functional:!0,props:O,render:function(t,e){var n=e.data,i=e.props,o=e.parent,c=Object(d.e)(Object(d.h)(i.icon||"")).replace(l.p,"");return t(c&&function t(e,n){if(!e)return r.a.component(n);var i=(e.$options||{}).components;return i&&i[n]||t(e.$parent,n)}(o,"BIcon".concat(c))||b.a,Object(s.a)(n,{props:Object(h.e)(y,i)}))}})},426:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var i=n(36),r=n.n(i);/^2\./.test(r.a.version)||r.a.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+r.a.version);var o="_vue_clickaway_handler";function s(t,e,n){c(t);var i=n.context,r=e.value;if("function"==typeof r){var s=!1;setTimeout((function(){s=!0}),0),t[o]=function(e){var n=e.path||(e.composedPath?e.composedPath():void 0);if(s&&(n?n.indexOf(t)<0:!t.contains(e.target)))return r.call(i,e)},document.documentElement.addEventListener("click",t[o],!1)}}function c(t){document.documentElement.removeEventListener("click",t[o],!1),delete t[o]}var a={bind:s,update:function(t,e){e.value!==e.oldValue&&s(t,e)},unbind:c};Array.from||(Array.from=t=>[].slice.call(t)),Array.isArray||(Array.isArray=t=>"[object Array]"===Object.prototype.toString.call(t));const l=Array.from,u=Array.isArray,h=27,d=37,b=38,f=39,p=40,v=(t,e,n)=>{t&&t.addEventListener&&t.addEventListener(e,n)},m=(t,e,n)=>{t&&t.removeEventListener&&t.removeEventListener(e,n)},y=t=>O(t)?t.getBoundingClientRect():null,O=t=>Boolean(t&&t.nodeType===Node.ELEMENT_NODE),g=t=>{if(!O(t)||(e=document.body,n=t,!e||"function"!=typeof e.contains||!e.contains(n)))return!1;var e,n;if("none"===t.style.display)return!1;const i=y(t);return Boolean(i&&i.height>0&&i.width>0)},S=(t,e)=>l((O(e)?e:document).querySelectorAll(t)),j=(t,e,n)=>{e&&O(t)&&t.setAttribute(e,n)},w=(t,e)=>{let n=t.parentElement;for(;null!==n&&!n.classList.contains(e);)n=n.parentElement;return n},E=(t,e={},n={},i={})=>{const r=n[t]||i[t];return"function"==typeof r?r(e):r};var x={directives:{onClickaway:a},props:{closeOnClick:{type:Boolean,default:!0},closeOnScroll:{type:Boolean,default:!0},lazy:{type:Boolean,default:!1},itemSelector:{type:[String,Array],default:()=>[".v-context-item",".v-context > li > a"]},role:{type:String,default:"menu"},subMenuOffset:{type:Number,default:10},useScrollHeight:{type:Boolean,default:!1},useScrollWidth:{type:Boolean,default:!1},heightOffset:{type:Number,default:25},widthOffset:{type:Number,default:25},tag:{type:String,default:"ul"}},computed:{style(){return this.show?{top:this.top+"px",left:this.left+"px"}:null}},data:()=>({top:null,left:null,show:!1,data:null,localItemSelector:"",activeSubMenu:null}),created(){this.localItemSelector=this.mapItemSelector(this.itemSelector)},beforeDestroy(){this.closeOnScroll&&this.removeScrollEventListener()},methods:{addScrollEventListener(){v(window,"scroll",this.close)},addHoverEventListener(t){t.querySelectorAll(".v-context__sub").forEach(t=>{v(t,"mouseenter",this.openSubMenu),v(t,"mouseleave",this.closeSubMenu)})},close(){if(this.show){for(;null!==this.activeSubMenu;)w(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));this.resetData(),this.removeHoverEventListener(this.$el),this.closeOnScroll&&this.removeScrollEventListener(),this.$emit("close")}},focusItem(t,e){const n=e.find((e,n)=>n===t);n&&n.focus()},focusNext(t,e){this.show&&(t.preventDefault(),t.stopPropagation(),this.$nextTick(()=>{const n=this.getItems();if(n.length<1)return;let i=n.indexOf(t.target);e&&i>0?i--:!e&&i<n.length-1&&i++,i<0&&(i=0),this.focusItem(i,n)}))},getItems(){return(S(this.localItemSelector,this.activeSubMenu||this.$el)||[]).filter(g)},mapItemSelector:t=>(u(t)&&(t=t.map(t=>t+":not(.disabled):not([disabled])").join(", ")),t),onClick(){this.close()},onKeydown(t){const e=t.keyCode;if(e===h)this.close();else if(e===p)this.focusNext(t,!1);else if(e===b)this.focusNext(t,!0);else if(e===f){const e=w(t.target,"v-context__sub");e&&e.getElementsByClassName("v-context")[0]!==this.activeSubMenu&&(e.dispatchEvent(new Event("mouseenter")),this.focusNext(t,!1))}else if(e===d){if(!this.activeSubMenu)return;const t=w(this.activeSubMenu,"v-context__sub");t.dispatchEvent(new Event("mouseleave"));const e=this.getItems(),n=e.indexOf(t.getElementsByTagName("a")[0]);this.focusItem(n,e)}},open(t,e){this.data=e,this.show=!0,this.$nextTick(()=>{[this.top,this.left]=this.positionMenu(t.clientY,t.clientX,this.$el),this.$el.focus(),this.setItemRoles(),this.addHoverEventListener(this.$el),this.closeOnScroll&&this.addScrollEventListener(),this.$emit("open",t,this.data,this.top,this.left)})},openSubMenu(t){const e=this.getSubMenuElementByEvent(t),n=w(e.parentElement,"v-context"),i=y(t.target);if(this.activeSubMenu!==n)for(;null!==this.activeSubMenu&&this.activeSubMenu!==n&&this.activeSubMenu!==e;)w(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));e.style.display="block";let[r,o]=this.positionMenu(i.top,i.right-this.subMenuOffset,e);e.style.left=o+"px",e.style.top=r+"px",this.activeSubMenu=e},closeSubMenu(t){const e=this.getSubMenuElementByEvent(t),n=w(e,"v-context");if(this.activeSubMenu!==e)for(;null!==this.activeSubMenu&&this.activeSubMenu!==e;)w(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));e.style.display="none",this.activeSubMenu=n&&w(n,"v-context__sub")?n:null},getSubMenuElementByEvent:t=>t.target.getElementsByTagName("ul")[0],positionMenu(t,e,n){const i=this.useScrollHeight?n.scrollHeight:n.offsetHeight,r=window.innerHeight-i-this.heightOffset,o=this.useScrollWidth?n.scrollWidth:n.offsetWidth,s=window.innerWidth-o-this.widthOffset;return t>r&&(t=r),e>s&&(e=s),[t,e]},removeScrollEventListener(){m(window,"scroll",this.close)},removeHoverEventListener(t){t.querySelectorAll(".v-context__sub").forEach(t=>{m(t,"mouseenter",this.openSubMenu),m(t,"mouseleave",this.closeSubMenu)})},resetData(){this.top=null,this.left=null,this.data=null,this.show=!1},setItemRoles(){S(this.localItemSelector,this.$el).forEach(t=>{j(t,"role","menuitem"),j(t,"tabindex","-1")})}},watch:{closeOnScroll(t,e){t!==e&&(t&&this.show?this.addScrollEventListener():this.removeScrollEventListener())},itemSelector(t,e){t!==e&&(this.localItemSelector=this.mapItemSelector(t))}},render(t){if(this.lazy&&!this.show)return t(!1);const e={"!contextmenu":t=>{t.preventDefault()},keydown:this.onKeydown};this.closeOnClick&&(e.click=this.onClick);const n=[{name:"on-clickaway",value:this.close,rawName:"v-on-clickaway"}];return this.lazy||n.push({name:"show",value:this.show,rawName:"v-show",expression:"show"}),t(this.tag,{staticClass:"v-context",style:this.style,attrs:{tabindex:"-1",role:this.role,"aria-hidden":this.lazy?null:String(!this.show)},on:e,directives:n},[E("default",{data:this.data},this.$scopedSlots,this.$slots)])}}},538:function(t,e,n){"use strict";n.d(e,"b",(function(){return j})),n.d(e,"a",(function(){return x}));var i=n(8),r=n(5),o=n(12),s=n(2),c=n(18),a=n(7),l=n(21),u=n(13),h=n(1),d=n(92),b=n(29),f=n(304),p=n(55),v=n(89),m=n(60);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S=["sm",null,"lg"],j=function(t){return t=Object(a.n)(t)&&Object(a.i)(t)?Object(l.b)(t,0):t,Object(a.h)(t)?"".concat(t,"px"):t||null},w=Object(u.j)(m.b,["active","event","routerTag"]),E=Object(h.d)(Object(u.m)(O(O({},w),{},{alt:Object(h.c)(s.u,"avatar"),ariaLabel:Object(h.c)(s.u),badge:Object(h.c)(s.j,!1),badgeLeft:Object(h.c)(s.g,!1),badgeOffset:Object(h.c)(s.u),badgeTop:Object(h.c)(s.g,!1),badgeVariant:Object(h.c)(s.u,"primary"),button:Object(h.c)(s.g,!1),buttonType:Object(h.c)(s.u,"button"),icon:Object(h.c)(s.u),rounded:Object(h.c)(s.j,!1),size:Object(h.c)(s.p),square:Object(h.c)(s.g,!1),src:Object(h.c)(s.u),text:Object(h.c)(s.u),variant:Object(h.c)(s.u,"secondary")})),r.c),x=Object(i.c)({name:r.c,mixins:[b.a],inject:{getBvAvatarGroup:{default:function(){return function(){return null}}}},props:E,data:function(){return{localSrc:this.src||null}},computed:{bvAvatarGroup:function(){return this.getBvAvatarGroup()},computedSize:function(){var t=this.bvAvatarGroup;return j(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,n=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===n||(n||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===S.indexOf(t)?"calc(".concat(t," * ").concat(.4,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,n=e?e.overlapScale:0,i=t&&n?"calc(".concat(t," * -").concat(n,")"):null;return i?{marginLeft:i,marginRight:i}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,n=this.badgeLeft,i=this.badgeOffset||"0px";return{fontSize:-1===S.indexOf(t)?"calc(".concat(t," * ").concat(.4*.7," )"):null,top:e?i:null,bottom:e?null:i,left:n?i:null,right:n?null:i}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(o.y,t)},onClick:function(t){this.$emit(o.f,t)}},render:function(t){var e,n=this.computedVariant,i=this.disabled,r=this.computedRounded,o=this.icon,s=this.localSrc,a=this.text,l=this.fontStyle,u=this.marginStyle,b=this.computedSize,y=this.button,j=this.buttonType,E=this.badge,x=this.badgeVariant,M=this.badgeStyle,k=!y&&Object(d.d)(this),L=y?v.a:k?m.a:"span",A=this.alt,P=this.ariaLabel||null,_=null;this.hasNormalizedSlot()?_=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):s?(_=t("img",{style:n?{}:{width:"100%",height:"100%"},attrs:{src:s,alt:A},on:{error:this.onImgError}}),_=t("span",{staticClass:"b-avatar-img"},[_])):_=o?t(f.a,{props:{icon:o},attrs:{"aria-hidden":"true",alt:A}}):a?t("span",{staticClass:"b-avatar-text",style:l},[t("span",a)]):t(p.q,{attrs:{"aria-hidden":"true",alt:A}});var I=t(),z=this.hasNormalizedSlot(c.d);if(E||""===E||z){var C=!0===E?"":E;I=t("span",{staticClass:"b-avatar-badge",class:g({},"badge-".concat(x),x),style:M},[z?this.normalizeSlot(c.d):C])}return t(L,{staticClass:"b-avatar",class:(e={},g(e,"".concat("b-avatar","-").concat(b),b&&-1!==S.indexOf(b)),g(e,"badge-".concat(n),!y&&n),g(e,"rounded",!0===r),g(e,"rounded-".concat(r),r&&!0!==r),g(e,"disabled",i),e),style:O(O({},u),{},{width:b,height:b}),attrs:{"aria-label":P||null},props:y?{variant:n,disabled:i,type:j}:k?Object(h.e)(w,this):{},on:y||k?{click:this.onClick}:{}},[_,I])}})}}]);