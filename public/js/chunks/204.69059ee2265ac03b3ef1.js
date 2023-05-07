(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[204],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Ujian/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Ujian/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-countdown */ "./node_modules/vuejs-countdown/dist/vuejs-countdown.js");
/* harmony import */ var vuejs_countdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuejs_countdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");


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
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCardText"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCol"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BSpinner"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTable"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BBadge"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BButton"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormGroup"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormRadio"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormCheckbox"],
    Countdown: vuejs_countdown__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      isBusy: true,
      data: {},
      selected: '',
      ragu: false,
      button_ragu: 'secondary',
      nomor: 0,
      ujian_id: '',
      jumlah_soal: 0,
      yourEndDate: 0
    };
  },
  created: function created() {
    console.log('created');
    console.log(this.$route.params);
    this.selected = '';
    this.ragu = false;
    this.button_ragu = 'secondary';
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var today = new Date();
    var d = new Date(today.setHours(today.getHours() + 2));
    var day = d.getDate();
    var month = months[d.getMonth()];
    var year = d.getFullYear();
    var h = d.getHours();
    var i = d.getMinutes();
    var s = d.getSeconds();
    console.log(today);
    console.log(d);
    this.yourEndDate = month + ' ' + day + ',' + year + ' ' + h + ':' + i + ':' + s; //'August 22, 2023 12:22:12'
    console.log(this.yourEndDate);
    this.getSoal(this.$route.params.ujian_id, this.$route.query.nomor, false);
  },
  methods: {
    getSoal: function getSoal(ujian_id, nomor, replace) {
      var _this = this;
      this.$http.post('/ujian/index', {
        ujian_id: ujian_id,
        nomor: nomor
      }).then(function (response) {
        var getData = response.data;
        _this.isBusy = false;
        _this.data = getData.soal;
        _this.nomor = nomor;
        _this.ujian_id = ujian_id;
        _this.jumlah_soal = getData.ujian.soal_count;
        if (getData.soal.jawaban_siswa) {
          console.log(getData.soal.jawaban_siswa.is_ragu);
          _this.selected = getData.soal.jawaban_siswa.opsi;
          _this.ragu = getData.soal.jawaban_siswa.is_ragu ? true : false;
          _this.button_ragu = getData.soal.jawaban_siswa.is_ragu ? 'warning' : 'secondary';
        }
        console.log(_this.selected);
        if (replace) {
          _this.$router.replace({
            name: "ujian",
            params: {
              ujian_id: _this.$route.params.ujian_id
            },
            query: {
              nomor: nomor
            }
          });
        }
      });
    },
    lanjut: function lanjut(soal_id, nomor, nav) {
      var _this2 = this;
      this.isBusy = true;
      var nomor_ujian;
      if (nav == 'prev') {
        nomor_ujian = parseInt(nomor) - 1;
      } else {
        nomor_ujian = parseInt(nomor) + 1;
      }
      this.$http.post('/ujian/simpan', {
        soal_id: soal_id,
        jawaban: this.selected,
        ragu: this.ragu
      }).then(function (response) {
        _this2.getSoal(_this2.$route.params.ujian_id, nomor_ujian, true);
      });
    },
    getRagu: function getRagu(val) {
      if (val) {
        this.button_ragu = 'warning';
      } else {
        this.button_ragu = 'secondary';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Ujian/Index.vue?vue&type=template&id=25c3638a&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Ujian/Index.vue?vue&type=template&id=25c3638a& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
        ? _c("b-card", { staticClass: "text-center" }, [
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
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.isBusy
        ? _c(
            "b-card",
            [
              _c(
                "b-card-text",
                { staticClass: "text-center" },
                [
                  _vm._v("\n      waktu\n      "),
                  _c("Countdown", { attrs: { end: _vm.yourEndDate } }),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isBusy
        ? _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "8" } },
                [
                  _c(
                    "b-card",
                    [
                      _c(
                        "b-card-text",
                        [
                          _c("h5", {
                            domProps: { innerHTML: _vm._s(_vm.data.deskripsi) },
                          }),
                          _vm._v(" "),
                          _c("b-form-group", {
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var ariaDescribedby = ref.ariaDescribedby
                                    return [
                                      _vm._l(
                                        _vm.data.jawaban,
                                        function (jawaban, index) {
                                          return [
                                            _c(
                                              "b-form-radio",
                                              {
                                                attrs: {
                                                  "aria-describedby":
                                                    ariaDescribedby,
                                                  name: "some-radios",
                                                  value: jawaban.opsi,
                                                },
                                                model: {
                                                  value: _vm.selected,
                                                  callback: function ($$v) {
                                                    _vm.selected = $$v
                                                  },
                                                  expression: "selected",
                                                },
                                              },
                                              [
                                                _c("h5", {
                                                  domProps: {
                                                    innerHTML: _vm._s(
                                                      jawaban.deskripsi
                                                    ),
                                                  },
                                                }),
                                              ]
                                            ),
                                          ]
                                        }
                                      ),
                                    ]
                                  },
                                },
                              ],
                              null,
                              false,
                              3779520961
                            ),
                          }),
                          _vm._v(" "),
                          _c(
                            "b-row",
                            [
                              _c(
                                "b-col",
                                { attrs: { lg: "4" } },
                                [
                                  _vm.nomor <= 1
                                    ? _c("b-button", [_vm._v("« Sebelumnya")])
                                    : _c(
                                        "b-button",
                                        {
                                          attrs: { variant: "success" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.lanjut(
                                                _vm.data.soal_id,
                                                _vm.nomor,
                                                "prev"
                                              )
                                            },
                                          },
                                        },
                                        [_vm._v("« Sebelumnya")]
                                      ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                {
                                  staticClass: "text-center",
                                  attrs: { lg: "4" },
                                },
                                [
                                  _c(
                                    "b-form-checkbox",
                                    {
                                      attrs: {
                                        name: "check-button",
                                        button: "",
                                        "button-variant": _vm.button_ragu,
                                      },
                                      on: { change: _vm.getRagu },
                                      model: {
                                        value: _vm.ragu,
                                        callback: function ($$v) {
                                          _vm.ragu = $$v
                                        },
                                        expression: "ragu",
                                      },
                                    },
                                    [
                                      _vm._v(
                                        "\n                Ragu\n              "
                                      ),
                                    ]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-col",
                                {
                                  staticClass: "text-right",
                                  attrs: { lg: "4" },
                                },
                                [
                                  _vm.nomor == _vm.jumlah_soal
                                    ? _c(
                                        "b-button",
                                        { attrs: { variant: "danger" } },
                                        [_vm._v("Selesai")]
                                      )
                                    : _c(
                                        "b-button",
                                        {
                                          attrs: { variant: "success" },
                                          on: {
                                            click: function ($event) {
                                              return _vm.lanjut(
                                                _vm.data.soal_id,
                                                _vm.nomor,
                                                "next"
                                              )
                                            },
                                          },
                                        },
                                        [_vm._v("Selanjutnya »")]
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
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { cols: "4" } },
                [
                  _c(
                    "b-card",
                    [
                      _c("b-card-text", [
                        _vm._v("\n          navigasi\n        "),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          )
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Ujian/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/Ujian/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_25c3638a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=25c3638a& */ "./resources/js/src/views/Ujian/Index.vue?vue&type=template&id=25c3638a&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Ujian/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_25c3638a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_25c3638a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Ujian/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Ujian/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/Ujian/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Ujian/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Ujian/Index.vue?vue&type=template&id=25c3638a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/Ujian/Index.vue?vue&type=template&id=25c3638a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_25c3638a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=25c3638a& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Ujian/Index.vue?vue&type=template&id=25c3638a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_25c3638a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_25c3638a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);