(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1031:function(n,t,e){"use strict";e(531)},1032:function(n,t,e){(t=e(20)(!1)).push([n.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),n.exports=t},16:function(n,t,e){"use strict";e(71);var r=e(1825),a=e(342),o=e(344),i=e(343),s=e(1840),c=(e(174),e(188),e(97)),l=e.n(c),d={components:{BCard:r.a,BCardTitle:a.a,BCardSubTitle:o.a,BCardBody:i.a,BCollapse:s.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var n=JSON.parse(JSON.stringify(this.$attrs));return delete n.title,delete n["sub-title"],n}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},p=(e(1031),e(0)),u=Object(p.a)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card",n._g(n._b({attrs:{"no-body":""}},"b-card",n.cardAttrs,!1),n.$listeners),[e("div",{staticClass:"card-header"},[e("div",[e("b-card-title",[n._v(n._s(n.$attrs.title))]),n._v(" "),n.$attrs["sub-title"]?e("b-card-sub-title",[n._v("\n        "+n._s(n.$attrs["sub-title"])+"\n      ")]):n._e()],1),n._v(" "),e("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":n.code_visible?"false":"true","aria-controls":n.parentID},on:{click:function(t){n.code_visible=!n.code_visible}}})]),n._v(" "),void 0!==n.$attrs["no-body"]?[n._t("default"),n._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(t){n.code_visible=t},expression:"code_visible"}},[e("b-card-body",[e("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],1)]:e("b-card-body",[n._t("default"),n._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(t){n.code_visible=t},expression:"code_visible"}},[e("div",{staticClass:"p-1"}),n._v(" "),e("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=u.exports},1823:function(n,t,e){"use strict";e.d(t,"a",(function(){return O}));var r=e(48),a=e(5),o=e(2),i=e(22),s=e(67),c=e(35),l=e(203),d=e(13),p=e(1),u=e(27);function b(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function v(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?b(Object(e),!0).forEach((function(t){f(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):b(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var m=["start","end","center"],g=Object(l.a)((function(n,t){return(t=Object(u.h)(Object(u.g)(t)))?Object(u.c)(["row-cols",n,t].filter(c.a).join("-")):null})),_=Object(l.a)((function(n){return Object(u.c)(n.replace("cols",""))})),y=[],O={name:a.Ob,functional:!0,get props(){var n;return delete this.props,this.props=(n=Object(s.b)().reduce((function(n,t){return n[Object(p.g)(t,"cols")]=Object(p.c)(o.p),n}),Object(d.c)(null)),y=Object(d.h)(n),Object(p.d)(Object(d.m)(v(v({},n),{},{alignContent:Object(p.c)(o.u,null,(function(n){return Object(i.a)(Object(i.b)(m,"between","around","stretch"),n)})),alignH:Object(p.c)(o.u,null,(function(n){return Object(i.a)(Object(i.b)(m,"between","around"),n)})),alignV:Object(p.c)(o.u,null,(function(n){return Object(i.a)(Object(i.b)(m,"baseline","stretch"),n)})),noGutters:Object(p.c)(o.g,!1),tag:Object(p.c)(o.u,"div")})),a.Ob)),this.props},render:function(n,t){var e,a=t.props,o=t.data,i=t.children,s=a.alignV,c=a.alignH,l=a.alignContent,d=[];return y.forEach((function(n){var t=g(_(n),a[n]);t&&d.push(t)})),d.push((f(e={"no-gutters":a.noGutters},"align-items-".concat(s),s),f(e,"justify-content-".concat(c),c),f(e,"align-content-".concat(l),l),e)),n(a.tag,Object(r.a)(o,{staticClass:"row",class:d}),i)}}},1824:function(n,t,e){"use strict";e.d(t,"a",(function(){return l}));var r=e(8),a=e(48),o=e(5),i=e(2),s=e(1),c=Object(s.d)({textTag:Object(s.c)(i.u,"p")},o.u),l=Object(r.c)({name:o.u,functional:!0,props:c,render:function(n,t){var e=t.props,r=t.data,o=t.children;return n(e.textTag,Object(a.a)(r,{staticClass:"card-text"}),o)}})},1902:function(n,t,e){"use strict";e.r(t);var r=e(1823),a=e(347),o=e(4),i=e(550),s=e(1824),c={components:{BCardCode:o.a,BSpinner:i.a,BCardText:s.a},data:function(){return{codeBorder:"\n<template>\n  <b-spinner label=\"Loading...\" />\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n"}}},l=e(0),d=Object(l.a)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Border Spinners"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeBorder)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("Use the default ")]),n._v(" "),e("code",[n._v("border")]),n._v(" "),e("span",[n._v(" type spinners for a lightweight loading indicator.")])]),n._v(" "),e("b-spinner",{attrs:{label:"Loading..."}})],1)}),[],!1,null,null,null).exports,p={components:{BCardCode:o.a,BSpinner:i.a,BCardText:s.a},data:function(){return{variants:["primary","secondary","danger","warning","success","info","light","dark"],codeBorderColor:"\n<template>\n  <div class=\"demo-inline-spacing\">\n    <b-spinner\n      v-for=\"variant in variants\"\n      :key=\"variant\"\n      class=\"mr-1\"\n      :variant=\"variant\"\n    />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n  data: () => ({\n    variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],\n  }),\n}\n<\/script>\n"}}},u=Object(l.a)(p,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Colored Spinners"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeBorderColor)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[n._v("You can customize the color using the standard text color variants using the ")]),n._v(" "),e("code",[n._v("variant")]),n._v(" "),e("span",[n._v(" prop.")])]),n._v(" "),e("div",{staticClass:"demo-inline-spacing"},n._l(n.variants,(function(n){return e("b-spinner",{key:n,staticClass:"mr-1",attrs:{variant:n}})})),1)],1)}),[],!1,null,null,null).exports,b={components:{BCardCode:o.a,BSpinner:i.a,BCardText:s.a},data:function(){return{codeGrow:'\n<template>\n  <b-spinner type="grow" label="Loading..." />\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n'}}},v=Object(l.a)(b,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Growing Spinner"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeGrow)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("If you don't fancy a ")]),n._v(" "),e("code",[n._v("border")]),n._v(" "),e("span",[n._v(" spinner, switch to the ")]),n._v(" "),e("code",[n._v("grow")]),n._v(" "),e("span",[n._v(" spinner by setting the prop ")]),n._v(" "),e("code",[n._v("type")]),n._v(" "),e("span",[n._v(" to ")]),n._v(" "),e("code",[n._v("'grow'")]),n._v(".\n    "),e("span",[n._v("While it doesn't technically spin, it does repeatedly grow!")])]),n._v(" "),e("b-spinner",{attrs:{type:"grow",label:"Loading..."}})],1)}),[],!1,null,null,null).exports,f={components:{BCardCode:o.a,BSpinner:i.a,BCardText:s.a},data:function(){return{variants:["primary","secondary","danger","warning","success","info","light","dark"],codeGrowColor:"\n<template>\n  <div class=\"d-flex flex-wrap\">\n    <b-spinner\n      v-for=\"variant in variants\"\n      :key=\"variant\"\n      :variant=\"variant\"\n      class=\"mr-1\"\n      type=\"grow\"\n    />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BSpinner,\n  },\n  data: () => ({\n    variants: ['primary', 'secondary', 'danger', 'warning', 'success', 'info', 'light', 'dark'],\n  }),\n}\n<\/script>\n"}}},m=Object(l.a)(f,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Colored Growing Spinners"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeGrowColor)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[n._v("The variant prop translates the variant name to the Bootstrap v4 class ")]),n._v(" "),e("code",[n._v(".text-{variant}")]),n._v(" "),e("span",[n._v(", so if you have custom defined text color ")]),n._v(" "),e("code",[n._v("variants")]),n._v(" "),e("span",[n._v(", feel free to use them via the variant prop.")])]),n._v(" "),e("div",{staticClass:"demo-inline-spacing"},n._l(n.variants,(function(n){return e("b-spinner",{key:n,staticClass:"mr-1",attrs:{variant:n,type:"grow"}})})),1)],1)}),[],!1,null,null,null).exports,g={components:{BCardCode:o.a,BSpinner:i.a,BCardText:s.a},data:function(){return{codeSize:'\n<template>\n  <div class="text-center d-flex justify-content-between">\n    <div>\n      <b-spinner\n        small\n        class="mr-1"\n        label="Small Spinner"\n      />\n      <b-spinner\n        small\n        label="Small Spinner"\n        type="grow"\n      />\n    </div>\n    <div>\n      <b-spinner\n        class="mr-1"\n        label="Small Spinner"\n      />\n      <b-spinner\n        label="Small Spinner"\n        type="grow"\n      />\n    </div>\n    <div>\n      <b-spinner\n        style="width: 3rem; height: 3rem;"\n        class="mr-1"\n        label="Large Spinner"\n      />\n      <b-spinner\n        style="width: 3rem; height: 3rem;"\n        label="Large Spinner"\n        type="grow"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n'}}},_=Object(l.a)(g,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Sizes"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeSize)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[n._v("Set the prop ")]),n._v(" "),e("code",[n._v("small")]),n._v(" "),e("span",[n._v(" to ")]),n._v(" "),e("code",[n._v("true")]),n._v(" "),e("span",[n._v(" to make a smaller spinner that can quickly be used within other components.")])]),n._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("div",[e("b-spinner",{staticClass:"mr-1",attrs:{small:"",label:"Small Spinner"}}),n._v(" "),e("b-spinner",{attrs:{small:"",label:"Small Spinner",type:"grow"}})],1),n._v(" "),e("div",[e("b-spinner",{staticClass:"mr-1",attrs:{label:"Small Spinner"}}),n._v(" "),e("b-spinner",{attrs:{label:"Small Spinner",type:"grow"}})],1),n._v(" "),e("div",[e("b-spinner",{staticClass:"mr-1",staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner"}}),n._v(" "),e("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner",type:"grow"}})],1)])],1)}),[],!1,null,null,null).exports,y={components:{BCardCode:o.a,BSpinner:i.a,BCardText:s.a},data:function(){return{codeFlex:'\n<template>\n  <div>\n    <div class="d-flex justify-content-center mb-1">\n      <b-spinner label="Loading..." />\n    </div>\n    <div class="d-flex align-items-center">\n      <strong>Loading...</strong>\n      <b-spinner class="ml-auto" />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n'}}},O=Object(l.a)(y,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Flex"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeFlex)+"\n  ")]},proxy:!0}])},[e("b-card-text",[n._v("\n    Using flex utility classes:\n  ")]),n._v(" "),e("div",{staticClass:"d-flex justify-content-center mb-1"},[e("b-spinner",{attrs:{label:"Loading..."}})],1),n._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("strong",[n._v("Loading...")]),n._v(" "),e("b-spinner",{staticClass:"ml-auto"})],1)],1)}),[],!1,null,null,null).exports,h={components:{BCardCode:o.a,BSpinner:i.a,BCardText:s.a},data:function(){return{codeFloat:'\n<template>\n  <div class="clearfix">\n    <b-spinner class="float-right" label="Floated Right" />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  },\n}\n<\/script>\n'}}},j=Object(l.a)(h,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Float"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeFloat)+"\n  ")]},proxy:!0}])},[e("b-card-text",[n._v("Using float utility classes:")]),n._v(" "),e("div",{staticClass:"clearfix"},[e("b-spinner",{staticClass:"float-right",attrs:{label:"Floated Right"}})],1)],1)}),[],!1,null,null,null).exports,x={components:{BCardCode:o.a,BSpinner:i.a,BCardText:s.a},data:function(){return{codeTextAlign:'\n<template>\n  <div class="text-center">\n    <b-spinner variant="primary" label="Text Centered" />\n  </div>\n</template>\n\n<script>\nimport { BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BSpinner,\n  }\n}\n<\/script>\n'}}},S=Object(l.a)(x,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Text Alignment"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeTextAlign)+"\n  ")]},proxy:!0}])},[e("b-card-text",[n._v("Using text alignment utility classes:")]),n._v(" "),e("div",{staticClass:"text-center"},[e("b-spinner",{attrs:{variant:"primary",label:"Text Centered"}})],1)],1)}),[],!1,null,null,null).exports,C=e(89),w={components:{BCardCode:o.a,BButton:C.a,BSpinner:i.a,BCardText:s.a},data:function(){return{codeButton:'\n<template>\n  <div>\n    <b-button\n      variant="primary"\n      disabled\n      class="mr-1"\n    >\n      <b-spinner small />\n      <span class="sr-only">Loading...</span>\n    </b-button>\n\n    <b-button\n      variant="primary"\n      disabled\n      class="mr-1"\n    >\n      <b-spinner small />\n      Loading...\n    </b-button>\n\n    <b-button\n      variant="primary"\n      disabled\n      class="mr-1"\n    >\n      <b-spinner\n        small\n        type="grow"\n      />\n      <span class="sr-only">Loading...</span>\n    </b-button>\n\n    <b-button\n      variant="primary"\n      disabled\n      class="mr-1"\n    >\n      <b-spinner\n        small\n        type="grow"\n      />\n      Loading...\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BSpinner, BButton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BButton,\n    BSpinner,\n  },\n}\n<\/script>\n'}}},B=Object(l.a)(w,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Buttons"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeButton)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[n._v("\n    Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the\n    label text out of the spinner element and utilize button text as needed.\n  ")]),n._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{attrs:{variant:"outline-primary",disabled:""}},[e("b-spinner",{attrs:{small:""}}),n._v(" "),e("span",{staticClass:"sr-only"},[n._v("Loading...")])],1),n._v(" "),e("b-button",{attrs:{variant:"outline-primary",disabled:""}},[e("b-spinner",{attrs:{small:""}}),n._v("\n      Loading...\n    ")],1),n._v(" "),e("b-button",{attrs:{variant:"outline-primary",disabled:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),n._v(" "),e("span",{staticClass:"sr-only"},[n._v("Loading...")])],1),n._v(" "),e("b-button",{attrs:{variant:"outline-primary",disabled:""}},[e("b-spinner",{attrs:{small:"",type:"grow"}}),n._v("\n      Loading...\n    ")],1)],1)],1)}),[],!1,null,null,null).exports,k={components:{BRow:r.a,BCol:a.a,SpinnerBorder:d,SpinnerColor:u,SpinnerGrow:v,SpinnerGrowColor:m,SpinnerSize:_,SpinnerFlex:O,SpinnerFloat:j,SpinnerTextAlign:S,SpinnerButton:B}},L=Object(l.a)(k,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{md:"6"}},[e("spinner-border")],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("spinner-color")],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("spinner-grow")],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("spinner-grow-color")],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("spinner-flex")],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("spinner-float")],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("spinner-text-align")],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("spinner-size")],1),n._v(" "),e("b-col",[e("spinner-button")],1)],1)}),[],!1,null,null,null);t.default=L.exports},347:function(n,t,e){"use strict";e.d(t,"a",(function(){return h}));var r=e(48),a=e(5),o=e(2),i=e(43),s=e(22),c=e(67),l=e(35),d=e(7),p=e(203),u=e(13),b=e(1),v=e(27);function f(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function m(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?f(Object(e),!0).forEach((function(t){g(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function g(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var _=["auto","start","end","center","baseline","stretch"],y=Object(p.a)((function(n,t,e){var r=n;if(!Object(d.p)(e)&&!1!==e)return t&&(r+="-".concat(t)),"col"!==n||""!==e&&!0!==e?(r+="-".concat(e),Object(v.c)(r)):Object(v.c)(r)})),O=Object(u.c)(null),h={name:a.y,functional:!0,get props(){return delete this.props,this.props=(n=Object(c.b)().filter(l.a),t=n.reduce((function(n,t){return n[t]=Object(b.c)(o.i),n}),Object(u.c)(null)),e=n.reduce((function(n,t){return n[Object(b.g)(t,"offset")]=Object(b.c)(o.p),n}),Object(u.c)(null)),r=n.reduce((function(n,t){return n[Object(b.g)(t,"order")]=Object(b.c)(o.p),n}),Object(u.c)(null)),O=Object(u.a)(Object(u.c)(null),{col:Object(u.h)(t),offset:Object(u.h)(e),order:Object(u.h)(r)}),Object(b.d)(Object(u.m)(m(m(m(m({},t),e),r),{},{alignSelf:Object(b.c)(o.u,null,(function(n){return Object(s.a)(_,n)})),col:Object(b.c)(o.g,!1),cols:Object(b.c)(o.p),offset:Object(b.c)(o.p),order:Object(b.c)(o.p),tag:Object(b.c)(o.u,"div")})),a.y));var n,t,e,r},render:function(n,t){var e,a=t.props,o=t.data,s=t.children,c=a.cols,l=a.offset,d=a.order,p=a.alignSelf,u=[];for(var b in O)for(var v=O[b],f=0;f<v.length;f++){var m=y(b,v[f].replace(b,""),a[v[f]]);m&&u.push(m)}var _=u.some((function(n){return i.e.test(n)}));return u.push((g(e={col:a.col||!_&&!c},"col-".concat(c),c),g(e,"offset-".concat(l),l),g(e,"order-".concat(d),d),g(e,"align-self-".concat(p),p),e)),n(a.tag,Object(r.a)(o,{class:u}),s)}}},4:function(n,t,e){"use strict";var r=e(16);t.a=r.a},531:function(n,t,e){var r=e(1032);"string"==typeof r&&(r=[[n.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(23)(r,a);r.locals&&(n.exports=r.locals)},550:function(n,t,e){"use strict";e.d(t,"a",(function(){return u}));var r=e(8),a=e(48),o=e(5),i=e(2),s=e(19),c=e(69),l=e(1);function d(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}var p=Object(l.d)({label:Object(l.c)(i.u),role:Object(l.c)(i.u,"status"),small:Object(l.c)(i.g,!1),tag:Object(l.c)(i.u,"span"),type:Object(l.c)(i.u,"border"),variant:Object(l.c)(i.u)},o.Qb),u=Object(r.c)({name:o.Qb,functional:!0,props:p,render:function(n,t){var e,r=t.props,o=t.data,i=t.slots,l=t.scopedSlots,p=i(),u=l||{},b=Object(c.b)(s.C,{},u,p)||r.label;return b&&(b=n("span",{staticClass:"sr-only"},b)),n(r.tag,Object(a.a)(o,{attrs:{role:b?r.role||"status":null,"aria-hidden":b?null:"true"},class:(e={},d(e,"spinner-".concat(r.type),r.type),d(e,"spinner-".concat(r.type,"-sm"),r.small),d(e,"text-".concat(r.variant),r.variant),e)}),[b||n()])}})}}]);