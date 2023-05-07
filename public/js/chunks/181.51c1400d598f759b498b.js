(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[181],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/app-timeline/AppTimeline.vue */ "./resources/js/src/@core/components/app-timeline/AppTimeline.vue");
/* harmony import */ var _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/app-timeline/AppTimelineItem.vue */ "./resources/js/src/@core/components/app-timeline/AppTimelineItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSpinner"],
    AppTimeline: _core_components_app_timeline_AppTimeline_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppTimelineItem: _core_components_app_timeline_AppTimelineItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCollapse"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BListGroupItem"],
    BAvatarGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatarGroup"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormTextarea: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormTextarea"]
  },
  data: function data() {
    return {
      isBusy: true,
      data_pengaduan: '',
      comment: {},
      deskripsi: '',
      DeskripsiFeedback: '',
      DeskripsiState: null
    };
  },
  created: function created() {
    this.loadPostsData();
  },
  methods: {
    profilePhoto: function profilePhoto(user) {
      console.log(user);
    },
    loadPostsData: function loadPostsData() {
      var _this = this;
      this.$http.get('/pengaduan/detil/' + this.$route.params.pengaduan_id).then(function (response) {
        //this.items = response.data.all_pd
        var getData = response.data;
        _this.data_pengaduan = getData;
        _this.isBusy = false;
      });
    },
    jawab: function jawab(id) {
      console.log(id);
      this.comment[id] = 'mana';
      console.log(this.comment);
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue?vue&type=template&id=76689884&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue?vue&type=template&id=76689884& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c(
        "b-card-header",
        [_c("b-card-title", [_c("h2", [_vm._v("Detil Pengaduan")])])],
        1
      ),
      _vm._v(" "),
      _vm.isBusy
        ? _c(
            "b-card-body",
            { staticClass: "text-center" },
            [
              _c("b-spinner", { staticClass: "align-middle" }),
              _vm._v(" "),
              _c("strong", [_vm._v("Loading...")]),
            ],
            1
          )
        : _c(
            "b-card-body",
            [
              _c(
                "app-timeline",
                [
                  _c(
                    "app-timeline-item",
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
                        },
                        [
                          _c("h6", [_vm._v(_vm._s(_vm.data_pengaduan.judul))]),
                          _vm._v(" "),
                          _c("small", { staticClass: "text-muted" }, [
                            _vm._v(_vm._s(_vm.data_pengaduan.waktu)),
                          ]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", [_vm._v(_vm._s(_vm.data_pengaduan.deskripsi))]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "d-flex flex-sm-row flex-column justify-content-between align-items-start",
                        },
                        [
                          _c(
                            "b-media",
                            {
                              scopedSlots: _vm._u([
                                {
                                  key: "aside",
                                  fn: function () {
                                    return [
                                      _c("b-avatar", {
                                        attrs: {
                                          src: __webpack_require__(/*! @/assets/images/avatars/no-photo.png */ "./resources/js/src/assets/images/avatars/no-photo.png"),
                                        },
                                      }),
                                    ]
                                  },
                                  proxy: true,
                                },
                              ]),
                            },
                            [
                              _vm._v(" "),
                              _c("h6", [
                                _vm._v(_vm._s(_vm.data_pengaduan.user.name)),
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-muted" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.data_pengaduan.user.roles
                                      .map(function (u) {
                                        return u.display_name
                                      })
                                      .join(", ")
                                  )
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "a",
                              {
                                staticClass: "text-warning float-right",
                                attrs: {
                                  href: "javascript:",
                                  title: "Tulis jawaban",
                                },
                                on: {
                                  click: function ($event) {
                                    return _vm.jawab(_vm.data_pengaduan.id)
                                  },
                                },
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "MessageSquareIcon" },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(
                        "\n        " +
                          _vm._s(_vm.comment) +
                          "\n        " +
                          _vm._s(_vm.data_pengaduan.id) +
                          "\n        "
                      ),
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Deskripsi",
                            "label-for": "deskripsi",
                            "invalid-feedback": _vm.DeskripsiFeedback,
                            state: _vm.DeskripsiState,
                          },
                        },
                        [
                          _c("b-form-textarea", {
                            attrs: {
                              id: "deskripsi",
                              state: _vm.DeskripsiState,
                              placeholder: "Tuliskan jawaban disini...",
                              rows: "3",
                              "max-rows": "6",
                            },
                            model: {
                              value: _vm.deskripsi,
                              callback: function ($$v) {
                                _vm.deskripsi = $$v
                              },
                              expression: "deskripsi",
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(
                    _vm.data_pengaduan.comments,
                    function (pengaduan, index) {
                      return _c(
                        "app-timeline-item",
                        { key: pengaduan.id },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0",
                            },
                            [
                              _c("h6", [_vm._v(_vm._s(pengaduan.judul))]),
                              _vm._v(" "),
                              _c("small", { staticClass: "text-muted" }, [
                                _vm._v(_vm._s(pengaduan.waktu)),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(pengaduan.deskripsi))]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex flex-sm-row flex-column justify-content-between align-items-start",
                            },
                            [
                              _c(
                                "b-media",
                                {
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "aside",
                                        fn: function () {
                                          return [
                                            _c("b-avatar", {
                                              attrs: {
                                                src: __webpack_require__(/*! @/assets/images/avatars/no-photo.png */ "./resources/js/src/assets/images/avatars/no-photo.png"),
                                              },
                                            }),
                                          ]
                                        },
                                        proxy: true,
                                      },
                                    ],
                                    null,
                                    true
                                  ),
                                },
                                [
                                  _vm._v(" "),
                                  _c("h6", [
                                    _vm._v(_vm._s(pengaduan.user.name)),
                                  ]),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "text-muted" }, [
                                    _vm._v(
                                      _vm._s(
                                        pengaduan.user.roles
                                          .map(function (u) {
                                            return u.display_name
                                          })
                                          .join(", ")
                                      )
                                    ),
                                  ]),
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "text-warning float-right",
                                    attrs: {
                                      href: "javascript:",
                                      title: "Tulis jawaban",
                                    },
                                    on: {
                                      click: function ($event) {
                                        return _vm.jawab(pengaduan.id)
                                      },
                                    },
                                  },
                                  [
                                    _c("feather-icon", {
                                      attrs: { icon: "MessageSquareIcon" },
                                    }),
                                  ],
                                  1
                                ),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.comment[_vm.data_pengaduan.id]
                            ? _c(
                                "b-form-group",
                                {
                                  attrs: {
                                    label: "Deskripsi",
                                    "label-for": "deskripsi",
                                    "invalid-feedback": _vm.DeskripsiFeedback,
                                    state: _vm.DeskripsiState,
                                  },
                                },
                                [
                                  _c("b-form-textarea", {
                                    attrs: {
                                      id: "deskripsi",
                                      state: _vm.DeskripsiState,
                                      placeholder:
                                        "Tuliskan pengaduan disini...",
                                      rows: "3",
                                      "max-rows": "6",
                                    },
                                    model: {
                                      value: _vm.deskripsi,
                                      callback: function ($$v) {
                                        _vm.deskripsi = $$v
                                      },
                                      expression: "deskripsi",
                                    },
                                  }),
                                ],
                                1
                              )
                            : _vm._e(),
                        ],
                        1
                      )
                    }
                  ),
                ],
                2
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

/***/ "./resources/js/src/assets/images/avatars/no-photo.png":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/no-photo.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/simazah/resources/js/src/assets/images/avatars/no-photo.png";

/***/ }),

/***/ "./resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetilPengaduan_vue_vue_type_template_id_76689884___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetilPengaduan.vue?vue&type=template&id=76689884& */ "./resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue?vue&type=template&id=76689884&");
/* harmony import */ var _DetilPengaduan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetilPengaduan.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetilPengaduan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetilPengaduan_vue_vue_type_template_id_76689884___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetilPengaduan_vue_vue_type_template_id_76689884___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetilPengaduan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetilPengaduan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetilPengaduan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue?vue&type=template&id=76689884&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue?vue&type=template&id=76689884& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetilPengaduan_vue_vue_type_template_id_76689884___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetilPengaduan.vue?vue&type=template&id=76689884& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/pengaduan/DetilPengaduan.vue?vue&type=template&id=76689884&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetilPengaduan_vue_vue_type_template_id_76689884___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetilPengaduan_vue_vue_type_template_id_76689884___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);