(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1040:function(e,n,t){"use strict";t(532)},1041:function(e,n,t){(n=t(20)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=n},1553:function(e,n,t){"use strict";t.r(n);var a=t(1860),o=t(349),r=t(4),d=t(1861),s=t(542),i={components:{BCardCode:r.a,BCardText:d.a,BFormRadio:s.a},data:function(){return{codeBasic:'\n<template>\n   <div class="demo-inline-spacing">\n    <b-form-radio\n      v-model="Selected"\n      plain\n      name="some-radios3"\n      value="A"\n    >\n      Checked\n    </b-form-radio>\n    <b-form-radio\n      v-model="Selected"\n      plain\n      name="some-radios3"\n      value="B"\n    >\n      Unchecked\n    </b-form-radio>\n    <b-form-radio\n      v-model="Selected1"\n      plain\n      name="some-radios4"\n      value="c"\n      disabled\n    >\n      Checked Disabled\n    </b-form-radio>\n    <b-form-radio\n      v-model="Selected1"\n      plain\n      name="some-radios4"\n      value="d"\n      disabled\n    >\n      Unchecked Disabled\n    </b-form-radio>\n  </div>\n</template>\n\n<script>\nimport { BFormRadio } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormRadio,\n  },\n  data() {\n    return {\n      Selected: \'A\',\n      Selected1: \'c\',\n    }\n  },\n}\n<\/script>\n',Selected:"A",Selected1:"c"}}},l=t(0),c=Object(l.a)(i,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Basic Radio Buttons"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBasic)+"\n  ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[e._v("\n    You can have "),t("code",[e._v("<b-form-radio>")]),e._v(" and "),t("code",[e._v("<b-form-radio-group>")]),e._v(" render a browser native-styled radio input by setting the plain prop.\n  ")]),e._v(" "),t("div",{staticClass:"demo-inline-spacing"},[t("b-form-radio",{attrs:{plain:"",name:"some-radios3",value:"A"},model:{value:e.Selected,callback:function(n){e.Selected=n},expression:"Selected"}},[e._v("\n      Checked\n    ")]),e._v(" "),t("b-form-radio",{attrs:{plain:"",name:"some-radios3",value:"B"},model:{value:e.Selected,callback:function(n){e.Selected=n},expression:"Selected"}},[e._v("\n      Unchecked\n    ")]),e._v(" "),t("b-form-radio",{attrs:{plain:"",name:"some-radios4",value:"c",disabled:""},model:{value:e.Selected1,callback:function(n){e.Selected1=n},expression:"Selected1"}},[e._v("\n      Checked Disabled\n    ")]),e._v(" "),t("b-form-radio",{attrs:{plain:"",name:"some-radios4",value:"d",disabled:""},model:{value:e.Selected1,callback:function(n){e.Selected1=n},expression:"Selected1"}},[e._v("\n      Unchecked Disabled\n    ")])],1)],1)}),[],!1,null,null,null).exports,u={components:{BCardCode:r.a,BCardText:d.a,BFormRadio:s.a},data:function(){return{Selected:"A",Selected1:"c",codeCustom:'\n<template>\n   <div class="demo-inline-spacing">\n    <b-form-radio\n      v-model="Selected"\n      name="some-radios"\n      value="A"\n    >\n      Checked\n    </b-form-radio>\n    <b-form-radio\n      v-model="Selected"\n      name="some-radios"\n      value="B"\n    >\n      Unchecked\n    </b-form-radio>\n    <b-form-radio\n      v-model="Selected1"\n      name="some-radios2"\n      value="c"\n      disabled\n    >\n      Checked Disabled\n    </b-form-radio>\n    <b-form-radio\n      v-model="Selected1"\n      name="some-radios2"\n      value="d"\n      disabled\n    >\n      Unchecked Disabled\n    </b-form-radio>\n  </div>\n</template>\n\n<script>\nimport { BFormRadio } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormRadio,\n  },\n  data() {\n    return {\n      Selected: \'A\',\n      Selected1: \'c\',\n    }\n  },\n}\n<\/script>\n'}}},m=Object(l.a)(u,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Custom Radio Buttons"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeCustom)+"\n  ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[e._v("\n    For cross browser consistency, "),t("code",[e._v("<b-form-radio-group>")]),e._v(" and "),t("code",[e._v("<b-form-radio>")]),e._v(" uses Bootstrap's custom radio input to replace the browser default radio input.\n  ")]),e._v(" "),t("div",{staticClass:"demo-inline-spacing"},[t("b-form-radio",{attrs:{name:"some-radios",value:"A"},model:{value:e.Selected,callback:function(n){e.Selected=n},expression:"Selected"}},[e._v("\n      Checked\n    ")]),e._v(" "),t("b-form-radio",{attrs:{name:"some-radios",value:"B"},model:{value:e.Selected,callback:function(n){e.Selected=n},expression:"Selected"}},[e._v("\n      Unchecked\n    ")]),e._v(" "),t("b-form-radio",{attrs:{name:"some-radios2",value:"c",disabled:""},model:{value:e.Selected1,callback:function(n){e.Selected1=n},expression:"Selected1"}},[e._v("\n      Checked Disabled\n    ")]),e._v(" "),t("b-form-radio",{attrs:{name:"some-radios2",value:"d",disabled:""},model:{value:e.Selected1,callback:function(n){e.Selected1=n},expression:"Selected1"}},[e._v("\n      Unchecked Disabled\n    ")])],1)],1)}),[],!1,null,null,null).exports,v={components:{BCardCode:r.a,BFormRadio:s.a,BCardText:d.a},data:function(){return{Selected:"e",codeColor:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-form-radio\n      v-model="Selected"\n      name="some-radio9"\n      value="e"\n      class="custom-control-primary"\n    >\n      Primary (Default)\n    </b-form-radio>\n    <b-form-radio\n      v-model="Selected"\n      name="some-radio9"\n      value="ff"\n      class="custom-control-secondary"\n    >\n      Secondary\n    </b-form-radio>\n    <b-form-radio\n      v-model="Selected"\n      name="some-radio9"\n      value="g"\n      class="custom-control-success"\n    >\n      Success\n    </b-form-radio>\n    <b-form-radio\n      v-model="Selected"\n      name="some-radio9"\n      value="i"\n      class="custom-control-danger"\n    >\n      Danger\n    </b-form-radio>\n    <b-form-radio\n      v-model="Selected"\n      name="some-radio9"\n      value="h"\n      class="custom-control-warning"\n    >\n      Warning\n    </b-form-radio>\n    <b-form-radio\n      v-model="Selected"\n      name="some-radio9"\n      value="j"\n      class="custom-control-info"\n    >\n      Info\n    </b-form-radio>\n  </div>\n</template>\n\n<script>\nimport { BFormRadio } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormRadio,\n  },\n  data() {\n    return {\n      Selected: \'e\',\n    }\n  },\n}\n<\/script>\n'}}},b=Object(l.a)(v,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Color"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeColor)+"\n  ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[e._v("To change the color of the radio use the ")]),e._v(" "),t("code",[e._v(".custom-control-{value}")]),e._v(" "),t("span",[e._v(" for primary, secondary, success, danger, info, warning.")])]),e._v(" "),t("div",{staticClass:"demo-inline-spacing"},[t("b-form-radio",{staticClass:"custom-control-primary",attrs:{name:"some-radio9",value:"e"},model:{value:e.Selected,callback:function(n){e.Selected=n},expression:"Selected"}},[e._v("\n      Primary (Default)\n    ")]),e._v(" "),t("b-form-radio",{staticClass:"custom-control-secondary",attrs:{name:"some-radio9",value:"ff"},model:{value:e.Selected,callback:function(n){e.Selected=n},expression:"Selected"}},[e._v("\n      Secondary\n    ")]),e._v(" "),t("b-form-radio",{staticClass:"custom-control-success",attrs:{name:"some-radio9",value:"g"},model:{value:e.Selected,callback:function(n){e.Selected=n},expression:"Selected"}},[e._v("\n      Success\n    ")]),e._v(" "),t("b-form-radio",{staticClass:"custom-control-danger",attrs:{name:"some-radio9",value:"i"},model:{value:e.Selected,callback:function(n){e.Selected=n},expression:"Selected"}},[e._v("\n      Danger\n    ")]),e._v(" "),t("b-form-radio",{staticClass:"custom-control-warning",attrs:{name:"some-radio9",value:"h"},model:{value:e.Selected,callback:function(n){e.Selected=n},expression:"Selected"}},[e._v("\n      Warning\n    ")]),e._v(" "),t("b-form-radio",{staticClass:"custom-control-info",attrs:{name:"some-radio9",value:"j"},model:{value:e.Selected,callback:function(n){e.Selected=n},expression:"Selected"}},[e._v("\n      Info\n    ")])],1)],1)}),[],!1,null,null,null).exports,p=t(1878),f=t(404),_=t(923),g={components:{BCardCode:r.a,BCardText:d.a,BFormRadioGroup:p.a,BFormInvalidFeedback:f.a,BFormValidFeedback:_.a},data:function(){return{value:null,options:[{text:"First radio",value:"first"},{text:"Second radio",value:"second"},{text:"Third radio",value:"third"}],codeStates:"\n<template>\n  <div>\n    <b-form-radio-group\n      v-model=\"value\"\n      :options=\"options\"\n      :state=\"state\"\n      class=\"demo-inline-spacing\"\n      name=\"radio-validation\"\n    >\n      <b-form-invalid-feedback :state=\"state\">\n        Please select one\n      </b-form-invalid-feedback>\n      <b-form-valid-feedback :state=\"state\">\n        Thank you\n      </b-form-valid-feedback>\n    </b-form-radio-group>\n  </div>\n</template>\n\n<script>\nimport { BFormRadioGroup, BFormInvalidFeedback, BFormValidFeedback } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormRadioGroup,\n    BFormInvalidFeedback,\n    BFormValidFeedback,\n  },\n  data() {\n    return {\n      value: null,\n      options: [\n        { text: 'First radio', value: 'first' },\n        { text: 'Second radio', value: 'second' },\n        { text: 'Third radio', value: 'third' },\n      ],\n    }\n  },\n  computed: {\n    state() {\n      return Boolean(this.value)\n    },\n  },\n}\n<\/script>\n"}},computed:{state:function(){return Boolean(this.value)}}},h=Object(l.a)(g,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Contextual states"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeStates)+"\n  ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[e._v("Bootstrap includes validation styles for ")]),e._v(" "),t("code",[e._v("valid")]),e._v(" "),t("span",[e._v(" and ")]),e._v(" "),t("code",[e._v("invalid")]),e._v(" "),t("span",[e._v(" states on most form controls.")])]),e._v(" "),t("div",[t("b-form-radio-group",{staticClass:"demo-inline-spacing",attrs:{options:e.options,state:e.state,name:"radio-validation"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}},[t("b-form-invalid-feedback",{attrs:{state:e.state}},[e._v("\n        Please select one\n      ")]),e._v(" "),t("b-form-valid-feedback",{attrs:{state:e.state}},[e._v("\n        Thank you\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,x=t(1899),S={components:{BCardCode:r.a,BCardText:d.a,BFormRadioGroup:p.a,BFormGroup:x.a},data:function(){return{selected:"first",options:[{text:"First radio",value:"first"},{text:"Second radio",value:"second"},{text:"Third radio",value:"third"}],codeInlineStack:'\n<template>\n  <div>\n    <b-form-group label="Inline radios (default)">\n      <b-form-radio-group\n        v-model="selected"\n        :options="options"\n        class="demo-inline-spacing"\n        name="radio-inline"\n      />\n    </b-form-group>\n\n    <b-form-group label="Stacked radios">\n      <b-form-radio-group\n        v-model="selected"\n        :options="options"\n        name="radios-stacked"\n        stacked\n      />\n    </b-form-group>\n\n    <b-card-text class="mt-1 mb-0">\n      Selected: <strong>{{ selected }}</strong>\n    </b-card-text>\n  </div>\n</template>\n\n<script>\nimport { BFormRadioGroup, BFormGroup } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormRadioGroup,\n    BFormGroup,\n  },\n  data() {\n    return {\n      selected: \'first\',\n      options: [\n        { text: \'First radio\', value: \'first\' },\n        { text: \'Second radio\', value: \'second\' },\n        { text: \'Third radio\', value: \'third\' },\n      ],\n    }\n  },\n}\n<\/script>\n'}}},k=Object(l.a)(S,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Inline or stacked radios"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeInlineStack)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("By default ")]),e._v(" "),t("code",[e._v("<b-form-radio-group>")]),e._v(" "),t("span",[e._v(" generates inline radio inputs, while ")]),e._v(" "),t("code",[e._v("<b-form-radio>")]),e._v(" "),t("span",[e._v(" generates stacked radios. Set the prop ")]),e._v(" "),t("code",[e._v("stacked")]),e._v(" "),t("span",[e._v(" on ")]),e._v(" "),t("code",[e._v("<b-form-radio-group>")]),e._v(" "),t("span",[e._v(" to make the radios appear one over the other, or when using radios not in a group, set the ")]),e._v(" "),t("code",[e._v("inline")]),e._v(" "),t("span",[e._v(" prop on ")]),e._v(" "),t("code",[e._v("b-form-radio")]),e._v(" "),t("span",[e._v(" to true to render them inline.")])]),e._v(" "),t("div",[t("b-form-group",{attrs:{label:"Inline radios (default)"}},[t("b-form-radio-group",{staticClass:"demo-inline-spacing",attrs:{options:e.options,name:"radio-inline"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Stacked radios"}},[t("b-form-radio-group",{attrs:{options:e.options,name:"radios-stacked",stacked:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}})],1),e._v(" "),t("b-card-text",{staticClass:"mt-1 mb-0"},[e._v("\n      Selected: "),t("strong",[e._v(e._s(e.selected))])])],1)],1)}),[],!1,null,null,null).exports,C={components:{BCardCode:r.a,BCardText:d.a,BFormRadioGroup:p.a},data:function(){return{selected:"first",options:[{text:"Item 1",value:"first",disabled:!1},{text:"Item 2",value:"second",disabled:!1},{html:"<b>Item</b> 3",value:"third",disabled:!0},{text:"Item 4",value:"Item 4",disabled:!1},{text:"Item 5",value:"E",disabled:!1}],codeArray:"\n<template>\n  <div>\n     <b-form-radio-group\n      v-model=\"selected\"\n      :options=\"options\"\n      class=\"demo-inline-spacing mb-1\"\n      value-field=\"value\"\n      text-field=\"text\"\n      disabled-field=\"disabled\"\n    />\n\n    <b-card-text class=\"mt-1 mb-0\">\n      Selected: <strong>{{ selected }}</strong>\n    </b-card-text>\n  </div>\n</template>\n\n\n<script>\nimport { BFormRadioGroup } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormRadioGroup,\n  },\n  data() {\n    return {\n      selected: 'first',\n      options: [\n        { text: 'Item 1', value: 'first', disabled: false },\n        { text: 'Item 2', value: 'second', disabled: false },\n        { html: '<b>Item</b> 3', value: 'third', disabled: true },\n        { text: 'Item 4', value: 'Item 4', disabled: false },\n        { text: 'Item 5', value: 'E', disabled: false },\n      ],\n    }\n  },\n}\n<\/script>\n"}}},B=Object(l.a)(C,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Radio group options array"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeArray)+"\n  ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("code",[e._v("options")]),e._v(" "),t("span",[e._v(" can be an array of strings or objects. Available fields: ")]),e._v(" "),t("code",[e._v("value")]),e._v(" "),t("span",[e._v(" The selected value which will be set on ")]),e._v(" "),t("code",[e._v("v-model")]),e._v(" "),t("span",[e._v(", ")]),e._v(" "),t("code",[e._v("disabled")]),e._v(" "),t("span",[e._v(" Disables item for selection, ")]),e._v(" "),t("code",[e._v("text")]),e._v(" "),t("span",[e._v(" Display text, or ")]),e._v(" "),t("code",[e._v("html")]),e._v(" "),t("span",[e._v(" Display basic inline html")])]),e._v(" "),t("b-form-radio-group",{staticClass:"demo-inline-spacing mb-1",attrs:{options:e.options,"value-field":"value","text-field":"text","disabled-field":"disabled"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}}),e._v(" "),t("b-card-text",{staticClass:"mt-1 mb-0"},[e._v("\n    Selected: "),t("strong",[e._v(e._s(e.selected))])])],1)}),[],!1,null,null,null).exports,y={components:{BCardCode:r.a,BFormRadioGroup:p.a,BCardText:d.a},data:function(){return{selected:"A",options:[{item:"A",name:"Option A"},{item:"B",name:"Option B"},{item:"D",name:"Option C",notEnabled:!0},{item:{d:1},name:"Option D"}],codeFieldNames:"\n<template>\n  <div>\n    <b-form-radio-group\n      v-model=\"selected\"\n      :options=\"options\"\n      value-field=\"item\"\n      text-field=\"name\"\n      disabled-field=\"notEnabled\"\n      class=\"demo-inline-spacing\"\n    />\n\n    <b-card-text class=\"mt-1 mb-0\">\n      Selected: <strong>{{ selected }}</strong>\n    </b-card-text>\n  </div>\n</template>\n\n<script>\nimport { BFormRadioGroup } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormRadioGroup,\n  },\n  data() {\n    return {\n      selected: 'A',\n      options: [\n        { item: 'A', name: 'Option A' },\n        { item: 'B', name: 'Option B' },\n        { item: 'D', name: 'Option C', notEnabled: true },\n        { item: { d: 1 }, name: 'Option D' },\n      ],\n    }\n  },\n}\n<\/script>\n"}}},O=Object(l.a)(y,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Changing the option field names"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeFieldNames)+"\n  ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[e._v("If you want to customize the field property names (for example using ")]),e._v(" "),t("code",[e._v("name")]),e._v(" "),t("span",[e._v(" field for display ")]),e._v(" "),t("code",[e._v("text")]),e._v(" "),t("span",[e._v(") you can easily change them by setting the ")]),e._v(" "),t("code",[e._v("text-field, html-field, value-field,")]),e._v(" "),t("span",[e._v("and")]),e._v(" "),t("code",[e._v("disabled-field")]),e._v(" "),t("span",[e._v(" props to a string that contains the property name you would like to use:")])]),e._v(" "),t("b-form-radio-group",{staticClass:"demo-inline-spacing",attrs:{options:e.options,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}}),e._v(" "),t("b-card-text",{staticClass:"mt-1 mb-0"},[e._v("\n    Selected: "),t("strong",[e._v(e._s(e.selected))])])],1)}),[],!1,null,null,null).exports,j={components:{BRow:a.a,BCol:o.a,FormRadioBasic:c,FormRadioCustom:m,FormRadioColor:b,FormRadioContextualStates:h,FormRadioStackInline:k,FormRadioOptionsArray:B,FormRadioFieldNames:O}},F=Object(l.a)(j,(function(){var e=this.$createElement,n=this._self._c||e;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("form-radio-basic"),this._v(" "),n("form-radio-custom"),this._v(" "),n("form-radio-color"),this._v(" "),n("form-radio-contextual-states"),this._v(" "),n("form-radio-stack-inline"),this._v(" "),n("form-radio-options-array"),this._v(" "),n("form-radio-field-names")],1)],1)}),[],!1,null,null,null);n.default=F.exports},16:function(e,n,t){"use strict";t(70);var a=t(1862),o=t(342),r=t(344),d=t(343),s=t(1877),i=(t(176),t(190),t(96)),l=t.n(i),c={components:{BCard:a.a,BCardTitle:o.a,BCardSubTitle:r.a,BCardBody:d.a,BCollapse:s.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},u=(t(1040),t(0)),m=Object(u.a)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[t("div",{staticClass:"card-header"},[t("div",[t("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?t("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),t("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(n){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(n){e.code_visible=n},expression:"code_visible"}},[t("b-card-body",[t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:t("b-card-body",[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(n){e.code_visible=n},expression:"code_visible"}},[t("div",{staticClass:"p-1"}),e._v(" "),t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);n.a=m.exports},1860:function(e,n,t){"use strict";t.d(n,"a",(function(){return x}));var a=t(48),o=t(5),r=t(2),d=t(23),s=t(67),i=t(35),l=t(205),c=t(13),u=t(1),m=t(27);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=["start","end","center"],_=Object(l.a)((function(e,n){return(n=Object(m.h)(Object(m.g)(n)))?Object(m.c)(["row-cols",e,n].filter(i.a).join("-")):null})),g=Object(l.a)((function(e){return Object(m.c)(e.replace("cols",""))})),h=[],x={name:o.Ob,functional:!0,get props(){var e;return delete this.props,this.props=(e=Object(s.b)().reduce((function(e,n){return e[Object(u.g)(n,"cols")]=Object(u.c)(r.p),e}),Object(c.c)(null)),h=Object(c.h)(e),Object(u.d)(Object(c.m)(b(b({},e),{},{alignContent:Object(u.c)(r.u,null,(function(e){return Object(d.a)(Object(d.b)(f,"between","around","stretch"),e)})),alignH:Object(u.c)(r.u,null,(function(e){return Object(d.a)(Object(d.b)(f,"between","around"),e)})),alignV:Object(u.c)(r.u,null,(function(e){return Object(d.a)(Object(d.b)(f,"baseline","stretch"),e)})),noGutters:Object(u.c)(r.g,!1),tag:Object(u.c)(r.u,"div")})),o.Ob)),this.props},render:function(e,n){var t,o=n.props,r=n.data,d=n.children,s=o.alignV,i=o.alignH,l=o.alignContent,c=[];return h.forEach((function(e){var n=_(g(e),o[e]);n&&c.push(n)})),c.push((p(t={"no-gutters":o.noGutters},"align-items-".concat(s),s),p(t,"justify-content-".concat(i),i),p(t,"align-content-".concat(l),l),t)),e(o.tag,Object(a.a)(r,{staticClass:"row",class:c}),d)}}},1861:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t(8),o=t(48),r=t(5),d=t(2),s=t(1),i=Object(s.d)({textTag:Object(s.c)(d.u,"p")},r.u),l=Object(a.c)({name:r.u,functional:!0,props:i,render:function(e,n){var t=n.props,a=n.data,r=n.children;return e(t.textTag,Object(o.a)(a,{staticClass:"card-text"}),r)}})},4:function(e,n,t){"use strict";var a=t(16);n.a=a.a},532:function(e,n,t){var a=t(1041);"string"==typeof a&&(a=[[e.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(21)(a,o);a.locals&&(e.exports=a.locals)}}]);