(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{105:function(a,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"d",(function(){return p}));var e=r(81),n=r(347),o=r(76),s=r(9),c=function(a){return"object"===Object(n.a)(a)&&null!==a},i=function(a){var t=new Date;return a.getDate()===t.getDate()&&a.getMonth()===t.getMonth()&&a.getFullYear()===t.getFullYear()},l=function(a){return o.a.resolve(a).route.path===o.a.currentRoute.path},p=function(){var a=Object(s.getCurrentInstance)().proxy,t=Object(s.reactive)({route:a.$route});return Object(s.watch)((function(){return a.$route}),(function(a){t.route=a})),Object(e.a)(Object(e.a)({},Object(s.toRefs)(t)),{},{router:a.$router})}},1159:function(a,t,r){"use strict";r(613)},1160:function(a,t,r){(t=r(20)(!1)).push([a.i,'[dir] .card-statistics .statistics-body {\n  padding: 2rem 2.4rem !important;\n}\n@media (max-width: 991.98px) {\n[dir] .card-statistics .card-header, [dir] .card-statistics .statistics-body {\n    padding: 1.5rem !important;\n}\n}\n[dir] .card-company-table thead th {\n  border: 0;\n}\n[dir] .card-company-table td {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n[dir] .card-company-table td .avatar {\n  background-color: #f8f8f8;\n}\n[dir=ltr] .card-company-table td .avatar {\n  margin-right: 2rem;\n}\n[dir=rtl] .card-company-table td .avatar {\n  margin-left: 2rem;\n}\n[dir] .card-company-table td .avatar img {\n  border-radius: 0;\n}\n[dir] .card-browser-states .browser-states:first-child {\n  margin-top: 0;\n}\n[dir] .card-browser-states .browser-states:not(:first-child) {\n  margin-top: 1.7rem;\n}\n[dir] .card-transaction .transaction-item:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n[dir] .card-company-table td .b-avatar.badge-light-company {\n  background-color: #f8f8f8;\n}\n[dir=ltr] .card-company-table td .b-avatar.badge-light-company {\n  margin-right: 2rem;\n}\n[dir=rtl] .card-company-table td .b-avatar.badge-light-company {\n  margin-left: 2rem;\n}\n.apexcharts-canvas line[stroke=transparent] {\n  display: none;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip {\n  background: #fff;\n  border-color: #ebe9f1;\n}\n.apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  font-weight: 600;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #fff !important;\n  border-color: #ebe9f1 !important;\n}\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-label, .apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #f8f8f8;\n  border-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #f8f8f8;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #f8f8f8;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #ebe9f1;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-right-color: #ebe9f1;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #f8f8f8;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-right-color: #f8f8f8;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #ebe9f1;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-left-color: #ebe9f1;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #f8f8f8;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-left-color: #f8f8f8;\n}\n.apexcharts-canvas .apexcharts-text, .apexcharts-canvas .apexcharts-tooltip-text, .apexcharts-canvas .apexcharts-datalabel-label, .apexcharts-canvas .apexcharts-datalabel {\n  font-family: "Montserrat", Helvetica, Arial, serif !important;\n  fill: #6e6b7b;\n  font-weight: 400;\n  filter: none;\n}\n.apexcharts-canvas .apexcharts-pie-label {\n  fill: #fff;\n  filter: none;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-pie-series .apexcharts-pie-area {\n  stroke-width: 0;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-label, .apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-value {\n  font-size: 1.5rem;\n}\n[dir] .apexcharts-canvas .apexcharts-marker {\n  box-shadow: none;\n}\n[dir] .apexcharts-canvas .apexcharts-legend-series + .apexcharts-legend-series {\n  margin-top: 0.625rem;\n}\n.apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #6e6b7b !important;\n  font-size: 1rem !important;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-left: 0.5rem;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-right: 0.5rem;\n}\n.apexcharts-canvas .apexcharts-xcrosshairs, .apexcharts-canvas .apexcharts-ycrosshairs, .apexcharts-canvas .apexcharts-gridline {\n  stroke: #ebe9f1;\n}\n.apexcharts-legend.position-bottom {\n  bottom: 3rem;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-tick, .dark-layout .apexcharts-canvas line {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-heatmap .apexcharts-heatmap-rect {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radialbar .apexcharts-radialbar-track .apexcharts-radialbar-area {\n  stroke: #161d31;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radar-series polygon {\n  fill: #161d31;\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-datalabels-group .apexcharts-datalabel-value {\n  fill: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip {\n  background: #283046;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #283046 !important;\n  border-color: #3b4253 !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-label, .dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #161d31;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #161d31;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #3b4253;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-right-color: #3b4253;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #161d31;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-right-color: #161d31;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #3b4253;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-left-color: #3b4253;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #161d31;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-left-color: #161d31;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #161d31;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text, .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-yaxistooltip-text, .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-xaxistooltip-text, .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-yaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-yaxis-label, .dark-layout .apexcharts-canvas .apexcharts-xaxis-label, .dark-layout .apexcharts-canvas .apexcharts-tooltip-text, .dark-layout .apexcharts-canvas .apexcharts-datalabel-label {\n  fill: #b4b7bd;\n}\n.dark-layout .apexcharts-canvas .apexcharts-marker {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #b4b7bd !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xcrosshairs, .dark-layout .apexcharts-canvas .apexcharts-ycrosshairs, .dark-layout .apexcharts-canvas .apexcharts-gridline {\n  stroke: #3b4253;\n}',""]),a.exports=t},1539:function(a,t,r){"use strict";r.r(t);var e=r(1815),n=r(346),o=r(1817),s=r(547),c=r(1816),i=r(59),l=r(223),p=r(89),d=r(11),h=r(50),x={components:{BRow:e.a,BCol:n.a,BCard:o.a,BCardText:c.a,BLink:i.a,BImg:l.a,BButton:p.a,BSpinner:s.a},directives:{Ripple:d.a},methods:{kFormatter:h.e},data:function(){return{isBusy:!0,data:{}}},created:function(){var a=this;this.$http.get("/dashboard/administrator").then((function(t){a.isBusy=!1,a.data=t.data}))}},f=r(0),b=Object(f.a)(x,(function(){var a=this.$createElement,t=this._self._c||a;return t("b-row",{staticClass:"match-height"},[t("b-col",{attrs:{xl:"2",md:"4",sm:"6"}},[t("b-card",{staticClass:"text-center"},[this.isBusy?t("div",{staticClass:"text-center text-danger my-2"},[t("b-spinner",{staticClass:"align-middle"}),this._v(" "),t("strong",[this._v("Loading...")])],1):t("div",[t("b-card-text",{staticClass:"font-small-3"},[t("div",{staticClass:"avatar bg-light-info p-50 mb-1"},[t("div",{staticClass:"avatar-content"},[t("font-awesome-icon",{attrs:{icon:"fa-solid fa-house",size:"2xl"}})],1)]),this._v(" "),t("h2",{staticClass:"fw-bolder"},[this._v("123")]),this._v(" "),t("p",{staticClass:"card-text"},[this._v("GTK")])])],1)])],1)],1)}),[],!1,null,null,null).exports,u={components:{BRow:e.a,BCol:n.a,BCard:o.a,BSpinner:s.a,DashboardAdministrator:b},data:function(){return{isBusy:!0,data:[]}},created:function(){var a=this;console.log(this.user),this.$http.get("/dashboard/index").then((function(t){a.data=t.data,a.isBusy=!1}))}},v=(r(1159),Object(f.a)(u,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",[this.hasRole("administrator")?t("section",[t("dashboard-administrator")],1):this._e()])}),[],!1,null,null,null));t.default=v.exports},50:function(a,t,r){"use strict";r.d(t,"e",(function(){return n})),r.d(t,"f",(function(){return o})),r.d(t,"a",(function(){return s})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return l}));r(244),r(39),r(300),r(150),r(1034),r(190),r(177),r(52),r(533),r(191),r(349);var e=r(105),n=function(a){return a>999?"".concat((a/1e3).toFixed(1),"k"):a},o=function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(!a)return"";var r=a.toString(),e=r.split(t),n=[];return e.forEach((function(a){var t=a.charAt(0).toUpperCase()+a.slice(1);n.push(t)})),n.join(" ")},s=function(a){return a?a.split(" ").map((function(a){return a.charAt(0).toUpperCase()})).join(""):""},c=function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{month:"short",day:"numeric",year:"numeric"};return a?new Intl.DateTimeFormat("en-US",t).format(new Date(a)):a},i=function(a){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=new Date(a),n={month:"short",day:"numeric"};return t&&Object(e.c)(r)&&(n={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",n).format(new Date(a))},l=function(a){return a.replace(/<\/?[^>]+(>|$)/g,"")}},613:function(a,t,r){var e=r(1160);"string"==typeof e&&(e=[[a.i,e,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(23)(e,n);e.locals&&(a.exports=e.locals)}}]);