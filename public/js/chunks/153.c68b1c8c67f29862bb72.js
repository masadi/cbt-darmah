(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{1058:function(e,t,n){"use strict";n(530)},1059:function(e,t,n){(t=n(19)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=t},16:function(e,t,n){"use strict";n(73);var a=n(1914),r=n(344),c=n(346),i=n(345),o=n(1933),l=(n(180),n(193),n(103)),s=n.n(l),d={components:{BCard:a.a,BCardTitle:r.a,BCardSubTitle:c.a,BCardBody:i.a,BCollapse:o.a,Prism:s.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},b=(n(1058),n(0)),g=Object(b.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?n("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:n("b-card-body",[e._t("default"),e._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),e._v(" "),n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=g.exports},1912:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(47),r=n(5),c=n(2),i=n(23),o=n(69),l=n(35),s=n(206),d=n(13),b=n(1),g=n(27);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=["start","end","center"],_=Object(s.a)((function(e,t){return(t=Object(g.h)(Object(g.g)(t)))?Object(g.c)(["row-cols",e,t].filter(l.a).join("-")):null})),O=Object(s.a)((function(e){return Object(g.c)(e.replace("cols",""))})),m=[],j={name:r.Ob,functional:!0,get props(){var e;return delete this.props,this.props=(e=Object(o.b)().reduce((function(e,t){return e[Object(b.g)(t,"cols")]=Object(b.c)(c.p),e}),Object(d.c)(null)),m=Object(d.h)(e),Object(b.d)(Object(d.m)(u(u({},e),{},{alignContent:Object(b.c)(c.u,null,(function(e){return Object(i.a)(Object(i.b)(f,"between","around","stretch"),e)})),alignH:Object(b.c)(c.u,null,(function(e){return Object(i.a)(Object(i.b)(f,"between","around"),e)})),alignV:Object(b.c)(c.u,null,(function(e){return Object(i.a)(Object(i.b)(f,"baseline","stretch"),e)})),noGutters:Object(b.c)(c.g,!1),tag:Object(b.c)(c.u,"div")})),r.Ob)),this.props},render:function(e,t){var n,r=t.props,c=t.data,i=t.children,o=r.alignV,l=r.alignH,s=r.alignContent,d=[];return m.forEach((function(e){var t=_(O(e),r[e]);t&&d.push(t)})),d.push((v(n={"no-gutters":r.noGutters},"align-items-".concat(o),o),v(n,"justify-content-".concat(l),l),v(n,"align-content-".concat(s),s),n)),e(r.tag,Object(a.a)(c,{staticClass:"row",class:d}),i)}}},1913:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(8),r=n(47),c=n(5),i=n(2),o=n(1),l=Object(o.d)({textTag:Object(o.c)(i.u,"p")},c.u),s=Object(a.c)({name:c.u,functional:!0,props:l,render:function(e,t){var n=t.props,a=t.data,c=t.children;return e(n.textTag,Object(r.a)(a,{staticClass:"card-text"}),c)}})},2011:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(540),c=n(1913),i={components:{BCardCode:a.a,BBadge:r.a,BCardText:c.a},data:function(){return{codePillContextual:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-badge pill variant="primary">Primary</b-badge>\n    <b-badge pill>Secondary</b-badge>\n    <b-badge pill variant="success">Success</b-badge>\n    <b-badge pill variant="danger">Danger</b-badge>\n    <b-badge pill variant="warning">Warning</b-badge>\n    <b-badge pill variant="info">Info</b-badge>\n    <b-badge pill variant="dark">Dark</b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n'}}},o=n(0),l=Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Contextual"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codePillContextual)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[e._v("Use the ")]),e._v(" "),n("code",[e._v("pill")]),e._v(" "),n("span",[e._v(" prop to make badges more rounded")]),e._v(" "),n("span",[e._v(" and use ")]),e._v(" "),n("code",[e._v("variant")]),e._v(" "),n("span",[e._v(" prop for badge color variantion.")])]),e._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-badge",{attrs:{pill:"",variant:"primary"}},[e._v("\n      Primary\n    ")]),e._v(" "),n("b-badge",{attrs:{pill:""}},[e._v("\n      Secondary\n    ")]),e._v(" "),n("b-badge",{attrs:{pill:"",variant:"success"}},[e._v("\n      Success\n    ")]),e._v(" "),n("b-badge",{attrs:{pill:"",variant:"danger"}},[e._v("\n      Danger\n    ")]),e._v(" "),n("b-badge",{attrs:{pill:"",variant:"warning"}},[e._v("\n      Warning\n    ")]),e._v(" "),n("b-badge",{attrs:{pill:"",variant:"info"}},[e._v("\n      Info\n    ")]),e._v(" "),n("b-badge",{attrs:{pill:"",variant:"dark"}},[e._v("\n      Dark\n    ")])],1)],1)}),[],!1,null,null,null).exports,s={components:{BCardCode:a.a,BBadge:r.a,BCardText:c.a},data:function(){return{codeGlow:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-badge pill variant="primary" class="badge-glow">Primary</b-badge>\n    <b-badge pill variant="secondary" class="badge-glow">Secondary</b-badge>\n    <b-badge pill variant="success" class="badge-glow">Success</b-badge>\n    <b-badge pill variant="danger" class="badge-glow">Danger</b-badge>\n    <b-badge pill variant="warning" class="badge-glow">Warning</b-badge>\n    <b-badge pill variant="info" class="badge-glow">Info</b-badge>\n    <b-badge pill variant="dark" class="badge-glow">Dark</b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n'}}},d=Object(o.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Glow Badges"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeGlow)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[e._v("Use class")]),e._v(" "),n("code",[e._v(".badge-glow")]),e._v(" "),n("span",[e._v("to add glow effect with badges.")])]),e._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"primary"}},[e._v("\n      Primary\n    ")]),e._v(" "),n("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"secondary"}},[e._v("\n      Secondary\n    ")]),e._v(" "),n("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"success"}},[e._v("\n      Success\n    ")]),e._v(" "),n("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"danger"}},[e._v("\n      Danger\n    ")]),e._v(" "),n("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"warning"}},[e._v("\n      Warning\n    ")]),e._v(" "),n("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"info"}},[e._v("\n      Info\n    ")]),e._v(" "),n("b-badge",{staticClass:"badge-glow",attrs:{pill:"",variant:"dark"}},[e._v("\n      Dark\n    ")])],1)],1)}),[],!1,null,null,null).exports,b={components:{BCardCode:a.a,BBadge:r.a,BCardText:c.a},data:function(){return{codeLightBadge:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-badge pill variant="light-primary">Primary</b-badge>\n    <b-badge pill variant="light-secondary">Secondary</b-badge>\n    <b-badge pill variant="light-success">Success</b-badge>\n    <b-badge pill variant="light-danger">Danger</b-badge>\n    <b-badge pill variant="light-warning">Warning</b-badge>\n    <b-badge pill variant="light-info">Info</b-badge>\n    <b-badge pill variant="light-dark">Dark</b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n'}}},g=Object(o.a)(b,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Light Badges"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeLightBadge)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[e._v("Use ")]),e._v(" "),n("code",[e._v("variant")]),e._v(" "),n("span",[e._v(" prop for badge color variantion.")])]),e._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-badge",{attrs:{pill:"",variant:"light-primary"}},[e._v("\n      Primary\n    ")]),e._v(" "),n("b-badge",{attrs:{pill:"",variant:"light-secondary"}},[e._v("\n      Secondary\n    ")]),e._v(" "),n("b-badge",{attrs:{pill:"",variant:"light-success"}},[e._v("\n      Success\n    ")]),e._v(" "),n("b-badge",{attrs:{pill:"",variant:"light-danger"}},[e._v("\n      Danger\n    ")]),e._v(" "),n("b-badge",{attrs:{pill:"",variant:"light-warning"}},[e._v("\n      Warning\n    ")]),e._v(" "),n("b-badge",{attrs:{pill:"",variant:"light-info"}},[e._v("\n      Info\n    ")]),e._v(" "),n("b-badge",{attrs:{pill:"",variant:"light-dark"}},[e._v("\n      Dark\n    ")])],1)],1)}),[],!1,null,null,null).exports,p={components:{BCardCode:a.a,BCardText:c.a},data:function(){return{codeNotification:'\n<template>\n  <div class="demo-inline-spacing">\n    <feather-icon\n      icon="BellIcon"\n      size="21"\n      class="text-primary"\n      badge="4"\n    />\n\n    <feather-icon\n      icon="BellIcon"\n      size="21"\n      class="text-info"\n      badge="4"\n      badge-classes="badge-info"\n    />\n    <feather-icon\n      icon="BellIcon"\n      size="21"\n      class="text-danger"\n      badge="4"\n      badge-classes="badge-danger badge-glow"\n    />\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n'}}},u=Object(o.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Pill Badges As Notification"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeNotification)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-"},[n("span",[e._v("Use class ")]),e._v(" "),n("code",[e._v("badge")]),e._v(" "),n("span",[e._v(" prop with ")]),e._v(" "),n("code",[e._v("<feather-icon>")]),e._v(" "),n("span",[e._v(" components to add badges as notification. Use ")]),e._v(" "),n("code",[e._v('badge-classes="badge-{color}"')]),e._v(" "),n("span",[e._v(" prop for change the badge color.")])]),e._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("feather-icon",{staticClass:"text-primary",attrs:{icon:"BellIcon",size:"21",badge:"4"}}),e._v(" "),n("feather-icon",{staticClass:"text-info",attrs:{icon:"BellIcon",size:"21",badge:"4","badge-classes":"badge-info"}}),e._v(" "),n("feather-icon",{staticClass:"text-danger",attrs:{icon:"BellIcon",size:"21",badge:"4","badge-classes":"badge-danger badge-glow"}})],1)],1)}),[],!1,null,null,null).exports,v=n(1912),f=n(357),_={components:{BCardCode:a.a,BCardText:c.a,BBadge:r.a,BRow:v.a,BCol:f.a},data:function(){return{codeLinkBadge:'\n<template>\n <b-badge\n    href="#"\n    pill\n    variant="primary"\n  >\n    Primary\n  </b-badge>\n</template>\n\n<script>\nimport { BBadge} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n',codeLinkBlock:'\n<template>\n  <b-badge\n    href="#"\n    class="d-block"\n    pill\n    variant="danger"\n  >\n    Block Badge Pill\n  </b-badge>\n</template>\n\n<script>\nimport {BBadge} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n'}}},O={components:{PillBadgeContextual:l,PillBadgeGlow:d,PillBadgeLight:g,PillBadgeNotification:u,PillBadgeLinkBlock:Object(o.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",[n("b-col",{attrs:{md:"6"}},[n("b-card-code",{attrs:{title:"Link Badge"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n        "+e._s(e.codeLinkBadge)+"\n      ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Use ")]),e._v(" "),n("code",[e._v("href")]),e._v(" "),n("span",[e._v(" prop (links) or ")]),e._v(" "),n("code",[e._v("to")]),e._v(" "),n("span",[e._v(" prop (router-links) for link badges.")])]),e._v(" "),n("b-badge",{attrs:{href:"#",pill:"",variant:"primary"}},[e._v("\n        Primary\n      ")])],1)],1),e._v(" "),n("b-col",{attrs:{md:"6"}},[n("b-card-code",{attrs:{title:"Block Badge Pill"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n        "+e._s(e.codeLinkBlock)+"\n      ")]},proxy:!0}])},[n("b-card-text",[n("span",[e._v("Use ")]),e._v(" "),n("code",[e._v(".d-block")]),e._v(" "),n("span",[e._v(" class with ")]),e._v(" "),n("code",[e._v("<b-badge>")]),e._v(" "),n("span",[e._v(", to display pill badge as a block element.")])]),e._v(" "),n("b-badge",{staticClass:"d-block",attrs:{href:"#",pill:"",variant:"danger"}},[e._v("\n        Block Badge Pill\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports}},m=Object(o.a)(O,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("pill-badge-contextual"),this._v(" "),t("pill-badge-glow"),this._v(" "),t("pill-badge-light"),this._v(" "),t("pill-badge-notification"),this._v(" "),t("pill-badge-link-block")],1)}),[],!1,null,null,null);t.default=m.exports},357:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(47),r=n(5),c=n(2),i=n(43),o=n(23),l=n(69),s=n(35),d=n(7),b=n(206),g=n(13),p=n(1),u=n(27);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=["auto","start","end","center","baseline","stretch"],m=Object(b.a)((function(e,t,n){var a=e;if(!Object(d.p)(n)&&!1!==n)return t&&(a+="-".concat(t)),"col"!==e||""!==n&&!0!==n?(a+="-".concat(n),Object(u.c)(a)):Object(u.c)(a)})),j=Object(g.c)(null),h={name:r.y,functional:!0,get props(){return delete this.props,this.props=(e=Object(l.b)().filter(s.a),t=e.reduce((function(e,t){return e[t]=Object(p.c)(c.i),e}),Object(g.c)(null)),n=e.reduce((function(e,t){return e[Object(p.g)(t,"offset")]=Object(p.c)(c.p),e}),Object(g.c)(null)),a=e.reduce((function(e,t){return e[Object(p.g)(t,"order")]=Object(p.c)(c.p),e}),Object(g.c)(null)),j=Object(g.a)(Object(g.c)(null),{col:Object(g.h)(t),offset:Object(g.h)(n),order:Object(g.h)(a)}),Object(p.d)(Object(g.m)(f(f(f(f({},t),n),a),{},{alignSelf:Object(p.c)(c.u,null,(function(e){return Object(o.a)(O,e)})),col:Object(p.c)(c.g,!1),cols:Object(p.c)(c.p),offset:Object(p.c)(c.p),order:Object(p.c)(c.p),tag:Object(p.c)(c.u,"div")})),r.y));var e,t,n,a},render:function(e,t){var n,r=t.props,c=t.data,o=t.children,l=r.cols,s=r.offset,d=r.order,b=r.alignSelf,g=[];for(var p in j)for(var u=j[p],v=0;v<u.length;v++){var f=m(p,u[v].replace(p,""),r[u[v]]);f&&g.push(f)}var O=g.some((function(e){return i.e.test(e)}));return g.push((_(n={col:r.col||!O&&!l},"col-".concat(l),l),_(n,"offset-".concat(s),s),_(n,"order-".concat(d),d),_(n,"align-self-".concat(b),b),n)),e(r.tag,Object(a.a)(c,{class:g}),o)}}},4:function(e,t,n){"use strict";var a=n(16);t.a=a.a},530:function(e,t,n){var a=n(1059);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(21)(a,r);a.locals&&(e.exports=a.locals)},540:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(8),r=n(47),c=n(5),i=n(2),o=n(13),l=n(1),s=n(98),d=n(60);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=Object(o.j)(d.b,["event","routerTag"]);delete u.href.default,delete u.to.default;var v=Object(l.d)(Object(o.m)(g(g({},u),{},{pill:Object(l.c)(i.g,!1),tag:Object(l.c)(i.u,"span"),variant:Object(l.c)(i.u,"secondary")})),c.e),f=Object(a.c)({name:c.e,functional:!0,props:v,render:function(e,t){var n=t.props,a=t.data,c=t.children,i=n.active,o=n.disabled,b=Object(s.d)(n),g=b?d.a:n.tag,p=n.variant||"secondary";return e(g,Object(r.a)(a,{staticClass:"badge",class:["badge-".concat(p),{"badge-pill":n.pill,active:i,disabled:o}],props:b?Object(l.e)(u,n):{}}),c)}})}}]);