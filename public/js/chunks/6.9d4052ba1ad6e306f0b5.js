(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{128:function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return s})),r.d(e,"e",(function(){return l})),r.d(e,"a",(function(){return u}));var a="_cellVariants",c="_rowVariant",s="_showDetails",l=[a,c,s].reduce((function(t,e){return o(o({},t),{},i({},e,!0))}),{}),u=["a","a *","button","button *","input:not(.disabled):not([disabled])","select:not(.disabled):not([disabled])","textarea:not(.disabled):not([disabled])",'[role="link"]','[role="link"] *','[role="button"]','[role="button"] *',"[tabindex]:not(.disabled):not([disabled])"].join(",")},233:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(){}},277:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return l}));var n=r(8),o=r(2),i=r(24),a=r(57),c=r(1),s={caption:Object(c.c)(o.u),captionHtml:Object(c.c)(o.u)},l=Object(n.c)({props:s,computed:{captionId:function(){return this.isStacked?this.safeId("_caption_"):null}},methods:{renderCaption:function(){var t=this.caption,e=this.captionHtml,r=this.$createElement,n=r(),o=this.hasNormalizedSlot(i.ab);return(o||t||e)&&(n=r("caption",{attrs:{id:this.captionId},domProps:o?{}:Object(a.a)(e,t),key:"caption",ref:"caption"},this.normalizeSlot(i.ab))),n}}})},278:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return a}));var n=r(8),o=r(24),i={},a=Object(n.c)({methods:{renderColgroup:function(){var t=this.computedFields,e=this.$createElement,r=e();return this.hasNormalizedSlot(o.bb)&&(r=e("colgroup",{key:"colgroup"},[this.normalizeSlot(o.bb,{columns:t.length,fields:t})])),r}}})},279:function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return l}));var n=r(8),o=r(2),i=r(24),a=r(1),c=r(393),s={footClone:Object(a.c)(o.g,!1),footRowVariant:Object(a.c)(o.u),footVariant:Object(a.c)(o.u),tfootClass:Object(a.c)(o.e),tfootTrClass:Object(a.c)(o.e)},l=Object(n.c)({props:s,methods:{renderTFootCustom:function(){var t=this.$createElement;return this.hasNormalizedSlot(i.g)?t(c.a,{class:this.tfootClass||null,props:{footVariant:this.footVariant||this.headVariant||null},key:"bv-tfoot-custom"},this.normalizeSlot(i.g,{items:this.computedItems.slice(),fields:this.computedFields.slice(),columns:this.computedFields.length})):t()},renderTfoot:function(){return this.footClone?this.renderThead(!0):this.renderTFootCustom()}}})},280:function(t,e,r){"use strict";r.d(e,"a",(function(){return E})),r.d(e,"b",(function(){return D}));var n=r(8),o=r(12),i=r(30),a=r(2),c=r(24),s=r(19),l=r(57),u=r(39),b=r(7),d=r(233),f=r(1),h=r(69),p=r(31),O=r(586),y=r(393),j=r(150),m=r(397),v=r(340),w=r(392);function g(t){return function(t){if(Array.isArray(t))return T(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return T(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return T(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){C(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function C(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var R=function(t){return"head(".concat(t||"",")")},P=function(t){return"foot(".concat(t||"",")")},E={headRowVariant:Object(f.c)(a.u),headVariant:Object(f.c)(a.u),theadClass:Object(f.c)(a.e),theadTrClass:Object(f.c)(a.e)},D=Object(n.c)({props:E,methods:{fieldClasses:function(t){return[t.class?t.class:"",t.thClass?t.thClass:""]},headClicked:function(t,e,r){this.stopIfBusy&&this.stopIfBusy(t)||Object(v.a)(t)||Object(w.a)(this.$el)||(Object(s.f)(t),this.$emit(o.v,e.key,e,t,r))},renderThead:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=Object(h.a)(this),n=r.computedFields,a=r.isSortable,s=r.isSelectable,f=r.headVariant,v=r.footVariant,w=r.headRowVariant,T=r.footRowVariant,k=this.$createElement;if(this.isStackedAlways||0===n.length)return k();var C=a||this.hasListener(o.v),E=s?this.selectAllRows:d.a,D=s?this.clearSelected:d.a,A=function(r,n){var o=r.label,c=r.labelHtml,s=r.variant,b=r.stickyColumn,d=r.key,f=null;r.label.trim()||r.headerTitle||(f=Object(p.f)(r.key));var h={};C&&(h.click=function(n){t.headClicked(n,r,e)},h.keydown=function(n){var o=n.keyCode;o!==i.e&&o!==i.l||t.headClicked(n,r,e)});var O=a?t.sortTheadThAttrs(d,r,e):{},y=a?t.sortTheadThClasses(d,r,e):null,j=a?t.sortTheadThLabel(d,r,e):null,v={class:[{"position-relative":j},t.fieldClasses(r),y],props:{variant:s,stickyColumn:b},style:r.thStyle||{},attrs:S(S({tabindex:C&&r.sortable?"0":null,abbr:r.headerAbbr||null,title:r.headerTitle||null,"aria-colindex":n+1,"aria-label":f},t.getThValues(null,d,r.thAttr,e?"foot":"head",{})),O),on:h,key:d},w=[R(d),R(d.toLowerCase()),R()];e&&(w=[P(d),P(d.toLowerCase()),P()].concat(g(w)));var T={label:o,column:d,field:r,isFoot:e,selectAllRows:E,clearSelected:D},A=t.normalizeSlot(w,T)||k("div",{domProps:Object(l.a)(c,o)}),I=j?k("span",{staticClass:"sr-only"}," (".concat(j,")")):null;return k(m.a,v,[A,I].filter(u.a))},I=n.map(A).filter(u.a),V=[];if(e)V.push(k(j.a,{class:this.tfootTrClass,props:{variant:Object(b.p)(T)?w:T}},I));else{var x={columns:n.length,fields:n,selectAllRows:E,clearSelected:D};V.push(this.normalizeSlot(c.fb,x)||k()),V.push(k(j.a,{class:this.theadTrClass,props:{variant:w}},I))}return k(e?y.a:O.a,{class:(e?this.tfootClass:this.theadClass)||null,props:e?{footVariant:v||f||null}:{headVariant:f||null},key:e?"bv-tfoot":"bv-thead"},V)}}})},281:function(t,e,r){"use strict";r.d(e,"b",(function(){return R})),r.d(e,"a",(function(){return P}));var n=r(8),o=r(12),i=r(2),a=r(129),c=r(7),s=r(49),l=r(42),u=r(59),b=r(26),d=r(13),f=r(1),h=r(69),p=r(39),O=r(31),y=r(128),j=function(t,e){var r=[];if(Object(c.a)(t)&&t.filter(p.a).forEach((function(t){if(Object(c.n)(t))r.push({key:t,label:Object(O.f)(t)});else if(Object(c.j)(t)&&t.key&&Object(c.n)(t.key))r.push(Object(d.b)(t));else if(Object(c.j)(t)&&1===Object(d.h)(t).length){var e=Object(d.h)(t)[0],n=function(t,e){var r=null;return Object(c.n)(e)?r={key:t,label:e}:Object(c.f)(e)?r={key:t,formatter:e}:Object(c.j)(e)?(r=Object(d.b)(e)).key=r.key||t:!1!==e&&(r={key:t}),r}(e,t[e]);n&&r.push(n)}})),0===r.length&&Object(c.a)(e)&&e.length>0){var n=e[0];Object(d.h)(n).forEach((function(t){y.e[t]||r.push({key:t,label:Object(O.f)(t)})}))}var o={};return r.filter((function(t){return!o[t.key]&&(o[t.key]=!0,t.label=Object(c.n)(t.label)?t.label:Object(O.f)(t.key),!0)}))};function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){w(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function w(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var g=Object(u.a)("value",{type:i.b,defaultValue:[]}),T=g.mixin,k=g.props,S=g.prop,C=g.event,R=Object(d.m)(v(v({},k),{},w({fields:Object(f.c)(i.b,null),items:Object(f.c)(i.b,[]),primaryKey:Object(f.c)(i.u)},S,Object(f.c)(i.b,[])))),P=Object(n.c)({mixins:[T,a.a],props:R,data:function(){var t=this.items;return{localItems:Object(c.a)(t)?t.slice():[]}},computed:{computedFields:function(){return j(this.fields,this.localItems)},computedFieldsObj:function(){var t=this.bvParent;return this.computedFields.reduce((function(e,r){if(e[r.key]=Object(d.b)(r),r.formatter){var n=r.formatter;Object(c.n)(n)&&Object(c.f)(t[n])?n=t[n]:Object(c.f)(n)||(n=void 0),e[r.key].formatter=n}return e}),{})},computedItems:function(){var t=Object(h.a)(this),e=t.paginatedItems,r=t.sortedItems,n=t.filteredItems,o=t.localItems;return(e||r||n||o||[]).slice()},context:function(){var t=Object(h.a)(this),e=t.perPage,r=t.currentPage;return{filter:this.localFilter,sortBy:this.localSortBy,sortDesc:this.localSortDesc,perPage:Object(l.d)(Object(b.c)(e,0),0),currentPage:Object(l.d)(Object(b.c)(r,0),1),apiUrl:this.apiUrl}}},watch:{items:function(t){this.localItems=Object(c.a)(t)?t.slice():[]},computedItems:function(t,e){Object(s.a)(t,e)||this.$emit(C,t)},context:function(t,e){Object(s.a)(t,e)||this.$emit(o.i,t)}},mounted:function(){this.$emit(C,this.computedItems)},methods:{getFieldFormatter:function(t){var e=this.computedFieldsObj[t];return e?e.formatter:void 0}}})},282:function(t,e,r){"use strict";r.d(e,"a",(function(){return F})),r.d(e,"b",(function(){return _}));var n=r(8),o=r(12),i=r(30),a=r(2),c=r(27),s=r(6),l=r(69),u=r(19),b=r(13),d=r(1),f=r(401),h=r(340),p=r(392),O=r(24),y=r(129),j=r(97),m=r(7),v=r(31),w=r(150),g=r(204),T=r(397),k=r(128);function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){R(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function R(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function P(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var E,D={detailsTdClass:Object(d.c)(a.e),tbodyTrAttr:Object(d.c)(a.r),tbodyTrClass:Object(d.c)([].concat((E=a.e,function(t){if(Array.isArray(t))return P(t)}(E)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(E)||function(t,e){if(t){if("string"==typeof t)return P(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?P(t,e):void 0}}(E)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),[a.l]))},A=Object(n.c)({mixins:[y.a],props:D,methods:{getTdValues:function(t,e,r,n){var o=this.bvParent;if(r){var i=Object(j.a)(t,e,"");return Object(m.f)(r)?r(i,e,t):Object(m.n)(r)&&Object(m.f)(o[r])?o[r](i,e,t):r}return n},getThValues:function(t,e,r,n,o){var i=this.bvParent;if(r){var a=Object(j.a)(t,e,"");return Object(m.f)(r)?r(a,e,t,n):Object(m.n)(r)&&Object(m.f)(i[r])?i[r](a,e,t,n):r}return o},getFormattedValue:function(t,e){var r=e.key,n=this.getFieldFormatter(r),o=Object(j.a)(t,r,null);return Object(m.f)(n)&&(o=n(o,r,t)),Object(m.p)(o)?"":o},toggleDetailsFactory:function(t,e){var r=this;return function(){t&&r.$set(e,k.d,!e[k.d])}},rowHovered:function(t){this.tbodyRowEventStopped(t)||this.emitTbodyRowEvent(o.P,t)},rowUnhovered:function(t){this.tbodyRowEventStopped(t)||this.emitTbodyRowEvent(o.S,t)},renderTbodyRowCell:function(t,e,r,n){var o=this,i=this.isStacked,a=t.key,c=t.label,s=t.isRowHeader,u=this.$createElement,b=this.hasNormalizedSlot(O.Y),d=this.getFormattedValue(r,t),f=!i&&(this.isResponsive||this.stickyHeader)&&t.stickyColumn,h=f?s?T.a:g.a:s?"th":"td",p=r[k.b]&&r[k.b][a]?r[k.b][a]:t.variant||null,y={class:[t.class?t.class:"",this.getTdValues(r,a,t.tdClass,"")],props:{},attrs:C({"aria-colindex":String(e+1)},s?this.getThValues(r,a,t.thAttr,"row",{}):this.getTdValues(r,a,t.tdAttr,{})),key:"row-".concat(n,"-cell-").concat(e,"-").concat(a)};f?y.props={stackedHeading:i?c:null,stickyColumn:!0,variant:p}:(y.attrs["data-label"]=i&&!Object(m.p)(c)?Object(v.g)(c):null,y.attrs.role=s?"rowheader":"cell",y.attrs.scope=s?"row":null,p&&y.class.push("".concat(this.dark?"bg":"table","-").concat(p)));var w={item:r,index:n,field:t,unformatted:Object(j.a)(r,a,""),value:d,toggleDetails:this.toggleDetailsFactory(b,r),detailsShowing:Boolean(r[k.d])};Object(l.a)(this).supportsSelectableRows&&(w.rowSelected=this.isRowSelected(n),w.selectRow=function(){return o.selectRow(n)},w.unselectRow=function(){return o.unselectRow(n)});var S=this.$_bodyFieldSlotNameCache[a],R=S?this.normalizeSlot(S,w):Object(v.g)(d);return this.isStacked&&(R=[u("div",[R])]),u(h,y,[R])},renderTbodyRow:function(t,e){var r=this,i=Object(l.a)(this),a=i.computedFields,c=i.striped,s=i.primaryKey,u=i.currentPage,b=i.perPage,d=i.tbodyTrClass,f=i.tbodyTrAttr,h=i.hasSelectableRowClick,p=this.$createElement,y=this.hasNormalizedSlot(O.Y),T=t[k.d]&&y,S=this.$listeners[o.M]||h,P=[],E=T?this.safeId("_details_".concat(e,"_")):null,D=a.map((function(n,o){return r.renderTbodyRowCell(n,o,t,e)})),A=null;u&&b&&b>0&&(A=String((u-1)*b+e+1));var I=Object(v.g)(Object(j.a)(t,s))||null,V=I||Object(v.g)(e),x=I?this.safeId("_row_".concat(I)):null,$=Object(l.a)(this).selectableRowClasses?this.selectableRowClasses(e):{},F=Object(l.a)(this).selectableRowAttrs?this.selectableRowAttrs(e):{},_=Object(m.f)(d)?d(t,"row"):d,N=Object(m.f)(f)?f(t,"row"):f;if(P.push(p(w.a,R({class:[_,$,T?"b-table-has-details":""],props:{variant:t[k.c]||null},attrs:C(C({id:x},N),{},{tabindex:S?"0":null,"data-pk":I||null,"aria-details":E,"aria-owns":E,"aria-rowindex":A},F),on:{mouseenter:this.rowHovered,mouseleave:this.rowUnhovered},key:"__b-table-row-".concat(V,"__"),ref:"item-rows"},n.b,!0),D)),T){var z={item:t,index:e,fields:a,toggleDetails:this.toggleDetailsFactory(y,t)};Object(l.a)(this).supportsSelectableRows&&(z.rowSelected=this.isRowSelected(e),z.selectRow=function(){return r.selectRow(e)},z.unselectRow=function(){return r.unselectRow(e)});var B=p(g.a,{props:{colspan:a.length},class:this.detailsTdClass},[this.normalizeSlot(O.Y,z)]);c&&P.push(p("tr",{staticClass:"d-none",attrs:{"aria-hidden":"true",role:"presentation"},key:"__b-table-details-stripe__".concat(V)}));var H=Object(m.f)(this.tbodyTrClass)?this.tbodyTrClass(t,O.Y):this.tbodyTrClass,L=Object(m.f)(this.tbodyTrAttr)?this.tbodyTrAttr(t,O.Y):this.tbodyTrAttr;P.push(p(w.a,{staticClass:"b-table-details",class:[H],props:{variant:t[k.c]||null},attrs:C(C({},L),{},{id:E,tabindex:"-1"}),key:"__b-table-details__".concat(V)},[B]))}else y&&(P.push(p()),c&&P.push(p()));return P}}});function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function V(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(Object(r),!0).forEach((function(e){x(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function x(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var $=function(t){return"cell(".concat(t||"",")")},F=Object(b.m)(V(V(V({},f.b),D),{},{tbodyClass:Object(d.c)(a.e)})),_=Object(n.c)({mixins:[A],props:F,beforeDestroy:function(){this.$_bodyFieldSlotNameCache=null},methods:{getTbodyTrs:function(){var t=this.$refs,e=t.tbody?t.tbody.$el||t.tbody:null,r=(t["item-rows"]||[]).map((function(t){return t.$el||t}));return e&&e.children&&e.children.length>0&&r&&r.length>0?Object(c.f)(e.children).filter((function(t){return Object(c.a)(r,t)})):[]},getTbodyTrIndex:function(t){if(!Object(s.s)(t))return-1;var e="TR"===t.tagName?t:Object(s.e)("tr",t,!0);return e?this.getTbodyTrs().indexOf(e):-1},emitTbodyRowEvent:function(t,e){if(t&&this.hasListener(t)&&e&&e.target){var r=this.getTbodyTrIndex(e.target);if(r>-1){var n=this.computedItems[r];this.$emit(t,n,r,e)}}},tbodyRowEventStopped:function(t){return this.stopIfBusy&&this.stopIfBusy(t)},onTbodyRowKeydown:function(t){var e=t.target,r=t.keyCode;if(!this.tbodyRowEventStopped(t)&&"TR"===e.tagName&&Object(s.q)(e)&&0===e.tabIndex)if(Object(c.a)([i.e,i.l],r))Object(u.f)(t),this.onTBodyRowClicked(t);else if(Object(c.a)([i.m,i.c,i.g,i.d],r)){var n=this.getTbodyTrIndex(e);if(n>-1){Object(u.f)(t);var o=this.getTbodyTrs(),a=t.shiftKey;r===i.g||a&&r===i.m?Object(s.d)(o[0]):r===i.d||a&&r===i.c?Object(s.d)(o[o.length-1]):r===i.m&&n>0?Object(s.d)(o[n-1]):r===i.c&&n<o.length-1&&Object(s.d)(o[n+1])}}},onTBodyRowClicked:function(t){var e=this.$refs,r=e.tbody?e.tbody.$el||e.tbody:null;this.tbodyRowEventStopped(t)||Object(h.a)(t)||Object(p.a)(r||this.$el)||this.emitTbodyRowEvent(o.M,t)},onTbodyRowMiddleMouseRowClicked:function(t){this.tbodyRowEventStopped(t)||2!==t.which||this.emitTbodyRowEvent(o.Q,t)},onTbodyRowContextmenu:function(t){this.tbodyRowEventStopped(t)||this.emitTbodyRowEvent(o.N,t)},onTbodyRowDblClicked:function(t){this.tbodyRowEventStopped(t)||Object(h.a)(t)||this.emitTbodyRowEvent(o.O,t)},renderTbody:function(){var t=this,e=Object(l.a)(this),r=e.computedItems,n=e.renderBusy,i=e.renderTopRow,a=e.renderEmpty,c=e.renderBottomRow,s=e.hasSelectableRowClick,u=this.$createElement,b=this.hasListener(o.M)||s,h=[],p=n?n():null;if(p)h.push(p);else{var O={},y=$();y=this.hasNormalizedSlot(y)?y:null,this.computedFields.forEach((function(e){var r=e.key,n=$(r),o=$(r.toLowerCase());O[r]=t.hasNormalizedSlot(n)?n:t.hasNormalizedSlot(o)?o:y})),this.$_bodyFieldSlotNameCache=O,h.push(i?i():u()),r.forEach((function(e,r){h.push(t.renderTbodyRow(e,r))})),h.push(a?a():u()),h.push(c?c():u())}var j={auxclick:this.onTbodyRowMiddleMouseRowClicked,contextmenu:this.onTbodyRowContextmenu,dblclick:this.onTbodyRowDblClicked};return b&&(j.click=this.onTBodyRowClicked,j.keydown=this.onTbodyRowKeydown),u(f.a,{class:this.tbodyClass||null,props:Object(d.e)(f.b,this.$props),on:j,ref:"tbody"},h)}}})},340:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(6),o=r(128),i=["TD","TH","TR"],a=function(t){if(!t||!t.target)return!1;var e=t.target;if(e.disabled||-1!==i.indexOf(e.tagName))return!1;if(Object(n.e)(".dropdown-menu",e))return!0;var r="LABEL"===e.tagName?e:Object(n.e)("label",e);if(r){var a=Object(n.h)(r,"for"),c=a?Object(n.j)(a):Object(n.C)("input, select, textarea",r);if(c&&!c.disabled)return!0}return Object(n.v)(e,o.a)}},392:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(6),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=Object(n.l)();return!!(e&&""!==e.toString().trim()&&e.containsNode&&Object(n.s)(t))&&e.containsNode(t,!0)}},393:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(8),o=r(5),i=r(2),a=r(1),c=r(66),s=r(117),l=r(32);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f=Object(a.d)({footVariant:Object(a.c)(i.u)},o.Zb),h=Object(n.c)({name:o.Zb,mixins:[c.a,s.a,l.a],provide:function(){var t=this;return{getBvTableRowGroup:function(){return t}}},inject:{getBvTable:{default:function(){return function(){return{}}}}},inheritAttrs:!1,props:f,computed:{bvTable:function(){return this.getBvTable()},isTfoot:function(){return!0},isDark:function(){return this.bvTable.dark},isStacked:function(){return this.bvTable.isStacked},isResponsive:function(){return this.bvTable.isResponsive},isStickyHeader:function(){return!1},hasStickyHeader:function(){return!this.isStacked&&this.bvTable.stickyHeader},tableVariant:function(){return this.bvTable.tableVariant},tfootClasses:function(){return[this.footVariant?"thead-".concat(this.footVariant):null]},tfootAttrs:function(){return b(b({},this.bvAttrs),{},{role:"rowgroup"})}},render:function(t){return t("tfoot",{class:this.tfootClasses,attrs:this.tfootAttrs,on:this.bvListeners},this.normalizeSlot())}})}}]);