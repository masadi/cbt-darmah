(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1057:function(t,n,e){"use strict";e(531)},1058:function(t,n,e){(n=e(18)(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=n},1063:function(t,n,e){"use strict";e(532)},1064:function(t,n,e){(n=e(18)(!1)).push([t.i,".toastification-close-icon[data-v-5044ad47], .toastification-title[data-v-5044ad47] {\n  line-height: 26px;\n}\n.toastification-title[data-v-5044ad47] {\n  color: inherit;\n}",""]),t.exports=n},16:function(t,n,e){"use strict";e(74);var r=e(1924),o=e(345),a=e(347),i=e(346),c=e(1943),s=(e(180),e(193),e(103)),l=e.n(s),u={components:{BCard:r.a,BCardTitle:o.a,BCardSubTitle:a.a,BCardBody:i.a,BCollapse:c.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},p=(e(1057),e(0)),b=Object(p.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[e("div",{staticClass:"card-header"},[e("div",[e("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?e("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),e("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(n){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[e("b-card-body",[e("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:e("b-card-body",[t._t("default"),t._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[e("div",{staticClass:"p-1"}),t._v(" "),e("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);n.a=b.exports},1922:function(t,n,e){"use strict";e.d(n,"a",(function(){return y}));var r=e(47),o=e(5),a=e(2),i=e(23),c=e(69),s=e(35),l=e(206),u=e(13),p=e(1),b=e(27);function d(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?d(Object(e),!0).forEach((function(n){f(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var m=["start","end","center"],g=Object(l.a)((function(t,n){return(n=Object(b.h)(Object(b.g)(n)))?Object(b.c)(["row-cols",t,n].filter(s.a).join("-")):null})),h=Object(l.a)((function(t){return Object(b.c)(t.replace("cols",""))})),O=[],y={name:o.Ob,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(c.b)().reduce((function(t,n){return t[Object(p.g)(n,"cols")]=Object(p.c)(a.p),t}),Object(u.c)(null)),O=Object(u.h)(t),Object(p.d)(Object(u.m)(v(v({},t),{},{alignContent:Object(p.c)(a.u,null,(function(t){return Object(i.a)(Object(i.b)(m,"between","around","stretch"),t)})),alignH:Object(p.c)(a.u,null,(function(t){return Object(i.a)(Object(i.b)(m,"between","around"),t)})),alignV:Object(p.c)(a.u,null,(function(t){return Object(i.a)(Object(i.b)(m,"baseline","stretch"),t)})),noGutters:Object(p.c)(a.g,!1),tag:Object(p.c)(a.u,"div")})),o.Ob)),this.props},render:function(t,n){var e,o=n.props,a=n.data,i=n.children,c=o.alignV,s=o.alignH,l=o.alignContent,u=[];return O.forEach((function(t){var n=g(h(t),o[t]);n&&u.push(n)})),u.push((f(e={"no-gutters":o.noGutters},"align-items-".concat(c),c),f(e,"justify-content-".concat(s),s),f(e,"align-content-".concat(l),l),e)),t(o.tag,Object(r.a)(a,{staticClass:"row",class:u}),i)}}},1923:function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var r=e(8),o=e(47),a=e(5),i=e(2),c=e(1),s=Object(c.d)({textTag:Object(c.c)(i.u,"p")},a.u),l=Object(r.c)({name:a.u,functional:!0,props:s,render:function(t,n){var e=n.props,r=n.data,a=n.children;return t(e.textTag,Object(o.a)(r,{staticClass:"card-text"}),a)}})},2027:function(t,n,e){"use strict";e.r(n);var r=e(1922),o=e(358),a=e(93),i=e(1923),c=e(16),s=e(11),l=e(33),u={components:{BButton:a.a,BCardCode:c.a,BCardText:i.a,ToastificationContent:l.a},directives:{Ripple:s.a},data:function(){return{codeVariant:'\n<template>\n  <div class="demo-inline-spacing">\n    \x3c!-- primary trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="showToast(\'primary\')"\n    >\n      Primary\n    </b-button>\n\n    \x3c!-- secondary trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(186, 191, 199, 0.15)\'"\n      variant="outline-secondary"\n      @click="showToast(\'secondary\')"\n    >\n      Secondary\n    </b-button>\n\n    \x3c!-- success trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(40, 199, 111, 0.15)\'"\n      variant="outline-success"\n      @click="showToast(\'success\')"\n    >\n      Success\n    </b-button>\n\n    \x3c!-- danger trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(234, 84, 85, 0.15)\'"\n      variant="outline-danger"\n      @click="showToast(\'danger\')"\n    >\n      Danger\n    </b-button>\n\n    \x3c!-- warning trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n      variant="outline-warning"\n      @click="showToast(\'warning\')"\n    >\n      Warning\n    </b-button>\n\n    \x3c!-- info trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(0, 207, 232, 0.15)\'"\n      variant="outline-info"\n      @click="showToast(\'info\')"\n    >\n      Info\n    </b-button>\n\n    \x3c!-- dark trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(30, 30, 30, 0.15)\'"\n      variant="outline-dark"\n      @click="showToast(\'dark\')"\n    >\n      Dark\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\nimport ToastificationContent from \'@core/components/toastification/ToastificationContent.vue\'\n\nexport default {\n  components: {\n    BButton,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Notification\',\n          icon: \'BellIcon\',\n          text: \'👋 Chocolate oat cake jelly oat cake candy jelly beans pastry.\',\n          variant,\n        },\n      })\n    },\n  },\n}\n<\/script>\n'}},methods:{showToast:function(t){this.$toast({component:l.a,props:{title:"Notification",icon:"BellIcon",text:"👋 Chocolate oat cake jelly oat cake candy jelly beans pastry.",variant:t}})}}},p=e(0),b=Object(p.a)(u,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Variant"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeVariant)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[t._v("You can use ")]),t._v(" "),e("code",[t._v("variant")]),t._v(" "),e("span",[t._v(" prop for color variant.")])]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary")}}},[t._v("\n      Primary\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-secondary"},on:{click:function(n){return t.showToast("secondary")}}},[t._v("\n      Secondary\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(40, 199, 111, 0.15)",expression:"'rgba(40, 199, 111, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-success"},on:{click:function(n){return t.showToast("success")}}},[t._v("\n      Success\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(234, 84, 85, 0.15)",expression:"'rgba(234, 84, 85, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-danger"},on:{click:function(n){return t.showToast("danger")}}},[t._v("\n      Danger\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 159, 67, 0.15)",expression:"'rgba(255, 159, 67, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-warning"},on:{click:function(n){return t.showToast("warning")}}},[t._v("\n      Warning\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0, 207, 232, 0.15)",expression:"'rgba(0, 207, 232, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-info"},on:{click:function(n){return t.showToast("info")}}},[t._v("\n      Info\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(30, 30, 30, 0.15)",expression:"'rgba(30, 30, 30, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-dark"},on:{click:function(n){return t.showToast("dark")}}},[t._v("\n      Dark\n    ")])],1)],1)}),[],!1,null,null,null).exports,d={components:{BButton:a.a,BCardCode:c.a,BCardText:i.a,ToastificationContent:l.a},directives:{Ripple:s.a},data:function(){return{codePosition:"\n<template>\n  <div>\n    <h5 class=\"mb-0\">Top Positions</h5>\n    <div class=\"demo-inline-spacing\">\n\n      \x3c!-- Top right --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('primary','top-right')\"\n      >\n        Top Right\n      </b-button>\n\n      \x3c!-- Top left --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('secondary','top-left')\"\n      >\n        Top Left\n      </b-button>\n\n      \x3c!-- top center --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('success','top-center')\"\n      >\n        Top Center\n      </b-button>\n    </div>\n\n    <h5 class=\"mt-2 mb-0\">\n      Bottom Positions\n    </h5>\n    <div class=\"demo-inline-spacing\">\n      \x3c!-- bottom right --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('danger','bottom-right')\"\n      >\n        Bottom Right\n      </b-button>\n\n      \x3c!-- bottom left --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('warning','bottom-left')\"\n      >\n        Bottom Left\n      </b-button>\n\n      \x3c!-- bottom center --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('info','bottom-center')\"\n      >\n        Bottom Center\n      </b-button>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BButton, BCardText } from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BCardText,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant, position) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Notification',\n          icon: 'InfoIcon',\n          text: 'I do not think that word means what you think it means.',\n          variant,\n        },\n      },\n      {\n        position,\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{showToast:function(t,n){this.$toast({component:l.a,props:{title:"Notification",icon:"InfoIcon",text:"I do not think that word means what you think it means.",variant:t}},{position:n})}}},v=Object(p.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Position"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codePosition)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[t._v("Position of the toast on the screen. Can be any of ")]),t._v(" "),e("code",[t._v("top-right")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("top-center")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("top-left")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("bottom-right")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("bottom-center")]),t._v(" "),e("span",[t._v(" , ")]),t._v(" "),e("code",[t._v("bottom-left")]),t._v(".\n  ")]),t._v(" "),e("h5",{staticClass:"mb-0"},[t._v("\n    Top Positions\n  ")]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary","top-right")}}},[t._v("\n      Top Right\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("secondary","top-left")}}},[t._v("\n      Top Left\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("success","top-center")}}},[t._v("\n      Top Center\n    ")])],1),t._v(" "),e("h5",{staticClass:"mt-2 mb-0"},[t._v("\n    Bottom Positions\n  ")]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("danger","bottom-right")}}},[t._v("\n      Bottom Right\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("warning","bottom-left")}}},[t._v("\n      Bottom Left\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("info","bottom-center")}}},[t._v("\n      Bottom Center\n    ")])],1)],1)}),[],!1,null,null,null).exports,f={components:{BButton:a.a,BCardCode:c.a,BCardText:i.a,ToastificationContent:l.a},directives:{Ripple:s.a},data:function(){return{codeIcon:"\n<template>\n  <div class=\"demo-inline-spacing\">\n    \x3c!-- mail icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary','MailIcon')\"\n    >\n      Icon Mail\n    </b-button>\n\n    \x3c!-- Inbox icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('secondary','InboxIcon')\"\n    >\n      Icon Inbox\n    </b-button>\n\n    \x3c!-- Check icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('success','CheckIcon')\"\n    >\n      Icon Check\n    </b-button>\n\n    \x3c!-- heart icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('danger','HeartIcon')\"\n    >\n      Icon Heart\n    </b-button>\n\n    \x3c!-- favorite icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('warning','StarIcon')\"\n    >\n      Icon Favorite\n    </b-button>\n\n    \x3c!-- slack icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('info','SlackIcon')\"\n    >\n      Icon Slack\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BCardCode,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant, icon) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Notification',\n          icon,\n          text: 'I do not think that word means what you think it means.',\n          variant,\n        },\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{showToast:function(t,n){this.$toast({component:l.a,props:{title:"Notification",icon:n,text:"I do not think that word means what you think it means.",variant:t}})}}},m=Object(p.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Icon"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeIcon)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[t._v("Custom icon class to be used. Use ")]),t._v(" "),e("code",[t._v("icon")]),t._v(" "),e("span",[t._v(" prop to set icon.")])]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary","MailIcon")}}},[t._v("\n      Icon Mail\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("secondary","InboxIcon")}}},[t._v("\n      Icon Inbox\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("success","CheckIcon")}}},[t._v("\n      Icon Check\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("danger","HeartIcon")}}},[t._v("\n      Icon Heart\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("warning","StarIcon")}}},[t._v("\n      Icon Favorite\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("info","SlackIcon")}}},[t._v("\n      Icon Slack\n    ")])],1)],1)}),[],!1,null,null,null).exports,g={components:{BButton:a.a,BCardCode:c.a,BCardText:i.a,ToastificationContent:l.a},directives:{Ripple:s.a},data:function(){return{codeTime:"\n<template>\n  <div class=\"demo-inline-spacing\">\n\n    \x3c!-- default time trigger button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary')\"\n    >\n      Time Default\n    </b-button>\n\n    \x3c!-- 4s delay trigger button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary',4000)\"\n    >\n      Time 4s(4000)\n    </b-button>\n\n    \x3c!-- 8s delay trigger button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary',8000)\"\n    >\n      Time 8s(8000)\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton} from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BCardText,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant, timeout) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Notification',\n          icon: 'BellIcon',\n          text: 'I do not think that word means what you think it means.',\n          variant,\n        },\n      },\n      {\n        timeout,\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{showToast:function(t,n){this.$toast({component:l.a,props:{title:"Notification",icon:"BellIcon",text:"I do not think that word means what you think it means.",variant:t}},{timeout:n})}}},h=Object(p.a)(g,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Timeout"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeTime)+"\n  ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[t._v("\n    How many milliseconds for the toast to be auto dismissed, or false to disable.\n  ")]),t._v(" "),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary")}}},[t._v("\n      Time Default\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary",4e3)}}},[t._v("\n      Time 4s(4000)\n    ")]),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary",8e3)}}},[t._v("\n      Time 8s(8000)\n    ")])],1)],1)}),[],!1,null,null,null).exports,O={components:{BRow:r.a,BCol:o.a,ToastificationVariant:b,ToastificationPosition:v,ToastificationIcon:m,ToastificationTimeout:h}},y=Object(p.a)(O,(function(){var t=this.$createElement,n=this._self._c||t;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("toastification-variant"),this._v(" "),n("toastification-position"),this._v(" "),n("toastification-icon"),this._v(" "),n("toastification-timeout")],1)],1)}),[],!1,null,null,null);n.default=y.exports},306:function(t,n,e){"use strict";e.d(n,"a",(function(){return y}));var r=e(36),o=e.n(r),a=e(8),i=e(47),c=e(5),s=e(2),l=e(43),u=e(13),p=e(1),b=e(27),d=e(57),v=e(310);function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){g(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function g(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var h=Object(u.j)(v.b,["content"]),O=Object(p.d)(Object(u.m)(m(m({},h),{},{icon:Object(p.c)(s.u)})),c.ib),y=Object(a.c)({name:c.ib,functional:!0,props:O,render:function(t,n){var e=n.data,r=n.props,a=n.parent,c=Object(b.e)(Object(b.h)(r.icon||"")).replace(l.p,"");return t(c&&function t(n,e){if(!n)return o.a.component(e);var r=(n.$options||{}).components;return r&&r[e]||t(n.$parent,e)}(a,"BIcon".concat(c))||d.a,Object(i.a)(e,{props:Object(p.e)(h,r)}))}})},33:function(t,n,e){"use strict";var r={components:{BAvatar:e(535).a},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},o=(e(1063),e(0)),a=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),t._v(" "),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t._v(" "),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),t._v(" "),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(n){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])}),[],!1,null,"5044ad47",null);n.a=a.exports},358:function(t,n,e){"use strict";e.d(n,"a",(function(){return j}));var r=e(47),o=e(5),a=e(2),i=e(43),c=e(23),s=e(69),l=e(35),u=e(7),p=e(206),b=e(13),d=e(1),v=e(27);function f(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?f(Object(e),!0).forEach((function(n){g(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function g(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var h=["auto","start","end","center","baseline","stretch"],O=Object(p.a)((function(t,n,e){var r=t;if(!Object(u.p)(e)&&!1!==e)return n&&(r+="-".concat(n)),"col"!==t||""!==e&&!0!==e?(r+="-".concat(e),Object(v.c)(r)):Object(v.c)(r)})),y=Object(b.c)(null),j={name:o.y,functional:!0,get props(){return delete this.props,this.props=(t=Object(s.b)().filter(l.a),n=t.reduce((function(t,n){return t[n]=Object(d.c)(a.i),t}),Object(b.c)(null)),e=t.reduce((function(t,n){return t[Object(d.g)(n,"offset")]=Object(d.c)(a.p),t}),Object(b.c)(null)),r=t.reduce((function(t,n){return t[Object(d.g)(n,"order")]=Object(d.c)(a.p),t}),Object(b.c)(null)),y=Object(b.a)(Object(b.c)(null),{col:Object(b.h)(n),offset:Object(b.h)(e),order:Object(b.h)(r)}),Object(d.d)(Object(b.m)(m(m(m(m({},n),e),r),{},{alignSelf:Object(d.c)(a.u,null,(function(t){return Object(c.a)(h,t)})),col:Object(d.c)(a.g,!1),cols:Object(d.c)(a.p),offset:Object(d.c)(a.p),order:Object(d.c)(a.p),tag:Object(d.c)(a.u,"div")})),o.y));var t,n,e,r},render:function(t,n){var e,o=n.props,a=n.data,c=n.children,s=o.cols,l=o.offset,u=o.order,p=o.alignSelf,b=[];for(var d in y)for(var v=y[d],f=0;f<v.length;f++){var m=O(d,v[f].replace(d,""),o[v[f]]);m&&b.push(m)}var h=b.some((function(t){return i.e.test(t)}));return b.push((g(e={col:o.col||!h&&!s},"col-".concat(s),s),g(e,"offset-".concat(l),l),g(e,"order-".concat(u),u),g(e,"align-self-".concat(p),p),e)),t(o.tag,Object(r.a)(a,{class:b}),c)}}},531:function(t,n,e){var r=e(1058);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(21)(r,o);r.locals&&(t.exports=r.locals)},532:function(t,n,e){var r=e(1064);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(21)(r,o);r.locals&&(t.exports=r.locals)},535:function(t,n,e){"use strict";e.d(n,"b",(function(){return _})),e.d(n,"a",(function(){return T}));var r=e(8),o=e(5),a=e(12),i=e(2),c=e(20),s=e(7),l=e(22),u=e(13),p=e(1),b=e(98),d=e(28),v=e(306),f=e(57),m=e(93),g=e(61);function h(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?h(Object(e),!0).forEach((function(n){y(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function y(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var j=["sm",null,"lg"],_=function(t){return t=Object(s.n)(t)&&Object(s.i)(t)?Object(l.b)(t,0):t,Object(s.h)(t)?"".concat(t,"px"):t||null},w=Object(u.j)(g.b,["active","event","routerTag"]),x=Object(p.d)(Object(u.m)(O(O({},w),{},{alt:Object(p.c)(i.u,"avatar"),ariaLabel:Object(p.c)(i.u),badge:Object(p.c)(i.j,!1),badgeLeft:Object(p.c)(i.g,!1),badgeOffset:Object(p.c)(i.u),badgeTop:Object(p.c)(i.g,!1),badgeVariant:Object(p.c)(i.u,"primary"),button:Object(p.c)(i.g,!1),buttonType:Object(p.c)(i.u,"button"),icon:Object(p.c)(i.u),rounded:Object(p.c)(i.j,!1),size:Object(p.c)(i.p),square:Object(p.c)(i.g,!1),src:Object(p.c)(i.u),text:Object(p.c)(i.u),variant:Object(p.c)(i.u,"secondary")})),o.c),T=Object(r.c)({name:o.c,mixins:[d.a],inject:{getBvAvatarGroup:{default:function(){return function(){return null}}}},props:x,data:function(){return{localSrc:this.src||null}},computed:{bvAvatarGroup:function(){return this.getBvAvatarGroup()},computedSize:function(){var t=this.bvAvatarGroup;return _(t?t.size:this.size)},computedVariant:function(){var t=this.bvAvatarGroup;return t&&t.variant?t.variant:this.variant},computedRounded:function(){var t=this.bvAvatarGroup,n=!(!t||!t.square)||this.square,e=t&&t.rounded?t.rounded:this.rounded;return n?"0":""===e||(e||"circle")},fontStyle:function(){var t=this.computedSize,n=-1===j.indexOf(t)?"calc(".concat(t," * ").concat(.4,")"):null;return n?{fontSize:n}:{}},marginStyle:function(){var t=this.computedSize,n=this.bvAvatarGroup,e=n?n.overlapScale:0,r=t&&e?"calc(".concat(t," * -").concat(e,")"):null;return r?{marginLeft:r,marginRight:r}:{}},badgeStyle:function(){var t=this.computedSize,n=this.badgeTop,e=this.badgeLeft,r=this.badgeOffset||"0px";return{fontSize:-1===j.indexOf(t)?"calc(".concat(t," * ").concat(.4*.7," )"):null,top:n?r:null,bottom:n?null:r,left:e?r:null,right:e?null:r}}},watch:{src:function(t,n){t!==n&&(this.localSrc=t||null)}},methods:{onImgError:function(t){this.localSrc=null,this.$emit(a.y,t)},onClick:function(t){this.$emit(a.f,t)}},render:function(t){var n,e=this.computedVariant,r=this.disabled,o=this.computedRounded,a=this.icon,i=this.localSrc,s=this.text,l=this.fontStyle,u=this.marginStyle,d=this.computedSize,h=this.button,_=this.buttonType,x=this.badge,T=this.badgeVariant,k=this.badgeStyle,C=!h&&Object(b.d)(this),B=h?m.a:C?g.a:"span",I=this.alt,S=this.ariaLabel||null,P=null;this.hasNormalizedSlot()?P=t("span",{staticClass:"b-avatar-custom"},[this.normalizeSlot()]):i?(P=t("img",{style:e?{}:{width:"100%",height:"100%"},attrs:{src:i,alt:I},on:{error:this.onImgError}}),P=t("span",{staticClass:"b-avatar-img"},[P])):P=a?t(v.a,{props:{icon:a},attrs:{"aria-hidden":"true",alt:I}}):s?t("span",{staticClass:"b-avatar-text",style:l},[t("span",s)]):t(f.m,{attrs:{"aria-hidden":"true",alt:I}});var N=t(),D=this.hasNormalizedSlot(c.d);if(x||""===x||D){var $=!0===x?"":x;N=t("span",{staticClass:"b-avatar-badge",class:y({},"badge-".concat(T),T),style:k},[D?this.normalizeSlot(c.d):$])}return t(B,{staticClass:"b-avatar",class:(n={},y(n,"".concat("b-avatar","-").concat(d),d&&-1!==j.indexOf(d)),y(n,"badge-".concat(e),!h&&e),y(n,"rounded",!0===o),y(n,"rounded-".concat(o),o&&!0!==o),y(n,"disabled",r),n),style:O(O({},u),{},{width:d,height:d}),attrs:{"aria-label":S||null},props:h?{variant:e,disabled:r,type:_}:C?Object(p.e)(w,this):{},on:h||C?{click:this.onClick}:{}},[P,N])}})}}]);