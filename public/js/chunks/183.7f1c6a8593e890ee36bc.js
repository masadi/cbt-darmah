(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[183],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/users/Profile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/users/Profile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardHeader"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardText"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BCardFooter: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardFooter"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BSpinner"]
  },
  data: function data() {
    return {
      isBusy: true,
      data: null,
      name: '',
      email: '',
      no_hp: ''
    };
  },
  created: function created() {
    var _this = this;
    this.$http.get('/referensi/users/profile').then(function (response) {
      _this.isBusy = false;
      _this.name = response.data.name;
      console.log(_this.data);
    });
  },
  methods: {
    onSubmit: function onSubmit() {
      //
    },
    onSubmitPassword: function onSubmitPassword() {
      //
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/users/Profile.vue?vue&type=template&id=64f42ea6&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/users/Profile.vue?vue&type=template&id=64f42ea6& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
        "b-card",
        { attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Informasi Profil Pengguna"),
              ]),
              _vm._v(" "),
              _c("b-card-text", { staticClass: "text-muted" }, [
                _vm._v(
                  "\n        Perbaharui informasi profil dan alamat email akun Anda jika diperlukan.\n      "
                ),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form",
            { on: { submit: _vm.onSubmit } },
            [
              _vm.isBusy
                ? _c("b-card-body", [
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
                  ])
                : _c(
                    "b-card-body",
                    [
                      _c(
                        "b-row",
                        { staticClass: "mb-1" },
                        [
                          _c("b-col", { attrs: { sm: "3" } }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Nama Lengkap"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { sm: "9" } },
                            [
                              _c("b-form-input", {
                                attrs: { id: "nama", type: "text" },
                                model: {
                                  value: _vm.name,
                                  callback: function ($$v) {
                                    _vm.name = $$v
                                  },
                                  expression: "name",
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
                        "b-row",
                        { staticClass: "mb-1" },
                        [
                          _c("b-col", { attrs: { sm: "3" } }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Email"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { sm: "9" } },
                            [
                              _c("b-form-input", {
                                attrs: { id: "email", type: "email" },
                                model: {
                                  value: _vm.email,
                                  callback: function ($$v) {
                                    _vm.email = $$v
                                  },
                                  expression: "email",
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
                        "b-row",
                        { staticClass: "mb-1" },
                        [
                          _c("b-col", { attrs: { sm: "3" } }, [
                            _c("label", { attrs: { for: "no_hp" } }, [
                              _vm._v("Nomor Whatsapp Aktif"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { sm: "9" } },
                            [
                              _c("b-form-input", {
                                attrs: { id: "no_hp", type: "text" },
                                model: {
                                  value: _vm.no_hp,
                                  callback: function ($$v) {
                                    _vm.no_hp = $$v
                                  },
                                  expression: "no_hp",
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
                        "b-button",
                        {
                          staticClass: "float-right mb-1",
                          attrs: { type: "submit", variant: "primary" },
                        },
                        [_vm._v("Simpan")]
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
      _vm._v(" "),
      _c(
        "b-card",
        { attrs: { "no-body": "" } },
        [
          _c(
            "b-card-header",
            [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Perbaharui Kata Sandi"),
              ]),
              _vm._v(" "),
              _c("b-card-text", { staticClass: "text-muted" }, [
                _vm._v(
                  "\n        Pastikan akun Anda menggunakan kata sandi acak yang panjang agar tetap aman.\n      "
                ),
              ]),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-form",
            { on: { submit: _vm.onSubmitPassword } },
            [
              _vm.isBusy
                ? _c("b-card-body", [
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
                  ])
                : _c(
                    "b-card-body",
                    [
                      _c(
                        "b-row",
                        { staticClass: "mb-1" },
                        [
                          _c("b-col", { attrs: { sm: "3" } }, [
                            _c(
                              "label",
                              { attrs: { for: "current_password" } },
                              [_vm._v("Kata sandi saat ini")]
                            ),
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { sm: "9" } },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "current_password",
                                  type: "password",
                                },
                                model: {
                                  value: _vm.current_password,
                                  callback: function ($$v) {
                                    _vm.current_password = $$v
                                  },
                                  expression: "current_password",
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
                        "b-row",
                        { staticClass: "mb-1" },
                        [
                          _c("b-col", { attrs: { sm: "3" } }, [
                            _c("label", { attrs: { for: "name" } }, [
                              _vm._v("Email"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { sm: "9" } },
                            [
                              _c("b-form-input", {
                                attrs: { id: "password", type: "password" },
                                model: {
                                  value: _vm.password,
                                  callback: function ($$v) {
                                    _vm.password = $$v
                                  },
                                  expression: "password",
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
                        "b-row",
                        { staticClass: "mb-1" },
                        [
                          _c("b-col", { attrs: { sm: "3" } }, [
                            _c("label", { attrs: { for: "no_hp" } }, [
                              _vm._v("Nomor Whatsapp Aktif"),
                            ]),
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-col",
                            { attrs: { sm: "9" } },
                            [
                              _c("b-form-input", {
                                attrs: {
                                  id: "password_confirmation",
                                  type: "password",
                                },
                                model: {
                                  value: _vm.password_confirmation,
                                  callback: function ($$v) {
                                    _vm.password_confirmation = $$v
                                  },
                                  expression: "password_confirmation",
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
                        "b-button",
                        {
                          staticClass: "float-right mb-1",
                          attrs: { type: "submit", variant: "primary" },
                        },
                        [_vm._v("Simpan")]
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

/***/ "./resources/js/src/views/dashboard/users/Profile.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/dashboard/users/Profile.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_64f42ea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=64f42ea6& */ "./resources/js/src/views/dashboard/users/Profile.vue?vue&type=template&id=64f42ea6&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/users/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_64f42ea6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_64f42ea6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/users/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/users/Profile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/users/Profile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/users/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/users/Profile.vue?vue&type=template&id=64f42ea6&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/users/Profile.vue?vue&type=template&id=64f42ea6& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_64f42ea6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=64f42ea6& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/users/Profile.vue?vue&type=template&id=64f42ea6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_64f42ea6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_64f42ea6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);