(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{113:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return c})),e.d(a,"a",(function(){return l})),e.d(a,"d",(function(){return d}));var r=e(86),s=e(359),n=e(82),o=e(9),i=function(t){return"object"===Object(s.a)(t)&&null!==t},c=function(t){var a=new Date;return t.getDate()===a.getDate()&&t.getMonth()===a.getMonth()&&t.getFullYear()===a.getFullYear()},l=function(t){return n.a.resolve(t).route.path===n.a.currentRoute.path},d=function(){var t=Object(o.getCurrentInstance)().proxy,a=Object(o.reactive)({route:t.$route});return Object(o.watch)((function(){return t.$route}),(function(t){a.route=t})),Object(r.a)(Object(r.a)({},Object(o.toRefs)(a)),{},{router:t.$router})}},1256:function(t,a,e){"use strict";e(647)},1257:function(t,a,e){(a=e(18)(!1)).push([t.i,'.apexcharts-canvas line[stroke=transparent] {\n  display: none;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip {\n  background: #fff;\n  border-color: #ebe9f1;\n}\n.apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  font-weight: 600;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #fff !important;\n  border-color: #ebe9f1 !important;\n}\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-label, .apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #f8f8f8;\n  border-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #f8f8f8;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #f8f8f8;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #ebe9f1;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-right-color: #ebe9f1;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #f8f8f8;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-right-color: #f8f8f8;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #ebe9f1;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-left-color: #ebe9f1;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #f8f8f8;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-left-color: #f8f8f8;\n}\n.apexcharts-canvas .apexcharts-text, .apexcharts-canvas .apexcharts-tooltip-text, .apexcharts-canvas .apexcharts-datalabel-label, .apexcharts-canvas .apexcharts-datalabel {\n  font-family: "Montserrat", Helvetica, Arial, serif !important;\n  fill: #6e6b7b;\n  font-weight: 400;\n  filter: none;\n}\n.apexcharts-canvas .apexcharts-pie-label {\n  fill: #fff;\n  filter: none;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-pie-series .apexcharts-pie-area {\n  stroke-width: 0;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-label, .apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-value {\n  font-size: 1.5rem;\n}\n[dir] .apexcharts-canvas .apexcharts-marker {\n  box-shadow: none;\n}\n[dir] .apexcharts-canvas .apexcharts-legend-series + .apexcharts-legend-series {\n  margin-top: 0.625rem;\n}\n.apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #6e6b7b !important;\n  font-size: 1rem !important;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-left: 0.5rem;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-right: 0.5rem;\n}\n.apexcharts-canvas .apexcharts-xcrosshairs, .apexcharts-canvas .apexcharts-ycrosshairs, .apexcharts-canvas .apexcharts-gridline {\n  stroke: #ebe9f1;\n}\n.apexcharts-legend.position-bottom {\n  bottom: 3rem;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-tick, .dark-layout .apexcharts-canvas line {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-heatmap .apexcharts-heatmap-rect {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radialbar .apexcharts-radialbar-track .apexcharts-radialbar-area {\n  stroke: #161d31;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radar-series polygon {\n  fill: #161d31;\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-datalabels-group .apexcharts-datalabel-value {\n  fill: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip {\n  background: #283046;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #283046 !important;\n  border-color: #3b4253 !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-label, .dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #161d31;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #161d31;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #3b4253;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-right-color: #3b4253;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #161d31;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-right-color: #161d31;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #3b4253;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-left-color: #3b4253;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #161d31;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-left-color: #161d31;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #161d31;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text, .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-yaxistooltip-text, .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-xaxistooltip-text, .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-yaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-yaxis-label, .dark-layout .apexcharts-canvas .apexcharts-xaxis-label, .dark-layout .apexcharts-canvas .apexcharts-tooltip-text, .dark-layout .apexcharts-canvas .apexcharts-datalabel-label {\n  fill: #b4b7bd;\n}\n.dark-layout .apexcharts-canvas .apexcharts-marker {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #b4b7bd !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xcrosshairs, .dark-layout .apexcharts-canvas .apexcharts-ycrosshairs, .dark-layout .apexcharts-canvas .apexcharts-gridline {\n  stroke: #3b4253;\n}',""]),t.exports=a},1994:function(t,a,e){"use strict";e.r(a);var r=e(1920),s=e(358),n=e(1922),o=e(348),i=e(345),c=e(565),l=e(1944),d=e(346),p=e(40),h=e.n(p),b=e(19),u={components:{BCard:n.a,BCardHeader:o.a,BCardTitle:i.a,BDropdown:c.a,BDropdownItem:l.a,BCardBody:d.a,VueApexCharts:h.a},data:function(){return{chartData:{},sessionsByDeviceDonut:{series:[58.6,34.9,6.5],chartOptions:{chart:{toolbar:{show:!1}},labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],stroke:{width:0},colors:[b.b.primary,b.b.warning,b.b.danger]}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/sessions-device").then((function(a){t.chartData=a.data}))}},v=e(0),x=Object(v.a)(u,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("b-card-title",[t._v("Sessions By Device")]),t._v(" "),e("b-dropdown",{staticClass:"chart-dropdown ",attrs:{text:"Last 7 Days",variant:"transparent",right:"","no-caret":"","toggle-class":"p-0 mb-25",size:"sm"}},t._l(t.chartData.lastDays,(function(a){return e("b-dropdown-item",{key:a},[t._v("\n        "+t._s(a)+"\n      ")])})),1)],1),t._v(" "),e("b-card-body",[e("vue-apex-charts",{staticClass:"my-1",attrs:{type:"donut",height:"300",options:t.sessionsByDeviceDonut.chartOptions,series:t.sessionsByDeviceDonut.series}}),t._v(" "),t._l(t.chartData.chartInfo,(function(a,r){return e("div",{key:a.name,staticClass:"d-flex justify-content-between",class:r===t.chartData.chartInfo.length-1?"mb-0":"mb-1"},[e("div",{staticClass:"series-info d-flex align-items-center"},[e("feather-icon",{class:a.iconColor,attrs:{icon:a.icon,size:"16"}}),t._v(" "),e("span",{staticClass:"font-weight-bolder ml-75 mr-25"},[t._v(t._s(a.name))]),e("span",[t._v("- "+t._s(a.usage)+"%")])],1),t._v(" "),e("div",[e("span",[t._v(t._s(a.upDown)+"%")]),t._v(" "),e("feather-icon",{staticClass:"mb-25 ml-25",class:a.upDown>0?"text-success":"text-danger",attrs:{icon:a.upDown>0?"ArrowUpIcon":"ArrowDownIcon"}})],1)])}))],2)],1)}),[],!1,null,null,null).exports,f={components:{VueApexCharts:h.a,BCard:n.a,BCardHeader:o.a,BCardTitle:i.a,BDropdown:c.a,BDropdownItem:l.a,BCardBody:d.a},data:function(){return{chartInfo:{},productOrdersRadialBar:{series:[70,52,26],chartOptions:{labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{strokeWidth:"100%",margin:15},dataLabels:{value:{fontSize:"1rem",colors:"#5e5873",fontWeight:"500",offsetY:5},total:{show:!0,label:"Total",fontSize:"1.286rem",colors:"#5e5873",fontWeight:"500",formatter:function(){return 42459}}}}},colors:[b.b.primary,b.b.warning,b.b.danger],stroke:{lineCap:"round"},chart:{height:355,dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/product-orders").then((function(a){t.chartInfo=a.data}))}},m=Object(v.a)(f,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("b-card-title",[t._v("Product Orders")]),t._v(" "),e("b-dropdown",{staticClass:"chart-dropdown ",attrs:{text:"Last 7 Days",variant:"transparent",right:"","no-caret":"","toggle-class":"p-0",size:"sm"}},t._l(t.chartInfo.lastDays,(function(a){return e("b-dropdown-item",{key:a},[t._v("\n        "+t._s(a)+"\n      ")])})),1)],1),t._v(" "),e("b-card-body",[e("vue-apex-charts",{attrs:{type:"radialBar",height:"325",options:t.productOrdersRadialBar.chartOptions,series:t.productOrdersRadialBar.series}}),t._v(" "),t._l(t.chartInfo.chartInfo,(function(a,r,s){return e("div",{key:r,staticClass:"d-flex justify-content-between",class:s===Object.keys(t.chartInfo.chartInfo).length-1?"":"mb-1"},[e("div",{staticClass:"series-info d-flex align-items-center"},[e("feather-icon",{class:"finished"===r?"text-primary":"pending"===r?"text-warning":"text-danger",attrs:{icon:"CircleIcon",size:"16"}}),t._v(" "),e("span",{staticClass:"font-weight-bold text-capitalize ml-75"},[t._v(t._s(r))])],1),t._v(" "),e("span",[t._v(t._s(a))])])}))],2)],1)}),[],!1,null,null,null).exports,g={components:{BCard:n.a,BCardHeader:o.a,BCardTitle:i.a,BDropdown:c.a,BDropdownItem:l.a,BCardBody:d.a,VueApexCharts:h.a},data:function(){return{chartData:{},customersPie:{series:[690,258,149],chartOptions:{chart:{toolbar:{show:!1}},labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},stroke:{width:4},colors:[b.b.primary,b.b.warning,b.b.danger]}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/customers").then((function(a){t.chartData=a.data}))}},y=Object(v.a)(g,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("b-card-title",[t._v("Customers")]),t._v(" "),e("b-dropdown",{staticClass:"chart-dropdown ",attrs:{text:"Last 7 Days",variant:"transparent",right:"","no-caret":"","toggle-class":"p-0 mb-25",size:"sm"}},t._l(t.chartData.lastDays,(function(a){return e("b-dropdown-item",{key:a},[t._v("\n        "+t._s(a)+"\n      ")])})),1)],1),t._v(" "),e("b-card-body",[e("vue-apex-charts",{staticClass:"mt-2 mb-1",attrs:{type:"pie",height:"325",options:t.customersPie.chartOptions,series:t.customersPie.series}}),t._v(" "),e("div",{staticClass:"pt-25"},t._l(t.chartData.listData,(function(a,r){return e("div",{key:r,staticClass:"d-flex justify-content-between",class:r===Object.keys(t.chartData.listData).length-1?"":"mb-1"},[e("div",{staticClass:"series-info"},[e("feather-icon",{staticClass:"mr-50",class:a.iconColor,attrs:{icon:a.icon,size:"16"}}),t._v(" "),e("span",{staticClass:"font-weight-bolder"},[t._v(t._s(a.text))])],1),t._v(" "),e("span",[t._v(t._s(a.result))])])})),0)],1)],1)}),[],!1,null,null,null).exports,_=e(1921),C={components:{VueApexCharts:h.a,BCardText:_.a,BCard:n.a,BCardHeader:o.a,BCardTitle:i.a,BCardBody:d.a},data:function(){return{statisticsRadar:{series:[{name:"Sales",data:[90,50,86,40,100,20]},{name:"Visit",data:[70,75,70,76,20,85]}],chartOptions:{chart:{type:"radar",dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1},offsetY:5},stroke:{width:0},dataLabels:{background:{foreColor:["#ebe9f1"]}},legend:{show:!1},colors:[b.b.primary,b.b.info],plotOptions:{radar:{polygons:{strokeColors:["#ebe9f1","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:[b.b.primary,b.b.info],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},labels:["Jan","Feb","Mar","Apr","May","Jun"],markers:{size:0},yaxis:{show:!1},grid:{show:!1,padding:{bottom:-27}}}}}}},w=Object(v.a)(C,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",{staticClass:"align-items-baseline pb-1"},[e("div",[e("b-card-title",{staticClass:"mb-25"},[t._v("\n        Sales\n      ")]),t._v(" "),e("b-card-text",{staticClass:"mb-0"},[t._v("\n        Last 6 months\n      ")])],1),t._v(" "),e("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"MoreVerticalIcon",size:"18"}})],1),t._v(" "),e("b-card-body",[e("div",{staticClass:"d-inline-flex align-items-center mr-2"},[e("feather-icon",{staticClass:"text-primary mr-50",attrs:{icon:"CircleIcon"}}),t._v(" "),e("h6",{staticClass:"mb-0"},[t._v("\n        Sales\n      ")])],1),t._v(" "),e("div",{staticClass:"d-inline-flex align-items-center"},[e("feather-icon",{staticClass:"text-info mr-50",attrs:{icon:"CircleIcon"}}),t._v(" "),e("h6",{staticClass:"mb-0"},[t._v("\n        Visits\n      ")])],1),t._v(" "),e("vue-apex-charts",{attrs:{type:"radar",height:"300",options:t.statisticsRadar.chartOptions,series:t.statisticsRadar.series}})],1)],1)}),[],!1,null,null,null).exports,k={components:{VueApexCharts:h.a,BCard:n.a,BCardHeader:o.a,BCardTitle:i.a,BDropdown:c.a,BDropdownItem:l.a,BCardText:_.a,BCardBody:d.a,BRow:r.a,BCol:s.a},data:function(){return{trackerData:{},supportTrackerRadialBar:{series:[83],chartOptions:{plotOptions:{radialBar:{size:150,offsetY:20,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{name:{offsetY:-5,color:"#5e5873",fontSize:"1rem"},value:{offsetY:15,color:"#5e5873",fontSize:"1.714rem"}}}},colors:[b.b.danger],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[b.b.primary],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},labels:["Completed Tickets"]}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/support-tracker").then((function(a){t.trackerData=a.data}))}},B=Object(v.a)(k,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",{staticClass:"pb-0"},[e("b-card-title",[t._v(t._s(t.trackerData.title))]),t._v(" "),e("b-dropdown",{staticClass:"chart-dropdown",attrs:{"no-caret":"",right:"",text:"Last 7 Days",variant:"transparent","toggle-class":"p-50",size:"sm"}},t._l(t.trackerData.lastDays,(function(a){return e("b-dropdown-item",{key:a},[t._v("\n        "+t._s(a)+"\n      ")])})),1)],1),t._v(" "),e("b-card-body",[e("b-row",[e("b-col",{staticClass:"d-flex flex-column flex-wrap text-center",attrs:{sm:"2"}},[e("h1",{staticClass:"font-large-2 font-weight-bolder mt-2 mb-0"},[t._v("\n          "+t._s(t.trackerData.totalTicket)+"\n        ")]),t._v(" "),e("b-card-text",[t._v("Tickets")])],1),t._v(" "),e("b-col",{staticClass:"d-flex justify-content-center",attrs:{sm:"10"}},[e("vue-apex-charts",{attrs:{type:"radialBar",height:"270",options:t.supportTrackerRadialBar.chartOptions,series:t.supportTrackerRadialBar.series}})],1)],1),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"text-center"},[e("b-card-text",{staticClass:"mb-50"},[t._v("\n          New Tickets\n        ")]),t._v(" "),e("span",{staticClass:"font-large-1 font-weight-bold"},[t._v(t._s(t.trackerData.newTicket))])],1),t._v(" "),e("div",{staticClass:"text-center"},[e("b-card-text",{staticClass:"mb-50"},[t._v("\n          Open Tickets\n        ")]),t._v(" "),e("span",{staticClass:"font-large-1 font-weight-bold"},[t._v(t._s(t.trackerData.openTicket))])],1),t._v(" "),e("div",{staticClass:"text-center"},[e("b-card-text",{staticClass:"mb-50"},[t._v("\n          Response Time\n        ")]),t._v(" "),e("span",{staticClass:"font-large-1 font-weight-bold"},[t._v(t._s(t.trackerData.responseTime)+"d")])],1)])],1)],1)}),[],!1,null,null,null).exports,D=(e(255),{components:{VueApexCharts:h.a,BCardText:_.a,BCard:n.a,BCardHeader:o.a,BCardTitle:i.a,BCardBody:d.a},data:function(){return{revenue:{},revenueComparisonLine:{series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],chartOptions:{chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",offsetX:-10},stroke:{curve:"smooth",dashArray:[0,12],width:[4,3]},legend:{show:!1},colors:["#d0ccff","#ebe9f1"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[b.b.primary,"#ebe9f1"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{colors:"#b9b9c3",fontSize:"1rem"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"1rem"},formatter:function(t){return t>999?"".concat((t/1e3).toFixed(0),"k"):t}}},grid:{borderColor:"#e7eef7",padding:{top:-20,bottom:-10,left:20}},tooltip:{x:{show:!1}}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/revenue").then((function(a){t.revenue=a.data}))}}),O=Object(v.a)(D,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("b-card-title",[t._v("Revenue")]),t._v(" "),e("feather-icon",{staticClass:"text-muted cursor-pointer",attrs:{icon:"SettingsIcon",size:"18"}})],1),t._v(" "),e("b-card-body",{staticClass:"pb-0"},[e("div",{staticClass:"d-flex justify-content-start mb-3"},[e("div",{staticClass:"mr-2"},[e("b-card-text",{staticClass:"mb-50"},[t._v("\n          This Month\n        ")]),t._v(" "),e("h3",{staticClass:"font-weight-bolder"},[e("sup",{staticClass:"font-medium-1"},[t._v("$ ")]),t._v(" "),e("span",{staticClass:"text-primary"},[t._v(t._s(t.revenue.thisMonth))])])],1),t._v(" "),e("div",[e("b-card-text",{staticClass:"mb-50"},[t._v("\n          Last Month\n        ")]),t._v(" "),e("h3",{staticClass:"font-weight-bolder"},[e("sup",{staticClass:"font-medium-1"},[t._v("$ ")]),t._v(" "),e("span",[t._v(t._s(t.revenue.lastMonth))])])],1)]),t._v(" "),e("vue-apex-charts",{attrs:{type:"line",height:"240",options:t.revenueComparisonLine.chartOptions,series:t.revenueComparisonLine.series}})],1)],1)}),[],!1,null,null,null).exports,T={components:{VueApexCharts:h.a,BCard:n.a,BCardHeader:o.a,BRow:r.a,BCardText:_.a,BCol:s.a},data:function(){return{goal_overview:{},goalOverviewRadialBar:{series:[83],chartOptions:{chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}},colors:["#51e5a8"],plotOptions:{radialBar:{offsetY:-10,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:"#ebe9f1",strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{color:"#5e5873",fontSize:"2.86rem",fontWeight:"600"}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[b.b.success],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},grid:{padding:{bottom:30}}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/goal-overview").then((function(a){t.goal_overview=a.data}))}},A=Object(v.a)(T,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("h4",{staticClass:"mb-0"},[t._v("\n      Goal Overview\n    ")]),t._v(" "),e("b-card-text",{staticClass:"font-medium-5 mb-0"},[e("feather-icon",{staticClass:"text-muted cursor-pointer",attrs:{icon:"HelpCircleIcon",size:"21"}})],1)],1),t._v(" "),e("vue-apex-charts",{attrs:{type:"radialBar",height:"245",options:t.goalOverviewRadialBar.chartOptions,series:t.goalOverviewRadialBar.series}}),t._v(" "),e("b-row",{staticClass:"text-center mx-0"},[e("b-col",{staticClass:"border-top border-right d-flex align-items-between flex-column py-1",attrs:{cols:"6"}},[e("b-card-text",{staticClass:"text-muted mb-0"},[t._v("\n        Completed\n      ")]),t._v(" "),e("h3",{staticClass:"font-weight-bolder mb-50"},[t._v("\n        "+t._s(t.goal_overview.completed)+"\n      ")])],1),t._v(" "),e("b-col",{staticClass:"border-top d-flex align-items-between flex-column py-1",attrs:{cols:"6"}},[e("b-card-text",{staticClass:"text-muted mb-0"},[t._v("\n        In Progress\n      ")]),t._v(" "),e("h3",{staticClass:"font-weight-bolder mb-0"},[t._v("\n        "+t._s(t.goal_overview.inProgress)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,z=e(93),R=e(1932),S=e(11),j=e(49),I={components:{VueApexCharts:h.a,BCard:n.a,BRow:r.a,BCol:s.a,BButton:z.a,BCardText:_.a,BDropdown:c.a,BDropdownItem:l.a,BProgress:R.a},directives:{Ripple:S.a},data:function(){return{avgData:{},salesBar:{series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}],chartOptions:{chart:{sparkline:{enabled:!0},toolbar:{show:!1}},grid:{show:!1,padding:{left:0,right:0}},states:{hover:{filter:"none"}},colors:["#ebf0f7","#ebf0f7",b.b.primary,"#ebf0f7","#ebf0f7","#ebf0f7"],plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}},xaxis:{type:"numeric"}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/avg-sessions").then((function(a){t.avgData=a.data}))},methods:{kFormatter:j.e}},$=Object(v.a)(I,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",[e("b-row",{staticClass:"pb-50"},[e("b-col",{staticClass:"d-flex justify-content-between flex-column",attrs:{lg:"6","order-lg":"1",order:"2"}},[e("div",{staticClass:"mt-1 mt-lg-0"},[e("h2",{staticClass:"font-weight-bolder mb-25"},[t._v("\n          "+t._s(t.kFormatter(t.avgData.sessions))+"\n        ")]),t._v(" "),e("b-card-text",{staticClass:"font-weight-bold mb-2"},[t._v("\n          Avg Sessions\n        ")]),t._v(" "),e("div",{staticClass:"font-medium-2 mb-1 mb-lg-0"},[e("span",{staticClass:"text-success mr-50"},[t._v(t._s(t.avgData.growth))]),t._v(" "),e("span",[t._v("vs last 7 days")])])],1),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"shadow",attrs:{variant:"primary"}},[t._v("\n        View Details\n      ")])],1),t._v(" "),e("b-col",{staticClass:"d-flex justify-content-between flex-column text-right",attrs:{lg:"6",cols:"12","order-lg":"2",order:"1"}},[e("div",[e("b-dropdown",{staticClass:"chart-dropdown",attrs:{text:"Last 7 Days",variant:"transparent",left:"","no-caret":"",size:"sm"}},t._l(t.avgData.lastDays,(function(a){return e("b-dropdown-item",{key:a},[t._v("\n            "+t._s(a)+"\n          ")])})),1)],1),t._v(" "),e("vue-apex-charts",{attrs:{type:"bar",height:"200",options:t.salesBar.chartOptions,series:t.salesBar.series}})],1)],1),t._v(" "),e("hr"),t._v(" "),e("b-row",{staticClass:"avg-sessions pt-50"},[e("b-col",{staticClass:"mb-2",attrs:{cols:"6"}},[e("b-card-text",{staticClass:"mb-50"},[t._v("\n        Goal: $"+t._s(t.avgData.goal)+"\n      ")]),t._v(" "),e("b-progress",{attrs:{value:"50",max:"100",height:"6px"}})],1),t._v(" "),e("b-col",{staticClass:"mb-2",attrs:{cols:"6"}},[e("b-card-text",{staticClass:"mb-50"},[t._v("\n        Users: "+t._s(t.kFormatter(t.avgData.users))+"\n      ")]),t._v(" "),e("b-progress",{attrs:{value:"60",max:"100",height:"6px",variant:"warning"}})],1),t._v(" "),e("b-col",{attrs:{cols:"6"}},[e("b-card-text",{staticClass:"mb-50"},[t._v("\n        Retention: "+t._s(t.avgData.retention)+"%\n      ")]),t._v(" "),e("b-progress",{staticClass:"mt-25",attrs:{value:"70",max:"100",height:"6px",variant:"danger"}})],1),t._v(" "),e("b-col",{attrs:{cols:"6"}},[e("b-card-text",{staticClass:"mb-50"},[t._v("\n        Duration: "+t._s(t.avgData.duration)+"yr\n      ")]),t._v(" "),e("b-progress",{staticClass:"mt-25",attrs:{value:"90",max:"100",variant:"success",height:"6px"}})],1)],1)],1)}),[],!1,null,null,null).exports,L={components:{VueApexCharts:h.a,BCard:n.a,BCardHeader:o.a,BCardText:_.a,BCardTitle:i.a,BCardBody:d.a},data:function(){return{salesLine:{series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],chartOptions:{chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",dropShadow:{enabled:!0,top:18,left:2,blur:5,opacity:.2},offsetX:-10},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebe9f1",padding:{top:-20,bottom:5,left:20}},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[b.b.primary],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{offsetY:5,style:{colors:"#b9b9c3",fontSize:"0.857rem"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"0.857rem"},formatter:function(t){return t>999?"".concat((t/1e3).toFixed(1),"k"):t}}},tooltip:{x:{show:!1}}}}}}},E=Object(v.a)(L,(function(){var t=this.$createElement,a=this._self._c||t;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",{staticClass:"align-items-baseline"},[a("div",[a("b-card-title",{staticClass:"mb-25"},[this._v("\n        Sales\n      ")]),this._v(" "),a("b-card-text",{staticClass:"mb-0"},[this._v("\n        2020 Total Sales: 12.84k\n      ")])],1),this._v(" "),a("feather-icon",{staticClass:"text-muted cursor-pointer",attrs:{icon:"SettingsIcon",size:"18"}})],1),this._v(" "),a("b-card-body",{staticClass:"pb-0"},[a("vue-apex-charts",{attrs:{type:"line",height:"240",options:this.salesLine.chartOptions,series:this.salesLine.series}})],1)],1)}),[],!1,null,null,null).exports,F={components:{VueApexCharts:h.a,BDropdown:c.a,BDropdownItem:l.a,BCard:n.a,BButton:z.a,BRow:r.a,BCol:s.a},directives:{Ripple:S.a},data:function(){return{revenue_report:{},revenueReport:{series:[{name:"Earning",data:[95,177,284,256,105,63,168,218,72]},{name:"Expense",data:[-145,-80,-60,-180,-100,-60,-85,-75,-100]}],chartOptions:{chart:{stacked:!0,type:"bar",toolbar:{show:!1}},grid:{padding:{top:-20,bottom:-10},yaxis:{lines:{show:!1}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],labels:{style:{colors:"#b9b9c3",fontSize:"0.86rem"}},axisTicks:{show:!1},axisBorder:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},colors:[b.b.primary,b.b.warning],plotOptions:{bar:{columnWidth:"17%",endingShape:"rounded"},distributed:!0},yaxis:{labels:{style:{colors:"#b9b9c3",fontSize:"0.86rem"}}}}},budgetChart:{series:[{data:[61,48,69,52,60,40,79,60,59,43,62]},{data:[20,10,30,15,23,0,25,15,20,5,27]}],options:{chart:{height:80,toolbar:{show:!1},zoom:{enabled:!1},type:"line",sparkline:{enabled:!0}},stroke:{curve:"smooth",dashArray:[0,5],width:[2]},colors:[b.b.primary,"#dcdae3"],tooltip:{enabled:!1}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/revenue-report").then((function(a){t.revenue_report=a.data}))}},M=Object(v.a)(F,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{staticClass:"card-revenue-budget",attrs:{"no-body":""}},[e("b-row",{staticClass:"mx-0"},[e("b-col",{staticClass:"revenue-report-wrapper",attrs:{md:"8"}},[e("div",{staticClass:"d-sm-flex justify-content-between align-items-center mb-3"},[e("h4",{staticClass:"card-title mb-50 mb-sm-0"},[t._v("\n          Revenue Report\n        ")]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"d-flex align-items-center mr-2"},[e("span",{staticClass:"bullet bullet-primary svg-font-small-3 mr-50 cursor-pointer"}),t._v(" "),e("span",[t._v("Earning")])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"bullet bullet-warning svg-font-small-3 mr-50 cursor-pointer"}),t._v(" "),e("span",[t._v("Expense")])])])]),t._v(" "),e("vue-apex-charts",{attrs:{id:"revenue-report-chart",type:"bar",height:"230",options:t.revenueReport.chartOptions,series:t.revenueReport.series}})],1),t._v(" "),e("b-col",{staticClass:"budget-wrapper",attrs:{md:"4"}},[e("b-dropdown",{staticClass:"budget-dropdown",attrs:{text:"2020",size:"sm",variant:"outline-primary"}},t._l(t.revenue_report.years,(function(a){return e("b-dropdown-item",{key:a},[t._v("\n          "+t._s(a)+"\n        ")])})),1),t._v(" "),e("h2",{staticClass:"mb-25"},[t._v("\n        $"+t._s(t.revenue_report.price)+"\n      ")]),t._v(" "),e("div",{staticClass:"d-flex justify-content-center"},[e("span",{staticClass:"font-weight-bolder mr-25"},[t._v("Budget:")]),t._v(" "),e("span",[t._v("56,800")])]),t._v(" "),e("vue-apex-charts",{attrs:{id:"budget-chart",type:"line",height:"80",options:t.budgetChart.options,series:t.budgetChart.series}}),t._v(" "),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"}},[t._v("\n        Increase Budget\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,V={components:{BCard:n.a,BRow:r.a,BCol:s.a,BCardTitle:i.a,BCardText:_.a,VueApexCharts:h.a},data:function(){return{earningsChart:{series:[53,16,31],chartOptions:{chart:{type:"donut",toolbar:{show:!1}},dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],labels:["App","Service","Product"],stroke:{width:0},colors:["#28c76f66","#28c76f33",b.b.success],grid:{padding:{right:-20,bottom:-8,left:-20}},plotOptions:{pie:{startAngle:-10,donut:{labels:{show:!0,name:{offsetY:15},value:{offsetY:-15,formatter:function(t){return"".concat(parseInt(t),"%")}},total:{show:!0,offsetY:15,label:"App",formatter:function(){return"53%"}}}}}},responsive:[{breakpoint:1325,options:{chart:{height:100}}},{breakpoint:1200,options:{chart:{height:120}}},{breakpoint:1045,options:{chart:{height:100}}},{breakpoint:992,options:{chart:{height:120}}}]}}}}},P=Object(v.a)(V,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{staticClass:"earnings-card"},[e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("b-card-title",{staticClass:"mb-1"},[t._v("\n        Earnings\n      ")]),t._v(" "),e("div",{staticClass:"font-small-2"},[t._v("\n        This Month\n      ")]),t._v(" "),e("h5",{staticClass:"mb-1"},[t._v("\n        $4055.56\n      ")]),t._v(" "),e("b-card-text",{staticClass:"text-muted font-small-2"},[e("span",{staticClass:"font-weight-bolder"},[t._v("68.2%")]),e("span",[t._v(" more earnings than last month.")])])],1),t._v(" "),e("b-col",{attrs:{cols:"6"}},[e("vue-apex-charts",{attrs:{height:"120",options:t.earningsChart.chartOptions,series:t.earningsChart.series}})],1)],1)],1)}),[],!1,null,null,null).exports,Y={components:{BRow:r.a,BCol:s.a,CardAnalyticSessionsByDevice:x,CardAnalyticProductOrders:m,CardAnalyticCustomers:y,CardAnalyticSalesRadarChart:w,CardAnalyticSupportTracker:B,CardAnalyticRevenue:O,CardAnalyticGoalOverview:A,CardAnalyticAvgSessions:$,CardAnalyticSaleLineChart:E,CardAnalyticRevenueReport:M,CardAnalyticEarningsChart:P}},H=(e(1256),Object(v.a)(Y,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{lg:"6"}},[e("card-analytic-support-tracker")],1),t._v(" "),e("b-col",{attrs:{lg:"6"}},[e("card-analytic-avg-sessions")],1),t._v(" "),e("b-col",{attrs:{lg:"8"}},[e("card-analytic-revenue-report")],1),t._v(" "),e("b-col",{attrs:{lg:"4"}},[e("card-analytic-goal-overview")],1),t._v(" "),e("b-col",{attrs:{lg:"8"}},[e("card-analytic-revenue")],1),t._v(" "),e("b-col",{attrs:{lg:"4"}},[e("card-analytic-sales-radar-chart")],1)],1),t._v(" "),e("b-row",[e("b-col",{attrs:{lg:"8"}},[e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{cols:"12"}},[e("card-analytic-sale-line-chart")],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("card-analytic-sessions-by-device")],1),t._v(" "),e("b-col",{attrs:{md:"6"}},[e("card-analytic-customers")],1)],1)],1),t._v(" "),e("b-col",{attrs:{lg:"4"}},[e("card-analytic-product-orders"),t._v(" "),e("card-analytic-earnings-chart")],1)],1)],1)}),[],!1,null,null,null));a.default=H.exports},49:function(t,a,e){"use strict";e.d(a,"e",(function(){return s})),e.d(a,"f",(function(){return n})),e.d(a,"a",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"d",(function(){return c})),e.d(a,"b",(function(){return l}));e(255),e(39),e(208),e(52),e(1068),e(197),e(184),e(53),e(536),e(198),e(233);var r=e(113),s=function(t){return t>999?"".concat((t/1e3).toFixed(1),"k"):t},n=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(!t)return"";var e=t.toString(),r=e.split(a),s=[];return r.forEach((function(t){var a=t.charAt(0).toUpperCase()+t.slice(1);s.push(a)})),s.join(" ")},o=function(t){return t?t.split(" ").map((function(t){return t.charAt(0).toUpperCase()})).join(""):""},i=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{month:"short",day:"numeric",year:"numeric"};return t?new Intl.DateTimeFormat("en-US",a).format(new Date(t)):t},c=function(t){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=new Date(t),s={month:"short",day:"numeric"};return a&&Object(r.c)(e)&&(s={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",s).format(new Date(t))},l=function(t){return t.replace(/<\/?[^>]+(>|$)/g,"")}},647:function(t,a,e){var r=e(1257);"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(21)(r,s);r.locals&&(t.exports=r.locals)}}]);