(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1046:function(n,c,t){"use strict";t(528)},1047:function(n,c,t){(c=t(20)(!1)).push([n.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),n.exports=c},1582:function(n,c,t){"use strict";t.r(c);var e=t(1879),s=t(348),a=t(4),o=t(536),r=t(1880),i={components:{BCardCode:a.a,BFormCheckbox:o.a,BCardText:r.a},data:function(){return{codeBasic:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-form-checkbox\n      checked="true"\n      name="check-button"\n      switch\n      inline\n    >\n      Active Switch\n    </b-form-checkbox>\n    <b-form-checkbox\n      checked="false"\n      name="check-button"\n      switch\n      inline\n    >\n      Inactive Switch\n    </b-form-checkbox>\n    <b-form-checkbox\n      checked="true"\n      name="check-button"\n      switch\n      inline\n      disabled\n    >\n      Disabled Active Switch\n    </b-form-checkbox>\n\n    <b-form-checkbox\n      checked="false"\n      name="check-button"\n      switch\n      inline\n      disabled\n    >\n      Disabled Inactive Switch\n    </b-form-checkbox>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormCheckbox,\n  },\n}\n<\/script>\n'}}},d=t(0),l=Object(d.a)(i,(function(){var n=this,c=n.$createElement,t=n._self._c||c;return t("b-card-code",{attrs:{title:"Basic Switch"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeBasic)+"\n  ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[n._v("A single checkbox can be rendered with a switch appearance by setting the prop ")]),n._v(" "),t("code",[n._v("switch")]),n._v(" "),t("span",[n._v(" to ")]),n._v(" "),t("code",[n._v("true")])]),n._v(" "),t("div",{staticClass:"demo-inline-spacing"},[t("b-form-checkbox",{attrs:{checked:"true",name:"check-button",switch:"",inline:""}},[n._v("\n      Active Switch\n    ")]),n._v(" "),t("b-form-checkbox",{attrs:{checked:"false",name:"check-button",switch:"",inline:""}},[n._v("\n      Inactive Switch\n    ")]),n._v(" "),t("b-form-checkbox",{attrs:{checked:"true",name:"check-button",switch:"",inline:"",disabled:""}},[n._v("\n      Disabled Active Switch\n    ")]),n._v(" "),t("b-form-checkbox",{attrs:{checked:"false",name:"check-button",switch:"",inline:"",disabled:""}},[n._v("\n      Disabled Inactive Switch\n    ")])],1)],1)}),[],!1,null,null,null).exports,b={components:{BCardCode:a.a,BFormCheckbox:o.a,BCardText:r.a},data:function(){return{codeColor:'\n<template>\n  <div class="demo-inline-spacing">\n\n    \x3c!-- primary --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Primary\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-primary"\n        name="check-button"\n        switch\n      />\n    </div>\n\n    \x3c!-- secondary --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Secondary\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-secondary"\n        name="check-button"\n        switch\n      />\n    </div>\n\n    \x3c!-- success --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Success\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-success"\n        name="check-button"\n        switch\n      />\n    </div>\n\n    \x3c!-- danger --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Danger\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-danger"\n        name="check-button"\n        switch\n      />\n    </div>\n\n    \x3c!-- warning --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Warning\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-warning"\n        name="check-button"\n        switch\n      />\n    </div>\n\n    \x3c!-- info --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Info\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-info"\n        name="check-button"\n        switch\n      />\n    </div>\n\n    \x3c!-- dark --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Dark\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-dark"\n        name="check-button"\n        switch\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardCode,\n    BFormCheckbox,\n  },\n}\n<\/script>\n'}}},h=Object(d.a)(b,(function(){var n=this,c=n.$createElement,t=n._self._c||c;return t("b-card-code",{attrs:{title:"Colors"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeColor)+"\n  ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[n._v("Use class ")]),n._v(" "),t("code",[n._v(".custom-control-#{$color-name}")]),n._v(" "),t("span",[n._v(" with ")]),n._v(" "),t("code",[n._v("<b-form-checkbox switch>")]),n._v(" "),t("span",[n._v("\n      to change switch's color\n    ")])]),n._v(" "),t("div",{staticClass:"demo-inline-spacing"},[t("div",[t("b-card-text",{staticClass:"mb-0"},[n._v("\n        Primary\n      ")]),n._v(" "),t("b-form-checkbox",{staticClass:"custom-control-primary",attrs:{checked:"true",name:"check-button",switch:""}})],1),n._v(" "),t("div",[t("b-card-text",{staticClass:"mb-0"},[n._v("\n        Secondary\n      ")]),n._v(" "),t("b-form-checkbox",{staticClass:"custom-control-secondary",attrs:{checked:"true",name:"check-button",switch:""}})],1),n._v(" "),t("div",[t("b-card-text",{staticClass:"mb-0"},[n._v("\n        Success\n      ")]),n._v(" "),t("b-form-checkbox",{staticClass:"custom-control-success",attrs:{checked:"true",name:"check-button",switch:""}})],1),n._v(" "),t("div",[t("b-card-text",{staticClass:"mb-0"},[n._v("\n        Danger\n      ")]),n._v(" "),t("b-form-checkbox",{staticClass:"custom-control-danger",attrs:{checked:"true",name:"check-button",switch:""}})],1),n._v(" "),t("div",[t("b-card-text",{staticClass:"mb-0"},[n._v("\n        Warning\n      ")]),n._v(" "),t("b-form-checkbox",{staticClass:"custom-control-warning",attrs:{checked:"true",name:"check-button",switch:""}})],1),n._v(" "),t("div",[t("b-card-text",{staticClass:"mb-0"},[n._v("\n        Info\n      ")]),n._v(" "),t("b-form-checkbox",{staticClass:"custom-control-info",attrs:{checked:"true",name:"check-button",switch:""}})],1),n._v(" "),t("div",[t("b-card-text",{staticClass:"mb-0"},[n._v("\n        Dark\n      ")]),n._v(" "),t("b-form-checkbox",{staticClass:"custom-control-dark",attrs:{checked:"true",name:"check-button",switch:""}})],1)])],1)}),[],!1,null,null,null).exports,u={components:{BCardCode:a.a,BCardText:r.a,BFormCheckbox:o.a},data:function(){return{codeIcon:'\n<template>\n  <div class="demo-inline-spacing">\n\n    \x3c!-- primary --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Primary\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-primary"\n        name="check-button"\n        switch\n      >\n        <span class="switch-icon-left">\n          <feather-icon icon="BellIcon" />\n        </span>\n        <span class="switch-icon-right">\n          <feather-icon icon="BellOffIcon" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    \x3c!-- secondary --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Secondary\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-secondary"\n        name="check-button"\n        switch\n      >\n        <span class="switch-icon-left">\n          <feather-icon icon="CheckIcon" />\n        </span>\n        <span class="switch-icon-right">\n          <feather-icon icon="XIcon" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    \x3c!-- success --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Success\n      </b-card-text>\n      <b-form-checkbox\n        class="custom-control-success"\n        name="check-button"\n        switch\n      >\n        <span class="switch-icon-left">\n          <feather-icon icon="Volume2Icon" />\n        </span>\n        <span class="switch-icon-right">\n          <feather-icon icon="VolumeXIcon" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    \x3c!-- danger --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Danger\n      </b-card-text>\n      <b-form-checkbox\n        class="custom-control-danger"\n        name="check-button"\n        switch\n      >\n        <span class="switch-icon-left">\n          <feather-icon icon="CameraIcon" />\n        </span>\n        <span class="switch-icon-right">\n          <feather-icon icon="CameraOffIcon" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    \x3c!-- warning --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Warning\n      </b-card-text>\n      <b-form-checkbox\n        class="custom-control-warning"\n        name="check-button"\n        switch\n      >\n        <span class="switch-icon-left">\n          <feather-icon icon="MicIcon" />\n        </span>\n        <span class="switch-icon-right">\n          <feather-icon icon="MicOffIcon" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    \x3c!-- info --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Info\n      </b-card-text>\n      <b-form-checkbox\n        class="custom-control-info"\n        name="check-button"\n        switch\n      >\n        <span class="switch-icon-left">\n          <feather-icon icon="WifiIcon" />\n        </span>\n        <span class="switch-icon-right">\n          <feather-icon icon="WifiOffIcon" />\n        </span>\n      </b-form-checkbox>\n    </div>\n\n    \x3c!-- dark --\x3e\n    <div>\n      <b-card-text class="mb-0">\n        Dark\n      </b-card-text>\n      <b-form-checkbox\n        checked="true"\n        class="custom-control-dark"\n        name="check-button"\n        switch\n      >\n        <span class="switch-icon-left">\n          <feather-icon icon="GithubIcon" />\n        </span>\n        <span class="switch-icon-right">\n          <feather-icon icon="GitlabIcon" />\n        </span>\n      </b-form-checkbox>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BFormCheckbox } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormCheckbox,\n  },\n}\n<\/script>\n'}}},m=Object(d.a)(u,(function(){var n=this,c=n.$createElement,t=n._self._c||c;return t("b-card-code",{attrs:{title:"Icons"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeIcon)+"\n  ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[n._v("Use class ")]),n._v(" "),t("code",[n._v(".switch-icon-left & .switch-icon-right")]),n._v(" "),t("span",[n._v(" inside of")]),n._v(" "),t("code",[n._v("<b-form-checkbox switch>")]),n._v(" "),t("span",[n._v(" to create a switch with icon.")])]),n._v(" "),t("div",{staticClass:"demo-inline-spacing"},[t("div",[t("b-card-text",{staticClass:"mb-0"},[n._v("\n        Primary\n      ")]),n._v(" "),t("b-form-checkbox",{staticClass:"custom-control-primary",attrs:{checked:"true",name:"check-button",switch:""}},[t("span",{staticClass:"switch-icon-left"},[t("feather-icon",{attrs:{icon:"BellIcon"}})],1),n._v(" "),t("span",{staticClass:"switch-icon-right"},[t("feather-icon",{attrs:{icon:"BellOffIcon"}})],1)])],1),n._v(" "),t("div",[t("b-card-text",{staticClass:"mb-0"},[n._v("\n        Secondary\n      ")]),n._v(" "),t("b-form-checkbox",{staticClass:"custom-control-secondary",attrs:{checked:"true",name:"check-button",switch:""}},[t("span",{staticClass:"switch-icon-left"},[t("feather-icon",{attrs:{icon:"CheckIcon"}})],1),n._v(" "),t("span",{staticClass:"switch-icon-right"},[t("feather-icon",{attrs:{icon:"XIcon"}})],1)])],1),n._v(" "),t("div",[t("b-card-text",{staticClass:"mb-0"},[n._v("\n        Success\n      ")]),n._v(" "),t("b-form-checkbox",{staticClass:"custom-control-success",attrs:{name:"check-button",switch:""}},[t("span",{staticClass:"switch-icon-left"},[t("feather-icon",{attrs:{icon:"Volume2Icon"}})],1),n._v(" "),t("span",{staticClass:"switch-icon-right"},[t("feather-icon",{attrs:{icon:"VolumeXIcon"}})],1)])],1),n._v(" "),t("div",[t("b-card-text",{staticClass:"mb-0"},[n._v("\n        Danger\n      ")]),n._v(" "),t("b-form-checkbox",{staticClass:"custom-control-danger",attrs:{name:"check-button",switch:""}},[t("span",{staticClass:"switch-icon-left"},[t("feather-icon",{attrs:{icon:"CameraIcon"}})],1),n._v(" "),t("span",{staticClass:"switch-icon-right"},[t("feather-icon",{attrs:{icon:"CameraOffIcon"}})],1)])],1),n._v(" "),t("div",[t("b-card-text",{staticClass:"mb-0"},[n._v("\n        Warning\n      ")]),n._v(" "),t("b-form-checkbox",{staticClass:"custom-control-warning",attrs:{name:"check-button",switch:""}},[t("span",{staticClass:"switch-icon-left"},[t("feather-icon",{attrs:{icon:"MicIcon"}})],1),n._v(" "),t("span",{staticClass:"switch-icon-right"},[t("feather-icon",{attrs:{icon:"MicOffIcon"}})],1)])],1),n._v(" "),t("div",[t("b-card-text",{staticClass:"mb-0"},[n._v("\n        Info\n      ")]),n._v(" "),t("b-form-checkbox",{staticClass:"custom-control-info",attrs:{name:"check-button",switch:""}},[t("span",{staticClass:"switch-icon-left"},[t("feather-icon",{attrs:{icon:"WifiIcon"}})],1),n._v(" "),t("span",{staticClass:"switch-icon-right"},[t("feather-icon",{attrs:{icon:"WifiOffIcon"}})],1)])],1),n._v(" "),t("div",[t("b-card-text",{staticClass:"mb-0"},[n._v("\n        Dark\n      ")]),n._v(" "),t("b-form-checkbox",{staticClass:"custom-control-dark",attrs:{checked:"true",name:"check-button",switch:""}},[t("span",{staticClass:"switch-icon-left"},[t("feather-icon",{attrs:{icon:"GithubIcon"}})],1),n._v(" "),t("span",{staticClass:"switch-icon-right"},[t("feather-icon",{attrs:{icon:"GitlabIcon"}})],1)])],1)])],1)}),[],!1,null,null,null).exports,v=t(1919),p=t(1900),f={components:{BCardCode:a.a,BCardText:r.a,BFormGroup:v.a,BFormCheckboxGroup:p.a},data:function(){return{options:[{text:"Red",value:"red"},{text:"Green",value:"green"},{text:"Yellow (disabled)",value:"yellow",disabled:!0},{text:"Blue",value:"blue"}],selected:[],codeGroupArray:"\n<template>\n  <div>\n    <b-form-group label=\"Inline switch style checkboxes\">\n      <b-form-checkbox-group\n        v-model=\"selected\"\n        :options=\"options\"\n        switches\n        class=\"demo-inline-spacing\"\n      />\n    </b-form-group>\n    <b-form-group label=\"Stacked (vertical) switch style checkboxes\">\n      <b-form-checkbox-group\n        v-model=\"selected\"\n        :options=\"options\"\n        switches\n        stacked\n      />\n    </b-form-group>\n  </div>\n</template>\n\n\n<script>\nimport { BFormCheckboxGroup, BFormGroup } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BFormGroup,\n    BFormCheckboxGroup,\n  },\n  data() {\n    return {\n      options: [\n        { text: 'Red', value: 'red' },\n        { text: 'Green', value: 'green' },\n        { text: 'Yellow (disabled)', value: 'yellow', disabled: true },\n        { text: 'Blue', value: 'blue' },\n      ],\n      selected: [],\n    }\n  },\n}\n<\/script>\n"}}},x=Object(d.a)(f,(function(){var n=this,c=n.$createElement,t=n._self._c||c;return t("b-card-code",{attrs:{title:"Grouped switch "},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeGroupArray)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[n._v("Render groups of checkboxes with the look of a switches by setting the prop switches on ")]),n._v(" "),t("code",[n._v("<b-form-checkbox-group>")]),n._v(".\n  ")]),n._v(" "),t("div",[t("b-form-group",{attrs:{label:"Inline switch style checkboxes"}},[t("b-form-checkbox-group",{staticClass:"demo-inline-spacing",attrs:{options:n.options,switches:""},model:{value:n.selected,callback:function(c){n.selected=c},expression:"selected"}})],1),n._v(" "),t("b-form-group",{attrs:{label:"Stacked (vertical) switch style checkboxes"}},[t("b-form-checkbox-group",{attrs:{options:n.options,switches:"",stacked:""},model:{value:n.selected,callback:function(c){n.selected=c},expression:"selected"}})],1)],1),n._v(" "),t("b-card-text",{staticClass:"mb-0"},[n._v("\n    "+n._s(n.selected)+"\n  ")])],1)}),[],!1,null,null,null).exports,k={components:{BRow:e.a,BCol:s.a,SwitchBasic:l,SwitchColor:h,SwitchIcon:m,SwitchGrouped:x}},_=Object(d.a)(k,(function(){var n=this.$createElement,c=this._self._c||n;return c("b-row",[c("b-col",{attrs:{cols:"12"}},[c("switch-basic"),this._v(" "),c("switch-color"),this._v(" "),c("switch-icon"),this._v(" "),c("switch-grouped")],1)],1)}),[],!1,null,null,null);c.default=_.exports},16:function(n,c,t){"use strict";t(75);var e=t(1881),s=t(341),a=t(343),o=t(342),r=t(1896),i=(t(176),t(191),t(100)),d=t.n(i),l={components:{BCard:e.a,BCardTitle:s.a,BCardSubTitle:a.a,BCardBody:o.a,BCollapse:r.a,Prism:d.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var n=JSON.parse(JSON.stringify(this.$attrs));return delete n.title,delete n["sub-title"],n}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},b=(t(1046),t(0)),h=Object(b.a)(l,(function(){var n=this,c=n.$createElement,t=n._self._c||c;return t("b-card",n._g(n._b({attrs:{"no-body":""}},"b-card",n.cardAttrs,!1),n.$listeners),[t("div",{staticClass:"card-header"},[t("div",[t("b-card-title",[n._v(n._s(n.$attrs.title))]),n._v(" "),n.$attrs["sub-title"]?t("b-card-sub-title",[n._v("\n        "+n._s(n.$attrs["sub-title"])+"\n      ")]):n._e()],1),n._v(" "),t("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":n.code_visible?"false":"true","aria-controls":n.parentID},on:{click:function(c){n.code_visible=!n.code_visible}}})]),n._v(" "),void 0!==n.$attrs["no-body"]?[n._t("default"),n._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(c){n.code_visible=c},expression:"code_visible"}},[t("b-card-body",[t("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],1)]:t("b-card-body",[n._t("default"),n._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(c){n.code_visible=c},expression:"code_visible"}},[t("div",{staticClass:"p-1"}),n._v(" "),t("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);c.a=h.exports},4:function(n,c,t){"use strict";var e=t(16);c.a=e.a},528:function(n,c,t){var e=t(1047);"string"==typeof e&&(e=[[n.i,e,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(21)(e,s);e.locals&&(n.exports=e.locals)}}]);