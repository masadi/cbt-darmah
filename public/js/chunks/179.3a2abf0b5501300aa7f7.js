(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[179],{

/***/ "./node_modules/vue-autosuggest/dist/vue-autosuggest.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-autosuggest/dist/vue-autosuggest.esm.js ***!
  \******************************************************************/
/*! exports provided: default, VueAutosuggest, DefaultSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueAutosuggest", function() { return VueAutosuggest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultSection", function() { return DefaultSection; });
var DefaultSection={name:"default-section",props:{section:{type:Object,required:!0},currentIndex:{type:[Number,String],required:!1,default:1/0},renderSuggestion:{type:Function,required:!1},normalizeItemFunction:{type:Function,required:!0},componentAttrPrefix:{type:String,required:!0},componentAttrIdAutosuggest:{type:String,required:!0}},data:function(){return{_currentIndex:this.currentIndex}},computed:{list:function(){var t=this.section,e=t.limit,n=t.data;return n.length<e&&(e=n.length),n.slice(0,e)}},methods:{getItemIndex:function(t){return this.section.start_index+t},getItemByIndex:function(t){return this.section.data[t]},onMouseEnter:function(t){var e=parseInt(t.currentTarget.getAttribute("data-suggestion-index"));this._currentIndex=e,this.$emit("updateCurrentIndex",e)},onMouseLeave:function(){this.$emit("updateCurrentIndex",null)}},render:function(t){var e=this,n=this.componentAttrPrefix,s={beforeSection:this.$scopedSlots["before-section-"+this.section.name],afterSectionDefault:this.$scopedSlots["after-section"],afterSectionNamed:this.$scopedSlots["after-section-"+this.section.name]},i=n+"__results-before "+n+"__results-before--"+this.section.name,r=s.beforeSection&&s.beforeSection({section:this.section,className:i})||[];return t("ul",{attrs:{role:"listbox","aria-labelledby":this.section.label&&this.componentAttrIdAutosuggest+"-"+this.section.label},class:this.section.ulClass},[r[0]&&r[0]||this.section.label&&t("li",{class:i,id:this.componentAttrIdAutosuggest+"-"+this.section.label},this.section.label)||"",this.list.map(function(s,i){var r,o=e.normalizeItemFunction(e.section.name,e.section.type,e.section.label,e.section.liClass,s),u=e.getItemIndex(i),l=e._currentIndex===u||parseInt(e.currentIndex)===u;return t("li",{attrs:Object.assign({},{role:"option","data-suggestion-index":u,"data-section-name":o.name,id:n+"__results-item--"+u},o.liAttributes),key:u,class:Object.assign((r={},r[n+"__results-item--highlighted"]=l,r[n+"__results-item"]=!0,r),o.liClass),on:{mouseenter:e.onMouseEnter,mouseleave:e.onMouseLeave}},[e.renderSuggestion?e.renderSuggestion(o):e.$scopedSlots.default&&e.$scopedSlots.default({_key:i,suggestion:o})])}),s.afterSectionDefault&&s.afterSectionDefault({section:this.section,className:n+"__results-after "+n+"__results-after--"+this.section.name}),s.afterSectionNamed&&s.afterSectionNamed({section:this.section,className:n+"__results_after "+n+"__results-after--"+this.section.name})])}};function hasClass(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function addClass(t,e){hasClass(t,e)||(t.className+=" "+e)}function removeClass(t,e){t.classList&&t.classList.remove(e)}var INDEX_IS_FOCUSED_ON_INPUT=-1,defaultSectionConfig={name:"default",type:"default-section"},VueAutosuggest={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:t.componentAttrIdAutosuggest}},[t._t("before-input"),n("div",{attrs:{role:"combobox","aria-expanded":t.isOpen?"true":"false","aria-haspopup":"listbox","aria-owns":t.componentAttrIdAutosuggest+"-"+t.componentAttrPrefix+"__results"}},[n("input",t._g(t._b({class:[t.isOpen?t.componentAttrPrefix+"__input--open":"",t.internal_inputProps.class],attrs:{type:t.internal_inputProps.type,autocomplete:t.internal_inputProps.autocomplete,"aria-autocomplete":"list","aria-activedescendant":t.isOpen&&null!==t.currentIndex?t.componentAttrPrefix+"__results-item--"+t.currentIndex:"","aria-controls":t.componentAttrIdAutosuggest+"-"+t.componentAttrPrefix+"__results"},domProps:{value:t.internalValue},on:{input:t.inputHandler,keydown:t.handleKeyStroke}},"input",t.internal_inputProps,!1),t.listeners))]),t._t("after-input"),t._v(" "),n("div",{class:t._componentAttrClassAutosuggestResultsContainer,attrs:{id:t.componentAttrIdAutosuggest+"-"+t.componentAttrPrefix+"__results"}},[t.isOpen?n("div",{class:t._componentAttrClassAutosuggestResults,attrs:{"aria-labelledby":t.componentAttrIdAutosuggest}},[t._t("before-suggestions"),t._v(" "),t._l(t.computedSections,function(e,s){return n(e.type,{key:t.getSectionRef(""+e.name+s),ref:t.getSectionRef(""+e.name+s),refInFor:!0,tag:"component",attrs:{"current-index":t.currentIndex,"normalize-item-function":t.normalizeItem,"render-suggestion":t.renderSuggestion,section:e,"component-attr-prefix":t.componentAttrPrefix,"component-attr-id-autosuggest":t.componentAttrIdAutosuggest},on:{updateCurrentIndex:t.updateCurrentIndex},scopedSlots:t._u([{key:"before-section-"+(e.name||e.label),fn:function(n){var s=n.section,i=n.className;return[t._t("before-section-"+(e.name||e.label),null,{section:s,className:i})]}},{key:"default",fn:function(e){var n=e.suggestion,s=e._key;return[t._t("default",[t._v(" "+t._s(n.item)+" ")],{suggestion:n,index:s})]}},{key:"after-section-"+(e.name||e.label),fn:function(n){var s=n.section;return[t._t("after-section-"+(e.name||e.label),null,{section:s})]}},{key:"after-section",fn:function(e){var n=e.section;return[t._t("after-section",null,{section:n})]}}])})}),t._v(" "),t._t("after-suggestions")],2):t._e(),t._v(" "),t._t("after-suggestions-container")],2)],2)},staticRenderFns:[],name:"Autosuggest",components:{DefaultSection:DefaultSection},props:{value:{type:String,default:null},inputProps:{type:Object,required:!0},limit:{type:Number,required:!1,default:1/0},suggestions:{type:Array,required:!0},renderSuggestion:{type:Function,required:!1,default:null},getSuggestionValue:{type:Function,required:!1,default:function(t){var e=t.item;return"object"==typeof e&&e.hasOwnProperty("name")?e.name:e}},shouldRenderSuggestions:{type:Function,required:!1,default:function(t,e){return t>0&&!e}},sectionConfigs:{type:Object,required:!1,default:function(){return{default:{onSelected:null}}}},onSelected:{type:Function,required:!1,default:null},componentAttrIdAutosuggest:{type:String,required:!1,default:"autosuggest"},componentAttrClassAutosuggestResultsContainer:{type:String,required:!1,default:null},componentAttrClassAutosuggestResults:{type:String,required:!1,default:null},componentAttrPrefix:{type:String,required:!1,default:"autosuggest"}},data:function(){return{internalValue:null,searchInputOriginal:null,currentIndex:null,currentItem:null,loading:!1,didSelectFromOptions:!1,defaultInputProps:{type:"text",autocomplete:"off"},clientXMouseDownInitial:null}},computed:{internal_inputProps:function(){return Object.assign({},this.defaultInputProps,this.inputProps)},listeners:function(){var t=this;return Object.assign({},this.$listeners,{input:function(t){},click:function(){t.loading=!1,t.$listeners.click&&t.$listeners.click(t.currentItem),t.$nextTick(function(){t.ensureItemVisible(t.currentItem,t.currentIndex)})},selected:function(){t.currentItem&&t.sectionConfigs[t.currentItem.name]&&t.sectionConfigs[t.currentItem.name].onSelected?t.sectionConfigs[t.currentItem.name].onSelected(t.currentItem,t.searchInputOriginal):t.sectionConfigs.default.onSelected?t.sectionConfigs.default.onSelected(null,t.searchInputOriginal):t.$listeners.selected&&t.$emit("selected",t.currentItem,t.currentIndex),t.setChangeItem(null)}})},isOpen:function(){return this.shouldRenderSuggestions(this.totalResults,this.loading)},computedSections:function(){var t=this,e=0;return this.suggestions.map(function(n){if(n.data){var s,i,r,o,u=n.name?n.name:defaultSectionConfig.name,l=null;t.sectionConfigs[u]&&(s=t.sectionConfigs[u].limit,r=t.sectionConfigs[u].type,i=t.sectionConfigs[u].label,o=t.sectionConfigs[u].ulClass,l=t.sectionConfigs[u].liClass),r=r||defaultSectionConfig.type,s=(s=s||t.limit)||1/0,s=n.data.length<s?n.data.length:s;var a={name:u,label:i=i||n.label,type:r,limit:s,data:n.data,start_index:e,end_index:e+s-1,ulClass:o,liClass:l};return e+=s,a}})},totalResults:function(){return this.computedSections.reduce(function(t,e){if(!e)return t;var n=e.limit,s=e.data;return t+(s.length>=n?n:s.length)},0)},_componentAttrClassAutosuggestResultsContainer:function(){return this.componentAttrClassAutosuggestResultsContainer||this.componentAttrPrefix+"__results-container"},_componentAttrClassAutosuggestResults:function(){return this.componentAttrClassAutosuggestResults||this.componentAttrPrefix+"__results"}},watch:{value:{handler:function(t){this.internalValue=t},immediate:!0},isOpen:{handler:function(t,e){t!==e&&this.$emit(t?"opened":"closed")},immediate:!0}},created:function(){this.loading=!0},mounted:function(){document.addEventListener("mouseup",this.onDocumentMouseUp),document.addEventListener("mousedown",this.onDocumentMouseDown)},beforeDestroy:function(){document.removeEventListener("mouseup",this.onDocumentMouseUp),document.removeEventListener("mousedown",this.onDocumentMouseDown)},methods:{inputHandler:function(t){var e=t.target.value;this.$emit("input",e),this.internalValue=e,this.didSelectFromOptions||(this.searchInputOriginal=e,this.currentIndex=null)},getSectionRef:function(t){return"computed_section_"+t},getItemByIndex:function(t){var e=!1;if(null===t)return e;for(var n=0;n<this.computedSections.length;n++)if(t>=this.computedSections[n].start_index&&t<=this.computedSections[n].end_index){var s=t-this.computedSections[n].start_index,i=this.computedSections[n].name,r=this.$refs[this.getSectionRef(""+i+n)][0];if(r){e=this.normalizeItem(this.computedSections[n].name,this.computedSections[n].type,r.section.label,r.section.liClass,r.getItemByIndex(s));break}}return e},handleKeyStroke:function(t){var e=this,n=t.keyCode;if(!([16,9,17,18,91,93].indexOf(n)>-1)){var s=!this.isOpen;if(this.loading=!1,this.didSelectFromOptions=!1,this.isOpen)switch(n){case 40:case 38:if(t.preventDefault(),38===n&&null===this.currentIndex)break;var i=40===n?1:-1,r=Math.max((parseInt(this.currentIndex)||0)+(s?0:i),INDEX_IS_FOCUSED_ON_INPUT);this.setCurrentIndex(r,this.totalResults),this.didSelectFromOptions=!0,this.totalResults>0&&this.currentIndex>=0?(this.setChangeItem(this.getItemByIndex(this.currentIndex)),this.didSelectFromOptions=!0):this.currentIndex===INDEX_IS_FOCUSED_ON_INPUT&&(this.setChangeItem(null),this.internalValue=this.searchInputOriginal,t.preventDefault()),this.$nextTick(function(){e.ensureItemVisible(e.currentItem,e.currentIndex)});break;case 13:t.preventDefault(),this.totalResults>0&&this.currentIndex>=0&&(this.setChangeItem(this.getItemByIndex(this.currentIndex),!0),this.didSelectFromOptions=!0),this.loading=!0,this.listeners.selected(this.didSelectFromOptions);break;case 27:this.loading=!0,this.currentIndex=null,this.internalValue=this.searchInputOriginal,this.$emit("input",this.searchInputOriginal),t.preventDefault()}}},setChangeItem:function(t,e){if(void 0===e&&(e=!1),null!==this.currentIndex&&t){if(t){this.currentItem=t,this.$emit("item-changed",t,this.currentIndex);var n=this.getSuggestionValue(t);this.internalValue=n,e&&(this.searchInputOriginal=n),this.ensureItemVisible(t,this.currentIndex)}}else this.currentItem=null,this.$emit("item-changed",null,null)},normalizeItem:function(t,e,n,s,i){return{name:t,type:e,label:n,liClass:i.liClass||s,item:i}},ensureItemVisible:function(t,e,n){var s=this.$el.querySelector(n||"."+this._componentAttrClassAutosuggestResults);if(s){var i=s.querySelector("#"+this.componentAttrPrefix+"__results-item--"+e);if(i){var r=s.clientHeight,o=s.scrollTop,u=i.clientHeight,l=i.offsetTop;u+l>=o+r?s.scrollTop=u+l-r:l<o&&o>0&&(s.scrollTop=l)}}},updateCurrentIndex:function(t){this.setCurrentIndex(t,-1,!0)},clickedOnScrollbar:function(t,e){var n=this.$el.querySelector("."+this._componentAttrClassAutosuggestResults),s=n&&n.clientWidth<=e+17&&e+17<=n.clientWidth+34;return"DIV"===t.target.tagName&&n&&s||!1},onDocumentMouseDown:function(t){var e=t.target.getBoundingClientRect?t.target.getBoundingClientRect():0;this.clientXMouseDownInitial=t.clientX-e.left},onDocumentMouseUp:function(t){if(!this.$el.contains(t.target))return this.loading=!0,void(this.currentIndex=null);"INPUT"===t.target.tagName||this.clickedOnScrollbar(t,this.clientXMouseDownInitial)||(this.loading=!0,this.didSelectFromOptions=!0,this.setChangeItem(this.getItemByIndex(this.currentIndex),!0),this.listeners.selected(!0))},setCurrentIndex:function(t,e,n){void 0===e&&(e=-1),void 0===n&&(n=!1);var s=t;n||(null===this.currentIndex||t>=e)&&(s=0);this.currentIndex=s;var i=this.$el.querySelector("#"+this.componentAttrPrefix+"__results-item--"+this.currentIndex),r=this.componentAttrPrefix+"__results-item--highlighted";this.$el.querySelector("."+r)&&removeClass(this.$el.querySelector("."+r),r),i&&addClass(i,r)}}},VueAutosuggestPlugin={install:function(t){t.component("vue-autosuggest-default-section",DefaultSection),t.component("vue-autosuggest",VueAutosuggest)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(VueAutosuggestPlugin);/* harmony default export */ __webpack_exports__["default"] = (VueAutosuggestPlugin);


/***/ })

}]);