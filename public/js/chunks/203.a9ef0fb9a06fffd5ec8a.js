(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1099:function(n,t,e){"use strict";e(571)},1100:function(n,t,e){(t=e(21)(!1)).push([n.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),n.exports=t},1627:function(n,t,e){"use strict";e.r(t);var a=e(1966),o=e(394),r=e(4),l=e(491),s=e(1967),i=e(1974),c={components:{BFormSpinbutton:l.a,BCardCode:r.a,BCardText:s.a,BAlert:i.a},data:function(){return{value:50,codeBasic:'\n<template>\n  <div>\n    <label for="demo-sb">Spin Button</label>\n    <b-form-spinbutton\n      id="demo-sb"\n      v-model="value"\n      min="1"\n      max="100"\n    />\n    <p class="mt-1">\n      Value: {{ value }}\n    </p>\n    <b-alert\n      class="mb-0"\n      show\n      variant="success"\n    >\n      <div class="alert-body">\n        <span>The </span>\n        <code>ArrowUp</code>\n        <span> and </span>\n        <code>ArrowDown</code>\n        <span> keys can be used to increment or decrement the value.</span>\n      </div>\n    </b-alert>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton, BAlert } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BAlert,\n  },\n  data: () => ({\n    value: 50,\n    codeBasic,\n  }),\n}\n<\/script>\n'}}},d=e(0),u=Object(d.a)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Basic Spinbutton"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeBasic)+"\n  ")]},proxy:!0}])},[e("b-card-text",[n._v("\n    Spin buttons allow for incrementing or decrementing a numerical value within a range of a minimum and maximum number, with optional step value.\n  ")]),n._v(" "),e("div",{staticClass:"mt-2"},[e("label",{attrs:{for:"demo-sb"}},[n._v("Spin Button")]),n._v(" "),e("b-form-spinbutton",{attrs:{id:"demo-sb",min:"1",max:"100"},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}}),n._v(" "),e("b-card-text",{staticClass:"mt-1"},[n._v("\n      Value: "+n._s(n.value)+"\n    ")]),n._v(" "),e("b-alert",{staticClass:"mb-0",attrs:{show:"",variant:"success"}},[e("div",{staticClass:"alert-body"},[n._v("\n        The ArrowUp and ArrowDown keys can be used to increment or decrement the value.\n      ")])])],1)],1)}),[],!1,null,null,null).exports,p={components:{BFormSpinbutton:l.a,BCardCode:r.a,BCardText:s.a},data:function(){return{value:5,codeMinMax:'\n<template>\n  <div>\n    <label for="sb-maxmin">Spin button with min 0 and max 10</label>\n    <b-form-spinbutton\n      id="sb-maxmin"\n      v-model="value"\n      min="0"\n      max="10"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 50,\n  }),\n}\n<\/script>\n'}}},b=Object(d.a)(p,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Min and Max"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeMinMax)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("Spinbuttons have a default range from")]),n._v(" "),e("code",[n._v("1")]),n._v(" "),e("span",[n._v(" to")]),n._v(" "),e("code",[n._v("100")]),n._v(", which can be changed by setting the\n    "),e("code",[n._v("min")]),n._v(" "),e("span",[n._v(" and ")]),n._v(" "),e("code",[n._v("max")]),n._v(" "),e("span",[n._v(" props.")])]),n._v(" "),e("label",{attrs:{for:"sb-maxmin"}},[n._v("Spin button with min 0 and max 10")]),n._v(" "),e("b-form-spinbutton",{attrs:{id:"sb-maxmin",min:"0",max:"10"},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1)}),[],!1,null,null,null).exports,v={components:{BFormSpinbutton:l.a,BCardCode:r.a,BCardText:s.a},data:function(){return{value1:50,codeStep:'\n<template>\n  <div>\n    <label for="sb-step">Spin button with step of 0.25</label>\n    <b-form-spinbutton\n      id="sb-step"\n      v-model="value1"\n      step="0.25"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value1: 50,\n  }),\n}\n<\/script>\n'}}},m=Object(d.a)(v,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Step"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeStep)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("The default step increment is ")]),n._v(" "),e("code",[n._v("1")]),n._v(" "),e("span",[n._v(", and can be changed via the ")]),n._v(" "),e("code",[n._v("step")]),n._v(" "),e("span",[n._v("prop (decimal values allowed).")]),n._v(" "),e("span",[n._v("When ")]),n._v(" "),e("code",[n._v("step")]),n._v(" "),e("span",[n._v(" is set, the value will always be a multiple of the step size plus the minimum value.")])]),n._v(" "),e("label",{attrs:{for:"sb-step"}},[n._v("Spin button with step of 0.25")]),n._v(" "),e("b-form-spinbutton",{attrs:{id:"sb-step",step:"0.25"},model:{value:n.value1,callback:function(t){n.value1=t},expression:"value1"}})],1)}),[],!1,null,null,null).exports,f={components:{BFormSpinbutton:l.a,BCardCode:r.a,BCardText:s.a},data:function(){return{codeWrap:'\n<template>\n  <div>\n    <label for="sb-wrap">Wrapping value spin button</label>\n    <b-form-spinbutton\n      id="sb-wrap"\n      wrap\n      min="1"\n      max="25"\n      placeholder="--"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n}\n<\/script>\n'}}},_=Object(d.a)(f,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Number wrapping"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeWrap)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("To allow the spin button to wrap from max to min when incrementing (or min to max when decrementing), set the\n    ")]),n._v(" "),e("code",[n._v("wrap")]),n._v(" "),e("span",[n._v(" prop to ")]),n._v(" "),e("code",[n._v("true")]),n._v(" "),e("span",[n._v(".")])]),n._v(" "),e("label",{attrs:{for:"sb-wrap"}},[n._v("Wrapping value spin button")]),n._v(" "),e("b-form-spinbutton",{attrs:{id:"sb-wrap",wrap:"",min:"1",max:"25",placeholder:"--"}})],1)}),[],!1,null,null,null).exports,h={components:{BFormSpinbutton:l.a,BCardCode:r.a,BCardText:s.a},data:function(){return{codeSize:'\n<template>\n  <div>\n    <div>\n      <label for="sb-small">Spin button - Small size</label>\n      <b-form-spinbutton\n        id="sb-small"\n        size="sm"\n        placeholder="--"\n        class="mb-1"\n      />\n\n      <label for="sb-default">Spin button - Default size</label>\n      <b-form-spinbutton\n        id="sb-default"\n        placeholder="--"\n        class="mb-1"\n      />\n\n      <label for="sb-large">Spin button - Large size</label>\n      <b-form-spinbutton\n        id="sb-large"\n        size="lg"\n        placeholder="--"\n        class="mb-1"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n}\n<\/script>\n'}}},x=Object(d.a)(h,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Size"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeSize)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("As with other form controls, ")]),n._v(" "),e("code",[n._v("<b-form-spinbutton>")]),n._v(" "),e("span",[n._v(" supports small and large sizing via setting the ")]),n._v(" "),e("code",[n._v("size")]),n._v(" "),e("span",[n._v(" prop to either ")]),n._v(" "),e("code",[n._v("'sm'")]),n._v(" "),e("span",[n._v(" or ")]),n._v(" "),e("code",[n._v("'lg'")]),n._v(" "),e("span",[n._v(", respectively.")])]),n._v(" "),e("div",[e("label",{attrs:{for:"sb-small"}},[n._v("Spin button - Small size")]),n._v(" "),e("b-form-spinbutton",{staticClass:"mb-1",attrs:{id:"sb-small",size:"sm",placeholder:"--"}}),n._v(" "),e("label",{attrs:{for:"sb-default"}},[n._v("Spin button - Default size")]),n._v(" "),e("b-form-spinbutton",{staticClass:"mb-1",attrs:{id:"sb-default",placeholder:"--"}}),n._v(" "),e("label",{attrs:{for:"sb-large"}},[n._v("Spin button - Large size")]),n._v(" "),e("b-form-spinbutton",{staticClass:"mb-1",attrs:{id:"sb-large",size:"lg",placeholder:"--"}})],1)],1)}),[],!1,null,null,null).exports,y={components:{BFormSpinbutton:l.a,BCardText:s.a,BCardCode:r.a},data:function(){return{value:50,codeInline:'\n<template>\n  <div>\n    <label\n      for="sb-inline"\n      class="mr-1"\n    >Inline spin button</label>\n    <b-form-spinbutton\n      id="sb-inline"\n      v-model="value"\n      inline\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 50,\n  }),\n}\n<\/script>\n'}}},S=Object(d.a)(y,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Inline"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeInline)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("The spin button will automatically adjust it's width to fit the displayed value. Use the prop ")]),n._v(" "),e("code",[n._v("inline")])]),n._v(" "),e("div",[e("label",{staticClass:"mr-1",attrs:{for:"sb-inline"}},[n._v("Inline spin button")]),n._v(" "),e("b-form-spinbutton",{attrs:{id:"sb-inline",inline:""},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1)],1)}),[],!1,null,null,null).exports,B={components:{BFormSpinbutton:l.a,BCardCode:r.a,BCardText:s.a},data:function(){return{value:50,codeVertical:'\n<template>\n  <div>\n    <label for="sb-vertical">Vertical spin button</label><br>\n    <b-form-spinbutton\n      id="sb-vertical"\n      v-model="value"\n      vertical\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 50,\n  }),\n}\n<\/script>\n'}}},g=Object(d.a)(B,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Vertical"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeVertical)+"\n  ")]},proxy:!0}])},[e("b-card-text",[n._v("Spinbuttons can be oriented in vertical mode:")]),n._v(" "),e("label",{attrs:{for:"sb-vertical"}},[n._v("Vertical spin button")]),e("br"),n._v(" "),e("b-form-spinbutton",{attrs:{id:"sb-vertical",vertical:""},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1)}),[],!1,null,null,null).exports,C=e(1972),w={components:{BFormSpinbutton:l.a,BCardCode:r.a,BFormSelect:C.a,BCardText:s.a},data:function(){return{value:0,locale:"fr-CA",locales:[{value:"en",text:"English"},{value:"de",text:"German"},{value:"fr-CA",text:"French (Canadian)"},{value:"fa",text:"Persian"},{value:"ar-EG",text:"Arabic (Egyptian)"}],codeLocale:'\n<template>\n  <div>\n    <label for="sb-locales">Locale</label>\n    <b-form-select\n      id="sb-locales"\n      v-model="locale"\n      :options="locales"\n    />\n    <label\n      for="sb-local"\n      class="mt-2"\n    >Spin button with locale</label>\n    <b-form-spinbutton\n      id="sb-locale"\n      v-model="value"\n      :locale="locale"\n      min="0"\n      max="10"\n      step="0.125"\n    />\n    <p class="mt-1">\n      Value: {{ value }}\n    </p>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton, BFormSelect } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BFormSelect,\n  },\n  data: () => ({\n    value: 0,\n    locale: \'fr-CA\',\n    locales: [\n      { value: \'en\', text: \'English\' },\n      { value: \'de\', text: \'German\' },\n      { value: \'fr-CA\', text: \'French (Canadian)\' },\n      { value: \'fa\', text: \'Persian\' },\n      { value: \'ar-EG\', text: \'Arabic (Egyptian)\' },\n    ],\n  }),\n}\n<\/script>\n'}}},F=Object(d.a)(w,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Locale"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeLocale)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("By default ")]),n._v(" "),e("code",[n._v("<b-form-spinbutton>")]),n._v(" "),e("span",[n._v("\n      will format the displayed number in the users browser default locale. You can change the localized formatting by\n      specifying a locale (or array of locales) via the\n    ")]),n._v(" "),e("code",[n._v("locale")]),n._v(" "),e("span",[n._v("\n      prop.\n    ")])]),n._v(" "),e("div",[e("label",{attrs:{for:"sb-locales"}},[n._v("Locale")]),n._v(" "),e("b-form-select",{attrs:{id:"sb-locales",options:n.locales},model:{value:n.locale,callback:function(t){n.locale=t},expression:"locale"}}),n._v(" "),e("label",{staticClass:"mt-2",attrs:{for:"sb-local"}},[n._v("Spin button with locale")]),n._v(" "),e("b-form-spinbutton",{attrs:{id:"sb-locale",locale:n.locale,min:"0",max:"10",step:"0.125"},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}}),n._v(" "),e("b-card-text",{staticClass:"mt-1"},[n._v("\n      Value: "+n._s(n.value)+"\n    ")])],1)],1)}),[],!1,null,null,null).exports,k={components:{BFormSpinbutton:l.a,BCardCode:r.a,BCardText:s.a,BRow:a.a,BCol:o.a},data:function(){return{value:50,codeDisabledReadonly:'\n<template>\n  <b-row>\n    <b-col\n      md="6"\n      class="mb-2"\n    >\n      <label for="sb-disabled">Disabled spin button</label>\n      <b-form-spinbutton\n        id="sb-disabled"\n        v-model="value"\n        disabled\n      />\n    </b-col>\n    <b-col\n      md="6"\n      class="mb-2"\n    >\n      <label\n        for="sb-readonly"\n        class=""\n      >Readonly spin button</label>\n      <b-form-spinbutton\n        id="sb-readonly"\n        v-model="value"\n        readonly\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BFormSpinbutton, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BRow,\n    BCol,\n  },\n  data: () => ({\n    value: 50,\n    codeDisabledReadonly,\n  }),\n}\n<\/script>\n'}}},T=Object(d.a)(k,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Disabled and readonly states"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeDisabledReadonly)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("Setting the prop ")]),n._v(" "),e("code",[n._v("disabled")]),n._v(" "),e("span",[n._v(" places the component in a disabled, non-interactive state. The ")]),n._v(" "),e("code",[n._v("readonly")]),n._v(" "),e("span",[n._v("\n      prop places the component in a readonly state (focusable, but the value cannot be changed by the user).\n    ")])]),n._v(" "),e("b-row",[e("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[e("label",{attrs:{for:"sb-disabled"}},[n._v("Disabled spin button")]),n._v(" "),e("b-form-spinbutton",{attrs:{id:"sb-disabled",disabled:""},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1),n._v(" "),e("b-col",{staticClass:"mb-2",attrs:{md:"6"}},[e("label",{attrs:{for:"sb-readonly"}},[n._v("Readonly spin button")]),n._v(" "),e("b-form-spinbutton",{attrs:{id:"sb-readonly",readonly:""},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1)],1)],1)}),[],!1,null,null,null).exports,E=e(2017),$={components:{BFormSpinbutton:l.a,BFormGroup:E.a,BCardText:s.a,BCardCode:r.a},data:function(){return{value:0,codeWidth:'\n<template>\n  <div>\n    <b-form-group>\n      <b-form-spinbutton\n        v-model="value"\n        min="0"\n        max="10"\n        step="0.125"\n        class="w-100"\n      />\n    </b-form-group>\n    <b-form-group>\n      <b-form-spinbutton\n        v-model="value"\n        min="0"\n        max="10"\n        step="0.125"\n        class="w-75"\n      />\n    </b-form-group>\n    <b-form-group>\n      <b-form-spinbutton\n        v-model="value"\n        min="0"\n        max="10"\n        step="0.125"\n        class="w-50"\n      />\n    </b-form-group>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton, BFormGroup } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BFormGroup,\n  },\n  data: () => ({\n    value: 0,\n  }),\n}\n<\/script>\n'}}},I=Object(d.a)($,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Width"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeWidth)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("The control (when not ")]),n._v(" "),e("code",[n._v("vertical")]),n._v(" "),e("span",[n._v(" or ")]),n._v(" "),e("code",[n._v("inline")]),n._v(" "),e("span",[n._v(") will expand to the maximum width of the parent container You can control width via utility classes such as\n    ")]),n._v(" "),e("code",[n._v("w-50, w-75, w-100")]),n._v(" "),e("span",[n._v(", or use styles to set the width.")])]),n._v(" "),e("b-form-group",[e("b-form-spinbutton",{staticClass:"w-100",attrs:{min:"0",max:"10",step:"0.125"},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1),n._v(" "),e("b-form-group",[e("b-form-spinbutton",{staticClass:"w-75",attrs:{min:"0",max:"10",step:"0.125"},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1),n._v(" "),e("b-form-group",[e("b-form-spinbutton",{staticClass:"w-50",attrs:{min:"0",max:"10",step:"0.125"},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1)],1)}),[],!1,null,null,null).exports,z={components:{BFormSpinbutton:l.a,BCardCode:r.a,BCardText:s.a},data:function(){return{value:50,codeValidation:'\n<template>\n  <div>\n    <b-form-spinbutton\n      id="sb-inline"\n      v-model="value"\n      :state="Boolean(value >= 50)"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 50,\n  }),\n}\n<\/script>\n'}}},D=Object(d.a)(z,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Validation states"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeValidation)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("When you default to a ")]),n._v(" "),e("code",[n._v("null")]),n._v(" "),e("span",[n._v(" value, and the user has not selected a value, you can use the ")]),n._v(" "),e("code",[n._v("state")]),n._v(" "),e("span",[n._v(" prop to apply one of the contextual validation styles to the component.")])]),n._v(" "),e("b-form-spinbutton",{attrs:{id:"sb-inline",state:Boolean(n.value>=50)},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1)}),[],!1,null,null,null).exports,A={components:{BFormSpinbutton:l.a,BCardText:s.a,BCardCode:r.a},data:function(){return{value:0,days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],codeFormater:"\n<template>\n  <div>\n    <label\n      for=\"sb-days\"\n      class=\"mt-2\"\n    >Spin button with formatter</label>\n    <b-form-spinbutton\n      id=\"sb-days\"\n      v-model=\"value\"\n      :formatter-fn=\"dayFormatter\"\n      min=\"0\"\n      max=\"6\"\n      wrap\n    />\n    <p class=\"mt-1 mb-0\">\n      Value: {{ value }}\n    </p>\n  </div>\n</template>\n\n<script>\nimport { BFormSpinbutton } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n  },\n  data: () => ({\n    value: 0,\n    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],\n  }),\n  methods: {\n    dayFormatter(value) {\n      return this.days[value]\n    },\n  },\n}\n<\/script>\n"}},methods:{dayFormatter:function(n){return this.days[n]}}},O=Object(d.a)(A,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Spinbutton with Formater"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeFormater)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("To provide a formatter function, set the prop ")]),n._v(" "),e("code",[n._v("formatter-fn")]),n._v(" "),e("span",[n._v(" to a method reference.")])]),n._v(" "),e("div",[e("label",{attrs:{for:"sb-days"}},[n._v("Spin button with formatter")]),n._v(" "),e("b-form-spinbutton",{attrs:{id:"sb-days","formatter-fn":n.dayFormatter,min:"0",max:"6",wrap:""},model:{value:n.value,callback:function(t){n.value=t},expression:"value"}}),n._v(" "),e("b-card-text",{staticClass:"mt-1 mb-0"},[n._v("\n      Value: "+n._s(n.value)+"\n    ")])],1)],1)}),[],!1,null,null,null).exports,j={components:{BFormSpinbutton:l.a,BCardCode:r.a,BCardText:s.a,BRow:a.a,BCol:o.a},data:function(){return{value:50,codeSlots:'\n<template>\n  <b-card-code\n    title="Basic Spinbutton"\n  >\n    <b-row>\n      <b-col md="6">\n        <b-form-spinbutton\n          v-model="value"\n          class="mb-md-0 mb-2"\n          min="1"\n          max="100"\n        >\n          <template #increment>\n            <feather-icon icon="ChevronUpIcon" />\n          </template>\n          <template #decrement>\n            <feather-icon icon="ChevronDownIcon" />\n          </template>\n        </b-form-spinbutton>\n      </b-col>\n      <b-col md="6">\n        <b-form-spinbutton\n          v-model="day"\n          min="0"\n          max="6"\n          wrap\n          :formatter-fn="dayFormatter"\n        >\n          <template #increment>\n            <feather-icon icon="ChevronRightIcon" />\n          </template>\n          <template #decrement>\n            <feather-icon icon="ChevronLeftIcon" />\n          </template>\n        </b-form-spinbutton>\n      </b-col>\n    </b-row>\n  </b-card-code>\n</template>\n\n<script>\nimport BCardCode from \'@core/components/b-card-code\'\nimport { BFormSpinbutton, BRow, BCol } from \'bootstrap-vue\'\nimport { codeBasic } from \'./code\'\n\nexport default {\n  components: {\n    BFormSpinbutton,\n    BCardCode,\n    BRow,\n    BCol,\n  },\n  data: () => ({\n    value: 50,\n    codeBasic,\n    day: 0,\n    days: [\'Sunday\', \'Monday\', \'Tuesday\', \'Wednesday\', \'Thursday\', \'Friday\', \'Saturday\'],\n  }),\n  methods: {\n    dayFormatter(value) {\n      return this.days[value]\n    },\n  },\n}\n<\/script>\n',day:0,days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}},methods:{dayFormatter:function(n){return this.days[n]}}},V=Object(d.a)(j,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Slot"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeSlots)+"\n  ")]},proxy:!0}])},[e("b-card-text",[e("span",[n._v("Spin buttons provides two slots ")]),n._v(" "),e("code",[n._v("increment")]),n._v(" "),e("span",[n._v(" and ")]),n._v(" "),e("code",[n._v("decrement")])]),n._v(" "),e("b-row",[e("b-col",{attrs:{md:"6"}},[e("b-form-spinbutton",{staticClass:"mb-md-0 mb-2",attrs:{min:"1",max:"100"},scopedSlots:n._u([{key:"increment",fn:function(){return[e("feather-icon",{attrs:{icon:"ChevronUpIcon"}})]},proxy:!0},{key:"decrement",fn:function(){return[e("feather-icon",{attrs:{icon:"ChevronDownIcon"}})]},proxy:!0}]),model:{value:n.value,callback:function(t){n.value=t},expression:"value"}})],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-form-spinbutton",{attrs:{min:"0",max:"6",wrap:"","formatter-fn":n.dayFormatter},scopedSlots:n._u([{key:"increment",fn:function(){return[e("feather-icon",{attrs:{icon:"ChevronRightIcon"}})]},proxy:!0},{key:"decrement",fn:function(){return[e("feather-icon",{attrs:{icon:"ChevronLeftIcon"}})]},proxy:!0}]),model:{value:n.day,callback:function(t){n.day=t},expression:"day"}})],1)],1)],1)}),[],!1,null,null,null).exports,R={components:{BRow:a.a,BCol:o.a,FormSpinbuttonBasic:u,FormSpinbuttonMinMax:b,FormSpinbuttonStep:m,FormSpinbuttonWrap:_,FormSpinbuttonSize:x,FormSpinbuttonInline:S,FormSpinbuttonVertical:g,FormSpinbuttonLocale:F,FormSpinbuttonDisabledReadonly:T,FormSpinbuttonWidth:I,FormSpinbuttonValidation:D,FormSpinbuttonFormater:O,FormSpinbuttonSlots:V}},W=Object(d.a)(R,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-basic")],1),n._v(" "),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-size")],1),n._v(" "),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-min-max")],1),n._v(" "),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-step")],1),n._v(" "),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-wrap")],1),n._v(" "),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-vertical")],1),n._v(" "),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-locale")],1),n._v(" "),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-width")],1),n._v(" "),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-inline")],1),n._v(" "),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-validation")],1),n._v(" "),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-formater")],1),n._v(" "),e("b-col",{attrs:{lg:"6"}},[e("form-spinbutton-disabled-readonly")],1),n._v(" "),e("b-col",{attrs:{cols:"12"}},[e("form-spinbutton-slots")],1)],1)}),[],!1,null,null,null);t.default=W.exports},18:function(n,t,e){"use strict";e(86);var a=e(1968),o=e(381),r=e(383),l=e(382),s=e(1987),i=(e(205),e(218),e(118)),c=e.n(i),d={components:{BCard:a.a,BCardTitle:o.a,BCardSubTitle:r.a,BCardBody:l.a,BCollapse:s.a,Prism:c.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var n=JSON.parse(JSON.stringify(this.$attrs));return delete n.title,delete n["sub-title"],n}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},u=(e(1099),e(0)),p=Object(u.a)(d,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card",n._g(n._b({attrs:{"no-body":""}},"b-card",n.cardAttrs,!1),n.$listeners),[e("div",{staticClass:"card-header"},[e("div",[e("b-card-title",[n._v(n._s(n.$attrs.title))]),n._v(" "),n.$attrs["sub-title"]?e("b-card-sub-title",[n._v("\n        "+n._s(n.$attrs["sub-title"])+"\n      ")]):n._e()],1),n._v(" "),e("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":n.code_visible?"false":"true","aria-controls":n.parentID},on:{click:function(t){n.code_visible=!n.code_visible}}})]),n._v(" "),void 0!==n.$attrs["no-body"]?[n._t("default"),n._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(t){n.code_visible=t},expression:"code_visible"}},[e("b-card-body",[e("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],1)]:e("b-card-body",[n._t("default"),n._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(t){n.code_visible=t},expression:"code_visible"}},[e("div",{staticClass:"p-1"}),n._v(" "),e("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=p.exports},4:function(n,t,e){"use strict";var a=e(18);t.a=a.a},571:function(n,t,e){var a=e(1100);"string"==typeof a&&(a=[[n.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(23)(a,o);a.locals&&(n.exports=a.locals)}}]);