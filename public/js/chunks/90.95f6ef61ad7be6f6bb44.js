(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1298:function(t,e){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/pages/coming-soon.svg"},1299:function(t,e){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/pages/coming-soon-dark.svg"},1300:function(t,e,n){"use strict";n(672)},1301:function(t,e,n){(e=n(20)(!1)).push([t.i,".misc-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.misc-wrapper .misc-inner {\n  position: relative;\n  max-width: 750px;\n}\n.misc-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 2rem;\n}\n[dir] .misc-wrapper .brand-logo {\n  margin: 0;\n}\n[dir=ltr] .misc-wrapper .brand-logo {\n  left: 2rem;\n}\n[dir=rtl] .misc-wrapper .brand-logo {\n  right: 2rem;\n}\n.misc-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n@media (max-height: 625px) {\n[dir] .misc-wrapper .misc-inner {\n    margin-top: 4rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 40.95px;\n}",""]),t.exports=e},1604:function(t,e,n){"use strict";n.r(e);var i=n(59),r=n(440),c=n(89),o=n(1860),a=n(226),s=n(53),u=n(15),l={components:{VuexyLogo:s.a,BLink:i.a,BForm:r.a,BButton:c.a,BFormInput:o.a,BImg:a.a},data:function(){return{downImg:n(1298)}},computed:{imgUrl:function(){return"dark"===u.a.state.appConfig.layout.skin?(this.downImg=n(1299),this.downImg):this.downImg}}},p=(n(1300),n(0)),b=Object(p.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"misc-wrapper"},[n("b-link",{staticClass:"brand-logo"},[n("vuexy-logo"),t._v(" "),n("h2",{staticClass:"brand-text text-primary ml-1"},[t._v("\n        Vuexy\n      ")])],1),t._v(" "),n("div",{staticClass:"misc-inner p-2 p-sm-3"},[n("div",{staticClass:"w-100 text-center"},[n("h2",{staticClass:"mb-1"},[t._v("\n          We are launching soon 🚀\n        ")]),t._v(" "),n("p",{staticClass:"mb-3"},[t._v("\n          We're creating something awesome. Please subscribe to get notified when it's ready!\n        ")]),t._v(" "),n("b-form",{staticClass:"row justify-content-center m-0 mb-2",attrs:{inline:""},on:{submit:function(t){t.preventDefault()}}},[n("b-form-input",{staticClass:"col-12 col-md-5 mb-1 mr-md-2",attrs:{id:"notify-email",type:"text",placeholder:"john@example.com"}}),t._v(" "),n("b-button",{staticClass:"mb-1 btn-sm-block",attrs:{variant:"primary",type:"submit"}},[t._v("\n            Notify\n          ")])],1),t._v(" "),n("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Coming soon page"}})],1)])],1)}),[],!1,null,null,null);e.default=b.exports},1860:function(t,e,n){"use strict";n.d(e,"a",(function(){return V}));var i=n(8),r=n(5),c=n(2),o=n(23),a=n(6),s=n(17),u=n(13),l=n(1),p=n(68),b=n(347),d=n(66),f=n(63),h=n(245),m=n(348),g=n(31),O=n(97);function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],x=Object(l.d)(Object(u.m)(v(v(v(v(v(v({},g.b),p.b),d.b),f.b),h.b),{},{list:Object(l.c)(c.u),max:Object(l.c)(c.p),min:Object(l.c)(c.p),noWheel:Object(l.c)(c.g,!1),step:Object(l.c)(c.p),type:Object(l.c)(c.u,"text",(function(t){return Object(o.a)(w,t)}))})),r.R),V=Object(i.c)({name:r.R,mixins:[O.a,g.a,p.a,d.a,f.a,h.a,b.a,m.a],props:x,computed:{localType:function(){var t=this.type;return Object(o.a)(w,t)?t:"text"},computedAttrs:function(){var t=this.localType,e=this.name,n=this.form,i=this.disabled,r=this.placeholder,c=this.required,o=this.min,a=this.max,s=this.step;return{id:this.safeId(),name:e,form:n,type:t,disabled:i,placeholder:r,required:c,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:o,max:a,step:s,list:"password"!==t?this.list:null,"aria-required":c?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return v(v({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var e=this.$el;Object(s.c)(t,e,"focus",this.onWheelFocus),Object(s.c)(t,e,"blur",this.onWheelBlur),t||Object(s.a)(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(s.b)(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(s.a)(document,"wheel",this.stopWheel)},stopWheel:function(t){Object(s.f)(t,{propagation:!1}),Object(a.c)(this.$el)}},render:function(t){return t("input",{class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}})},226:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return m}));var i=n(8),r=n(48),c=n(5),o=n(2),a=n(23),s=n(35),u=n(7),l=n(22),p=n(1),b=n(27);function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f='<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none"><rect width="100%" height="100%" style="fill:%{f};"></rect></svg>',h=Object(p.d)({alt:Object(p.c)(o.u),blank:Object(p.c)(o.g,!1),blankColor:Object(p.c)(o.u,"transparent"),block:Object(p.c)(o.g,!1),center:Object(p.c)(o.g,!1),fluid:Object(p.c)(o.g,!1),fluidGrow:Object(p.c)(o.g,!1),height:Object(p.c)(o.p),left:Object(p.c)(o.g,!1),right:Object(p.c)(o.g,!1),rounded:Object(p.c)(o.j,!1),sizes:Object(p.c)(o.f),src:Object(p.c)(o.u),srcset:Object(p.c)(o.f),thumbnail:Object(p.c)(o.g,!1),width:Object(p.c)(o.p)},c.kb),m=Object(i.c)({name:c.kb,functional:!0,props:h,render:function(t,e){var n,i=e.props,c=e.data,o=i.alt,p=i.src,h=i.block,m=i.fluidGrow,g=i.rounded,O=Object(l.c)(i.width)||null,j=Object(l.c)(i.height)||null,v=null,y=Object(a.b)(i.srcset).filter(s.a).join(","),w=Object(a.b)(i.sizes).filter(s.a).join(",");return i.blank&&(!j&&O?j=O:!O&&j&&(O=j),O||j||(O=1,j=1),p=function(t,e,n){var i=encodeURIComponent(f.replace("%{w}",Object(b.g)(t)).replace("%{h}",Object(b.g)(e)).replace("%{f}",n));return"data:image/svg+xml;charset=UTF-8,".concat(i)}(O,j,i.blankColor||"transparent"),y=null,w=null),i.left?v="float-left":i.right?v="float-right":i.center&&(v="mx-auto",h=!0),t("img",Object(r.a)(c,{attrs:{src:p,alt:o,width:O?Object(b.g)(O):null,height:j?Object(b.g)(j):null,srcset:y||null,sizes:w||null},class:(n={"img-thumbnail":i.thumbnail,"img-fluid":i.fluid||m,"w-100":m,rounded:""===g||!0===g},d(n,"rounded-".concat(g),Object(u.n)(g)&&""!==g),d(n,v,v),d(n,"d-block",h),n)}))}})},245:function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"a",(function(){return x}));var i=n(8),r=n(12),c=n(2),o=n(6),a=n(17),s=n(38),u=n(50),l=n(22),p=n(13),b=n(1),d=n(27);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=Object(u.a)("value",{type:c.p,defaultValue:"",event:r.cb}),O=g.mixin,j=g.props,v=g.prop,y=g.event,w=Object(b.d)(Object(p.m)(h(h({},j),{},{ariaInvalid:Object(b.c)(c.j,!1),autocomplete:Object(b.c)(c.u),debounce:Object(b.c)(c.p,0),formatter:Object(b.c)(c.l),lazy:Object(b.c)(c.g,!1),lazyFormatter:Object(b.c)(c.g,!1),number:Object(b.c)(c.g,!1),placeholder:Object(b.c)(c.u),plaintext:Object(b.c)(c.g,!1),readonly:Object(b.c)(c.g,!1),trim:Object(b.c)(c.g,!1)})),"formTextControls"),x=Object(i.c)({mixins:[O],props:w,data:function(){var t=this[v];return{localValue:Object(d.g)(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,e=this.type,n="range"===e,i="color"===e;return[{"custom-range":n,"form-control-plaintext":t&&!n&&!i,"form-control":i||!t&&!n},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Object(s.d)(Object(l.c)(this.debounce,0),0)},hasFormatter:function(){return Object(b.b)(this.formatter)}},watch:m({},v,(function(t){var e=Object(d.g)(t),n=this.modifyValue(t);e===this.localValue&&n===this.vModelValue||(this.clearDebounce(),this.localValue=e,this.vModelValue=n)})),created:function(){this.$_inputDebounceTimer=null},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(d.g)(t),!this.hasFormatter||this.lazyFormatter&&!n||(t=this.formatter(t,e)),t},modifyValue:function(t){return t=Object(d.g)(t),this.trim&&(t=t.trim()),this.number&&(t=Object(l.b)(t,t)),t},updateValue:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.lazy;if(!i||n){this.clearDebounce();var r=function(){if((t=e.modifyValue(t))!==e.vModelValue)e.vModelValue=t,e.$emit(y,t);else if(e.hasFormatter){var n=e.$refs.input;n&&t!==n.value&&(n.value=t)}},c=this.computedDebounce;c>0&&!i&&!n?this.$_inputDebounceTimer=setTimeout(r,c):r()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(a.f)(t,{propagation:!1}):(this.localValue=n,this.updateValue(n),this.$emit(r.z,n))}},onChange:function(t){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(a.f)(t,{propagation:!1}):(this.localValue=n,this.updateValue(n,!0),this.$emit(r.d,n))},onBlur:function(t){var e=t.target.value,n=this.formatValue(e,t,!0);!1!==n&&(this.localValue=Object(d.g)(this.modifyValue(n)),this.updateValue(n,!0)),this.$emit(r.b,t)},focus:function(){this.disabled||Object(o.d)(this.$el)},blur:function(){this.disabled||Object(o.c)(this.$el)}}})},347:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(8),r=Object(i.c)({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}})},348:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(8),r=Object(i.c)({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}})},440:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));var i=n(8),r=n(48),c=n(5),o=n(2),a=n(1),s=Object(a.d)({id:Object(a.c)(o.u),inline:Object(a.c)(o.g,!1),novalidate:Object(a.c)(o.g,!1),validated:Object(a.c)(o.g,!1)},c.J),u=Object(i.c)({name:c.J,functional:!0,props:s,render:function(t,e){var n=e.props,i=e.data,c=e.children;return t("form",Object(r.a)(i,{class:{"form-inline":n.inline,"was-validated":n.validated},attrs:{id:n.id,novalidate:n.novalidate}}),c)}})},53:function(t,e,n){"use strict";var i={components:{BImg:n(226).a},data:function(){return{sideImg:n(309)}},computed:{imgUrl:function(){return this.sideImg}}},r=n(0),c=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b-img",{attrs:{src:this.imgUrl,height:"24",alt:"Logo"}})}),[],!1,null,null,null);e.a=c.exports},63:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));var i=n(8),r=n(2),c=n(7),o=n(1),a=n(58),s=Object(o.d)({state:Object(o.c)(r.g,null)},"formState"),u=Object(i.c)({props:s,computed:{computedState:function(){return Object(c.b)(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null},computedAriaInvalid:function(){var t=Object(a.a)(this).ariaInvalid;return!0===t||"true"===t||""===t||!1===this.computedState?"true":t}}})},66:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}));var i=n(8),r=n(2),c=n(1),o=Object(c.d)({size:Object(c.c)(r.u)},"formControls"),a=Object(i.c)({props:o,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},672:function(t,e,n){var i=n(1301);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(21)(i,r);i.locals&&(t.exports=i.locals)},68:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s}));var i=n(8),r=n(2),c=n(6),o=n(1),a=Object(o.d)({autofocus:Object(o.c)(r.g,!1),disabled:Object(o.c)(r.g,!1),form:Object(o.c)(r.u),id:Object(o.c)(r.u),name:Object(o.c)(r.u),required:Object(o.c)(r.g,!1)},"formControls"),s=Object(i.c)({props:a,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(c.B)((function(){var e=t.$el;t.autofocus&&Object(c.u)(e)&&(Object(c.v)(e,"input, textarea, select")||(e=Object(c.C)("input, textarea, select",e)),Object(c.d)(e))}))}))}}})}}]);