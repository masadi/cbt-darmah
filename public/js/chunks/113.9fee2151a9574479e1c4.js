(window.webpackJsonp=window.webpackJsonp||[]).push([[113,22,133],{151:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o}));var r=n(8),c=n(2),i=n(1),a=Object(i.d)({plain:Object(i.c)(c.g,!1)},"formControls"),o=Object(r.c)({props:a,computed:{custom:function(){return!this.plain}}})},1919:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n(47),c=n(5),i=n(2),a=n(23),o=n(69),u=n(35),s=n(206),b=n(13),l=n(1),p=n(27);function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){O(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=["start","end","center"],j=Object(s.a)((function(t,e){return(e=Object(p.h)(Object(p.g)(e)))?Object(p.c)(["row-cols",t,e].filter(u.a).join("-")):null})),m=Object(s.a)((function(t){return Object(p.c)(t.replace("cols",""))})),v=[],g={name:c.Ob,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(o.b)().reduce((function(t,e){return t[Object(l.g)(e,"cols")]=Object(l.c)(i.p),t}),Object(b.c)(null)),v=Object(b.h)(t),Object(l.d)(Object(b.m)(h(h({},t),{},{alignContent:Object(l.c)(i.u,null,(function(t){return Object(a.a)(Object(a.b)(f,"between","around","stretch"),t)})),alignH:Object(l.c)(i.u,null,(function(t){return Object(a.a)(Object(a.b)(f,"between","around"),t)})),alignV:Object(l.c)(i.u,null,(function(t){return Object(a.a)(Object(a.b)(f,"baseline","stretch"),t)})),noGutters:Object(l.c)(i.g,!1),tag:Object(l.c)(i.u,"div")})),c.Ob)),this.props},render:function(t,e){var n,c=e.props,i=e.data,a=e.children,o=c.alignV,u=c.alignH,s=c.alignContent,b=[];return v.forEach((function(t){var e=j(m(t),c[t]);e&&b.push(e)})),b.push((O(n={"no-gutters":c.noGutters},"align-items-".concat(o),o),O(n,"justify-content-".concat(u),u),O(n,"align-content-".concat(s),s),n)),t(c.tag,Object(r.a)(i,{staticClass:"row",class:b}),a)}}},1920:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(8),c=n(47),i=n(5),a=n(2),o=n(1),u=Object(o.d)({textTag:Object(o.c)(a.u,"p")},i.u),s=Object(r.c)({name:i.u,functional:!0,props:u,render:function(t,e){var n=e.props,r=e.data,i=e.children;return t(n.textTag,Object(c.a)(r,{staticClass:"card-text"}),i)}})},1924:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n(8),c=n(47),i=n(5),a=n(2),o=n(20),u=n(48),s=n(71),b=n(1),l=n(534),p=n(533),d=n(305);var h=Object(b.d)({append:Object(b.c)(a.u),appendHtml:Object(b.c)(a.u),id:Object(b.c)(a.u),prepend:Object(b.c)(a.u),prependHtml:Object(b.c)(a.u),size:Object(b.c)(a.u),tag:Object(b.c)(a.u,"div")},i.mb),O=Object(r.c)({name:i.mb,functional:!0,props:h,render:function(t,e){var n=e.props,r=e.data,i=e.slots,a=e.scopedSlots,b=n.prepend,h=n.prependHtml,O=n.append,f=n.appendHtml,j=n.size,m=a||{},v=i(),g={},y=t(),w=Object(s.a)(o.W,m,v);(w||b||h)&&(y=t(p.a,[w?Object(s.b)(o.W,g,m,v):t(d.a,{domProps:Object(u.a)(h,b)})]));var P,k,C,G=t(),S=Object(s.a)(o.b,m,v);return(S||O||f)&&(G=t(l.a,[S?Object(s.b)(o.b,g,m,v):t(d.a,{domProps:Object(u.a)(f,O)})])),t(n.tag,Object(c.a)(r,{staticClass:"input-group",class:(P={},k="input-group-".concat(j),C=j,k in P?Object.defineProperty(P,k,{value:C,enumerable:!0,configurable:!0,writable:!0}):P[k]=C,P),attrs:{id:n.id||null,role:"group"}}),[y,Object(s.b)(o.i,g,m,v),G])}})},228:function(t,e,n){"use strict";n.d(e,"b",(function(){return O})),n.d(e,"a",(function(){return f}));var r=n(8),c=n(47),i=n(5),a=n(2),o=n(23),u=n(35),s=n(7),b=n(22),l=n(1),p=n(27);function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',O=Object(l.d)({alt:Object(l.c)(a.u),blank:Object(l.c)(a.g,!1),blankColor:Object(l.c)(a.u,"transparent"),block:Object(l.c)(a.g,!1),center:Object(l.c)(a.g,!1),fluid:Object(l.c)(a.g,!1),fluidGrow:Object(l.c)(a.g,!1),height:Object(l.c)(a.p),left:Object(l.c)(a.g,!1),right:Object(l.c)(a.g,!1),rounded:Object(l.c)(a.j,!1),sizes:Object(l.c)(a.f),src:Object(l.c)(a.u),srcset:Object(l.c)(a.f),thumbnail:Object(l.c)(a.g,!1),width:Object(l.c)(a.p)},i.kb),f=Object(r.c)({name:i.kb,functional:!0,props:O,render:function(t,e){var n,r=e.props,i=e.data,a=r.alt,l=r.src,O=r.block,f=r.fluidGrow,j=r.rounded,m=Object(b.c)(r.width)||null,v=Object(b.c)(r.height)||null,g=null,y=Object(o.b)(r.srcset).filter(u.a).join(","),w=Object(o.b)(r.sizes).filter(u.a).join(",");return r.blank&&(!v&&m?v=m:!m&&v&&(m=v),m||v||(m=1,v=1),l=function(t,e,n){var r=encodeURIComponent(h.replace("%{w}",Object(p.g)(t)).replace("%{h}",Object(p.g)(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(r)}(m,v,r.blankColor||"transparent"),y=null,w=null),r.left?g="float-left":r.right?g="float-right":r.center&&(g="mx-auto",O=!0),t("img",Object(c.a)(i,{attrs:{src:l,alt:a,width:m?Object(p.g)(m):null,height:v?Object(p.g)(v):null,srcset:y||null,sizes:w||null},class:(n={"img-thumbnail":r.thumbnail,"img-fluid":r.fluid||f,"w-100":f,rounded:""===j||!0===j},d(n,"rounded-".concat(j),Object(s.n)(j)&&""!==j),d(n,g,g),d(n,"d-block",O),n)}))}})},230:function(t,e,n){"use strict";n.d(e,"a",(function(){return D})),n.d(e,"c",(function(){return x})),n.d(e,"b",(function(){return z}));var r,c,i=n(8),a=n(2),o=n(12),u=n(6),s=n(7),b=n(42),l=n(49),p=n(13),d=n(1),h=n(56),O=n(70),f=n(151),j=n(68),m=n(65),v=n(31),g=n(28);function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){P(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var k=Object(l.a)("checked",{defaultValue:null}),C=k.mixin,G=k.props,S=k.prop,D=k.event,x=Object(d.d)(Object(p.m)(w(w(w(w(w(w(w({},v.b),G),O.b),j.b),m.b),f.b),{},{ariaLabel:Object(d.c)(a.u),ariaLabelledby:Object(d.c)(a.u),button:Object(d.c)(a.g,!1),buttonVariant:Object(d.c)(a.u),inline:Object(d.c)(a.g,!1),value:Object(d.c)(a.a)})),"formRadioCheckControls"),z=Object(i.c)({mixins:[h.a,v.a,C,g.a,O.a,j.a,m.a,f.a],inheritAttrs:!1,props:x,data:function(){return{localChecked:this.isGroup?this.bvGroup[S]:this[S],hasFocus:!1}},computed:{computedLocalChecked:{get:function(){return this.isGroup?this.bvGroup.localChecked:this.localChecked},set:function(t){this.isGroup?this.bvGroup.localChecked=t:this.localChecked=t}},isChecked:function(){return Object(b.a)(this.value,this.computedLocalChecked)},isRadio:function(){return!0},isGroup:function(){return!!this.bvGroup},isBtnMode:function(){return this.isGroup?this.bvGroup.buttons:this.button},isPlain:function(){return!this.isBtnMode&&(this.isGroup?this.bvGroup.plain:this.plain)},isCustom:function(){return!this.isBtnMode&&!this.isPlain},isSwitch:function(){return!(this.isBtnMode||this.isRadio||this.isPlain)&&(this.isGroup?this.bvGroup.switches:this.switch)},isInline:function(){return this.isGroup?this.bvGroup.inline:this.inline},isDisabled:function(){return this.isGroup&&this.bvGroup.disabled||this.disabled},isRequired:function(){return this.computedName&&(this.isGroup?this.bvGroup.required:this.required)},computedName:function(){return(this.isGroup?this.bvGroup.groupName:this.name)||null},computedForm:function(){return(this.isGroup?this.bvGroup.form:this.form)||null},computedSize:function(){return(this.isGroup?this.bvGroup.size:this.size)||""},computedState:function(){return this.isGroup?this.bvGroup.computedState:Object(s.b)(this.state)?this.state:null},computedButtonVariant:function(){var t=this.buttonVariant;return t||(this.isGroup&&this.bvGroup.buttonVariant?this.bvGroup.buttonVariant:"secondary")},buttonClasses:function(){var t,e=this.computedSize;return["btn","btn-".concat(this.computedButtonVariant),(t={},P(t,"btn-".concat(e),e),P(t,"disabled",this.isDisabled),P(t,"active",this.isChecked),P(t,"focus",this.hasFocus),t)]},computedAttrs:function(){var t=this.isDisabled,e=this.isRequired;return w(w({},this.bvAttrs),{},{id:this.safeId(),type:this.isRadio?"radio":"checkbox",name:this.computedName,form:this.computedForm,disabled:t,required:e,"aria-required":e||null,"aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||null})}},watch:(r={},P(r,S,(function(){this["".concat(S,"Watcher")].apply(this,arguments)})),P(r,"computedLocalChecked",(function(){this.computedLocalCheckedWatcher.apply(this,arguments)})),r),methods:(c={},P(c,"".concat(S,"Watcher"),(function(t){Object(b.a)(t,this.computedLocalChecked)||(this.computedLocalChecked=t)})),P(c,"computedLocalCheckedWatcher",(function(t,e){Object(b.a)(t,e)||this.$emit(D,t)})),P(c,"handleChange",(function(t){var e=this,n=t.target.checked,r=this.value,c=n?r:null;this.computedLocalChecked=r,this.$nextTick((function(){e.$emit(o.d,c),e.isGroup&&e.bvGroup.$emit(o.d,c)}))})),P(c,"handleFocus",(function(t){t.target&&("focus"===t.type?this.hasFocus=!0:"blur"===t.type&&(this.hasFocus=!1))})),P(c,"focus",(function(){this.isDisabled||Object(u.d)(this.$refs.input)})),P(c,"blur",(function(){this.isDisabled||Object(u.c)(this.$refs.input)})),c),render:function(t){var e=this.isRadio,n=this.isBtnMode,r=this.isPlain,c=this.isCustom,i=this.isInline,a=this.isSwitch,o=this.computedSize,u=this.bvAttrs,s=this.normalizeSlot(),b=t("input",{class:[{"form-check-input":r,"custom-control-input":c,"position-static":r&&!s},n?"":this.stateClass],directives:[{name:"model",value:this.computedLocalChecked}],attrs:this.computedAttrs,domProps:{value:this.value,checked:this.isChecked},on:w({change:this.handleChange},n?{focus:this.handleFocus,blur:this.handleFocus}:{}),key:"input",ref:"input"});if(n){var l=t("label",{class:this.buttonClasses},[b,s]);return this.isGroup||(l=t("div",{class:["btn-group-toggle","d-inline-block"]},[l])),l}var p=t();return r&&!s||(p=t("label",{class:{"form-check-label":r,"custom-control-label":c},attrs:{for:this.safeId()}},s)),t("div",{class:[P({"form-check":r,"form-check-inline":r&&i,"custom-control":c,"custom-control-inline":c&&i,"custom-checkbox":c&&!e&&!a,"custom-switch":a,"custom-radio":c&&e},"b-custom-control-".concat(o),o&&!n),u.class],style:u.style},[b,p])}})},248:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return b}));var r=n(8),c=n(47),i=n(5),a=n(2),o=n(1),u=n(305),s=Object(o.d)({append:Object(o.c)(a.g,!1),id:Object(o.c)(a.u),isText:Object(o.c)(a.g,!1),tag:Object(o.c)(a.u,"div")},i.nb),b=Object(r.c)({name:i.nb,functional:!0,props:s,render:function(t,e){var n=e.props,r=e.data,i=e.children,a=n.append;return t(n.tag,Object(c.a)(r,{class:{"input-group-append":a,"input-group-prepend":!a},attrs:{id:n.id}}),n.isText?[t(u.a,i)]:i)}})},305:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(8),c=n(47),i=n(5),a=n(2),o=n(1),u=Object(o.d)({tag:Object(o.c)(a.u,"div")},i.qb),s=Object(r.c)({name:i.qb,functional:!0,props:u,render:function(t,e){var n=e.props,r=e.data,i=e.children;return t(n.tag,Object(c.a)(r,{staticClass:"input-group-text"}),i)}})},306:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n(36),c=n.n(r),i=n(8),a=n(47),o=n(5),u=n(2),s=n(43),b=n(13),l=n(1),p=n(27),d=n(57),h=n(310);function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=Object(b.j)(h.b,["content"]),v=Object(l.d)(Object(b.m)(f(f({},m),{},{icon:Object(l.c)(u.u)})),o.ib),g=Object(i.c)({name:o.ib,functional:!0,props:v,render:function(t,e){var n=e.data,r=e.props,i=e.parent,o=Object(p.e)(Object(p.h)(r.icon||"")).replace(s.p,"");return t(o&&function t(e,n){if(!e)return c.a.component(n);var r=(e.$options||{}).components;return r&&r[n]||t(e.$parent,n)}(i,"BIcon".concat(o))||d.a,Object(a.a)(n,{props:Object(l.e)(m,r)}))}})},345:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return b}));var r=n(8),c=n(47),i=n(5),a=n(2),o=n(1),u=n(27),s=Object(o.d)({title:Object(o.c)(a.u),titleTag:Object(o.c)(a.u,"h4")},i.v),b=Object(r.c)({name:i.v,functional:!0,props:s,render:function(t,e){var n=e.props,r=e.data,i=e.children;return t(n.titleTag,Object(c.a)(r,{staticClass:"card-title"}),i||Object(u.g)(n.title))}})},441:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return s}));var r=n(8),c=n(47),i=n(5),a=n(2),o=n(1),u=Object(o.d)({id:Object(o.c)(a.u),inline:Object(o.c)(a.g,!1),novalidate:Object(o.c)(a.g,!1),validated:Object(o.c)(a.g,!1)},i.J),s=Object(r.c)({name:i.J,functional:!0,props:u,render:function(t,e){var n=e.props,r=e.data,i=e.children;return t("form",Object(c.a)(r,{class:{"form-inline":n.inline,"was-validated":n.validated},attrs:{id:n.id,novalidate:n.novalidate}}),i)}})},533:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(8),c=n(47),i=n(5),a=n(13),o=n(1),u=n(248);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=Object(o.d)(Object(a.j)(u.b,["append"]),i.pb),d=Object(r.c)({name:i.pb,functional:!0,props:p,render:function(t,e){var n=e.props,r=e.data,i=e.children;return t(u.a,Object(c.a)(r,{props:b(b({},n),{},{append:!1})}),i)}})},534:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(8),c=n(47),i=n(5),a=n(13),o=n(1),u=n(248);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=Object(o.d)(Object(a.j)(u.b,["append"]),i.ob),d=Object(r.c)({name:i.ob,functional:!0,props:p,render:function(t,e){var n=e.props,r=e.data,i=e.children;return t(u.a,Object(c.a)(r,{props:b(b({},n),{},{append:!0})}),i)}})},535:function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"a",(function(){return C}));var r=n(8),c=n(5),i=n(12),a=n(2),o=n(20),u=n(7),s=n(22),b=n(13),l=n(1),p=n(98),d=n(28),h=n(306),O=n(57),f=n(93),j=n(60);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=["sm",null,"lg"],w=function(t){return t=Object(u.n)(t)&&Object(u.i)(t)?Object(s.b)(t,0):t,Object(u.h)(t)?"".concat(t,"px"):t||null},P=Object(b.j)(j.b,["active","event","routerTag"]),k=Object(l.d)(Object(b.m)(v(v({},P),{},{alt:Object(l.c)(a.u,"avatar"),ariaLabel:Object(l.c)(a.u),badge:Object(l.c)(a.j,!1),badgeLeft:Object(l.c)(a.g,!1),badgeOffset:Object(l.c)(a.u),badgeTop:Object(l.c)(a.g,!1),badgeVariant:Object(l.c)(a.u,"primary"),button:Object(l.c)(a.g,!1),buttonType:Object(l.c)(a.u,"button"),icon:Object(l.c)(a.u),rounded:Object(l.c)(a.j,!1),size:Object(l.c)(a.p),square:Object(l.c)(a.g,!1),src:Object(l.c)(a.u),text:Object(l.c)(a.u),variant:Object(l.c)(a.u,"secondary")})),c.c),C=Object(r.c)({name:c.c,mixins:[d.a],inject:{getBvAvatarGroup:{default:function(){return function(){return null}}}},props:k,data:function(){return{localSrc:this.src||null}},computed:{bvAvatarGroup:function(){return this.getBvAvatarGroup()},computedSize:function(){var t=this.bvAvatarGroup;return w(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,n=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===n||(n||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===y.indexOf(t)?"calc(".concat(t," * ").concat(.4,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,n=e?e.overlapScale:0,r=t&&n?"calc(".concat(t," * -").concat(n,")"):null;return r?{marginLeft:r,marginRight:r}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,n=this.badgeLeft,r=this.badgeOffset||"0px";return{fontSize:-1===y.indexOf(t)?"calc(".concat(t," * ").concat(.4*.7," )"):null,top:e?r:null,bottom:e?null:r,left:n?r:null,right:n?null:r}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(i.y,t)},onClick:function(t){this.$emit(i.f,t)}},render:function(t){var e,n=this.computedVariant,r=this.disabled,c=this.computedRounded,i=this.icon,a=this.localSrc,u=this.text,s=this.fontStyle,b=this.marginStyle,d=this.computedSize,m=this.button,w=this.buttonType,k=this.badge,C=this.badgeVariant,G=this.badgeStyle,S=!m&&Object(p.d)(this),D=m?f.a:S?j.a:"span",x=this.alt,z=this.ariaLabel||null,L=null;this.hasNormalizedSlot()?L=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):a?(L=t("img",{style:n?{}:{width:"100%",height:"100%"},attrs:{src:a,alt:x},on:{error:this.onImgError}}),L=t("span",{staticClass:"b-avatar-img"},[L])):L=i?t(h.a,{props:{icon:i},attrs:{"aria-hidden":"true",alt:x}}):u?t("span",{staticClass:"b-avatar-text",style:s},[t("span",u)]):t(O.m,{attrs:{"aria-hidden":"true",alt:x}});var $=t(),E=this.hasNormalizedSlot(o.d);if(k||""===k||E){var V=!0===k?"":k;$=t("span",{staticClass:"b-avatar-badge",class:g({},"badge-".concat(C),C),style:G},[E?this.normalizeSlot(o.d):V])}return t(D,{staticClass:"b-avatar",class:(e={},g(e,"".concat("b-avatar","-").concat(d),d&&-1!==y.indexOf(d)),g(e,"badge-".concat(n),!m&&n),g(e,"rounded",!0===c),g(e,"rounded-".concat(c),c&&!0!==c),g(e,"disabled",r),e),style:v(v({},b),{},{width:d,height:d}),attrs:{"aria-label":z||null},props:m?{variant:n,disabled:r,type:w}:S?Object(l.e)(P,this):{},on:m||S?{click:this.onClick}:{}},[L,$])}})},538:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r,c=n(8),i=n(5),a=n(12),o=n(2),u=n(7),s=n(42),b=function(t,e){for(var n=0;n<t.length;n++)if(Object(s.a)(t[n],e))return n;return-1},l=n(13),p=n(1),d=n(230);function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=a.hb+"indeterminate",m=Object(p.d)(Object(l.m)(O(O({},d.c),{},(f(r={},"indeterminate",Object(p.c)(o.g,!1)),f(r,"switch",Object(p.c)(o.g,!1)),f(r,"uncheckedValue",Object(p.c)(o.a,!1)),f(r,"value",Object(p.c)(o.a,!0)),r))),i.L),v=Object(c.c)({name:i.L,mixins:[d.b],inject:{getBvGroup:{from:"getBvCheckGroup",default:function(){return function(){return null}}}},props:m,computed:{bvGroup:function(){return this.getBvGroup()},isChecked:function(){var t=this.value,e=this.computedLocalChecked;return Object(u.a)(e)?b(e,t)>-1:Object(s.a)(e,t)},isRadio:function(){return!1}},watch:f({},"indeterminate",(function(t,e){Object(s.a)(t,e)||this.setIndeterminate(t)})),mounted:function(){this.setIndeterminate(this.indeterminate)},methods:{computedLocalCheckedWatcher:function(t,e){if(!Object(s.a)(t,e)){this.$emit(d.a,t);var n=this.$refs.input;n&&this.$emit(j,n.indeterminate)}},handleChange:function(t){var e=this,n=t.target,r=n.checked,c=n.indeterminate,i=this.value,o=this.uncheckedValue,s=this.computedLocalChecked;if(Object(u.a)(s)){var l=b(s,i);r&&l<0?s=s.concat(i):!r&&l>-1&&(s=s.slice(0,l).concat(s.slice(l+1)))}else s=r?i:o;this.computedLocalChecked=s,this.$nextTick((function(){e.$emit(a.d,s),e.isGroup&&e.bvGroup.$emit(a.d,s),e.$emit(j,c)}))},setIndeterminate:function(t){Object(u.a)(this.computedLocalChecked)&&(t=!1);var e=this.$refs.input;e&&(e.indeterminate=t,this.$emit(j,t))}}})}}]);