(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1031:function(e,t,n){"use strict";n(531)},1032:function(e,t,n){(t=n(20)(!1)).push([e.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),e.exports=t},1462:function(e,t,n){"use strict";n(884)},1463:function(e,t,n){(t=n(20)(!1)).push([e.i,"pre[data-v-b0363cf6] {\n  min-height: 295px;\n}[dir] pre[data-v-b0363cf6] {\n  padding: 1.5rem;\n  margin-bottom: 0;\n  border-radius: 0.5rem;\n}",""]),e.exports=t},1464:function(e,t,n){"use strict";n(885)},1465:function(e,t,n){(t=n(20)(!1)).push([e.i,".autosuggest__results-container {\n  position: relative;\n  z-index: 999;\n}\n.autosuggest__results-container .autosuggest__results {\n  position: absolute;\n  width: 100%;\n  overflow-y: auto;\n  max-height: 40vh;\n}\n[dir] .autosuggest__results-container .autosuggest__results {\n  background-color: #fff;\n  margin-top: 1rem;\n  border-radius: 0.5rem;\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;\n}\n[dir] .autosuggest__results-container .autosuggest__results ul {\n  margin-bottom: 0;\n}\n[dir=ltr] .autosuggest__results-container .autosuggest__results ul {\n  padding-left: 0;\n}\n[dir=rtl] .autosuggest__results-container .autosuggest__results ul {\n  padding-right: 0;\n}\n.autosuggest__results-container .autosuggest__results ul li {\n  list-style: none;\n}\n[dir] .autosuggest__results-container .autosuggest__results ul li {\n  padding: 0.75rem 1rem;\n}\n[dir] .autosuggest__results-container .autosuggest__results ul li:hover, [dir] .autosuggest__results-container .autosuggest__results ul li.autosuggest__results-item--highlighted {\n  background: #ededed;\n}\n.autosuggest__results-container .autosuggest__results ul li .detail {\n  line-height: 0.5;\n}\n.autosuggest__results-container .autosuggest__results ul .autosuggest__results-before {\n  color: #7367f0;\n  font-weight: 600;\n}\nbody.dark-layout .autosuggest__results-container .autosuggest__results {\n  color: #b4b7bd;\n}\n[dir] body.dark-layout .autosuggest__results-container .autosuggest__results {\n  background-color: #283046;\n}\n[dir] body.dark-layout .autosuggest__results-container .autosuggest__results .autosuggest__results-item--highlighted, [dir] body.dark-layout .autosuggest__results-container .autosuggest__results .autosuggest__results-item:hover, [dir] body.dark-layout .autosuggest__results-container .autosuggest__results .autosuggest__results-before:hover {\n  background-color: #242b3d;\n}\nbody.dark-layout .autosuggest__results-container .autosuggest__results .my-suggestion-item {\n  color: #b4b7bd;\n}",""]),e.exports=t},1535:function(e,t,n){"use strict";n.r(t);var s=n(1823),o=n(347),a=(n(177),n(77),n(39),n(110),n(169),n(219)),i=n(16),r={components:{VueAutosuggest:a.a,BCardCode:i.a},data:function(){return{datasuggest:[],filteredOptions:[],limit:10,selected:null,codeBasic:"\n<template>\n  <vue-autosuggest\n    :suggestions=\"filteredOptions\"\n    :limit=\"10\"\n    :input-props=\"{id:'autosuggest__input',class:'form-control', placeholder:'Do you feel lucky?'}\"\n    @input=\"onInputChange\"\n  >\n    <template slot-scope=\"{suggestion}\">\n      <span class=\"my-suggestion-item\">{{ suggestion.item.name }}</span>\n    </template>\n  </vue-autosuggest>\n</template>\n\n<script>\nimport { VueAutosuggest } from 'vue-autosuggest'\n\nexport default {\n  components: {\n    VueAutosuggest,\n  },\n  data() {\n    return {\n      datasuggest: [],\n      filteredOptions: [],\n      limit: 10,\n      selected: null,\n    }\n  },\n  created() {\n    this.$http.get('/autosuggest/data')\n      .then(res => { this.datasuggest = res })\n  },\n  methods: {\n    onInputChange(text) {\n      if (text === '' || text === undefined) {\n        return\n      }\n\n      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */\n      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredDesigner = this.datasuggest.data[0].designers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredData = filteredDevelopers.concat(filteredDesigner)\n      this.filteredOptions = [{\n        data: filteredData,\n      }]\n    },\n  },\n}\n<\/script>\n"}},created:function(){var e=this;this.$http.get("/autosuggest/data").then((function(t){e.datasuggest=t}))},methods:{onInputChange:function(e){if(""!==e&&void 0!==e){var t=this.datasuggest.data[0].developers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),n=this.datasuggest.data[0].designers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),s=t.concat(n);this.filteredOptions=[{data:s}]}}}},u=n(0),l=Object(u.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Basic"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeBasic)+"\n  ")]},proxy:!0}])},[n("vue-autosuggest",{attrs:{suggestions:e.filteredOptions,limit:10,"input-props":{id:"autosuggest__input",class:"form-control",placeholder:"Do you feel lucky?"}},on:{input:e.onInputChange},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.suggestion;return[n("span",{staticClass:"my-suggestion-item"},[e._v(e._s(s.item.name))])]}}])})],1)}),[],!1,null,null,null).exports,d=n(1824),c=n(535),g={components:{VueAutosuggest:a.a,BCardCode:i.a,BCardText:d.a,BAvatar:c.a},data:function(){return{datasuggest:[],filteredOptions:[],inputProps:{id:"autosuggest__input",class:"form-control",placeholder:"Type 'e'"},limit:10,codeSlot:'\n<template>\n  <vue-autosuggest\n    :suggestions="filteredOptions"\n    :input-props="inputProps"\n    :on-selected="onSelected"\n    :limit="10"\n    @input="onInputChange"\n  >\n    <template slot-scope="{suggestion}">\n      <div class="d-flex align-items-center">\n        <b-avatar :src="suggestion.item.img" />\n        <div class="detail ml-50">\n          <b-card-text class="mb-0">\n            {{ suggestion.item.name }}\n          </b-card-text>\n          <small class="text-muted">\n            {{ suggestion.item.time }}\n          </small>\n        </div>\n      </div>\n    </template>\n  </vue-autosuggest>\n</template>\n\n<script>\nimport { VueAutosuggest } from \'vue-autosuggest\'\nimport { BAvatar, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    VueAutosuggest,\n    BCardText,\n    BAvatar,\n  },\n  data() {\n    return {\n      datasuggest: [],\n      filteredOptions: [],\n      inputProps: {\n        id: \'autosuggest__input\',\n        class: \'form-control\',\n        placeholder: "Type \'e\'",\n      },\n      limit: 10,\n    }\n  },\n  created() {\n    this.$http.get(\'/autosuggest/data\')\n      .then(res => { this.datasuggest = res })\n  },\n  methods: {\n    onSelected(option) {\n      this.selected = option.item\n    },\n    onInputChange(text) {\n      if (text === \'\' || text === undefined) {\n        return\n      }\n\n      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */\n      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredDesigner = this.datasuggest.data[0].designers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredData = filteredDevelopers.concat(filteredDesigner)\n      this.filteredOptions = [{\n        data: filteredData,\n      }]\n    },\n  },\n}\n<\/script>\n'}},created:function(){var e=this;this.$http.get("/autosuggest/data").then((function(t){e.datasuggest=t}))},methods:{onSelected:function(e){this.selected=e.item},onInputChange:function(e){if(""!==e&&void 0!==e){var t=this.datasuggest.data[0].developers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),n=this.datasuggest.data[0].designers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),s=t.concat(n);this.filteredOptions=[{data:s}]}}}},p=Object(u.a)(g,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Slot"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeSlot)+"\n  ")]},proxy:!0}])},[n("vue-autosuggest",{attrs:{suggestions:e.filteredOptions,"input-props":e.inputProps,"on-selected":e.onSelected,limit:10},on:{input:e.onInputChange},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.suggestion;return[n("div",{staticClass:"d-flex align-items-center"},[n("b-avatar",{attrs:{src:s.item.img}}),e._v(" "),n("div",{staticClass:"detail ml-50"},[n("b-card-text",{staticClass:"mb-0"},[e._v("\n            "+e._s(s.item.name)+"\n          ")]),e._v(" "),n("small",{staticClass:"text-muted"},[e._v("\n            "+e._s(s.item.time)+"\n          ")])],1)],1)]}}])})],1)}),[],!1,null,null,null).exports,m=(n(52),{components:{VueAutosuggest:a.a,BCardCode:i.a,BAvatar:c.a,BCardText:d.a},data:function(){var e=this;return{codeSection:'\n<template>\n  <vue-autosuggest\n    v-model="query"\n    :suggestions="suggestions"\n    :input-props="inputProps"\n    :section-configs="sectionConfigs"\n    :render-suggestion="renderSuggestion"\n    :limit="10"\n    @input="fetchResults"\n  />\n</template>\n\n<script>\n/* eslint-disable vue/no-unused-components */\n/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */\nimport { VueAutosuggest } from \'vue-autosuggest\'\nimport { BAvatar, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    VueAutosuggest,\n    BAvatar,\n    BCardText,\n  },\n  data() {\n    return {\n      datasuggest: [],\n      query: \'\',\n      suggestions: [],\n      selected: null,\n      inputProps: {\n        id: \'autosuggest__input\',\n        class: \'form-control\',\n        placeholder: "Type \'e\'",\n      },\n      sectionConfigs: {\n        developers: {\n          limit: 6,\n          label: \'Developers\',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n        pages: {\n          limit: 6,\n          label: \'Pages\',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n      },\n      limit: 10,\n    }\n  },\n  created() {\n    this.$http.get(\'/autosuggest/data\')\n      .then(res => { this.datasuggest = res })\n  },\n  methods: {\n    fetchResults(text) {\n      const { query } = this\n      if (query) {\n        this.suggestions = []\n      }\n\n      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */\n      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      const filteredPages = this.datasuggest.data[0].pages.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)\n      filteredDevelopers.length && this.suggestions.push({ name: \'developers\', data: filteredDevelopers })\n      filteredPages.length && this.suggestions.push({ name: \'pages\', data: filteredPages })\n    },\n    renderSuggestion(suggestion) {\n      if (suggestion.name === \'developers\') {\n        const dev = suggestion.item\n        return (\n          <div class="d-flex align-items-center">\n            <b-avatar src={dev.img} class="mr-50"></b-avatar>\n            <div class="detail">\n              <b-card-text class="mb-0">{dev.name}</b-card-text>\n              <small class="text-muted">{dev.email}</small>\n            </div>\n          </div>\n        )\n      }\n      if (suggestion.name === \'pages\') {\n        const page = suggestion.item\n        return (\n          <div class="d-flex align-items-center">\n            <feather-icon icon={page.icon} size={\'18\'} class={\'mr-75\'} />\n            <span>{page.name}</span>\n          </div>\n        )\n      }\n      return false\n    },\n  },\n}\n<\/script>\n',datasuggest:[],query:"",suggestions:[],selected:null,inputProps:{id:"autosuggest__input",class:"form-control",placeholder:"Type 'e'"},sectionConfigs:{developers:{limit:6,label:"Developers",onSelected:function(t){e.selected=t.item}},pages:{limit:6,label:"Pages",onSelected:function(t){e.selected=t.item}}},limit:10}},created:function(){var e=this;this.$http.get("/autosuggest/data").then((function(t){e.datasuggest=t}))},methods:{fetchResults:function(e){this.query&&(this.suggestions=[]);var t=this.datasuggest.data[0].developers.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit),n=this.datasuggest.data[0].pages.filter((function(t){return t.name.toLowerCase().indexOf(e.toLowerCase())>-1})).slice(0,this.limit);t.length&&this.suggestions.push({name:"developers",data:t}),n.length&&this.suggestions.push({name:"pages",data:n})},renderSuggestion:function(e){var t=this.$createElement;if("developers"===e.name){var n=e.item;return t("div",{class:"d-flex align-items-center"},[t("b-avatar",{attrs:{src:n.img},class:"mr-50"}),t("div",{class:"detail"},[t("b-card-text",{class:"mb-0"},[n.name]),t("small",{class:"text-muted"},[n.email])])])}if("pages"===e.name){var s=e.item;return t("div",{class:"d-flex align-items-center"},[t("feather-icon",{attrs:{icon:s.icon,size:"18"},class:"mr-75"}),t("span",[s.name])])}return!1}}}),f=Object(u.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Section"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeSection)+"\n  ")]},proxy:!0}])},[n("vue-autosuggest",{attrs:{suggestions:e.suggestions,"input-props":e.inputProps,"section-configs":e.sectionConfigs,"render-suggestion":e.renderSuggestion,limit:10},on:{input:e.fetchResults},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1)}),[],!1,null,null,null).exports,h=(n(145),n(125),n(278),n(1825)),v=n(295),b=n.n(v),_={components:{VueAutosuggest:a.a,BCardCode:i.a,BCard:h.a,BCardText:d.a,BAvatar:c.a},data:function(){var e=this;return{codeAjax:"\n<template>\n  <div>\n    <vue-autosuggest\n      ref=\"autocomplete\"\n      v-model=\"query\"\n      :suggestions=\"suggestions\"\n      :input-props=\"inputProps\"\n      :section-configs=\"sectionConfigs\"\n      :render-suggestion=\"renderSuggestion\"\n      :get-suggestion-value=\"getSuggestionValue\"\n      @input=\"fetchResults\"\n    />\n\n    <b-card-text class=\"mt-1\">\n      Selected element (object):\n    </b-card-text>\n    <b-card\n      class=\"border\"\n      no-body\n    >\n      <pre>{{ JSON.stringify(selected, null, 4) }}</pre>\n    </b-card>\n  </div>\n</template>\n\n<script>\n/* eslint-disable vue/no-unused-components */\n/* eslint no-unused-expressions: [\"error\", { \"allowShortCircuit\": true }] */\nimport { BCard, BCardText, BAvatar } from 'bootstrap-vue'\nimport { VueAutosuggest } from 'vue-autosuggest'\nimport axios from 'axios'\n\nexport default {\n  components: {\n    VueAutosuggest,\n    BCard,\n    BCardText,\n    BAvatar,\n  },\n  data() {\n    return {\n      query: '',\n      results: [],\n      timeout: null,\n      selected: null,\n      debounceMilliseconds: 250,\n      usersUrl: 'https://jsonplaceholder.typicode.com/users',\n      photosUrl: 'https://jsonplaceholder.typicode.com/photos',\n      inputProps: {\n        id: 'autosuggest__input_ajax',\n        placeholder: 'Do you feel lucky, punk?',\n        class: 'form-control',\n        name: 'ajax',\n      },\n      suggestions: [],\n      sectionConfigs: {\n        destinations: {\n          limit: 6,\n          label: 'Destination',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n        hotels: {\n          limit: 6,\n          label: 'Hotels',\n          onSelected: selected => {\n            this.selected = selected.item\n          },\n        },\n      },\n    }\n  },\n  methods: {\n    fetchResults() {\n      const { query } = this\n\n      clearTimeout(this.timeout)\n      this.timeout = setTimeout(() => {\n        const photosPromise = axios.get(this.photosUrl)\n        const usersPromise = axios.get(this.usersUrl)\n\n        Promise.all([photosPromise, usersPromise]).then(values => {\n          this.suggestions = []\n          this.selected = null\n\n          const photos = this.filterResults(values[0].data, query, 'title')\n          const users = this.filterResults(values[1].data, query, 'name')\n          users.length && this.suggestions.push({ name: 'destinations', data: users })\n          photos.length && this.suggestions.push({ name: 'hotels', data: photos })\n        })\n      }, this.debounceMilliseconds)\n    },\n    filterResults(data, text, field) {\n      return data.filter(item => {\n        if (item[field].toLowerCase().indexOf(text.toLowerCase()) > -1) {\n          return item[field]\n        }\n        return false\n      }).sort()\n    },\n    renderSuggestion(suggestion) {\n      if (suggestion.name === 'hotels') {\n        const image = suggestion.item\n        return (\n          <div class=\"d-flex\">\n            <div>\n              <b-avatar src={image.thumbnailUrl} class=\"mr-50\"></b-avatar>\n            </div>\n            <div>\n              <span>{image.title}</span>\n            </div>\n          </div>\n        )\n      }\n      return suggestion.item.name\n    },\n    getSuggestionValue(suggestion) {\n      const { name, item } = suggestion\n      return name === 'hotels' ? item.title : item.name\n    },\n  },\n}\n<\/script>\n\n<style lang=\"scss\" scoped>\npre{\n  min-height: 295px;\n  padding: 1.5rem;\n  margin-bottom: 0;\n  border-radius: .5rem;\n}\n</style>\n",query:"",results:[],timeout:null,selected:null,debounceMilliseconds:250,usersUrl:"https://jsonplaceholder.typicode.com/users",photosUrl:"https://jsonplaceholder.typicode.com/photos",inputProps:{id:"autosuggest__input_ajax",placeholder:"Do you feel lucky, punk?",class:"form-control",name:"ajax"},suggestions:[],sectionConfigs:{destinations:{limit:6,label:"Destination",onSelected:function(t){e.selected=t.item}},hotels:{limit:6,label:"Hotels",onSelected:function(t){e.selected=t.item}}}}},methods:{fetchResults:function(){var e=this,t=this.query;clearTimeout(this.timeout),this.timeout=setTimeout((function(){var n=b.a.get(e.photosUrl),s=b.a.get(e.usersUrl);Promise.all([n,s]).then((function(n){e.suggestions=[],e.selected=null;var s=e.filterResults(n[0].data,t,"title"),o=e.filterResults(n[1].data,t,"name");o.length&&e.suggestions.push({name:"destinations",data:o}),s.length&&e.suggestions.push({name:"hotels",data:s})}))}),this.debounceMilliseconds)},filterResults:function(e,t,n){return e.filter((function(e){return e[n].toLowerCase().indexOf(t.toLowerCase())>-1&&e[n]})).sort()},renderSuggestion:function(e){var t=this.$createElement;if("hotels"===e.name){var n=e.item;return t("div",{class:"d-flex"},[t("div",[t("b-avatar",{attrs:{src:n.thumbnailUrl},class:"mr-50"})]),t("div",[t("span",[n.title])])])}return e.item.name},getSuggestionValue:function(e){var t=e.name,n=e.item;return"hotels"===t?n.title:n.name}}},x=(n(1462),Object(u.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Ajax"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v("\n    "+e._s(e.codeAjax)+"\n  ")]},proxy:!0}])},[n("vue-autosuggest",{ref:"autocomplete",attrs:{suggestions:e.suggestions,"input-props":e.inputProps,"section-configs":e.sectionConfigs,"render-suggestion":e.renderSuggestion,"get-suggestion-value":e.getSuggestionValue},on:{input:e.fetchResults},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),e._v(" "),n("b-card-text",{staticClass:"mt-1"},[e._v("\n    Selected element (object):\n  ")]),e._v(" "),n("b-card",{staticClass:"border",attrs:{"no-body":""}},[n("pre",[e._v(e._s(JSON.stringify(e.selected,null,4)))])])],1)}),[],!1,null,"b0363cf6",null).exports),y={components:{BRow:s.a,BCol:o.a,AutoSuggestBasic:l,AutoSuggestSlot:p,AutoSuggestSection:f,AutoSuggestAjax:x}},C=(n(1464),Object(u.a)(y,(function(){var e=this.$createElement,t=this._self._c||e;return t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("auto-suggest-basic"),this._v(" "),t("auto-suggest-slot"),this._v(" "),t("auto-suggest-section"),this._v(" "),t("auto-suggest-ajax")],1)],1)}),[],!1,null,null,null));t.default=C.exports},16:function(e,t,n){"use strict";n(71);var s=n(1825),o=n(342),a=n(344),i=n(343),r=n(1840),u=(n(174),n(188),n(97)),l=n.n(u),d={components:{BCard:s.a,BCardTitle:o.a,BCardSubTitle:a.a,BCardBody:i.a,BCollapse:r.a,Prism:l.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},c=(n(1031),n(0)),g=Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[e._v(e._s(e.$attrs.title))]),e._v(" "),e.$attrs["sub-title"]?n("b-card-sub-title",[e._v("\n        "+e._s(e.$attrs["sub-title"])+"\n      ")]):e._e()],1),e._v(" "),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),e._v(" "),void 0!==e.$attrs["no-body"]?[e._t("default"),e._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:n("b-card-body",[e._t("default"),e._v(" "),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),e._v(" "),n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=g.exports},531:function(e,t,n){var s=n(1032);"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(23)(s,o);s.locals&&(e.exports=s.locals)},884:function(e,t,n){var s=n(1463);"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(23)(s,o);s.locals&&(e.exports=s.locals)},885:function(e,t,n){var s=n(1465);"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(23)(s,o);s.locals&&(e.exports=s.locals)}}]);