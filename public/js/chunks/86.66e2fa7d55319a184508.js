(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1099:function(n,t,e){"use strict";e(571)},1100:function(n,t,e){(t=e(21)(!1)).push([n.i,".card-code pre[class*=language-][data-v-365b0de1] {\n  max-height: 350px;\n}[dir] .card-code pre[class*=language-][data-v-365b0de1] {\n  margin: 0;\n  border-radius: 0.5rem;\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background: #2d2d2d;\n  border-radius: 100%;\n}\n[dir] .dark-layout .card-code[data-v-365b0de1] ::-webkit-scrollbar {\n  background-color: #161d31 !important;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-track {\n  background: transparent;\n}\n[dir] .card-code[data-v-365b0de1] ::-webkit-scrollbar-thumb {\n  border-radius: 0.5rem;\n  background: rgba(241, 241, 241, 0.4);\n}\n.card-code[data-v-365b0de1] ::-webkit-scrollbar-corner {\n  display: none;\n}\n[dir] .code-toggler[data-v-365b0de1] {\n  border-bottom: 1px solid transparent;\n}\n[dir] .code-toggler[aria-expanded=false][data-v-365b0de1] {\n  border-bottom-color: #7367f0;\n}\n.card .card-header .heading-elements[data-v-365b0de1] {\n  position: static;\n}\n[dir] .card .card-header .heading-elements[data-v-365b0de1] {\n  background: red;\n}",""]),n.exports=t},1560:function(n,t,e){"use strict";e(945)},1561:function(n,t,e){(t=e(21)(!1)).push([n.i,".vue2leaflet-map.leaflet-container {\n  height: 350px;\n}",""]),n.exports=t},1565:function(n,t,e){"use strict";e(947)},1566:function(n,t,e){(t=e(21)(!1)).push([n.i,".vue2leaflet-map.leaflet-container {\n  height: 350px;\n}",""]),n.exports=t},1567:function(n,t,e){"use strict";e(948)},1568:function(n,t,e){(t=e(21)(!1)).push([n.i,".vue2leaflet-map.leaflet-container {\n  height: 350px;\n}",""]),n.exports=t},1569:function(n,t,e){"use strict";e(949)},1570:function(n,t,e){(t=e(21)(!1)).push([n.i,".vue2leaflet-map.leaflet-container {\n  height: 350px;\n}",""]),n.exports=t},1571:function(n,t){n.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/misc/leaf-red.png"},1572:function(n,t){n.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/misc/leaf-green.png"},1573:function(n,t,e){"use strict";e(950)},1574:function(n,t,e){(t=e(21)(!1)).push([n.i,".vue2leaflet-map.leaflet-container {\n  height: 350px;\n}",""]),n.exports=t},1575:function(n,t,e){"use strict";e(951)},1576:function(n,t,e){(t=e(21)(!1)).push([n.i,".vue2leaflet-map {\n  height: 400px;\n  z-index: 1;\n}\nhtml[dir=rtl] .leaflet-pane, html[dir=rtl] .leaflet-tile, html[dir=rtl] .leaflet-marker-icon, html[dir=rtl] .leaflet-marker-shadow, html[dir=rtl] .leaflet-tile-container, html[dir=rtl] .leaflet-pane > svg, html[dir=rtl] .leaflet-pane > canvas, html[dir=rtl] .leaflet-zoom-box, html[dir=rtl] .leaflet-image-layer, html[dir=rtl] .leaflet-layer {\n  left: 0;\n  right: unset;\n}",""]),n.exports=t},1643:function(n,t,e){"use strict";e.r(t);var o=e(1967),r=e(394),l=e(566),a=e(985),i=(e(58),e(43),e(1969)),s=e(381),p=e(383),c=e(382),u=e(38),m=e(2025),g=e(2026),d=e(2027),b=e(2028),f=e(2029),v=e(2030),y=e(2031),h=e(2032),k={components:{LMap:m.a,LTileLayer:g.a,LMarker:d.a,LPopup:b.a,LPolygon:f.a,LTooltip:v.a,LFeatureGroup:y.a,LGeoJson:h.a,BCard:i.a,BCardTitle:s.a,BCardSubTitle:p.a,BCardBody:c.a},data:function(){return{loading:!1,show:!0,enableTooltip:!0,zoom:5,center:[-2.219622,117.564668],geojson:null,fillColor:"#e4ce7f",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',marker:Object(u.latLng)(-2.219622,117.564668),polygon:{latlngs:[],color:"#00000"},markers:[]}},methods:{innerClick:function(){console.log("click")}},computed:{options:function(){return{onEachFeature:this.onEachFeatureFunction}},getColor:function(){return function(n){return n>400?"#7e0001":n>100?"#b82101":n>50?"#f44300":n>10?"#f96200":n>5?"#ff8200":n>0?"#fff154":0==n?"#0000000":void 0}},onEachFeatureFunction:function(){var n=this;return function(t,e){e.setStyle({fillColor:"#7e0001",color:"#7e0001",weight:1,opacity:.6,fillOpacity:.5});var o=n.markers;e.on("click",(function(n){o.push(n.latlng),o.length>1&&o.shift()}))}}},created:function(){var n=this;return Object(a.a)(Object(l.a)().mark((function t(){var e,o;return Object(l.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.loading=!0,t.next=3,fetch("/json_files/000000.geojson");case 3:return e=t.sent,t.next=6,e.json();case 6:o=t.sent,n.geojson=o,n.loading=!1;case 9:case"end":return t.stop()}}),t)})))()}},L=(e(1560),e(0)),_=Object(L.a)(k,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card",{attrs:{"no-body":""}},[e("div",{staticClass:"card-header"},[e("b-card-title",[n._v("PETA SMK INDONESIA")])],1),n._v(" "),e("b-card-body",[e("p",[n._v("DISINI "+n._s(n.marker))]),n._v(" "),e("l-map",{staticStyle:{height:"500px",width:"100%"},attrs:{zoom:n.zoom,center:n.center}},[e("l-tile-layer",{attrs:{url:n.url,attribution:n.attribution}}),n._v(" "),n.show?e("l-geo-json",{attrs:{geojson:n.geojson,options:n.options}}):n._e(),n._v(" "),n._l(n.markers,(function(t,o){return e("l-marker",{key:"marker-"+o,attrs:{"lat-lng":t}},[e("l-popup",[e("br"),e("strong",[n._v("Location Name: ")]),e("br"),e("strong",[n._v("Date: ")])])],1)}))],2)],1)],1)}),[],!1,null,null,null).exports,x=e(18),z=e(2033),C=(e(946),{components:{LMap:m.a,LTileLayer:g.a,LCircle:z.a,BCardCode:x.a},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:8,center:[47.31322,-1.319482],circle:{center:[47.41322,-1.0482],radius:4500,color:"#EA5455"},codeBasic:'\n<template>\n  <div>\n    <l-map\n      :zoom="zoom"\n      :center="center"\n    >\n      <l-tile-layer :url="url" />\n      <l-circle\n        :lat-lng="circle.center"\n        :radius="circle.radius"\n        :color="circle.color"\n      />\n    </l-map>\n  </div>\n</template>\n\n<script>\nimport { LMap, LTileLayer, LCircle } from \'vue2-leaflet\'\nimport \'leaflet/dist/leaflet.css\'\n\nexport default {\n  components: {\n    LMap,\n    LTileLayer,\n    LCircle,\n  },\n  data() {\n    return {\n      url: \'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\',\n      zoom: 8,\n      center: [47.313220, -1.319482],\n      circle: {\n        center: [47.413220, -1.0482],\n        radius: 4500,\n        color: \'#EA5455\',\n      },\n    }\n  },\n}\n<\/script>\n\n<style lang="scss">\n.vue2leaflet-map{\n  &.leaflet-container{\n    height: 350px;\n  }\n}\n</style>\n'}}});e(1565),Object(L.a)(C,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Basic Map"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeBasic)+"\n  ")]},proxy:!0}])},[e("l-map",{attrs:{zoom:n.zoom,center:n.center}},[e("l-tile-layer",{attrs:{url:n.url}}),n._v(" "),e("l-circle",{attrs:{"lat-lng":n.circle.center,radius:n.circle.radius,color:n.circle.color}})],1)],1)}),[],!1,null,null,null).exports;delete u.Icon.Default.prototype._getIconUrl,u.Icon.Default.mergeOptions({iconRetinaUrl:e(516),iconUrl:e(428),shadowUrl:e(517)});var P={components:{LMap:m.a,LTileLayer:g.a,LMarker:d.a,BCardCode:x.a,LCircle:z.a,LPolygon:f.a},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:10,center:[47.31322,-1.319482],markerLatLng:[47.31322,-1.319482],circle:{center:[47.31322,-1.319482],radius:4500,color:"#EA5455"},polygon:{latlngs:[[47.2263299,-1.6222],[47.21024000000001,-1.6270065],[47.1969447,-1.6136169],[47.18527929999999,-1.6143036],[47.1794457,-1.6098404],[47.1775788,-1.5985107],[47.1676598,-1.5753365],[47.1593731,-1.5521622],[47.1593731,-1.5319061],[47.1722111,-1.5143967],[47.1960115,-1.4841843],[47.2095404,-1.4848709],[47.2291277,-1.4683914],[47.2533687,-1.5116501],[47.2577961,-1.5531921],[47.26828069,-1.5621185],[47.2657179,-1.589241],[47.2589612,-1.6204834],[47.237287,-1.6266632],[47.2263299,-1.6222]],color:"#7367F0"},codeMarkerPolygon:'\n<template>\n  <div>\n    <l-map\n      :zoom="zoom"\n      :center="center"\n    >\n      <l-tile-layer :url="url" />\n      <l-marker :lat-lng="markerLatLng" />\n      <l-circle\n        :lat-lng="circle.center"\n        :radius="circle.radius"\n        :color="circle.color"\n      />\n      <l-polygon\n        :lat-lngs="polygon.latlngs"\n        :color="polygon.color"\n      />\n    </l-map>\n  </div>\n</template>\n\n<script>\n/* eslint-disable global-require */\nimport {\n  LMap, LTileLayer, LMarker, LCircle, LPolygon,\n} from \'vue2-leaflet\'\nimport { Icon } from \'leaflet\'\nimport \'leaflet/dist/leaflet.css\'\n\n// eslint-disable-next-line no-underscore-dangle\ndelete Icon.Default.prototype._getIconUrl\nIcon.Default.mergeOptions({\n  iconRetinaUrl: require(\'leaflet/dist/images/marker-icon-2x.png\'),\n  iconUrl: require(\'leaflet/dist/images/marker-icon.png\'),\n  shadowUrl: require(\'leaflet/dist/images/marker-shadow.png\'),\n})\n/* eslint-disable global-require */\n\nexport default {\n  components: {\n    LMap,\n    LTileLayer,\n    LMarker,\n    LCircle,\n    LPolygon,\n  },\n  data() {\n    return {\n      url: \'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\',\n      zoom: 10,\n      center: [47.313220, -1.319482],\n      markerLatLng: [47.313220, -1.319482],\n      circle: {\n        center: [47.313220, -1.319482],\n        radius: 4500,\n        color: \'#EA5455\',\n      },\n      polygon: {\n        latlngs: [[47.2263299, -1.6222], [47.21024000000001, -1.6270065], [47.1969447, -1.6136169], [47.18527929999999, -1.6143036], [47.1794457, -1.6098404], [47.1775788, -1.5985107], [47.1676598, -1.5753365], [47.1593731, -1.5521622], [47.1593731, -1.5319061], [47.1722111, -1.5143967], [47.1960115, -1.4841843], [47.2095404, -1.4848709], [47.2291277, -1.4683914], [47.2533687, -1.5116501], [47.2577961, -1.5531921], [47.26828069, -1.5621185], [47.2657179, -1.589241], [47.2589612, -1.6204834], [47.237287, -1.6266632], [47.2263299, -1.6222]],\n        color: \'#7367F0\',\n      },\n    }\n  },\n}\n<\/script>\n\n<style lang="scss">\n.vue2leaflet-map{\n  &.leaflet-container{\n    height: 350px;\n  }\n}\n</style>\n'}}},M=(e(1567),Object(L.a)(P,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Marker, Circle & Polygon Map"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeMarkerPolygon)+"\n  ")]},proxy:!0}])},[e("l-map",{attrs:{zoom:n.zoom,center:n.center}},[e("l-tile-layer",{attrs:{url:n.url}}),n._v(" "),e("l-marker",{attrs:{"lat-lng":n.markerLatLng}}),n._v(" "),e("l-circle",{attrs:{"lat-lng":n.circle.center,radius:n.circle.radius,color:n.circle.color}}),n._v(" "),e("l-polygon",{attrs:{"lat-lngs":n.polygon.latlngs,color:n.polygon.color}})],1)],1)}),[],!1,null,null,null).exports,{components:{LMap:m.a,LTileLayer:g.a,LMarker:d.a,LPopup:b.a,BCardCode:x.a},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",zoom:8,center:[47.31322,-1.319482],markerLatLng:[47.31322,-1.319482,{draggable:"true"}],codePopup:'\n<template>\n  <div>\n    <l-map\n      :zoom="zoom"\n      :center="center"\n    >\n      <l-tile-layer :url="url" />\n      <l-marker :lat-lng="markerLatLng">\n        <l-popup>You\'re here!</l-popup>\n      </l-marker>\n    </l-map>\n  </div>\n</template>\n\n<script>\nimport {\n  LMap, LTileLayer, LMarker, LPopup,\n} from \'vue2-leaflet\'\n\nexport default {\n  components: {\n    LMap,\n    LTileLayer,\n    LMarker,\n    LPopup,\n  },\n  data() {\n    return {\n      url: \'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\',\n      zoom: 8,\n      center: [47.313220, -1.319482],\n      markerLatLng: [47.313220, -1.319482, { draggable: \'true\' }],\n    }\n  },\n}\n<\/script>\n\n<style lang="scss">\n.vue2leaflet-map{\n  &.leaflet-container{\n    height: 350px;\n  }\n}\n</style>\n'}}}),w=(e(1569),Object(L.a)(M,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Popup Map"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codePopup)+"\n  ")]},proxy:!0}])},[e("l-map",{attrs:{zoom:n.zoom,center:n.center}},[e("l-tile-layer",{attrs:{url:n.url}}),n._v(" "),e("l-marker",{attrs:{"lat-lng":n.markerLatLng}},[e("l-popup",[n._v("You're here!")])],1)],1)],1)}),[],!1,null,null,null).exports,e(235),e(86),e(142),e(223),e(108)),B=e(1973),I=e(2018),O=e(2034),S=e(2035),T=e(2036),j=e(2037),U=e(2038),D=e(2039);delete u.Icon.Default.prototype._getIconUrl,u.Icon.Default.mergeOptions({iconRetinaUrl:e(516),iconUrl:e(428),shadowUrl:e(517)});var E=[{position:{lng:-1.219482,lat:47.41322},visible:!0,draggable:!0},{position:{lng:-1.571045,lat:47.457809}},{position:{lng:-1.560059,lat:47.739323}},{position:{lng:-.922852,lat:47.886881}},{position:{lng:-.769043,lat:48.231991}},{position:{lng:.395508,lat:48.268569}},{position:{lng:.604248,lat:48.026672}},{position:{lng:1.2854,lat:47.982568}},{position:{lng:1.318359,lat:47.894248}},{position:{lng:1.373291,lat:47.879513}},{position:{lng:1.384277,lat:47.798397}},{position:{lng:1.329346,lat:47.754098}},{position:{lng:1.329346,lat:47.680183}},{position:{lng:.999756,lat:47.635784}},{position:{lng:.86792,lat:47.820532}},{position:{lng:.571289,lat:47.820532}},{position:{lng:.439453,lat:47.717154}},{position:{lng:.439453,lat:47.61357}},{position:{lng:-.571289,lat:47.487513}},{position:{lng:-.615234,lat:47.680183}},{position:{lng:-.812988,lat:47.724545}},{position:{lng:-1.054688,lat:47.680183}},{position:{lng:-1.219482,lat:47.41322}}],$=[{lng:-1.219482,lat:47.41322},{lng:-1.571045,lat:47.457809},{lng:-1.560059,lat:47.739323},{lng:-.922852,lat:47.886881},{lng:-.769043,lat:48.231991},{lng:.395508,lat:48.268569},{lng:.604248,lat:48.026672},{lng:1.2854,lat:47.982568},{lng:1.318359,lat:47.894248},{lng:1.373291,lat:47.879513},{lng:1.384277,lat:47.798397},{lng:1.329346,lat:47.754098},{lng:1.329346,lat:47.680183},{lng:.999756,lat:47.635784},{lng:.86792,lat:47.820532},{lng:.571289,lat:47.820532},{lng:.439453,lat:47.717154},{lng:.439453,lat:47.61357},{lng:-.571289,lat:47.487513},{lng:-.615234,lat:47.680183},{lng:-.812988,lat:47.724545},{lng:-1.054688,lat:47.680183},{lng:-1.219482,lat:47.41322}],A=[{name:"OpenStreetMap",visible:!0,attribution:'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},{name:"OpenTopoMap",visible:!1,url:"https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",attribution:'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'}],q={name:"Example",components:{LMap:m.a,LTileLayer:g.a,LMarker:d.a,LPolyline:O.a,LLayerGroup:S.a,LTooltip:v.a,LPopup:b.a,LControlZoom:T.a,LControlAttribution:j.a,LControlScale:U.a,LControlLayers:D.a,BButton:w.a,BFormSelect:B.a,BRow:o.a,BCol:r.a,BFormGroup:I.a,BCardCode:x.a},data:function(){return{codeLayerGroup:'\n<template>\n  <div>\n     <div>\n      <b-button\n        variant="outline-primary"\n        @click="fitPolyline"\n      >\n        Fit map to polyline\n      </b-button>\n\n      <b-row class="mt-2">\n        <b-col md="6">\n          <b-form-group label="Contol Layers position: ">\n            <b-form-select\n              v-model="layersPosition"\n              :options="Positions"\n            />\n          </b-form-group>\n\n        </b-col>\n        <b-col md="6">\n          <b-form-group label="Attribution position:">\n            <b-form-select\n              v-model="attributionPosition"\n              :options="Positions"\n            />\n          </b-form-group>\n        </b-col>\n      </b-row>\n\n    </div>\n\n    \x3c!-- map --\x3e\n    <l-map\n      :zoom.sync="zoom"\n      :options="mapOptions"\n      :center="center"\n      :bounds="bounds"\n      :min-zoom="minZoom"\n      :max-zoom="maxZoom"\n      style="height: 500px; width: 100%"\n    >\n      <l-control-layers\n        :position="layersPosition"\n        :collapsed="false"\n        :sort-layers="true"\n      />\n      <l-tile-layer\n        v-for="tileProvider in tileProviders"\n        :key="tileProvider.name"\n        :name="tileProvider.name"\n        :visible="tileProvider.visible"\n        :url="tileProvider.url"\n        :attribution="tileProvider.attribution"\n        :token="token"\n        layer-type="base"\n      />\n      <l-control-zoom :position="zoomPosition" />\n      <l-control-attribution\n        :position="attributionPosition"\n        :prefix="attributionPrefix"\n      />\n      <l-control-scale :imperial="imperial" />\n      <l-marker\n        v-for="marker in markers"\n        :key="marker.id"\n        :visible="marker.visible"\n        :draggable="marker.draggable"\n        :lat-lng.sync="marker.position"\n        :icon="marker.icon"\n        @click="alert(marker)"\n      >\n        <l-popup :content="marker.tooltip" />\n        <l-tooltip :content="marker.tooltip" />\n      </l-marker>\n      <l-layer-group\n        layer-type="overlay"\n        name="Layer polyline"\n      >\n        <l-polyline\n          v-for="item in polylines"\n          :key="item.id"\n          :lat-lngs="item.points"\n          :visible="item.visible"\n          @click="alert(item)"\n        />\n      </l-layer-group>\n      <l-layer-group\n        v-for="item in stuff"\n        :key="item.id"\n        :visible.sync="item.visible"\n        layer-type="overlay"\n        name="Layer 1"\n      >\n        <l-layer-group :visible="item.markersVisible">\n          <l-marker\n            v-for="marker in item.markers"\n            :key="marker.id"\n            :visible="marker.visible"\n            :draggable="marker.draggable"\n            :lat-lng="marker.position"\n            @click="alert(marker)"\n          />\n        </l-layer-group>\n        <l-polyline\n          :lat-lngs="item.polyline.points"\n          :visible="item.polyline.visible"\n          @click="alert(item.polyline)"\n        />\n      </l-layer-group>\n    </l-map>\n  </div>\n</template>\n\n<script>\n/* eslint-disable global-require */\nimport {\n  BButton, BFormSelect, BRow, BCol, BFormGroup,\n} from \'bootstrap-vue\'\nimport {\n  LMap,\n  LTileLayer,\n  LMarker,\n  LPolyline,\n  LLayerGroup,\n  LTooltip,\n  LPopup,\n  LControlZoom,\n  LControlAttribution,\n  LControlScale,\n  LControlLayers,\n} from \'vue2-leaflet\'\nimport { latLngBounds, Icon } from \'leaflet\'\n\n// eslint-disable-next-line no-underscore-dangle\ndelete Icon.Default.prototype._getIconUrl\nIcon.Default.mergeOptions({\n  iconRetinaUrl: require(\'leaflet/dist/images/marker-icon-2x.png\'),\n  iconUrl: require(\'leaflet/dist/images/marker-icon.png\'),\n  shadowUrl: require(\'leaflet/dist/images/marker-shadow.png\'),\n})\n/* eslint-disable global-require */\nconst markers1 = [\n  {\n    position: { lng: -1.219482, lat: 47.41322 },\n    visible: true,\n    draggable: true,\n  },\n  { position: { lng: -1.571045, lat: 47.457809 } },\n  { position: { lng: -1.560059, lat: 47.739323 } },\n  { position: { lng: -0.922852, lat: 47.886881 } },\n  { position: { lng: -0.769043, lat: 48.231991 } },\n  { position: { lng: 0.395508, lat: 48.268569 } },\n  { position: { lng: 0.604248, lat: 48.026672 } },\n  { position: { lng: 1.2854, lat: 47.982568 } },\n  { position: { lng: 1.318359, lat: 47.894248 } },\n  { position: { lng: 1.373291, lat: 47.879513 } },\n  { position: { lng: 1.384277, lat: 47.798397 } },\n  { position: { lng: 1.329346, lat: 47.754098 } },\n  { position: { lng: 1.329346, lat: 47.680183 } },\n  { position: { lng: 0.999756, lat: 47.635784 } },\n  { position: { lng: 0.86792, lat: 47.820532 } },\n  { position: { lng: 0.571289, lat: 47.820532 } },\n  { position: { lng: 0.439453, lat: 47.717154 } },\n  { position: { lng: 0.439453, lat: 47.61357 } },\n  { position: { lng: -0.571289, lat: 47.487513 } },\n  { position: { lng: -0.615234, lat: 47.680183 } },\n  { position: { lng: -0.812988, lat: 47.724545 } },\n  { position: { lng: -1.054688, lat: 47.680183 } },\n  { position: { lng: -1.219482, lat: 47.41322 } },\n]\n\nconst poly1 = [\n  { lng: -1.219482, lat: 47.41322 },\n  { lng: -1.571045, lat: 47.457809 },\n  { lng: -1.560059, lat: 47.739323 },\n  { lng: -0.922852, lat: 47.886881 },\n  { lng: -0.769043, lat: 48.231991 },\n  { lng: 0.395508, lat: 48.268569 },\n  { lng: 0.604248, lat: 48.026672 },\n  { lng: 1.2854, lat: 47.982568 },\n  { lng: 1.318359, lat: 47.894248 },\n  { lng: 1.373291, lat: 47.879513 },\n  { lng: 1.384277, lat: 47.798397 },\n  { lng: 1.329346, lat: 47.754098 },\n  { lng: 1.329346, lat: 47.680183 },\n  { lng: 0.999756, lat: 47.635784 },\n  { lng: 0.86792, lat: 47.820532 },\n  { lng: 0.571289, lat: 47.820532 },\n  { lng: 0.439453, lat: 47.717154 },\n  { lng: 0.439453, lat: 47.61357 },\n  { lng: -0.571289, lat: 47.487513 },\n  { lng: -0.615234, lat: 47.680183 },\n  { lng: -0.812988, lat: 47.724545 },\n  { lng: -1.054688, lat: 47.680183 },\n  { lng: -1.219482, lat: 47.41322 },\n]\n\nconst tileProviders = [\n  {\n    name: \'OpenStreetMap\',\n    visible: true,\n    attribution:\n      \'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors\',\n    url: \'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\',\n  },\n  {\n    name: \'OpenTopoMap\',\n    visible: false,\n    url: \'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png\',\n    attribution:\n      \'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)\',\n  },\n]\n\nexport default {\n  name: \'Example\',\n  components: {\n    LMap,\n    LTileLayer,\n    LMarker,\n    LPolyline,\n    LLayerGroup,\n    LTooltip,\n    LPopup,\n    LControlZoom,\n    LControlAttribution,\n    LControlScale,\n    LControlLayers,\n    BButton,\n    BFormSelect,\n    BRow,\n    BCol,\n    BFormGroup,\n  },\n  data() {\n    return {\n      center: [51.505, -0.09],\n      opacity: 0.6,\n      token: \'your token if using mapbox\',\n      mapOptions: {\n        zoomControl: false,\n        attributionControl: false,\n        zoomSnap: true,\n      },\n      zoom: 3,\n      minZoom: 1,\n      maxZoom: 20,\n      zoomPosition: \'topleft\',\n      attributionPosition: \'bottomright\',\n      layersPosition: \'topright\',\n      attributionPrefix: \'Vue2Leaflet\',\n      imperial: false,\n      Positions: [\'topleft\', \'topright\', \'bottomleft\', \'bottomright\'],\n      tileProviders,\n      markers: [\n        {\n          id: \'m1\',\n          position: { lat: 51.505, lng: -0.09 },\n          tooltip: \'tooltip for marker1\',\n          draggable: true,\n          visible: true,\n        },\n        {\n          id: \'m2\',\n          position: { lat: 51.8905, lng: -0.09 },\n          tooltip: \'tooltip for marker2\',\n          draggable: true,\n          visible: false,\n        },\n        {\n          id: \'m3\',\n          position: { lat: 51.005, lng: -0.09 },\n          tooltip: \'tooltip for marker3\',\n          draggable: true,\n          visible: true,\n        },\n        {\n          id: \'m4\',\n          position: { lat: 50.7605, lng: -0.09 },\n          tooltip: \'tooltip for marker4\',\n          draggable: true,\n          visible: false,\n        },\n      ],\n      polylines: [\n        {\n          id: \'p1\',\n          points: [\n            { lat: 37.772, lng: -122.214 },\n            { lat: 21.291, lng: -157.821 },\n            { lat: -18.142, lng: -181.569 },\n            { lat: -27.467, lng: -206.973 },\n          ],\n          visible: true,\n        },\n        {\n          id: \'p2\',\n          points: [\n            [-73.91, 40.78],\n            [-87.62, 41.83],\n            [-96.72, 32.76],\n          ],\n          visible: true,\n        },\n      ],\n      stuff: [\n        {\n          id: \'s1\',\n          markers: markers1,\n          polyline: { points: poly1, visible: true },\n          visible: true,\n          markersVisible: true,\n        },\n      ],\n      bounds: latLngBounds(\n        { lat: 51.476483373501964, lng: -0.14668464136775586 },\n        { lat: 51.52948330894063, lng: -0.019140238291583955 },\n      ),\n    }\n  },\n  methods: {\n    alert(item) {\n      // eslint-disable-next-line no-alert\n      alert(`this is ${JSON.stringify(item)}`)\n    },\n    addMarker() {\n      const newMarker = {\n        position: { lat: 50.5505, lng: -0.09 },\n        draggable: true,\n        visible: true,\n      }\n      this.markers.push(newMarker)\n    },\n    removeMarker(index) {\n      this.markers.splice(index, 1)\n    },\n    fitPolyline() {\n      const bounds = latLngBounds(markers1.map(o => o.position))\n      this.bounds = bounds\n    },\n  },\n}\n<\/script>\n',center:[51.505,-.09],opacity:.6,token:"your token if using mapbox",mapOptions:{zoomControl:!1,attributionControl:!1,zoomSnap:!0},zoom:3,minZoom:1,maxZoom:20,zoomPosition:"topleft",attributionPosition:"bottomright",layersPosition:"topright",attributionPrefix:"Vue2Leaflet",imperial:!1,Positions:["topleft","topright","bottomleft","bottomright"],tileProviders:A,markers:[{id:"m1",position:{lat:51.505,lng:-.09},tooltip:"tooltip for marker1",draggable:!0,visible:!0},{id:"m2",position:{lat:51.8905,lng:-.09},tooltip:"tooltip for marker2",draggable:!0,visible:!1},{id:"m3",position:{lat:51.005,lng:-.09},tooltip:"tooltip for marker3",draggable:!0,visible:!0},{id:"m4",position:{lat:50.7605,lng:-.09},tooltip:"tooltip for marker4",draggable:!0,visible:!1}],polylines:[{id:"p1",points:[{lat:37.772,lng:-122.214},{lat:21.291,lng:-157.821},{lat:-18.142,lng:-181.569},{lat:-27.467,lng:-206.973}],visible:!0},{id:"p2",points:[[-73.91,40.78],[-87.62,41.83],[-96.72,32.76]],visible:!0}],stuff:[{id:"s1",markers:E,polyline:{points:$,visible:!0},visible:!0,markersVisible:!0}],bounds:Object(u.latLngBounds)({lat:51.476483373501964,lng:-.14668464136775586},{lat:51.52948330894063,lng:-.019140238291583955})}},methods:{alert:function(n){function t(t){return n.apply(this,arguments)}return t.toString=function(){return n.toString()},t}((function(n){alert("this is ".concat(JSON.stringify(n)))})),addMarker:function(){this.markers.push({position:{lat:50.5505,lng:-.09},draggable:!0,visible:!0})},removeMarker:function(n){this.markers.splice(n,1)},fitPolyline:function(){var n=Object(u.latLngBounds)(E.map((function(n){return n.position})));this.bounds=n}}},F=(Object(L.a)(q,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card-code",{attrs:{title:"Layer Group"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeLayerGroup)+"\n  ")]},proxy:!0}])},[e("div",[e("b-button",{attrs:{variant:"outline-primary"},on:{click:n.fitPolyline}},[n._v("\n      Fit map to polyline\n    ")]),n._v(" "),e("b-row",{staticClass:"mt-2"},[e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Contol Layers position: "}},[e("b-form-select",{attrs:{options:n.Positions},model:{value:n.layersPosition,callback:function(t){n.layersPosition=t},expression:"layersPosition"}})],1)],1),n._v(" "),e("b-col",{attrs:{md:"6"}},[e("b-form-group",{attrs:{label:"Attribution position:"}},[e("b-form-select",{attrs:{options:n.Positions},model:{value:n.attributionPosition,callback:function(t){n.attributionPosition=t},expression:"attributionPosition"}})],1)],1)],1)],1),n._v(" "),e("l-map",{staticStyle:{height:"500px",width:"100%"},attrs:{zoom:n.zoom,options:n.mapOptions,center:n.center,bounds:n.bounds,"min-zoom":n.minZoom,"max-zoom":n.maxZoom},on:{"update:zoom":function(t){n.zoom=t}}},[e("l-control-layers",{attrs:{position:n.layersPosition,collapsed:!1,"sort-layers":!0}}),n._v(" "),n._l(n.tileProviders,(function(t){return e("l-tile-layer",{key:t.name,attrs:{name:t.name,visible:t.visible,url:t.url,attribution:t.attribution,token:n.token,"layer-type":"base"}})})),n._v(" "),e("l-control-zoom",{attrs:{position:n.zoomPosition}}),n._v(" "),e("l-control-attribution",{attrs:{position:n.attributionPosition,prefix:n.attributionPrefix}}),n._v(" "),e("l-control-scale",{attrs:{imperial:n.imperial}}),n._v(" "),n._l(n.markers,(function(t){return e("l-marker",{key:t.id,attrs:{visible:t.visible,draggable:t.draggable,"lat-lng":t.position,icon:t.icon},on:{"update:latLng":function(e){return n.$set(t,"position",e)},"update:lat-lng":function(e){return n.$set(t,"position",e)},click:function(e){return n.alert(t)}}},[e("l-popup",{attrs:{content:t.tooltip}}),n._v(" "),e("l-tooltip",{attrs:{content:t.tooltip}})],1)})),n._v(" "),e("l-layer-group",{attrs:{"layer-type":"overlay",name:"Layer polyline"}},n._l(n.polylines,(function(t){return e("l-polyline",{key:t.id,attrs:{"lat-lngs":t.points,visible:t.visible},on:{click:function(e){return n.alert(t)}}})})),1),n._v(" "),n._l(n.stuff,(function(t){return e("l-layer-group",{key:t.id,attrs:{visible:t.visible,"layer-type":"overlay",name:"Layer 1"},on:{"update:visible":function(e){return n.$set(t,"visible",e)}}},[e("l-layer-group",{attrs:{visible:t.markersVisible}},n._l(t.markers,(function(t){return e("l-marker",{key:t.id,attrs:{visible:t.visible,draggable:t.draggable,"lat-lng":t.position},on:{click:function(e){return n.alert(t)}}})})),1),n._v(" "),e("l-polyline",{attrs:{"lat-lngs":t.polyline.points,visible:t.polyline.visible},on:{click:function(e){return n.alert(t.polyline)}}})],1)}))],2)],1)}),[],!1,null,null,null).exports,e(257)),G=e(2040);delete u.Icon.Default.prototype._getIconUrl,u.Icon.Default.mergeOptions({iconRetinaUrl:e(516),iconUrl:e(428),shadowUrl:e(517)});var R={name:"Icon",components:{BImg:F.a,BCardCode:x.a,LMap:m.a,LTileLayer:g.a,LMarker:d.a,LIcon:G.a},data:function(){return{zoom:13,center:Object(u.latLng)(47.41322,-1.219482),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',icon:Object(u.icon)({iconUrl:e(1572),iconSize:[50,50],iconAnchor:[16,37]}),codeCustomIcon:'\n<template>\n  <div>\n    <l-map\n      :zoom="zoom"\n      :center="center"\n    >\n      <l-tile-layer\n        :url="url"\n        :attribution="attribution"\n      />\n\n      \x3c!-- Use default icon --\x3e\n      <l-marker :lat-lng="[47.41322, -1.219482]" />\n\n      \x3c!-- Use icon given in icon property --\x3e\n      <l-marker\n        :lat-lng="[47.41322, -1.209482]"\n        :icon="icon"\n      />\n\n      \x3c!-- Create image icon (icon) from l-icon tag --\x3e\n      <l-marker :lat-lng="[47.41322, -1.199482]">\n        <l-icon>\n          <b-img\n            :src="require(\'@/assets/images/misc/leaf-red.png\')"\n            height="50"\n          />\n        </l-icon>\n      </l-marker>\n    </l-map>\n  </div>\n</template>\n\n<script>\n\n/* eslint-disable global-require */\nimport { BImg } from \'bootstrap-vue\'\nimport {\n  LMap, LTileLayer, LMarker, LIcon,\n} from \'vue2-leaflet\'\nimport { latLng, icon, Icon } from \'leaflet\'\n\n// eslint-disable-next-line no-underscore-dangle\ndelete Icon.Default.prototype._getIconUrl\nIcon.Default.mergeOptions({\n  iconRetinaUrl: require(\'leaflet/dist/images/marker-icon-2x.png\'),\n  iconUrl: require(\'leaflet/dist/images/marker-icon.png\'),\n  shadowUrl: require(\'leaflet/dist/images/marker-shadow.png\'),\n})\n\nexport default {\n  name: \'Icon\',\n  components: {\n    BImg,\n    LMap,\n    LTileLayer,\n    LMarker,\n    LIcon,\n  },\n  data() {\n    return {\n      zoom: 13,\n      center: latLng(47.41322, -1.219482),\n      url: \'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\',\n      attribution: \'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\',\n      icon: icon({\n        iconUrl: require(\'@/assets/images/misc/leaf-green.png\'),\n        iconSize: [50, 50],\n        iconAnchor: [16, 37],\n      }),\n    }\n  },\n}\n/* eslint-disable global-require */\n<\/script>\n\n<style lang="scss">\n.vue2leaflet-map{\n  &.leaflet-container{\n    height: 350px;\n  }\n}\n</style>\n'}}},Z=(e(1573),Object(L.a)(R,(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("b-card-code",{attrs:{title:"Custom Icon"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v("\n    "+n._s(n.codeCustomIcon)+"\n  ")]},proxy:!0}])},[o("l-map",{attrs:{zoom:n.zoom,center:n.center}},[o("l-tile-layer",{attrs:{url:n.url,attribution:n.attribution}}),n._v(" "),o("l-marker",{attrs:{"lat-lng":[47.41322,-1.219482]}}),n._v(" "),o("l-marker",{attrs:{"lat-lng":[47.41322,-1.209482],icon:n.icon}}),n._v(" "),o("l-marker",{attrs:{"lat-lng":[47.41322,-1.199482]}},[o("l-icon",[o("b-img",{attrs:{src:e(1571),height:"50"}})],1)],1)],1)],1)}),[],!1,null,null,null).exports,{components:{BRow:o.a,BCol:r.a,LeafletGeoJSON:_},created:function(){this.$ability.update([{action:"manage"},{subject:"all"}])}}),N=(e(1575),Object(L.a)(Z,(function(){var n=this.$createElement,t=this._self._c||n;return t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("leaflet-geo-jSON")],1)],1)}),[],!1,null,null,null));t.default=N.exports},18:function(n,t,e){"use strict";e(86);var o=e(1969),r=e(381),l=e(383),a=e(382),i=e(1988),s=(e(205),e(218),e(118)),p=e.n(s),c={components:{BCard:o.a,BCardTitle:r.a,BCardSubTitle:l.a,BCardBody:a.a,BCollapse:i.a,Prism:p.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var n=JSON.parse(JSON.stringify(this.$attrs));return delete n.title,delete n["sub-title"],n}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},u=(e(1099),e(0)),m=Object(u.a)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("b-card",n._g(n._b({attrs:{"no-body":""}},"b-card",n.cardAttrs,!1),n.$listeners),[e("div",{staticClass:"card-header"},[e("div",[e("b-card-title",[n._v(n._s(n.$attrs.title))]),n._v(" "),n.$attrs["sub-title"]?e("b-card-sub-title",[n._v("\n        "+n._s(n.$attrs["sub-title"])+"\n      ")]):n._e()],1),n._v(" "),e("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":n.code_visible?"false":"true","aria-controls":n.parentID},on:{click:function(t){n.code_visible=!n.code_visible}}})]),n._v(" "),void 0!==n.$attrs["no-body"]?[n._t("default"),n._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(t){n.code_visible=t},expression:"code_visible"}},[e("b-card-body",[e("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],1)]:e("b-card-body",[n._t("default"),n._v(" "),e("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(t){n.code_visible=t},expression:"code_visible"}},[e("div",{staticClass:"p-1"}),n._v(" "),e("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],2)],2)}),[],!1,null,"365b0de1",null);t.a=m.exports},571:function(n,t,e){var o=e(1100);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(23)(o,r);o.locals&&(n.exports=o.locals)},945:function(n,t,e){var o=e(1561);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(23)(o,r);o.locals&&(n.exports=o.locals)},947:function(n,t,e){var o=e(1566);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(23)(o,r);o.locals&&(n.exports=o.locals)},948:function(n,t,e){var o=e(1568);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(23)(o,r);o.locals&&(n.exports=o.locals)},949:function(n,t,e){var o=e(1570);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(23)(o,r);o.locals&&(n.exports=o.locals)},950:function(n,t,e){var o=e(1574);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(23)(o,r);o.locals&&(n.exports=o.locals)},951:function(n,t,e){var o=e(1576);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(23)(o,r);o.locals&&(n.exports=o.locals)}}]);