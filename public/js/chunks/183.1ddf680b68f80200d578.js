(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{1174:function(t,e,a){"use strict";a(622)},1175:function(t,e,a){(e=a(21)(!1)).push([t.i,".card[data-v-45fabed7]  .card-header .heading-elements {\n  position: static;\n}[dir] .card[data-v-45fabed7]  .card-header .heading-elements {\n  cursor: inherit;\n}\n.card[data-v-45fabed7]  .card-header .heading-elements .list-inline {\n  display: block;\n}\n[dir] .card[data-v-45fabed7]  .card-header .heading-elements .list-inline li a {\n  padding: 0;\n}\n[dir=ltr] .card[data-v-45fabed7]  .card-header .heading-elements .list-inline li:not(:last-child) {\n  margin-right: 1rem;\n}\n[dir=rtl] .card[data-v-45fabed7]  .card-header .heading-elements .list-inline li:not(:last-child) {\n  margin-left: 1rem;\n}\n[dir] .dark-layout .b-overlay-wrap[data-v-45fabed7]  .b-overlay .bg-white {\n  background-color: #161d31 !important;\n}",""]),t.exports=e},1905:function(t,e,a){"use strict";a.r(e);a(74),a(52);var n=a(1801),o=a(336),r=a(338),i=a(337),s=a(1815),c=a(1824),l={props:{isCollapsed:{type:Boolean,requried:!0},availableActions:{type:Array,default:function(){return[]}}}},d=a(0),h={components:{BCardActionsContainer:Object(d.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"heading-elements"},[a("ul",{staticClass:"list-inline mb-0"},[t.availableActions.includes("collapse")?a("li",[a("a",{class:{rotate:t.isCollapsed},attrs:{"data-action":"collapse"},on:{click:function(e){return t.$emit("collapse")}}},[a("feather-icon",{attrs:{icon:"ChevronDownIcon",size:"16"}})],1)]):t._e(),t._v(" "),t.availableActions.includes("refresh")?a("li",[a("a",{attrs:{"data-action":"reload"},on:{click:function(e){return t.$emit("refresh")}}},[a("feather-icon",{attrs:{icon:"RotateCwIcon",size:"14"}})],1)]):t._e(),t._v(" "),t.availableActions.includes("close")?a("li",[a("a",{attrs:{"data-action":"close"},on:{click:function(e){return t.$emit("close")}}},[a("feather-icon",{attrs:{icon:"XIcon",size:"14"}})],1)]):t._e()])])}),[],!1,null,null,null).exports,BCard:n.a,BCardTitle:o.a,BCardSubTitle:r.a,BCardBody:i.a,BCollapse:s.a,BOverlay:c.a},inheritAttrs:!1,props:{collapsed:{type:Boolean,default:!1},noActions:{type:Boolean,default:!1},actionCollapse:{type:Boolean,default:!1},actionRefresh:{type:Boolean,default:!1},actionClose:{type:Boolean,default:!1}},data:function(){return{parentID:"",content_visible:!this.collapsed,showLoading:!1,cardClosed:!1,cardStyles:{}}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t},showHeader:function(){return this.$attrs.title||this.$attrs["sub-title"]||!this.noActions},showActions:function(){return!this.noActions},availableActions:function(){var t=[],e=!1===(this.actionCollapse||this.actionRefresh||this.actionClose);return(this.actionCollapse||e)&&t.push("collapse"),(this.actionRefresh||e)&&t.push("refresh"),(this.actionClose||e)&&t.push("close"),t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)},methods:{removeCard:function(){var t=this;this.$set(this.cardStyles,"maxHeight","".concat(this.$refs.bCard.clientHeight,"px")),setTimeout((function(){t.$set(t.cardStyles,"maxHeight","0px"),t.$set(t.cardStyles,"overflow","hidden")}),10)},triggerCollapse:function(){this.content_visible=!this.content_visible,this.$emit("collapse")},triggerRefresh:function(){this.showLoading=!0,this.$emit("refresh")},triggerClose:function(){this.removeCard(),this.$emit("close")}}},u=(a(1174),Object(d.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.cardClosed?t._e():a("b-overlay",{attrs:{variant:"white",show:t.showLoading,"spinner-variant":"primary",blur:"0",opacity:".75",rounded:"sm"}},[a("b-card",t._g(t._b({ref:"bCard",style:t.cardStyles,attrs:{"no-body":"","aria-expanded":t.content_visible?"false":"true","aria-controls":t.parentID}},"b-card",t.cardAttrs,!1),t.$listeners),[t.showHeader?a("div",{staticClass:"card-header"},[a("div",[a("b-card-title",[t._v(t._s(t.$attrs.title))]),t._v(" "),t.$attrs["sub-title"]?a("b-card-sub-title",[t._v("\n          "+t._s(t.$attrs["sub-title"])+"\n        ")]):t._e()],1),t._v(" "),t.showActions?a("b-card-actions-container",{attrs:{"available-actions":t.availableActions,"is-collapsed":!t.content_visible},on:{collapse:t.triggerCollapse,refresh:t.triggerRefresh,close:t.triggerClose}}):t._e()],1):t._e(),t._v(" "),a("b-collapse",{staticClass:"card-content",attrs:{id:t.parentID,visible:t.content_visible},model:{value:t.content_visible,callback:function(e){t.content_visible=e},expression:"content_visible"}},[void 0!==t.$attrs["no-body"]?t._t("default"):a("b-card-body",[t._t("default")],2)],2)],1)],1)}),[],!1,null,"45fabed7",null).exports),v=a(1798),f=a(341),p=a(1808),b=a(1799),_={components:{BCardActions:u,BRow:v.a,BCol:f.a,BTable:p.a,BCardText:b.a},data:function(){return{fields:["ACTION",{key:"ICON",label:"ICON"},"DETAILS"],items:[{ACTION:"Collapse",ICON:"ChevronDownIcon",DETAILS:"Collapse card content using collapse action."},{ACTION:"Refresh Content",ICON:"RotateCwIcon",DETAILS:"Refresh your card content using refresh action."},{ACTION:"Remove Card",ICON:"XIcon",DETAILS:"Remove card from page using remove card action"}]}},methods:{refreshStop:function(t){var e=this;setTimeout((function(){e.$refs[t].showLoading=!1}),3e3)}}},C=Object(d.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"card-actions"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-card-actions",{ref:"cardAction",attrs:{title:"Card Actions"},on:{refresh:function(e){return t.refreshStop("cardAction")}}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-table",{attrs:{responsive:"",items:t.items,bordered:""},scopedSlots:t._u([{key:"cell(ICON)",fn:function(t){return[a("div",{staticClass:"text-center"},[a("feather-icon",{attrs:{icon:t.value}})],1)]}}])})],1)],1)],1)],1),t._v(" "),a("b-col",{attrs:{md:"6"}},[a("b-card-actions",{attrs:{title:"Collapsible","action-collapse":""}},[a("b-card-text",[a("span",[t._v("You can create a collapsible content by adding ")]),t._v(" "),a("code",[t._v("actionCollapse")]),t._v(" "),a("span",[t._v(" prop in ")]),t._v(" "),a("code",[t._v("<b-card-actions>")])]),t._v(" "),a("b-card-text",[a("span",[t._v("Click on ")]),t._v(" "),a("feather-icon",{attrs:{icon:"ChevronDownIcon"}}),t._v(" "),a("span",[t._v(" to see card collapse in action.")])],1)],1)],1),t._v(" "),a("b-col",{attrs:{md:"6"}},[a("b-card-actions",{ref:"refreshCard",attrs:{title:"Refresh Content","action-refresh":""},on:{refresh:function(e){return t.refreshStop("refreshCard")}}},[a("b-card-text",[t._v("\n          To create a card with refresh action use "),a("code",[t._v("actionRefresh")]),t._v(" prop along with\n          "),a("code",[t._v("<b-card-actions>")])]),t._v(" "),a("b-card-text",[a("span",[t._v("Click on ")]),t._v(" "),a("feather-icon",{attrs:{icon:"RotateCwIcon"}}),t._v(" "),a("span",[t._v(" icon to see refresh card content in action.")])],1)],1)],1),t._v(" "),a("b-col",{attrs:{md:"6"}},[a("b-card-actions",{attrs:{title:"Remove Card","action-close":""}},[a("b-card-text",[t._v("\n          You can create a closeable card by using "),a("code",[t._v("actionClose")]),t._v(" prop along with\n          "),a("code",[t._v("<b-card-actions>")])]),t._v(" "),a("b-card-text",[a("span",[t._v("Click on ")]),t._v(" "),a("feather-icon",{attrs:{icon:"XIcon"}}),t._v(" "),a("span",[t._v(" icon to see closeable card in action.")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=C.exports},622:function(t,e,a){var n=a(1175);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(23)(n,o);n.locals&&(t.exports=n.locals)}}]);