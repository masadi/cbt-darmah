(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{1052:function(n,e,a){"use strict";a(528)},1053:function(n,e,a){(e=a(19)(!1)).push([n.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),n.exports=e},16:function(n,e,a){"use strict";a(76);var t=a(1902),r=a(343),c=a(345),o=a(344),s=a(1917),i=(a(177),a(191),a(101)),d=a.n(i),b={components:{BCard:t.a,BCardTitle:r.a,BCardSubTitle:c.a,BCardBody:o.a,BCollapse:s.a,Prism:d.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var n=JSON.parse(JSON.stringify(this.$attrs));return delete n.title,delete n["sub-title"],n}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},l=(a(1052),a(0)),g=Object(l.a)(b,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card",n._g(n._b({attrs:{"no-body":""}},"b-card",n.cardAttrs,!1),n.$listeners),[a("div",{staticClass:"card-header"},[a("div",[a("b-card-title",[n._v(n._s(n.$attrs.title))]),n._v(" "),n.$attrs["sub-title"]?a("b-card-sub-title",[n._v("\n        "+n._s(n.$attrs["sub-title"])+"\n      ")]):n._e()],1),n._v(" "),a("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":n.code_visible?"false":"true","aria-controls":n.parentID},on:{click:function(e){n.code_visible=!n.code_visible}}})]),n._v(" "),void 0!==n.$attrs["no-body"]?[n._t("default"),n._v(" "),a("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(e){n.code_visible=e},expression:"code_visible"}},[a("b-card-body",[a("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],1)]:a("b-card-body",[n._t("default"),n._v(" "),a("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(e){n.code_visible=e},expression:"code_visible"}},[a("div",{staticClass:"p-1"}),n._v(" "),a("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);e.a=g.exports},1900:function(n,e,a){"use strict";a.d(e,"a",(function(){return h}));var t=a(48),r=a(5),c=a(2),o=a(23),s=a(67),i=a(35),d=a(205),b=a(13),l=a(1),g=a(27);function u(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function v(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){p(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function p(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var f=["start","end","center"],_=Object(d.a)((function(n,e){return(e=Object(g.h)(Object(g.g)(e)))?Object(g.c)(["row-cols",n,e].filter(i.a).join("-")):null})),m=Object(d.a)((function(n){return Object(g.c)(n.replace("cols",""))})),O=[],h={name:r.Ob,functional:!0,get props(){var n;return delete this.props,this.props=(n=Object(s.b)().reduce((function(n,e){return n[Object(l.g)(e,"cols")]=Object(l.c)(c.p),n}),Object(b.c)(null)),O=Object(b.h)(n),Object(l.d)(Object(b.m)(v(v({},n),{},{alignContent:Object(l.c)(c.u,null,(function(n){return Object(o.a)(Object(o.b)(f,"between","around","stretch"),n)})),alignH:Object(l.c)(c.u,null,(function(n){return Object(o.a)(Object(o.b)(f,"between","around"),n)})),alignV:Object(l.c)(c.u,null,(function(n){return Object(o.a)(Object(o.b)(f,"baseline","stretch"),n)})),noGutters:Object(l.c)(c.g,!1),tag:Object(l.c)(c.u,"div")})),r.Ob)),this.props},render:function(n,e){var a,r=e.props,c=e.data,o=e.children,s=r.alignV,i=r.alignH,d=r.alignContent,b=[];return O.forEach((function(n){var e=_(m(n),r[n]);e&&b.push(e)})),b.push((p(a={"no-gutters":r.noGutters},"align-items-".concat(s),s),p(a,"justify-content-".concat(i),i),p(a,"align-content-".concat(d),d),a)),n(r.tag,Object(t.a)(c,{staticClass:"row",class:b}),o)}}},1901:function(n,e,a){"use strict";a.d(e,"a",(function(){return d}));var t=a(8),r=a(48),c=a(5),o=a(2),s=a(1),i=Object(s.d)({textTag:Object(s.c)(o.u,"p")},c.u),d=Object(t.c)({name:c.u,functional:!0,props:i,render:function(n,e){var a=e.props,t=e.data,c=e.children;return n(a.textTag,Object(r.a)(t,{staticClass:"card-text"}),c)}})},1992:function(n,e,a){"use strict";a.r(e);var t=a(1900),r=a(350),c=a(4),o=a(1901),s=a(537),i={components:{BCardCode:c.a,BCardText:o.a,BBadge:s.a},data:function(){return{codeContextual:'\n<template>\n   <div class="demo-inline-spacing">\n      <b-badge variant="primary">\n        Primary\n      </b-badge>\n      <b-badge>\n        Secondary\n      </b-badge>\n      <b-badge variant="success">\n        Success\n      </b-badge>\n      <b-badge variant="danger">\n        Danger\n      </b-badge>\n      <b-badge variant="warning">\n        Warning\n      </b-badge>\n      <b-badge variant="info">\n        Info\n      </b-badge>\n      <b-badge variant="dark">\n        Dark\n      </b-badge>\n    </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n'}}},d=a(0),b=Object(d.a)(i,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Contextual Badges"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeContextual)+"\n  ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-0"},[a("span",[n._v("Add any of the following variants via the ")]),n._v(" "),a("code",[n._v("variant")]),n._v(" "),a("span",[n._v(" prop to change the appearance of a ")]),n._v(" "),a("code",[n._v("<b-badge>:")]),n._v(" "),a("span",[n._v(" default, primary, success, warning, info,")]),n._v(" "),a("span",[n._v(" and ")]),n._v(" "),a("span",[n._v("danger.")]),n._v(" "),a("span",[n._v(" If no variant is specified ")]),n._v(" "),a("code",[n._v("default")]),n._v(" "),a("span",[n._v(" will be used.")])]),n._v(" "),a("div",{staticClass:"demo-inline-spacing"},[a("b-badge",{attrs:{variant:"primary"}},[n._v("\n      Primary\n    ")]),n._v(" "),a("b-badge",[n._v("\n      Secondary\n    ")]),n._v(" "),a("b-badge",{attrs:{variant:"success"}},[n._v("\n      Success\n    ")]),n._v(" "),a("b-badge",{attrs:{variant:"danger"}},[n._v("\n      Danger\n    ")]),n._v(" "),a("b-badge",{attrs:{variant:"warning"}},[n._v("\n      Warning\n    ")]),n._v(" "),a("b-badge",{attrs:{variant:"info"}},[n._v("\n      Info\n    ")]),n._v(" "),a("b-badge",{attrs:{variant:"dark"}},[n._v("\n      Dark\n    ")])],1)],1)}),[],!1,null,null,null).exports,l={components:{BCardCode:c.a,BCardText:o.a,BBadge:s.a},data:function(){return{codeGlow:'\n<template>\n  \x3c!-- glow badges --\x3e\n  <div class="demo-inline-spacing">\n    <b-badge\n      variant="primary"\n      class="badge-glow"\n    >\n      Primary\n    </b-badge>\n    <b-badge class="badge-glow">\n      Secondary\n    </b-badge>\n    <b-badge\n      variant="success"\n      class="badge-glow"\n    >\n      Success\n    </b-badge>\n    <b-badge\n      variant="danger"\n      class="badge-glow"\n    >\n      Danger\n    </b-badge>\n    <b-badge\n      variant="warning"\n      class="badge-glow"\n    >\n      Warning\n    </b-badge>\n    <b-badge\n      variant="info"\n      class="badge-glow"\n    >\n      Info\n    </b-badge>\n    <b-badge\n      variant="dark"\n      class="badge-glow"\n    >\n      Dark\n    </b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n'}}},g=Object(d.a)(l,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Glow Badges"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeGlow)+"\n  ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-0"},[a("span",[n._v("Use class ")]),n._v(" "),a("code",[n._v(".badge-glow")]),n._v(" "),a("span",[n._v(" to add glow effect to contextual badge.")])]),n._v(" "),a("div",{staticClass:"demo-inline-spacing"},[a("b-badge",{staticClass:"badge-glow",attrs:{variant:"primary"}},[n._v("\n      Primary\n    ")]),n._v(" "),a("b-badge",{staticClass:"badge-glow"},[n._v("\n      Secondary\n    ")]),n._v(" "),a("b-badge",{staticClass:"badge-glow",attrs:{variant:"success"}},[n._v("\n      Success\n    ")]),n._v(" "),a("b-badge",{staticClass:"badge-glow",attrs:{variant:"danger"}},[n._v("\n      Danger\n    ")]),n._v(" "),a("b-badge",{staticClass:"badge-glow",attrs:{variant:"warning"}},[n._v("\n      Warning\n    ")]),n._v(" "),a("b-badge",{staticClass:"badge-glow",attrs:{variant:"info"}},[n._v("\n      Info\n    ")]),n._v(" "),a("b-badge",{staticClass:"badge-glow",attrs:{variant:"dark"}},[n._v("\n      Dark\n    ")])],1)],1)}),[],!1,null,null,null).exports,u={components:{BCardCode:c.a,BCardText:o.a,BBadge:s.a},data:function(){return{codeLightBadges:'\n<template>\n  <div class="demo-inline-spacing">\n    <b-badge variant="light-primary">\n      Primary\n    </b-badge>\n    <b-badge variant="light-secondary">\n      Secondary\n    </b-badge>\n    <b-badge variant="light-success">\n      Success\n    </b-badge>\n    <b-badge variant="light-danger">\n      Danger\n    </b-badge>\n    <b-badge variant="light-warning">\n      Warning\n    </b-badge>\n    <b-badge variant="light-info">\n      Info\n    </b-badge>\n    <b-badge variant="light-dark">\n      Dark\n    </b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n'}}},v=Object(d.a)(u,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Light Badges"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeLightBadges)+"\n  ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-0"},[a("span",[n._v("Use ")]),n._v(" "),a("code",[n._v("variant='light-{color}'")]),n._v(" "),a("span",[n._v(" prop to add light effect to your badge.")])]),n._v(" "),a("div",{staticClass:"demo-inline-spacing"},[a("b-badge",{attrs:{variant:"light-primary"}},[n._v("\n      Primary\n    ")]),n._v(" "),a("b-badge",{attrs:{variant:"light-secondary"}},[n._v("\n      Secondary\n    ")]),n._v(" "),a("b-badge",{attrs:{variant:"light-success"}},[n._v("\n      Success\n    ")]),n._v(" "),a("b-badge",{attrs:{variant:"light-danger"}},[n._v("\n      Danger\n    ")]),n._v(" "),a("b-badge",{attrs:{variant:"light-warning"}},[n._v("\n      Warning\n    ")]),n._v(" "),a("b-badge",{attrs:{variant:"light-info"}},[n._v("\n      Info\n    ")]),n._v(" "),a("b-badge",{attrs:{variant:"light-dark"}},[n._v("\n      Dark\n    ")])],1)],1)}),[],!1,null,null,null).exports,p={components:{BCardCode:c.a,BBadge:s.a,BCardText:o.a},data:function(){return{codeIcon:'\n<template>\n  \x3c!--badges --\x3e\n  <div class="demo-inline-spacing">\n    <b-badge variant="primary">\n      <feather-icon\n        icon="StarIcon"\n        class="mr-25"\n      />\n      <span>Primary</span>\n    </b-badge>\n    <b-badge>\n      <feather-icon\n        icon="StarIcon"\n        class="mr-25"\n      />\n      <span>Secondary</span>\n    </b-badge>\n    <b-badge\n      variant="success"\n    >\n      <feather-icon\n        icon="StarIcon"\n        class="mr-25"\n      />\n      <span>Success</span>\n    </b-badge>\n    <b-badge\n      variant="danger"\n    >\n      <feather-icon\n        icon="StarIcon"\n        class="mr-25"\n      />\n      <span>Danger</span>\n    </b-badge>\n    <b-badge\n      variant="warning"\n    >\n      <feather-icon\n        icon="StarIcon"\n        class="mr-25"\n      />\n      <span>Warning</span>\n    </b-badge>\n    <b-badge\n      variant="info"\n    >\n      <feather-icon\n        icon="StarIcon"\n        class="mr-25"\n      />\n      <span>Info</span>\n    </b-badge>\n    <b-badge\n      variant="dark"\n    >\n      <feather-icon\n        icon="StarIcon"\n        class="mr-25"\n      />\n      <span>Dark</span>\n    </b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n'}}},f=Object(d.a)(p,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Badges With Icons"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeIcon)+"\n  ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-0"},[n._v("\n    You can add icon inside badge components.\n  ")]),n._v(" "),a("div",{staticClass:"demo-inline-spacing"},[a("b-badge",{attrs:{variant:"primary"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),n._v(" "),a("span",[n._v("Primary")])],1),n._v(" "),a("b-badge",[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),n._v(" "),a("span",[n._v("Secondary")])],1),n._v(" "),a("b-badge",{attrs:{variant:"success"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),n._v(" "),a("span",[n._v("Success")])],1),n._v(" "),a("b-badge",{attrs:{variant:"danger"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),n._v(" "),a("span",[n._v("Danger")])],1),n._v(" "),a("b-badge",{attrs:{variant:"warning"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),n._v(" "),a("span",[n._v("Warning")])],1),n._v(" "),a("b-badge",{attrs:{variant:"info"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),n._v(" "),a("span",[n._v("Info")])],1),n._v(" "),a("b-badge",{attrs:{variant:"dark"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"StarIcon"}}),n._v(" "),a("span",[n._v("Dark")])],1)],1)],1)}),[],!1,null,null,null).exports,_={components:{BCardCode:c.a,BCardText:o.a,BBadge:s.a},data:function(){return{codeLink:'\n<template>\n  <b-badge\n    href="#"\n    variant="primary"\n  >\n    <feather-icon\n      icon="LinkIcon"\n      class="mr-25"\n    />\n    <span>Link Badge</span>\n  </b-badge>\n</template>\n\n<script>\nimport {BBadge} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n'}}},m=Object(d.a)(_,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Link Badge"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeLink)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("Use ")]),n._v(" "),a("code",[n._v("href")]),n._v(" "),a("span",[n._v(" prop (links) or ")]),n._v(" "),a("code",[n._v("to")]),n._v(" "),a("span",[n._v(" prop (router-links) for link badges.")])]),n._v(" "),a("b-badge",{attrs:{href:"#",variant:"primary"}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"LinkIcon"}}),n._v(" "),a("span",[n._v("Link Badge")])],1)],1)}),[],!1,null,null,null).exports,O={components:{BCardCode:c.a,BCardText:o.a,BBadge:s.a},data:function(){return{codeBlock:'\n<template>\n  <div class="text-center">\n    <b-badge\n      href="#"\n      class="d-block"\n      variant="primary"\n    >\n      Badge\n    </b-badge>\n  </div>\n</template>\n\n<script>\nimport { BBadge} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BBadge,\n  },\n}\n<\/script>\n'}}},h=Object(d.a)(O,(function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Block Badge"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeBlock)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("Use ")]),n._v(" "),a("code",[n._v(".d-block")]),n._v(" "),a("span",[n._v(" class with ")]),n._v(" "),a("code",[n._v("<b-badge>")]),n._v(" "),a("span",[n._v(", to display badge as a block element.")])]),n._v(" "),a("div",{staticClass:"text-center"},[a("b-badge",{staticClass:"d-block",attrs:{href:"#",variant:"primary"}},[n._v("\n      Badge\n    ")])],1)],1)}),[],!1,null,null,null).exports,j={components:{BRow:t.a,BCol:r.a,BadgeContextual:b,BadgeGlow:g,BadgeLight:v,BadgeIcon:f,BadgeLink:m,BadgeBlock:h}},y=Object(d.a)(j,(function(){var n=this.$createElement,e=this._self._c||n;return e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{cols:"12"}},[e("badge-contextual")],1),this._v(" "),e("b-col",{attrs:{cols:"12"}},[e("badge-glow")],1),this._v(" "),e("b-col",{attrs:{cols:"12"}},[e("badge-light")],1),this._v(" "),e("b-col",{attrs:{cols:"12"}},[e("badge-icon")],1),this._v(" "),e("b-col",{attrs:{md:"6"}},[e("badge-link")],1),this._v(" "),e("b-col",{attrs:{md:"6"}},[e("badge-block")],1)],1)}),[],!1,null,null,null);e.default=y.exports},350:function(n,e,a){"use strict";a.d(e,"a",(function(){return j}));var t=a(48),r=a(5),c=a(2),o=a(43),s=a(23),i=a(67),d=a(35),b=a(7),l=a(205),g=a(13),u=a(1),v=a(27);function p(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function f(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){_(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function _(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var m=["auto","start","end","center","baseline","stretch"],O=Object(l.a)((function(n,e,a){var t=n;if(!Object(b.p)(a)&&!1!==a)return e&&(t+="-".concat(e)),"col"!==n||""!==a&&!0!==a?(t+="-".concat(a),Object(v.c)(t)):Object(v.c)(t)})),h=Object(g.c)(null),j={name:r.y,functional:!0,get props(){return delete this.props,this.props=(n=Object(i.b)().filter(d.a),e=n.reduce((function(n,e){return n[e]=Object(u.c)(c.i),n}),Object(g.c)(null)),a=n.reduce((function(n,e){return n[Object(u.g)(e,"offset")]=Object(u.c)(c.p),n}),Object(g.c)(null)),t=n.reduce((function(n,e){return n[Object(u.g)(e,"order")]=Object(u.c)(c.p),n}),Object(g.c)(null)),h=Object(g.a)(Object(g.c)(null),{col:Object(g.h)(e),offset:Object(g.h)(a),order:Object(g.h)(t)}),Object(u.d)(Object(g.m)(f(f(f(f({},e),a),t),{},{alignSelf:Object(u.c)(c.u,null,(function(n){return Object(s.a)(m,n)})),col:Object(u.c)(c.g,!1),cols:Object(u.c)(c.p),offset:Object(u.c)(c.p),order:Object(u.c)(c.p),tag:Object(u.c)(c.u,"div")})),r.y));var n,e,a,t},render:function(n,e){var a,r=e.props,c=e.data,s=e.children,i=r.cols,d=r.offset,b=r.order,l=r.alignSelf,g=[];for(var u in h)for(var v=h[u],p=0;p<v.length;p++){var f=O(u,v[p].replace(u,""),r[v[p]]);f&&g.push(f)}var m=g.some((function(n){return o.e.test(n)}));return g.push((_(a={col:r.col||!m&&!i},"col-".concat(i),i),_(a,"offset-".concat(d),d),_(a,"order-".concat(b),b),_(a,"align-self-".concat(l),l),a)),n(r.tag,Object(t.a)(c,{class:g}),s)}}},4:function(n,e,a){"use strict";var t=a(16);e.a=t.a},528:function(n,e,a){var t=a(1053);"string"==typeof t&&(t=[[n.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(21)(t,r);t.locals&&(n.exports=t.locals)},537:function(n,e,a){"use strict";a.d(e,"a",(function(){return f}));var t=a(8),r=a(48),c=a(5),o=a(2),s=a(13),i=a(1),d=a(96),b=a(59);function l(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function g(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){u(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function u(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var v=Object(s.j)(b.b,["event","routerTag"]);delete v.href.default,delete v.to.default;var p=Object(i.d)(Object(s.m)(g(g({},v),{},{pill:Object(i.c)(o.g,!1),tag:Object(i.c)(o.u,"span"),variant:Object(i.c)(o.u,"secondary")})),c.e),f=Object(t.c)({name:c.e,functional:!0,props:p,render:function(n,e){var a=e.props,t=e.data,c=e.children,o=a.active,s=a.disabled,l=Object(d.d)(a),g=l?b.a:a.tag,u=a.variant||"secondary";return n(g,Object(r.a)(t,{staticClass:"badge",class:["badge-".concat(u),{"badge-pill":a.pill,active:o,disabled:s}],props:l?Object(i.e)(v,a):{}}),c)}})}}]);