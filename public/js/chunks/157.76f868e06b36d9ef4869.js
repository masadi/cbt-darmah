(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[157],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d_WinNMP_WWW_simazah_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardTitle"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCardBody"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"]
  },
  data: function data() {
    var _ref;
    return _ref = {
      fire: false,
      isBusy: true,
      data: {},
      hari: 'Senin',
      tanggal: 'Tiga Puluh',
      bulan: 'Januari',
      tahun: 'Dua Ribu Dua Puluh Tiga',
      nama: 'asd',
      jabatan: 'Kepala',
      instansi: '',
      kabupaten: '',
      provinsi: '',
      namaState: null,
      jabatanState: null,
      pengawasState: null,
      negaraState: null,
      provinsiState: null,
      kabupatenState: null
    }, Object(d_WinNMP_WWW_simazah_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "nama", ''), Object(d_WinNMP_WWW_simazah_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "jabatan", ''), Object(d_WinNMP_WWW_simazah_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "pengawas", ''), Object(d_WinNMP_WWW_simazah_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "negara", ''), Object(d_WinNMP_WWW_simazah_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "provinsi", ''), Object(d_WinNMP_WWW_simazah_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "kabupaten", ''), _ref;
  },
  created: function created() {
    var _this = this;
    this.$http.get('/referensi/berita-acara', {
      params: {
        jenis: 'terima'
      }
    }).then(function (response) {
      _this.data = response.data.berita_acara;
      _this.fire = _this.user.fire !== '0' ? true : false;
      _this.isBusy = false;
    });
    /*this.$ability.update([
      { 'action': 'manage' },
      { 'subject': 'all' }
    ])*/
  },

  methods: {
    checkFormValidity: function checkFormValidity() {
      var valid = this.$refs.form.checkValidity();
      this.namaState = valid;
      return valid;
    },
    resetModal: function resetModal() {
      this.nama = '';
      this.namaState = null;
    },
    handleOk: function handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit: function handleSubmit() {
      var _this2 = this;
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      this.$nextTick(function () {
        _this2.$bvModal.hide('berita-acara');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=style&index=0&id=74001216&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=style&index=0&id=74001216&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "[dir] .card-statistics .statistics-body {\n  padding: 2rem 2.4rem !important;\n}\n@media (max-width: 991.98px) {\n[dir] .card-statistics .card-header, [dir] .card-statistics .statistics-body {\n    padding: 1.5rem !important;\n}\n}\n[dir] .card-company-table thead th {\n  border: 0;\n}\n[dir] .card-company-table td {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n[dir] .card-company-table td .avatar {\n  background-color: #f8f8f8;\n}\n[dir=ltr] .card-company-table td .avatar {\n  margin-right: 2rem;\n}\n[dir=rtl] .card-company-table td .avatar {\n  margin-left: 2rem;\n}\n[dir] .card-company-table td .avatar img {\n  border-radius: 0;\n}\n[dir] .card-browser-states .browser-states:first-child {\n  margin-top: 0;\n}\n[dir] .card-browser-states .browser-states:not(:first-child) {\n  margin-top: 1.7rem;\n}\n[dir] .card-transaction .transaction-item:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n[dir] .card-company-table td .b-avatar.badge-light-company {\n  background-color: #f8f8f8;\n}\n[dir=ltr] .card-company-table td .b-avatar.badge-light-company {\n  margin-right: 2rem;\n}\n[dir=rtl] .card-company-table td .b-avatar.badge-light-company {\n  margin-left: 2rem;\n}\n.apexcharts-canvas line[stroke=transparent] {\n  display: none;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip {\n  background: #fff;\n  border-color: #ebe9f1;\n}\n.apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  font-weight: 600;\n}\n[dir] .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #fff !important;\n  border-color: #ebe9f1 !important;\n}\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-label,\n.apexcharts-canvas .apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #f8f8f8;\n  border-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #f8f8f8;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #ebe9f1;\n}\n[dir] .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #f8f8f8;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #ebe9f1;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-right-color: #ebe9f1;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #f8f8f8;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-right-color: #f8f8f8;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #ebe9f1;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-left-color: #ebe9f1;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #f8f8f8;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-left-color: #f8f8f8;\n}\n.apexcharts-canvas .apexcharts-text,\n.apexcharts-canvas .apexcharts-tooltip-text,\n.apexcharts-canvas .apexcharts-datalabel-label,\n.apexcharts-canvas .apexcharts-datalabel {\n  font-family: \"Montserrat\", Helvetica, Arial, serif !important;\n  fill: #6e6b7b;\n  font-weight: 400;\n  filter: none;\n}\n.apexcharts-canvas .apexcharts-pie-label {\n  fill: white;\n  filter: none;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-pie-series .apexcharts-pie-area {\n  stroke-width: 0;\n}\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-label,\n.apexcharts-canvas .apexcharts-pie .apexcharts-datalabel-value {\n  font-size: 1.5rem;\n}\n[dir] .apexcharts-canvas .apexcharts-marker {\n  box-shadow: none;\n}\n[dir] .apexcharts-canvas .apexcharts-legend-series + .apexcharts-legend-series {\n  margin-top: 0.625rem;\n}\n.apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #6e6b7b !important;\n  font-size: 1rem !important;\n}\n[dir=ltr] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-left: 0.5rem;\n}\n[dir=rtl] .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  margin-right: 0.5rem;\n}\n.apexcharts-canvas .apexcharts-xcrosshairs,\n.apexcharts-canvas .apexcharts-ycrosshairs,\n.apexcharts-canvas .apexcharts-gridline {\n  stroke: #ebe9f1;\n}\n.apexcharts-legend.position-bottom {\n  bottom: 3rem;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-tick,\n.dark-layout .apexcharts-canvas line {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-heatmap .apexcharts-heatmap-rect {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radialbar .apexcharts-radialbar-track .apexcharts-radialbar-area {\n  stroke: #161d31;\n}\n.dark-layout .apexcharts-canvas .apexcharts-radar-series polygon {\n  fill: #161d31;\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-datalabels-group .apexcharts-datalabel-value {\n  fill: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip {\n  background: #283046;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-title {\n  background: #283046 !important;\n  border-color: #3b4253 !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-label,\n.dark-layout .apexcharts-canvas .apexcharts-tooltip .apexcharts-tooltip-text-value {\n  color: #fff;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-bottom::after {\n  border-bottom-color: #161d31;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top:before {\n  border-top-color: #3b4253;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip-top::after {\n  border-top-color: #161d31;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-left-color: #3b4253;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:before {\n  border-right-color: #3b4253;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-left-color: #161d31;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-left:after {\n  border-right-color: #161d31;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-right-color: #3b4253;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:before {\n  border-left-color: #3b4253;\n}\n[dir=ltr] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-right-color: #161d31;\n}\n[dir=rtl] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip-right:after {\n  border-left-color: #161d31;\n}\n[dir] .dark-layout .apexcharts-canvas .apexcharts-xaxistooltip, [dir] .dark-layout .apexcharts-canvas .apexcharts-yaxistooltip {\n  background: #161d31;\n  border-color: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-yaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-xaxistooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-yaxistooltip .apexcharts-yaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xaxistooltip .apexcharts-xaxistooltip-text {\n  color: #fff;\n}\n.dark-layout .apexcharts-canvas .apexcharts-yaxis-label,\n.dark-layout .apexcharts-canvas .apexcharts-xaxis-label,\n.dark-layout .apexcharts-canvas .apexcharts-tooltip-text,\n.dark-layout .apexcharts-canvas .apexcharts-datalabel-label {\n  fill: #b4b7bd;\n}\n.dark-layout .apexcharts-canvas .apexcharts-marker {\n  stroke: #3b4253;\n}\n.dark-layout .apexcharts-canvas .apexcharts-legend-series .apexcharts-legend-text {\n  color: #b4b7bd !important;\n}\n.dark-layout .apexcharts-canvas .apexcharts-xcrosshairs,\n.dark-layout .apexcharts-canvas .apexcharts-ycrosshairs,\n.dark-layout .apexcharts-canvas .apexcharts-gridline {\n  stroke: #3b4253;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=template&id=74001216&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=template&id=74001216& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
        [
          _c("b-card-title", [
            _c("h2", [_vm._v("Berita Acara Penerimaan Blanko Ijazah")]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "heading-elements" },
            [
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "b-modal",
                      rawName: "v-b-modal.berita-acara",
                      modifiers: { "berita-acara": true },
                    },
                  ],
                  attrs: { variant: "danger", size: "sm" },
                },
                [_vm._v("Edit Data")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  attrs: {
                    variant: "success",
                    href: "http://google.com",
                    target: "_blank",
                  },
                },
                [_vm._v("Cetak")]
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("b-card-body", [
        _c("p", [
          _vm._v(
            "Pada hari " +
              _vm._s(_vm.hari) +
              " tanggal " +
              _vm._s(_vm.tanggal) +
              " bulan " +
              _vm._s(_vm.bulan) +
              " tahun " +
              _vm._s(_vm.tahun) +
              ", Kami yang bertanda tangan dibawah ini:"
          ),
        ]),
        _vm._v(" "),
        _c("table", [
          _c("tr", [
            _c("td", [_vm._v("Nama")]),
            _vm._v(" "),
            _c("td", [_vm._v(": " + _vm._s(_vm.data ? _vm.data.nama : "-"))]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Jabatan")]),
            _vm._v(" "),
            _c("td", [
              _vm._v(": " + _vm._s(_vm.data ? _vm.data.jabatan : "-")),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Instansi")]),
            _vm._v(" "),
            _c("td", [
              _vm._v(": " + _vm._s(_vm.data ? _vm.data.instansi : "-")),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Kab/Kota")]),
            _vm._v(" "),
            _c("td", [
              _vm._v(": " + _vm._s(_vm.data ? _vm.data.kabupaten : "-")),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", [_vm._v("Provinsi")]),
            _vm._v(" "),
            _c("td", [
              _vm._v(": " + _vm._s(_vm.data ? _vm.data.provinsi : "-")),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "tr",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.fire,
                  expression: "fire",
                },
              ],
            },
            [
              _c("td", [_vm._v("Negara : " + _vm._s(_vm.user.fire))]),
              _vm._v(" "),
              _c("td", [
                _vm._v(": " + _vm._s(_vm.data ? _vm.data.negara : "-")),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "mt-1" }, [
          _vm._v(
            "Dengan ini menyatakan telah menerima Blangko Ijazah dengan rincian sebagai berikut:"
          ),
        ]),
        _vm._v(" "),
        _c("table", { staticClass: "table table-bordered" }, [
          _c("tr", [
            _c("td", { attrs: { rowspan: "3", width: "30%" } }, [
              _vm._v("Blangko Ijazah SMK Program 3 Tahun"),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [_c("td", [_vm._v("100 lembar Blangko Ijazah")])]),
          _vm._v(" "),
          _c("tr", [_c("td", [_vm._v("Nomor Urut 1 s/d 100")])]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { attrs: { rowspan: "3" } }, [
              _vm._v("Blangko Ijazah SMK Program 4 Tahun"),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [_c("td", [_vm._v("100 lembar Blangko Ijazah")])]),
          _vm._v(" "),
          _c("tr", [_c("td", [_vm._v("Nomor Urut 1 s/d 100")])]),
        ]),
        _vm._v(" "),
        _c("table", { staticClass: "mt-1", attrs: { width: "100%" } }, [
          _c("tr", [
            _c("td", [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.data ? _vm.data.kabupaten : "kab") +
                  "\n          "
              ),
              _c("br"),
              _vm._v("\n          Kepala ...\n          "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(
                "\n          " +
                  _vm._s(_vm.data ? _vm.data.nama : "-") +
                  "\n        "
              ),
            ]),
            _vm._v(" "),
            _c("td", [
              _vm._v("\n          Mengetahui;\n          "),
              _c("br"),
              _vm._v("\n          Pengawas Pembina\n          "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("br"),
              _vm._v("\n          ......................\n        "),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "berita-acara",
            title: "Edit Data Berita Acara Penerimaan Blangko Ijazah",
          },
          on: {
            show: _vm.resetModal,
            hidden: _vm.resetModal,
            ok: _vm.handleOk,
          },
        },
        [
          _c(
            "form",
            {
              ref: "form",
              on: {
                submit: function ($event) {
                  $event.stopPropagation()
                  $event.preventDefault()
                  return _vm.handleSubmit($event)
                },
              },
            },
            [
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Nama Kepala Sekolah",
                    "label-for": "nama",
                    "invalid-feedback": _vm.feedback_nama,
                    state: _vm.namaState,
                  },
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "nama", state: _vm.namaState },
                    model: {
                      value: _vm.nama,
                      callback: function ($$v) {
                        _vm.nama = $$v
                      },
                      expression: "nama",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=style&index=0&id=74001216&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=style&index=0&id=74001216&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Penerimaan.vue?vue&type=style&index=0&id=74001216&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=style&index=0&id=74001216&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Penerimaan_vue_vue_type_template_id_74001216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Penerimaan.vue?vue&type=template&id=74001216& */ "./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=template&id=74001216&");
/* harmony import */ var _Penerimaan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Penerimaan.vue?vue&type=script&lang=js& */ "./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Penerimaan_vue_vue_type_style_index_0_id_74001216_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Penerimaan.vue?vue&type=style&index=0&id=74001216&lang=scss& */ "./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=style&index=0&id=74001216&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Penerimaan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Penerimaan_vue_vue_type_template_id_74001216___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Penerimaan_vue_vue_type_template_id_74001216___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/dashboard/berita-acara/Penerimaan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Penerimaan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Penerimaan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Penerimaan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=style&index=0&id=74001216&lang=scss&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=style&index=0&id=74001216&lang=scss& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Penerimaan_vue_vue_type_style_index_0_id_74001216_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Penerimaan.vue?vue&type=style&index=0&id=74001216&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=style&index=0&id=74001216&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Penerimaan_vue_vue_type_style_index_0_id_74001216_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Penerimaan_vue_vue_type_style_index_0_id_74001216_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Penerimaan_vue_vue_type_style_index_0_id_74001216_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Penerimaan_vue_vue_type_style_index_0_id_74001216_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=template&id=74001216&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=template&id=74001216& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Penerimaan_vue_vue_type_template_id_74001216___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Penerimaan.vue?vue&type=template&id=74001216& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=template&id=74001216&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Penerimaan_vue_vue_type_template_id_74001216___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Penerimaan_vue_vue_type_template_id_74001216___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);