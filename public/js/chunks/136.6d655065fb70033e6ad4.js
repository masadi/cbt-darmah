(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1111:function(e,a,o){"use strict";o(578)},1112:function(e,a,o){(a=o(19)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=a},18:function(e,a,o){"use strict";o(87);var c=o(1990),t=o(382),n=o(384),r=o(383),l=o(2008),i=(o(205),o(221),o(119)),p=o.n(i),s={components:{BCard:c.a,BCardTitle:t.a,BCardSubTitle:n.a,BCardBody:r.a,BCollapse:l.a,Prism:p.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},d=(o(1111),o(0)),u=Object(d.a)(s,(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[o("div",{staticClass:"card-header"},[o("div",[o("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?o("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),o("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(a){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),o("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(a){e.code_visible=a},expression:"code_visible"}},[o("b-card-body",[o("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:o("b-card-body",[e._t("default"),e._v(" "),o("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(a){e.code_visible=a},expression:"code_visible"}},[o("div",{staticClass:"p-1"}),e._v(" "),o("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);a.a=u.exports},185:function(e,a,o){"use strict";o(55);var c=o(2021),t={props:{accordion:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},type:{type:String,default:"default"}},data:function(){return{collapseID:""}},computed:{collapseClasses:function(){var e=[];return e.push({default:"collapse-default",border:"collapse-border",shadow:"collapse-shadow",margin:"collapse-margin"}[this.type]),e}},created:function(){this.collapseID=Object(c.a)()}},n=o(0),r=Object(n.a)(t,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"collapse-icon",class:this.collapseClasses,attrs:{role:"tablist"}},[this._t("default")],2)}),[],!1,null,null,null);a.a=r.exports},186:function(e,a,o){"use strict";var c=o(1990),t=o(385),n=o(383),r=o(2008),l=o(2021),i={components:{BCard:c.a,BCardHeader:t.a,BCardBody:n.a,BCollapse:r.a},props:{isVisible:{type:Boolean,default:!1},title:{type:String,required:!0}},data:function(){return{visible:!1,collapseItemID:"",openOnHover:this.$parent.hover}},computed:{accordion:function(){return this.$parent.accordion?"accordion-".concat(this.$parent.collapseID):null}},created:function(){this.collapseItemID=Object(l.a)(),this.visible=this.isVisible},methods:{updateVisible:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.visible=e,this.$emit("visible",e)},collapseOpen:function(){this.openOnHover&&this.updateVisible(!0)},collapseClose:function(){this.openOnHover&&this.updateVisible(!1)}}},p=o(0),s=Object(p.a)(i,(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("b-card",{class:{open:e.visible},attrs:{"no-body":""},on:{mouseenter:e.collapseOpen,mouseleave:e.collapseClose}},[o("b-card-header",{class:{collapsed:!e.visible},attrs:{"aria-expanded":e.visible?"true":"false","aria-controls":e.collapseItemID,role:"tab","data-toggle":"collapse"},on:{click:function(a){return e.updateVisible(!e.visible)}}},[e._t("header",[o("span",{staticClass:"lead collapse-title"},[e._v(e._s(e.title))])])],2),e._v(" "),o("b-collapse",{attrs:{id:e.collapseItemID,accordion:e.accordion,role:"tabpanel"},model:{value:e.visible,callback:function(a){e.visible=a},expression:"visible"}},[o("b-card-body",[e._t("default")],2)],1)],1)}),[],!1,null,null,null);a.a=s.exports},1988:function(e,a,o){"use strict";o.d(a,"a",(function(){return h}));var c=o(57),t=o(5),n=o(2),r=o(27),l=o(80),i=o(39),p=o(236),s=o(13),d=o(1),u=o(31);function m(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);a&&(c=c.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,c)}return o}function f(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?m(Object(o),!0).forEach((function(a){b(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function b(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}var g=["start","end","center"],y=Object(p.a)((function(e,a){return(a=Object(u.h)(Object(u.g)(a)))?Object(u.c)(["row-cols",e,a].filter(i.a).join("-")):null})),k=Object(p.a)((function(e){return Object(u.c)(e.replace("cols",""))})),v=[],h={name:t.Ob,functional:!0,get props(){var e;return delete this.props,this.props=(e=Object(l.b)().reduce((function(e,a){return e[Object(d.g)(a,"cols")]=Object(d.c)(n.p),e}),Object(s.c)(null)),v=Object(s.h)(e),Object(d.d)(Object(s.m)(f(f({},e),{},{alignContent:Object(d.c)(n.u,null,(function(e){return Object(r.a)(Object(r.b)(g,"between","around","stretch"),e)})),alignH:Object(d.c)(n.u,null,(function(e){return Object(r.a)(Object(r.b)(g,"between","around"),e)})),alignV:Object(d.c)(n.u,null,(function(e){return Object(r.a)(Object(r.b)(g,"baseline","stretch"),e)})),noGutters:Object(d.c)(n.g,!1),tag:Object(d.c)(n.u,"div")})),t.Ob)),this.props},render:function(e,a){var o,t=a.props,n=a.data,r=a.children,l=t.alignV,i=t.alignH,p=t.alignContent,s=[];return v.forEach((function(e){var a=y(k(e),t[e]);a&&s.push(a)})),s.push((b(o={"no-gutters":t.noGutters},"align-items-".concat(l),l),b(o,"justify-content-".concat(i),i),b(o,"align-content-".concat(p),p),o)),e(t.tag,Object(c.a)(n,{staticClass:"row",class:s}),r)}}},1989:function(e,a,o){"use strict";o.d(a,"a",(function(){return p}));var c=o(8),t=o(57),n=o(5),r=o(2),l=o(1),i=Object(l.d)({textTag:Object(l.c)(r.u,"p")},n.u),p=Object(c.c)({name:n.u,functional:!0,props:i,render:function(e,a){var o=a.props,c=a.data,n=a.children;return e(o.textTag,Object(t.a)(c,{staticClass:"card-text"}),n)}})},2021:function(e,a,o){"use strict";var c,t=new Uint8Array(16);function n(){if(!c&&!(c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(t)}var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var l=function(e){return"string"==typeof e&&r.test(e)},i=[],p=0;p<256;++p)i.push((p+256).toString(16).substr(1));var s=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(i[e[a+0]]+i[e[a+1]]+i[e[a+2]]+i[e[a+3]]+"-"+i[e[a+4]]+i[e[a+5]]+"-"+i[e[a+6]]+i[e[a+7]]+"-"+i[e[a+8]]+i[e[a+9]]+"-"+i[e[a+10]]+i[e[a+11]]+i[e[a+12]]+i[e[a+13]]+i[e[a+14]]+i[e[a+15]]).toLowerCase();if(!l(o))throw TypeError("Stringified UUID is invalid");return o};a.a=function(e,a,o){var c=(e=e||{}).random||(e.rng||n)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,a){o=o||0;for(var t=0;t<16;++t)a[o+t]=c[t];return a}return s(c)}},2097:function(e,a,o){"use strict";o.r(a);var c=o(1988),t=o(395),n=o(1989),r=o(4),l=o(185),i=o(186),p={components:{BCardCode:r.a,BCardText:n.a,AppCollapse:l.a,AppCollapseItem:i.a},data:function(){return{codeAccordionDefault:'\n<template>\n  <app-collapse accordion>\n    <app-collapse-item title="Accordion Item 1">\n      Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n    </app-collapse-item>\n    <app-collapse-item title="Accordion Item 2">\n      Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n    </app-collapse-item>\n    <app-collapse-item title="Accordion Item 3">\n      Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n    </app-collapse-item>\n    <app-collapse-item title="Accordion Item 4">\n      Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n    </app-collapse-item>\n  </app-collapse>\n</template>\n\n<script>\nimport AppCollapse from \'@core/components/app-collapse/AppCollapse.vue\'\nimport AppCollapseItem from \'@core/components/app-collapse/AppCollapseItem.vue\'\n\nexport default {\n  components: {\n    AppCollapse,\n    AppCollapseItem,\n  },\n}\n<\/script>\n'}}},s=o(0),d=Object(s.a)(p,(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"mb-1"},[o("b-card-code",{attrs:{title:"Accordion"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n      "+e._s(e.codeAccordionDefault)+"\n    ")]},proxy:!0}])},[o("b-card-text",[o("span",[e._v("Turn a group of ")]),e._v(" "),o("code",[e._v("<app-collapse>")]),e._v(" "),o("span",[e._v(" components into an accordion by supplying an accordion group identifier via the ")]),e._v(" "),o("code",[e._v("accordion")]),e._v(" "),o("span",[e._v(" prop. Note that only one collapse in an accordion group can be open at a time.")])]),e._v(" "),o("app-collapse",{attrs:{accordion:""}},[o("app-collapse-item",{attrs:{title:"Accordion Item 1"}},[e._v("\n        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n      ")]),e._v(" "),o("app-collapse-item",{attrs:{title:"Accordion Item 2"}},[e._v("\n        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n      ")]),e._v(" "),o("app-collapse-item",{attrs:{title:"Accordion Item 3"}},[e._v("\n        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n      ")]),e._v(" "),o("app-collapse-item",{attrs:{title:"Accordion Item 4"}},[e._v("\n        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,u={components:{BCardCode:r.a,AppCollapse:l.a,AppCollapseItem:i.a,BCardText:n.a},data:function(){return{codeCollapseDefault:'\n<template>\n  <app-collapse>\n\n    <app-collapse-item title="Collapse Item 1">\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie\n      brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly\n      marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly\n      beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    </app-collapse-item>\n\n    <app-collapse-item title="Collapse Item 2">\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie\n      brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly\n      marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly\n      beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    </app-collapse-item>\n\n    <app-collapse-item title="Collapse Item 3">\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie\n      brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly\n      marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly\n      beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    </app-collapse-item>\n\n    <app-collapse-item title="Collapse Item 4">\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie\n      brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly\n      marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly\n      beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    </app-collapse-item>\n  </app-collapse>\n</template>\n\n<script>\nimport AppCollapse from \'@core/components/app-collapse/AppCollapse.vue\'\nimport AppCollapseItem from \'@core/components/app-collapse/AppCollapseItem.vue\'\n\nexport default {\n  components: {\n    AppCollapse,\n    AppCollapseItem,\n  },\n}\n<\/script>\n'}}},m=Object(s.a)(u,(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("b-card-code",{attrs:{title:"Default"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeCollapseDefault)+"\n  ")]},proxy:!0}])},[o("b-card-text",[o("span",[e._v("Use ")]),e._v(" "),o("code",[e._v("app-collapse")]),e._v(" "),o("span",[e._v("\n      component to easily toggle visibility of almost any content on your pages. Includes support for making\n      accordions.\n    ")])]),e._v(" "),o("app-collapse",[o("app-collapse-item",{attrs:{title:"Collapse Item 1"}},[e._v("\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie\n      brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly\n      marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly\n      beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    ")]),e._v(" "),o("app-collapse-item",{attrs:{title:"Collapse Item 2"}},[e._v("\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie\n      brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly\n      marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly\n      beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    ")]),e._v(" "),o("app-collapse-item",{attrs:{title:"Collapse Item 3"}},[e._v("\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie\n      brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly\n      marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly\n      beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    ")]),e._v(" "),o("app-collapse-item",{attrs:{title:"Collapse Item 4"}},[e._v("\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie\n      brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly\n      marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly\n      beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    ")])],1)],1)}),[],!1,null,null,null).exports,f=o(110),b=o(1990),g=o(2008),y=o(612),k=o(11),v={components:{BCardCode:r.a,BButton:f.a,BCardText:n.a,BCard:b.a,BCollapse:g.a},directives:{"b-toggle":y.a,Ripple:k.a},data:function(){return{codeCollapseBoostrapVue:'\n<template>\n  <div>\n    \x3c!-- toggle button --\x3e\n    <b-button v-ripple.400="\'rgba(113, 102, 240, 0.15)\'" v-b-toggle.collapse-1 variant="outline-primary">\n      Toggle Collapse\n    </b-button>\n\n    <b-collapse id="collapse-1" class="mt-2">\n      <b-card class="border mb-0">\n        <b-card-text class="card-text">\n          Collapse contents Here\n        </b-card-text>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          v-b-toggle.collapse-1-inner\n          size="sm"\n          variant="outline-primary"\n        >\n          Toggle Inner Collapse\n        </b-button>\n        <b-collapse\n          id="collapse-1-inner"\n          class="mt-2"\n        >\n          <b-card class="border mb-0">\n            Hello!\n          </b-card>\n        </b-collapse>\n      </b-card>\n    </b-collapse>\n  </div>\n</template>\n\n<script>\nimport { BCollapse, BButton, VBToggle, BCard} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButton,\n    BCard,\n    BCollapse,\n  },\n  directives: {\n    \'b-toggle\': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n'}}},h=Object(s.a)(v,(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("b-card-code",{attrs:{title:"Bootsrap-vue Collapse"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeCollapseBoostrapVue)+"\n  ")]},proxy:!0}])},[o("b-card-text",[e._v("Easily toggle visibility of almost any content on your pages. Includes support for making accordions.")]),e._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],attrs:{variant:"outline-primary"}},[e._v("\n    Toggle Collapse\n  ")]),e._v(" "),o("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1"}},[o("b-card",{staticClass:"border mb-0"},[o("b-card-text",{staticClass:"card-text"},[e._v("\n        Collapse contents Here\n      ")]),e._v(" "),o("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.collapse-1-inner",modifiers:{"collapse-1-inner":!0}}],attrs:{size:"sm",variant:"outline-primary"}},[e._v("\n        Toggle Inner Collapse\n      ")]),e._v(" "),o("b-collapse",{staticClass:"mt-2",attrs:{id:"collapse-1-inner"}},[o("b-card",{staticClass:"border mb-0"},[e._v("\n          Hello!\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,w={components:{BCardCode:r.a,AppCollapse:l.a,AppCollapseItem:i.a,BCardText:n.a},data:function(){return{codeHover:'\n<template>\n  <app-collapse hover>\n\n    <app-collapse-item title="Accordion Item 1">\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    </app-collapse-item>\n\n    <app-collapse-item title="Accordion Item 2">\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    </app-collapse-item>\n\n    <app-collapse-item title="Accordion Item 3">\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    </app-collapse-item>\n\n    <app-collapse-item title="Accordion Item 4">\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    </app-collapse-item>\n  </app-collapse>\n</template>\n\n<script>\nimport AppCollapse from \'@core/components/app-collapse/AppCollapse.vue\'\nimport AppCollapseItem from \'@core/components/app-collapse/AppCollapseItem.vue\'\n\nexport default {\n  components: {\n    AppCollapse,\n    AppCollapseItem,\n  },\n}\n<\/script>\n'}}},C=Object(s.a)(w,(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("b-card-code",{attrs:{title:"Hover"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeHover)+"\n  ")]},proxy:!0}])},[o("b-card-text",[o("span",[e._v("To create a collapse which opens on hover use prop")]),e._v(" "),o("code",[e._v("hover")]),e._v(" "),o("span",[e._v("with")]),e._v(" "),o("code",[e._v("<app-collapse>")]),e._v(" "),o("span",[e._v("components.")])]),e._v(" "),o("app-collapse",{attrs:{hover:""}},[o("app-collapse-item",{attrs:{title:"Accordion Item 1"}},[e._v("\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    ")]),e._v(" "),o("app-collapse-item",{attrs:{title:"Accordion Item 2"}},[e._v("\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    ")]),e._v(" "),o("app-collapse-item",{attrs:{title:"Accordion Item 3"}},[e._v("\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    ")]),e._v(" "),o("app-collapse-item",{attrs:{title:"Accordion Item 4"}},[e._v("\n      Pie dragée muffin. Donut cake liquorice marzipan carrot cake topping powder candy. Sugar plum brownie brownie cotton candy. Tootsie roll cotton candy pudding bonbon chocolate cake lemon drops candy. Jelly marshmallow chocolate cake carrot cake bear claw ice cream chocolate. Fruitcake apple pie pudding jelly beans pie candy canes candy canes jelly-o. Tiramisu brownie gummi bears soufflé dessert cake.\n    ")])],1)],1)}),[],!1,null,null,null).exports,_=o(2011),j=o(592),O=o(2039),T={components:{BCardCode:r.a,AppCollapse:l.a,AppCollapseItem:i.a,BFormRadioGroup:_.a,BFormRadio:j.a,BCardText:n.a,BFormGroup:O.a},data:function(){return{collapseType:"default",codeCollapseTypes:'\n<template>\n  <div>\n    \x3c!-- radio button --\x3e\n    <b-form-group>\n      <b-form-radio-group\n        id="radio-group-2"\n        v-model="collapseType"\n        name="radio-sub-component"\n        class="demo-inline-spacing"\n      >\n        <b-form-radio value="default">\n          Default\n        </b-form-radio>\n        <b-form-radio value="shadow">\n          Shadow\n        </b-form-radio>\n        <b-form-radio value="margin">\n          Margin\n        </b-form-radio>\n        <b-form-radio value="border">\n          Border\n        </b-form-radio>\n      </b-form-radio-group>\n    </b-form-group>\n\n    \x3c!-- types --\x3e\n    <app-collapse\n      accordion\n      :type="collapseType"\n    >\n\n      <app-collapse-item title="Accordion Item 1">\n        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n      </app-collapse-item>\n\n      <app-collapse-item title="Accordion Item 2">\n        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n      </app-collapse-item>\n\n      <app-collapse-item title="Accordion Item 3">\n        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n      </app-collapse-item>\n\n      <app-collapse-item title="Accordion Item 4">\n        Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n      </app-collapse-item>\n    </app-collapse>\n  </div>\n</template>\n\n<script>\nimport AppCollapse from \'@core/components/app-collapse/AppCollapse.vue\'\nimport AppCollapseItem from \'@core/components/app-collapse/AppCollapseItem.vue\'\nimport {  BFormRadioGroup, BFormRadio, BFormGroup} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    AppCollapse,\n    AppCollapseItem,\n    AppCollapseItemMargin,\n    BFormRadioGroup,\n    BFormRadio,\n    BFormGroup,\n  },\n  data: () => ({\n    collapseType: \'default\',\n  }),\n}\n<\/script>\n\n'}}},B=Object(s.a)(T,(function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("b-card-code",{attrs:{title:"Types"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeCollapseTypes)+"\n  ")]},proxy:!0}])},[o("b-card-text",{staticClass:"mb-0"},[e._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat dolores nostrum modi,\n    dolor, neque distinctio vel ut itaque numquam quos magni dolore ea earum tempore est excepturi perspiciatis, placeat odio.\n  ")]),e._v(" "),o("b-form-group",[o("b-form-radio-group",{staticClass:"demo-inline-spacing",attrs:{id:"radio-group-2",name:"radio-sub-component"},model:{value:e.collapseType,callback:function(a){e.collapseType=a},expression:"collapseType"}},[o("b-form-radio",{attrs:{value:"default"}},[e._v("\n        Default\n      ")]),e._v(" "),o("b-form-radio",{attrs:{value:"shadow"}},[e._v("\n        Shadow\n      ")]),e._v(" "),o("b-form-radio",{attrs:{value:"margin"}},[e._v("\n        Margin\n      ")]),e._v(" "),o("b-form-radio",{attrs:{value:"border"}},[e._v("\n        Border\n      ")])],1)],1),e._v(" "),o("app-collapse",{attrs:{accordion:"",type:e.collapseType}},[o("app-collapse-item",{attrs:{title:"Accordion Item 1"}},[e._v("\n      Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n    ")]),e._v(" "),o("app-collapse-item",{attrs:{title:"Accordion Item 2"}},[e._v("\n      Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n    ")]),e._v(" "),o("app-collapse-item",{attrs:{title:"Accordion Item 3"}},[e._v("\n      Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n    ")]),e._v(" "),o("app-collapse-item",{attrs:{title:"Accordion Item 4"}},[e._v("\n      Cheesecake cotton candy bonbon muffin cupcake tiramisu croissant. Tootsie roll sweet candy bear claw chupa chups lollipop toffee. Macaroon donut liquorice powder candy carrot cake macaroon fruitcake. Cookie toffee lollipop cotton candy ice cream dragée soufflé. Cake tiramisu lollipop wafer pie soufflé dessert tart. Biscuit ice cream pie apple pie topping oat cake dessert. Soufflé icing caramels. Chocolate cake icing ice cream macaroon pie cheesecake liquorice apple pie.\n    ")])],1)],1)}),[],!1,null,null,null).exports,I={components:{BRow:c.a,BCol:t.a,AccordionDefault:d,CollapseDefault:m,CollapseBoostrapVue:h,CollapseHover:C,CollapseTypes:B}},x=Object(s.a)(I,(function(){var e=this.$createElement,a=this._self._c||e;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("collapse-default"),this._v(" "),a("accordion-default"),this._v(" "),a("collapse-types"),this._v(" "),a("collapse-hover"),this._v(" "),a("collapse-boostrap-vue")],1)],1)}),[],!1,null,null,null);a.default=x.exports},4:function(e,a,o){"use strict";var c=o(18);a.a=c.a},578:function(e,a,o){var c=o(1112);"string"==typeof c&&(c=[[e.i,c,""]]);var t={hmr:!0,transform:void 0,insertInto:void 0};o(23)(c,t);c.locals&&(e.exports=c.locals)},612:function(e,a,o){"use strict";o.d(a,"a",(function(){return S}));var c=o(5),t=o(34),n=o(12),r=o(30),l=o(50),i=o(27),p=o(182),s=o(6),d=o(20),u=o(7),m=o(49),f=o(13),b=o(174),g="__BV_toggle",y="".concat(g,"_HANDLER__"),k="".concat(g,"_CLICK__"),v="".concat(g,"_STATE__"),h="".concat(g,"_TARGETS__"),w=Object(d.d)(c.z,"toggle"),C=Object(d.e)(c.z,"state"),_=Object(d.e)(c.z,"sync-state"),j=Object(d.d)(c.z,"request-state"),O=[r.e,r.l],T=function(e){return!Object(i.a)(["button","a"],e.tagName.toLowerCase())},B=function(e){var a=e[k];a&&(Object(d.a)(e,"click",a,n.eb),Object(d.a)(e,"keydown",a,n.eb)),e[k]=null},I=function(e,a){e[y]&&a&&Object(b.a)(a).$off([C,_],e[y]),e[y]=null},x=function(e,a){a?(Object(s.y)(e,"collapsed"),Object(s.b)(e,"not-collapsed"),Object(s.E)(e,"aria-expanded","true")):(Object(s.y)(e,"not-collapsed"),Object(s.b)(e,"collapsed"),Object(s.E)(e,"aria-expanded","false"))},A=function(e,a){e[a]=null,delete e[a]},q=function(e,a,o){if(t.i&&Object(p.a)(o,a)){T(e)&&(Object(s.o)(e,"role")||Object(s.E)(e,"role","button"),Object(s.o)(e,"tabindex")||Object(s.E)(e,"tabindex","0")),x(e,e[v]);var c=function(e,a){var o=e.modifiers,c=e.arg,t=e.value,n=Object(f.h)(o||{});if(t=Object(u.n)(t)?t.split(l.w):t,Object(s.t)(a.tagName,"a")){var r=Object(s.h)(a,"href")||"";l.m.test(r)&&n.push(r.replace(l.l,""))}return Object(i.b)(c,t).forEach((function(e){return Object(u.n)(e)&&n.push(e)})),n.filter((function(e,a,o){return e&&o.indexOf(e)===a}))}(a,e);c.length>0?(Object(s.E)(e,"aria-controls",c.join(" ")),Object(s.F)(e,"overflow-anchor","none")):(Object(s.x)(e,"aria-controls"),Object(s.A)(e,"overflow-anchor")),Object(s.B)((function(){!function(e,a){if(B(e),a){var o=function(o){"keydown"===o.type&&!Object(i.a)(O,o.keyCode)||Object(s.r)(e)||(e[h]||[]).forEach((function(e){Object(b.a)(a).$emit(w,e)}))};e[k]=o,Object(d.b)(e,"click",o,n.eb),T(e)&&Object(d.b)(e,"keydown",o,n.eb)}}(e,Object(p.a)(o,a))})),Object(m.a)(c,e[h])||(e[h]=c,c.forEach((function(e){Object(b.a)(Object(p.a)(o,a)).$emit(j,e)})))}},S={bind:function(e,a,o){e[v]=!1,e[h]=[],function(e,a){if(I(e,a),a){var o=function(a,o){Object(i.a)(e[h]||[],a)&&(e[v]=o,x(e,o))};e[y]=o,Object(b.a)(a).$on([C,_],o)}}(e,Object(p.a)(o,a)),q(e,a,o)},componentUpdated:q,updated:q,unbind:function(e,a,o){B(e),I(e,Object(p.a)(o,a)),A(e,y),A(e,k),A(e,v),A(e,h),Object(s.y)(e,"collapsed"),Object(s.y)(e,"not-collapsed"),Object(s.x)(e,"aria-expanded"),Object(s.x)(e,"aria-controls"),Object(s.x)(e,"role"),Object(s.A)(e,"overflow-anchor")}}}}]);