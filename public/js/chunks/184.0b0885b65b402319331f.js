(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1366:function(t,n){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/illustration/pricing-Illustration.svg"},1367:function(t,n,a){"use strict";a(695)},1368:function(t,n,a){(n=a(19)(!1)).push([t.i,"[dir] .pricing-card .card.popular {\n  border: 1px solid #7367f0;\n}\n.pricing-card .list-group-circle {\n  font-weight: 500;\n  color: #5e5873;\n}\n[dir] .pricing-card .annual-plan {\n  margin-bottom: 1.7rem;\n}\n.pricing-card .annual-plan .plan-price sup {\n  top: -1.5rem;\n}\n[dir=ltr] .pricing-card .annual-plan .plan-price sup {\n  left: 0.2rem;\n}\n[dir=rtl] .pricing-card .annual-plan .plan-price sup {\n  right: 0.2rem;\n}\n.pricing-card .annual-plan .plan-price span {\n  font-size: 3.5rem;\n  line-height: 0.8;\n}\n.pricing-card .annual-plan .plan-price sub {\n  bottom: 0;\n}\n[dir=ltr] .pricing-card .annual-plan .plan-price sub {\n  right: 0.14rem;\n}\n[dir=rtl] .pricing-card .annual-plan .plan-price sub {\n  left: 0.14rem;\n}\n.pricing-card .annual-plan .annual-pricing {\n  position: absolute;\n}\n[dir] .pricing-card .annual-plan .annual-pricing {\n  margin: auto;\n}\n[dir=ltr] .pricing-card .annual-plan .annual-pricing {\n  left: 0;\n  right: 0;\n}\n[dir=rtl] .pricing-card .annual-plan .annual-pricing {\n  right: 0;\n  left: 0;\n}\n.pricing-free-trial {\n  height: 16.71rem;\n}\n[dir] .pricing-free-trial {\n  background-color: rgba(186, 191, 199, 0.12);\n  margin-top: 7.5rem;\n  margin-bottom: 6.3rem;\n}\n[dir=ltr] .pricing-free-trial {\n  margin-right: -2rem;\n  margin-left: -2rem;\n}\n[dir=rtl] .pricing-free-trial {\n  margin-left: -2rem;\n  margin-right: -2rem;\n}\n[dir] .pricing-free-trial .row {\n  margin: 0;\n}\n[dir] .pricing-free-trial .pricing-trial-content {\n  padding: 0 1rem;\n}\n.pricing-free-trial .pricing-trial-content img {\n  position: relative;\n  top: -3.1rem;\n}\n@media (max-width: 767.98px) {\n.pricing-free-trial {\n    height: auto;\n}\n.pricing-free-trial .pricing-trial-content {\n    flex-direction: column;\n    align-items: center;\n}\n.pricing-free-trial .pricing-trial-content .pricing-trial-img {\n    top: 0;\n    height: 150px;\n}\n[dir] .pricing-free-trial .pricing-trial-content .pricing-trial-img {\n    margin-top: 2rem;\n}\n}\n@media (max-width: 575.98px) {\n[dir=ltr] .pricing-free-trial {\n    margin-right: -1.2rem;\n    margin-left: -1.2rem;\n}\n[dir=rtl] .pricing-free-trial {\n    margin-left: -1.2rem;\n    margin-right: -1.2rem;\n}\n}\n[dir=ltr] .pricing-card .annual-plan .plan-price sup {\n  left: 0;\n}\n[dir=rtl] .pricing-card .annual-plan .plan-price sup {\n  right: 0;\n}\n[dir=ltr] .pricing-card .annual-plan .plan-price sub {\n  right: 0;\n}\n[dir=rtl] .pricing-card .annual-plan .plan-price sub {\n  left: 0;\n}",""]),t.exports=n},159:function(t,n,a){"use strict";a(52);var i=a(1938),r={props:{accordion:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},type:{type:String,default:"default"}},data:function(){return{collapseID:""}},computed:{collapseClasses:function(){var t=[];return t.push({default:"collapse-default",border:"collapse-border",shadow:"collapse-shadow",margin:"collapse-margin"}[this.type]),t}},created:function(){this.collapseID=Object(i.a)()}},e=a(0),l=Object(e.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"collapse-icon",class:this.collapseClasses,attrs:{role:"tablist"}},[this._t("default")],2)}),[],!1,null,null,null);n.a=l.exports},160:function(t,n,a){"use strict";var i=a(1908),r=a(346),e=a(344),l=a(1926),s=a(1938),c={components:{BCard:i.a,BCardHeader:r.a,BCardBody:e.a,BCollapse:l.a},props:{isVisible:{type:Boolean,default:!1},title:{type:String,required:!0}},data:function(){return{visible:!1,collapseItemID:"",openOnHover:this.$parent.hover}},computed:{accordion:function(){return this.$parent.accordion?"accordion-".concat(this.$parent.collapseID):null}},created:function(){this.collapseItemID=Object(s.a)(),this.visible=this.isVisible},methods:{updateVisible:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.visible=t,this.$emit("visible",t)},collapseOpen:function(){this.openOnHover&&this.updateVisible(!0)},collapseClose:function(){this.openOnHover&&this.updateVisible(!1)}}},o=a(0),p=Object(o.a)(c,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("b-card",{class:{open:t.visible},attrs:{"no-body":""},on:{mouseenter:t.collapseOpen,mouseleave:t.collapseClose}},[a("b-card-header",{class:{collapsed:!t.visible},attrs:{"aria-expanded":t.visible?"true":"false","aria-controls":t.collapseItemID,role:"tab","data-toggle":"collapse"},on:{click:function(n){return t.updateVisible(!t.visible)}}},[t._t("header",[a("span",{staticClass:"lead collapse-title"},[t._v(t._s(t.title))])])],2),t._v(" "),a("b-collapse",{attrs:{id:t.collapseItemID,accordion:t.accordion,role:"tabpanel"},model:{value:t.visible,callback:function(n){t.visible=n},expression:"visible"}},[a("b-card-body",[t._t("default")],2)],1)],1)}),[],!1,null,null,null);n.a=p.exports},1661:function(t,n,a){"use strict";a.r(n);var i=a(535),r=a(93),e=a(1907),l=a(1919),s=a(1916),c=a(1906),o=a(353),p=a(1908),d=a(538),u=a(227),g=a(159),m=a(160),v=a(11),b={components:{BFormCheckbox:i.a,BButton:r.a,BCardText:e.a,BListGroup:l.a,BListGroupItem:s.a,BRow:c.a,BCol:o.a,BCard:p.a,BBadge:d.a,BImg:u.a,AppCollapseItem:m.a,AppCollapse:g.a},directives:{Ripple:v.a},data:function(){return{status:"monthly",monthlyPlanShow:!0,pricing:{}}},created:function(){var t=this;this.$http.get("/pricing/data").then((function(n){t.pricing=n.data}))},methods:{tooglePlan:function(){"monthly"===this.status?this.monthlyPlanShow=!0:this.monthlyPlanShow=!1}}},h=(a(1367),a(0)),f=Object(h.a)(b,(function(){var t=this,n=t.$createElement,i=t._self._c||n;return Object.keys(t.pricing).length?i("section",{attrs:{id:"pricing-plan"}},[i("div",{staticClass:"text-center"},[i("h1",{staticClass:"mt-5"},[t._v("\n      Pricing Plans\n    ")]),t._v(" "),i("p",{staticClass:"mb-2 pb-75"},[t._v("\n      All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs.\n    ")]),t._v(" "),i("div",{staticClass:"d-flex align-items-center justify-content-center mb-5 pb-50"},[i("h6",{staticClass:"mr-1 mb-0"},[t._v("\n        Monthly\n      ")]),t._v(" "),i("b-form-checkbox",{attrs:{id:"priceSwitch",name:"price-switch",value:"annually","unchecked-value":"monthly",switch:""},on:{input:t.tooglePlan},model:{value:t.status,callback:function(n){t.status=n},expression:"status"}}),t._v(" "),i("h6",{staticClass:"ml-50 mb-0"},[t._v("\n        Annually\n      ")])],1)]),t._v(" "),i("b-row",{staticClass:"pricing-card"},[i("b-col",{staticClass:"mx-auto",attrs:{"offset-sm-2":"",sm:"10",md:"12","offset-lg":"2",lg:"10"}},[i("b-row",[i("b-col",{attrs:{md:"4"}},[i("b-card",{attrs:{align:"center"}},[t.pricing.basicPlan.img?i("b-img",{staticClass:"mb-2 mt-5",attrs:{src:t.pricing.basicPlan.img,alt:"basic svg img"}}):t._e(),t._v(" "),i("h3",[t._v(t._s(t.pricing.basicPlan.title))]),t._v(" "),i("b-card-text",[t._v("\n              "+t._s(t.pricing.basicPlan.subtitle)+"\n            ")]),t._v(" "),i("div",{staticClass:"annual-plan"},[i("div",{staticClass:"plan-price mt-2"},[i("sup",{staticClass:"font-medium-1 font-weight-bold text-primary"},[t._v("$")]),t._v(" "),i("span",{staticClass:"pricing-basic-value font-weight-bolder text-primary"},[t._v(t._s(t.monthlyPlanShow?t.pricing.basicPlan.monthlyPrice:t.pricing.basicPlan.yearlyPlan.perMonth))]),t._v(" "),i("sub",{staticClass:"pricing-duration text-body font-medium-1 font-weight-bold"},[t._v("/month")])]),t._v(" "),i("small",{directives:[{name:"show",rawName:"v-show",value:!t.monthlyPlanShow,expression:"!monthlyPlanShow"}],staticClass:"annual-pricing text-muted"},[t._v("USD "+t._s(t.pricing.basicPlan.yearlyPlan.totalAnual)+" / year")])]),t._v(" "),i("b-list-group",{staticClass:"list-group-circle text-left"},t._l(t.pricing.basicPlan.planBenefits,(function(n,a){return i("b-list-group-item",{key:a},[t._v("\n                "+t._s(n)+"\n              ")])})),1),t._v(" "),i("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(40, 199, 111, 0.15)",expression:"'rgba(40, 199, 111, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-2",attrs:{block:"",variant:"outline-success"}},[t._v("\n              Your current plan\n            ")])],1)],1),t._v(" "),i("b-col",{attrs:{md:"4"}},[i("b-card",{staticClass:"popular",attrs:{align:"center"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.pricing.standardPlan.popular,expression:"pricing.standardPlan.popular"}],staticClass:"pricing-badge text-right"},[i("b-badge",{attrs:{variant:"light-primary",pill:""}},[t._v("\n                Popular\n              ")])],1),t._v(" "),t.pricing.standardPlan.img?i("b-img",{staticClass:"mb-1",attrs:{src:t.pricing.standardPlan.img,alt:"svg img"}}):t._e(),t._v(" "),i("h3",[t._v(t._s(t.pricing.standardPlan.title))]),t._v(" "),i("b-card-text",[t._v(t._s(t.pricing.standardPlan.subtitle))]),t._v(" "),i("div",{staticClass:"annual-plan"},[i("div",{staticClass:"plan-price mt-2"},[i("sup",{staticClass:"font-medium-1 font-weight-bold text-primary"},[t._v("$")]),t._v(" "),i("span",{staticClass:"pricing-basic-value font-weight-bolder text-primary"},[t._v(t._s(t.monthlyPlanShow?t.pricing.standardPlan.monthlyPrice:t.pricing.standardPlan.yearlyPlan.perMonth))]),t._v(" "),i("sub",{staticClass:"pricing-duration text-body font-medium-1 font-weight-bold"},[t._v("/month")])]),t._v(" "),i("small",{directives:[{name:"show",rawName:"v-show",value:!t.monthlyPlanShow,expression:"!monthlyPlanShow"}],staticClass:"annual-pricing text-muted"},[t._v("USD "+t._s(t.pricing.standardPlan.yearlyPlan.totalAnual)+" / year")])]),t._v(" "),i("b-list-group",{staticClass:"list-group-circle text-left"},t._l(t.pricing.standardPlan.planBenefits,(function(n,a){return i("b-list-group-item",{key:a},[t._v("\n                "+t._s(n)+"\n              ")])})),1),t._v(" "),i("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-2",attrs:{block:"",variant:"primary"}},[t._v("\n              Upgrade\n            ")])],1)],1),t._v(" "),i("b-col",{attrs:{md:"4"}},[i("b-card",{attrs:{align:"center"}},[t.pricing.enterprisePlan.img?i("b-img",{staticClass:"mb-2",attrs:{src:t.pricing.enterprisePlan.img,alt:"enterprise svg img"}}):t._e(),t._v(" "),i("h3",[t._v(t._s(t.pricing.enterprisePlan.title))]),t._v(" "),i("b-card-text",[t._v(t._s(t.pricing.enterprisePlan.subtitle))]),t._v(" "),i("div",{staticClass:"annual-plan"},[i("div",{staticClass:"plan-price mt-2"},[i("sup",{staticClass:"font-medium-1 font-weight-bold text-primary"},[t._v("$")]),t._v(" "),i("span",{staticClass:"pricing-basic-value font-weight-bolder text-primary"},[t._v(t._s(t.monthlyPlanShow?t.pricing.enterprisePlan.monthlyPrice:t.pricing.enterprisePlan.yearlyPlan.perMonth))]),t._v(" "),i("sub",{staticClass:"pricing-duration text-body font-medium-1 font-weight-bold"},[t._v("/month")])]),t._v(" "),i("small",{directives:[{name:"show",rawName:"v-show",value:!t.monthlyPlanShow,expression:"!monthlyPlanShow"}],staticClass:"annual-pricing text-muted"},[t._v("USD "+t._s(t.pricing.enterprisePlan.yearlyPlan.totalAnual)+" / year")])]),t._v(" "),t._l(t.pricing.enterprisePlan.planBenefits,(function(n,a){return i("b-list-group",{key:a,staticClass:"list-group-circle text-left"},[i("b-list-group-item",[t._v("\n                "+t._s(n)+"\n              ")])],1)})),t._v(" "),i("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-2",attrs:{block:"",variant:"outline-primary"}},[t._v("\n              Upgrade\n            ")])],2)],1)],1)],1)],1),t._v(" "),i("div",{staticClass:"pricing-free-trial"},[i("b-row",[i("b-col",{staticClass:"mx-auto",attrs:{lg:"10","offset-lg":"3"}},[i("div",{staticClass:"pricing-trial-content d-flex justify-content-between"},[i("div",{staticClass:"text-center text-md-left mt-3"},[i("h3",{staticClass:"text-primary"},[t._v("\n              Still not convinced? Start with a 14-day FREE trial!\n            ")]),t._v(" "),i("h5",[t._v("You will get full access to with all the features for 14 days.")]),t._v(" "),i("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mt-2 mt-lg-3",attrs:{variant:"primary"}},[t._v("\n              Start 14-day FREE trial\n            ")])],1),t._v(" "),i("b-img",{staticClass:"pricing-trial-img",attrs:{fluid:"",src:a(1366),alt:"svg img"}})],1)])],1)],1),t._v(" "),i("div",{staticClass:"pricing-faq"},[i("h3",{staticClass:"text-center"},[t._v("\n      FAQ's\n    ")]),t._v(" "),i("p",{staticClass:"text-center"},[t._v("\n      Let us help answer the most common questions.\n    ")]),t._v(" "),i("b-row",{staticClass:"py-2"},[i("b-col",{staticClass:"mx-auto",attrs:{lg:"10","offset-lg":"2"}},[i("app-collapse",{attrs:{accordion:"",type:"margin"}},t._l(t.pricing.qandA,(function(n,a){return i("app-collapse-item",{key:a,attrs:{title:n.question}},[t._v("\n            "+t._s(n.ans)+"\n          ")])})),1)],1)],1)],1)],1):t._e()}),[],!1,null,null,null);n.default=f.exports},695:function(t,n,a){var i=a(1368);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(21)(i,r);i.locals&&(t.exports=i.locals)}}]);