(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{1907:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(47),i=n(5),s=n(2),o=n(23),c=n(69),u=n(35),a=n(206),l=n(13),d=n(1),p=n(27);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){b(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var g=["start","end","center"],m=Object(a.a)((function(t,e){return(e=Object(p.h)(Object(p.g)(e)))?Object(p.c)(["row-cols",t,e].filter(u.a).join("-")):null})),O=Object(a.a)((function(t){return Object(p.c)(t.replace("cols",""))})),j=[],v={name:i.Ob,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(c.b)().reduce((function(t,e){return t[Object(d.g)(e,"cols")]=Object(d.c)(s.p),t}),Object(l.c)(null)),j=Object(l.h)(t),Object(d.d)(Object(l.m)(h(h({},t),{},{alignContent:Object(d.c)(s.u,null,(function(t){return Object(o.a)(Object(o.b)(g,"between","around","stretch"),t)})),alignH:Object(d.c)(s.u,null,(function(t){return Object(o.a)(Object(o.b)(g,"between","around"),t)})),alignV:Object(d.c)(s.u,null,(function(t){return Object(o.a)(Object(o.b)(g,"baseline","stretch"),t)})),noGutters:Object(d.c)(s.g,!1),tag:Object(d.c)(s.u,"div")})),i.Ob)),this.props},render:function(t,e){var n,i=e.props,s=e.data,o=e.children,c=i.alignV,u=i.alignH,a=i.alignContent,l=[];return j.forEach((function(t){var e=m(O(t),i[t]);e&&l.push(e)})),l.push((b(n={"no-gutters":i.noGutters},"align-items-".concat(c),c),b(n,"justify-content-".concat(u),u),b(n,"align-content-".concat(a),a),n)),t(i.tag,Object(r.a)(s,{staticClass:"row",class:l}),o)}}},1908:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(8),i=n(47),s=n(5),o=n(2),c=n(1),u=Object(c.d)({textTag:Object(c.c)(o.u,"p")},s.u),a=Object(r.c)({name:s.u,functional:!0,props:u,render:function(t,e){var n=e.props,r=e.data,s=e.children;return t(n.textTag,Object(i.a)(r,{staticClass:"card-text"}),s)}})},223:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r={name:"default-section",props:{section:{type:Object,required:!0},currentIndex:{type:[Number,String],required:!1,default:1/0},renderSuggestion:{type:Function,required:!1},normalizeItemFunction:{type:Function,required:!0},componentAttrPrefix:{type:String,required:!0},componentAttrIdAutosuggest:{type:String,required:!0}},data:function(){return{_currentIndex:this.currentIndex}},computed:{list:function(){var t=this.section,e=t.limit,n=t.data;return n.length<e&&(e=n.length),n.slice(0,e)}},methods:{getItemIndex:function(t){return this.section.start_index+t},getItemByIndex:function(t){return this.section.data[t]},onMouseEnter:function(t){var e=parseInt(t.currentTarget.getAttribute("data-suggestion-index"));this._currentIndex=e,this.$emit("updateCurrentIndex",e)},onMouseLeave:function(){this.$emit("updateCurrentIndex",null)}},render:function(t){var e=this,n=this.componentAttrPrefix,r={beforeSection:this.$scopedSlots["before-section-"+this.section.name],afterSectionDefault:this.$scopedSlots["after-section"],afterSectionNamed:this.$scopedSlots["after-section-"+this.section.name]},i=n+"__results-before "+n+"__results-before--"+this.section.name,s=r.beforeSection&&r.beforeSection({section:this.section,className:i})||[];return t("ul",{attrs:{role:"listbox","aria-labelledby":this.section.label&&this.componentAttrIdAutosuggest+"-"+this.section.label},class:this.section.ulClass},[s[0]&&s[0]||this.section.label&&t("li",{class:i,id:this.componentAttrIdAutosuggest+"-"+this.section.label},this.section.label)||"",this.list.map((function(r,i){var s,o=e.normalizeItemFunction(e.section.name,e.section.type,e.section.label,e.section.liClass,r),c=e.getItemIndex(i),u=e._currentIndex===c||parseInt(e.currentIndex)===c;return t("li",{attrs:Object.assign({},{role:"option","data-suggestion-index":c,"data-section-name":o.name,id:n+"__results-item--"+c},o.liAttributes),key:c,class:Object.assign((s={},s[n+"__results-item--highlighted"]=u,s[n+"__results-item"]=!0,s),o.liClass),on:{mouseenter:e.onMouseEnter,mouseleave:e.onMouseLeave}},[e.renderSuggestion?e.renderSuggestion(o):e.$scopedSlots.default&&e.$scopedSlots.default({_key:i,suggestion:o})])})),r.afterSectionDefault&&r.afterSectionDefault({section:this.section,className:n+"__results-after "+n+"__results-after--"+this.section.name}),r.afterSectionNamed&&r.afterSectionNamed({section:this.section,className:n+"__results_after "+n+"__results-after--"+this.section.name})])}};function i(t,e){(function(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))})(t,e)||(t.className+=" "+e)}var s="default",o="default-section",c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:t.componentAttrIdAutosuggest}},[t._t("before-input"),n("div",{attrs:{role:"combobox","aria-expanded":t.isOpen?"true":"false","aria-haspopup":"listbox","aria-owns":t.componentAttrIdAutosuggest+"-"+t.componentAttrPrefix+"__results"}},[n("input",t._g(t._b({class:[t.isOpen?t.componentAttrPrefix+"__input--open":"",t.internal_inputProps.class],attrs:{type:t.internal_inputProps.type,autocomplete:t.internal_inputProps.autocomplete,"aria-autocomplete":"list","aria-activedescendant":t.isOpen&&null!==t.currentIndex?t.componentAttrPrefix+"__results-item--"+t.currentIndex:"","aria-controls":t.componentAttrIdAutosuggest+"-"+t.componentAttrPrefix+"__results"},domProps:{value:t.internalValue},on:{input:t.inputHandler,keydown:t.handleKeyStroke}},"input",t.internal_inputProps,!1),t.listeners))]),t._t("after-input"),t._v(" "),n("div",{class:t._componentAttrClassAutosuggestResultsContainer,attrs:{id:t.componentAttrIdAutosuggest+"-"+t.componentAttrPrefix+"__results"}},[t.isOpen?n("div",{class:t._componentAttrClassAutosuggestResults,attrs:{"aria-labelledby":t.componentAttrIdAutosuggest}},[t._t("before-suggestions"),t._v(" "),t._l(t.computedSections,(function(e,r){return n(e.type,{key:t.getSectionRef(""+e.name+r),ref:t.getSectionRef(""+e.name+r),refInFor:!0,tag:"component",attrs:{"current-index":t.currentIndex,"normalize-item-function":t.normalizeItem,"render-suggestion":t.renderSuggestion,section:e,"component-attr-prefix":t.componentAttrPrefix,"component-attr-id-autosuggest":t.componentAttrIdAutosuggest},on:{updateCurrentIndex:t.updateCurrentIndex},scopedSlots:t._u([{key:"before-section-"+(e.name||e.label),fn:function(n){var r=n.section,i=n.className;return[t._t("before-section-"+(e.name||e.label),null,{section:r,className:i})]}},{key:"default",fn:function(e){var n=e.suggestion,r=e._key;return[t._t("default",[t._v(" "+t._s(n.item)+" ")],{suggestion:n,index:r})]}},{key:"after-section-"+(e.name||e.label),fn:function(n){var r=n.section;return[t._t("after-section-"+(e.name||e.label),null,{section:r})]}},{key:"after-section",fn:function(e){var n=e.section;return[t._t("after-section",null,{section:n})]}}])})})),t._v(" "),t._t("after-suggestions")],2):t._e(),t._v(" "),t._t("after-suggestions-container")],2)],2)},staticRenderFns:[],name:"Autosuggest",components:{DefaultSection:r},props:{value:{type:String,default:null},inputProps:{type:Object,required:!0},limit:{type:Number,required:!1,default:1/0},suggestions:{type:Array,required:!0},renderSuggestion:{type:Function,required:!1,default:null},getSuggestionValue:{type:Function,required:!1,default:function(t){var e=t.item;return"object"==typeof e&&e.hasOwnProperty("name")?e.name:e}},shouldRenderSuggestions:{type:Function,required:!1,default:function(t,e){return t>0&&!e}},sectionConfigs:{type:Object,required:!1,default:function(){return{default:{onSelected:null}}}},onSelected:{type:Function,required:!1,default:null},componentAttrIdAutosuggest:{type:String,required:!1,default:"autosuggest"},componentAttrClassAutosuggestResultsContainer:{type:String,required:!1,default:null},componentAttrClassAutosuggestResults:{type:String,required:!1,default:null},componentAttrPrefix:{type:String,required:!1,default:"autosuggest"}},data:function(){return{internalValue:null,searchInputOriginal:null,currentIndex:null,currentItem:null,loading:!1,didSelectFromOptions:!1,defaultInputProps:{type:"text",autocomplete:"off"},clientXMouseDownInitial:null}},computed:{internal_inputProps:function(){return Object.assign({},this.defaultInputProps,this.inputProps)},listeners:function(){var t=this;return Object.assign({},this.$listeners,{input:function(t){},click:function(){t.loading=!1,t.$listeners.click&&t.$listeners.click(t.currentItem),t.$nextTick((function(){t.ensureItemVisible(t.currentItem,t.currentIndex)}))},selected:function(){t.currentItem&&t.sectionConfigs[t.currentItem.name]&&t.sectionConfigs[t.currentItem.name].onSelected?t.sectionConfigs[t.currentItem.name].onSelected(t.currentItem,t.searchInputOriginal):t.sectionConfigs.default.onSelected?t.sectionConfigs.default.onSelected(null,t.searchInputOriginal):t.$listeners.selected&&t.$emit("selected",t.currentItem,t.currentIndex),t.setChangeItem(null)}})},isOpen:function(){return this.shouldRenderSuggestions(this.totalResults,this.loading)},computedSections:function(){var t=this,e=0;return this.suggestions.map((function(n){if(n.data){var r,i,c,u,a=n.name?n.name:s,l=null;t.sectionConfigs[a]&&(r=t.sectionConfigs[a].limit,c=t.sectionConfigs[a].type,i=t.sectionConfigs[a].label,u=t.sectionConfigs[a].ulClass,l=t.sectionConfigs[a].liClass),c=c||o,r=(r=r||t.limit)||1/0,r=n.data.length<r?n.data.length:r;var d={name:a,label:i=i||n.label,type:c,limit:r,data:n.data,start_index:e,end_index:e+r-1,ulClass:u,liClass:l};return e+=r,d}}))},totalResults:function(){return this.computedSections.reduce((function(t,e){if(!e)return t;var n=e.limit,r=e.data;return t+(r.length>=n?n:r.length)}),0)},_componentAttrClassAutosuggestResultsContainer:function(){return this.componentAttrClassAutosuggestResultsContainer||this.componentAttrPrefix+"__results-container"},_componentAttrClassAutosuggestResults:function(){return this.componentAttrClassAutosuggestResults||this.componentAttrPrefix+"__results"}},watch:{value:{handler:function(t){this.internalValue=t},immediate:!0},isOpen:{handler:function(t,e){t!==e&&this.$emit(t?"opened":"closed")},immediate:!0}},created:function(){this.loading=!0},mounted:function(){document.addEventListener("mouseup",this.onDocumentMouseUp),document.addEventListener("mousedown",this.onDocumentMouseDown)},beforeDestroy:function(){document.removeEventListener("mouseup",this.onDocumentMouseUp),document.removeEventListener("mousedown",this.onDocumentMouseDown)},methods:{inputHandler:function(t){var e=t.target.value;this.$emit("input",e),this.internalValue=e,this.didSelectFromOptions||(this.searchInputOriginal=e,this.currentIndex=null)},getSectionRef:function(t){return"computed_section_"+t},getItemByIndex:function(t){var e=!1;if(null===t)return e;for(var n=0;n<this.computedSections.length;n++)if(t>=this.computedSections[n].start_index&&t<=this.computedSections[n].end_index){var r=t-this.computedSections[n].start_index,i=this.computedSections[n].name,s=this.$refs[this.getSectionRef(""+i+n)][0];if(s){e=this.normalizeItem(this.computedSections[n].name,this.computedSections[n].type,s.section.label,s.section.liClass,s.getItemByIndex(r));break}}return e},handleKeyStroke:function(t){var e=this,n=t.keyCode;if(!([16,9,17,18,91,93].indexOf(n)>-1)){var r=!this.isOpen;if(this.loading=!1,this.didSelectFromOptions=!1,this.isOpen)switch(n){case 40:case 38:if(t.preventDefault(),38===n&&null===this.currentIndex)break;var i=40===n?1:-1,s=Math.max((parseInt(this.currentIndex)||0)+(r?0:i),-1);this.setCurrentIndex(s,this.totalResults),this.didSelectFromOptions=!0,this.totalResults>0&&this.currentIndex>=0?(this.setChangeItem(this.getItemByIndex(this.currentIndex)),this.didSelectFromOptions=!0):-1===this.currentIndex&&(this.setChangeItem(null),this.internalValue=this.searchInputOriginal,t.preventDefault()),this.$nextTick((function(){e.ensureItemVisible(e.currentItem,e.currentIndex)}));break;case 13:t.preventDefault(),this.totalResults>0&&this.currentIndex>=0&&(this.setChangeItem(this.getItemByIndex(this.currentIndex),!0),this.didSelectFromOptions=!0),this.loading=!0,this.listeners.selected(this.didSelectFromOptions);break;case 27:this.loading=!0,this.currentIndex=null,this.internalValue=this.searchInputOriginal,this.$emit("input",this.searchInputOriginal),t.preventDefault()}}},setChangeItem:function(t,e){if(void 0===e&&(e=!1),null!==this.currentIndex&&t){if(t){this.currentItem=t,this.$emit("item-changed",t,this.currentIndex);var n=this.getSuggestionValue(t);this.internalValue=n,e&&(this.searchInputOriginal=n),this.ensureItemVisible(t,this.currentIndex)}}else this.currentItem=null,this.$emit("item-changed",null,null)},normalizeItem:function(t,e,n,r,i){return{name:t,type:e,label:n,liClass:i.liClass||r,item:i}},ensureItemVisible:function(t,e,n){var r=this.$el.querySelector(n||"."+this._componentAttrClassAutosuggestResults);if(r){var i=r.querySelector("#"+this.componentAttrPrefix+"__results-item--"+e);if(i){var s=r.clientHeight,o=r.scrollTop,c=i.clientHeight,u=i.offsetTop;c+u>=o+s?r.scrollTop=c+u-s:u<o&&o>0&&(r.scrollTop=u)}}},updateCurrentIndex:function(t){this.setCurrentIndex(t,-1,!0)},clickedOnScrollbar:function(t,e){var n=this.$el.querySelector("."+this._componentAttrClassAutosuggestResults),r=n&&n.clientWidth<=e+17&&e+17<=n.clientWidth+34;return"DIV"===t.target.tagName&&n&&r||!1},onDocumentMouseDown:function(t){var e=t.target.getBoundingClientRect?t.target.getBoundingClientRect():0;this.clientXMouseDownInitial=t.clientX-e.left},onDocumentMouseUp:function(t){if(!this.$el.contains(t.target))return this.loading=!0,void(this.currentIndex=null);"INPUT"===t.target.tagName||this.clickedOnScrollbar(t,this.clientXMouseDownInitial)||(this.loading=!0,this.didSelectFromOptions=!0,this.setChangeItem(this.getItemByIndex(this.currentIndex),!0),this.listeners.selected(!0))},setCurrentIndex:function(t,e,n){void 0===e&&(e=-1),void 0===n&&(n=!1);var r=t;n||(null===this.currentIndex||t>=e)&&(r=0),this.currentIndex=r;var s=this.$el.querySelector("#"+this.componentAttrPrefix+"__results-item--"+this.currentIndex),o=this.componentAttrPrefix+"__results-item--highlighted";this.$el.querySelector("."+o)&&function(t,e){t.classList&&t.classList.remove(e)}(this.$el.querySelector("."+o),o),s&&i(s,o)}}},u={install:function(t){t.component("vue-autosuggest-default-section",r),t.component("vue-autosuggest",c)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(u)},305:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var r=n(36),i=n.n(r),s=n(8),o=n(47),c=n(5),u=n(2),a=n(43),l=n(13),d=n(1),p=n(27),f=n(56),h=n(309);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=Object(l.j)(h.b,["content"]),j=Object(d.d)(Object(l.m)(g(g({},O),{},{icon:Object(d.c)(u.u)})),c.ib),v=Object(s.c)({name:c.ib,functional:!0,props:j,render:function(t,e){var n=e.data,r=e.props,s=e.parent,c=Object(p.e)(Object(p.h)(r.icon||"")).replace(a.p,"");return t(c&&function t(e,n){if(!e)return i.a.component(n);var r=(e.$options||{}).components;return r&&r[n]||t(e.$parent,n)}(s,"BIcon".concat(c))||f.a,Object(o.a)(n,{props:Object(d.e)(O,r)}))}})},355:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var r=n(47),i=n(5),s=n(2),o=n(43),c=n(23),u=n(69),a=n(35),l=n(7),d=n(206),p=n(13),f=n(1),h=n(27);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var O=["auto","start","end","center","baseline","stretch"],j=Object(d.a)((function(t,e,n){var r=t;if(!Object(l.p)(n)&&!1!==n)return e&&(r+="-".concat(e)),"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),Object(h.c)(r)):Object(h.c)(r)})),v=Object(p.c)(null),y={name:i.y,functional:!0,get props(){return delete this.props,this.props=(t=Object(u.b)().filter(a.a),e=t.reduce((function(t,e){return t[e]=Object(f.c)(s.i),t}),Object(p.c)(null)),n=t.reduce((function(t,e){return t[Object(f.g)(e,"offset")]=Object(f.c)(s.p),t}),Object(p.c)(null)),r=t.reduce((function(t,e){return t[Object(f.g)(e,"order")]=Object(f.c)(s.p),t}),Object(p.c)(null)),v=Object(p.a)(Object(p.c)(null),{col:Object(p.h)(e),offset:Object(p.h)(n),order:Object(p.h)(r)}),Object(f.d)(Object(p.m)(g(g(g(g({},e),n),r),{},{alignSelf:Object(f.c)(s.u,null,(function(t){return Object(c.a)(O,t)})),col:Object(f.c)(s.g,!1),cols:Object(f.c)(s.p),offset:Object(f.c)(s.p),order:Object(f.c)(s.p),tag:Object(f.c)(s.u,"div")})),i.y));var t,e,n,r},render:function(t,e){var n,i=e.props,s=e.data,c=e.children,u=i.cols,a=i.offset,l=i.order,d=i.alignSelf,p=[];for(var f in v)for(var h=v[f],b=0;b<h.length;b++){var g=j(f,h[b].replace(f,""),i[h[b]]);g&&p.push(g)}var O=p.some((function(t){return o.e.test(t)}));return p.push((m(n={col:i.col||!O&&!u},"col-".concat(u),u),m(n,"offset-".concat(a),a),m(n,"order-".concat(l),l),m(n,"align-self-".concat(d),d),n)),t(i.tag,Object(r.a)(s,{class:p}),c)}}},534:function(t,e,n){"use strict";n.d(e,"b",(function(){return I})),n.d(e,"a",(function(){return _}));var r=n(8),i=n(5),s=n(12),o=n(2),c=n(20),u=n(7),a=n(22),l=n(13),d=n(1),p=n(96),f=n(28),h=n(305),b=n(56),g=n(92),m=n(59);function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=["sm",null,"lg"],I=function(t){return t=Object(u.n)(t)&&Object(u.i)(t)?Object(a.b)(t,0):t,Object(u.h)(t)?"".concat(t,"px"):t||null},S=Object(l.j)(m.b,["active","event","routerTag"]),x=Object(d.d)(Object(l.m)(j(j({},S),{},{alt:Object(d.c)(o.u,"avatar"),ariaLabel:Object(d.c)(o.u),badge:Object(d.c)(o.j,!1),badgeLeft:Object(d.c)(o.g,!1),badgeOffset:Object(d.c)(o.u),badgeTop:Object(d.c)(o.g,!1),badgeVariant:Object(d.c)(o.u,"primary"),button:Object(d.c)(o.g,!1),buttonType:Object(d.c)(o.u,"button"),icon:Object(d.c)(o.u),rounded:Object(d.c)(o.j,!1),size:Object(d.c)(o.p),square:Object(d.c)(o.g,!1),src:Object(d.c)(o.u),text:Object(d.c)(o.u),variant:Object(d.c)(o.u,"secondary")})),i.c),_=Object(r.c)({name:i.c,mixins:[f.a],inject:{getBvAvatarGroup:{default:function(){return function(){return null}}}},props:x,data:function(){return{localSrc:this.src||null}},computed:{bvAvatarGroup:function(){return this.getBvAvatarGroup()},computedSize:function(){var t=this.bvAvatarGroup;return I(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,e=!(!t||!t.square)||this.square,n=t&&t.rounded?t.rounded:this.rounded;return e?"0":""===n||(n||"circle")},fontStyle:function(){var t=this.computedSize,e=-1===y.indexOf(t)?"calc(".concat(t," * ").concat(.4,")"):null;return e?{fontSize:e}:{}},marginStyle:function(){var t=this.computedSize,e=this.bvAvatarGroup,n=e?e.overlapScale:0,r=t&&n?"calc(".concat(t," * -").concat(n,")"):null;return r?{marginLeft:r,marginRight:r}:{}},badgeStyle:function(){var t=this.computedSize,e=this.badgeTop,n=this.badgeLeft,r=this.badgeOffset||"0px";return{fontSize:-1===y.indexOf(t)?"calc(".concat(t," * ").concat(.4*.7," )"):null,top:e?r:null,bottom:e?null:r,left:n?r:null,right:n?null:r}}},watch:{src:function(t,e){t!==e&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(s.y,t)},onClick:function(t){this.$emit(s.f,t)}},render:function(t){var e,n=this.computedVariant,r=this.disabled,i=this.computedRounded,s=this.icon,o=this.localSrc,u=this.text,a=this.fontStyle,l=this.marginStyle,f=this.computedSize,O=this.button,I=this.buttonType,x=this.badge,_=this.badgeVariant,A=this.badgeStyle,C=!O&&Object(p.d)(this),P=O?g.a:C?m.a:"span",w=this.alt,D=this.ariaLabel||null,k=null;this.hasNormalizedSlot()?k=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):o?(k=t("img",{style:n?{}:{width:"100%",height:"100%"},attrs:{src:o,alt:w},on:{error:this.onImgError}}),k=t("span",{staticClass:"b-avatar-img"},[k])):k=s?t(h.a,{props:{icon:s},attrs:{"aria-hidden":"true",alt:w}}):u?t("span",{staticClass:"b-avatar-text",style:a},[t("span",u)]):t(b.m,{attrs:{"aria-hidden":"true",alt:w}});var $=t(),R=this.hasNormalizedSlot(c.d);if(x||""===x||R){var q=!0===x?"":x;$=t("span",{staticClass:"b-avatar-badge",class:v({},"badge-".concat(_),_),style:A},[R?this.normalizeSlot(c.d):q])}return t(P,{staticClass:"b-avatar",class:(e={},v(e,"".concat("b-avatar","-").concat(f),f&&-1!==y.indexOf(f)),v(e,"badge-".concat(n),!O&&n),v(e,"rounded",!0===i),v(e,"rounded-".concat(i),i&&!0!==i),v(e,"disabled",r),e),style:j(j({},l),{},{width:f,height:f}),attrs:{"aria-label":D||null},props:O?{variant:n,disabled:r,type:I}:C?Object(d.e)(S,this):{},on:O||C?{click:this.onClick}:{}},[k,$])}})}}]);