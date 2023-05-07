(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{1053:function(e,n,t){"use strict";t(528)},1054:function(e,n,t){(n=t(19)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=n},1590:function(e,n,t){"use strict";t.r(n);var o=t(1900),a=t(350),c=t(4),r=t(536),s=t(1901),l={components:{BCardCode:c.a,BFormCheckbox:r.a,BCardText:s.a},data:function(){return{selected:["A","C"],codeBasic:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-form-checkbox\n      v-model="selected"\n      value="A"\n      plain\n    >\n      Checked\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="B"\n      plain\n    >\n      Unchecked\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="C"\n      plain\n      disabled\n    >\n      Checked disabled\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="D"\n      plain\n      disabled\n    >\n      Unchecked disabled\n    </b-form-checkbox>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormCheckbox,\n    BCardCode,\n  },\n data() {\n    return {\n      selected: [\'A\', \'C\']\n    }\n  },\n}\n<\/script>\n'}}},d=t(0),i=Object(d.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Basic Checkbox"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBasic)+"\n  ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[e._v("You can have ")]),e._v(" "),t("code",[e._v("<b-form-checkbox-group>")]),e._v(" "),t("span",[e._v(" or ")]),e._v(" "),t("code",[e._v("<b-form-checkbox>")]),e._v(" "),t("span",[e._v(" render a browser native checkbox input by setting the "),t("code",[e._v("plain")]),e._v(" prop.")])]),e._v(" "),t("div",{staticClass:"demo-inline-spacing"},[t("b-form-checkbox",{attrs:{value:"A",plain:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n      Checked\n    ")]),e._v(" "),t("b-form-checkbox",{attrs:{value:"B",plain:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n      Unchecked\n    ")]),e._v(" "),t("b-form-checkbox",{attrs:{value:"C",plain:"",disabled:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n      Checked disabled\n    ")]),e._v(" "),t("b-form-checkbox",{attrs:{value:"D",plain:"",disabled:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n      Unchecked disabled\n    ")])],1)],1)}),[],!1,null,null,null).exports,b={components:{BCardCode:c.a,BFormCheckbox:r.a,BCardText:s.a},data:function(){return{selected:["B","C"],codeCustom:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-form-checkbox\n      v-model="selected"\n      value="A"\n    >\n      Checked\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="B"\n    >\n      Unchecked\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="C"\n      disabled\n    >\n      Checked disabled\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="D"\n      disabled\n    >\n      Unchecked disabled\n    </b-form-checkbox>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormCheckbox,\n  },\n   data() {\n    return {\n      selected: [\'B\', \'C\'],\n    }\n  },\n}\n<\/script>\n'}}},p=Object(d.a)(b,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Custom Checkboxes"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeCustom)+"\n  ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[e._v("For cross browser consistency, ")]),e._v(" "),t("code",[e._v("<b-form-checkbox-group>")]),e._v(" "),t("span",[e._v(" and ")]),e._v(" "),t("code",[e._v("<b-form-checkbox>")]),e._v(" "),t("span",[e._v("\n      use Bootstrap's custom checkbox input to replace the browser default checkbox input.\n    ")])]),e._v(" "),t("div",{staticClass:"demo-inline-spacing"},[t("b-form-checkbox",{attrs:{value:"A"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n      Checked\n    ")]),e._v(" "),t("b-form-checkbox",{attrs:{value:"B"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n      Unchecked\n    ")]),e._v(" "),t("b-form-checkbox",{attrs:{value:"C",disabled:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n      Checked disabled\n    ")]),e._v(" "),t("b-form-checkbox",{attrs:{value:"D",disabled:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n      Unchecked disabled\n    ")])],1)],1)}),[],!1,null,null,null).exports,u={components:{BCardCode:c.a,BFormCheckbox:r.a,BCardText:s.a},data:function(){return{selected:["A","C","CC","B","D","E","F","G"],codeColor:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-form-checkbox\n      v-model="selected"\n      value="A"\n      class="custom-control-primary"\n    >\n      Primary\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="CC"\n      class="custom-control-secondary"\n    >\n      Secondary\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="C"\n      class="custom-control-success"\n    >\n      Success\n    </b-form-checkbox>\n\n    <b-form-checkbox\n      v-model="selected"\n      value="F"\n      class="custom-control-danger"\n    >\n      Danger\n    </b-form-checkbox>\n\n    <b-form-checkbox\n      v-model="selected"\n      value="D"\n      class="custom-control-warning"\n    >\n      Warning\n    </b-form-checkbox>\n    <b-form-checkbox\n      v-model="selected"\n      value="G"\n      class="custom-control-info"\n    >\n      Info\n    </b-form-checkbox>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormCheckbox,\n  },\n  data() {\n    return {\n      selected: [\'A\', \'C\', \'CC\', \'B\', \'D\', \'E\', \'F\', \'G\'],\n    }\n  },\n}\n<\/script>\n'}}},m=Object(d.a)(u,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Color"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeColor)+"\n  ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[e._v("To change the color of the checkBox use the ")]),e._v(" "),t("code",[e._v(".custom-control-{value}")]),e._v(" "),t("span",[e._v(" for primary, secondary, success, danger, info, warning.")])]),e._v(" "),t("div",{staticClass:"demo-inline-spacing"},[t("b-form-checkbox",{staticClass:"custom-control-primary",attrs:{value:"A"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n      Primary\n    ")]),e._v(" "),t("b-form-checkbox",{staticClass:"custom-control-secondary",attrs:{value:"CC"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n      Secondary\n    ")]),e._v(" "),t("b-form-checkbox",{staticClass:"custom-control-success",attrs:{value:"C"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n      Success\n    ")]),e._v(" "),t("b-form-checkbox",{staticClass:"custom-control-danger",attrs:{value:"F"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n      Danger\n    ")]),e._v(" "),t("b-form-checkbox",{staticClass:"custom-control-warning",attrs:{value:"D"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n      Warning\n    ")]),e._v(" "),t("b-form-checkbox",{staticClass:"custom-control-info",attrs:{value:"G"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n      Info\n    ")])],1)],1)}),[],!1,null,null,null).exports,v=t(1922),h=t(405),f=t(933),x={components:{BFormCheckboxGroup:v.a,BFormInvalidFeedback:h.a,BFormValidFeedback:f.a,BCardText:s.a,BCardCode:c.a},data:function(){return{value:[],options:[{text:"First Check",value:"first"},{text:"Second Check",value:"second"},{text:"Third Check",value:"third"}],codeStates:"\n<template>\n  <div>\n    <b-form-checkbox-group\n      v-model=\"value\"\n      :options=\"options\"\n      :state=\"state\"\n      class=\"demo-inline-spacing\"\n      name=\"checkbox-validation\"\n    >\n      <b-form-invalid-feedback :state=\"state\">\n        Please select two\n      </b-form-invalid-feedback>\n      <b-form-valid-feedback :state=\"state\">\n        Thank you\n      </b-form-valid-feedback>\n    </b-form-checkbox-group>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckboxGroup, BFormInvalidFeedback, BFormValidFeedback } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormCheckboxGroup,\n    BFormInvalidFeedback,\n    BFormValidFeedback,\n    BCardCode,\n  },\n  data() {\n    return {\n      value: [],\n      options: [\n        { text: 'First Check', value: 'first' },\n        { text: 'Second Check', value: 'second' },\n        { text: 'Third Check', value: 'third' },\n      ],\n    }\n  },\n  computed: {\n    state() {\n      return this.value.length === 2\n    },\n  },\n}\n<\/script>\n"}},computed:{state:function(){return 2===this.value.length}}},k=Object(d.a)(x,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Contextual state and validation"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeStates)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Bootstrap includes validation styles for ")]),e._v(" "),t("code",[e._v("valid")]),e._v(" "),t("span",[e._v(" and ")]),e._v(" "),t("code",[e._v("invalid")]),e._v(" "),t("span",[e._v(" states on most form controls.")])]),e._v(" "),t("div",[t("b-form-checkbox-group",{staticClass:"demo-inline-spacing",attrs:{options:e.options,state:e.state,name:"checkbox-validation"},model:{value:e.value,callback:function(n){e.value=n},expression:"value"}},[t("b-form-invalid-feedback",{attrs:{state:e.state}},[e._v("\n        Please select two\n      ")]),e._v(" "),t("b-form-valid-feedback",{attrs:{state:e.state}},[e._v("\n        Thank you\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,_=t(1940),g={components:{BFormCheckboxGroup:v.a,BCardCode:c.a,BFormCheckbox:r.a,BFormGroup:_.a,BCardText:s.a},data:function(){return{selected:[],options:[{text:"Orange",value:"orange"},{text:"Apple",value:"apple"},{text:"Pineapple",value:"pineapple"},{text:"Grape",value:"grape"}],codemultipleChoice:'\n<template>\n  <div>\n     \x3c!-- custom checkbox --\x3e\n    <b-form-group label="Using options array:">\n      <b-form-checkbox-group\n        id="checkbox-group-1"\n        v-model="selected"\n        :options="options"\n        name="flavour-1"\n        class="demo-inline-spacing"\n      />\n    </b-form-group>\n\n    \x3c!-- using sub-components --\x3e\n    <b-form-group label="Using sub-components:">\n      <b-form-checkbox-group\n        id="checkbox-group-2"\n        v-model="selected"\n        name="flavour-2"\n        class="demo-inline-spacing"\n      >\n        <b-form-checkbox value="orange">\n          Orange\n        </b-form-checkbox>\n        <b-form-checkbox value="apple">\n          Apple\n        </b-form-checkbox>\n        <b-form-checkbox value="pineapple">\n          Pineapple\n        </b-form-checkbox>\n        <b-form-checkbox value="grape">\n          Grape\n        </b-form-checkbox>\n      </b-form-checkbox-group>\n    </b-form-group>\n\n    <b-card-text class="mb-0">\n      Selected: <strong>{{ selected }}</strong>\n    </b-card-text>\n  </div>\n</template>\n\n<script>\nimport {BFormGroup, BFormCheckboxGroup, BCardText, BFormCheckbox} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormCheckbox,\n    BFormCheckboxGroup,\n    BCardCode,\n    BFormGroup,\n  },\n  data() {\n    return {\n      selected: [],\n      options: [\n        { text: \'Orange\', value: \'orange\' },\n        { text: \'Apple\', value: \'apple\' },\n        { text: \'Pineapple\', value: \'pineapple\' },\n        { text: \'Grape\', value: \'grape\' },\n      ],\n    }\n  },\n}\n<\/script>\n'}}},C=Object(d.a)(g,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Multiple choice checkboxes"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codemultipleChoice)+"\n  ")]},proxy:!0}])},[t("b-form-group",{attrs:{label:"Using options array:"}},[t("b-form-checkbox-group",{staticClass:"demo-inline-spacing",attrs:{id:"checkbox-group-1",options:e.options,name:"flavour-1"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Using sub-components:"}},[t("b-form-checkbox-group",{staticClass:"demo-inline-spacing",attrs:{id:"checkbox-group-2",name:"flavour-2"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[t("b-form-checkbox",{attrs:{value:"orange"}},[e._v("\n        Orange\n      ")]),e._v(" "),t("b-form-checkbox",{attrs:{value:"apple"}},[e._v("\n        Apple\n      ")]),e._v(" "),t("b-form-checkbox",{attrs:{value:"pineapple"}},[e._v("\n        Pineapple\n      ")]),e._v(" "),t("b-form-checkbox",{attrs:{value:"grape"}},[e._v("\n        Grape\n      ")])],1)],1),e._v(" "),t("b-card-text",{staticClass:"mb-0"},[e._v("\n    Selected: "),t("strong",[e._v(e._s(e.selected))])])],1)}),[],!1,null,null,null).exports,B={components:{BFormCheckboxGroup:v.a,BCardText:s.a,BCardCode:c.a},data:function(){return{codeChangeNames:"\n<template>\n  <b-form-checkbox-group\n    v-model=\"selected\"\n    :options=\"options\"\n    value-field=\"item\"\n    text-field=\"name\"\n    disabled-field=\"notEnabled\"\n    class=\"demo-inline-spacing\"\n  />\n</template>\n\n<script>\nimport { BFormCheckboxGroup } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormCheckboxGroup,\n    BCardCode,\n  },\n  data() {\n    return {\n      selected: [],\n      options: [\n        { item: 'A', name: 'Option A' },\n        { item: 'B', name: 'Option B' },\n        { item: 'D', name: 'Option C', notEnabled: true },\n        { item: { d: 1 }, name: 'Option D' },\n      ],\n    }\n  },\n}\n<\/script>\n",selected:[],options:[{item:"A",name:"Option A"},{item:"B",name:"Option B"},{item:"D",name:"Option C",notEnabled:!0},{item:{d:1},name:"Option D"}]}}},F=Object(d.a)(B,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Changing the option field names"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeChangeNames)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("If you want to customize the field property names (for example using ")]),e._v(" "),t("code",[e._v("name")]),e._v(" "),t("span",[e._v(" field for display ")]),e._v(" "),t("code",[e._v("text")]),e._v(" "),t("span",[e._v(" ) you can easily change them by setting the ")]),e._v(" "),t("code",[e._v("text-field")]),e._v(" "),t("span",[e._v(" , ")]),e._v(" "),t("code",[e._v("html-field")]),e._v(" "),t("span",[e._v(" , ")]),e._v(" "),t("code",[e._v("value-field")]),e._v(" "),t("span",[e._v(" , and ")]),e._v(" "),t("code",[e._v("disabled-field")]),e._v(" "),t("span",[e._v(" props to a string that contains the property name you would like to use:")])]),e._v(" "),t("b-form-checkbox-group",{staticClass:"demo-inline-spacing",attrs:{options:e.options,"value-field":"item","text-field":"name","disabled-field":"notEnabled"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}}),e._v(" "),t("b-card-text",{staticClass:"mt-1 mb-0"},[e._v("\n    Selected: "),t("strong",[e._v(e._s(e.selected))])])],1)}),[],!1,null,null,null).exports,y={components:{BFormCheckboxGroup:v.a,BFormCheckbox:r.a,BFormGroup:_.a,BCardCode:c.a,BCardText:s.a},data:function(){return{codeInlineStacked:'\n<template>\n  <div>\n    <b-form-group label="Form-checkbox-group inline checkboxes (default)">\n      <b-form-checkbox-group\n        v-model="selected"\n        :options="options"\n        name="flavour-1a"\n        class="demo-inline-spacing"\n      />\n    </b-form-group>\n\n    <b-form-group label="Form-checkbox-group stacked checkboxes">\n      <b-form-checkbox-group\n        v-model="selected"\n        :options="options"\n        name="flavour-2a"\n        class="demo-inline-spacing"\n        stacked\n      />\n    </b-form-group>\n\n    <b-form-group label="Individual stacked checkboxes (default)">\n      <b-form-checkbox\n        v-for="option in options"\n        :key="option.value"\n        v-model="selected"\n        :value="option.value"\n        name="flavour-3a"\n      >\n        {{ option.text }}\n      </b-form-checkbox>\n    </b-form-group>\n\n    <b-form-group label="Individual inline checkboxes">\n      <b-form-checkbox\n        v-for="option in options"\n        :key="option.value"\n        v-model="selected"\n        :value="option.value"\n        name="flavour-4a"\n        inline\n      >\n        {{ option.text }}\n      </b-form-checkbox>\n    </b-form-group>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckboxGroup, BFormCheckbox, BFormGroup } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormCheckboxGroup,\n    BFormCheckbox,\n    BFormGroup,\n    BCardCode,\n  },\n  data() {\n    return {\n      selected: [],\n      options: [\n        { text: \'Orange\', value: \'orange\' },\n        { text: \'Apple\', value: \'apple\' },\n        { text: \'Pineapple\', value: \'pineapple\' },\n        { text: \'Grape\', value: \'grape\' },\n      ],\n    }\n  },\n}\n<\/script>\n',selected:[],options:[{text:"Orange",value:"orange"},{text:"Apple",value:"apple"},{text:"Pineapple",value:"pineapple"},{text:"Grape",value:"grape"}]}}},I=Object(d.a)(y,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Inline and stacked checkboxes"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeInlineStacked)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Set the prop ")]),e._v(" "),t("code",[e._v("stacked")]),e._v(" "),t("span",[e._v(" on ")]),e._v(" "),t("code",[e._v("<b-form-checkbox-group>")]),e._v(" "),t("span",[e._v(" to place each form control one over the other, or if using individual checkboxes not inside a ")]),e._v(" "),t("code",[e._v("<b-form-checkbox-group>")]),e._v(" "),t("span",[e._v(", set the ")]),e._v(" "),t("code",[e._v("inline")]),e._v(" "),t("span",[e._v(" prop on ")]),e._v(" "),t("code",[e._v("<b-form-checkbox>")]),e._v(" "),t("span",[e._v(".")])]),e._v(" "),t("div",[t("b-form-group",{attrs:{label:"Form-checkbox-group inline checkboxes (default)"}},[t("b-form-checkbox-group",{staticClass:"demo-inline-spacing",attrs:{options:e.options,name:"flavour-1a"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Form-checkbox-group stacked checkboxes"}},[t("b-form-checkbox-group",{staticClass:"demo-inline-spacing",attrs:{options:e.options,name:"flavour-2a",stacked:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}})],1),e._v(" "),t("b-form-group",{attrs:{label:"Individual stacked checkboxes (default)"}},e._l(e.options,(function(n){return t("b-form-checkbox",{key:n.value,attrs:{value:n.value,name:"flavour-3a"},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n        "+e._s(n.text)+"\n      ")])})),1),e._v(" "),t("b-form-group",{attrs:{label:"Individual inline checkboxes"}},e._l(e.options,(function(n){return t("b-form-checkbox",{key:n.value,attrs:{value:n.value,name:"flavour-4a",inline:""},model:{value:e.selected,callback:function(n){e.selected=n},expression:"selected"}},[e._v("\n        "+e._s(n.text)+"\n      ")])})),1)],1)],1)}),[],!1,null,null,null).exports,S=t(93),w=t(11),G={components:{BFormCheckbox:r.a,BCardCode:c.a,BButton:S.a,BCardText:s.a},directives:{Ripple:w.a},data:function(){return{checked:!0,indeterminate:!0,codeIndeterminate:'\n<template>\n  <div>\n    \x3c!-- checkbox --\x3e\n    <b-form-checkbox\n      v-model="checked"\n      :indeterminate.sync="indeterminate"\n    >\n      Click me to see what happens\n    </b-form-checkbox>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      class="mt-1"\n      variant="outline-primary"\n      @click="toggleIndeterminate"\n    >\n      Toggle Indeterminate State\n    </b-button>\n\n    <div class="mt-1">\n      Checked: <strong>{{ checked }}</strong><br>\n      Indeterminate: <strong>{{ indeterminate }}</strong>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox, BButton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormCheckbox,\n    BCardCode,\n    BButton,\n  },\n   directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      checked: true,\n      indeterminate: true,\n    }\n  },\n  methods: {\n    toggleIndeterminate() {\n      this.indeterminate = !this.indeterminate\n    },\n  },\n}\n<\/script>\n'}},methods:{toggleIndeterminate:function(){this.indeterminate=!this.indeterminate}}},O=Object(d.a)(G,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card-code",{attrs:{title:"Indeterminate (tri-state) support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeIndeterminate)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("code",[e._v("<b-form-checkbox>")]),e._v(" "),t("span",[e._v(" supports setting this visual indeterminate state via the ")]),e._v(" "),t("code",[e._v("indeterminate")]),e._v(" "),t("span",[e._v(" prop (defaults to ")]),e._v(" "),t("code",[e._v("false")]),e._v(" "),t("span",[e._v(" ). Clicking the checkbox will clear its indeterminate state. The ")]),e._v(" "),t("code",[e._v("indeterminate")]),e._v(" "),t("span",[e._v(" prop can be synced to the checkbox's state by v-binding the ")]),e._v(" "),t("code",[e._v("indeterminate")]),e._v(" "),t("span",[e._v(" prop with the ")]),e._v(" "),t("code",[e._v(".sync")]),e._v(" "),t("span",[e._v(" modifier.")])]),e._v(" "),t("b-form-checkbox",{attrs:{indeterminate:e.indeterminate},on:{"update:indeterminate":function(n){e.indeterminate=n}},model:{value:e.checked,callback:function(n){e.checked=n},expression:"checked"}},[e._v("\n    Click me to see what happens\n  ")]),e._v(" "),t("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-1",attrs:{variant:"outline-primary"},on:{click:e.toggleIndeterminate}},[e._v("\n    Toggle Indeterminate State\n  ")]),e._v(" "),t("div",{staticClass:"mt-1"},[e._v("\n    Checked: "),t("strong",[e._v(e._s(e.checked))]),t("br"),e._v("\n    Indeterminate: "),t("strong",[e._v(e._s(e.indeterminate))])])],1)}),[],!1,null,null,null).exports,A={components:{BRow:o.a,BCol:a.a,FormCheckboxBasic:i,FormCheckboxCustom:p,FormCheckboxColor:m,FormCheckboxStates:k,FormCheckboxMultiple:C,FormCheckboxChangeNames:F,FormCheckboxStackedInline:I,FormCheckboxIndeterminate:O}},D=Object(d.a)(A,(function(){var e=this.$createElement,n=this._self._c||e;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("form-checkbox-basic"),this._v(" "),n("form-checkbox-custom"),this._v(" "),n("form-checkbox-color"),this._v(" "),n("form-checkbox-multiple"),this._v(" "),n("form-checkbox-change-names"),this._v(" "),n("form-checkbox-stacked-inline"),this._v(" "),n("form-checkbox-states"),this._v(" "),n("form-checkbox-indeterminate")],1)],1)}),[],!1,null,null,null);n.default=D.exports},16:function(e,n,t){"use strict";t(76);var o=t(1902),a=t(343),c=t(345),r=t(344),s=t(1918),l=(t(177),t(191),t(101)),d=t.n(l),i={components:{BCard:o.a,BCardTitle:a.a,BCardSubTitle:c.a,BCardBody:r.a,BCollapse:s.a,Prism:d.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},b=(t(1053),t(0)),p=Object(b.a)(i,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[t("div",{staticClass:"card-header"},[t("div",[t("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?t("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),t("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(n){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(n){e.code_visible=n},expression:"code_visible"}},[t("b-card-body",[t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:t("b-card-body",[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(n){e.code_visible=n},expression:"code_visible"}},[t("div",{staticClass:"p-1"}),e._v(" "),t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);n.a=p.exports},4:function(e,n,t){"use strict";var o=t(16);n.a=o.a},528:function(e,n,t){var o=t(1054);"string"==typeof o&&(o=[[e.i,o,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};t(21)(o,a);o.locals&&(e.exports=o.locals)}}]);