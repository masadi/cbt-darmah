(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[158],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/sekolah/Sekolah.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/sekolah/Sekolah.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module './TableWilayah.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//


 //IMPORT COMPONENT DATATABLENYA
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    Datatable: !(function webpackMissingModule() { var e = new Error("Cannot find module './TableWilayah.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      isBusy: true,
      fields: [{
        key: 'nama',
        label: 'Nama Wilayah',
        sortable: false
      }, {
        key: 'nasional',
        label: 'JUMLAH SMK',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'negeri_nasional',
        label: 'SMK Negeri',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'swasta_nasional',
        label: 'SMK Swasta',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'pengguna',
        label: 'JUMLAH PENGGUNA',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'negeri_pengguna',
        label: 'SMK Negeri Pengguna',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'swasta_pengguna',
        label: 'SMK Swasta Pengguna',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'persentase',
        label: 'Persentase',
        sortable: false,
        thClass: 'text-center',
        tdClass: 'text-center'
      }],
      items: []
    };
  },
  created: function created() {
    // data
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/sekolah/Sekolah.vue?vue&type=template&id=540da3f6&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/sekolah/Sekolah.vue?vue&type=template&id=540da3f6& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
        [_c("b-card-title", [_c("h2", [_vm._v("Data Sekolah")])])],
        1
      ),
      _vm._v(" "),
      _c(
        "b-card-body",
        [
          _c("datatable", {
            attrs: { items: _vm.items, fields: _vm.fields, isBusy: _vm.isBusy },
          }),
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

/***/ "./resources/js/src/views/dashboard/sekolah/Sekolah.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/dashboard/sekolah/Sekolah.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sekolah_vue_vue_type_template_id_540da3f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sekolah.vue?vue&type=template&id=540da3f6& */ "./resources/js/src/views/dashboard/sekolah/Sekolah.vue?vue&type=template&id=540da3f6&");
/* harmony import */ var _Sekolah_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sekolah.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/sekolah/Sekolah.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sekolah_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sekolah_vue_vue_type_template_id_540da3f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sekolah_vue_vue_type_template_id_540da3f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/sekolah/Sekolah.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/sekolah/Sekolah.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/sekolah/Sekolah.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sekolah_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sekolah.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/sekolah/Sekolah.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sekolah_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/sekolah/Sekolah.vue?vue&type=template&id=540da3f6&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/sekolah/Sekolah.vue?vue&type=template&id=540da3f6& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sekolah_vue_vue_type_template_id_540da3f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sekolah.vue?vue&type=template&id=540da3f6& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/sekolah/Sekolah.vue?vue&type=template&id=540da3f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sekolah_vue_vue_type_template_id_540da3f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sekolah_vue_vue_type_template_id_540da3f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);