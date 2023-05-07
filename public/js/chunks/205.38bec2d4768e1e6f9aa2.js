(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[205],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/beranda/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSpinner"]
  },
  data: function data() {
    return {
      isBusy: true,
      data: {}
    };
  },
  created: function created() {
    var _this = this;
    console.log('created');
    this.$http.get('/general/index').then(function (response) {
      _this.isBusy = false;
      _this.data = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/Index.vue?vue&type=template&id=4aa87d02&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/beranda/Index.vue?vue&type=template&id=4aa87d02& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
      _vm.isBusy
        ? _c(
            "b-row",
            [
              _c(
                "b-col",
                [
                  _c("b-card", { staticClass: "text-center" }, [
                    _c(
                      "div",
                      { staticClass: "text-center text-danger my-2" },
                      [
                        _c("b-spinner", { staticClass: "align-middle" }),
                        _vm._v(" "),
                        _c("div", [_c("strong", [_vm._v("Loading...")])]),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          )
        : _c(
            "b-row",
            [
              _c(
                "b-col",
                [
                  _c(
                    "b-card",
                    [
                      _c(
                        "b-card-text",
                        [
                          _c("h2", { staticClass: "fw-bolder" }, [
                            _vm._v(
                              "SELAMAT DATANG " + _vm._s(_vm.data.user.name)
                            ),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "card-text" }, [
                            _vm._v(
                              "Anda anggota " + _vm._s(_vm.data.rombel.nama)
                            ),
                          ]),
                          _vm._v(" "),
                          _c("h3", { staticClass: "fw-bolder" }, [
                            _vm._v(
                              "Data Ujian di " + _vm._s(_vm.data.rombel.nama)
                            ),
                          ]),
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
                                      {
                                        staticClass:
                                          "text-center text-danger my-2",
                                      },
                                      [
                                        _c("b-spinner", {
                                          staticClass: "align-middle",
                                        }),
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
                                key: "cell(tahun)",
                                fn: function (row) {
                                  return [
                                    _vm._v(
                                      "\n              SMK " +
                                        _vm._s(row.item.tahun) +
                                        " Tahun\n            "
                                    ),
                                  ]
                                },
                              },
                              {
                                key: "cell(sekolah)",
                                fn: function (row) {
                                  return [
                                    _vm._v(
                                      "\n              " +
                                        _vm._s(
                                          row.item.sekolah
                                            ? row.item.sekolah.nama
                                            : "-"
                                        ) +
                                        "\n            "
                                    ),
                                  ]
                                },
                              },
                              {
                                key: "cell(confirm)",
                                fn: function (row) {
                                  return [
                                    _vm.hasRole("disprov")
                                      ? _c(
                                          "div",
                                          [
                                            row.item.cadangan
                                              ? [
                                                  row.item.confirm_provinsi
                                                    ? _c(
                                                        "b-badge",
                                                        {
                                                          attrs: {
                                                            variant: "success",
                                                          },
                                                        },
                                                        [_vm._v("Sudah")]
                                                      )
                                                    : _c(
                                                        "b-badge",
                                                        {
                                                          attrs: {
                                                            variant: "danger",
                                                          },
                                                        },
                                                        [_vm._v("Belum")]
                                                      ),
                                                ]
                                              : [
                                                  row.item.confirm_sekolah
                                                    ? _c(
                                                        "b-badge",
                                                        {
                                                          attrs: {
                                                            variant: "success",
                                                          },
                                                        },
                                                        [_vm._v("Sudah")]
                                                      )
                                                    : _c(
                                                        "b-badge",
                                                        {
                                                          attrs: {
                                                            variant: "danger",
                                                          },
                                                        },
                                                        [_vm._v("Belum")]
                                                      ),
                                                ],
                                          ],
                                          2
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.hasRole("diskab")
                                      ? _c(
                                          "div",
                                          [
                                            row.item.cadangan
                                              ? [
                                                  row.item.confirm_kabupaten
                                                    ? _c(
                                                        "b-badge",
                                                        {
                                                          attrs: {
                                                            variant: "success",
                                                          },
                                                        },
                                                        [_vm._v("Sudah")]
                                                      )
                                                    : _c(
                                                        "b-badge",
                                                        {
                                                          attrs: {
                                                            variant: "danger",
                                                          },
                                                        },
                                                        [_vm._v("Belum")]
                                                      ),
                                                ]
                                              : [
                                                  row.item.confirm_sekolah
                                                    ? _c(
                                                        "b-badge",
                                                        {
                                                          attrs: {
                                                            variant: "success",
                                                          },
                                                        },
                                                        [_vm._v("Sudah")]
                                                      )
                                                    : _c(
                                                        "b-badge",
                                                        {
                                                          attrs: {
                                                            variant: "danger",
                                                          },
                                                        },
                                                        [_vm._v("Belum")]
                                                      ),
                                                ],
                                          ],
                                          2
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.hasRole("sekolah")
                                      ? _c(
                                          "div",
                                          [
                                            row.item.confirm_sekolah
                                              ? _c(
                                                  "b-badge",
                                                  {
                                                    attrs: {
                                                      variant: "success",
                                                    },
                                                  },
                                                  [_vm._v("Sudah")]
                                                )
                                              : _c(
                                                  "b-badge",
                                                  {
                                                    attrs: {
                                                      variant: "danger",
                                                    },
                                                  },
                                                  [_vm._v("Belum")]
                                                ),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                  ]
                                },
                              },
                              {
                                key: "cell(status_confirm)",
                                fn: function (row) {
                                  return [
                                    _vm.hasRole("disprov")
                                      ? _c(
                                          "div",
                                          [
                                            row.item.cadangan
                                              ? [
                                                  _c(
                                                    "b-badge",
                                                    {
                                                      attrs: {
                                                        variant:
                                                          _vm.confirmVariant(
                                                            row.item
                                                              .confirm_provinsi
                                                          ),
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.statusConfirm(
                                                            row.item
                                                              .confirm_provinsi
                                                          )
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              : [
                                                  _c(
                                                    "b-badge",
                                                    {
                                                      attrs: {
                                                        variant:
                                                          _vm.confirmVariant(
                                                            row.item
                                                              .confirm_sekolah
                                                          ),
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.statusConfirm(
                                                            row.item
                                                              .confirm_sekolah
                                                          )
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                          ],
                                          2
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.hasRole("diskab")
                                      ? _c(
                                          "div",
                                          [
                                            row.item.cadangan
                                              ? [
                                                  _c(
                                                    "b-badge",
                                                    {
                                                      attrs: {
                                                        variant:
                                                          _vm.confirmVariant(
                                                            row.item
                                                              .confirm_kabupaten
                                                          ),
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.statusConfirm(
                                                            row.item
                                                              .confirm_kabupaten
                                                          )
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              : [
                                                  _c(
                                                    "b-badge",
                                                    {
                                                      attrs: {
                                                        variant:
                                                          _vm.confirmVariant(
                                                            row.item
                                                              .confirm_sekolah
                                                          ),
                                                      },
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.statusConfirm(
                                                            row.item
                                                              .confirm_sekolah
                                                          )
                                                        )
                                                      ),
                                                    ]
                                                  ),
                                                ],
                                          ],
                                          2
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.hasRole("sekolah")
                                      ? _c(
                                          "div",
                                          [
                                            _c(
                                              "b-badge",
                                              {
                                                attrs: {
                                                  variant: _vm.confirmVariant(
                                                    row.item.confirm_sekolah
                                                  ),
                                                },
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.statusConfirm(
                                                      row.item.confirm_sekolah
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                  ]
                                },
                              },
                              {
                                key: "cell(blanko)",
                                fn: function (row) {
                                  return [
                                    row.item.blangko_3
                                      ? _c(
                                          "b-badge",
                                          { attrs: { variant: "success" } },
                                          [_vm._v("Sudah")]
                                        )
                                      : _c(
                                          "b-badge",
                                          { attrs: { variant: "danger" } },
                                          [_vm._v("Belum")]
                                        ),
                                  ]
                                },
                              },
                              {
                                key: "cell(khusus)",
                                fn: function (row) {
                                  return [
                                    row.item.user && row.item.user.fire == "1"
                                      ? _c(
                                          "b-badge",
                                          { attrs: { variant: "success" } },
                                          [_vm._v("Ya")]
                                        )
                                      : _c(
                                          "b-badge",
                                          { attrs: { variant: "danger" } },
                                          [_vm._v("Tidak")]
                                        ),
                                  ]
                                },
                              },
                              {
                                key: "cell(actions)",
                                fn: function (row) {
                                  return [
                                    _c(
                                      "b-dropdown",
                                      {
                                        attrs: {
                                          id: "dropdown-dropleft",
                                          dropleft: "",
                                          text: "Aksi",
                                          variant: "success",
                                          size: "sm",
                                        },
                                      },
                                      [
                                        _c(
                                          "b-dropdown-item",
                                          {
                                            attrs: { href: "javascript:" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.confirm(row.item, 1)
                                              },
                                            },
                                          },
                                          [
                                            _c("font-awesome-icon", {
                                              attrs: {
                                                icon: "fa-solid fa-circle-check",
                                              },
                                            }),
                                            _vm._v(" Ada"),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          {
                                            attrs: { href: "javascript:" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.confirm(row.item, 2)
                                              },
                                            },
                                          },
                                          [
                                            _c("font-awesome-icon", {
                                              attrs: {
                                                icon: "fa-solid fa-circle-xmark",
                                              },
                                            }),
                                            _vm._v(" Tidak Ada"),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-dropdown-item",
                                          {
                                            attrs: { href: "javascript:" },
                                            on: {
                                              click: function ($event) {
                                                return _vm.confirm(row.item, 3)
                                              },
                                            },
                                          },
                                          [
                                            _c("font-awesome-icon", {
                                              attrs: {
                                                icon: "fa-solid fa-circle-exclamation",
                                              },
                                            }),
                                            _vm._v(" Rusak"),
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.cadangan &&
                                        row.item.confirm_provinsi == 1 &&
                                        !row.item.peserta_didik_id
                                          ? _c(
                                              "b-dropdown-item",
                                              {
                                                attrs: { href: "javascript:" },
                                                on: {
                                                  click: function ($event) {
                                                    return _vm.sekolah(row.item)
                                                  },
                                                },
                                              },
                                              [
                                                _c("font-awesome-icon", {
                                                  attrs: {
                                                    icon: "fa-solid fa-building-columns",
                                                  },
                                                }),
                                                _vm._v(" Sekolah"),
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                      ],
                                      1
                                    ),
                                  ]
                                },
                              },
                            ]),
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/beranda/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/beranda/Index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_4aa87d02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=4aa87d02& */ "./resources/js/src/views/beranda/Index.vue?vue&type=template&id=4aa87d02&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/beranda/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_4aa87d02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_4aa87d02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/beranda/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/beranda/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/beranda/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/beranda/Index.vue?vue&type=template&id=4aa87d02&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/beranda/Index.vue?vue&type=template&id=4aa87d02& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4aa87d02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=4aa87d02& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/Index.vue?vue&type=template&id=4aa87d02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4aa87d02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4aa87d02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);