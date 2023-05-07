(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{1049:function(t,e,n){"use strict";n(528)},1050:function(t,e,n){(e=n(19)(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=e},149:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var a=n(8),r=n(2),o=n(1),i=Object(o.d)({plain:Object(o.c)(r.g,!1)},"formControls"),s=Object(a.c)({props:i,computed:{custom:function(){return!this.plain}}})},16:function(t,e,n){"use strict";n(76);var a=n(1892),r=n(341),o=n(343),i=n(342),s=n(1907),c=(n(177),n(191),n(101)),l=n.n(c),u={components:{BCard:a.a,BCardTitle:r.a,BCardSubTitle:o.a,BCardBody:i.a,BCollapse:s.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},d=(n(1049),n(0)),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?n("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(e){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:n("b-card-body",[t._t("default"),t._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),t._v(" "),n("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);e.a=p.exports},1891:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n(8),r=n(48),o=n(5),i=n(2),s=n(1),c=Object(s.d)({textTag:Object(s.c)(i.u,"p")},o.u),l=Object(a.c)({name:o.u,functional:!0,props:c,render:function(t,e){var n=e.props,a=e.data,o=e.children;return t(n.textTag,Object(r.a)(a,{staticClass:"card-text"}),o)}})},1973:function(t,e,n){"use strict";n.r(e);var a=n(1890),r=n(348),o=n(1900),i=n(538),s=n(1891),c=n(4),l={components:{BCardCode:c.a,BPagination:o.a,BFormRadio:i.a,BCardText:s.a},data:function(){return{selected:"default",codeAlignment:'\n<template>\n  <div class="demo-spacing-0">\n    <span>Radios using options</span>\n    <div class="my-1">\n      <b-form-radio\n        v-model="selected"\n        name="vuexy-radio"\n        value="default"\n        inline\n      >\n        Default\n      </b-form-radio>\n      <b-form-radio\n        v-model="selected"\n        name="vuexy-radio"\n        value="right"\n        inline\n      >\n        Right\n      </b-form-radio>\n      <b-form-radio\n        v-model="selected"\n        name="vuexy-radio"\n        value="center"\n        inline\n      >\n        Center\n      </b-form-radio>\n      <b-form-radio\n        v-model="selected"\n        name="vuexy-radio"\n        value="fill"\n        inline\n      >\n        Fill\n      </b-form-radio>\n    </div>\n\n    \x3c!-- pagination --\x3e\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      base-url="#"\n      :align="selected"\n    />\n  </div>\n</template>\n\n<script>\nimport { BPagination, BFormRadio } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n    BFormRadio,\n  },\n  data() {\n    return {\n      selected: \'default\',\n      currentPage: 1,\n      rows: 100,\n    }\n  },\n}\n<\/script>\n',currentPage:1,rows:100}}},u=n(0),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Alignment"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeAlignment)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("By default the pagination component is left aligned. Change the alignment to ")]),t._v(" "),n("code",[t._v("center, right")]),t._v(" "),n("span",[t._v(" (")]),t._v(" "),n("code",[t._v("right")]),t._v(" "),n("span",[t._v(" is an alias for ")]),t._v(" "),n("code",[t._v("end")]),t._v(" "),n("span",[t._v(" )")]),t._v(" "),n("span",[t._v(", or ")]),t._v(" "),n("code",[t._v("fill")]),t._v(" "),n("span",[t._v(" by setting the prop ")]),t._v(" "),n("code",[t._v("align")]),t._v(" "),n("span",[t._v(" to the appropriate value.")])]),t._v(" "),n("div",{staticClass:"demo-spacing-0"},[n("span",[t._v("Radios using options")]),t._v(" "),n("div",{staticClass:"my-1"},[n("b-form-radio",{attrs:{name:"vuexy-radio",value:"default",inline:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._v("\n        Default\n      ")]),t._v(" "),n("b-form-radio",{attrs:{name:"vuexy-radio",value:"right",inline:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._v("\n        Right\n      ")]),t._v(" "),n("b-form-radio",{attrs:{name:"vuexy-radio",value:"center",inline:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._v("\n        Center\n      ")]),t._v(" "),n("b-form-radio",{attrs:{name:"vuexy-radio",value:"fill",inline:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._v("\n        Fill\n      ")])],1),t._v(" "),n("b-pagination",{attrs:{"total-rows":t.rows,"base-url":"#",align:t.selected},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,p={components:{BCardCode:c.a,BPagination:o.a,BCardText:s.a},data:function(){return{codeBasic:'\n<template>\n   <b-pagination\n    v-model="currentPage"\n    hide-goto-end-buttons\n    :total-rows="rows"\n  />\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data() {\n    return {\n      currentPage: 1,\n      perPage: 1,\n      rows: 100,\n    }\n  },\n}\n<\/script>\n',currentPage:1,perPage:1,rows:100}}},b=Object(u.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Basic"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeBasic)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("\n      Quick first, previous, next, last, and page buttons for pagination control of another component (such as\n    ")]),t._v(" "),n("code",[t._v("<b-table>")]),t._v(" "),n("span",[t._v("or lists).")])]),t._v(" "),n("div",{staticClass:"demo-spacing-0"},[n("b-pagination",{attrs:{"hide-goto-end-buttons":"","total-rows":t.rows},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,v=n(541),f={components:{BCardCode:c.a,BPagination:o.a,BSpinner:v.a,BCardText:s.a},data:function(){return{codeContent:'\n<template>\n  <div class="demo-spacing-0">\n    \x3c!-- Use text in props --\x3e\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      :per-page="perPage"\n      first-text="First"\n      prev-text="Prev"\n      next-text="Next"\n      align="left"\n      last-text="Last"\n    />\n\n    \x3c!-- Use emojis in props --\x3e\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      :per-page="perPage"\n      first-text="⏮"\n      prev-text="⏪"\n      next-text="⏩"\n      align="left"\n      last-text="⏭"\n      class="mt-2"\n    />\n\n    \x3c!-- Use HTML and sub-components in slots --\x3e\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      :per-page="perPage"\n      align="left"\n      class="mt-2"\n    >\n      <template\n        #first-text\n      >\n        <span class="text-success">First</span>\n      </template>\n      <template #prev-text>\n        <span class="text-danger">Prev</span>\n      </template>\n      <template #next-text>\n        <span class="text-warning">Next</span>\n      </template>\n      <template #last-text>\n        <span class="text-info">Last</span>\n      </template>\n      <template #ellipsis-text>\n        <div>\n          <b-spinner\n            small\n            type="grow"\n          />\n          <b-spinner\n            small\n            type="grow"\n          />\n        </div>\n      </template>\n      <template #page="{ page, active }">\n        <b v-if="active">{{ page }}</b>\n        <i v-else>{{ page }}</i>\n      </template>\n    </b-pagination>\n  </div>\n</template>\n\n<script>\nimport { BPagination, BSpinner } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n    BSpinner,\n  },\n  data: () => ({\n    currentPage: 1,\n    perPage: 10,\n    rows: 100,\n  }),\n}\n<\/script>\n',currentPage:1,perPage:10,rows:100}}},g=Object(u.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Button content"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeContent)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("For a full list of all available slots see the")]),t._v(" "),n("code",[t._v("Slots")]),t._v(" "),n("span",[t._v("section below.")])]),t._v(" "),n("div",{staticClass:"demo-spacing-0"},[n("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-text":"First","prev-text":"Prev","next-text":"Next",align:"left","last-text":"Last"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),t._v(" "),n("b-pagination",{staticClass:"mt-2",attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-text":"⏮","prev-text":"⏪","next-text":"⏩",align:"left","last-text":"⏭"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),t._v(" "),n("b-pagination",{staticClass:"mt-2",attrs:{"total-rows":t.rows,"per-page":t.perPage,align:"left"},scopedSlots:t._u([{key:"first-text",fn:function(){return[n("span",{staticClass:"text-success"},[t._v("First")])]},proxy:!0},{key:"prev-text",fn:function(){return[n("span",{staticClass:"text-danger"},[t._v("Prev")])]},proxy:!0},{key:"next-text",fn:function(){return[n("span",{staticClass:"text-warning"},[t._v("Next")])]},proxy:!0},{key:"last-text",fn:function(){return[n("span",{staticClass:"text-info"},[t._v("Last")])]},proxy:!0},{key:"ellipsis-text",fn:function(){return[n("div",[n("b-spinner",{attrs:{small:"",type:"grow"}}),t._v(" "),n("b-spinner",{attrs:{small:"",type:"grow"}})],1)]},proxy:!0},{key:"page",fn:function(e){var a=e.page,r=e.active;return[n(r?"b":"i",[t._v(t._s(a))])]}}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,m={components:{BCardCode:c.a,BPagination:o.a,BCardText:s.a},data:function(){return{codeColorOption:'\n<template>\n  <div class="demo-spacing-0">\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      first-number\n      last-number\n      class="pagination-success"\n    >\n      <template #prev-text>\n        <feather-icon\n          size="18"\n          icon="ChevronLeftIcon"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          size="18"\n          icon="ChevronRightIcon"\n        />\n      </template>\n    </b-pagination>\n\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      first-number\n      last-number\n      class="pagination-danger mt-2"\n    >\n      <template #prev-text>\n        <feather-icon\n          size="18"\n          icon="ChevronLeftIcon"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          size="18"\n          icon="ChevronRightIcon"\n        />\n      </template>\n    </b-pagination>\n\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      first-number\n      last-number\n      class="pagination-info mb-0"\n    >\n      <template #prev-text>\n        <feather-icon\n          size="18"\n          icon="ChevronLeftIcon"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          size="18"\n          icon="ChevronRightIcon"\n        />\n      </template>\n    </b-pagination>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n data() {\n    return {\n      codeColorOption,\n      currentPage: 4,\n      perPage: 1,\n      rows: 200,\n    }\n  },\n}\n<\/script>\n',currentPage:4,perPage:1,rows:200}}},h=Object(u.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Color Option"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeColorOption)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("To add pagination with different color option, use class")]),t._v(" "),n("code",[t._v(".pagination-{colorName}")]),t._v(" "),n("span",[t._v("with ")]),t._v(" "),n("code",[t._v("<b-pagination>")]),t._v(" "),n("span",[t._v("components.")])]),t._v(" "),n("div",{staticClass:"demo-spacing-0"},[n("b-pagination",{staticClass:"pagination-success",attrs:{"total-rows":t.rows,"first-number":"","last-number":""},scopedSlots:t._u([{key:"prev-text",fn:function(){return[n("feather-icon",{attrs:{size:"18",icon:"ChevronLeftIcon"}})]},proxy:!0},{key:"next-text",fn:function(){return[n("feather-icon",{attrs:{size:"18",icon:"ChevronRightIcon"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),t._v(" "),n("b-pagination",{staticClass:"pagination-danger mt-2",attrs:{"total-rows":t.rows,"first-number":"","last-number":""},scopedSlots:t._u([{key:"prev-text",fn:function(){return[n("feather-icon",{attrs:{size:"18",icon:"ChevronLeftIcon"}})]},proxy:!0},{key:"next-text",fn:function(){return[n("feather-icon",{attrs:{size:"18",icon:"ChevronRightIcon"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),t._v(" "),n("b-pagination",{staticClass:"pagination-info mb-0",attrs:{"total-rows":t.rows,"first-number":"","last-number":""},scopedSlots:t._u([{key:"prev-text",fn:function(){return[n("feather-icon",{attrs:{size:"18",icon:"ChevronLeftIcon"}})]},proxy:!0},{key:"next-text",fn:function(){return[n("feather-icon",{attrs:{size:"18",icon:"ChevronRightIcon"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,_={components:{BCardCode:c.a,BPagination:o.a,BCardText:s.a},data:function(){return{codeGoto:'\n<template>\n  <div>\n    <div>\n      <h6>Goto first button number</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        :per-page="perPage"\n        first-number\n      />\n    </div>\n    <div class="mt-2">\n      <h6>Goto last button number</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        :per-page="perPage"\n        last-number\n      />\n    </div>\n    <div class="mt-2 demo-spacing-0">\n      <h6>Goto first and last button number</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        :per-page="perPage"\n        first-number\n        last-number\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 5,\n    perPage: 1,\n    rows: 100,\n  }),\n}\n<\/script>\n',currentPage:5,perPage:1,rows:100}}},x=Object(u.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Goto first/last button type"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeGoto)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("If you prefer to have buttons with the first and last page number to go to the corresponding page, use the")]),t._v(" "),n("code",[t._v("first-number")]),t._v(" "),n("span",[t._v("and")]),t._v(" "),n("code",[t._v("last-number")]),t._v(" "),n("span",[t._v("props")]),t._v(".\n  ")]),t._v(" "),n("div",[n("h6",[t._v("Goto first button number")]),t._v(" "),n("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),n("div",{staticClass:"mt-2"},[n("h6",[t._v("Goto last button number")]),t._v(" "),n("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"last-number":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),n("div",{staticClass:"mt-2 demo-spacing-0"},[n("h6",[t._v("Goto first and last button number")]),t._v(" "),n("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"first-number":"","last-number":""},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,P={components:{BCardCode:c.a,BPagination:o.a,BCardText:s.a},data:function(){return{codePill:'\n<template>\n  <div>\n    <div>\n      <h6>Small Pills</h6>\n      <b-pagination\n        v-model="currentPage"\n        pills\n        :total-rows="rows"\n        size="sm"\n      />\n    </div>\n\n    <div class="mt-2">\n      <h6>Default Pills</h6>\n      <b-pagination\n        v-model="currentPage"\n        pills\n        :total-rows="rows"\n      />\n    </div>\n\n    <div class="mt-2 demo-spacing-0">\n      <h6>Large Pills</h6>\n      <b-pagination\n        v-model="currentPage"\n        pills\n        :total-rows="rows"\n        size="lg"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 1,\n    rows: 100,\n  }),\n}\n<\/script>\n',currentPage:1,rows:100}}},O=Object(u.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Pill style"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codePill)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("Easily switch to pill style buttons by setting the")]),t._v(" "),n("code",[t._v("pills")]),t._v(" "),n("span",[t._v("prop.")])]),t._v(" "),n("div",[n("h6",[t._v("Small Pills")]),t._v(" "),n("b-pagination",{attrs:{pills:"","total-rows":t.rows,size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),n("div",{staticClass:"mt-2"},[n("h6",[t._v("Default Pills")]),t._v(" "),n("b-pagination",{attrs:{pills:"","total-rows":t.rows},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),n("div",{staticClass:"mt-2 demo-spacing-0"},[n("h6",[t._v("Large Pills")]),t._v(" "),n("b-pagination",{attrs:{pills:"","total-rows":t.rows,size:"lg"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,w={components:{BCardCode:c.a,BPagination:o.a,BCardText:s.a},data:function(){return{codeSeparated:'\n<template>\n  <div class="demo-spacing-0">\n    <b-pagination\n      v-model="currentPage"\n      :total-rows="rows"\n      first-number\n      last-number\n      prev-class="prev-item"\n      next-class="next-item"\n    >\n      <template #prev-text>\n        <feather-icon\n          icon="ChevronLeftIcon"\n          size="18"\n        />\n      </template>\n      <template #next-text>\n        <feather-icon\n          icon="ChevronRightIcon"\n          size="18"\n        />\n      </template>\n    </b-pagination>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 1,\n    perPage: 1,\n    rows: 200,\n  }),\n}\n<\/script>\n',currentPage:1,perPage:1,rows:200}}},j=Object(u.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Separated"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeSeparated)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("To make space between seprated icons of pagination use ")]),t._v(" "),n("code",[t._v(".prev-item")]),t._v(" "),n("span",[t._v(" class for the ")]),t._v(" "),n("code",[t._v("prev-class")]),t._v(" "),n("span",[t._v(" prop and ")]),t._v(" "),n("code",[t._v(".next-item")]),t._v(" "),n("span",[t._v(" for the ")]),t._v(" "),n("code",[t._v("next-class")]),t._v(" "),n("span",[t._v(" prop.")])]),t._v(" "),n("div",{staticClass:"demo-spacing-0"},[n("b-pagination",{attrs:{"total-rows":t.rows,"first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},scopedSlots:t._u([{key:"prev-text",fn:function(){return[n("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[n("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,y={components:{BCardCode:c.a,BPagination:o.a,BCardText:s.a},data:function(){return{codeSize:'\n<template>\n  <div>\n    <div>\n      <h6>Small</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        size="sm"\n      />\n    </div>\n\n    <div class="mt-2">\n      <h6>Default</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n      />\n    </div>\n\n    <div class="mt-2 demo-spacing-0">\n      <h6>Large</h6>\n      <b-pagination\n        v-model="currentPage"\n        :total-rows="rows"\n        size="lg"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BPagination } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BPagination,\n  },\n  data: () => ({\n    currentPage: 1,\n    rows: 100,\n  }),\n}\n<\/script>\n',currentPage:1,rows:100}}},C=Object(u.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Button size"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeSize)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("Optionally change from the default button size by setting the")]),t._v(" "),n("code",[t._v("size")]),t._v(" "),n("span",[t._v("prop to either")]),t._v(" "),n("code",[t._v("'sm'")]),t._v(" "),n("span",[t._v("for smaller buttons or ")]),t._v(" "),n("code",[t._v("'lg'")]),t._v(" "),n("span",[t._v("for larger buttons.")])]),t._v(" "),n("div",[n("h6",[t._v("Small")]),t._v(" "),n("b-pagination",{attrs:{"total-rows":t.rows,size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),n("div",{staticClass:"mt-2"},[n("h6",[t._v("Default")]),t._v(" "),n("b-pagination",{attrs:{"total-rows":t.rows},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),t._v(" "),n("div",{staticClass:"mt-2 demo-spacing-0"},[n("h6",[t._v("Large")]),t._v(" "),n("b-pagination",{attrs:{"total-rows":t.rows,size:"lg"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)}),[],!1,null,null,null).exports,k={components:{BRow:a.a,BCol:r.a,PaginationAlignment:d,PaginationBasic:b,PaginationButtonContent:g,PaginationColor:h,PaginationGoto:x,PaginationPill:O,PaginationSeparated:j,PaginationSize:C}},B=Object(u.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{lg:"6"}},[e("pagination-basic")],1),this._v(" "),e("b-col",{attrs:{lg:"6"}},[e("pagination-separated")],1),this._v(" "),e("b-col",{attrs:{xl:"6"}},[e("pagination-color")],1),this._v(" "),e("b-col",{attrs:{xl:"6"}},[e("pagination-button-content")],1),this._v(" "),e("b-col",{attrs:{lg:"6"}},[e("pagination-goto")],1),this._v(" "),e("b-col",{attrs:{lg:"6"}},[e("pagination-size")],1),this._v(" "),e("b-col",{attrs:{lg:"6"}},[e("pagination-pill")],1),this._v(" "),e("b-col",{attrs:{lg:"6"}},[e("pagination-alignment")],1)],1)}),[],!1,null,null,null);e.default=B.exports},227:function(t,e,n){"use strict";n.d(e,"a",(function(){return B})),n.d(e,"c",(function(){return S})),n.d(e,"b",(function(){return G}));var a,r,o=n(8),i=n(2),s=n(12),c=n(6),l=n(7),u=n(42),d=n(50),p=n(13),b=n(1),v=n(55),f=n(69),g=n(149),m=n(66),h=n(63),_=n(31),x=n(28);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var j=Object(d.a)("checked",{defaultValue:null}),y=j.mixin,C=j.props,k=j.prop,B=j.event,S=Object(b.d)(Object(p.m)(O(O(O(O(O(O(O({},_.b),C),f.b),m.b),h.b),g.b),{},{ariaLabel:Object(b.c)(i.u),ariaLabelledby:Object(b.c)(i.u),button:Object(b.c)(i.g,!1),buttonVariant:Object(b.c)(i.u),inline:Object(b.c)(i.g,!1),value:Object(b.c)(i.a)})),"formRadioCheckControls"),G=Object(o.c)({mixins:[v.a,_.a,y,x.a,f.a,m.a,h.a,g.a],inheritAttrs:!1,props:S,data:function(){return{localChecked:this.isGroup?this.bvGroup[k]:this[k],hasFocus:!1}},computed:{computedLocalChecked:{get:function(){return this.isGroup?this.bvGroup.localChecked:this.localChecked},set:function(t){this.isGroup?this.bvGroup.localChecked=t:this.localChecked=t}},isChecked:function(){return Object(u.a)(this.value,this.computedLocalChecked)},isRadio:function(){return!0},isGroup:function(){return!!this.bvGroup},isBtnMode:function(){return this.isGroup?this.bvGroup.buttons:this.button},isPlain:function(){return!this.isBtnMode&&(this.isGroup?this.bvGroup.plain:this.plain)},isCustom:function(){return!this.isBtnMode&&!this.isPlain},isSwitch:function(){return!(this.isBtnMode||this.isRadio||this.isPlain)&&(this.isGroup?this.bvGroup.switches:this.switch)},isInline:function(){return this.isGroup?this.bvGroup.inline:this.inline},isDisabled:function(){return this.isGroup&&this.bvGroup.disabled||this.disabled},isRequired:function(){return this.computedName&&(this.isGroup?this.bvGroup.required:this.required)},computedName:function(){return(this.isGroup?this.bvGroup.groupName:this.name)||null},computedForm:function(){return(this.isGroup?this.bvGroup.form:this.form)||null},computedSize:function(){return(this.isGroup?this.bvGroup.size:this.size)||""},computedState:function(){return this.isGroup?this.bvGroup.computedState:Object(l.b)(this.state)?this.state:null},computedButtonVariant:function(){var t=this.buttonVariant;return t||(this.isGroup&&this.bvGroup.buttonVariant?this.bvGroup.buttonVariant:"secondary")},buttonClasses:function(){var t,e=this.computedSize;return["btn","btn-".concat(this.computedButtonVariant),(t={},w(t,"btn-".concat(e),e),w(t,"disabled",this.isDisabled),w(t,"active",this.isChecked),w(t,"focus",this.hasFocus),t)]},computedAttrs:function(){var t=this.isDisabled,e=this.isRequired;return O(O({},this.bvAttrs),{},{id:this.safeId(),type:this.isRadio?"radio":"checkbox",name:this.computedName,form:this.computedForm,disabled:t,required:e,"aria-required":e||null,"aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||null})}},watch:(a={},w(a,k,(function(){this["".concat(k,"Watcher")].apply(this,arguments)})),w(a,"computedLocalChecked",(function(){this.computedLocalCheckedWatcher.apply(this,arguments)})),a),methods:(r={},w(r,"".concat(k,"Watcher"),(function(t){Object(u.a)(t,this.computedLocalChecked)||(this.computedLocalChecked=t)})),w(r,"computedLocalCheckedWatcher",(function(t,e){Object(u.a)(t,e)||this.$emit(B,t)})),w(r,"handleChange",(function(t){var e=this,n=t.target.checked,a=this.value,r=n?a:null;this.computedLocalChecked=a,this.$nextTick((function(){e.$emit(s.d,r),e.isGroup&&e.bvGroup.$emit(s.d,r)}))})),w(r,"handleFocus",(function(t){t.target&&("focus"===t.type?this.hasFocus=!0:"blur"===t.type&&(this.hasFocus=!1))})),w(r,"focus",(function(){this.isDisabled||Object(c.d)(this.$refs.input)})),w(r,"blur",(function(){this.isDisabled||Object(c.c)(this.$refs.input)})),r),render:function(t){var e=this.isRadio,n=this.isBtnMode,a=this.isPlain,r=this.isCustom,o=this.isInline,i=this.isSwitch,s=this.computedSize,c=this.bvAttrs,l=this.normalizeSlot(),u=t("input",{class:[{"form-check-input":a,"custom-control-input":r,"position-static":a&&!l},n?"":this.stateClass],directives:[{name:"model",value:this.computedLocalChecked}],attrs:this.computedAttrs,domProps:{value:this.value,checked:this.isChecked},on:O({change:this.handleChange},n?{focus:this.handleFocus,blur:this.handleFocus}:{}),key:"input",ref:"input"});if(n){var d=t("label",{class:this.buttonClasses},[u,l]);return this.isGroup||(d=t("div",{class:["btn-group-toggle","d-inline-block"]},[d])),d}var p=t();return a&&!l||(p=t("label",{class:{"form-check-label":a,"custom-control-label":r},attrs:{for:this.safeId()}},l)),t("div",{class:[w({"form-check":a,"form-check-inline":a&&o,"custom-control":r,"custom-control-inline":r&&o,"custom-checkbox":r&&!e&&!i,"custom-switch":i,"custom-radio":r&&e},"b-custom-control-".concat(s),s&&!n),c.class],style:c.style},[u,p])}})},348:function(t,e,n){"use strict";n.d(e,"a",(function(){return P}));var a=n(48),r=n(5),o=n(2),i=n(43),s=n(23),c=n(67),l=n(35),u=n(7),d=n(205),p=n(13),b=n(1),v=n(27);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=["auto","start","end","center","baseline","stretch"],_=Object(d.a)((function(t,e,n){var a=t;if(!Object(u.p)(n)&&!1!==n)return e&&(a+="-".concat(e)),"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),Object(v.c)(a)):Object(v.c)(a)})),x=Object(p.c)(null),P={name:r.y,functional:!0,get props(){return delete this.props,this.props=(t=Object(c.b)().filter(l.a),e=t.reduce((function(t,e){return t[e]=Object(b.c)(o.i),t}),Object(p.c)(null)),n=t.reduce((function(t,e){return t[Object(b.g)(e,"offset")]=Object(b.c)(o.p),t}),Object(p.c)(null)),a=t.reduce((function(t,e){return t[Object(b.g)(e,"order")]=Object(b.c)(o.p),t}),Object(p.c)(null)),x=Object(p.a)(Object(p.c)(null),{col:Object(p.h)(e),offset:Object(p.h)(n),order:Object(p.h)(a)}),Object(b.d)(Object(p.m)(g(g(g(g({},e),n),a),{},{alignSelf:Object(b.c)(o.u,null,(function(t){return Object(s.a)(h,t)})),col:Object(b.c)(o.g,!1),cols:Object(b.c)(o.p),offset:Object(b.c)(o.p),order:Object(b.c)(o.p),tag:Object(b.c)(o.u,"div")})),r.y));var t,e,n,a},render:function(t,e){var n,r=e.props,o=e.data,s=e.children,c=r.cols,l=r.offset,u=r.order,d=r.alignSelf,p=[];for(var b in x)for(var v=x[b],f=0;f<v.length;f++){var g=_(b,v[f].replace(b,""),r[v[f]]);g&&p.push(g)}var h=p.some((function(t){return i.e.test(t)}));return p.push((m(n={col:r.col||!h&&!c},"col-".concat(c),c),m(n,"offset-".concat(l),l),m(n,"order-".concat(u),u),m(n,"align-self-".concat(d),d),n)),t(r.tag,Object(a.a)(o,{class:p}),s)}}},4:function(t,e,n){"use strict";var a=n(16);e.a=a.a},528:function(t,e,n){var a=n(1050);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(21)(a,r);a.locals&&(t.exports=a.locals)},538:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(8),r=n(5),o=n(1),i=n(227),s=Object(o.d)(i.c,r.T),c=Object(a.c)({name:r.T,mixins:[i.b],inject:{getBvGroup:{from:"getBvRadioGroup",default:function(){return function(){return null}}}},props:s,computed:{bvGroup:function(){return this.getBvGroup()}}})},541:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var a=n(8),r=n(48),o=n(5),i=n(2),s=n(20),c=n(70),l=n(1);function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=Object(l.d)({label:Object(l.c)(i.u),role:Object(l.c)(i.u,"status"),small:Object(l.c)(i.g,!1),tag:Object(l.c)(i.u,"span"),type:Object(l.c)(i.u,"border"),variant:Object(l.c)(i.u)},o.Qb),p=Object(a.c)({name:o.Qb,functional:!0,props:d,render:function(t,e){var n,a=e.props,o=e.data,i=e.slots,l=e.scopedSlots,d=i(),p=l||{},b=Object(c.b)(s.C,{},p,d)||a.label;return b&&(b=t("span",{staticClass:"sr-only"},b)),t(a.tag,Object(r.a)(o,{attrs:{role:b?a.role||"status":null,"aria-hidden":b?null:"true"},class:(n={},u(n,"spinner-".concat(a.type),a.type),u(n,"spinner-".concat(a.type,"-sm"),a.small),u(n,"text-".concat(a.variant),a.variant),n)}),[b||t()])}})},63:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var a=n(8),r=n(2),o=n(7),i=n(1),s=n(58),c=Object(i.d)({state:Object(i.c)(r.g,null)},"formState"),l=Object(a.c)({props:c,computed:{computedState:function(){return Object(o.b)(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null},computedAriaInvalid:function(){var t=Object(s.a)(this).ariaInvalid;return!0===t||"true"===t||""===t||!1===this.computedState?"true":t}}})},66:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var a=n(8),r=n(2),o=n(1),i=Object(o.d)({size:Object(o.c)(r.u)},"formControls"),s=Object(a.c)({props:i,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},69:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return c}));var a=n(8),r=n(2),o=n(6),i=n(1),s=Object(i.d)({autofocus:Object(i.c)(r.g,!1),disabled:Object(i.c)(r.g,!1),form:Object(i.c)(r.u),id:Object(i.c)(r.u),name:Object(i.c)(r.u),required:Object(i.c)(r.g,!1)},"formControls"),c=Object(a.c)({props:s,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(o.B)((function(){var e=t.$el;t.autofocus&&Object(o.u)(e)&&(Object(o.v)(e,"input, textarea, select")||(e=Object(o.C)("input, textarea, select",e)),Object(o.d)(e))}))}))}}})}}]);