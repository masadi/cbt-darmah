(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{105:function(a,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return l})),r.d(t,"d",(function(){return p}));var e=r(81),n=r(348),o=r(76),s=r(9),i=function(a){return"object"===Object(n.a)(a)&&null!==a},c=function(a){var t=new Date;return a.getDate()===t.getDate()&&a.getMonth()===t.getMonth()&&a.getFullYear()===t.getFullYear()},l=function(a){return o.a.resolve(a).route.path===o.a.currentRoute.path},p=function(){var a=Object(s.getCurrentInstance)().proxy,t=Object(s.reactive)({route:a.$route});return Object(s.watch)((function(){return a.$route}),(function(a){t.route=a})),Object(e.a)(Object(e.a)({},Object(s.toRefs)(t)),{},{router:a.$router})}},1165:function(a,t,r){"use strict";r(617)},1166:function(a,t,r){(t=r(20)(!1)).push([a.i,'[dir] .card-statistics .statistics-body {\n  padding: 2rem 2.4rem !important;\n}\n@media (max-width: 991.98px) {\n[dir] .card-statistics .card-header, [dir] .card-statistics .statistics-body {\n    padding: 1.5rem !important;\n}\n}\n[dir] .card-company-table thead th {\n  border: 0;\n}\n[dir] .card-company-table td {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n[dir] .card-company-table td .avatar {\n  background-color: #f8f8f8;\n}\n[dir=ltr] .card-company-table td .avatar {\n  margin-right: 2rem;\n}\n[dir=rtl] .card-company-table td .avatar {\n  margin-left: 2rem;\n}\n[dir] .card-company-table td .avatar img {\n  border-radius: 0;\n}\n[dir] .card-browser-states .browser-states:first-child {\n  margin-top: 0;\n}\n[dir] .card-browser-states .browser-states:not(:first-child) {\n  margin-top: 1.7rem;\n}\n[dir] .card-transaction .transaction-item:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n[dir] .card-company-table td .b-avatar.badge-light-company {\n  background-color: #f8f8f8;\n}\n[dir=ltr] .card-company-table td .b-avatar.badge-light-company {\n  margin-right: 2rem;\n}\n[dir=rtl] .card-company-table td .b-avatar.badge-light-company {\n  margin-left: 2rem;\n}\n.apexcharts-canvas line[stroke=transparent] {\n  display: none;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip {\n  background: #fff;\n  border-color: #ebe9f1;\n}\n.apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  font-weight: 600;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #fff !important;\n  border-color: #ebe9f1 !important;\n}\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-label, .apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #f8f8f8;\n  border-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #f8f8f8;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #f8f8f8;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #ebe9f1;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-right-color: #ebe9f1;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #f8f8f8;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-right-color: #f8f8f8;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #ebe9f1;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-left-color: #ebe9f1;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #f8f8f8;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-left-color: #f8f8f8;\n}\n.apexcharts-canvas .apexcharts-text, .apexcharts-canvas .apexcharts-tooltip-text, .apexcharts-canvas .apexcharts-datalabel-label, .apexcharts-canvas .apexcharts-datalabel {\n  font-family: "Montserrat", Helvetica, Arial, serif !important;\n  fill: #6e6b7b;\n  font-weight: 400;\n  filter: none;\n}\n.apexcharts-canvas .apexcharts-pie-label {\n  fill: #fff;\n  filter: none;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-pie-series .apexcharts-pie-area {\n  stroke-width: 0;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-label, .apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-value {\n  font-size: 1.5rem;\n}\n[dir] .apexcharts-canvas .apexcharts-marker {\n  box-shadow: none;\n}\n[dir] .apexcharts-canvas .apexcharts-legend-series + .apexcharts-legend-series {\n  margin-top: 0.625rem;\n}\n.apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #6e6b7b !important;\n  font-size: 1rem !important;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-left: 0.5rem;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-right: 0.5rem;\n}\n.apexcharts-canvas .apexcharts-xcrosshairs, .apexcharts-canvas .apexcharts-ycrosshairs, .apexcharts-canvas .apexcharts-gridline {\n  stroke: #ebe9f1;\n}\n.apexcharts-legend.position-bottom {\n  bottom: 3rem;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-tick, .dark-layout .apexcharts-canvas line {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-heatmap .apexcharts-heatmap-rect {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radialbar .apexcharts-radialbar-track .apexcharts-radialbar-area {\n  stroke: #161d31;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radar-series polygon {\n  fill: #161d31;\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-datalabels-group .apexcharts-datalabel-value {\n  fill: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip {\n  background: #283046;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #283046 !important;\n  border-color: #3b4253 !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-label, .dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #161d31;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #161d31;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #3b4253;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-right-color: #3b4253;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #161d31;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-right-color: #161d31;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #3b4253;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-left-color: #3b4253;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #161d31;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-left-color: #161d31;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #161d31;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text, .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-yaxistooltip-text, .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-xaxistooltip-text, .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-yaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-yaxis-label, .dark-layout .apexcharts-canvas .apexcharts-xaxis-label, .dark-layout .apexcharts-canvas .apexcharts-tooltip-text, .dark-layout .apexcharts-canvas .apexcharts-datalabel-label {\n  fill: #b4b7bd;\n}\n.dark-layout .apexcharts-canvas .apexcharts-marker {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #b4b7bd !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xcrosshairs, .dark-layout .apexcharts-canvas .apexcharts-ycrosshairs, .dark-layout .apexcharts-canvas .apexcharts-gridline {\n  stroke: #3b4253;\n}',""]),a.exports=t},1531:function(a,t,r){"use strict";r.r(t);var e=r(1825),n=r(345),o=r(342),s=r(343),i=r(1823),c=r(347),l=r(1824),p=r(59),d=r(224),h=r(89),x=r(550),u=r(11),f=r(45),b={components:{BRow:i.a,BCol:c.a,BCard:e.a,BCardText:l.a,BLink:p.a,BImg:d.a,BButton:h.a,BSpinner:x.a},directives:{Ripple:u.a},methods:{kFormatter:f.e},data:function(){return{isBusy:!0,data:{}}},created:function(){}},m=r(0),v=Object(m.a)(b,(function(){var a=this.$createElement;return(this._self._c||a)("div",[this._v("\n  blanko-administrator\n")])}),[],!1,null,null,null).exports,y={components:{BRow:i.a,BCol:c.a,BCard:e.a,BCardText:l.a,BLink:p.a,BImg:d.a,BButton:h.a,BSpinner:x.a},directives:{Ripple:u.a},methods:{kFormatter:f.e},data:function(){return{isBusy:!0,data:{}}},created:function(){}},k=Object(m.a)(y,(function(){var a=this.$createElement;return(this._self._c||a)("div",[this._v("\n  blanko-direktorat\n")])}),[],!1,null,null,null).exports,g=r(201),B=(r(69),r(439)),_=r(1826),j=r(1827),w=r(533),C=Object(g.a)({components:{BForm:B.a,BRow:i.a,BCol:c.a,BFormInput:_.a,BInputGroup:j.a,BInputGroupPrepend:w.a,BButton:h.a,BSpinner:x.a},directives:{Ripple:u.a},methods:{kFormatter:f.e},data:function(){return{form:{jumlah:0,start:"",end:""},isBusy:!0,data:{}}},created:function(){var a=this;this.$http.get("/referensi/blanko").then((function(t){console.log(t.data),a.isBusy=!1}))}},"methods",{onSubmit:function(a){a.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(a){var t=this;a.preventDefault(),this.isBusy=!0,this.$nextTick((function(){t.isBusy=!1}))}}),R=Object(m.a)(C,(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",[a.isBusy?r("div",{staticClass:"text-center text-danger my-2"},[r("b-spinner",{staticClass:"align-middle"}),a._v(" "),r("strong",[a._v("Loading...")])],1):a._e(),a._v(" "),a.isBusy?a._e():r("b-form",{on:{submit:a.onSubmit,reset:a.onReset}},[r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"jumlah"}},[a._v("Jumlah Blanko Ijazah Diterima")])]),a._v(" "),r("b-col",{attrs:{sm:"9"}},[r("b-form-input",{attrs:{id:"jumlah",type:"number"},model:{value:a.form.jumlah,callback:function(t){a.$set(a.form,"jumlah",t)},expression:"form.jumlah"}})],1)],1),a._v(" "),r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"start"}},[a._v("Nomor Seri")])]),a._v(" "),r("b-col",{attrs:{sm:"9"}},[r("b-input-group",[r("b-form-input",{attrs:{type:"text",id:"start"},model:{value:a.form.start,callback:function(t){a.$set(a.form,"start",t)},expression:"form.start"}}),a._v(" "),r("b-input-group-prepend",{attrs:{"is-text":""}},[r("b",[a._v("s/d")])]),a._v(" "),r("b-form-input",{attrs:{type:"text",id:"end"},model:{value:a.form.end,callback:function(t){a.$set(a.form,"end",t)},expression:"form.end"}})],1)],1)],1),a._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[a._v("Simpan")]),a._v(" "),r("b-button",{attrs:{type:"reset",variant:"danger"}},[a._v("Reset")])],1)],1)}),[],!1,null,null,null).exports,S={components:{BRow:i.a,BCol:c.a,BCard:e.a,BCardText:l.a,BLink:p.a,BImg:d.a,BButton:h.a,BSpinner:x.a},directives:{Ripple:u.a},methods:{kFormatter:f.e},data:function(){return{isBusy:!0,data:{}}},created:function(){}},$=Object(m.a)(S,(function(){var a=this.$createElement;return(this._self._c||a)("div",[this._v("\n  blanko-diskab\n")])}),[],!1,null,null,null).exports,D=r(534),I={components:{BForm:B.a,BRow:i.a,BCol:c.a,BFormInput:_.a,BInputGroup:j.a,BInputGroupPrepend:w.a,BInputGroupAppend:D.a,BButton:h.a,BSpinner:x.a},data:function(){return{form:{jumlah:0,start:"",end:""},isBusy:!0,data:{}}},created:function(){var a=this;this.$http.get("/referensi/blanko").then((function(t){console.log(t.data),a.isBusy=!1}))},methods:{onSubmit:function(a){a.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(a){var t=this;a.preventDefault(),this.isBusy=!0,this.$nextTick((function(){t.isBusy=!1}))}}},O=Object(m.a)(I,(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("div",[a.isBusy?r("div",{staticClass:"text-center text-danger my-2"},[r("b-spinner",{staticClass:"align-middle"}),a._v(" "),r("strong",[a._v("Loading...")])],1):a._e(),a._v(" "),a.isBusy?a._e():r("b-form",{on:{submit:a.onSubmit,reset:a.onReset}},[r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"jumlah"}},[a._v("Jumlah Blanko Ijazah Diterima")])]),a._v(" "),r("b-col",{attrs:{sm:"9"}},[r("b-input-group",[r("b-form-input",{attrs:{type:"text",id:"jumlah"},model:{value:a.form.jumlah,callback:function(t){a.$set(a.form,"jumlah",t)},expression:"form.jumlah"}}),a._v(" "),r("b-input-group-append",{attrs:{"is-text":""}},[r("b",[a._v("eksemplar")])])],1)],1)],1),a._v(" "),r("b-row",{staticClass:"my-1"},[r("b-col",{attrs:{sm:"3"}},[r("label",{attrs:{for:"start"}},[a._v("Nomor Seri")])]),a._v(" "),r("b-col",{attrs:{sm:"9"}},[r("b-input-group",[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("b",[a._v("M-SMK/K-13-3/")])]),a._v(" "),r("b-form-input",{attrs:{type:"text",id:"start"},model:{value:a.form.start,callback:function(t){a.$set(a.form,"start",t)},expression:"form.start"}}),a._v(" "),r("b-input-group-prepend",{attrs:{"is-text":""}},[r("b",[a._v("s/d")])]),a._v(" "),r("b-input-group-prepend",{attrs:{"is-text":""}},[r("b",[a._v("M-SMK/K-13-3/")])]),a._v(" "),r("b-form-input",{attrs:{type:"text",id:"end"},model:{value:a.form.end,callback:function(t){a.$set(a.form,"end",t)},expression:"form.end"}})],1)],1)],1),a._v(" "),r("b-button",{attrs:{type:"submit",variant:"primary"}},[a._v("Simpan")]),a._v(" "),r("b-button",{attrs:{type:"reset",variant:"danger"}},[a._v("Reset")])],1)],1)}),[],!1,null,null,null).exports,F={components:{BCard:e.a,BCardHeader:n.a,BCardTitle:o.a,BCardBody:s.a,BlankoAdministrator:v,BlankoDirektorat:k,BlankoDisprov:R,BlankoDiskab:$,BlankoSekolah:O},data:function(){return{isBusy:!0,data:[]}},created:function(){console.log(this.user)}},T=(r(1165),Object(m.a)(F,(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("b-card",{attrs:{"no-body":""}},[r("b-card-header",[r("b-card-title",[r("h2",[a._v("Data Blanko Ijazah")])])],1),a._v(" "),r("b-card-body",[a.hasRole("administrator")?r("section",[r("blanko-administrator")],1):a._e(),a._v(" "),a.hasRole("direktorat")?r("section",[r("blanko-direktorat")],1):a._e(),a._v(" "),a.hasRole("disprov")?r("section",[r("blanko-disprov")],1):a._e(),a._v(" "),a.hasRole("diskab")?r("section",[r("blanko-diskab")],1):a._e(),a._v(" "),a.hasRole("sekolah")?r("section",[r("blanko-sekolah")],1):a._e()])],1)}),[],!1,null,null,null));t.default=T.exports},45:function(a,t,r){"use strict";r.d(t,"e",(function(){return n})),r.d(t,"f",(function(){return o})),r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return c})),r.d(t,"b",(function(){return l}));r(243),r(39),r(300),r(138),r(1038),r(190),r(177),r(52),r(536),r(191),r(351);var e=r(105),n=function(a){return a>999?"".concat((a/1e3).toFixed(1),"k"):a},o=function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(!a)return"";var r=a.toString(),e=r.split(t),n=[];return e.forEach((function(a){var t=a.charAt(0).toUpperCase()+a.slice(1);n.push(t)})),n.join(" ")},s=function(a){return a?a.split(" ").map((function(a){return a.charAt(0).toUpperCase()})).join(""):""},i=function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{month:"short",day:"numeric",year:"numeric"};return a?new Intl.DateTimeFormat("en-US",t).format(new Date(a)):a},c=function(a){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=new Date(a),n={month:"short",day:"numeric"};return t&&Object(e.c)(r)&&(n={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",n).format(new Date(a))},l=function(a){return a.replace(/<\/?[^>]+(>|$)/g,"")}},617:function(a,t,r){var e=r(1166);"string"==typeof e&&(e=[[a.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(23)(e,n);e.locals&&(a.exports=e.locals)}}]);