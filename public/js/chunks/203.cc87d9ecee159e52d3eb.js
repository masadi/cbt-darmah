(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1057:function(n,t,r){"use strict";r(529)},1058:function(n,t,r){(t=r(19)(!1)).push([n.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),n.exports=t},16:function(n,t,r){"use strict";r(73);var a=r(1908),o=r(343),e=r(345),i=r(344),b=r(1926),p=(r(178),r(192),r(101)),u=r.n(p),s={components:{BCard:a.a,BCardTitle:o.a,BCardSubTitle:e.a,BCardBody:i.a,BCollapse:b.a,Prism:u.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var n=JSON.parse(JSON.stringify(this.$attrs));return delete n.title,delete n["sub-title"],n}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},l=(r(1057),r(0)),v=Object(l.a)(s,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("b-card",n._g(n._b({attrs:{"no-body":""}},"b-card",n.cardAttrs,!1),n.$listeners),[r("div",{staticClass:"card-header"},[r("div",[r("b-card-title",[n._v(n._s(n.$attrs.title))]),n._v(" "),n.$attrs["sub-title"]?r("b-card-sub-title",[n._v("\n        "+n._s(n.$attrs["sub-title"])+"\n      ")]):n._e()],1),n._v(" "),r("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":n.code_visible?"false":"true","aria-controls":n.parentID},on:{click:function(t){n.code_visible=!n.code_visible}}})]),n._v(" "),void 0!==n.$attrs["no-body"]?[n._t("default"),n._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(t){n.code_visible=t},expression:"code_visible"}},[r("b-card-body",[r("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],1)]:r("b-card-body",[n._t("default"),n._v(" "),r("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(t){n.code_visible=t},expression:"code_visible"}},[r("div",{staticClass:"p-1"}),n._v(" "),r("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=v.exports},2003:function(n,t,r){"use strict";r.r(t);var a=r(1906),o=r(353),e=r(1949),i=r(1922),b=r(93),p=r(1907),u=r(16),s=r(11),l={components:{BButtonToolbar:e.a,BButtonGroup:i.a,BButton:b.a,BCardText:p.a,BCardCode:u.a},directives:{Ripple:s.a},data:function(){return{codeNavigation:'\n<template>\n  <b-button-toolbar\n    key-nav\n    aria-label="Toolbar with button groups"\n    class="demo-inline-spacing"\n  >\n\n    \x3c!-- group  1 --\x3e\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        class="btn-icon"\n        variant="outline-primary"\n      >\n        <feather-icon icon="ChevronsLeftIcon" />\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        class="btn-icon"\n        variant="outline-primary"\n      >\n        <feather-icon icon="ChevronLeftIcon" />\n      </b-button>\n    </b-button-group>\n\n    \x3c!-- group 2 --\x3e\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-primary"\n      >\n        Edit\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-primary"\n      >\n        Undo\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-primary"\n      >\n        Redo\n      </b-button>\n    </b-button-group>\n\n    \x3c!-- group 3 --\x3e\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        class="btn-icon"\n        variant="outline-primary"\n      >\n        <feather-icon icon="ChevronRightIcon" />\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        class="btn-icon"\n        variant="outline-primary"\n      >\n        <feather-icon icon="ChevronsRightIcon" />\n      </b-button>\n    </b-button-group>\n  </b-button-toolbar>\n</template>\n\n<script>\nimport {BButtonToolbar, BButtonGroup, BButton} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},v=r(0),d=Object(v.a)(l,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("b-card-code",{attrs:{title:"Button groups & Keyboard navigation"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeNavigation)+"\n  ")]},proxy:!0}])},[r("b-card-text",[n._v("Group a series of button-groups and/or input-groups together on a single line, with optional keyboard navigation")]),n._v(" "),r("b-button-toolbar",{staticClass:"demo-inline-spacing",attrs:{"key-nav":"","aria-label":"Toolbar with button groups"}},[r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon",attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"ChevronsLeftIcon"}})],1),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon",attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"ChevronLeftIcon"}})],1)],1),n._v(" "),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Edit\n      ")]),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Undo\n      ")]),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Redo\n      ")])],1),n._v(" "),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon",attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"ChevronRightIcon"}})],1),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon",attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"ChevronsRightIcon"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports,c=r(1909),m=r(1910),g={components:{BButtonToolbar:e.a,BButtonGroup:i.a,BButton:b.a,BFormInput:c.a,BInputGroup:m.a,BCardCode:u.a},directives:{Ripple:s.a},data:function(){return{codeInput:'\n<template>\n   <b-button-toolbar\n      class="demo-inline-spacing"\n      aria-label="Toolbar with button groups and input groups"\n    >\n      <b-button-group size="sm">\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Save\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Cancel\n        </b-button>\n      </b-button-group>\n      <b-input-group\n        size="sm"\n        append=".00"\n        prepend="$"\n      >\n        <b-form-input\n          value="100"\n          class="text-right"\n        />\n      </b-input-group>\n  </b-button-toolbar>\n</template>\n\n<script>\nimport {\n  BButtonToolbar, BButtonGroup, BButton, BFormInput, BInputGroup,\n} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n    BFormInput,\n    BInputGroup,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},B=Object(v.a)(g,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("b-card-code",{attrs:{title:"Button Toolbar with Input"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeInput)+"\n  ")]},proxy:!0}])},[r("b-button-toolbar",{staticClass:"demo-inline-spacing",attrs:{"aria-label":"Toolbar with button groups and input groups"}},[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Save\n      ")]),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Cancel\n      ")])],1),n._v(" "),r("b-input-group",{attrs:{size:"sm",append:".00",prepend:"$"}},[r("b-form-input",{staticClass:"text-right",attrs:{value:"100"}})],1)],1)],1)}),[],!1,null,null,null).exports,_=r(571),f=r(1939),y={components:{BButtonToolbar:e.a,BButtonGroup:i.a,BButton:b.a,BDropdown:_.a,BCardCode:u.a,BDropdownItem:f.a},directives:{Ripple:s.a},data:function(){return{codeDropdown:'\n<template>\n  <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        New\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Edit\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Undo\n      </b-button>\n    </b-button-group>\n    <b-dropdown\n      v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n      class="mx-1"\n      right\n      text="menu"\n      variant="primary"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n    <b-button-group>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Save\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Cancel\n      </b-button>\n    </b-button-group>\n  </b-button-toolbar>\n</template>\n\n<script>\nimport {\n  BButtonToolbar, BButtonGroup, BButton, BDropdown, BDropdownItem,\n} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n    BDropdown,\n    BDropdownItem,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},w=Object(v.a)(y,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("b-card-code",{attrs:{title:"Button Toolbar with Dropdown"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeDropdown)+"\n  ")]},proxy:!0}])},[r("b-button-toolbar",{staticClass:"demo-inline-spacing",attrs:{"aria-label":"Toolbar with button groups and dropdown menu"}},[r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        New\n      ")]),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Edit\n      ")]),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Undo\n      ")])],1),n._v(" "),r("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{right:"",text:"menu",variant:"outline-primary"}},[r("b-dropdown-item",[n._v("Item 1")]),n._v(" "),r("b-dropdown-item",[n._v("Item 2")]),n._v(" "),r("b-dropdown-item",[n._v("Item 3")])],1),n._v(" "),r("b-button-group",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Save\n      ")]),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Cancel\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,h={components:{BButtonToolbar:e.a,BButtonGroup:i.a,BButton:b.a,BCardText:p.a,BCardCode:u.a},directives:{Ripple:s.a},data:function(){return{codeSize:'\n<template>\n  <div>\n     <b-button-toolbar>\n      <b-button-group\n        size="lg"\n      >\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </b-button-toolbar>\n\n    <b-button-toolbar>\n      <b-button-group\n        class="my-1"\n      >\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </b-button-toolbar>\n\n    <b-button-toolbar>\n      <b-button-group\n        size="sm"\n      >\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n          variant="primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </b-button-toolbar>\n  </div>\n</template>\n\n<script>\nimport { BButtonToolbar, BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},x=Object(v.a)(h,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("b-card-code",{attrs:{title:"Size"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeSize)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[n._v("If you want smaller or larger buttons or controls, set the size prop directly on the ")]),n._v(" "),r("code",[n._v("<b-button-group>")]),n._v(" "),r("span",[n._v(", ")]),n._v(" "),r("code",[n._v("<b-input-group>")]),n._v(" "),r("span",[n._v(", and ")]),n._v(" "),r("code",[n._v("<b-dropdown>")]),n._v(" "),r("span",[n._v(" components")])]),n._v(" "),r("b-button-toolbar",[r("b-button-group",{attrs:{size:"lg"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        First\n      ")]),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Second\n      ")]),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Third\n      ")])],1)],1),n._v(" "),r("b-button-toolbar",[r("b-button-group",{staticClass:"my-1"},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        First\n      ")]),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Second\n      ")]),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Third\n      ")])],1)],1),n._v(" "),r("b-button-toolbar",[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        First\n      ")]),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Second\n      ")]),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Third\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,C={components:{BButtonToolbar:e.a,BButtonGroup:i.a,BCardText:p.a,BButton:b.a,BCardCode:u.a},directives:{Ripple:s.a},data:function(){return{codeJustify:'\n<template>\n  <b-button-toolbar justify>\n    <b-button-group\n      class="mr-2 mb-1"\n      vertical\n    >\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Button\n      </b-button>\n    </b-button-group>\n    <b-button-group\n      class="mr-2 mb-1"\n      vertical\n    >\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="primary"\n      >\n        Primary\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="secondary"\n      >\n        Secondary\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="success"\n      >\n        Success\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="warning"\n      >\n        Warning\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="danger"\n      >\n        Danger\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 255, 255, 0.15)\'"\n        variant="info"\n      >\n        Info\n      </b-button>\n    </b-button-group>\n    <b-button-group\n      class="mb-1"\n      vertical\n    >\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-primary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n        variant="outline-secondary"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(40, 199, 111, 0.15)\'"\n        variant="outline-success"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n        variant="outline-warning"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(234, 84, 85, 0.15)\'"\n        variant="outline-danger"\n      >\n        Button\n      </b-button>\n      <b-button\n        v-ripple.400="\'rgba(0, 207, 232, 0.15)\'"\n        variant="outline-info"\n      >\n        Button\n      </b-button>\n    </b-button-group>\n  </b-button-toolbar>\n</template>\n\n<script>\nimport { BButtonToolbar, BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonToolbar,\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},I=Object(v.a)(C,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("b-card-code",{attrs:{title:"Justify"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeJustify)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[n._v("Make the toolbar span the maximum available width, by increasing spacing between the button groups, input groups and dropdowns, by setting the prop ")]),n._v(" "),r("code",[n._v("justify")]),n._v(" "),r("span",[n._v(".")])]),n._v(" "),r("b-button-toolbar",{attrs:{justify:""}},[r("b-button-group",{staticClass:"mr-2 mb-1"},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Button\n      ")]),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Button\n      ")]),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[n._v("\n        Button\n      ")])],1),n._v(" "),r("b-button-group",{staticClass:"mr-2 mb-1"},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"HomeIcon"}})],1),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"SearchIcon"}})],1),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"BellIcon"}})],1),n._v(" "),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[r("feather-icon",{attrs:{icon:"ShoppingCartIcon"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports,T={components:{BRow:a.a,BCol:o.a,ButtonToolbarNavigation:d,ButtonToolbarInput:B,ButtonToolbarDropdown:w,ButtonToolbarSize:x,ButtonToolbarJustify:I}},N=Object(v.a)(T,(function(){var n=this.$createElement,t=this._self._c||n;return t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("button-toolbar-navigation"),this._v(" "),t("button-toolbar-input"),this._v(" "),t("button-toolbar-dropdown"),this._v(" "),t("button-toolbar-size"),this._v(" "),t("button-toolbar-justify")],1)],1)}),[],!1,null,null,null);t.default=N.exports},529:function(n,t,r){var a=r(1058);"string"==typeof a&&(a=[[n.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(21)(a,o);a.locals&&(n.exports=a.locals)}}]);