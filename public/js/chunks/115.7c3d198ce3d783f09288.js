(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1052:function(t,e,n){"use strict";n(528)},1053:function(t,e,n){(e=n(18)(!1)).push([t.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),t.exports=e},1258:function(t,e,n){"use strict";n(646)},1259:function(t,e,n){(e=n(18)(!1)).push([t.i,".translucent-wrap[data-v-1033ec18] {\n  height: 110px;\n  position: relative;\n}",""]),t.exports=e},16:function(t,e,n){"use strict";n(76);var a=n(1902),r=n(342),o=n(344),s=n(343),i=n(1917),c=(n(177),n(191),n(101)),l=n.n(c),u={components:{BCard:a.a,BCardTitle:r.a,BCardSubTitle:o.a,BCardBody:s.a,BCollapse:i.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},p=(n(1052),n(0)),d=Object(p.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?n("b-card-sub-title",[t._v("\n        "+t._s(t.$attrs["sub-title"])+"\n      ")]):t._e()],1),t._v(" "),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(e){t.code_visible=!t.code_visible}}})]),t._v(" "),void 0!==t.$attrs["no-body"]?[t._t("default"),t._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:n("b-card-body",[t._t("default"),t._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),t._v(" "),n("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);e.a=d.exports},1900:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var a=n(48),r=n(5),o=n(2),s=n(23),i=n(67),c=n(35),l=n(205),u=n(13),p=n(1),d=n(27);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f=["start","end","center"],g=Object(l.a)((function(t,e){return(e=Object(d.h)(Object(d.g)(e)))?Object(d.c)(["row-cols",t,e].filter(c.a).join("-")):null})),h=Object(l.a)((function(t){return Object(d.c)(t.replace("cols",""))})),_=[],y={name:r.Ob,functional:!0,get props(){var t;return delete this.props,this.props=(t=Object(i.b)().reduce((function(t,e){return t[Object(p.g)(e,"cols")]=Object(p.c)(o.p),t}),Object(u.c)(null)),_=Object(u.h)(t),Object(p.d)(Object(u.m)(v(v({},t),{},{alignContent:Object(p.c)(o.u,null,(function(t){return Object(s.a)(Object(s.b)(f,"between","around","stretch"),t)})),alignH:Object(p.c)(o.u,null,(function(t){return Object(s.a)(Object(s.b)(f,"between","around"),t)})),alignV:Object(p.c)(o.u,null,(function(t){return Object(s.a)(Object(s.b)(f,"baseline","stretch"),t)})),noGutters:Object(p.c)(o.g,!1),tag:Object(p.c)(o.u,"div")})),r.Ob)),this.props},render:function(t,e){var n,r=e.props,o=e.data,s=e.children,i=r.alignV,c=r.alignH,l=r.alignContent,u=[];return _.forEach((function(t){var e=g(h(t),r[t]);e&&u.push(e)})),u.push((m(n={"no-gutters":r.noGutters},"align-items-".concat(i),i),m(n,"justify-content-".concat(c),c),m(n,"align-content-".concat(l),l),n)),t(r.tag,Object(a.a)(o,{staticClass:"row",class:u}),s)}}},1901:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n(8),r=n(48),o=n(5),s=n(2),i=n(1),c=Object(i.d)({textTag:Object(i.c)(s.u,"p")},o.u),l=Object(a.c)({name:o.u,functional:!0,props:c,render:function(t,e){var n=e.props,a=e.data,o=e.children;return t(n.textTag,Object(r.a)(a,{staticClass:"card-text"}),o)}})},1991:function(t,e,n){"use strict";n.r(e);var a=n(1900),r=n(349),o=n(4),s=n(93),i=n(1901),c=n(298),l=n(226),u=n(11),p={components:{BCardCode:o.a,BButton:s.a,BCardText:i.a,BToast:c.a,BImg:l.a},directives:{Ripple:u.a},data:function(){return{codeBasic:'\n<template>\n  <div>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="$bvToast.show(\'example-toast\')"\n    >\n      Show toast\n    </b-button>\n\n    \x3c!-- toast --\x3e\n    <b-toast id="example-toast">\n      <template #toast-title>\n        <div class="d-flex flex-grow-1 align-items-center mr-1">\n          <b-img\n            :src="require(\'@/assets/images/logo/logo.png\')"\n            class="mr-1"\n            height="18"\n            width="25"\n            alt="Toast image"\n          />\n          <strong class="mr-auto">Vue Admin</strong>\n          <small class="text-muted">11 mins ago</small>\n        </div>\n      </template>\n      <span>Hello, world! This is a toast message. Hope you\'re doing well.. :)</span>\n    </b-toast>\n  </div>\n</template>\n\n<script>\nimport { BButton, BToast, BImg } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButton,\n    BToast,\n    BImg,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},d=n(0),b=Object(d.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card-code",{attrs:{title:"Basic Toast"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeBasic)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[t._v("Push notifications to your visitors with a ")]),t._v(" "),a("code",[t._v("<b-toast>")]),t._v(" "),a("span",[t._v(" and ")]),t._v(" "),a("code",[t._v("<b-toaster>,")]),t._v(" "),a("span",[t._v(" lightweigt components which are easily customizable for generating alert messages.")])]),t._v(" "),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.$bvToast.show("example-toast")}}},[t._v("\n    Show toast\n  ")]),t._v(" "),a("b-toast",{attrs:{id:"example-toast"},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("div",{staticClass:"d-flex flex-grow-1 align-items-center mr-1"},[a("b-img",{staticClass:"mr-1",attrs:{src:n(308),height:"18",width:"25",alt:"Toast image"}}),t._v(" "),a("strong",{staticClass:"mr-auto"},[t._v("Vue Admin")]),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("11 mins ago")])],1)]},proxy:!0}])},[t._v(" "),a("span",[t._v("Hello, world! This is a toast message. Hope you're doing well.. :)")])])],1)}),[],!1,null,null,null).exports,v=n(343),m={components:{BCardCode:o.a,BToast:c.a,BCardBody:v.a,BImg:l.a,BCardText:i.a},data:function(){return{visible:!0,codeTranslucent:'\n<template>\n  <div class="translucent-wrap bg-primary rounded-bottom p-1">\n    <b-toast\n      id="example-toast3"\n      v-model="visible"\n      static\n      no-auto-hide\n    >\n      <template #toast-title>\n        <div class="d-flex flex-grow-1 align-items-center mr-1">\n          <b-img\n            :src="require(\'@/assets/images/logo/logo.png\')"\n            class="mr-1"\n            height="18"\n            width="25"\n            alt="Toast image"\n          />\n          <strong class="mr-auto">Vue Admin</strong>\n          <small class="text-muted">11 mins ago</small>\n        </div>\n      </template>\n      <span>Hello, world! This is a toast message.</span>\n    </b-toast>\n  </div>\n</template>\n\n<script>\nimport {\n  BToast, BImg,\n} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BToast,\n    BImg,\n  },\n   data() {\n    return {\n      visible: true,\n    }\n  },\n}\n<\/script>\n\n<style lang="scss" scoped>\n.translucent-wrap {\n  height: 110px;\n  position: relative;\n}\n</style>\n'}}},f=(n(1258),Object(d.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card-code",{attrs:{"no-body":"",title:"Translucent"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeTranslucent)+"\n  ")]},proxy:!0}])},[a("b-card-body",[a("b-card-text",[a("span",[t._v("we are using the ")]),t._v(" "),a("code",[t._v("static")]),t._v(" "),a("span",[t._v("\n        prop in the above example to render the toast in-place in the document, rather than transporting it to a\n      ")]),t._v(" "),a("code",[t._v("<b-toaster>")]),t._v(" "),a("span",[t._v(" target container")])])],1),t._v(" "),a("div",{staticClass:"translucent-wrap bg-primary rounded-bottom p-1"},[a("b-toast",{attrs:{id:"example-toast3",static:"","no-auto-hide":""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("div",{staticClass:"d-flex flex-grow-1 align-items-center mr-1"},[a("b-img",{staticClass:"mr-1",attrs:{src:n(308),height:"18",width:"25",alt:"Toast image"}}),t._v(" "),a("strong",{staticClass:"mr-auto"},[t._v("Vue Admin")]),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("11 mins ago")])],1)]},proxy:!0}]),model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t._v(" "),a("span",[t._v("Hello, world! This is a toast message.")])])],1)],1)}),[],!1,null,"1033ec18",null).exports),g={components:{BCardCode:o.a,BToast:c.a,BButton:s.a,BImg:l.a,BCardText:i.a},directives:{Ripple:u.a},data:function(){return{codeToastDelay:'\n<template>\n  <div>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="$bvToast.show(\'example-toast5\')"\n    >\n      Delay\n    </b-button>\n\n    \x3c!-- toast --\x3e\n    <b-toast\n      id="example-toast5"\n      auto-hide-delay="10000"\n    >\n      <template #toast-title>\n        <div class="d-flex flex-grow-1 align-items-center mr-25">\n          <b-img\n            :src="require(\'@/assets/images/logo/logo.png\')"\n            class="rounded mr-2"\n            height="18"\n            width="25"\n            alt="Toast image"\n          />\n          <strong class="mr-auto">Vue Admin</strong>\n          <small class="text-muted">11 mins ago</small>\n        </div>\n      </template>\n      <span>Hello, world! This is a toast message.</span>\n    </b-toast>\n  </div>\n</template>\n\n<script>\nimport { BToast, BButton, BImg } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BToast,\n    BButton,\n    BImg,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n'}}},h=Object(d.a)(g,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card-code",{attrs:{title:"Delay"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeToastDelay)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[t._v("Change to auto hide delay time via the ")]),t._v(" "),a("code",[t._v("auto-hide-delay")]),t._v(" "),a("span",[t._v(" prop (value is in milliseconds), which defaults to ")]),t._v(" "),a("code",[t._v("5000")]),t._v(" "),a("span",[t._v(" (minimum value ")]),t._v(" "),a("code",[t._v("1000")]),t._v(" "),a("span",[t._v("). Or, disable the auto-hide feature completely by setting the ")]),t._v(" "),a("code",[t._v("no-auto-hide")]),t._v(" "),a("span",[t._v(" prop to ")]),t._v(" "),a("code",[t._v("true")])]),t._v(" "),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.$bvToast.show("example-toast5")}}},[t._v("\n      Delay\n    ")]),t._v(" "),a("b-toast",{attrs:{id:"example-toast5","auto-hide-delay":"10000"},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("div",{staticClass:"d-flex flex-grow-1 align-items-center mr-25"},[a("b-img",{staticClass:"rounded mr-2",attrs:{src:n(308),height:"18",width:"25",alt:"Toast image"}}),t._v(" "),a("strong",{staticClass:"mr-auto"},[t._v("Vue Admin")]),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("11 mins ago")])],1)]},proxy:!0}])},[t._v(" "),a("span",[t._v("Hello, world! This is a toast message.")])])],1)],1)}),[],!1,null,null,null).exports,_={components:{BCardCode:o.a,BButton:s.a,BCardText:i.a},directives:{Ripple:u.a},data:function(){return{counter:0,codeTarget:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-top-right\')"\n    >\n      b-toaster-top-right\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-top-left\')"\n    >\n      b-toaster-top-left\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-top-center\')"\n    >\n      b-toaster-top-center\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-top-full\')"\n    >\n      b-toaster-top-full\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-bottom-right\', true)"\n    >\n      b-toaster-bottom-right\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-bottom-left\', true)"\n    >\n      b-toaster-bottom-left\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-bottom-center\', true)"\n    >\n      b-toaster-bottom-center\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-bottom-full\', true)"\n    >\n      b-toaster-bottom-full\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButton,\n  },\n  data: () => ({\n    counter: 0,\n  }),\n  directives: {\n    Ripple,\n  },\n  methods: {\n    toast(toaster, append = false) {\n      this.counter += 1\n      this.$bvToast.toast(`Toast ${this.counter} body content` {\n        title: `Toaster ${toaster}`,\n        toaster,\n        solid: true,\n        appendToast: append,\n      })\n    },\n  },\n}\n<\/script>\n'}},methods:{toast:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.counter+=1,this.$bvToast.toast("Toast ".concat(this.counter," body content"),{title:"Toaster ".concat(t),toaster:t,solid:!1,appendToast:e})}}},y=Object(d.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Toaster target"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeTarget)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[t._v('BootstrapVue comes with the following "built-in" toaster names (and associated styles defined in SCSS): ')]),t._v(" "),n("code",[t._v("b-toaster-top-right, b-toaster-top-left, b-toaster-top-center, b-toaster-top-full, b-toaster-bottom-right,\n      b-toaster-bottom-left, b-toaster-bottom-center, b-toaster-bottom-full\n    ")])]),t._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-top-right")}}},[t._v("\n      b-toaster-top-right\n    ")]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-top-left")}}},[t._v("\n      b-toaster-top-left\n    ")]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-top-center")}}},[t._v("\n      b-toaster-top-center\n    ")]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-top-full")}}},[t._v("\n      b-toaster-top-full\n    ")]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-bottom-right",!0)}}},[t._v("\n      b-toaster-bottom-right\n    ")]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-bottom-left",!0)}}},[t._v("\n      b-toaster-bottom-left\n    ")]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-bottom-center",!0)}}},[t._v("\n      b-toaster-bottom-center\n    ")]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-bottom-full",!0)}}},[t._v("\n      b-toaster-bottom-full\n    ")])],1)],1)}),[],!1,null,null,null).exports,x={components:{BCardCode:o.a,BButton:s.a,BCardText:i.a},directives:{Ripple:u.a},data:function(){return{codeVariant:'\n<template>\n  <div class="demo-inline-spacing">\n\n    \x3c!-- default --\x3e\n    <b-button\n      variant="gradient-primary"\n      @click="makeToast()"\n    >\n      Default\n    </b-button>\n\n    \x3c!-- primary --\x3e\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="makeToast(\'primary\')"\n    >\n      Primary\n    </b-button>\n\n    \x3c!-- secondary --\x3e\n    <b-button\n      v-ripple.400="\'rgba(186, 191, 199, 0.15)\'"\n      variant="outline-secondary"\n      @click="makeToast(\'secondary\')"\n    >\n      Secondary\n    </b-button>\n\n    \x3c!-- warning --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n      variant="outline-warning"\n      @click="makeToast(\'warning\')"\n    >\n      Warning\n    </b-button>\n\n    \x3c!-- danger --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n      variant="outline-danger"\n      @click="makeToast(\'danger\')"\n    >\n      Danger\n    </b-button>\n\n    \x3c!-- success --\x3e\n    <b-button\n      v-ripple.400="\'rgba(40, 199, 111, 0.15)\'"\n      variant="outline-success"\n      @click="makeToast(\'success\')"\n    >\n      Success\n    </b-button>\n\n    \x3c!-- info --\x3e\n    <b-button\n      v-ripple.400="\'rgba(0, 207, 232, 0.15)\'"\n      variant="outline-info"\n      @click="makeToast(\'info\')"\n    >\n      Info\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    makeToast(variant = null) {\n      this.$bvToast.toast(\'Toast body content\', {\n        title: `Variant ${variant || \'default\'}`,\n        variant,\n        solid: true,\n      })\n    },\n  },\n}\n<\/script>\n'}},methods:{makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Toast body content",{title:"Variant ".concat(t||"default"),variant:t,solid:!1})}}},O=Object(d.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Variants"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeVariant)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[t._v("\n    BootstrapVue toasts provide custom CSS to define color variants. Variants follow the standard Bootstrap v4 variant\n    names. If you have custom SCSS defined Bootstrap color theme variants, the toast custom SCSS will automatically\n    create toast variants for you (refer to the Theming reference section).\n  ")]),t._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-button",{attrs:{variant:"gradient-primary"},on:{click:function(e){return t.makeToast()}}},[t._v("\n      Default\n    ")]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.makeToast("primary")}}},[t._v("\n      Primary\n    ")]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-secondary"},on:{click:function(e){return t.makeToast("secondary")}}},[t._v("\n      Secondary\n    ")]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 159, 67, 0.15)",expression:"'rgba(255, 159, 67, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-warning"},on:{click:function(e){return t.makeToast("warning")}}},[t._v("\n      Warning\n    ")]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 159, 67, 0.15)",expression:"'rgba(255, 159, 67, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-danger"},on:{click:function(e){return t.makeToast("danger")}}},[t._v("\n      Danger\n    ")]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(40, 199, 111, 0.15)",expression:"'rgba(40, 199, 111, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-success"},on:{click:function(e){return t.makeToast("success")}}},[t._v("\n      Success\n    ")]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0, 207, 232, 0.15)",expression:"'rgba(0, 207, 232, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-info"},on:{click:function(e){return t.makeToast("info")}}},[t._v("\n      Info\n    ")])],1)],1)}),[],!1,null,null,null).exports,w={components:{BCardCode:o.a,BButton:s.a,BCardText:i.a},directives:{Ripple:u.a},data:function(){return{codeLinks:"\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"toast()\"\n    >\n      Toast with link\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    toast() {\n      this.$bvToast.toast('Toast with action link', {\n        href: '#foo',\n        title: 'Example',\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{toast:function(){this.$bvToast.toast("Toast with action link",{href:"#foo",title:"Toast Link"})}}},T=Object(d.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Links"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeLinks)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("Optionally convert the toast body to a link (")]),t._v(" "),n("code",[t._v("<a>")]),t._v(" "),n("span",[t._v(") or ")]),t._v(" "),n("code",[t._v("<router-link>")]),t._v(" "),n("span",[t._v(" (or ")]),t._v(" "),n("code",[t._v("<nuxt-link>")]),t._v(" "),n("span",[t._v(") via the href and to props respectively. When set, the entire toast body becomes a link.")])]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast()}}},[t._v("\n    Toast with link\n  ")])],1)}),[],!1,null,null,null).exports,j=n(539),k={components:{BCardCode:o.a,BButton:s.a,BCardText:i.a,BSpinner:j.a},directives:{Ripple:u.a},data:function(){return{count:0,codeAdvance:"\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"popToast\"\n    >\n      Show Toast with custom content\n    </b-button>\n  </div>\n</template>\n\n<script>\n// eslint-disable-next-line\nimport { BButton, BSpinner } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    // eslint-disable-next-line\n    BSpinner,\n  },\n  directives: {\n    Ripple,\n  },\n  data: () => ({\n    count: 0,\n  }),\n  methods: {\n    popToast() {\n      // Use a shorter name for this.$createElement\n      const h = this.$createElement\n      // Increment the toast count\n      this.count += 1\n      // Create the message\n      const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [\n        h('b-spinner', { props: { type: 'grow', small: true } }),\n        ' Flashy ',\n        h('strong', 'toast'),\n        `message #${this.count}`,\n        h('b-spinner', { props: { type: 'grow', small: true } }),\n      ])\n      // Create the title\n      const vNodesTitle = h('div', { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] }, [\n        h('strong', { class: 'mr-2' }, 'The Title'),\n        h('small', { class: 'ml-auto font-italics' }, '5 minutes ago'),\n      ])\n      // Pass the VNodes as an array for message and title\n      this.$bvToast.toast([vNodesMsg], {\n        title: [vNodesTitle],\n        solid: true,\n        variant: 'info',\n      })\n    },\n  },\n}\n<\/script>\n"}},methods:{popToast:function(){var t=this.$createElement;this.count+=1;var e=t("p",{class:["text-center","mb-0"]},[t("b-spinner",{props:{type:"grow",small:!0}})," Flashy ",t("strong","toast")," message #".concat(this.count," "),t("b-spinner",{props:{type:"grow",small:!0}})]),n=t("div",{class:["d-flex","flex-grow-1","align-items-baseline","mr-2"]},[t("strong",{class:"mr-2"},"The Title"),t("small",{class:"ml-auto font-italics"},"5 minutes ago")]);this.$bvToast.toast([e],{title:[n],solid:!1,variant:"info"})}}},B=Object(d.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Advanced usage"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v("\n    "+t._s(t.codeAdvance)+"\n  ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("When using the ")]),t._v(" "),n("code",[t._v("this.$bvToast.toast(...)")]),t._v(" "),n("span",[t._v("\n      method for generating toasts, you may want the toast content to be more than just a string message. As mentioned\n      in the Toasts on demand section above, you can pass arrays of\n    ")]),t._v(" "),n("code",[t._v("VNodes")]),t._v(" "),n("span",[t._v(" as the message and title for more complex content.")])]),t._v(" "),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.popToast}},[t._v("\n    Show Toast with custom content\n  ")])],1)}),[],!1,null,null,null).exports,C={components:{BRow:a.a,BCol:r.a,ToastsBasic:b,ToastsTranslucent:f,ToastsDelay:h,ToastsTarget:y,ToastsVariants:O,ToastsLinks:T,ToastsAdvance:B}},S=Object(d.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("toasts-basic"),this._v(" "),e("toasts-translucent"),this._v(" "),e("toasts-variants"),this._v(" "),e("toasts-delay"),this._v(" "),e("toasts-target"),this._v(" "),e("toasts-links"),this._v(" "),e("toasts-advance")],1)],1)}),[],!1,null,null,null);e.default=S.exports},349:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var a=n(48),r=n(5),o=n(2),s=n(43),i=n(23),c=n(67),l=n(35),u=n(7),p=n(205),d=n(13),b=n(1),v=n(27);function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h=["auto","start","end","center","baseline","stretch"],_=Object(p.a)((function(t,e,n){var a=t;if(!Object(u.p)(n)&&!1!==n)return e&&(a+="-".concat(e)),"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),Object(v.c)(a)):Object(v.c)(a)})),y=Object(d.c)(null),x={name:r.y,functional:!0,get props(){return delete this.props,this.props=(t=Object(c.b)().filter(l.a),e=t.reduce((function(t,e){return t[e]=Object(b.c)(o.i),t}),Object(d.c)(null)),n=t.reduce((function(t,e){return t[Object(b.g)(e,"offset")]=Object(b.c)(o.p),t}),Object(d.c)(null)),a=t.reduce((function(t,e){return t[Object(b.g)(e,"order")]=Object(b.c)(o.p),t}),Object(d.c)(null)),y=Object(d.a)(Object(d.c)(null),{col:Object(d.h)(e),offset:Object(d.h)(n),order:Object(d.h)(a)}),Object(b.d)(Object(d.m)(f(f(f(f({},e),n),a),{},{alignSelf:Object(b.c)(o.u,null,(function(t){return Object(i.a)(h,t)})),col:Object(b.c)(o.g,!1),cols:Object(b.c)(o.p),offset:Object(b.c)(o.p),order:Object(b.c)(o.p),tag:Object(b.c)(o.u,"div")})),r.y));var t,e,n,a},render:function(t,e){var n,r=e.props,o=e.data,i=e.children,c=r.cols,l=r.offset,u=r.order,p=r.alignSelf,d=[];for(var b in y)for(var v=y[b],m=0;m<v.length;m++){var f=_(b,v[m].replace(b,""),r[v[m]]);f&&d.push(f)}var h=d.some((function(t){return s.e.test(t)}));return d.push((g(n={col:r.col||!h&&!c},"col-".concat(c),c),g(n,"offset-".concat(l),l),g(n,"order-".concat(u),u),g(n,"align-self-".concat(p),p),n)),t(r.tag,Object(a.a)(o,{class:d}),i)}}},4:function(t,e,n){"use strict";var a=n(16);e.a=a.a},528:function(t,e,n){var a=n(1053);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(21)(a,r);a.locals&&(t.exports=a.locals)},539:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n(8),r=n(48),o=n(5),s=n(2),i=n(20),c=n(70),l=n(1);function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=Object(l.d)({label:Object(l.c)(s.u),role:Object(l.c)(s.u,"status"),small:Object(l.c)(s.g,!1),tag:Object(l.c)(s.u,"span"),type:Object(l.c)(s.u,"border"),variant:Object(l.c)(s.u)},o.Qb),d=Object(a.c)({name:o.Qb,functional:!0,props:p,render:function(t,e){var n,a=e.props,o=e.data,s=e.slots,l=e.scopedSlots,p=s(),d=l||{},b=Object(c.b)(i.C,{},d,p)||a.label;return b&&(b=t("span",{staticClass:"sr-only"},b)),t(a.tag,Object(r.a)(o,{attrs:{role:b?a.role||"status":null,"aria-hidden":b?null:"true"},class:(n={},u(n,"spinner-".concat(a.type),a.type),u(n,"spinner-".concat(a.type,"-sm"),a.small),u(n,"text-".concat(a.variant),a.variant),n)}),[b||t()])}})},646:function(t,e,n){var a=n(1259);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(21)(a,r);a.locals&&(t.exports=a.locals)}}]);