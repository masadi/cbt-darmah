(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[128],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _charts_components_ChartjsComponentHorizontalBarChart_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts-components/ChartjsComponentHorizontalBarChart.vue */ "./resources/js/src/views/beranda/charts-components/ChartjsComponentHorizontalBarChart.vue");
/* harmony import */ var _chartjsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartjsData */ "./resources/js/src/views/beranda/chartjsData.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardSubTitle"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    ChartjsComponentHorizontalBarChart: _charts_components_ChartjsComponentHorizontalBarChart_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      chartjsData: _chartjsData__WEBPACK_IMPORTED_MODULE_3__["default"],
      rangePicker: ['2019-05-01', '2019-05-10']
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/beranda/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _ChartjsBarChart_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsBarChart.vue */ "./resources/js/src/views/beranda/ChartjsBarChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BSpinner: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSpinner"],
    ChartjsBarChart: _ChartjsBarChart_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isBusy: true,
      rekapitulasi: [],
      data: {}
    };
  },
  created: function created() {
    var _this = this;
    this.$http.get('/general/index').then(function (response) {
      _this.isBusy = false;
      _this.rekapitulasi = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/beranda/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ "./node_modules/vue-chartjs/es/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  "extends": vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["HorizontalBar"],
  props: {
    data: {
      type: Object,
      "default": null
    },
    options: {
      type: Object,
      "default": null
    }
  },
  mounted: function mounted() {
    this.renderChart(this.data, this.options);
  }
});

/***/ }),

/***/ "./node_modules/chart.js/dist/chart.js":
/*!*********************************************!*\
  !*** ./node_modules/chart.js/dist/chart.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (568:17)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n|     };\n| class DatasetController {\n>  static defaults = {};\n|  static datasetElementType = null;\n|  static dataElementType = null;");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=style&index=0&id=fbc32efc&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=style&index=0&id=fbc32efc&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../node_modules/css-loader/dist/cjs.js!flatpickr/dist/flatpickr.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/flatpickr/dist/flatpickr.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, ".flatpickr-calendar .flatpickr-day {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today {\n  border-color: #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.today:hover {\n  color: #6e6b7b;\n}\n[dir] .flatpickr-calendar .flatpickr-day.today:hover {\n  background: transparent;\n}\n.flatpickr-calendar .flatpickr-day.selected, .flatpickr-calendar .flatpickr-day.selected:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.selected, [dir] .flatpickr-calendar .flatpickr-day.selected:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir] .flatpickr-calendar .flatpickr-day.inRange, [dir] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #f3f2fe;\n  border-color: #f3f2fe;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #f3f2fe, 5px 0 0 #f3f2fe;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #f3f2fe, -5px 0 0 #f3f2fe;\n}\n.flatpickr-calendar .flatpickr-day.startRange, .flatpickr-calendar .flatpickr-day.endRange, .flatpickr-calendar .flatpickr-day.startRange:hover, .flatpickr-calendar .flatpickr-day.endRange:hover {\n  color: #fff;\n}\n[dir] .flatpickr-calendar .flatpickr-day.startRange, [dir] .flatpickr-calendar .flatpickr-day.endRange, [dir] .flatpickr-calendar .flatpickr-day.startRange:hover, [dir] .flatpickr-calendar .flatpickr-day.endRange:hover {\n  background: #7367f0;\n  border-color: #7367f0;\n}\n[dir=ltr] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=ltr] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: -10px 0 0 #7367f0;\n}\n[dir=rtl] .flatpickr-calendar .flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)), [dir=rtl] .flatpickr-calendar .flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  box-shadow: 10px 0 0 #7367f0;\n}\n.flatpickr-calendar .flatpickr-day.flatpickr-disabled, .flatpickr-calendar .flatpickr-day.prevMonthDay, .flatpickr-calendar .flatpickr-day.nextMonthDay {\n  color: #dae1e7;\n}\n[dir] .flatpickr-calendar .flatpickr-day:hover {\n  background: #f6f6f6;\n}\n.flatpickr-calendar:after, .flatpickr-calendar:before {\n  display: none;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month {\n  top: -5px;\n}\n.flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover i, .flatpickr-calendar .flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover i,\n.flatpickr-calendar .flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #7367f0;\n}\n.flatpickr-calendar .flatpickr-current-month span.cur-month {\n  font-weight: 300;\n}\n.flatpickr-calendar.open {\n  z-index: 1051;\n}\n.flatpickr-calendar.hasTime.open .flatpickr-time {\n  height: auto;\n}\n[dir] .flatpickr-time input:hover, [dir] .flatpickr-time .flatpickr-am-pm:hover, [dir] .flatpickr-time input:focus, [dir] .flatpickr-time .flatpickr-am-pm:focus {\n  background: #fff;\n}\n[dir] .dark-layout .flatpickr-calendar {\n  background: #161d31;\n  border-color: #161d31;\n  box-shadow: none;\n}\n.dark-layout .flatpickr-calendar .flatpickr-months i,\n.dark-layout .flatpickr-calendar .flatpickr-months svg {\n  fill: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-month {\n  color: #b4b7bd;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: 1px 0 0 #3b4253;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-weekwrapper .flatpickr-weeks {\n  box-shadow: -1px 0 0 #3b4253;\n}\n.dark-layout .flatpickr-calendar .flatpickr-weekday {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day, .dark-layout .flatpickr-calendar .flatpickr-day.today:hover {\n  color: #b4b7bd;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.selected {\n  color: #fff;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day.prevMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.nextMonthDay, .dark-layout .flatpickr-calendar .flatpickr-day.flatpickr-disabled {\n  color: #4e5154 !important;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  background: #283046;\n  border-color: #283046;\n}\n[dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=ltr] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: -5px 0 0 #283046, 5px 0 0 #283046;\n}\n[dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange, [dir=rtl] .dark-layout .flatpickr-calendar .flatpickr-day.inRange:hover {\n  box-shadow: 5px 0 0 #283046, -5px 0 0 #283046;\n}\n.dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  border-color: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:hover:not(.selected):not(.today):not(.startRange):not(.endRange), [dir] .dark-layout .flatpickr-calendar .flatpickr-days .flatpickr-day:focus:not(.selected):not(.today):not(.startRange):not(.endRange) {\n  background: #283046;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time {\n  border-color: #161d31 !important;\n}\n.dark-layout .flatpickr-calendar .flatpickr-time .numInput,\n.dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .numInput:hover, [dir] .dark-layout .flatpickr-calendar .flatpickr-time .flatpickr-am-pm:hover {\n  background: #161d31;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowUp:after {\n  border-bottom-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-calendar .flatpickr-time .arrowDown:after {\n  border-top-color: #b4b7bd;\n}\n[dir] .dark-layout .flatpickr-time input:hover, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:hover, [dir] .dark-layout .flatpickr-time input:focus, [dir] .dark-layout .flatpickr-time .flatpickr-am-pm:focus {\n  background: #161d31;\n}\n.flatpickr-input[readonly],\n.flatpickr-input ~ .form-control[readonly],\n.flatpickr-human-friendly[readonly] {\n  opacity: 1 !important;\n}\n[dir] .flatpickr-input[readonly], [dir] .flatpickr-input ~ .form-control[readonly], [dir] .flatpickr-human-friendly[readonly] {\n  background-color: inherit;\n}\n[dir] .flatpickr-weekdays {\n  margin-top: 8px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  -webkit-appearance: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months,\n.flatpickr-current-month .numInputWrapper {\n  font-size: 1.1rem;\n  transition: all 0.15s ease-out;\n}\n[dir] .flatpickr-current-month .flatpickr-monthDropdown-months, [dir] .flatpickr-current-month .numInputWrapper {\n  border-radius: 4px;\n  padding: 2px;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months span,\n.flatpickr-current-month .numInputWrapper span {\n  display: none;\n}\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-prev-month svg,\nhtml[dir=rtl] .flatpickr-calendar .flatpickr-next-month svg {\n  transform: rotate(180deg);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=template&id=fbc32efc&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=template&id=fbc32efc& ***!
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
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c("b-card-header", [
        _c(
          "div",
          [
            _c("b-card-sub-title", { staticClass: "mb-25" }, [
              _vm._v("\n        Balance\n      "),
            ]),
            _vm._v(" "),
            _c("b-card-title", [_vm._v("$74,123")]),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-flex align-items-center" },
          [
            _c("feather-icon", { attrs: { icon: "CalendarIcon", size: "16" } }),
            _vm._v(" "),
            _c("flat-pickr", {
              staticClass:
                "form-control flat-picker bg-transparent border-0 shadow-none",
              attrs: { config: { mode: "range" }, placeholder: "YYYY-MM-DD" },
              model: {
                value: _vm.rangePicker,
                callback: function ($$v) {
                  _vm.rangePicker = $$v
                },
                expression: "rangePicker",
              },
            }),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c(
        "b-card-body",
        [
          _c("chartjs-component-horizontal-bar-chart", {
            attrs: {
              height: 400,
              data: _vm.chartjsData.horizontalBarChart.data,
              options: _vm.chartjsData.horizontalBarChart.options,
            },
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
        : _vm._l(_vm.rekapitulasi, function (rekap, index) {
            return _c(
              "b-row",
              { key: index, staticClass: "match-height" },
              _vm._l(rekap, function (data, index) {
                return _c(
                  "b-col",
                  { key: index, attrs: { xl: "3", md: "6", sm: "12" } },
                  [
                    _c(
                      "b-card",
                      { staticClass: "text-center" },
                      [
                        _c("b-card-text", { staticClass: "font-small-3" }, [
                          _c(
                            "div",
                            {
                              class:
                                "avatar bg-light-" +
                                data.variant +
                                " p-50 mb-1",
                            },
                            [
                              _c(
                                "div",
                                { staticClass: "avatar-content" },
                                [
                                  _c("font-awesome-icon", {
                                    attrs: { icon: data.icon, size: "2xl" },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c("h2", { staticClass: "fw-bolder" }, [
                            _vm._v(_vm._s(data.count)),
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "card-text" }, [
                            _vm._v(_vm._s(data.text)),
                          ]),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                )
              }),
              1
            )
          }),
      _vm._v(" "),
      _c("chartjs-bar-chart"),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=style&index=0&id=fbc32efc&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=style&index=0&id=fbc32efc&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsBarChart.vue?vue&type=style&index=0&id=fbc32efc&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=style&index=0&id=fbc32efc&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-chartjs/es/BaseCharts.js":
/*!***************************************************!*\
  !*** ./node_modules/vue-chartjs/es/BaseCharts.js ***!
  \***************************************************/
/*! exports provided: generateChart, Bar, HorizontalBar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateChart", function() { return generateChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalBar", function() { return HorizontalBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doughnut", function() { return Doughnut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return Pie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolarArea", function() { return PolarArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Radar", function() { return Radar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bubble", function() { return Bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scatter", function() { return Scatter; });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);

function generateChart(chartId, chartType) {
  return {
    render: function render(createElement) {
      return createElement('div', {
        style: this.styles,
        class: this.cssClasses
      }, [createElement('canvas', {
        attrs: {
          id: this.chartId,
          width: this.width,
          height: this.height
        },
        ref: 'canvas'
      })]);
    },
    props: {
      chartId: {
        default: chartId,
        type: String
      },
      width: {
        default: 400,
        type: Number
      },
      height: {
        default: 400,
        type: Number
      },
      cssClasses: {
        type: String,
        default: ''
      },
      styles: {
        type: Object
      },
      plugins: {
        type: Array,
        default: function _default() {
          return [];
        }
      }
    },
    data: function data() {
      return {
        _chart: null,
        _plugins: this.plugins
      };
    },
    methods: {
      addPlugin: function addPlugin(plugin) {
        this.$data._plugins.push(plugin);
      },
      generateLegend: function generateLegend() {
        if (this.$data._chart) {
          return this.$data._chart.generateLegend();
        }
      },
      renderChart: function renderChart(data, options) {
        if (this.$data._chart) this.$data._chart.destroy();
        if (!this.$refs.canvas) throw new Error('Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components');
        this.$data._chart = new chart_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.$refs.canvas.getContext('2d'), {
          type: chartType,
          data: data,
          options: options,
          plugins: this.$data._plugins
        });
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.$data._chart) {
        this.$data._chart.destroy();
      }
    }
  };
}
var Bar = generateChart('bar-chart', 'bar');
var HorizontalBar = generateChart('horizontalbar-chart', 'horizontalBar');
var Doughnut = generateChart('doughnut-chart', 'doughnut');
var Line = generateChart('line-chart', 'line');
var Pie = generateChart('pie-chart', 'pie');
var PolarArea = generateChart('polar-chart', 'polarArea');
var Radar = generateChart('radar-chart', 'radar');
var Bubble = generateChart('bubble-chart', 'bubble');
var Scatter = generateChart('scatter-chart', 'scatter');
/* harmony default export */ __webpack_exports__["default"] = ({
  Bar: Bar,
  HorizontalBar: HorizontalBar,
  Doughnut: Doughnut,
  Line: Line,
  Pie: Pie,
  PolarArea: PolarArea,
  Radar: Radar,
  Bubble: Bubble,
  Scatter: Scatter
});

/***/ }),

/***/ "./node_modules/vue-chartjs/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/vue-chartjs/es/index.js ***!
  \**********************************************/
/*! exports provided: default, VueCharts, Bar, HorizontalBar, Doughnut, Line, Pie, PolarArea, Radar, Bubble, Scatter, mixins, generateChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueCharts", function() { return VueCharts; });
/* harmony import */ var _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins/index.js */ "./node_modules/vue-chartjs/es/mixins/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixins", function() { return _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _BaseCharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseCharts */ "./node_modules/vue-chartjs/es/BaseCharts.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HorizontalBar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["HorizontalBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Doughnut", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Doughnut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Line"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Pie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolarArea", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["PolarArea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radar", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Radar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Bubble", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bubble"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scatter", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Scatter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateChart", function() { return _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["generateChart"]; });



var VueCharts = {
  Bar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bar"],
  HorizontalBar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["HorizontalBar"],
  Doughnut: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Doughnut"],
  Line: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Line"],
  Pie: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Pie"],
  PolarArea: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["PolarArea"],
  Radar: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Radar"],
  Bubble: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Bubble"],
  Scatter: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["Scatter"],
  mixins: _mixins_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  generateChart: _BaseCharts__WEBPACK_IMPORTED_MODULE_1__["generateChart"],
  render: function render() {
    return console.error('[vue-chartjs]: This is not a vue component. It is the whole object containing all vue components. Please import the named export or access the components over the dot notation. For more info visit https://vue-chartjs.org/#/home?id=quick-start');
  }
};
/* harmony default export */ __webpack_exports__["default"] = (VueCharts);


/***/ }),

/***/ "./node_modules/vue-chartjs/es/mixins/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/vue-chartjs/es/mixins/index.js ***!
  \*****************************************************/
/*! exports provided: reactiveData, reactiveProp, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactiveData", function() { return reactiveData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactiveProp", function() { return reactiveProp; });
function dataHandler(newData, oldData) {
  if (oldData) {
    var chart = this.$data._chart;
    var newDatasetLabels = newData.datasets.map(function (dataset) {
      return dataset.label;
    });
    var oldDatasetLabels = oldData.datasets.map(function (dataset) {
      return dataset.label;
    });
    var oldLabels = JSON.stringify(oldDatasetLabels);
    var newLabels = JSON.stringify(newDatasetLabels);

    if (newLabels === oldLabels && oldData.datasets.length === newData.datasets.length) {
      newData.datasets.forEach(function (dataset, i) {
        var oldDatasetKeys = Object.keys(oldData.datasets[i]);
        var newDatasetKeys = Object.keys(dataset);
        var deletionKeys = oldDatasetKeys.filter(function (key) {
          return key !== '_meta' && newDatasetKeys.indexOf(key) === -1;
        });
        deletionKeys.forEach(function (deletionKey) {
          delete chart.data.datasets[i][deletionKey];
        });

        for (var attribute in dataset) {
          if (dataset.hasOwnProperty(attribute)) {
            chart.data.datasets[i][attribute] = dataset[attribute];
          }
        }
      });

      if (newData.hasOwnProperty('labels')) {
        chart.data.labels = newData.labels;
        this.$emit('labels:update');
      }

      if (newData.hasOwnProperty('xLabels')) {
        chart.data.xLabels = newData.xLabels;
        this.$emit('xlabels:update');
      }

      if (newData.hasOwnProperty('yLabels')) {
        chart.data.yLabels = newData.yLabels;
        this.$emit('ylabels:update');
      }

      chart.update();
      this.$emit('chart:update');
    } else {
      if (chart) {
        chart.destroy();
        this.$emit('chart:destroy');
      }

      this.renderChart(this.chartData, this.options);
      this.$emit('chart:render');
    }
  } else {
    if (this.$data._chart) {
      this.$data._chart.destroy();

      this.$emit('chart:destroy');
    }

    this.renderChart(this.chartData, this.options);
    this.$emit('chart:render');
  }
}

var reactiveData = {
  data: function data() {
    return {
      chartData: null
    };
  },
  watch: {
    'chartData': dataHandler
  }
};
var reactiveProp = {
  props: {
    chartData: {
      type: Object,
      required: true,
      default: function _default() {}
    }
  },
  watch: {
    'chartData': dataHandler
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  reactiveData: reactiveData,
  reactiveProp: reactiveProp
});

/***/ }),

/***/ "./resources/js/src/views/beranda/ChartjsBarChart.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/beranda/ChartjsBarChart.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsBarChart_vue_vue_type_template_id_fbc32efc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsBarChart.vue?vue&type=template&id=fbc32efc& */ "./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=template&id=fbc32efc&");
/* harmony import */ var _ChartjsBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChartjsBarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ChartjsBarChart_vue_vue_type_style_index_0_id_fbc32efc_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChartjsBarChart.vue?vue&type=style&index=0&id=fbc32efc&lang=scss& */ "./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=style&index=0&id=fbc32efc&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ChartjsBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChartjsBarChart_vue_vue_type_template_id_fbc32efc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChartjsBarChart_vue_vue_type_template_id_fbc32efc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/beranda/ChartjsBarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsBarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=style&index=0&id=fbc32efc&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=style&index=0&id=fbc32efc&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_style_index_0_id_fbc32efc_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsBarChart.vue?vue&type=style&index=0&id=fbc32efc&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=style&index=0&id=fbc32efc&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_style_index_0_id_fbc32efc_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_style_index_0_id_fbc32efc_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_style_index_0_id_fbc32efc_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_style_index_0_id_fbc32efc_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=template&id=fbc32efc&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=template&id=fbc32efc& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_template_id_fbc32efc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsBarChart.vue?vue&type=template&id=fbc32efc& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/ChartjsBarChart.vue?vue&type=template&id=fbc32efc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_template_id_fbc32efc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsBarChart_vue_vue_type_template_id_fbc32efc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ }),

/***/ "./resources/js/src/views/beranda/chartjsData.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/beranda/chartjsData.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");


// colors
var chartColors = {
  primaryColorShade: '#836AF9',
  yellowColor: '#ffe800',
  successColorShade: '#28dac6',
  warningColorShade: '#ffe802',
  warningLightColor: '#FDAC34',
  infoColorShade: '#299AFF',
  greyColor: '#4F5D70',
  blueColor: '#2c9aff',
  blueLightColor: '#84D0FF',
  greyLightColor: '#EDF1F4',
  tooltipShadow: 'rgba(0, 0, 0, 0.25)',
  lineChartPrimary: '#666ee8',
  lineChartDanger: '#ff4961',
  labelColor: '#6e6b7b',
  grid_line_color: 'rgba(200, 200, 200, 0.2)'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  horizontalBarChart: {
    /*options: {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'top',
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: $themeColors.light,
        titleFontColor: $themeColors.dark,
        bodyFontColor: $themeColors.dark,
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false,
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        },
        xAxes: [
          {
            display: true,
            gridLines: {
              zeroLineColor: chartColors.grid_line_color,
              borderColor: 'transparent',
              color: chartColors.grid_line_color,
              drawTicks: false,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              min: 0,
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              display: false,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
      },
    },
    data: {
      labels: ['MON', 'TUE', 'WED ', 'THU', 'FRI', 'SAT', 'SUN'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [710, 350, 470, 580, 230, 460, 120],
          backgroundColor: $themeColors.info,
          borderColor: 'transparent',
          barThickness: 15,
          stack: 'Stack 0',
        },
        {
          label: 'Dataset 2',
          data: [720, 360, 480, 590, 240, 470, 130],
          backgroundColor: $themeColors.danger,
          borderColor: 'transparent',
          barThickness: 15,
          stack: 'Stack 1',
        },
      ],
    },*/
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    },
    data: {
      labels: ["2015", "2014", "2013", "2012", "2011"],
      datasets: [{
        data: [727, 589, 537, 543, 574],
        backgroundColor: "rgba(63,103,126,1)",
        hoverBackgroundColor: "rgba(50,90,100,1)"
      }, {
        data: [238, 553, 746, 884, 903],
        backgroundColor: "rgba(163,103,126,1)",
        hoverBackgroundColor: "rgba(140,85,100,1)"
      }, {
        data: [1238, 553, 746, 884, 903],
        backgroundColor: "rgba(63,203,226,1)",
        hoverBackgroundColor: "rgba(46,185,235,1)"
      }]
    }
  },
  lineChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: false,
      hover: {
        mode: 'label'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].white,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].black,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].black
      },
      layout: {
        padding: {
          top: -15,
          bottom: -25,
          left: -15
        }
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true
          },
          gridLines: {
            display: true,
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          ticks: {
            fontColor: chartColors.labelColor
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true
          },
          ticks: {
            stepSize: 100,
            min: 0,
            max: 400,
            fontColor: chartColors.labelColor
          },
          gridLines: {
            display: true,
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          }
        }]
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 9
        }
      }
    },
    data: {
      labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
      datasets: [{
        data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375],
        label: 'Europe',
        borderColor: chartColors.lineChartDanger,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: chartColors.lineChartDanger,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].white,
        pointHoverBackgroundColor: chartColors.lineChartDanger,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: chartColors.tooltipShadow
      }, {
        data: [80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
        label: 'Asia',
        borderColor: chartColors.lineChartPrimary,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: chartColors.lineChartPrimary,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].white,
        pointHoverBackgroundColor: chartColors.lineChartPrimary,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: chartColors.tooltipShadow
      }, {
        data: [80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
        label: 'Africa',
        borderColor: chartColors.warningColorShade,
        lineTension: 0.5,
        pointStyle: 'circle',
        backgroundColor: chartColors.warningColorShade,
        fill: false,
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].white,
        pointHoverBackgroundColor: chartColors.warningColorShade,
        pointShadowOffsetX: 1,
        pointShadowOffsetY: 1,
        pointShadowBlur: 5,
        pointShadowColor: chartColors.tooltipShadow
      }]
    }
  },
  radarChart: {
    data: {
      labels: ['STA', 'STR', 'AGI', 'VIT', 'CHA', 'INT'],
      datasets: [{
        label: 'Donté Panlin',
        data: [25, 59, 90, 81, 60, 82],
        fill: true,
        backgroundColor: 'rgba(255,161,161, 0.9)',
        borderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent'
      }, {
        label: 'Mireska Sunbreeze',
        data: [40, 100, 40, 90, 40, 90],
        fill: true,
        backgroundColor: 'rgba(155,136,250, 0.9)',
        borderColor: 'transparent',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        position: 'top',
        labels: {
          padding: 25,
          fontColor: chartColors.labelColor
        }
      },
      tooltips: {
        enabled: false,
        custom: function custom(tooltip) {
          var tooltipEl = document.getElementById('tooltip');
          if (tooltip.body) {
            tooltipEl.style.display = 'block';
            if (tooltip.body[0].lines && tooltip.body[0].lines[0]) {
              // eslint-disable-next-line prefer-destructuring
              tooltipEl.innerHTML = tooltip.body[0].lines[0];
            }
          } else {
            setTimeout(function () {
              tooltipEl.style.display = 'none';
            }, 500);
          }
        }
      },
      gridLines: {
        display: false
      },
      scale: {
        ticks: {
          maxTicksLimit: 1,
          display: false,
          fontColor: chartColors.labelColor
        },
        gridLines: {
          color: chartColors.grid_line_color
        },
        angleLines: {
          color: chartColors.grid_line_color
        }
      }
    }
  },
  polarChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 10,
          fontColor: chartColors.labelColor
        }
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].dark
      },
      scale: {
        scaleShowLine: true,
        scaleLineWidth: 1,
        ticks: {
          display: false,
          fontColor: chartColors.labelColor
        },
        reverse: false,
        gridLines: {
          display: false
        }
      },
      animation: {
        animateRotate: false
      }
    },
    data: {
      labels: ['Africa', 'Asia', 'Europe', 'America', 'Antarctica', 'Australia'],
      datasets: [{
        label: 'Population (millions)',
        backgroundColor: [chartColors.primaryColorShade, chartColors.warningColorShade, _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].primary, chartColors.infoColorShade, chartColors.greyColor, chartColors.successColorShade],
        data: [19, 17.5, 15, 13.5, 11, 9],
        borderWidth: 0
      }]
    }
  },
  bubbleChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          ticks: {
            stepSize: 10,
            min: 0,
            max: 140,
            fontColor: chartColors.labelColor
          }
        }],
        yAxes: [{
          display: true,
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          ticks: {
            stepSize: 100,
            min: 0,
            max: 400,
            fontColor: chartColors.labelColor
          }
        }]
      },
      legend: {
        display: false
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].dark
      }
    },
    data: {
      animation: {
        duration: 10000
      },
      datasets: [{
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 20,
          y: 74,
          r: 10
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 30,
          y: 72,
          r: 5
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 10,
          y: 110,
          r: 5
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 40,
          y: 110,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 20,
          y: 135,
          r: 6
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 10,
          y: 160,
          r: 12
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 30,
          y: 165,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 40,
          y: 200,
          r: 20
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 90,
          y: 185,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 50,
          y: 240,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 60,
          y: 275,
          r: 10
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 70,
          y: 305,
          r: 5
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 80,
          y: 325,
          r: 4
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 50,
          y: 285,
          r: 5
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 60,
          y: 235,
          r: 5
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 70,
          y: 275,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 80,
          y: 290,
          r: 4
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 90,
          y: 250,
          r: 10
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 100,
          y: 220,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 120,
          y: 230,
          r: 4
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 110,
          y: 320,
          r: 15
        }]
      }, {
        backgroundColor: chartColors.warningColorShade,
        borderColor: chartColors.warningColorShade,
        data: [{
          x: 130,
          y: 330,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 100,
          y: 310,
          r: 5
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 110,
          y: 240,
          r: 5
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 120,
          y: 270,
          r: 7
        }]
      }, {
        backgroundColor: chartColors.primaryColorShade,
        borderColor: chartColors.primaryColorShade,
        data: [{
          x: 130,
          y: 300,
          r: 6
        }]
      }]
    }
  },
  doughnutChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      cutoutPercentage: 60,
      legend: {
        display: false
      },
      tooltips: {
        callbacks: {
          label: function label(tooltipItem, data) {
            var label = data.datasets[0].labels[tooltipItem.index] || '';
            var value = data.datasets[0].data[tooltipItem.index];
            var output = " ".concat(label, " : ").concat(value, " %");
            return output;
          }
        },
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].dark
      }
    },
    data: {
      datasets: [{
        labels: ['Tablet', 'Mobile', 'Desktop'],
        data: [10, 10, 80],
        backgroundColor: [chartColors.successColorShade, chartColors.warningLightColor, _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].primary],
        borderWidth: 0,
        pointStyle: 'rectRounded'
      }]
    }
  },
  scatterChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 800,
      title: {
        display: false,
        text: 'Chart.js Scatter Chart'
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].dark
      },
      scales: {
        xAxes: [{
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          ticks: {
            stepSize: 10,
            min: 0,
            max: 140,
            fontColor: chartColors.labelColor
          }
        }],
        yAxes: [{
          gridLines: {
            color: chartColors.grid_line_color,
            zeroLineColor: chartColors.grid_line_color
          },
          ticks: {
            stepSize: 100,
            min: 0,
            max: 400,
            fontColor: chartColors.labelColor
          }
        }]
      },
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 7
        }
      }
    },
    data: {
      datasets: [{
        label: 'iPhone',
        data: [{
          x: 72,
          y: 225
        }, {
          x: 81,
          y: 270
        }, {
          x: 90,
          y: 230
        }, {
          x: 103,
          y: 305
        }, {
          x: 103,
          y: 245
        }, {
          x: 108,
          y: 275
        }, {
          x: 110,
          y: 290
        }, {
          x: 111,
          y: 315
        }, {
          x: 109,
          y: 350
        }, {
          x: 116,
          y: 340
        }, {
          x: 113,
          y: 260
        }, {
          x: 117,
          y: 275
        }, {
          x: 117,
          y: 295
        }, {
          x: 126,
          y: 280
        }, {
          x: 127,
          y: 340
        }, {
          x: 133,
          y: 330
        }],
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].primary,
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }, {
        label: 'Samsung Note',
        data: [{
          x: 13,
          y: 95
        }, {
          x: 22,
          y: 105
        }, {
          x: 17,
          y: 115
        }, {
          x: 19,
          y: 130
        }, {
          x: 21,
          y: 125
        }, {
          x: 35,
          y: 125
        }, {
          x: 13,
          y: 155
        }, {
          x: 21,
          y: 165
        }, {
          x: 25,
          y: 155
        }, {
          x: 18,
          y: 190
        }, {
          x: 26,
          y: 180
        }, {
          x: 43,
          y: 180
        }, {
          x: 53,
          y: 202
        }, {
          x: 61,
          y: 165
        }, {
          x: 67,
          y: 225
        }],
        backgroundColor: chartColors.yellowColor,
        borderColor: 'transparent',
        pointRadius: 5
      }, {
        label: 'OnePlus',
        data: [{
          x: 70,
          y: 195
        }, {
          x: 72,
          y: 270
        }, {
          x: 98,
          y: 255
        }, {
          x: 100,
          y: 215
        }, {
          x: 87,
          y: 240
        }, {
          x: 94,
          y: 280
        }, {
          x: 99,
          y: 300
        }, {
          x: 102,
          y: 290
        }, {
          x: 110,
          y: 275
        }, {
          x: 111,
          y: 250
        }, {
          x: 94,
          y: 280
        }, {
          x: 92,
          y: 340
        }, {
          x: 100,
          y: 335
        }, {
          x: 108,
          y: 330
        }],
        backgroundColor: chartColors.successColorShade,
        borderColor: 'transparent',
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        pointRadius: 5
      }]
    }
  },
  lineAreaChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8
        }
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].light,
        titleFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].dark,
        bodyFontColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].dark
      },
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            color: 'transparent',
            zeroLineColor: chartColors.grid_line_color
          },
          scaleLabel: {
            display: true
          },
          ticks: {
            fontColor: chartColors.labelColor
          }
        }],
        yAxes: [{
          display: true,
          gridLines: {
            color: 'transparent',
            zeroLineColor: chartColors.grid_line_color
          },
          ticks: {
            stepSize: 100,
            min: 0,
            max: 400,
            fontColor: chartColors.labelColor
          },
          scaleLabel: {
            display: true
          }
        }]
      }
    },
    data: {
      labels: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12', ''],
      datasets: [{
        label: 'Africa',
        data: [40, 55, 45, 75, 65, 55, 70, 60, 100, 98, 90, 120, 125, 140, 155],
        lineTension: 0,
        backgroundColor: chartColors.blueColor,
        pointStyle: 'circle',
        borderColor: 'transparent',
        pointRadius: 0.5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: chartColors.blueColor,
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].light
      }, {
        label: 'Asia',
        data: [70, 85, 75, 150, 100, 140, 110, 105, 160, 150, 125, 190, 200, 240, 275],
        lineTension: 0,
        backgroundColor: chartColors.blueLightColor,
        pointStyle: 'circle',
        borderColor: 'transparent',
        pointRadius: 0.5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: chartColors.blueLightColor,
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].light
      }, {
        label: 'Europe',
        data: [240, 195, 160, 215, 185, 215, 185, 200, 250, 210, 195, 250, 235, 300, 315],
        lineTension: 0,
        backgroundColor: chartColors.greyLightColor,
        pointStyle: 'circle',
        borderColor: 'transparent',
        pointRadius: 0.5,
        pointHoverRadius: 5,
        pointHoverBorderWidth: 5,
        pointBorderColor: 'transparent',
        pointHoverBackgroundColor: chartColors.greyLightColor,
        pointHoverBorderColor: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeColors"].light
      }]
    }
  }
});

/***/ }),

/***/ "./resources/js/src/views/beranda/charts-components/ChartjsComponentHorizontalBarChart.vue":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/beranda/charts-components/ChartjsComponentHorizontalBarChart.vue ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChartjsComponentHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js& */ "./resources/js/src/views/beranda/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ChartjsComponentHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/beranda/charts-components/ChartjsComponentHorizontalBarChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/beranda/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/src/views/beranda/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/beranda/charts-components/ChartjsComponentHorizontalBarChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartjsComponentHorizontalBarChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);