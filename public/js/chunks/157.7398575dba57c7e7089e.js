(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1027:function(a,e,n){"use strict";n(531)},1028:function(a,e,n){(e=n(21)(!1)).push([a.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),a.exports=e},16:function(a,e,n){"use strict";n(74);var r=n(1801),t=n(336),o=n(338),d=n(337),i=n(1815),s=(n(173),n(186),n(98)),c=n.n(s),l={components:{BCard:r.a,BCardTitle:t.a,BCardSubTitle:o.a,BCardBody:d.a,BCollapse:i.a,Prism:c.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var a=JSON.parse(JSON.stringify(this.$attrs));return delete a.title,delete a["sub-title"],a}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},u=(n(1027),n(0)),b=Object(u.a)(l,(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("b-card",a._g(a._b({attrs:{"no-body":""}},"b-card",a.cardAttrs,!1),a.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[a._v(a._s(a.$attrs.title))]),a._v(" "),a.$attrs["sub-title"]?n("b-card-sub-title",[a._v("\n        "+a._s(a.$attrs["sub-title"])+"\n      ")]):a._e()],1),a._v(" "),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":a.code_visible?"false":"true","aria-controls":a.parentID},on:{click:function(e){a.code_visible=!a.code_visible}}})]),a._v(" "),void 0!==a.$attrs["no-body"]?[a._t("default"),a._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:a.parentID,visible:a.code_visible},model:{value:a.code_visible,callback:function(e){a.code_visible=e},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:a.codeLanguage}},[a._t("code")],2)],1)],1)]:n("b-card-body",[a._t("default"),a._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:a.parentID,visible:a.code_visible},model:{value:a.code_visible,callback:function(e){a.code_visible=e},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),a._v(" "),n("prism",{attrs:{language:a.codeLanguage}},[a._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);e.a=b.exports},1799:function(a,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(8),t=n(48),o=n(5),d=n(2),i=n(1),s=Object(i.d)({textTag:Object(i.c)(d.u,"p")},o.u),c=Object(r.c)({name:o.u,functional:!0,props:s,render:function(a,e){var n=e.props,r=e.data,o=e.children;return a(n.textTag,Object(t.a)(r,{staticClass:"card-text"}),o)}})},1908:function(a,e,n){"use strict";n.r(e);var r=n(4),t=n(1837),o=n(545),d=n(1799),i=n(1820),s={components:{BCardCode:r.a,BFormGroup:t.a,BFormRadio:o.a,BCardText:d.a,BFormRadioGroup:i.a},data:function(){return{locale:this.$i18n.locale,codeChange:'\n<template>\n  <div>\n    \x3c!-- radio buttons --\x3e\n    <b-form-group class="mb-0">\n      <b-form-radio-group\n        id="radio-group-2"\n        v-model="locale"\n        name="radio-sub-component"\n        class="demo-inline-spacing"\n      >\n        <b-form-radio\n          value="en"\n        >\n          English\n        </b-form-radio>\n        <b-form-radio\n          value="fr"\n        >\n          French\n        </b-form-radio>\n        <b-form-radio\n          value="de"\n        >\n          German\n        </b-form-radio>\n        <b-form-radio value="pt">\n          Portuguese\n        </b-form-radio>\n      </b-form-radio-group>\n    </b-form-group>\n\n    \x3c!-- card --\x3e\n    <div class="border rounded mt-3 p-2">\n      <h5 class="mb-1">\n        {{ $t(\'message.title\') }}\n      </h5>\n      {{ $t(\'message.text\') }}\n    </div>\n  </div>\n</template>\n\n<script>\nimport {\n  BFormRadio, BFormRadioGroup, BFormGroup, BCardText,\n} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormGroup,\n    BFormRadio,\n    BCardText,\n    BFormRadioGroup,\n  },\n  data() {\n    return {\n      locale: this.$i18n.locale,\n    }\n  },\n  watch: {\n    locale(val) {\n      this.$i18n.locale = val\n    },\n  },\n}\n<\/script>\n'}},watch:{locale:function(a){this.$i18n.locale=a}}},c=n(0),l={components:{i18nChange:Object(c.a)(s,(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("b-card-code",{attrs:{title:"Change Locale"},scopedSlots:a._u([{key:"code",fn:function(){return[a._v("\n    "+a._s(a.codeChange)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[a._v("\n    Your Current Locale: "),n("strong",[a._v(a._s(a.locale))])]),a._v(" "),n("b-form-group",{staticClass:"mb-0"},[n("b-form-radio-group",{staticClass:"demo-inline-spacing",attrs:{id:"radio-group-2",name:"radio-sub-component"},model:{value:a.locale,callback:function(e){a.locale=e},expression:"locale"}},[n("b-form-radio",{attrs:{value:"en"}},[a._v("\n        English\n      ")]),a._v(" "),n("b-form-radio",{attrs:{value:"fr"}},[a._v("\n        French\n      ")]),a._v(" "),n("b-form-radio",{attrs:{value:"de"}},[a._v("\n        German\n      ")]),a._v(" "),n("b-form-radio",{attrs:{value:"pt"}},[a._v("\n        Portuguese\n      ")])],1)],1),a._v(" "),n("div",{staticClass:"border rounded mt-3 p-2"},[n("h5",{staticClass:"mb-1"},[a._v("\n      "+a._s(a.$t("message.title"))+"\n    ")]),a._v("\n    "+a._s(a.$t("message.text"))+"\n  ")])],1)}),[],!1,null,null,null).exports}},u=Object(c.a)(l,(function(){var a=this.$createElement;return(this._self._c||a)("i18n-change")}),[],!1,null,null,null);e.default=u.exports},4:function(a,e,n){"use strict";var r=n(16);e.a=r.a},531:function(a,e,n){var r=n(1028);"string"==typeof r&&(r=[[a.i,r,""]]);var t={hmr:!0,transform:void 0,insertInto:void 0};n(23)(r,t);r.locals&&(a.exports=r.locals)}}]);