(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[130],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 //IMPORT LODASH, DIMANA AKAN DIGUNAKAN UNTUK MEMBUAT DELAY KETIKA KOLOM PENCARIAN DIISI

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormSelect"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTable"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BPagination"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BSpinner"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"]
  },
  //PROPS INI ADALAH DATA YANG AKAN DIMINTA DARI PENGGUNA COMPONENT DATATABLE YANG KITA BUAT
  props: {
    //ITEMS STRUKTURNYA ADALAH ARRAY, KARENA BAGIAN INI BERISI DATA YANG AKAN DITAMPILKAN DAN SIFATNYA WAJIB DIKIRIMKAN KETIKA COMPONENT INI DIGUNAKAN
    items: {
      type: Array,
      required: true
    },
    fields: {
      type: Array,
      required: true
    },
    //ADAPUN META, TYPENYA ADALAH OBJECT YANG BERISI INFORMASI MENGENAL CURRENT PAGE, LOAD PERPAGE, TOTAL DATA, DAN LAIN SEBAGAINYA.
    meta: {
      required: true
    },
    isBusy: {
      type: Boolean,
      "default": function _default() {
        return true;
      }
    }
  },
  data: function data() {
    return {
      previewUrl: '',
      //isBusy: true,
      //VARIABLE INI AKAN MENGHADLE SORTING DATA
      sortBy: null,
      //FIELD YANG AKAN DISORT AKAN OTOMATIS DISIMPAN DISINI
      sortDesc: false //SEDANGKAN JENISNYA ASCENDING ATAU DESC AKAN DISIMPAN DISINI
      //TAMBAHKAN DUA VARIABLE INI UNTUK MENGHANDLE MODAL DAN DATA YANG AKAN DIHAPUS
    };
  },

  watch: {
    //KETIKA VALUE DARI VARIABLE sortBy BERUBAH
    sortBy: function sortBy(val) {
      //MAKA KITA EMIT DENGAN NAMA SORT DAN DATANYA ADALAH OBJECT BERUPA VALUE DARI SORTBY DAN SORTDESC
      //EMIT BERARTI MENGIRIMKAN DATA KEPADA PARENT ATAU YANG MEMANGGIL COMPONENT INI
      //SEHINGGA DARI PARENT TERSEBUT, KITA BISA MENGGUNAKAN VALUE YANG DIKIRIMKAN
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      });
    },
    //KETIKA VALUE DARI SORTDESC BERUBAH
    sortDesc: function sortDesc(val) {
      //MAKA CARA YANG SAMA AKAN DIKERJAKAN
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      });
    }
  },
  methods: {
    preview: function preview(item) {
      var _this = this;
      this.$http.get('/berita-acara/baca', {
        params: {
          npsn: item.sekolah.npsn,
          filename: item.berkas
        }
      }).then(function (response) {
        var getData = response.data.data;
        if (getData) {
          _this.previewUrl = 'https://drive.google.com/file/d/' + getData.file_id + '/preview';
          _this.$refs['modal-preview'].show();
        } else {}
      });
    },
    loadPerPage: function loadPerPage(val) {
      //DAN KITA EMIT LAGI DENGAN NAMA per_page DAN VALUE SESUAI PER_PAGE YANG DIPILIH
      this.$emit('per_page', this.meta.per_page);
    },
    changePage: function changePage(val) {
      //KIRIM EMIT DENGAN NAMA PAGINATION DAN VALUENYA ADALAH HALAMAN YANG DIPILIH OLEH USER
      this.$emit('pagination', val);
    },
    //KETIKA KOTAK PENCARIAN DIISI, MAKA FUNGSI INI AKAN DIJALANKAN
    //KITA GUNAKAN DEBOUNCE UNTUK MEMBUAT DELAY, DIMANA FUNGSI INI AKAN DIJALANKAN
    //500 MIL SECOND SETELAH USER BERHENTI MENGETIK
    search: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(function (e) {
      //KIRIM EMIT DENGAN NAMA SEARCH DAN VALUE SESUAI YANG DIKETIKKAN OLEH USER
      this.$emit('search', e.target.value);
    }, 500)
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue?vue&type=template&id=db10efea&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue?vue&type=template&id=db10efea& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-row",
        [
          _c("b-col", { staticClass: "mb-2", attrs: { md: "4" } }, [
            _c("div", { staticClass: "form-inline" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.meta.per_page,
                      expression: "meta.per_page",
                    },
                  ],
                  staticClass: "form-control",
                  on: {
                    change: [
                      function ($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function (o) {
                            return o.selected
                          })
                          .map(function (o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.meta,
                          "per_page",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                      _vm.loadPerPage,
                    ],
                  },
                },
                [
                  _c("option", { attrs: { value: "10" } }, [_vm._v("10")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "25" } }, [_vm._v("25")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "100" } }, [_vm._v("100")]),
                ]
              ),
              _vm._v(" "),
              _c("label", { staticClass: "ml-2" }, [_vm._v("Entri")]),
            ]),
          ]),
          _vm._v(" "),
          _c("b-col", { attrs: { md: "4", "offset-md": "4" } }, [
            _c("div", { staticClass: "form-inline float-right" }, [
              _c("label", { staticClass: "mr-2" }, [_vm._v("Cari")]),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text" },
                on: { input: _vm.search },
              }),
            ]),
          ]),
        ],
        1
      ),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          responsive: "",
          striped: "",
          items: _vm.items,
          fields: _vm.fields,
          "sort-by": _vm.sortBy,
          "sort-desc": _vm.sortDesc,
          "show-empty": "",
          busy: _vm.isBusy,
        },
        on: {
          "update:sortBy": function ($event) {
            _vm.sortBy = $event
          },
          "update:sort-by": function ($event) {
            _vm.sortBy = $event
          },
          "update:sortDesc": function ($event) {
            _vm.sortDesc = $event
          },
          "update:sort-desc": function ($event) {
            _vm.sortDesc = $event
          },
        },
        scopedSlots: _vm._u([
          {
            key: "table-busy",
            fn: function () {
              return [
                _c(
                  "div",
                  { staticClass: "text-center text-danger my-2" },
                  [
                    _c("b-spinner", { staticClass: "align-middle" }),
                    _vm._v(" "),
                    _c("strong", [_vm._v("Loading...")]),
                  ],
                  1
                ),
              ]
            },
            proxy: true,
          },
          {
            key: "cell(nama)",
            fn: function (row) {
              return [
                _vm._v("\n      " + _vm._s(row.item.sekolah.nama) + "\n    "),
              ]
            },
          },
          {
            key: "cell(npsn)",
            fn: function (row) {
              return [
                _vm._v("\n      " + _vm._s(row.item.sekolah.npsn) + "\n    "),
              ]
            },
          },
          {
            key: "cell(kabupaten)",
            fn: function (row) {
              return [
                _vm._v(
                  "\n      " + _vm._s(row.item.sekolah.kabupaten) + "\n    "
                ),
              ]
            },
          },
          {
            key: "cell(provisni)",
            fn: function (row) {
              return [
                _vm._v(
                  "\n      " + _vm._s(row.item.sekolah.provinsi) + "\n    "
                ),
              ]
            },
          },
          {
            key: "cell(actions)",
            fn: function (row) {
              return [
                _c(
                  "b-button",
                  {
                    attrs: { variant: "danger", size: "sm", target: "_blank" },
                    on: {
                      click: function ($event) {
                        return _vm.preview(row.item)
                      },
                    },
                  },
                  [_vm._v("Lihat Berkas")]
                ),
              ]
            },
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "b-row",
        { staticClass: "mt-2" },
        [
          _c("b-col", { attrs: { md: "6" } }, [
            _c("p", [
              _vm._v(
                "Menampilkan " +
                  _vm._s(_vm.meta.from ? _vm.meta.from : 0) +
                  " sampai " +
                  _vm._s(_vm.meta.to) +
                  " dari " +
                  _vm._s(_vm.meta.total) +
                  " entri"
              ),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "6" } },
            [
              _c("b-pagination", {
                attrs: {
                  "total-rows": _vm.meta.total,
                  "per-page": _vm.meta.per_page,
                  align: "right",
                  "aria-controls": "dw-datatable",
                },
                on: { change: _vm.changePage },
                model: {
                  value: _vm.meta.current_page,
                  callback: function ($$v) {
                    _vm.$set(_vm.meta, "current_page", $$v)
                  },
                  expression: "meta.current_page",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal-preview",
          attrs: { size: "xl", "hide-footer": "", title: "Pratinjau" },
        },
        [
          _c("iframe", {
            attrs: { src: _vm.previewUrl, width: "100%", height: "600" },
          }),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableBeritaAcara_vue_vue_type_template_id_db10efea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableBeritaAcara.vue?vue&type=template&id=db10efea& */ "./resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue?vue&type=template&id=db10efea&");
/* harmony import */ var _TableBeritaAcara_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableBeritaAcara.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableBeritaAcara_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableBeritaAcara_vue_vue_type_template_id_db10efea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TableBeritaAcara_vue_vue_type_template_id_db10efea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableBeritaAcara_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableBeritaAcara.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableBeritaAcara_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue?vue&type=template&id=db10efea&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue?vue&type=template&id=db10efea& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableBeritaAcara_vue_vue_type_template_id_db10efea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./TableBeritaAcara.vue?vue&type=template&id=db10efea& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/berita-acara/TableBeritaAcara.vue?vue&type=template&id=db10efea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableBeritaAcara_vue_vue_type_template_id_db10efea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TableBeritaAcara_vue_vue_type_template_id_db10efea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);