(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1038:function(n,e,t){"use strict";t(532)},1039:function(n,e,t){(e=t(20)(!1)).push([n.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),n.exports=e},1232:function(n,e,t){"use strict";t(639)},1233:function(n,e,t){(e=t(20)(!1)).push([n.i,"\n.list-group-item {\r\n  transition: all 1s\n}\r\n",""]),n.exports=e},16:function(n,e,t){"use strict";t(68);var a=t(1856),s=t(342),i=t(344),r=t(343),l=t(1871),o=(t(176),t(190),t(96)),d=t.n(o),c={components:{BCard:a.a,BCardTitle:s.a,BCardSubTitle:i.a,BCardBody:r.a,BCollapse:l.a,Prism:d.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var n=JSON.parse(JSON.stringify(this.$attrs));return delete n.title,delete n["sub-title"],n}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},m=(t(1038),t(0)),u=Object(m.a)(c,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("b-card",n._g(n._b({attrs:{"no-body":""}},"b-card",n.cardAttrs,!1),n.$listeners),[t("div",{staticClass:"card-header"},[t("div",[t("b-card-title",[n._v(n._s(n.$attrs.title))]),n._v(" "),n.$attrs["sub-title"]?t("b-card-sub-title",[n._v("\n        "+n._s(n.$attrs["sub-title"])+"\n      ")]):n._e()],1),n._v(" "),t("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":n.code_visible?"false":"true","aria-controls":n.parentID},on:{click:function(e){n.code_visible=!n.code_visible}}})]),n._v(" "),void 0!==n.$attrs["no-body"]?[n._t("default"),n._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(e){n.code_visible=e},expression:"code_visible"}},[t("b-card-body",[t("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],1)]:t("b-card-body",[n._t("default"),n._v(" "),t("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(e){n.code_visible=e},expression:"code_visible"}},[t("div",{staticClass:"p-1"}),n._v(" "),t("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);e.a=u.exports},1957:function(n,e,t){"use strict";t.r(e);var a=t(1854),s=t(349),i=t(16),r=t(1864),l=t(1855),o=t(187),d=t.n(o),c=t(96),m=t.n(c),u=(t(176),t(190),{components:{BCardCode:i.a,draggable:d.a,BListGroupItem:r.a,Prism:m.a,BCardText:l.a},data:function(){return{codeSimple:"\n<template>\n  <div>\n    \x3c!-- draggable --\x3e\n    <draggable\n      v-model=\"list\"\n      tag=\"ul\"\n      class=\"list-group list-group-flush cursor-move\"\n    >\n      <b-list-group-item\n        v-for=\"(item, index) in list\"\n        :key=\"index\"\n        tag=\"li\"\n      >\n        <strong> {{ item }}</strong>\n      </b-list-group-item>\n    </draggable>\n\n    \x3c!-- code --\x3e\n    <prism\n      language=\"javascript\"\n      class=\"rounded mt-2\"\n    >list: {{ list }}\n    </prism>\n  </div>\n</template>\n\n<script>\nimport { BListGroupItem} from 'bootstrap-vue'\nimport draggable from 'vuedraggable'\nimport Prism from 'vue-prism-component'\nimport 'prismjs'\nimport 'prismjs/themes/prism-tomorrow.css'\n\nexport default {\n  components: {\n    draggable,\n    BListGroupItem,\n    Prism,\n  },\n  data() {\n    return {\n      list:\n      [\n        'Marzipan I love I love. Soufflé donut I love gummi bears powder. Candy danish biscuit.',\n        'Halvah bonbon bonbon brownie sugar plum. Halvah I love cupcake I love.',\n        'Cake muffin icing topping wafer topping gummi bears apple pie.',\n        'Cotton candy gummi bears bear claw cake brownie jelly-o lemon drops croissant sweet roll.',\n      ],\n    }\n  },\n}\n<\/script>\n",list:["Marzipan I love I love. Soufflé donut I love gummi bears powder. Candy danish biscuit.","Halvah bonbon bonbon brownie sugar plum. Halvah I love cupcake I love.","Cake muffin icing topping wafer topping gummi bears apple pie.","Cotton candy gummi bears bear claw cake brownie jelly-o lemon drops croissant sweet roll."]}}}),p=t(0),g=Object(p.a)(u,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("b-card-code",{attrs:{title:"Simple"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeSimple)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[n._v("Simple Draggable list with in sync to original list. Remove ")]),n._v(" "),t("code",[n._v("list")]),n._v(" "),t("span",[n._v(" prop to break synchronization with original list.")])]),n._v(" "),t("draggable",{staticClass:"list-group list-group-flush cursor-move",attrs:{tag:"ul"},model:{value:n.list,callback:function(e){n.list=e},expression:"list"}},n._l(n.list,(function(e,a){return t("b-list-group-item",{key:a,attrs:{tag:"li"}},[t("strong",[n._v(" "+n._s(e))])])})),1),n._v(" "),t("prism",{staticClass:"rounded mt-2",attrs:{language:"javascript"}},[n._v("list: "+n._s(n.list)+"\n  ")])],1)}),[],!1,null,null,null).exports,b=t(536),v={components:{BCardCode:i.a,BAvatar:b.a,BListGroupItem:r.a,BCardText:l.a,BRow:a.a,BCol:s.a,Prism:m.a,draggable:d.a},data:function(){return{codeMultiple:'\n<template>\n  <div>\n    <b-row>\n\n      \x3c!-- people group 1 --\x3e\n      <b-col md="6">\n        <h6 class="text-primary font-weight-bold mb-2">\n          People Group 1\n        </h6>\n\n        \x3c!-- draggable --\x3e\n        <draggable\n          :list="list1"\n          tag="ul"\n          group="people"\n          class="list-group list-group-flush cursor-move"\n        >\n          <b-list-group-item\n            v-for="(listItem, index) in list1"\n            :key="index"\n            tag="li"\n          >\n            <div class="d-flex">\n              <b-avatar :text="listItem.name.slice(0,2)" />\n              <div class="ml-25">\n                <b-card-text class="mb-0 font-weight-bold">\n                  {{ listItem.name }}\n                </b-card-text>\n                <small>{{ listItem.email }}</small>\n              </div>\n            </div>\n          </b-list-group-item>\n        </draggable>\n      </b-col>\n\n      \x3c!-- people group 2 --\x3e\n      <b-col\n        md="6"\n        class="mt-sm-2 mt-md-0"\n      >\n        <h6 class="text-primary font-weight-bold mb-2">\n          People Group 2\n        </h6>\n\n        \x3c!-- draggable --\x3e\n        <draggable\n          :list="list2"\n          tag="ul"\n          group="people"\n          class="list-group list-group-flush cursor-move"\n        >\n          <b-list-group-item\n            v-for="(listItem, index) in list2"\n            :key="index"\n            tag="li"\n          >\n            <div class="d-flex">\n              <b-avatar :text="listItem.name.slice(0,2)" />\n              <div class="ml-25">\n                <b-card-text class="mb-0 font-weight-bold">\n                  {{ listItem.name }}\n                </b-card-text>\n                <small>{{ listItem.email }}</small>\n              </div>\n            </div>\n          </b-list-group-item>\n        </draggable>\n      </b-col>\n\n      \x3c!-- people group 1 code --\x3e\n      <b-col\n        md="6"\n        class="mt-1"\n      >\n        <prism\n          language="javascript"\n          class="rounded"\n        >\n          People Group 1: {{ list1 }}\n        </prism>\n      </b-col>\n\n      \x3c!-- people group 2 code --\x3e\n      <b-col\n        md="6"\n        class="mt-1"\n      >\n        <prism\n          language="javascript"\n          class="rounded"\n        >\n          People Group 2: {{ list2 }}\n        </prism>\n      </b-col>\n    </b-row>\n  </div>\n</template>\n\n<script>\nimport {\n  BListGroupItem, BAvatar, BRow, BCol,\n} from \'bootstrap-vue\'\nimport draggable from \'vuedraggable\'\nimport Prism from \'vue-prism-component\'\nimport \'prismjs\'\nimport \'prismjs/themes/prism-tomorrow.css\'\n\nexport default {\n  components: {\n    BAvatar,\n    BListGroupItem,\n    BRow,\n    BCol,\n    Prism,\n    draggable,\n  },\n  data() {\n    return {\n      list1: [\n        {\n          name: \'Paz Joya\',\n          email: \'girliness@spotlike.co.uk\',\n        },\n        {\n          name: \'Sunshine Cose\',\n          email: \'executrixship@equisized.edu\',\n        },\n        {\n          name: \'Alba Dobbin\',\n          email: \'bidding@demibob.or\',\n        },\n        {\n          name: \'Marlin Hinchee\',\n          email: \'preholding@scuffly.co.uk\',\n        },\n      ],\n      list2: [\n        {\n          name: \'Leia Atienza\',\n          email: \'unmeasurableness@interlamellar.co.uk\',\n        },\n        {\n          name: \'Lashawna Vaudrainm\',\n          email: \'soaking@khubber.com\',\n        },\n        {\n          name: \'Liliana Henscheid\',\n          email: \'lecideine@turndown.org\',\n        },\n        {\n          name: \'Keven Kolter\',\n          email: \'nontenure@anglicanum.co.uk\',\n        },\n      ],\n    }\n  },\n}\n<\/script>\n',list1:[{name:"Paz Joya",email:"girliness@spotlike.co.uk"},{name:"Sunshine Cose",email:"executrixship@equisized.edu"},{name:"Alba Dobbin",email:"bidding@demibob.or"},{name:"Marlin Hinchee",email:"preholding@scuffly.co.uk"}],list2:[{name:"Leia Atienza",email:"unmeasurableness@interlamellar.co.uk"},{name:"Lashawna Vaudrainm",email:"soaking@khubber.com"},{name:"Liliana Henscheid",email:"lecideine@turndown.org"},{name:"Keven Kolter",email:"nontenure@anglicanum.co.uk"}]}}},_=Object(p.a)(v,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("b-card-code",{attrs:{title:"Multiple Lists"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeMultiple)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[n._v("Drag and drop items of more than one list. Add same ")]),n._v(" "),t("code",[n._v("group")]),n._v(" "),t("span",[n._v(" to ")]),n._v(" "),t("code",[n._v("group")]),n._v(" "),t("span",[n._v(" prop.")])]),n._v(" "),t("b-row",[t("b-col",{attrs:{md:"6"}},[t("h6",{staticClass:"text-primary font-weight-bold mb-2"},[n._v("\n        People Group 1\n      ")]),n._v(" "),t("draggable",{staticClass:"list-group list-group-flush cursor-move",attrs:{list:n.list1,tag:"ul",group:"people"}},n._l(n.list1,(function(e,a){return t("b-list-group-item",{key:a,attrs:{tag:"li"}},[t("div",{staticClass:"d-flex"},[t("b-avatar",{attrs:{text:e.name.slice(0,2)}}),n._v(" "),t("div",{staticClass:"ml-25"},[t("b-card-text",{staticClass:"mb-0 font-weight-bold"},[n._v("\n                "+n._s(e.name)+"\n              ")]),n._v(" "),t("small",[n._v(n._s(e.email))])],1)],1)])})),1)],1),n._v(" "),t("b-col",{staticClass:"mt-sm-2 mt-md-0",attrs:{md:"6"}},[t("h6",{staticClass:"text-primary font-weight-bold mb-2"},[n._v("\n        People Group 2\n      ")]),n._v(" "),t("draggable",{staticClass:"list-group list-group-flush cursor-move",attrs:{list:n.list2,tag:"ul",group:"people"}},n._l(n.list2,(function(e,a){return t("b-list-group-item",{key:a,attrs:{tag:"li"}},[t("div",{staticClass:"d-flex"},[t("b-avatar",{attrs:{text:e.name.slice(0,2)}}),n._v(" "),t("div",{staticClass:"ml-25"},[t("b-card-text",{staticClass:"mb-0 font-weight-bold"},[n._v("\n                "+n._s(e.name)+"\n              ")]),n._v(" "),t("small",[n._v(n._s(e.email))])],1)],1)])})),1)],1),n._v(" "),t("b-col",{staticClass:"mt-1",attrs:{md:"6"}},[t("prism",{staticClass:"rounded",attrs:{language:"javascript"}},[n._v("\n        People Group 1: "+n._s(n.list1)+"\n      ")])],1),n._v(" "),t("b-col",{staticClass:"mt-1",attrs:{md:"6"}},[t("prism",{staticClass:"rounded",attrs:{language:"javascript"}},[n._v("\n        People Group 2: "+n._s(n.list2)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,f=t(541),h={components:{BCardCode:i.a,BBadge:f.a,draggable:d.a,BCardText:l.a,BRow:a.a,Prism:m.a,BCol:s.a},data:function(){return{codeClone:"\n<template>\n  <b-row>\n\n    \x3c!-- tag source --\x3e\n    <b-col md=\"6\">\n      <h6>Tag Source</h6>\n\n      <draggable\n        :list=\"list1\"\n        :group=\"{name:'tags', pull:'clone', put:false }\"\n        class=\"mb-1 cursor-move\"\n      >\n        <b-badge\n          v-for=\"(listItem, index) in list1\"\n          :key=\"index\"\n          class=\"mr-25\"\n        >\n          {{ listItem }}\n        </b-badge>\n      </draggable>\n    </b-col>\n\n    \x3c!-- add tag --\x3e\n    <b-col md=\"6\">\n      <h6>Your Tags</h6>\n\n      <draggable\n        :list=\"list2\"\n        :group=\"{name: 'tags'}\"\n        class=\"mb-1 cursor-move\"\n      >\n        <b-badge\n          v-for=\"(listItem, index) in list2\"\n          :key=\"index\"\n          class=\"mr-25\"\n        >\n          {{ listItem }}\n        </b-badge>\n      </draggable>\n    </b-col>\n\n    \x3c!-- tag source code --\x3e\n    <b-col md=\"6\">\n      <prism\n        language=\"javascript\"\n        class=\"rounded\"\n      >\n        Tag Source: {{ list1 }}\n      </prism>\n    </b-col>\n\n    \x3c!-- tag add code --\x3e\n    <b-col md=\"6\">\n      <prism\n        language=\"javascript\"\n        class=\"rounded\"\n      >\n        Added tags: {{ list2 }}\n      </prism>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {\n  BBadge, BRow, BCol,\n} from 'bootstrap-vue'\nimport draggable from 'vuedraggable'\nimport Prism from 'vue-prism-component'\nimport 'prismjs'\nimport 'prismjs/themes/prism-tomorrow.css'\n\nexport default {\n  components: {\n    BBadge,\n    draggable,\n    BRow,\n    Prism,\n    BCol,\n  },\n  data() {\n    return {\n      list1: ['youtube', 'google', 'facebook', 'twitter', 'instagram', 'pinterest', 'tinder', 'slack', 'discord', 'github', 'gitlab'],\n      list2: ['google', 'youtube'],\n    }\n  },\n}\n<\/script>\n",list1:["youtube","google","facebook","twitter","instagram","pinterest","tinder","slack","discord","github","gitlab"],list2:["google","youtube"]}}},x=Object(p.a)(h,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("b-card-code",{attrs:{title:"Clone List"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeClone)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[n._v("Clone list items from another existing list. Add ")]),n._v(" "),t("code",[n._v("pull")]),n._v(" "),t("span",[n._v(" and ")]),n._v(" "),t("code",[n._v("put")]),n._v(" "),t("span",[n._v(" to ")]),n._v(" "),t("code",[n._v("group")]),n._v(" "),t("span",[n._v(" prop.")])]),n._v(" "),t("b-row",[t("b-col",{attrs:{md:"6"}},[t("h6",[n._v("Tag Source")]),n._v(" "),t("draggable",{staticClass:"mb-1 cursor-move",attrs:{list:n.list1,group:{name:"tags",pull:"clone",put:!1}}},n._l(n.list1,(function(e,a){return t("b-badge",{key:a,staticClass:"mr-25"},[n._v("\n          "+n._s(e)+"\n        ")])})),1)],1),n._v(" "),t("b-col",{attrs:{md:"6"}},[t("h6",[n._v("Your Tags")]),n._v(" "),t("draggable",{staticClass:"mb-1 cursor-move",attrs:{list:n.list2,group:{name:"tags"}}},n._l(n.list2,(function(e,a){return t("b-badge",{key:a,staticClass:"mr-25"},[n._v("\n          "+n._s(e)+"\n        ")])})),1)],1),n._v(" "),t("b-col",{attrs:{md:"6"}},[t("prism",{staticClass:"rounded",attrs:{language:"javascript"}},[n._v("\n        Tag Source: "+n._s(n.list1)+"\n      ")])],1),n._v(" "),t("b-col",{attrs:{md:"6"}},[t("prism",{staticClass:"rounded",attrs:{language:"javascript"}},[n._v("\n        Added tags: "+n._s(n.list2)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null).exports,k={components:{BCardCode:i.a,draggable:d.a,BListGroupItem:r.a,BAvatar:b.a,BCardText:l.a,Prism:m.a},data:function(){return{codeAnimation:"\n<template>\n  <div>\n\n    <h6 class=\"text-primary font-weight-bold mb-2\">\n      People Group\n    </h6>\n    \x3c!-- draggable --\x3e\n    <draggable\n      v-model=\"list\"\n      class=\"list-group list-group-flush cursor-move\"\n      tag=\"ul\"\n    >\n      <transition-group\n        type=\"transition\"\n        name=\"flip-list\"\n      >\n        <b-list-group-item\n          v-for=\"listItem in list\"\n          :key=\"listItem.email\"\n          tag=\"li\"\n        >\n          <div class=\"d-flex\">\n            <b-avatar :text=\"listItem.name.slice(0,2)\" />\n            <div class=\"ml-25\">\n              <b-card-text class=\"font-weight-bold mb-0\">\n                {{ listItem.name }}\n              </b-card-text>\n              <small>{{ listItem.email }}</small>\n            </div>\n          </div>\n        </b-list-group-item>\n      </transition-group>\n    </draggable>\n\n    \x3c!-- code  --\x3e\n    <prism\n      language=\"javascript\"\n      class=\"rounded mt-2\"\n    >\n      {{ list }}\n    </prism>\n  </div>\n</template>\n\n<script>\nimport { BListGroupItem, BAvatar} from 'bootstrap-vue'\nimport draggable from 'vuedraggable'\nimport Prism from 'vue-prism-component'\nimport 'prismjs'\nimport 'prismjs/themes/prism-tomorrow.css'\n\nexport default {\n  components: {\n    draggable,\n    BListGroupItem,\n    BAvatar,\n    Prism,\n  },\n  data() {\n    return {\n      list: [{\n        name: 'Paz Joya',\n        email: 'girliness@spotlike.co.uk',\n      },\n      {\n        name: 'Sunshine Cose',\n        email: 'executrixship@equisized.edu',\n      },\n      {\n        name: 'Alba Dobbin',\n        email: 'bidding@demibob.or',\n      },\n      {\n        name: 'Marlin Hinchee',\n        email: 'preholding@scuffly.co.uk',\n      },\n      {\n        name: 'Leia Atienza',\n        email: 'unmeasurableness@interlamellar.co.uk',\n      },\n      {\n        name: 'Lashawna Vaudrainm',\n        email: 'soaking@khubber.com',\n      },\n      {\n        name: 'Liliana Henscheid',\n        email: 'lecideine@turndown.org',\n      },\n      {\n        name: 'Keven Kolter',\n        email: 'nontenure@anglicanum.co.uk',\n      },\n      ],\n    }\n  },\n}\n<\/script>\n\n<style>\n.list-group-item {\n  transition: all 1s\n}\n</style>\n",list:[{name:"Paz Joya",email:"girliness@spotlike.co.uk"},{name:"Sunshine Cose",email:"executrixship@equisized.edu"},{name:"Alba Dobbin",email:"bidding@demibob.or"},{name:"Marlin Hinchee",email:"preholding@scuffly.co.uk"},{name:"Leia Atienza",email:"unmeasurableness@interlamellar.co.uk"},{name:"Lashawna Vaudrainm",email:"soaking@khubber.com"},{name:"Liliana Henscheid",email:"lecideine@turndown.org"},{name:"Keven Kolter",email:"nontenure@anglicanum.co.uk"}]}}},C=(t(1232),Object(p.a)(k,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("b-card-code",{attrs:{title:"Animation"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeAnimation)+"\n  ")]},proxy:!0}])},[t("b-card-text",[t("span",[n._v("Add animation to changes using ")]),n._v(" "),t("code",[n._v("transition-group")]),n._v(" "),t("span",[n._v(".")])]),n._v(" "),t("h6",{staticClass:"text-primary font-weight-bold mb-2"},[n._v("\n    People Group\n  ")]),n._v(" "),t("draggable",{staticClass:"list-group list-group-flush cursor-move",attrs:{tag:"ul"},model:{value:n.list,callback:function(e){n.list=e},expression:"list"}},[t("transition-group",{attrs:{type:"transition",name:"flip-list"}},n._l(n.list,(function(e){return t("b-list-group-item",{key:e.email,attrs:{tag:"li"}},[t("div",{staticClass:"d-flex"},[t("b-avatar",{attrs:{text:e.name.slice(0,2)}}),n._v(" "),t("div",{staticClass:"ml-25"},[t("b-card-text",{staticClass:"font-weight-bold mb-0"},[n._v("\n              "+n._s(e.name)+"\n            ")]),n._v(" "),t("small",[n._v(n._s(e.email))])],1)],1)])})),1)],1),n._v(" "),t("prism",{staticClass:"rounded mt-2",attrs:{language:"javascript"}},[n._v("\n    "+n._s(n.list)+"\n  ")])],1)}),[],!1,null,null,null).exports),w={components:{BRow:a.a,BCol:s.a,DragDropSimple:g,DragDropMultipleList:_,DragDropClone:x,DragDropAnimation:C}},y=Object(p.a)(w,(function(){var n=this.$createElement,e=this._self._c||n;return e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("drag-drop-simple"),this._v(" "),e("drag-drop-multiple-list"),this._v(" "),e("drag-drop-clone"),this._v(" "),e("drag-drop-animation")],1)],1)}),[],!1,null,null,null);e.default=y.exports},532:function(n,e,t){var a=t(1039);"string"==typeof a&&(a=[[n.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(21)(a,s);a.locals&&(n.exports=a.locals)},639:function(n,e,t){var a=t(1233);"string"==typeof a&&(a=[[n.i,a,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(21)(a,s);a.locals&&(n.exports=a.locals)}}]);