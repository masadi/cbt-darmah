(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1048:function(e,t,n){"use strict";n(528)},1049:function(e,t,n){(t=n(19)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=t},16:function(e,t,n){"use strict";n(76);var r=n(1889),a=n(341),i=n(343),o=n(342),s=n(1904),c=(n(177),n(191),n(101)),l=n.n(c),d={components:{BCard:r.a,BCardTitle:a.a,BCardSubTitle:i.a,BCardBody:o.a,BCollapse:s.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},b=(n(1048),n(0)),u=Object(b.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?n("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:n("b-card-body",[e._t("default"),e._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),e._v(" "),n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=u.exports},1887:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var r=n(48),a=n(5),i=n(2),o=n(23),s=n(67),c=n(35),l=n(205),d=n(13),b=n(1),u=n(27);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=["start","end","center"],h=Object(l.a)((function(e,t){return(t=Object(u.h)(Object(u.g)(t)))?Object(u.c)(["row-cols",e,t].filter(c.a).join("-")):null})),f=Object(l.a)((function(e){return Object(u.c)(e.replace("cols",""))})),_=[],O={name:a.Ob,functional:!0,get props(){var e;return delete this.props,this.props=(e=Object(s.b)().reduce((function(e,t){return e[Object(b.g)(t,"cols")]=Object(b.c)(i.p),e}),Object(d.c)(null)),_=Object(d.h)(e),Object(b.d)(Object(d.m)(p(p({},e),{},{alignContent:Object(b.c)(i.u,null,(function(e){return Object(o.a)(Object(o.b)(v,"between","around","stretch"),e)})),alignH:Object(b.c)(i.u,null,(function(e){return Object(o.a)(Object(o.b)(v,"between","around"),e)})),alignV:Object(b.c)(i.u,null,(function(e){return Object(o.a)(Object(o.b)(v,"baseline","stretch"),e)})),noGutters:Object(b.c)(i.g,!1),tag:Object(b.c)(i.u,"div")})),a.Ob)),this.props},render:function(e,t){var n,a=t.props,i=t.data,o=t.children,s=a.alignV,c=a.alignH,l=a.alignContent,d=[];return _.forEach((function(e){var t=h(f(e),a[e]);t&&d.push(t)})),d.push((g(n={"no-gutters":a.noGutters},"align-items-".concat(s),s),g(n,"justify-content-".concat(c),c),g(n,"align-content-".concat(l),l),n)),e(a.tag,Object(r.a)(i,{staticClass:"row",class:d}),o)}}},1888:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(8),a=n(48),i=n(5),o=n(2),s=n(1),c=Object(s.d)({textTag:Object(s.c)(o.u,"p")},i.u),l=Object(r.c)({name:i.u,functional:!0,props:c,render:function(e,t){var n=t.props,r=t.data,i=t.children;return e(n.textTag,Object(a.a)(r,{staticClass:"card-text"}),i)}})},1924:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(8),a=n(48),i=n(5),o=n(2),s=n(1);var c=Object(s.d)({fluid:Object(s.c)(o.j,!1),tag:Object(s.c)(o.u,"div")},i.B),l=Object(r.c)({name:i.B,functional:!0,props:c,render:function(e,t){var n,r,i,o=t.props,s=t.data,c=t.children,l=o.fluid;return e(o.tag,Object(a.a)(s,{class:(n={container:!(l||""===l),"container-fluid":!0===l||""===l},r="container-".concat(l),i=l&&!0!==l,r in n?Object.defineProperty(n,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[r]=i,n)}),c)}})},1973:function(e,t,n){"use strict";n.r(t);var r,a=n(1887),i=n(348),o=n(4),s=n(1888),c=n(226),l={components:{BCardCode:o.a,BCardText:s.a,BImg:c.a},data:function(){return{codeBasic:'\n<template>\n  <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  }\n}\n<\/script>\n'}}},d=n(0),b=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-code",{attrs:{title:"Images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBasic)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Documentation and examples for opting images (via ")]),e._v(" "),r("code",[e._v("<b-img>")]),e._v(" "),r("span",[e._v("\n      component) into responsive behavior (so they never become larger than their parent elements), optionally adding\n      lightweight styles to them — all via props.\n    ")])]),e._v(" "),r("b-img",{staticClass:"w-100",attrs:{src:n(640),fluid:"",alt:"Responsive image"}})],1)}),[],!1,null,null,null).exports,u={components:{BCardCode:o.a,BCardText:s.a,BImg:c.a},data:function(){return{codeResponsive:'\n<template>\n  <div>\n    <h6>Small image with <code>fluid</code>:</h6>\n    <b-img :src="require(\'@/assets/images/water-drop-small.jpg" fluid alt="Fluid image\')" />\n\n    <h6 class="my-1">Small image with <code>fluid-grow</code>:</h6>\n    <b-img :src="require(\'@/assets/images/water-drop-small.jpg" fluid-grow alt="Fluid-grow image\')" />\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  },\n}\n<\/script>\n'}}},m=Object(d.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-code",{attrs:{title:"Responsive images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeResponsive)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Images in BootstrapVue can be made responsive with the ")]),e._v(" "),r("code",[e._v("fluid")]),e._v(" "),r("span",[e._v(" prop (which sets ")]),e._v(" "),r("code",[e._v("max-width: 100%; height: auto;")]),e._v(" "),r("span",[e._v("\n      via CSS classes) so that it scales with the parent element - up to the maximum native width of the image.\n    ")])]),e._v(" "),r("div",[r("h6",[e._v("Small image with "),r("code",[e._v("fluid")]),e._v(":")]),e._v(" "),r("b-img",{attrs:{src:n(154),fluid:"",alt:"Fluid image"}}),e._v(" "),r("h6",{staticClass:"my-1"},[e._v("\n      Small image with "),r("code",[e._v("fluid-grow")]),e._v(":\n    ")]),e._v(" "),r("b-img",{attrs:{src:n(154),"fluid-grow":"",alt:"Fluid-grow image"}})],1)],1)}),[],!1,null,null,null).exports,p=n(1924),g={components:{BCardCode:o.a,BImg:c.a,BContainer:p.a,BCardText:s.a,BRow:a.a,BCol:i.a},data:function(){return{codeThumbnails:'\n<template>\n  <b-container fluid class="p-1 bg-dark">\n    <b-row>\n      <b-col>\n        <b-img thumbnail fluid :src="require(\'@/assets/images/sky-high.jpg" alt="Image 1\')" />\n      </b-col>\n      <b-col>\n        <b-img thumbnail fluid :src="require(\'@/assets/images/light-house-thumb.jpg" alt="Image 2\')" />\n      </b-col>\n      <b-col>\n        <b-img thumbnail fluid :src="require(\'@/assets/images/border.jpg" alt="Image 3\')" />\n      </b-col>\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { BImg, BContainer, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n    BContainer,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n'}}},v=Object(d.a)(g,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-code",{attrs:{title:"Image thumbnails"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeThumbnails)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("You can use prop ")]),e._v(" "),r("code",[e._v("thumbnail")]),e._v(" "),r("span",[e._v("to give an image a rounded light border appearance.")])]),e._v(" "),r("b-container",{staticClass:"p-1 bg-dark",attrs:{fluid:""}},[r("b-row",[r("b-col",[r("b-img",{attrs:{thumbnail:"",fluid:"",src:n(127),alt:"Image 1"}})],1),e._v(" "),r("b-col",[r("b-img",{attrs:{thumbnail:"",fluid:"",src:n(220),alt:"Image 2"}})],1),e._v(" "),r("b-col",[r("b-img",{attrs:{thumbnail:"",fluid:"",src:n(238),alt:"Image 3"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports,h={components:{BCardCode:o.a,BImg:c.a,BCardText:s.a},data:function(){return{mainProps:{blank:!0,blankColor:"#777",width:75,height:75,class:"m1"},codeRoundedCorner:'\n<template>\n  <div>\n    <b-img\n      v-bind="mainProps"\n      rounded\n      alt="Rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="top"\n      alt="Top-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="right"\n      alt="Right-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="bottom"\n      alt="Bottom-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="left"\n      alt="Left-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="circle"\n      alt="Circle image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="0"\n      alt="Not rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n BImg, },\n  data: () => ({\n    mainProps: {\n      blank: true,\n      blankColor: \'#777\',\n      width: 75,\n      height: 75,\n      class: \'m1\',\n    },\n  }),\n}\n<\/script>\n'}}},f=Object(d.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Rounded corners"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeRoundedCorner)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[e._v("You can control which corners are rounded by setting the rounded prop to one of the following values:")]),e._v(" "),n("code",[e._v("true,false,top,right,bottom,left,circle,0")])]),e._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"",alt:"Rounded image"}},"b-img",e.mainProps,!1)),e._v(" "),n("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"top",alt:"Top-rounded image"}},"b-img",e.mainProps,!1)),e._v(" "),n("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"right",alt:"Right-rounded image"}},"b-img",e.mainProps,!1)),e._v(" "),n("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"bottom",alt:"Bottom-rounded image"}},"b-img",e.mainProps,!1)),e._v(" "),n("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"left",alt:"Left-rounded image"}},"b-img",e.mainProps,!1)),e._v(" "),n("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"circle",alt:"Circle image"}},"b-img",e.mainProps,!1)),e._v(" "),n("b-img",e._b({staticClass:"d-inline-block",attrs:{rounded:"0",alt:"Not rounded image"}},"b-img",e.mainProps,!1))],1)],1)}),[],!1,null,null,null).exports,_={components:{BCardCode:o.a,BCardText:s.a,BImg:c.a},data:function(){return{codeAlignment:'\n<template>\n  <div class="clearfix">\n    <b-img  left class="mb-1 mb-sm-0" height="120" :src="require(\'@/assets/images/banner/banner-34.jpg" alt="Left image\')"/>\n    <b-img right class="mb-1 mb-sm-0" height="120" :src="require(\'@/assets/images/banner/banner-34.jpg" alt="Right image\')"/>\n    <b-img center class="mb-1 mb-sm-0" height="120" :src="require(\'@/assets/images/banner/banner-34.jpg" alt="Center image\')"/>\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  }\n}\n<\/script>\n'}}},O=Object(d.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-code",{attrs:{title:"Aligning images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAlignment)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Align images with the boolean props ")]),e._v(" "),r("code",[e._v("left")]),e._v(" "),r("span",[e._v(" (floats left) ")]),e._v(" "),r("code",[e._v("right")]),e._v(" "),r("span",[e._v("(floats right), and ")]),e._v(" "),r("code",[e._v("center")]),e._v(" "),r("span",[e._v("(auto left+right margins). You can also center images by placing them in a container that has the class\n    ")]),e._v(" "),r("code",[e._v("text-center.")])]),e._v(" "),r("div",{staticClass:"clearfix"},[r("b-img",{staticClass:"mb-1 mb-sm-0",attrs:{left:"",height:"120",src:n(233),alt:"Left image"}}),e._v(" "),r("b-img",{staticClass:"mb-1 mb-sm-0",attrs:{right:"",height:"120",src:n(233),alt:"Right image"}}),e._v(" "),r("b-img",{staticClass:"mb-1 mb-sm-0",attrs:{center:"",height:"120",src:n(233),alt:"Center image"}})],1)],1)}),[],!1,null,null,null).exports,j={components:{BCardCode:o.a,BCardText:s.a,BImg:c.a},data:function(){return{mainProps:{blank:!0,width:75,height:75,class:"m1"},codeBlank:'\n<template>\n  <div>\n    <b-img\n      v-bind="mainProps"\n      rounded\n      alt="Transparent image"\n      class="d-inline-block mr-1 mb-1 border"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#5A8DEE"\n      rounded\n      alt="HEX shorthand color image (#777)"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#475F7B"\n      rounded\n      alt="Named color image (red)"\n      class="d-inline-block mr-1 mb-1"\n    />\n\n    <b-img\n      v-bind="mainProps"\n      blank-color="#39DA8A"\n      rounded\n      alt="Named color image (black)"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#FF5B5C"\n      rounded\n      alt="HEX color image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#FDAC41"\n      alt="RGBa color image"\n      rounded\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#00CFDD"\n      rounded\n      alt="HEX shorthand color (#88f)"\n      class="d-inline-block mr-1 mb-1"\n    />\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  },\n  data: () => ({\n    mainProps: {\n      blank: true,\n      width: 75,\n      height: 75,\n      class: \'m1\',\n    },\n  }),\n}\n<\/script>\n'}}},w=Object(d.a)(j,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Blank (or solid color) images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBlank)+"\n  ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("code",[e._v("<b-img>")]),e._v(" "),n("span",[e._v("\n      provides built-in support for generating blank images (transparent by default) of any width and height, by\n      setting the\n    ")]),e._v(" "),n("code",[e._v("blank")]),e._v(" "),n("span",[e._v(" prop, and specifying ")]),e._v(" "),n("code",[e._v("width")]),e._v(" "),n("span",[e._v(" and ")]),e._v(" "),n("code",[e._v("height")]),e._v(" "),n("span",[e._v("values (in pixels). You can apply any of the other ")]),e._v(" "),n("code",[e._v("<b-img>")]),e._v(" "),n("span",[e._v(" props to change the style/behavior of the generated image.")])]),e._v(" "),n("div",{staticClass:"demo-inline-spacing"},[n("b-img",e._b({staticClass:"d-inline-block border",attrs:{rounded:"",alt:"Transparent image"}},"b-img",e.mainProps,!1)),e._v(" "),n("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#5A8DEE",rounded:"",alt:"HEX shorthand color image (#777)"}},"b-img",e.mainProps,!1)),e._v(" "),n("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#82868b",rounded:"",alt:"Named color image (red)"}},"b-img",e.mainProps,!1)),e._v(" "),n("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#39DA8A",rounded:"",alt:"Named color image (black)"}},"b-img",e.mainProps,!1)),e._v(" "),n("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#FDAC41",alt:"RGBa color image",rounded:""}},"b-img",e.mainProps,!1)),e._v(" "),n("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#FF5B5C",rounded:"",alt:"HEX color image"}},"b-img",e.mainProps,!1)),e._v(" "),n("b-img",e._b({staticClass:"d-inline-block",attrs:{"blank-color":"#00CFDD",rounded:"",alt:"HEX shorthand color (#88f)"}},"b-img",e.mainProps,!1))],1)],1)}),[],!1,null,null,null).exports,k=n(8),y=n(5),C=n(30),B=n(12),P=n(2),x=n(23),S=n(6),I=n(35),D=n(22),E=n(13),R=n(1),T=n(363);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L=B.hb+"show",F=Object(E.j)(c.b,["blank"]),H=Object(R.d)(z(z({},F),{},A({blankHeight:Object(R.c)(P.p),blankSrc:Object(R.c)(P.u,null),blankWidth:Object(R.c)(P.p),offset:Object(R.c)(P.p,360)},"show",Object(R.c)(P.g,!1))),y.lb),q=Object(k.c)({name:y.lb,directives:{"b-visible":T.a},props:H,data:function(){return{isShown:this.show}},computed:{computedSrc:function(){var e=this.blankSrc;return!e||this.isShown?this.src:e},computedBlank:function(){return!(this.isShown||this.blankSrc)},computedWidth:function(){var e=this.width;return this.isShown?e:this.blankWidth||e},computedHeight:function(){var e=this.height;return this.isShown?e:this.blankHeight||e},computedSrcset:function(){var e=Object(x.b)(this.srcset).filter(I.a).join(",");return!e||this.blankSrc&&!this.isShown?null:e},computedSizes:function(){var e=Object(x.b)(this.sizes).filter(I.a).join(",");return!e||this.blankSrc&&!this.isShown?null:e}},watch:(r={},A(r,"show",(function(e,t){if(e!==t){var n=!C.b||e;this.isShown=n,e!==n&&this.$nextTick(this.updateShowProp)}})),A(r,"isShown",(function(e,t){e!==t&&this.updateShowProp()})),r),mounted:function(){var e=this;this.$nextTick((function(){e.isShown=!C.b||e.show}))},methods:{updateShowProp:function(){this.$emit(L,this.isShown)},doShow:function(e){var t=this;!e&&null!==e||this.isShown||Object(S.B)((function(){t.isShown=!0}))}},render:function(e){var t,n=[];this.isShown||n.push({name:"b-visible",value:this.doShow,modifiers:(t={},A(t,"".concat(Object(D.c)(this.offset,0)),!0),A(t,"once",!0),t)});return e(c.a,{directives:n,props:z(z({},Object(R.e)(F,this.$props)),{},{src:this.computedSrc,blank:this.computedBlank,width:this.computedWidth,height:this.computedHeight,srcset:this.computedSrcset,sizes:this.computedSizes})})}}),N={components:{BCardCode:o.a,BImgLazy:q,BCardText:s.a},data:function(){return{codeLazy:"\n<template>\n  <div>\n    <b-img-lazy :src=\"require('@/assets/images/banner/banner-6.jpg\" fluid class=\"w-100')\"/>\n  </div>\n</template>\n\n<script>\nimport { BImgLazy } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BImgLazy,\n  },\n}\n<\/script>\n"}}},X=Object(d.a)(N,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card-code",{attrs:{title:"Lazy loaded images"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeLazy)+"\n  ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Use our complementary ")]),e._v(" "),r("code",[e._v("<b-img-lazy>")]),e._v(" "),r("span",[e._v(" image component (based on ")]),e._v(" "),r("code",[e._v("<b-img>")]),e._v(" "),r("span",[e._v(") to lazy load images as they are scrolled into view (or within ")]),e._v(" "),r("code",[e._v("offset")]),e._v(" "),r("span",[e._v(" pixels of the viewport).")])]),e._v(" "),r("b-img-lazy",{staticClass:"w-100",attrs:{src:n(640),fluid:""}})],1)}),[],!1,null,null,null).exports,M={components:{BRow:a.a,BCol:i.a,ImagesBasic:b,ImagesResponsive:m,ImagesThumbnails:v,ImagesRoundedCorner:f,ImagesAlignment:O,ImagesBlank:w,ImagesLazy:X}},G=Object(d.a)(M,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-row",[t("b-col",[t("images-basic"),this._v(" "),t("images-responsive"),this._v(" "),t("images-thumbnails"),this._v(" "),t("images-rounded-corner"),this._v(" "),t("images-alignment"),this._v(" "),t("images-blank"),this._v(" "),t("images-lazy")],1)],1)}),[],!1,null,null,null);t.default=G.exports},233:function(e,t){e.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/banner/banner-34.jpg"},348:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(48),a=n(5),i=n(2),o=n(43),s=n(23),c=n(67),l=n(35),d=n(7),b=n(205),u=n(13),m=n(1),p=n(27);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=["auto","start","end","center","baseline","stretch"],_=Object(b.a)((function(e,t,n){var r=e;if(!Object(d.p)(n)&&!1!==n)return t&&(r+="-".concat(t)),"col"!==e||""!==n&&!0!==n?(r+="-".concat(n),Object(p.c)(r)):Object(p.c)(r)})),O=Object(u.c)(null),j={name:a.y,functional:!0,get props(){return delete this.props,this.props=(e=Object(c.b)().filter(l.a),t=e.reduce((function(e,t){return e[t]=Object(m.c)(i.i),e}),Object(u.c)(null)),n=e.reduce((function(e,t){return e[Object(m.g)(t,"offset")]=Object(m.c)(i.p),e}),Object(u.c)(null)),r=e.reduce((function(e,t){return e[Object(m.g)(t,"order")]=Object(m.c)(i.p),e}),Object(u.c)(null)),O=Object(u.a)(Object(u.c)(null),{col:Object(u.h)(t),offset:Object(u.h)(n),order:Object(u.h)(r)}),Object(m.d)(Object(u.m)(v(v(v(v({},t),n),r),{},{alignSelf:Object(m.c)(i.u,null,(function(e){return Object(s.a)(f,e)})),col:Object(m.c)(i.g,!1),cols:Object(m.c)(i.p),offset:Object(m.c)(i.p),order:Object(m.c)(i.p),tag:Object(m.c)(i.u,"div")})),a.y));var e,t,n,r},render:function(e,t){var n,a=t.props,i=t.data,s=t.children,c=a.cols,l=a.offset,d=a.order,b=a.alignSelf,u=[];for(var m in O)for(var p=O[m],g=0;g<p.length;g++){var v=_(m,p[g].replace(m,""),a[p[g]]);v&&u.push(v)}var f=u.some((function(e){return o.e.test(e)}));return u.push((h(n={col:a.col||!f&&!c},"col-".concat(c),c),h(n,"offset-".concat(l),l),h(n,"order-".concat(d),d),h(n,"align-self-".concat(b),b),n)),e(a.tag,Object(r.a)(i,{class:u}),s)}}},363:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(43),a=n(6),i=n(7),o=n(42),s=n(13),c=n(8);function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d="__bv__visibility_observer",b=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.callback=n.callback,this.margin=n.margin||0,this.once=n.once||!1,this.observer=null,this.visible=void 0,this.doneOnce=!1,this.createObserver()}var t,n,r;return t=e,(n=[{key:"createObserver",value:function(){var e=this;if(this.observer&&this.stop(),!this.doneOnce&&Object(i.f)(this.callback)){try{this.observer=new IntersectionObserver(this.handler.bind(this),{root:null,rootMargin:this.margin,threshold:0})}catch(e){return this.doneOnce=!0,this.observer=void 0,void this.callback(null)}Object(c.e)((function(){Object(a.B)((function(){e.observer&&e.observer.observe(e.el)}))}))}}},{key:"handler",value:function(e){var t=e?e[0]:{},n=Boolean(t.isIntersecting||t.intersectionRatio>0);n!==this.visible&&(this.visible=n,this.callback(n),this.once&&this.visible&&(this.doneOnce=!0,this.stop()))}},{key:"stop",value:function(){this.observer&&this.observer.disconnect(),this.observer=null}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u=function(e){var t=e[d];t&&t.stop&&t.stop(),delete e[d]},m=function(e,t){var n=t.value,a=t.modifiers,i={margin:"0px",once:!1,callback:n};Object(s.h)(a).forEach((function(e){r.h.test(e)?i.margin="".concat(e,"px"):"once"===e.toLowerCase()&&(i.once=!0)})),u(e),e[d]=new b(e,i),e[d]._prevModifiers=Object(s.b)(a)},p={bind:m,componentUpdated:function(e,t,n){var r=t.value,a=t.oldValue,i=t.modifiers;i=Object(s.b)(i),!e||r===a&&e[d]&&Object(o.a)(i,e[d]._prevModifiers)||m(e,{value:r,modifiers:i})},unbind:function(e){u(e)}}},4:function(e,t,n){"use strict";var r=n(16);t.a=r.a},528:function(e,t,n){var r=n(1049);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(21)(r,a);r.locals&&(e.exports=r.locals)},640:function(e,t){e.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/banner/banner-6.jpg"}}]);