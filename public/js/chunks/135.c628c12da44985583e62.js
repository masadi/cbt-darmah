(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1027:function(e,s,t){"use strict";t(529)},1028:function(e,s,t){(s=t(20)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=s},1183:function(e,s){e.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/slider/07.jpg"},16:function(e,s,t){"use strict";t(74);var a=t(1818),r=t(339),n=t(341),i=t(340),o=t(1832),l=(t(174),t(188),t(97)),c=t.n(l),d={components:{BCard:a.a,BCardTitle:r.a,BCardSubTitle:n.a,BCardBody:i.a,BCollapse:o.a,Prism:c.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},u=(t(1027),t(0)),p=Object(u.a)(d,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[t("div",{staticClass:"card-header"},[t("div",[t("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?t("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),t("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(s){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(s){e.code_visible=s},expression:"code_visible"}},[t("b-card-body",[t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:t("b-card-body",[e._t("default"),e._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(s){e.code_visible=s},expression:"code_visible"}},[t("div",{staticClass:"p-1"}),e._v(" "),t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);s.a=p.exports},1893:function(e,s,t){"use strict";t.r(s);var a=t(344),r=t(1816),n=t(1866),i=t(1867),o=t(1817),l=t(4),c={components:{BCardCode:l.a,BCarousel:n.a,BCarouselSlide:i.a,BCardText:o.a},data:function(){return{codeCarouselBasic:"\n<template>\n  <b-carousel\n    id=\"carousel-example-generic\"\n    controls\n    indicators\n  >\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/01.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/02.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/03.jpg')\" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n<\/script>\n"}}},d=t(0),u=Object(d.a)(c,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Basic Example"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeCarouselBasic)+"\n  ")]},proxy:!0}])},[a("b-card-text",[e._v("\n    The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms. It works with\n    a series of images, text, or custom markup.\n  ")]),e._v(" "),a("b-carousel",{attrs:{id:"carousel-example-generic",controls:"",indicators:""}},[a("b-carousel-slide",{attrs:{"img-src":t(193)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(197)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(153)}})],1)],1)}),[],!1,null,null,null).exports,p={components:{BCardCode:l.a,BCarousel:n.a,BCarouselSlide:i.a,BCardText:o.a},data:function(){return{codeCarouselCaption:'\n<template>\n  <b-carousel\n    id="carousel-caption"\n    controls\n    indicators\n  >\n    <b-carousel-slide\n      caption-html="<span class=\'text-white\'>First Slide Label</span>"\n      class="card-img-overlay"\n      text="Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet chocolate. Tart chocolate marshmallow.Tart carrot cake muffin."\n      :img-src="require(\'@/assets/images/slider/08.jpg\')"\n    />\n    <b-carousel-slide\n      caption-html="<span class=\'text-white\'>Second Slide Label</span>"\n      class="card-img-overlay"\n      text="Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies. Cupcake cake I love cake danish carrot cake."\n      :img-src="require(\'@/assets/images/slider/09.jpg\')"\n    />\n    <b-carousel-slide\n      caption-html="<span class=\'text-white\'>Third Slide Label</span>"\n      class="card-img-overlay"\n      text="Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry muffin. Marshmallow cake powder icing."\n      :img-src="require(\'@/assets/images/slider/10.jpg\')"\n    />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n<\/script>\n'}}},m=Object(d.a)(p,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Optional captions"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeCarouselCaption)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Add captions to your slides easily with the prop")]),e._v(" "),a("code",[e._v("caption")]),e._v(" "),a("span",[e._v("element within any")]),e._v(" "),a("code",[e._v("<b-carousel-slide>")]),e._v(".\n  ")]),e._v(" "),a("b-carousel",{attrs:{id:"carousel-caption",controls:"",indicators:""}},[a("b-carousel-slide",{staticClass:"card-img-overlay",attrs:{"caption-html":"<span class='text-white'>First Slide Label</span>",text:"Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet chocolate. Tart chocolate marshmallow.Tart carrot cake muffin.","img-src":t(622)}}),e._v(" "),a("b-carousel-slide",{staticClass:"card-img-overlay",attrs:{"caption-html":"<span class='text-white'>Second Slide Label</span>",text:"Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies. Cupcake cake I love cake danish carrot cake.","img-src":t(397)}}),e._v(" "),a("b-carousel-slide",{staticClass:"card-img-overlay",attrs:{"caption-html":"<span class='text-white'>Third Slide Label</span>",text:"Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry muffin. Marshmallow cake powder icing.","img-src":t(481)}})],1)],1)}),[],!1,null,null,null).exports,b={components:{BCardCode:l.a,BCarousel:n.a,BCarouselSlide:i.a,BCardText:o.a},data:function(){return{codeCarouselCrossfade:"\n<template>\n  <b-carousel\n    id=\"carousel-crossfade\"\n    controls\n    indicators\n    fade\n  >\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/01.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/02.jpg')\" />\n    <b-carousel-slide :img-src=\"require('@/assets/images/slider/03.jpg')\" />\n  </b-carousel>\n</template>\n\n<script>\nimport {BCarousel, BCarouselSlide} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n<\/script>\n"}}},g=Object(d.a)(b,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Crossfade"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeCarouselCrossfade)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Set the")]),e._v(" "),a("code",[e._v("<b-carousel>fade")]),e._v(" "),a("span",[e._v("prop to")]),e._v(" "),a("code",[e._v("true")]),e._v(" "),a("span",[e._v("to animate slides with a fade transition instead of the default slide animation.")])]),e._v(" "),a("b-carousel",{attrs:{id:"carousel-crossfade",controls:"",indicators:"",fade:""}},[a("b-carousel-slide",{attrs:{"img-src":t(193)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(197)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(153)}})],1)],1)}),[],!1,null,null,null).exports,v={components:{BCardCode:l.a,BCarousel:n.a,BCarouselSlide:i.a,BCardText:o.a},data:function(){return{codeCarouselInterval:'\n<template>\n  <b-carousel\n    id="carousel-interval"\n    controls\n    indicators\n    :interval="400"\n  >\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/01.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/02.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/03.jpg\')" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n<\/script>\n'}}},_=Object(d.a)(v,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Carousel Interval"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeCarouselInterval)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Carousel defaults to an ")]),e._v(" "),a("code",[e._v("interval")]),e._v(" "),a("span",[e._v(" of 5000ms (5 seconds).")])]),e._v(" "),a("b-carousel",{attrs:{id:"carousel-interval",controls:"",indicators:"",interval:400}},[a("b-carousel-slide",{attrs:{"img-src":t(193)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(197)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(153)}})],1)],1)}),[],!1,null,null,null).exports,f={components:{BCardCode:l.a,BCarousel:n.a,BCarouselSlide:i.a,BCardText:o.a},data:function(){return{codeKeyboard:'\n<template>\n  <b-carousel\n    id="carousel-interval"\n    controls\n    indicators\n    :interval="400"\n  >\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/07.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/08.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/09.jpg\')" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n<\/script>\n'}}},h=Object(d.a)(f,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Keyboard Option"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeKeyboard)+"\n  ")]},proxy:!0}])},[a("b-card-text",[e._v("\n    Whether the carousel should react to keyboard events. User prop "),a("code",[e._v("controls")]),e._v(" for keyboard event.\n  ")]),e._v(" "),a("b-carousel",{attrs:{id:"carousel-interval",controls:"",indicators:"",interval:400}},[a("b-carousel-slide",{attrs:{"img-src":t(1183)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(622)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(397)}})],1)],1)}),[],!1,null,null,null).exports,C=t(1834),x=t(89),B=t(11),S={components:{BCardCode:l.a,BCarousel:n.a,BCarouselSlide:i.a,BButtonGroup:C.a,BButton:x.a,BCardText:o.a},directives:{Ripple:B.a},data:function(){return{status:!1,codeProgrammaticSlide:'\n<template>\n  <div>\n    <b-carousel\n      id="carousel-1"\n      ref="myCarousel"\n      :interval="4000"\n      controls\n      indicators\n      background="#ababab"\n      img-width="924"\n      img-height="380"\n    >\n      \x3c!-- Text slides with image --\x3e\n      <b-carousel-slide\n        text="Nulla vitae elit libero, a pharetra augue mollis interdum."\n        :img-src="require(\'@/assets/images/slider/01.jpg\')"\n      />\n\n      \x3c!-- Slides with custom text --\x3e\n      <b-carousel-slide :img-src="require(\'@/assets/images/slider/02.jpg\')" />\n\n      \x3c!-- Slides with image only --\x3e\n      <b-carousel-slide :img-src="require(\'@/assets/images/slider/03.jpg\')" />\n\n      \x3c!-- Slides with img slot --\x3e\n      \x3c!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment --\x3e\n      <b-carousel-slide>\n        <template #img>\n          <img\n            class="d-block img-fluid w-100"\n            width="924"\n            height="380"\n            :src="require(\'@/assets/images/slider/04.jpg\')"\n            alt="image slot"\n          >\n        </template>\n      </b-carousel-slide>\n    </b-carousel>\n\n    \x3c!-- programmatically  --\x3e\n    <div class="d-flex align-items-center justify-content-center mt-1">\n      <b-button-group>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n          @click="prev"\n        >\n          Pre\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n          @click="start"\n        >\n          {{ status ? \'Start\' : \'Pause\' }}\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n          @click="next"\n        >\n          Next\n        </b-button>\n      </b-button-group>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide, BButtonGroup, BButton} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  data: () => ({\n    status: false,\n  }),\n  methods: {\n    prev() {\n      if (!this.status) {\n        this.$refs.myCarousel.prev()\n      }\n    },\n    next() {\n      if (!this.status) {\n        this.$refs.myCarousel.next()\n      }\n    },\n    start() {\n      this.status = !this.status\n      if (this.status) {\n        this.$refs.myCarousel.pause()\n      } else {\n        this.$refs.myCarousel.start()\n      }\n    },\n  },\n}\n<\/script>\n'}},methods:{prev:function(){this.status||this.$refs.myCarousel.prev()},next:function(){this.status||this.$refs.myCarousel.next()},start:function(){this.status=!this.status,this.status?this.$refs.myCarousel.pause():this.$refs.myCarousel.start()}}},w=Object(d.a)(S,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Programmatic slide control"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeProgrammaticSlide)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("The ")]),e._v(" "),a("code",[e._v("<b-carousel>")]),e._v(" "),a("span",[e._v(" instance provides several public methods for controlling sliding:")]),e._v(" "),a("code",[e._v("setSlide(index), next(), prev(), pause(), start()")])]),e._v(" "),a("div",[a("b-carousel",{ref:"myCarousel",attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"924","img-height":"380"}},[a("b-carousel-slide",{attrs:{text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":t(193)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(197)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(153)}}),e._v(" "),a("b-carousel-slide",{scopedSlots:e._u([{key:"img",fn:function(){return[a("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"924",height:"380",src:t(234),alt:"image slot"}})]},proxy:!0}])})],1),e._v(" "),a("div",{staticClass:"d-flex align-items-center justify-content-center mt-1"},[a("b-button-group",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:e.prev}},[e._v("\n          Pre\n        ")]),e._v(" "),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:e.start}},[e._v("\n          "+e._s(e.status?"Start":"Pause")+"\n        ")]),e._v(" "),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:e.next}},[e._v("\n          Next\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null).exports,y={components:{BCardCode:l.a,BCarousel:n.a,BCarouselSlide:i.a,BCardText:o.a},data:function(){return{slide:0,sliding:null,codeVsupport:'\n<template>\n  <div>\n    <b-carousel\n      id="carousel-1"\n      v-model="slide"\n      :interval="4000"\n      controls\n      indicators\n      background="#ababab"\n      img-width="924"\n      img-height="380"\n      @sliding-start="onSlideStart"\n      @sliding-end="onSlideEnd"\n    >\n      \x3c!-- Text slides with image --\x3e\n      <b-carousel-slide\n        text="Nulla vitae elit libero, a pharetra augue mollis interdum."\n        :img-src="require(\'@/assets/images/slider/05.jpg\')"\n      />\n\n      \x3c!-- Slides with custom text --\x3e\n      <b-carousel-slide :img-src="require(\'@/assets/images/slider/06.jpg\')" />\n\n      \x3c!-- Slides with image only --\x3e\n      <b-carousel-slide :img-src="require(\'@/assets/images/slider/03.jpg\')" />\n\n      \x3c!-- Slides with img slot --\x3e\n      \x3c!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment --\x3e\n      <b-carousel-slide>\n        <template #img>\n          <img\n            class="d-block img-fluid w-100"\n            width="924"\n            height="380"\n            :src="require(\'@/assets/images/slider/04.jpg\')"\n            alt="image slot"\n          >\n        </template>\n      </b-carousel-slide>\n    </b-carousel>\n\n    <b-card-text class="mt-1 mb-0">\n      <strong>Slide #:</strong> {{ slide }} <strong>Sliding:</strong> {{ sliding }}\n    </b-card-text>\n  </div>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n    BCardText,\n  },\n  data: () => ({\n    slide: 0,\n    sliding: null,\n  }),\n  methods: {\n    onSlideStart() {\n      this.sliding = true\n    },\n    onSlideEnd() {\n      this.sliding = false\n    },\n  },\n}\n<\/script>\n'}},methods:{onSlideStart:function(){this.sliding=!0},onSlideEnd:function(){this.sliding=!1}}},k=Object(d.a)(y,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"v-model support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeVsupport)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Programmatically control which slide is showing via ")]),e._v(" "),a("code",[e._v("v-model")]),e._v(" "),a("span",[e._v(" (which binds to the ")]),e._v(" "),a("code",[e._v("value")]),a("span",[e._v(" prop).")])]),e._v(" "),a("div",[a("b-carousel",{attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"924","img-height":"380"},on:{"sliding-start":e.onSlideStart,"sliding-end":e.onSlideEnd},model:{value:e.slide,callback:function(s){e.slide=s},expression:"slide"}},[a("b-carousel-slide",{attrs:{text:"Nulla vitae elit libero, a pharetra augue mollis interdum.","img-src":t(449)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(269)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(153)}}),e._v(" "),a("b-carousel-slide",{scopedSlots:e._u([{key:"img",fn:function(){return[a("img",{staticClass:"d-block img-fluid w-100",attrs:{width:"924",height:"380",src:t(234),alt:"image slot"}})]},proxy:!0}])})],1),e._v(" "),a("b-card-text",{staticClass:"mt-1 mb-0"},[a("strong",[e._v("Slide #:")]),e._v(" "+e._s(e.slide)+" "),a("strong",[e._v("Sliding:")]),e._v(" "+e._s(e.sliding)+"\n    ")])],1)],1)}),[],!1,null,null,null).exports,j={components:{BCardCode:l.a,BCarousel:n.a,BCarouselSlide:i.a,BCardText:o.a},data:function(){return{codePause:'\n<template>\n  <b-carousel\n    id="carousel-interval"\n    no-hover-pause\n    controls\n    indicators\n    :interval="5000"\n  >\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/04.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/05.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/06.jpg\')" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n<\/script>\n'}}},q=Object(d.a)(j,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Pause Option"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codePause)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("To disable this feature, set the")]),e._v(" "),a("code",[e._v("no-hover-pause")]),e._v(" "),a("span",[e._v(" prop on.")])]),e._v(" "),a("b-carousel",{attrs:{id:"carousel-interval","no-hover-pause":"",controls:"",indicators:"",interval:5e3}},[a("b-carousel-slide",{attrs:{"img-src":t(234)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(449)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(269)}})],1)],1)}),[],!1,null,null,null).exports,T={components:{BCardCode:l.a,BCarousel:n.a,BCarouselSlide:i.a,BCardText:o.a},data:function(){return{codeWrap:'\n<template>\n  <b-carousel\n    id="carousel-interval"\n    no-wrap\n    controls\n    indicators\n    :interval="400"\n  >\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/01.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/02.jpg\')" />\n    <b-carousel-slide :img-src="require(\'@/assets/images/slider/04.jpg\')" />\n  </b-carousel>\n</template>\n\n<script>\nimport { BCarousel, BCarouselSlide } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCarousel,\n    BCarouselSlide,\n  },\n}\n<\/script>\n'}}},$=Object(d.a)(T,(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("b-card-code",{attrs:{title:"Wrap Option"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeWrap)+"\n  ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("To disable carousel slide wrapping, set the ")]),e._v(" "),a("code",[e._v("no-wrap")]),e._v(" "),a("span",[e._v(" prop to true.")])]),e._v(" "),a("b-carousel",{attrs:{id:"carousel-interval","no-wrap":"",controls:"",indicators:"",interval:400}},[a("b-carousel-slide",{attrs:{"img-src":t(193)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(197)}}),e._v(" "),a("b-carousel-slide",{attrs:{"img-src":t(234)}})],1)],1)}),[],!1,null,null,null).exports,I={components:{BCol:a.a,BRow:r.a,CarouselCaption:m,CarouselBasic:u,CarouselCrossFade:g,CarouselInterval:_,CarouselKeyboard:h,CarouselProgrammaticaSlide:w,CarouselVsupport:k,CarouselPause:q,CarouselWrap:$}},O=Object(d.a)(I,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("b-row",{staticClass:"match-height"},[t("b-col",{attrs:{md:"6"}},[t("carousel-basic")],1),e._v(" "),t("b-col",{attrs:{md:"6"}},[t("carousel-caption")],1),e._v(" "),t("b-col",{attrs:{md:"6"}},[t("carousel-interval")],1),e._v(" "),t("b-col",{attrs:{md:"6"}},[t("carousel-pause")],1),e._v(" "),t("b-col",{attrs:{md:"6"}},[t("carousel-wrap")],1),e._v(" "),t("b-col",{attrs:{md:"6"}},[t("carousel-cross-fade")],1),e._v(" "),t("b-col",{attrs:{md:"6"}},[t("carousel-keyboard")],1),e._v(" "),t("b-col",{attrs:{md:"6"}},[t("carousel-vsupport")],1),e._v(" "),t("b-col",{attrs:{md:"6"}},[t("carousel-programmatica-slide")],1)],1)}),[],!1,null,null,null);s.default=O.exports},193:function(e,s){e.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/slider/01.jpg"},4:function(e,s,t){"use strict";var a=t(16);s.a=a.a},449:function(e,s){e.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/slider/05.jpg"},529:function(e,s,t){var a=t(1028);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(23)(a,r);a.locals&&(e.exports=a.locals)},622:function(e,s){e.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/slider/08.jpg"}}]);