(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1050:function(t,e,r){"use strict";r(528)},1051:function(t,e,r){(e=r(19)(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=e},16:function(t,e,r){"use strict";r(76);var n=r(1896),o=r(341),a=r(343),i=r(342),c=r(1911),p=(r(177),r(191),r(101)),u=r.n(p),b={components:{BCard:n.a,BCardTitle:o.a,BCardSubTitle:a.a,BCardBody:i.a,BCollapse:c.a,Prism:u.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},s=(r(1050),r(0)),d=Object(s.a)(b,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[r("div",{staticClass:"card-header"},[r("div",[r("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?r("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),r("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(e){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[r("b-card-body",[r("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:r("b-card-body",[t._t("default"),t._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[r("div",{staticClass:"p-1"}),t._v(" "),r("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);e.a=d.exports},1894:function(t,e,r){"use strict";r.d(e,"a",(function(){return _}));var n=r(48),o=r(5),a=r(2),i=r(23),c=r(67),p=r(35),u=r(205),b=r(13),s=r(1),d=r(27);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var f=["start","end","center"],g=Object(u.a)((function(t,e){return(e=Object(d.h)(Object(d.g)(e)))?Object(d.c)(["row-cols",t,e].filter(p.a).join("-")):null})),O=Object(u.a)((function(t){return Object(d.c)(t.replace("cols",""))})),j=[],_={name:o.Ob,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(c.b)().reduce((function(t,e){return t[Object(s.g)(e,"cols")]=Object(s.c)(a.p),t}),Object(b.c)(null)),j=Object(b.h)(t),Object(s.d)(Object(b.m)(v(v({},t),{},{alignContent:Object(s.c)(a.u,null,(function(t){return Object(i.a)(Object(i.b)(f,"between","around","stretch"),t)})),alignH:Object(s.c)(a.u,null,(function(t){return Object(i.a)(Object(i.b)(f,"between","around"),t)})),alignV:Object(s.c)(a.u,null,(function(t){return Object(i.a)(Object(i.b)(f,"baseline","stretch"),t)})),noGutters:Object(s.c)(a.g,!1),tag:Object(s.c)(a.u,"div")})),o.Ob)),this.props},render:function(t,e){var r,o=e.props,a=e.data,i=e.children,c=o.alignV,p=o.alignH,u=o.alignContent,b=[];return j.forEach((function(t){var e=g(O(t),o[t]);e&&b.push(e)})),b.push((m(r={"no-gutters":o.noGutters},"align-items-".concat(c),c),m(r,"justify-content-".concat(p),p),m(r,"align-content-".concat(u),u),r)),t(o.tag,Object(n.a)(a,{staticClass:"row",class:b}),i)}}},1895:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r(8),o=r(48),a=r(5),i=r(2),c=r(1),p=Object(c.d)({textTag:Object(c.c)(i.u,"p")},a.u),u=Object(n.c)({name:a.u,functional:!0,props:p,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(r.textTag,Object(o.a)(n,{staticClass:"card-text"}),a)}})},1908:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r(8),o=r(48),a=r(5),i=r(2),c=r(1),p=r(13);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=Object(c.d)({tag:Object(c.c)(i.u,"hr")},a.D),l=Object(n.c)({name:a.D,functional:!0,props:d,render:function(t,e){var r=e.props,n=e.data;return t("li",Object(o.a)(Object(p.j)(n,["attrs"]),{attrs:{role:"presentation"}}),[t(r.tag,{staticClass:"dropdown-divider",attrs:b(b({},n.attrs||{}),{},{role:"separator","aria-orientation":"horizontal"}),ref:"divider"})])}})},1915:function(t,e,r){"use strict";r.d(e,"a",(function(){return v}));var n=r(8),o=r(48),a=r(5),i=r(2),c=r(13),p=r(1),u=r(93);function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l=Object(p.d)(Object(c.m)(s(s({},Object(c.k)(u.b,["size"])),{},{ariaRole:Object(p.c)(i.u,"group"),size:Object(p.c)(i.u),tag:Object(p.c)(i.u,"div"),vertical:Object(p.c)(i.g,!1)})),a.k),v=Object(n.c)({name:a.k,functional:!0,props:l,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(r.tag,Object(o.a)(n,{class:d({"btn-group":!r.vertical,"btn-group-vertical":r.vertical},"btn-group-".concat(r.size),r.size),attrs:{role:r.ariaRole}}),a)}})},2e3:function(t,e,r){"use strict";r.r(e);var n=r(1894),o=r(348),a=r(1915),i=r(93),c=r(1895),p=r(4),u=r(11),b={components:{BButtonGroup:a.a,BButton:i.a,BCardText:c.a,BCardCode:p.a},directives:{Ripple:u.a},data:function(){return{codeBasic:'\n<template>\n  <b-button-group>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      First\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Second\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Third\n    </b-button>\n  </b-button-group>\n</template>\n\n<script>\nimport { BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},s=r(0),d=Object(s.a)(b,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{attrs:{title:"Basic"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeBasic)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[t._v("Group a series of buttons together on a single line with ")]),t._v(" "),r("code",[t._v("<b-button-group>")]),t._v(" "),r("span",[t._v(".")])]),t._v(" "),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n      First\n    ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n      Second\n    ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n      Third\n    ")])],1)],1)}),[],!1,null,null,null).exports,l={components:{BButtonGroup:a.a,BButton:i.a,BCardText:c.a,BCardCode:p.a},directives:{Ripple:u.a},data:function(){return{codeSize:'\n<template>\n  <div>\n    <div>\n      \x3c!-- large --\x3e\n      <b-button-group\n        size="lg"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n    <div>\n\n      \x3c!-- default --\x3e\n      <b-button-group\n        class="my-1"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n\n    <div>\n\n      \x3c!-- size --\x3e\n      <b-button-group\n        size="sm"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},v=Object(s.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{attrs:{title:"Size"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeSize)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[t._v("Set the size prop to ")]),t._v(" "),r("code",[t._v("lg")]),t._v(" "),r("span",[t._v(" or ")]),t._v(" "),r("code",[t._v("sm")]),t._v(" "),r("span",[t._v(" to render larger or smaller, respectively, buttons. There is no need to specify the size on the individual buttons.")])]),t._v(" "),r("div",[r("b-button-group",{attrs:{size:"lg"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        First\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Second\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Third\n      ")])],1)],1),t._v(" "),r("div",[r("b-button-group",{staticClass:"my-1"},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        First\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Second\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Third\n      ")])],1)],1),t._v(" "),r("div",[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        First\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Second\n      ")]),t._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n        Third\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,m=r(569),f=r(1927),g=r(1908),O={components:{BButtonGroup:a.a,BDropdown:m.a,BDropdownItem:f.a,BButton:i.a,BCardCode:p.a,BDropdownDivider:g.a,BCardText:c.a},directives:{Ripple:u.a},data:function(){return{codeDropdown:'\n<template>\n  <b-button-group>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Button\n    </b-button>\n    <b-dropdown\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      right\n      variant="outline-primary"\n      text="Menu"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider />\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n    <b-dropdown\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      right\n      split\n      text="Split Menu"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider />\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n  </b-button-group>\n</template>\n\n<script>\nimport {\n  BButtonGroup, BButton, BDropdown, BDropdownItem, BDropdownDivider, \n} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BDropdown,\n    BDropdownItem,\n    BButton,\n    BDropdownDivider,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},j=Object(s.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card-code",{staticClass:"mb-0",attrs:{title:"Dropdown menu support"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeDropdown)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[t._v("Add ")]),t._v(" "),r("code",[t._v("<b-dropdown>")]),t._v(" "),r("span",[t._v(" menus directly inside your ")]),t._v(" "),r("code",[t._v("<b-button-group>")]),t._v(" "),r("span",[t._v(". Note that split dropdown menus are not supported when prop ")]),t._v(" "),r("code",[t._v("vertical")]),t._v(" "),r("span",[t._v(" is set.")])]),t._v(" "),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v("\n      Button\n    ")]),t._v(" "),r("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{right:"",variant:"outline-primary",text:"Menu"}},[r("b-dropdown-item",[t._v("Item 1")]),t._v(" "),r("b-dropdown-item",[t._v("Item 2")]),t._v(" "),r("b-dropdown-divider"),t._v(" "),r("b-dropdown-item",[t._v("Item 3")])],1),t._v(" "),r("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary",right:"",split:"",text:"Split Menu"}},[r("b-dropdown-item",[t._v("Item 1")]),t._v(" "),r("b-dropdown-item",[t._v("Item 2")]),t._v(" "),r("b-dropdown-divider"),t._v(" "),r("b-dropdown-item",[t._v("Item 3")])],1)],1)],1)}),[],!1,null,null,null).exports,_={components:{BRow:n.a,BCol:o.a,ButtonGroupBasic:d,ButtonGroupSize:v,ButtonGroupDropdownSupport:j}},w=Object(s.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("button-group-basic"),this._v(" "),e("button-group-size"),this._v(" "),e("button-group-dropdown-support")],1)],1)}),[],!1,null,null,null);e.default=w.exports},348:function(t,e,r){"use strict";r.d(e,"a",(function(){return w}));var n=r(48),o=r(5),a=r(2),i=r(43),c=r(23),p=r(67),u=r(35),b=r(7),s=r(205),d=r(13),l=r(1),v=r(27);function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var O=["auto","start","end","center","baseline","stretch"],j=Object(s.a)((function(t,e,r){var n=t;if(!Object(b.p)(r)&&!1!==r)return e&&(n+="-".concat(e)),"col"!==t||""!==r&&!0!==r?(n+="-".concat(r),Object(v.c)(n)):Object(v.c)(n)})),_=Object(d.c)(null),w={name:o.y,functional:!0,get props(){return delete this.props,this.props=(t=Object(p.b)().filter(u.a),e=t.reduce((function(t,e){return t[e]=Object(l.c)(a.i),t}),Object(d.c)(null)),r=t.reduce((function(t,e){return t[Object(l.g)(e,"offset")]=Object(l.c)(a.p),t}),Object(d.c)(null)),n=t.reduce((function(t,e){return t[Object(l.g)(e,"order")]=Object(l.c)(a.p),t}),Object(d.c)(null)),_=Object(d.a)(Object(d.c)(null),{col:Object(d.h)(e),offset:Object(d.h)(r),order:Object(d.h)(n)}),Object(l.d)(Object(d.m)(f(f(f(f({},e),r),n),{},{alignSelf:Object(l.c)(a.u,null,(function(t){return Object(c.a)(O,t)})),col:Object(l.c)(a.g,!1),cols:Object(l.c)(a.p),offset:Object(l.c)(a.p),order:Object(l.c)(a.p),tag:Object(l.c)(a.u,"div")})),o.y));var t,e,r,n},render:function(t,e){var r,o=e.props,a=e.data,c=e.children,p=o.cols,u=o.offset,b=o.order,s=o.alignSelf,d=[];for(var l in _)for(var v=_[l],m=0;m<v.length;m++){var f=j(l,v[m].replace(l,""),o[v[m]]);f&&d.push(f)}var O=d.some((function(t){return i.e.test(t)}));return d.push((g(r={col:o.col||!O&&!p},"col-".concat(p),p),g(r,"offset-".concat(u),u),g(r,"order-".concat(b),b),g(r,"align-self-".concat(s),s),r)),t(o.tag,Object(n.a)(a,{class:d}),c)}}},4:function(t,e,r){"use strict";var n=r(16);e.a=n.a},528:function(t,e,r){var n=r(1051);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(21)(n,o);n.locals&&(t.exports=n.locals)}}]);