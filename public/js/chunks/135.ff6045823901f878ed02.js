(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{105:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"d",(function(){return d}));var a=n(81),r=n(343),i=n(74),s=n(9),o=function(t){return"object"===Object(r.a)(t)&&null!==t},c=function(t){var e=new Date;return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()},l=function(t){return i.a.resolve(t).route.path===i.a.currentRoute.path},d=function(){var t=Object(s.getCurrentInstance)().proxy,e=Object(s.reactive)({route:t.$route});return Object(s.watch)((function(){return t.$route}),(function(t){e.route=t})),Object(a.a)(Object(a.a)({},Object(s.toRefs)(e)),{},{router:t.$router})}},1063:function(t,e,n){"use strict";n(560)},1064:function(t,e,n){(e=n(21)(!1)).push([t.i,".cws-container {\n  position: relative;\n}\n.cws-container .cws-content {\n  width: calc(100% - 260px - 2rem);\n}\n@media (max-width: 992px) {\n.cws-container .cws-content {\n    width: 100%;\n}\n}\n.cws-container .cws-sidebar {\n  width: 260px;\n  position: absolute;\n  top: 0;\n}\n[dir=ltr] .cws-container .cws-sidebar {\n  right: 0;\n}\n[dir=rtl] .cws-container .cws-sidebar {\n  left: 0;\n}\n@media (max-width: 992px) {\n.cws-container .cws-sidebar {\n    position: static;\n    width: 100%;\n}\n[dir] .cws-container .cws-sidebar {\n    margin-top: 2rem;\n}\n}",""]),t.exports=e},1291:function(t,e,n){"use strict";n(666)},1292:function(t,e,n){(e=n(21)(!1)).push([t.i,".blog-list-wrapper .blog-title-truncate {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.blog-list-wrapper .blog-content-truncate {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.blog-detail-wrapper .blog-detail-share .dropdown-menu {\n  min-width: auto;\n}\n.blog-sidebar .blog-recent-posts img {\n  object-fit: cover;\n}\n.blog-sidebar .blog-recent-posts .text-body-heading:hover {\n  color: #5e50ee !important;\n}\n.blog-sidebar .blog-recent-post-title, .blog-sidebar .blog-category-title {\n  line-height: 23px;\n  letter-spacing: 0;\n}\n[dir] .blog-edit-wrapper .border {\n  border-color: #d8d6de !important;\n}",""]),t.exports=e},1561:function(t,e,n){"use strict";n.r(e);var a=n(1805),r=n(342),i=n(1807),s=n(1808),o=n(1806),c=n(338),l=n(337),d=n(1811),u=n(534),b=n(537),g=n(536),p=n(59),m=n(539),v=n(1843),h=n(1809),f=n(533),w=n(222),_=n(1822),C=n(50),y=n(405),x={components:{BRow:a.a,BCol:r.a,BCard:i.a,BFormInput:s.a,BCardText:o.a,BCardBody:c.a,BCardTitle:l.a,BMedia:d.a,BAvatar:u.a,BMediaAside:b.a,BMediaBody:g.a,BLink:p.a,BBadge:m.a,BFormGroup:v.a,BInputGroup:h.a,BInputGroupAppend:f.a,BImg:w.a,BPagination:_.a,ContentWithSidebar:y.a},data:function(){return{search_query:"",blogList:[],blogSidebar:{},currentPage:1,perPage:1,rows:140}},created:function(){var t=this;this.$http.get("/blog/list/data").then((function(e){t.blogList=e.data})),this.$http.get("/blog/list/data/sidebar").then((function(e){t.blogSidebar=e.data}))},methods:{kFormatter:C.e,tagsColor:function(t){return"Quote"===t?"light-info":"Gaming"===t?"light-danger":"Fashion"===t?"light-primary":"Video"===t?"light-warning":"Food"===t?"light-success":"light-primary"}}},k=(n(1291),n(0)),B=Object(k.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("content-with-sidebar",{staticClass:"blog-wrapper"},[n("b-row",{staticClass:"blog-list-wrapper"},[t._l(t.blogList,(function(e){return n("b-col",{key:e.img,attrs:{md:"6"}},[n("b-card",{attrs:{tag:"article","no-body":""}},[n("b-link",{attrs:{to:{name:"pages-blog-detail",params:{id:e.id}}}},[n("b-img",{staticClass:"card-img-top",attrs:{src:e.img,alt:e.img.slice(5)}})],1),t._v(" "),n("b-card-body",[n("b-card-title",[n("b-link",{staticClass:"blog-title-truncate text-body-heading",attrs:{to:{name:"pages-blog-detail",params:{id:e.id}}}},[t._v("\n              "+t._s(e.title)+"\n            ")])],1),t._v(" "),n("b-media",{attrs:{"no-body":""}},[n("b-media-aside",{staticClass:"mr-50",attrs:{"vertical-align":"center"}},[n("b-avatar",{attrs:{href:"javascript:void(0)",size:"24",src:e.avatar}})],1),t._v(" "),n("b-media-body",[n("small",{staticClass:"text-muted mr-50"},[t._v("by")]),t._v(" "),n("small",[n("b-link",{staticClass:"text-body"},[t._v(t._s(e.userFullName))])],1),t._v(" "),n("span",{staticClass:"text-muted ml-75 mr-50"},[t._v("|")]),t._v(" "),n("small",{staticClass:"text-muted"},[t._v(t._s(e.blogPosted))])])],1),t._v(" "),n("div",{staticClass:"my-1 py-25"},t._l(e.tags,(function(e,a){return n("b-link",{key:a},[n("b-badge",{staticClass:"mr-75",attrs:{pill:"",variant:t.tagsColor(e)}},[t._v("\n                "+t._s(e)+"\n              ")])],1)})),1),t._v(" "),n("b-card-text",{staticClass:"blog-content-truncate"},[t._v("\n            "+t._s(e.excerpt)+"\n          ")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"d-flex justify-content-between align-items-center"},[n("b-link",{attrs:{to:{path:"/pages/blog/"+e.id+"#blogComment"}}},[n("div",{staticClass:"d-flex align-items-center text-body"},[n("feather-icon",{staticClass:"mr-50",attrs:{icon:"MessageSquareIcon"}}),t._v(" "),n("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.kFormatter(e.comment))+" Comments")])],1)]),t._v(" "),n("b-link",{staticClass:"font-weight-bold",attrs:{to:{name:"pages-blog-detail",params:{id:e.id}}}},[t._v("\n              Read More\n            ")])],1)],1)],1)],1)})),t._v(" "),n("b-col",{attrs:{cols:"12"}},[n("div",{staticClass:"my-2"},[n("b-pagination",{attrs:{align:"center","total-rows":t.rows,"first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},scopedSlots:t._u([{key:"prev-text",fn:function(){return[n("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[n("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])],2),t._v(" "),n("div",{staticClass:"blog-sidebar py-2 py-lg-0",attrs:{slot:"sidebar"},slot:"sidebar"},[n("b-form-group",{staticClass:"blog-search"},[n("b-input-group",{staticClass:"input-group-merge"},[n("b-form-input",{attrs:{id:"search-input",placeholder:"Search here"},model:{value:t.search_query,callback:function(e){t.search_query=e},expression:"search_query"}}),t._v(" "),n("b-input-group-append",{staticClass:"cursor-pointer",attrs:{"is-text":""}},[n("feather-icon",{attrs:{icon:"SearchIcon"}})],1)],1)],1),t._v(" "),n("div",{staticClass:"blog-recent-posts mt-3"},[n("h6",{staticClass:"section-label mb-75"},[t._v("\n        Recent Posts\n      ")]),t._v(" "),t._l(t.blogSidebar.recentPosts,(function(e,a){return n("b-media",{key:e.img,class:a?"mt-2":"",attrs:{"no-body":""}},[n("b-media-aside",{staticClass:"mr-2"},[n("b-link",{attrs:{to:{name:"pages-blog-detail",params:{id:e.id}}}},[n("b-img",{attrs:{src:e.img,alt:e.img.slice(6),width:"100",rounded:"",height:"70"}})],1)],1),t._v(" "),n("b-media-body",[n("h6",{staticClass:"blog-recent-post-title"},[n("b-link",{staticClass:"text-body-heading",attrs:{to:{name:"pages-blog-detail",params:{id:e.id}}}},[t._v("\n              "+t._s(e.title)+"\n            ")])],1),t._v(" "),n("span",{staticClass:"text-muted mb-0"},[t._v("\n            "+t._s(e.createdTime)+"\n          ")])])],1)}))],2),t._v(" "),n("div",{staticClass:"blog-categories mt-3"},[n("h6",{staticClass:"section-label mb-1"},[t._v("\n        Categories\n      ")]),t._v(" "),t._l(t.blogSidebar.categories,(function(e){return n("div",{key:e.icon,staticClass:"d-flex justify-content-start align-items-center mb-75"},[n("b-link",[n("b-avatar",{staticClass:"mr-75",attrs:{rounded:"",size:"32",variant:t.tagsColor(e.category)}},[n("feather-icon",{attrs:{icon:e.icon,size:"16"}})],1)],1),t._v(" "),n("b-link",[n("div",{staticClass:"blog-category-title text-body"},[t._v("\n            "+t._s(e.category)+"\n          ")])])],1)}))],2)],1)],1)}),[],!1,null,null,null);e.default=B.exports},405:function(t,e,n){"use strict";var a={},r=(n(1063),n(0)),i=Object(r.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cws-container cws-sidebar-right"},[e("div",{staticClass:"cws-content"},[this._t("default")],2),this._v(" "),e("div",{staticClass:"cws-sidebar"},[this._t("sidebar")],2)])}),[],!1,null,null,null);e.a=i.exports},50:function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return l}));n(245),n(39),n(298),n(165),n(1030),n(189),n(177),n(52),n(535),n(190),n(345);var a=n(105),r=function(t){return t>999?"".concat((t/1e3).toFixed(1),"k"):t},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(!t)return"";var n=t.toString(),a=n.split(e),r=[];return a.forEach((function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);r.push(e)})),r.join(" ")},s=function(t){return t?t.split(" ").map((function(t){return t.charAt(0).toUpperCase()})).join(""):""},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{month:"short",day:"numeric",year:"numeric"};return t?new Intl.DateTimeFormat("en-US",e).format(new Date(t)):t},c=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=new Date(t),r={month:"short",day:"numeric"};return e&&Object(a.c)(n)&&(r={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",r).format(new Date(t))},l=function(t){return t.replace(/<\/?[^>]+(>|$)/g,"")}},560:function(t,e,n){var a=n(1064);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(23)(a,r);a.locals&&(t.exports=a.locals)},666:function(t,e,n){var a=n(1292);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(23)(a,r);a.locals&&(t.exports=a.locals)}}]);