(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{1111:function(e,r,a){"use strict";a(578)},1112:function(e,r,a){(r=a(19)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=r},18:function(e,r,a){"use strict";a(87);var t=a(1990),n=a(382),s=a(384),o=a(383),c=a(2008),i=(a(205),a(221),a(119)),l=a.n(i),u={components:{BCard:t.a,BCardTitle:n.a,BCardSubTitle:s.a,BCardBody:o.a,BCollapse:c.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},b=(a(1111),a(0)),p=Object(b.a)(u,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[a("div",{staticClass:"card-header"},[a("div",[a("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?a("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),a("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(r){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(r){e.code_visible=r},expression:"code_visible"}},[a("b-card-body",[a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:a("b-card-body",[e._t("default"),e._v(" "),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(r){e.code_visible=r},expression:"code_visible"}},[a("div",{staticClass:"p-1"}),e._v(" "),a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);r.a=p.exports},1988:function(e,r,a){"use strict";a.d(r,"a",(function(){return O}));var t=a(57),n=a(5),s=a(2),o=a(27),c=a(80),i=a(39),l=a(236),u=a(13),b=a(1),p=a(31);function d(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function v(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?d(Object(a),!0).forEach((function(r){g(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function g(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}var m=["start","end","center"],f=Object(l.a)((function(e,r){return(r=Object(p.h)(Object(p.g)(r)))?Object(p.c)(["row-cols",e,r].filter(i.a).join("-")):null})),_=Object(l.a)((function(e){return Object(p.c)(e.replace("cols",""))})),h=[],O={name:n.Ob,functional:!0,get props(){var e;return delete this.props,this.props=(e=Object(c.b)().reduce((function(e,r){return e[Object(b.g)(r,"cols")]=Object(b.c)(s.p),e}),Object(u.c)(null)),h=Object(u.h)(e),Object(b.d)(Object(u.m)(v(v({},e),{},{alignContent:Object(b.c)(s.u,null,(function(e){return Object(o.a)(Object(o.b)(m,"between","around","stretch"),e)})),alignH:Object(b.c)(s.u,null,(function(e){return Object(o.a)(Object(o.b)(m,"between","around"),e)})),alignV:Object(b.c)(s.u,null,(function(e){return Object(o.a)(Object(o.b)(m,"baseline","stretch"),e)})),noGutters:Object(b.c)(s.g,!1),tag:Object(b.c)(s.u,"div")})),n.Ob)),this.props},render:function(e,r){var a,n=r.props,s=r.data,o=r.children,c=n.alignV,i=n.alignH,l=n.alignContent,u=[];return h.forEach((function(e){var r=f(_(e),n[e]);r&&u.push(r)})),u.push((g(a={"no-gutters":n.noGutters},"align-items-".concat(c),c),g(a,"justify-content-".concat(i),i),g(a,"align-content-".concat(l),l),a)),e(n.tag,Object(t.a)(s,{staticClass:"row",class:u}),o)}}},1989:function(e,r,a){"use strict";a.d(r,"a",(function(){return l}));var t=a(8),n=a(57),s=a(5),o=a(2),c=a(1),i=Object(c.d)({textTag:Object(c.c)(o.u,"p")},s.u),l=Object(t.c)({name:s.u,functional:!0,props:i,render:function(e,r){var a=r.props,t=r.data,s=r.children;return e(a.textTag,Object(n.a)(t,{staticClass:"card-text"}),s)}})},1999:function(e,r,a){"use strict";a.d(r,"a",(function(){return g}));var t=a(8),n=a(5),s=a(2),o=a(13),c=a(1),i=a(32),l=a(484);function u(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function b(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?u(Object(a),!0).forEach((function(r){p(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function p(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}var d=Object(o.j)(l.b,["label","labelHtml"]),v=Object(c.d)(Object(o.m)(b(b({},d),{},{animated:Object(c.c)(s.g,!1),height:Object(c.c)(s.u),max:Object(c.c)(s.p,100),precision:Object(c.c)(s.p,0),showProgress:Object(c.c)(s.g,!1),showValue:Object(c.c)(s.g,!1),striped:Object(c.c)(s.g,!1)})),n.Mb),g=Object(t.c)({name:n.Mb,mixins:[i.a],provide:function(){var e=this;return{getBvProgress:function(){return e}}},props:v,computed:{progressHeight:function(){return{height:this.height||null}}},render:function(e){var r=this.normalizeSlot();return r||(r=e(l.a,{props:Object(c.e)(d,this.$props)})),e("div",{staticClass:"progress",style:this.progressHeight},[r])}})},2089:function(e,r,a){"use strict";a.r(r);var t=a(1988),n=a(395),s=a(4),o=a(1989),c=a(1999),i={components:{BCardCode:s.a,BCardText:o.a,BProgress:c.a},data:function(){return{value:0,value1:25,value2:50,value3:75,value4:100,codeBasic:'\n<template>\n  <div class="demo-vertical-spacing">\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value"\n        max="100"\n      />\n    </div>\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value1+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value1"\n        max="100"\n      />\n    </div>\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value2+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value2"\n        max="100"\n      />\n    </div>\n\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value3+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value3"\n        max="100"\n      />\n    </div>\n\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value4+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value4"\n        max="100"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n  data() {\n    return {\n      value: 0,\n      value1: 25,\n      value2: 50,\n      value3: 75,\n      value4: 100,\n    }\n  },\n}\n<\/script>\n'}}},l=a(0),u=Object(l.a)(i,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card-code",{attrs:{title:"Basic Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBasic)+"\n  ")]},proxy:!0}])},[a("div",{staticClass:"demo-vertical-spacing"},[a("div",{staticClass:"progress-wrapper"},[a("b-card-text",{staticClass:"mb-0"},[e._v("\n        Reticulating splines… "+e._s(e.value+"%")+"\n      ")]),e._v(" "),a("b-progress",{attrs:{max:"100"},model:{value:e.value,callback:function(r){e.value=r},expression:"value"}})],1),e._v(" "),a("div",{staticClass:"progress-wrapper"},[a("b-card-text",{staticClass:"mb-0"},[e._v("\n        Reticulating splines… "+e._s(e.value1+"%")+"\n      ")]),e._v(" "),a("b-progress",{attrs:{max:"100"},model:{value:e.value1,callback:function(r){e.value1=r},expression:"value1"}})],1),e._v(" "),a("div",{staticClass:"progress-wrapper"},[a("b-card-text",{staticClass:"mb-0"},[e._v("\n        Reticulating splines… "+e._s(e.value2+"%")+"\n      ")]),e._v(" "),a("b-progress",{attrs:{max:"100"},model:{value:e.value2,callback:function(r){e.value2=r},expression:"value2"}})],1),e._v(" "),a("div",{staticClass:"progress-wrapper"},[a("b-card-text",{staticClass:"mb-0"},[e._v("\n        Reticulating splines… "+e._s(e.value3+"%")+"\n      ")]),e._v(" "),a("b-progress",{attrs:{max:"100"},model:{value:e.value3,callback:function(r){e.value3=r},expression:"value3"}})],1),e._v(" "),a("div",{staticClass:"progress-wrapper"},[a("b-card-text",{staticClass:"mb-0"},[e._v("\n        Reticulating splines… "+e._s(e.value4+"%")+"\n      ")]),e._v(" "),a("b-progress",{attrs:{max:"100"},model:{value:e.value4,callback:function(r){e.value4=r},expression:"value4"}})],1)])])}),[],!1,null,null,null).exports,b={components:{BCardCode:s.a,BProgress:c.a,BCardText:o.a},data:function(){return{codeColored:'\n<template>\n  <div class="demo-vertical-spacing">\n    <b-progress\n      value="25"\n      max="100"\n    />\n    <b-progress\n      value="35"\n      max="100"\n      class="progress-bar-secondary"\n      variant="secondary"\n    />\n    <b-progress\n      value="45"\n      max="100"\n      class="progress-bar-success"\n      variant="success"\n    />\n    <b-progress\n      value="55"\n      max="100"\n      class="progress-bar-danger"\n      variant="danger"\n    />\n    <b-progress\n      value="65"\n      max="100"\n      class="progress-bar-warning"\n      variant="warning"\n    />\n    <b-progress\n      value="75"\n      max="100"\n      class="progress-bar-info"\n      variant="info"\n    />\n    <b-progress\n      value="85"\n      max="100"\n      class="progress-bar-dark"\n      variant="dark"\n    />\n  </div>\n</template>\n\n<script>\nimport { BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n}\n<\/script>\n'}}},p=Object(l.a)(b,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card-code",{attrs:{title:"Colored Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeColored)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Use")]),e._v(" "),a("code",[e._v("variant")]),e._v(" "),a("span",[e._v("prop to add different colors to progressbar and add ")]),e._v(" "),a("code",[e._v(".progress-bar-{color_name}")]),e._v(".\n  ")]),e._v(" "),a("div",{staticClass:"demo-vertical-spacing"},[a("b-progress",{attrs:{value:"25",max:"100"}}),e._v(" "),a("b-progress",{staticClass:"progress-bar-secondary",attrs:{value:"35",max:"100",variant:"secondary"}}),e._v(" "),a("b-progress",{staticClass:"progress-bar-success",attrs:{value:"45",max:"100",variant:"success"}}),e._v(" "),a("b-progress",{staticClass:"progress-bar-danger",attrs:{value:"55",max:"100",variant:"danger"}}),e._v(" "),a("b-progress",{staticClass:"progress-bar-warning",attrs:{value:"65",max:"100",variant:"warning"}}),e._v(" "),a("b-progress",{staticClass:"progress-bar-info",attrs:{value:"75",max:"100",variant:"info"}}),e._v(" "),a("b-progress",{staticClass:"progress-bar-dark",attrs:{value:"85",max:"100",variant:"dark"}})],1)],1)}),[],!1,null,null,null).exports,d={components:{BCardCode:s.a,BProgress:c.a,BCardText:o.a},data:function(){return{codeLabel:'\n<template>\n  <div class="demo-vertical-spacing">\n    <div>\n      <label>No label</label>\n      <b-progress\n        value="25"\n        max="100"\n      />\n    </div>\n\n    <div>\n      <label>Value label</label>\n      <b-progress\n        value="35"\n        max="100"\n        show-value\n        variant="secondary"\n        class="progress-bar-secondary"\n      />\n    </div>\n\n    <div>\n      <label>Progress label</label>\n      <b-progress\n        value="45"\n        max="100"\n        show-progress\n        variant="success"\n        class="progress-bar-success"\n      />\n    </div>\n\n    <div>\n      <label>Value label with precision</label>\n      <b-progress\n        value="55"\n        max="100"\n        precision="2"\n        show-value\n        variant="danger"\n        class="progress-bar-danger"\n      />\n    </div>\n\n    <div>\n      <label>Progress label with precision</label>\n      <b-progress\n        value="65"\n        max="100"\n        precision="2"\n        show-progress\n        variant="warning"\n        class="progress-bar-warning"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n}\n<\/script>\n'}}},v=Object(l.a)(d,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card-code",{attrs:{title:"Labeled Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeLabel)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Add labels to your progress bars by either enabling")]),e._v(" "),a("code",[e._v("show-progress")]),e._v(" "),a("span",[e._v("(percentage of max) or")]),e._v(" "),a("code",[e._v("show-value")]),e._v(" "),a("span",[e._v("\n      for the current absolute value. You may also set the precision (number of digits after the decimal) via the\n    ")]),e._v(" "),a("code",[e._v("precision")]),e._v(" "),a("span",[e._v("prop (default is 0digits after the decimal).")])]),e._v(" "),a("div",{staticClass:"demo-vertical-spacing"},[a("div",[a("label",[e._v("No label")]),e._v(" "),a("b-progress",{attrs:{value:"25",max:"100"}})],1),e._v(" "),a("div",[a("label",[e._v("Value label")]),e._v(" "),a("b-progress",{staticClass:"progress-bar-secondary",attrs:{value:"35",max:"100","show-value":"",variant:"secondary"}})],1),e._v(" "),a("div",[a("label",[e._v("Progress label")]),e._v(" "),a("b-progress",{staticClass:"progress-bar-success",attrs:{value:"45",max:"100","show-progress":"",variant:"success"}})],1),e._v(" "),a("div",[a("label",[e._v("Value label with precision")]),e._v(" "),a("b-progress",{staticClass:"progress-bar-danger",attrs:{value:"55",max:"100",precision:"2","show-value":"",variant:"danger"}})],1),e._v(" "),a("div",[a("label",[e._v("Progress label with precision")]),e._v(" "),a("b-progress",{staticClass:"progress-bar-warning",attrs:{value:"65",max:"100",precision:"2","show-progress":"",variant:"warning"}})],1)])],1)}),[],!1,null,null,null).exports,g={components:{BCardCode:s.a,BProgress:c.a,BCardText:o.a},data:function(){return{codeStripped:'\n<template>\n  <div class="demo-vertical-spacing">\n    <b-progress\n      value="25"\n      max="100"\n      striped\n    />\n    <b-progress\n      value="35"\n      max="100"\n      striped\n      class="progress-bar-secondary"\n      variant="secondary"\n    />\n    <b-progress\n      value="45"\n      max="100"\n      striped\n      variant="success"\n      class="progress-bar-success"\n    />\n    <b-progress\n      value="55"\n      max="100"\n      striped\n      variant="danger"\n      class="progress-bar-danger"\n    />\n    <b-progress\n      value="65"\n      max="100"\n      striped\n      variant="warning"\n      class="progress-bar-warning"\n    />\n    <b-progress\n      value="75"\n      max="100"\n      striped\n      variant="info"\n      class="progress-bar-info"\n    />\n    <b-progress\n      value="85"\n      max="100"\n      striped\n      variant="dark"\n      class="progress-bar-dark"\n    />\n  </div>\n</template>\n\n<script>\nimport { BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n}\n<\/script>\n\n'}}},m=Object(l.a)(g,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card-code",{attrs:{title:"Striped Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeStripped)+"\n  ")]},proxy:!0}])},[a("b-card-text",[e._v("Set striped to apply a stripe via CSS gradient over the progress bar's background variant.")]),e._v(" "),a("div",{staticClass:"demo-vertical-spacing"},[a("b-progress",{attrs:{value:"25",max:"100",striped:""}}),e._v(" "),a("b-progress",{staticClass:"progress-bar-secondary",attrs:{value:"35",max:"100",striped:"",variant:"secondary"}}),e._v(" "),a("b-progress",{staticClass:"progress-bar-success",attrs:{value:"45",max:"100",striped:"",variant:"success"}}),e._v(" "),a("b-progress",{staticClass:"progress-bar-danger",attrs:{value:"55",max:"100",striped:"",variant:"danger"}}),e._v(" "),a("b-progress",{staticClass:"progress-bar-warning",attrs:{value:"65",max:"100",striped:"",variant:"warning"}}),e._v(" "),a("b-progress",{staticClass:"progress-bar-info",attrs:{value:"75",max:"100",striped:"",variant:"info"}}),e._v(" "),a("b-progress",{staticClass:"progress-bar-dark",attrs:{value:"85",max:"100",striped:"",variant:"dark"}})],1)],1)}),[],!1,null,null,null).exports,f=(a(43),a(225),{components:{BRow:t.a,BCol:n.a,BCardCode:s.a,BProgress:c.a,BCardText:o.a},data:function(){return{codeAnimated:'\n<template>\n  <b-row\n    v-for="bar in bars"\n    :key="bar.variant"\n  >\n    <b-col\n      md="2"\n      class="pt-2"\n    >\n      {{ bar.variant }}:\n    </b-col>\n    <b-col\n      md="10"\n      class="pt-md-2"\n    >\n      <b-progress\n        :key="bar.variant"\n        animated\n        :value="bar.value"\n        :variant="bar.variant"\n        :class="\'progress-bar-\'+bar.variant"\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {BProgress, BRow, BCol} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n  data: () => ({\n    bars: [\n      { variant: \'success\', value: 75 },\n      { variant: \'info\', value: 75 },\n      { variant: \'warning\', value: 75 },\n      { variant: \'danger\', value: 75 },\n      { variant: \'primary\', value: 75 },\n      { variant: \'secondary\', value: 75 },\n    ],\n    timer: null,\n  }),\n  mounted() {\n    this.timer = setInterval(() => {\n      // eslint-disable-next-line\n      this.bars.forEach(bar => (bar.value = 25 + Math.random() * 75))\n    }, 2000)\n  },\n  beforeDestroy() {\n    clearInterval(this.timer)\n    this.timer = null\n  },\n}\n<\/script>\n',bars:[{variant:"primary",value:75},{variant:"secondary",value:75},{variant:"success",value:75},{variant:"info",value:75},{variant:"danger",value:75},{variant:"warning",value:75}],timer:null}},mounted:function(){var e=this;this.timer=setInterval((function(){e.bars.forEach((function(e){return e.value=25+75*Math.random()}))}),2e3)},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}}),_=Object(l.a)(f,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card-code",{attrs:{title:"Animated Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAnimated)+"\n  ")]},proxy:!0}])},[a("b-card-text",{staticClass:"mb-0"},[a("span",[e._v("The striped gradient can also be animated by setting the")]),e._v(" "),a("code",[e._v("animated")]),e._v(" "),a("span",[e._v("prop.")])]),e._v(" "),e._l(e.bars,(function(r){return a("b-row",{key:r.variant},[a("b-col",{staticClass:"pt-2",attrs:{md:"2"}},[e._v("\n      "+e._s(r.variant)+":\n    ")]),e._v(" "),a("b-col",{staticClass:"pt-md-2",attrs:{md:"10"}},[a("b-progress",{key:r.variant,class:"progress-bar-"+r.variant,attrs:{animated:"",value:r.value,variant:r.variant}})],1)],1)}))],2)}),[],!1,null,null,null).exports,h=a(484),O={components:{BCardCode:s.a,BProgressBar:h.a,BCardText:o.a,BProgress:c.a},data:function(){return{values:[15,50,10],max:100,codeMultipleBar:'\n<template>\n  <b-progress :max="max">\n    <b-progress-bar\n      variant="danger"\n      :value="values[0]"\n      show-progress\n    />\n    <b-progress-bar\n      variant="warning"\n      :value="values[1]"\n      show-progress\n    />\n    <b-progress-bar\n      variant="primary"\n      :value="values[2]"\n      show-progress\n    />\n  </b-progress>\n</template>\n\n<script>\nimport { BProgressBar, BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgressBar,\n    BProgress,\n  },\n  data() {\n    return {\n      values: [15, 50, 10],\n      max: 100,\n    }\n  },\n}\n<\/script>\n'}}},x=Object(l.a)(O,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card-code",{attrs:{title:"Multiple bars"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeMultipleBar)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Include multiple")]),e._v(" "),a("code",[e._v("<b-progress-bar>")]),e._v(" "),a("span",[e._v("sub-components in a")]),e._v(" "),a("code",[e._v("<b-progress>")]),e._v(" "),a("span",[e._v("component to build a horizontally stacked set of progress bars.")])]),e._v(" "),a("b-progress",{attrs:{max:e.max}},[a("b-progress-bar",{attrs:{variant:"danger",value:e.values[0],"show-progress":""}}),e._v(" "),a("b-progress-bar",{attrs:{variant:"warning",value:e.values[1],"show-progress":""}}),e._v(" "),a("b-progress-bar",{attrs:{variant:"primary",value:e.values[2],"show-progress":""}})],1)],1)}),[],!1,null,null,null).exports,j={components:{BCardCode:s.a,BProgress:c.a,BProgressBar:h.a,BCardText:o.a},data:function(){return{codeCustomLabel:'\n<template>\n  <div class="demo-vertical-spacing">\n    <div>\n      <label>Custom label via default slot</label>\n      <b-progress\n        :max="max"\n      >\n        <b-progress-bar :value="value">\n          <strong>{{ value.toFixed(2) }} / {{ max }}</strong>\n        </b-progress-bar>\n      </b-progress>\n    </div>\n\n    <div>\n      <label>Custom label via property</label>\n      <b-progress\n        :max="max"\n        class="progress-bar-info"\n      >\n        <b-progress-bar\n          :value="value"\n          :label="`${((value / max) * 100).toFixed(2)}%`"\n          variant="info"\n        />\n      </b-progress>\n    </div>\n\n    <div>\n      <label>Custom label via property (HTML support)</label>\n      <b-progress\n        :max="max"\n        class="progress-bar-warning"\n      >\n        <b-progress-bar\n          :value="value"\n          :label-html="`<del>${value}</del>`"\n          variant="warning"\n        />\n      </b-progress>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BProgress, BProgressBar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n    BProgressBar,\n  },\n  data() {\n    return {\n      value: 33.333333333,\n      max: 50,\n    }\n  },\n}\n<\/script>\n',value:33.333333333,max:50}}},w=Object(l.a)(j,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-card-code",{attrs:{title:"Custom Labeled Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeCustomLabel)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Need more control over the label? Provide your own label by using the default slot within a")]),e._v(" "),a("code",[e._v("<b-progress-bar>")]),e._v(" "),a("span",[e._v("sub-component, or by using the")]),e._v(" "),a("code",[e._v("label")]),e._v(" "),a("span",[e._v("or")]),e._v(" "),a("code",[e._v("label-html")]),e._v(" "),a("span",[e._v(" property on ")]),e._v(" "),a("code",[e._v("<b-progress-bar>")]),e._v(":\n  ")]),e._v(" "),a("div",{staticClass:"demo-vertical-spacing"},[a("div",[a("label",[e._v("Custom label via default slot")]),e._v(" "),a("b-progress",{attrs:{max:e.max}},[a("b-progress-bar",{attrs:{value:e.value}},[a("strong",[e._v(e._s(e.value.toFixed(2))+" / "+e._s(e.max))])])],1)],1),e._v(" "),a("div",[a("label",[e._v("Custom label via property")]),e._v(" "),a("b-progress",{staticClass:"progress-bar-info",attrs:{max:e.max}},[a("b-progress-bar",{attrs:{value:e.value,label:(e.value/e.max*100).toFixed(2)+"%",variant:"info"}})],1)],1),e._v(" "),a("div",[a("label",[e._v("Custom label via property (HTML support)")]),e._v(" "),a("b-progress",{staticClass:"progress-bar-warning",attrs:{max:e.max}},[a("b-progress-bar",{attrs:{value:e.value,"label-html":"<del>"+e.value+"</del>",variant:"warning"}})],1)],1)])],1)}),[],!1,null,null,null).exports,y={components:{BRow:t.a,BCol:n.a,ProgressBasic:u,ProgressColored:p,ProgressLabel:v,ProgressAnimated:_,ProgressStripped:m,ProgressMultipleBar:x,ProgressLabelCustom:w}},P=Object(l.a)(y,(function(){var e=this.$createElement,r=this._self._c||e;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("progress-basic"),this._v(" "),r("progress-colored"),this._v(" "),r("progress-label"),this._v(" "),r("progress-label-custom"),this._v(" "),r("progress-stripped"),this._v(" "),r("progress-multiple-bar"),this._v(" "),r("progress-animated")],1)],1)}),[],!1,null,null,null);r.default=P.exports},395:function(e,r,a){"use strict";a.d(r,"a",(function(){return x}));var t=a(57),n=a(5),s=a(2),o=a(50),c=a(27),i=a(80),l=a(39),u=a(7),b=a(236),p=a(13),d=a(1),v=a(31);function g(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function m(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?g(Object(a),!0).forEach((function(r){f(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function f(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}var _=["auto","start","end","center","baseline","stretch"],h=Object(b.a)((function(e,r,a){var t=e;if(!Object(u.p)(a)&&!1!==a)return r&&(t+="-".concat(r)),"col"!==e||""!==a&&!0!==a?(t+="-".concat(a),Object(v.c)(t)):Object(v.c)(t)})),O=Object(p.c)(null),x={name:n.y,functional:!0,get props(){return delete this.props,this.props=(e=Object(i.b)().filter(l.a),r=e.reduce((function(e,r){return e[r]=Object(d.c)(s.i),e}),Object(p.c)(null)),a=e.reduce((function(e,r){return e[Object(d.g)(r,"offset")]=Object(d.c)(s.p),e}),Object(p.c)(null)),t=e.reduce((function(e,r){return e[Object(d.g)(r,"order")]=Object(d.c)(s.p),e}),Object(p.c)(null)),O=Object(p.a)(Object(p.c)(null),{col:Object(p.h)(r),offset:Object(p.h)(a),order:Object(p.h)(t)}),Object(d.d)(Object(p.m)(m(m(m(m({},r),a),t),{},{alignSelf:Object(d.c)(s.u,null,(function(e){return Object(c.a)(_,e)})),col:Object(d.c)(s.g,!1),cols:Object(d.c)(s.p),offset:Object(d.c)(s.p),order:Object(d.c)(s.p),tag:Object(d.c)(s.u,"div")})),n.y));var e,r,a,t},render:function(e,r){var a,n=r.props,s=r.data,c=r.children,i=n.cols,l=n.offset,u=n.order,b=n.alignSelf,p=[];for(var d in O)for(var v=O[d],g=0;g<v.length;g++){var m=h(d,v[g].replace(d,""),n[v[g]]);m&&p.push(m)}var _=p.some((function(e){return o.e.test(e)}));return p.push((f(a={col:n.col||!_&&!i},"col-".concat(i),i),f(a,"offset-".concat(l),l),f(a,"order-".concat(u),u),f(a,"align-self-".concat(b),b),a)),e(n.tag,Object(t.a)(s,{class:p}),c)}}},4:function(e,r,a){"use strict";var t=a(18);r.a=t.a},484:function(e,r,a){"use strict";a.d(r,"b",(function(){return d})),a.d(r,"a",(function(){return v}));var t=a(8),n=a(5),s=a(2),o=a(58),c=a(7),i=a(42),l=a(26),u=a(1),b=a(31),p=a(32),d=Object(u.d)({animated:Object(u.c)(s.g,null),label:Object(u.c)(s.u),labelHtml:Object(u.c)(s.u),max:Object(u.c)(s.p,null),precision:Object(u.c)(s.p,null),showProgress:Object(u.c)(s.g,null),showValue:Object(u.c)(s.g,null),striped:Object(u.c)(s.g,null),value:Object(u.c)(s.p,0),variant:Object(u.c)(s.u)},n.Nb),v=Object(t.c)({name:n.Nb,mixins:[p.a],inject:{getBvProgress:{default:function(){return function(){return{}}}}},props:d,computed:{bvProgress:function(){return this.getBvProgress()},progressBarClasses:function(){var e=this.computedAnimated,r=this.computedVariant;return[r?"bg-".concat(r):"",this.computedStriped||e?"progress-bar-striped":"",e?"progress-bar-animated":""]},progressBarStyles:function(){return{width:this.computedValue/this.computedMax*100+"%"}},computedValue:function(){return Object(l.b)(this.value,0)},computedMax:function(){var e=Object(l.b)(this.max)||Object(l.b)(this.bvProgress.max,0);return e>0?e:100},computedPrecision:function(){return Object(i.d)(Object(l.c)(this.precision,Object(l.c)(this.bvProgress.precision,0)),0)},computedProgress:function(){var e=this.computedPrecision,r=Object(i.f)(10,e);return Object(l.a)(100*r*this.computedValue/this.computedMax/r,e)},computedVariant:function(){return this.variant||this.bvProgress.variant},computedStriped:function(){return Object(c.b)(this.striped)?this.striped:this.bvProgress.striped||!1},computedAnimated:function(){return Object(c.b)(this.animated)?this.animated:this.bvProgress.animated||!1},computedShowProgress:function(){return Object(c.b)(this.showProgress)?this.showProgress:this.bvProgress.showProgress||!1},computedShowValue:function(){return Object(c.b)(this.showValue)?this.showValue:this.bvProgress.showValue||!1}},render:function(e){var r,a=this.label,t=this.labelHtml,n=this.computedValue,s=this.computedPrecision,c={};return this.hasNormalizedSlot()?r=this.normalizeSlot():a||t?c=Object(o.a)(t,a):this.computedShowProgress?r=this.computedProgress:this.computedShowValue&&(r=Object(l.a)(n,s)),e("div",{staticClass:"progress-bar",class:this.progressBarClasses,style:this.progressBarStyles,attrs:{role:"progressbar","aria-valuemin":"0","aria-valuemax":Object(b.g)(this.computedMax),"aria-valuenow":Object(l.a)(n,s)},domProps:c},r)}})},578:function(e,r,a){var t=a(1112);"string"==typeof t&&(t=[[e.i,t,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(23)(t,n);t.locals&&(e.exports=t.locals)}}]);