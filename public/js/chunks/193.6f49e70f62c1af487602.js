(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{1167:function(a,t,n){"use strict";n(619)},1168:function(a,t,n){(t=n(20)(!1)).push([a.i,"[dir] .faq-search {\n  background-size: cover;\n  background-color: rgba(115, 103, 240, 0.12) !important;\n}\n[dir] .faq-search .faq-search-input .input-group:focus-within {\n  box-shadow: none;\n}\n[dir] .faq-contact .faq-contact-card {\n  background-color: rgba(186, 191, 199, 0.12);\n}\n@media (min-width: 992px) {\n[dir] .faq-search .card-body {\n    padding: 8rem !important;\n}\n}\n@media (min-width: 768px) and (max-width: 991.98px) {\n[dir] .faq-search .card-body {\n    padding: 6rem !important;\n}\n}\n@media (min-width: 768px) {\n.faq-search .faq-search-input .input-group {\n    width: 576px;\n}\n[dir] .faq-search .faq-search-input .input-group {\n    margin: 0 auto;\n}\n.faq-navigation {\n    height: 550px;\n}\n}\n.faq-navigation .nav.nav-pills {\n  height: 100%;\n}",""]),a.exports=t},1549:function(a,t,n){"use strict";n.r(t);var s=n(439),e=n(1825),i=n(1823),r=n(347),o=n(535),c=n(343),p=n(1827),l=n(1826),d=n(1824),h=n(533),u=n(1847),m=n(1855),f=n(224),v=n(55),b=n(135),_=n(136),g={components:{BAvatar:o.a,AppCollapseItem:_.a,AppCollapse:b.a},props:{options:{type:Object,default:function(){}}}},k=n(0),w=Object(k.a)(g,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return a.options?n("div",[n("div",{staticClass:"d-flex align-items-center"},[n("b-avatar",{staticClass:"mr-1",attrs:{rounded:"",size:"42",variant:"light-primary"}},[n("feather-icon",{attrs:{icon:a.options.icon,size:"20"}})],1),a._v(" "),n("div",[n("h4",{staticClass:"mb-0"},[a._v("\n        "+a._s(a.options.title)+"\n      ")]),a._v(" "),n("span",[a._v(a._s(a.options.deskripsi))])])],1),a._v(" "),n("app-collapse",{staticClass:"mt-2",attrs:{id:"faq-payment-qna",accordion:"",type:"margin"}},a._l(a.options.faq,(function(t,s){return n("app-collapse-item",{key:t.id,attrs:{title:t.question}},[n("span",{domProps:{innerHTML:a._s(t.answer)}})])})),1)],1):a._e()}),[],!1,null,null,null).exports,q={components:{BForm:s.a,BCard:e.a,BRow:i.a,BCol:r.a,BAvatar:o.a,BCardBody:c.a,BInputGroup:p.a,BFormInput:l.a,BCardText:d.a,BInputGroupPrepend:h.a,BTabs:u.a,BTab:m.a,BImg:f.a,FaqQuestionAnswer:w,BIconWhatsapp:v.s},data:function(){return{faqSearchQuery:"",faqData:{}}},watch:{faqSearchQuery:{immediate:!0,handler:function(){this.fetchData()}}},methods:{fetchData:function(){}}},y=(n(1167),Object(k.a)(q,(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("section",{attrs:{id:"faq-search-filter"}},[s("b-card",{staticClass:"faq-search",style:{backgroundImage:"url("+n(364)+")"},attrs:{"no-body":""}},[s("b-card-body",{staticClass:"text-center"},[s("h2",{staticClass:"text-primary"},[a._v("\n          Cari pertanyaan yang sering ditanyakan\n        ")]),a._v(" "),s("b-card-text",{staticClass:"mb-2"},[a._v("\n          atau pilih kategori untuk menemukan bantuan yang Anda butuhkan dengan cepat\n        ")]),a._v(" "),s("b-form",{staticClass:"faq-search-input"},[s("b-input-group",{staticClass:"input-group-merge"},[s("b-input-group-prepend",{attrs:{"is-text":""}},[s("feather-icon",{attrs:{icon:"SearchIcon"}})],1),a._v(" "),s("b-form-input",{attrs:{id:"searchbar",placeholder:"Cari pertanyaan..."},model:{value:a.faqSearchQuery,callback:function(t){a.faqSearchQuery=t},expression:"faqSearchQuery"}})],1)],1)],1)],1)],1),a._v(" "),s("section",{attrs:{id:"faq-tabs"}},[s("b-tabs",{attrs:{vertical:"","content-class":"col-12 col-md-8 col-lg-9",pills:"","nav-wrapper-class":"faq-navigation col-md-4 col-lg-3 col-12","nav-class":"nav-left"},scopedSlots:a._u([{key:"tabs-end",fn:function(){return[s("b-img",{staticClass:"d-none d-md-block mt-auto",attrs:{fluid:"",src:n(618)}})]},proxy:!0}])},a._l(a.faqData,(function(t,n,e){return s("b-tab",{key:n,attrs:{active:!e},scopedSlots:a._u([{key:"title",fn:function(){return[s("feather-icon",{staticClass:"mr-1",attrs:{icon:t.icon,size:"18"}}),a._v(" "),s("span",{staticClass:"font-weight-bold"},[a._v(a._s(t.title))])]},proxy:!0}],null,!0)},[a._v(" "),s("faq-question-answer",{attrs:{options:t}})],1)})),1)],1),a._v(" "),s("section",{staticClass:"faq-contact"},[s("b-row",{staticClass:"mt-5 pt-75 text-center"},[s("b-col",{attrs:{cols:"12"}},[s("h2",[a._v("Anda masih memiliki pertanyaan?")]),a._v(" "),s("b-card-text",{staticClass:"mb-3"},[a._v("\n          Jika Anda tidak dapat menemukan pertanyaan di FAQ kami, Anda selalu dapat menghubungi kami. Kami akan\n          menjawab Anda segera!\n        ")])],1),a._v(" "),s("b-col",{attrs:{sm:"6"}},[s("b-card",{staticClass:"shadow-none py-1 faq-contact-card"},[s("h3",[a._v("Informasi seputar teknis aplikasi")]),a._v(" "),s("div",{staticClass:"btn-group-vertical"},[s("a",{attrs:{target:"_blank",href:"https://api.whatsapp.com/send?phone=628156441864&text=NPSN:20532211"}},[s("b-icon-whatsapp"),a._v(" Wahyudin [08156441864]")],1),a._v(" "),s("a",{attrs:{target:"_blank",href:"https://api.whatsapp.com/send?phone=6281229997730&text=NPSN:20532211"}},[s("b-icon-whatsapp"),a._v(" Ahmad Aripin [081229997730]")],1),a._v(" "),s("a",{attrs:{target:"_blank",href:"https://api.whatsapp.com/send?phone=6282113057512&text=NPSN:20532211"}},[s("b-icon-whatsapp"),a._v(" Iman [082113057512]")],1),a._v(" "),s("a",{attrs:{target:"_blank",href:"https://api.whatsapp.com/send?phone=6282174508706&text=NPSN:20532211"}},[s("b-icon-whatsapp"),a._v(" Ikhsan [082174508706]")],1),a._v(" "),s("a",{attrs:{target:"_blank",href:"https://api.whatsapp.com/send?phone=6282134924288&text=NPSN:20532211"}},[s("b-icon-whatsapp"),a._v(" Toni [082134924288]")],1),a._v(" "),s("a",{attrs:{target:"_blank",href:"https://api.whatsapp.com/send?phone=6285624669298&text=NPSN:20532211"}},[s("b-icon-whatsapp"),a._v(" Deetha [085624669298]")],1)])])],1),a._v(" "),s("b-col",{attrs:{sm:"6"}},[s("b-card",{staticClass:"shadow-none py-1 faq-contact-card"},[s("b-avatar",{staticClass:"mb-2",attrs:{size:"42",rounded:"",variant:"light-primary"}},[s("feather-icon",{attrs:{icon:"MailIcon",size:"18"}})],1),a._v(" "),s("h4",[a._v("eraporsmk@gmail.com")]),a._v(" "),s("span",{staticClass:"text-body"},[a._v("Kritik dan saran silahkan kirim ke email ini.")])],1)],1)],1)],1)])}),[],!1,null,null,null));t.default=y.exports},619:function(a,t,n){var s=n(1168);"string"==typeof s&&(s=[[a.i,s,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};n(23)(s,e);s.locals&&(a.exports=s.locals)}}]);