(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1051:function(e,t,a){"use strict";a(528)},1052:function(e,t,a){(t=a(19)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=t},1244:function(e,t,a){"use strict";a(640)},1245:function(e,t,a){(t=a(19)(!1)).push([e.i,"[dir] .b-aspect[data-v-c6477b80] {\n  padding: 1.5rem;\n  border: 1px solid #eee;\n}",""]),e.exports=t},16:function(e,t,a){"use strict";a(76);var n=a(1896),r=a(343),s=a(345),o=a(344),c=a(1913),i=(a(177),a(191),a(101)),l=a.n(i),d={components:{BCard:n.a,BCardTitle:r.a,BCardSubTitle:s.a,BCardBody:o.a,BCollapse:c.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},v=(a(1051),a(0)),u=Object(v.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[a("div",{staticClass:"card-header"},[a("div",[a("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?a("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),a("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[a("b-card-body",[a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:a("b-card-body",[e._t("default"),e._v(" "),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[a("div",{staticClass:"p-1"}),e._v(" "),a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=u.exports},2004:function(e,t,a){"use strict";a.r(t);var n=a(1894),r=a(350),s=a(4),o=a(1899),c=a(1936),i=a(1934),l=a(1895),d=a(59),v=a(1901),u={components:{BCardCode:s.a,BAlert:o.a,BAspect:c.a,BFormGroup:i.a,BCardText:l.a,BLink:d.a,BFormSelect:v.a},data:function(){return{aspect:"16:9",aspects:[{text:"4:3 (SD)",value:"4:3"},{text:"1:1 (Square)",value:"1:1"},{text:"16:9 (HD)",value:"16:9"},{text:"1.85:1 (Widescreen)",value:"1.85:1"},{text:"2:1 (Univisium/Superscope)",value:"2:1"},{text:"21:9 (Anamorphic)",value:"21:9"},{text:"1.43:1 (IMAX)",value:"1.43:1"},{text:"3:2 (35mm Film)",value:"3:2"},{text:"3:1 (APS-P)",value:"3:1"},{text:"4/3 (Same as 4:3)",value:4/3},{text:"16/9 (Same as 16:9)",value:16/9},{text:"3 (Same as 3:1)",value:3},{text:"2 (Same as 2:1)",value:2},{text:"1.85 (Same as 1.85:1)",value:1.85},{text:"1.5",value:1.5},{text:"1 (Same as 1:1)",value:1}],codeAspectDefaut:"\n<template>\n  <div>\n   \x3c!-- alert --\x3e\n    <b-alert\n      show\n      variant=\"success\"\n    >\n      <div class=\"alert-body\">\n        <feather-icon\n          icon=\"InfoIcon\"\n          class=\"mr-50 mt-25\"\n        />\n        Change width of your browser window to see effect\n      </div>\n    </b-alert>\n\n    \x3c!-- select --\x3e\n    <b-form-group\n      label=\"Aspect ratio\"\n      label-for=\"ratio\"\n      label-cols-md=\"auto\"\n      class=\"mb-3\"\n    >\n      <b-form-select\n        id=\"ratio\"\n        v-model=\"aspect\"\n        :options=\"aspects\"\n      />\n    </b-form-group>\n\n    \x3c!-- aspect --\x3e\n    <b-aspect :aspect=\"aspect\">\n      <p>This will always be an aspect of \"{{ aspect }}\", except when the content is too tall.</p>\n    </b-aspect>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BAspect, BFormGroup, BFormSelect, BLink} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BAlert,\n    BAspect,\n    BFormGroup,\n    BLink,\n    BFormSelect,\n  },\n  data: () => ({\n    aspect: '16:9',\n    aspects: [\n      { text: '4:3 (SD)', value: '4:3' },\n      { text: '1:1 (Square)', value: '1:1' },\n      { text: '16:9 (HD)', value: '16:9' },\n      { text: '1.85:1 (Widescreen)', value: '1.85:1' },\n      { text: '2:1 (Univisium/Superscope)', value: '2:1' },\n      { text: '21:9 (Anamorphic)', value: '21:9' },\n      { text: '1.43:1 (IMAX)', value: '1.43:1' },\n      { text: '3:2 (35mm Film)', value: '3:2' },\n      { text: '3:1 (APS-P)', value: '3:1' },\n      { text: '4/3 (Same as 4:3)', value: 4 / 3 },\n      { text: '16/9 (Same as 16:9)', value: 16 / 9 },\n      { text: '3 (Same as 3:1)', value: 3 },\n      { text: '2 (Same as 2:1)', value: 2 },\n      { text: '1.85 (Same as 1.85:1)', value: 1.85 },\n      { text: '1.5', value: 1.5 },\n      { text: '1 (Same as 1:1)', value: 1 },\n    ],\n  }),\n}\n<\/script>\n"}}},p=(a(1244),a(0)),b=Object(p.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Default"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAspectDefaut)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("The default ")]),e._v(" "),a("b-link",{attrs:{href:"https://en.wikipedia.org/wiki/Aspect_ratio_(image)"}},[e._v("\n      aspect\n    ")]),e._v(" "),a("span",[e._v(" ratio is ")]),e._v(" "),a("code",[e._v("1:1")]),e._v(" "),a("span",[e._v(" (ratio of ")]),e._v(" "),a("code",[e._v("1")]),e._v(" "),a("span",[e._v(" ), which makes the height always be at least the same as the width. The ")]),e._v(" "),a("code",[e._v("aspect")]),e._v(" "),a("span",[e._v(" prop can be used to specify an arbitrary aspect ratio (i.e. ")]),e._v(" "),a("code",[e._v("1.5")]),e._v(" "),a("span",[e._v(" ) or a ratio as a string such as ")]),e._v(" "),a("code",[e._v("'16:9'")]),e._v(" "),a("span",[e._v(" or ")]),e._v(" "),a("code",[e._v("'4:3'")]),e._v(" "),a("span",[e._v(".")])],1),e._v(" "),a("b-card-text",[e._v("\n    The width will always be 100% of the available width in the parent element/component.\n  ")]),e._v(" "),a("b-alert",{attrs:{show:"",variant:"success"}},[a("div",{staticClass:"alert-body"},[a("feather-icon",{staticClass:"mr-50 mt-25",attrs:{icon:"InfoIcon"}}),e._v("\n      Change width of your browser window to see effect\n    ")],1)]),e._v(" "),a("b-form-group",{staticClass:"mb-3",attrs:{label:"Aspect ratio","label-for":"ratio","label-cols-md":"auto"}},[a("b-form-select",{attrs:{id:"ratio",options:e.aspects},model:{value:e.aspect,callback:function(t){e.aspect=t},expression:"aspect"}})],1),e._v(" "),a("b-aspect",{attrs:{aspect:e.aspect}},[a("p",[e._v('This will always be an aspect of "'+e._s(e.aspect)+'", except when the content is too tall.')])])],1)}),[],!1,null,"c6477b80",null).exports,m={components:{BRow:n.a,BCol:r.a,AspectDefault:b}},_=Object(p.a)(m,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("aspect-default")],1)],1)}),[],!1,null,null,null);t.default=_.exports},4:function(e,t,a){"use strict";var n=a(16);t.a=n.a},528:function(e,t,a){var n=a(1052);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(21)(n,r);n.locals&&(e.exports=n.locals)},640:function(e,t,a){var n=a(1245);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(21)(n,r);n.locals&&(e.exports=n.locals)}}]);