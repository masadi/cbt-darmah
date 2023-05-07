(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{1279:function(e,t,n){"use strict";n(663)},1280:function(e,t,n){(t=n(21)(!1)).push([e.i,"[dir] .knowledge-base-bg {\n  background-size: cover;\n  background-color: rgba(115, 103, 240, 0.12) !important;\n}\n[dir] .knowledge-base-bg .kb-search-input .input-group:focus-within {\n  box-shadow: none;\n}\n[dir] .kb-search-content-info .kb-search-content .card-img-top {\n  background-color: #fcfcfc;\n}\n.kb-search-content-info .no-result.no-items {\n  display: none;\n}\n.kb-title {\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 768px) {\n.knowledge-base-bg .kb-search-input .input-group {\n    width: 576px;\n}\n[dir] .knowledge-base-bg .kb-search-input .input-group {\n    margin: 0 auto;\n}\n}\n@media (min-width: 992px) {\n[dir] .knowledge-base-bg .card-body {\n    padding: 8rem;\n}\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n[dir] .knowledge-base-bg .card-body {\n    padding: 6rem;\n}\n}\n[dir] .list-group-circle .list-group-item-action:focus, [dir] .list-group-circle .list-group-item-action:active {\n  background-color: transparent;\n}\n[dir] .question-content ul li {\n  margin-bottom: 1rem;\n}\n.question-content ul li a {\n  color: inherit;\n}",""]),e.exports=t},1550:function(e,t,n){"use strict";n.r(t);n(75),n(40),n(133),n(142);var r=n(1798),a=n(341),c=n(1801),o=n(337),s=n(1799),i=n(438),u=n(1802),l=n(533),b=n(1800),d={components:{BRow:r.a,BCol:a.a,BCard:c.a,BCardBody:o.a,BCardText:s.a,BForm:i.a,BInputGroup:u.a,BInputGroupPrepend:l.a,BFormInput:b.a},data:function(){return{knowledgeBaseSearchQuery:"",kb:[]}},computed:{filteredKB:function(){var e=this.knowledgeBaseSearchQuery.toLowerCase();return this.kb.filter((function(t){return t.title.toLowerCase().includes(e)||t.desc.toLowerCase().includes(e)}))}},created:function(){var e=this;this.$http.get("/kb/data/knowledge_base").then((function(t){e.kb=t.data}))}},p=(n(1279),n(0)),g=Object(p.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("section",{attrs:{id:"knowledge-base-search"}},[r("b-card",{staticClass:"knowledge-base-bg text-center",style:{backgroundImage:"url("+n(450)+")"},attrs:{"no-body":""}},[r("b-card-body",{staticClass:"card-body"},[r("h2",{staticClass:"text-primary"},[e._v("\n          Dedicated Source Used on Website\n        ")]),e._v(" "),r("b-card-text",{staticClass:"mb-2"},[r("span",[e._v("Popular searches: ")]),e._v(" "),r("span",{staticClass:"font-weight-bolder"},[e._v("Sales automation, Email marketing")])]),e._v(" "),r("b-form",{staticClass:"kb-search-input"},[r("b-input-group",{staticClass:"input-group-merge"},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("feather-icon",{attrs:{icon:"SearchIcon"}})],1),e._v(" "),r("b-form-input",{attrs:{id:"searchbar",placeholder:"Ask a question...."},model:{value:e.knowledgeBaseSearchQuery,callback:function(t){e.knowledgeBaseSearchQuery=t},expression:"knowledgeBaseSearchQuery"}})],1)],1)],1)],1)],1),e._v(" "),r("section",{attrs:{id:"knowledge-base-content"}},[r("b-row",{staticClass:"kb-search-content-info match-height"},[e._l(e.filteredKB,(function(t){return r("b-col",{key:t.id,staticClass:"kb-search-content",attrs:{md:"4",sm:"6"}},[r("b-card",{staticClass:"text-center cursor-pointer",attrs:{"img-src":t.img,"img-alt":t.img.slice(5),"img-top":""},on:{click:function(n){return e.$router.push({name:"pages-knowledge-base-category",params:{category:t.category}})}}},[r("h4",[e._v(e._s(t.title))]),e._v(" "),r("b-card-text",{staticClass:"mt-1"},[e._v("\n            "+e._s(t.desc)+"\n          ")])],1)],1)})),e._v(" "),r("b-col",{directives:[{name:"show",rawName:"v-show",value:!e.filteredKB.length,expression:"!filteredKB.length"}],staticClass:"text-center",attrs:{cols:"12"}},[r("h4",{staticClass:"mt-4"},[e._v("\n          Search result not found!!\n        ")])])],2)],1)])}),[],!1,null,null,null);t.default=g.exports},1798:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(48),a=n(5),c=n(2),o=n(22),s=n(67),i=n(34),u=n(201),l=n(13),b=n(1),d=n(27);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=["start","end","center"],m=Object(u.a)((function(e,t){return(t=Object(d.h)(Object(d.g)(t)))?Object(d.c)(["row-cols",e,t].filter(i.a).join("-")):null})),w=Object(u.a)((function(e){return Object(d.c)(e.replace("cols",""))})),O=[],k={name:a.Ob,functional:!0,get props(){var e;return delete this.props,this.props=(e=Object(s.b)().reduce((function(e,t){return e[Object(b.g)(t,"cols")]=Object(b.c)(c.p),e}),Object(l.c)(null)),O=Object(l.h)(e),Object(b.d)(Object(l.m)(g(g({},e),{},{alignContent:Object(b.c)(c.u,null,(function(e){return Object(o.a)(Object(o.b)(f,"between","around","stretch"),e)})),alignH:Object(b.c)(c.u,null,(function(e){return Object(o.a)(Object(o.b)(f,"between","around"),e)})),alignV:Object(b.c)(c.u,null,(function(e){return Object(o.a)(Object(o.b)(f,"baseline","stretch"),e)})),noGutters:Object(b.c)(c.g,!1),tag:Object(b.c)(c.u,"div")})),a.Ob)),this.props},render:function(e,t){var n,a=t.props,c=t.data,o=t.children,s=a.alignV,i=a.alignH,u=a.alignContent,l=[];return O.forEach((function(e){var t=m(w(e),a[e]);t&&l.push(t)})),l.push((h(n={"no-gutters":a.noGutters},"align-items-".concat(s),s),h(n,"justify-content-".concat(i),i),h(n,"align-content-".concat(u),u),n)),e(a.tag,Object(r.a)(c,{staticClass:"row",class:l}),o)}}},450:function(e,t){e.exports="/images/_/_/_/_/dashboard-2022/resources/js/src/assets/images/banner/banner.png"},663:function(e,t,n){var r=n(1280);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(23)(r,a);r.locals&&(e.exports=r.locals)}}]);