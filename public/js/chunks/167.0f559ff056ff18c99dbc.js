(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{1034:function(e,t,n){"use strict";n(534)},1035:function(e,t,n){(t=n(20)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=t},16:function(e,t,n){"use strict";n(74);var a=n(1832),r=n(343),i=n(345),o=n(344),d=n(1845),s=(n(176),n(191),n(97)),b=n.n(s),l={components:{BCard:a.a,BCardTitle:r.a,BCardSubTitle:i.a,BCardBody:o.a,BCollapse:d.a,Prism:b.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},c=(n(1034),n(0)),p=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?n("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:n("b-card-body",[e._t("default"),e._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),e._v(" "),n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=p.exports},1913:function(e,t,n){"use strict";n.r(t);var a=n(1829),r=n(348),i=n(4),o=n(89),d=n(1844),s=n(1830),b=n(560),l=n(11),c=n(538),p=n(1840),v=n(1837),u={components:{BAvatar:c.a,BListGroup:p.a,BListGroupItem:v.a,BCardText:s.a},data:function(){return{sidebarItems:[{title:"Dashboard",icon:"GridIcon"},{title:"Analytics",icon:"ActivityIcon"},{title:"History",icon:"RefreshCwIcon"},{title:"Configuration",icon:"SettingsIcon"},{title:"Profile",icon:"UserIcon"}]}}},g=n(0),m=Object(g.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"text-center"},[a("b-avatar",{staticClass:"mr-1",attrs:{size:"72px",src:n(173)}}),e._v(" "),a("b-card-text",{staticClass:"mt-2 h4 color-inherit text-reset"},[e._v("\n      Black Widow\n    ")])],1),e._v(" "),a("b-list-group",{staticClass:"mt-3 rounded-0"},e._l(e.sidebarItems,(function(t){return a("b-list-group-item",{key:t.title,staticClass:"bg-transparent"},[a("feather-icon",{staticClass:"align-text-bottom",attrs:{icon:t.icon}}),e._v(" "),a("span",{staticClass:"ml-1",domProps:{textContent:e._s(t.title)}})],1)})),1)],1)}),[],!1,null,null,null).exports,_={components:{BCardCode:i.a,BButton:o.a,BSidebar:d.a,SidebarContent:m,BCardText:s.a},directives:{"b-toggle":b.a,Ripple:l.a},data:function(){return{codeBasic:"\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-1\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n    <b-sidebar\n      id=\"sidebar-1\"\n      shadow\n      bg-variant=\"white\"\n      backdrop\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport { BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    BImg,\n    SidebarContent\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n"}}},h=Object(g.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Sidebar Basic"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBasic)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("BootstrapVue's custom ")]),e._v(" "),n("code",[e._v("<b-sidebar>")]),e._v(" "),n("span",[e._v(" component is a fixed-position toggleable slide out box, which can be used for navigation, menus, details, etc.")])]),e._v(" "),n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],attrs:{variant:"outline-primary"}},[e._v("\n      Toggle Sidebar\n    ")]),e._v(" "),n("b-sidebar",{attrs:{id:"sidebar-1",shadow:"","bg-variant":"white",backdrop:""}},[n("sidebar-content")],1)],1)],1)}),[],!1,null,null,null).exports,f={components:{BCardCode:i.a,BButton:o.a,BSidebar:d.a,SidebarContent:m,BCardText:s.a},directives:{"b-toggle":b.a,Ripple:l.a},data:function(){return{codePlacement:"\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-right\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n    <b-sidebar\n      id=\"sidebar-right\"\n      bg-variant=\"white\"\n      right\n      backdrop\n      shadow\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n  },\n}\n<\/script>\n"}}},B=Object(g.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Sidebar Placement"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codePlacement)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("By default the sidebar will be placed on the left side fo the viewport. Set the ")]),e._v(" "),n("code",[e._v("right")]),e._v(" "),n("span",[e._v(" prop to ")]),e._v(" "),n("code",[e._v("true")]),e._v(" "),n("span",[e._v(" to have the sidebar appear on the right side of the viewport.")])]),e._v(" "),n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],attrs:{variant:"outline-primary"}},[e._v("\n      Toggle Sidebar\n    ")]),e._v(" "),n("b-sidebar",{attrs:{id:"sidebar-right","bg-variant":"white",right:"",backdrop:"",shadow:""}},[n("sidebar-content")],1)],1)],1)}),[],!1,null,null,null).exports,S={components:{BCardCode:i.a,BButton:o.a,BSidebar:d.a,SidebarContent:m,BCardText:s.a},directives:{"b-toggle":b.a,Ripple:l.a},data:function(){return{codeVariant:"\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-variant\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n\n    <b-sidebar\n      id=\"sidebar-variant\"\n      bg-variant=\"dark\"\n      text-variant=\"light\"\n      shadow\n      backdrop\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n"}}},C=Object(g.a)(S,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Sidebar Variant"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeVariant)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Use the props ")]),e._v(" "),n("code",[e._v("bg-variant")]),e._v(" "),n("span",[e._v(" and ")]),e._v(" "),n("code",[e._v("text-variant")]),e._v(" "),n("span",[e._v("\n      to control the theme color variant of the background and text, respectively. Alternatively, you can apply styles\n      or classes to specify the background and text colors.\n    ")])]),e._v(" "),n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-variant",modifiers:{"sidebar-variant":!0}}],attrs:{variant:"outline-primary"}},[e._v("\n      Toggle Sidebar\n    ")]),e._v(" "),n("b-sidebar",{attrs:{id:"sidebar-variant","bg-variant":"dark","text-variant":"light",shadow:"",backdrop:""}},[n("sidebar-content")],1)],1)],1)}),[],!1,null,null,null).exports,x={components:{BCardCode:i.a,BButton:o.a,BSidebar:d.a,SidebarContent:m,BCardText:s.a},directives:{"b-toggle":b.a,Ripple:l.a},data:function(){return{codeHeader:'\n<template>\n  <div>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-toggle.sidebar-no-header\n      variant="outline-primary"\n    >\n      Toggle Sidebar\n    </b-button>\n\n    <b-sidebar\n      id="sidebar-no-header"\n      aria-labelledby="sidebar-no-header-title"\n      no-header\n      bg-variant="white"\n      shadow\n      backdrop\n    >\n      <sidebar-content class="pt-2" />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\nimport SidebarContent from \'./SidebarContent.vue\'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    \'b-toggle\': VBToggle,\n     Ripple,\n  },\n}\n<\/script>\n'}}},w=Object(g.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Hiding the default header"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeHeader)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("You can disable the default header (including the close button) via the ")]),e._v(" "),n("code",[e._v("no-header")]),e._v(" "),n("span",[e._v(" prop. Note that you will need to provide a method of closing the sidebar. The ")]),e._v(" "),n("code",[e._v("default")]),e._v(" "),n("span",[e._v(" slot is scoped, which includes a")]),e._v(" "),n("code",[e._v("hide()")]),e._v(" "),n("span",[e._v(" method that can be used to close the sidebar.")])]),e._v(" "),n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-no-header",modifiers:{"sidebar-no-header":!0}}],attrs:{variant:"outline-primary"}},[e._v("\n      Toggle Sidebar\n    ")]),e._v(" "),n("b-sidebar",{attrs:{id:"sidebar-no-header","aria-labelledby":"sidebar-no-header-title","no-header":"","bg-variant":"white",shadow:"",backdrop:""}},[n("sidebar-content",{staticClass:"pt-2"})],1)],1)],1)}),[],!1,null,null,null).exports,k=Object(g.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"p-2 border-top text-danger cursor-pointer"},[t("feather-icon",{attrs:{icon:"LogOutIcon"}}),this._v(" "),t("span",{staticClass:"ml-1"},[this._v("Logout")])],1)}),[],!1,null,null,null).exports,y={components:{BCardCode:i.a,BButton:o.a,BSidebar:d.a,BCardText:s.a,SidebarContent:m,SidebarContentFooter:k},directives:{"b-toggle":b.a,Ripple:l.a},data:function(){return{codeFooter:"\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-footer\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n    <b-sidebar\n      id=\"sidebar-footer\"\n      aria-label=\"Sidebar with custom footer\"\n      shadow\n      backdrop\n      bg-variant=\"white\"\n    >\n      <sidebar-content />\n      <template #footer>\n        <sidebar-content-footer />\n      </template>\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport { BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\nimport SidebarContentFooter from './SidebarContentFooter.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    BCardText,\n    SidebarContent,\n    SidebarContentFooter,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n"}}},T=Object(g.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Footer"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeFooter)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("code",[e._v("<b-sidebar>")]),n("span",[e._v(" provides a ")]),e._v(" "),n("code",[e._v("footer")]),e._v(" "),n("span",[e._v("\n      slot (optionally scoped), to allow you to provide content that appears at the bottom of the sidebar. The\n    ")]),e._v(" "),n("code",[e._v("footer")]),n("span",[e._v(" slot is scoped, which includes a")]),e._v(" "),n("code",[e._v("hide()")]),n("span",[e._v(" method that can be used to close the sidebar.")])]),e._v(" "),n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-footer",modifiers:{"sidebar-footer":!0}}],attrs:{variant:"outline-primary"}},[e._v("\n      Toggle Sidebar\n    ")]),e._v(" "),n("b-sidebar",{attrs:{id:"sidebar-footer","aria-label":"Sidebar with custom footer",shadow:"",backdrop:"","bg-variant":"white"},scopedSlots:e._u([{key:"footer",fn:function(){return[n("sidebar-content-footer")]},proxy:!0}])},[n("sidebar-content")],1)],1)],1)}),[],!1,null,null,null).exports,R={components:{BCardCode:i.a,BButton:o.a,BCardText:s.a,BSidebar:d.a,SidebarContent:m},directives:{"b-toggle":b.a,Ripple:l.a},data:function(){return{codeBackdrop:"\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-backdrop\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar Without Backdrop\n    </b-button>\n\n    <b-sidebar\n      id=\"sidebar-backdrop\"\n      bg-variant=\"white\"\n      shadow\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport { codeBackdrop } from './code'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BCardText,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n"}}},V=Object(g.a)(R,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Backdrop"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBackdrop)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Sidebar component don't have backdrop by default. You can add it using ")]),e._v(" "),n("code",[e._v("backdrop")]),e._v(" "),n("span",[e._v(" prop. Below demo shows sidebar "),n("strong",[e._v("without")]),e._v(" backdrop")])]),e._v(" "),n("div",[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}],attrs:{variant:"outline-primary"}},[e._v("\n      Toggle Sidebar Without Backdrop\n    ")]),e._v(" "),n("b-sidebar",{attrs:{id:"sidebar-backdrop","bg-variant":"white",shadow:""}},[n("sidebar-content")],1)],1)],1)}),[],!1,null,null,null).exports,I={components:{BRow:a.a,BCol:r.a,SidebarBasic:h,SidebarPlacement:B,SidebarVariant:C,SidebarHeader:w,SidebarFooter:T,SidebarWithoutBackdrop:V}},$=Object(g.a)(I,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-row",{staticClass:"match-height"},[t("b-col",{attrs:{md:"6"}},[t("sidebar-basic")],1),this._v(" "),t("b-col",{attrs:{md:"6"}},[t("sidebar-placement")],1),this._v(" "),t("b-col",{attrs:{md:"6"}},[t("sidebar-variant")],1),this._v(" "),t("b-col",{attrs:{md:"6"}},[t("sidebar-header")],1),this._v(" "),t("b-col",{attrs:{md:"6"}},[t("sidebar-footer")],1),this._v(" "),t("b-col",{attrs:{md:"6"}},[t("sidebar-without-backdrop")],1)],1)}),[],!1,null,null,null);t.default=$.exports},4:function(e,t,n){"use strict";var a=n(16);t.a=a.a},534:function(e,t,n){var a=n(1035);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(22)(a,r);a.locals&&(e.exports=a.locals)}}]);