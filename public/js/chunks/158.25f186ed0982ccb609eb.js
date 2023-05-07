(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[158],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/dashboard/berita-acara/Penerimaan.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"],
    BFormDatepicker: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormDatepicker"]
  },
  data: function data() {
    return {
      fire: false,
      isBusy: true,
      data: {},
      hari: '-',
      tanggal: '-',
      bulan: '-',
      tahun: '-',
      form_tanggal: '',
      nama: '',
      instansi: '',
      jabatan: '',
      pengawas: '',
      negara: '',
      provinsi: '',
      kabupaten: '',
      feedback_tanggal: '',
      feedback_nama: '',
      feedback_jabatan: '',
      feedback_instansi: '',
      feedback_pengawas: '',
      feedback_negara: '',
      feedback_provinsi: '',
      feedback_kabupaten: '',
      tanggalState: null,
      namaState: null,
      jabatanState: null,
      instansiState: null,
      pengawasState: null,
      negaraState: null,
      provinsiState: null,
      kabupatenState: null,
      start_3: '',
      end_3: '',
      jumlah_3: '',
      start_4: '',
      end_4: '',
      jumlah_4: '',
      link_cetak: '#'
    };
  },
  created: function created() {
    this.getBeritaAcara();
  },
  methods: {
    getBeritaAcara: function getBeritaAcara() {
      var _this = this;
      this.$http.get('/referensi/berita-acara', {
        params: {
          jenis: 'terima'
        }
      }).then(function (response) {
        _this.data = response.data.berita_acara;
        if (_this.data) {
          _this.nama = _this.data.nama;
          _this.instansi = _this.data.instansi;
          _this.jabatan = _this.data.jabatan;
          _this.pengawas = _this.data.pengawas;
          _this.negara = _this.data.negara;
          _this.provinsi = _this.data.provinsi;
          _this.kabupaten = _this.data.kabupaten;
          _this.link_cetak = app_url + '/cetak/berita-acara-penerimaan/' + _this.data.id;
        } else {
          if (_this.hasRole('sekolah')) {
            console.log(_this.user);
            _this.jabatan = 'Kepala Sekolah';
            _this.instansi = _this.user.name;
            _this.kabupaten = _this.user.sekolah ? _this.user.sekolah.kabupaten : '';
            _this.provinsi = _this.user.sekolah ? _this.user.sekolah.provinsi : '';
          }
        }
        var blangko_3_tahun = response.data.blangko_3_tahun;
        if (blangko_3_tahun) {
          _this.jumlah_3 = blangko_3_tahun.jumlah;
          _this.start_3 = blangko_3_tahun.start;
          _this.end_3 = blangko_3_tahun.end;
        }
        var blangko_4_tahun = response.data.blangko_4_tahun;
        if (blangko_4_tahun) {
          _this.jumlah_4 = blangko_4_tahun.jumlah;
          _this.start_4 = blangko_4_tahun.start;
          _this.end_4 = blangko_4_tahun.end;
        }
        var waktu = response.data.waktu;
        _this.hari = waktu.hari;
        _this.tanggal = waktu.tanggal;
        _this.bulan = waktu.bulan;
        _this.tahun = waktu.tahun;
        _this.fire = _this.user.fire !== '0' ? true : false;
        _this.isBusy = false;
      });
    },
    checkFormValidity: function checkFormValidity() {
      var valid = this.$refs.form.checkValidity();
      this.namaState = valid;
      this.jabatanState = valid;
      this.instansiState = valid;
      this.pengawasState = valid;
      this.negaraState = valid;
      this.provinsiState = valid;
      this.kabupatenState = valid;
      return valid;
    },
    resetModal: function resetModal() {
      this.nama = '';
      this.instansi = '';
      this.jabatan = '';
      this.pengawas = '';
      this.negara = '';
      this.provinsi = '';
      this.kabupaten = '';
      this.namaState = null;
      this.jabatanState = null;
      this.instansiState = null;
      this.pengawasState = null;
      this.negaraState = null;
      this.provinsiState = null;
      this.kabupatenState = null;
      this.getBeritaAcara();
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
      this.$http.post('/referensi/berita-acara', {
        user_id: this.user.user_id,
        jenis: 'terima',
        tanggal: this.form_tanggal,
        nama: this.nama,
        instansi: this.instansi,
        jabatan: this.jabatan,
        pengawas: this.pengawas,
        negara: this.negara,
        provinsi: this.provinsi,
        kabupaten: this.kabupaten
      }).then(function (response) {
        var data = response.data;
        if (data.errors) {
          _this2.feedback_tanggal = data.errors.tanggal ? data.errors.tanggal[0] : '';
          _this2.feedback_nama = data.errors.nama ? data.errors.nama[0] : '';
          _this2.feedback_jabatan = data.errors.jabatan ? data.errors.jabatan[0] : '';
          _this2.feedback_instansi = data.errors.instansi ? data.errors.instansi[0] : '';
          _this2.feedback_pengawas = data.errors.pengawas ? data.errors.pengawas[0] : '';
          _this2.feedback_negara = data.errors.negara ? data.errors.negara[0] : '';
          _this2.feedback_provinsi = data.errors.provinsi ? data.errors.provinsi[0] : '';
          _this2.feedback_kabupaten = data.errors.kabupaten ? data.errors.kabupaten[0] : '';
          _this2.tanggalState = data.errors.tanggal ? false : null;
          _this2.namaState = data.errors.nama ? false : null;
          _this2.jabatanState = data.errors.jabatan ? false : null;
          _this2.instansiState = data.errors.instansi ? false : null;
          _this2.pengawasState = data.errors.pengawas ? false : null;
          _this2.negaraState = data.errors.negara ? false : null;
          _this2.provinsiState = data.errors.provinsi ? false : null;
          _this2.kabupatenState = data.errors.kabupaten ? false : null;
        } else {
          _this2.$swal({
            icon: data.icon,
            title: data.title,
            text: data.text,
            customClass: {
              confirmButton: 'btn btn-success'
            }
          }).then(function (result) {
            _this2.$bvModal.hide('berita-acara');
            _this2.getBeritaAcara();
          });
        }
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
var ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../../../../node_modules/css-loader/dist/cjs.js!sweetalert2/dist/sweetalert2.min.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sweetalert2/dist/sweetalert2.min.css");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);
// Module
exports.push([module.i, "[dir] .swal2-container .swal2-popup {\n  border-radius: 0.428rem;\n  padding-bottom: 1.5rem;\n}\n.swal2-container .swal2-popup .swal2-close:focus {\n  outline: none;\n}\n[dir] .swal2-container .swal2-popup .swal2-close:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup .swal2-content {\n  color: #6e6b7b;\n}\n.swal2-container .swal2-popup .swal2-title {\n  font-size: 1.35rem;\n  font-weight: inherit;\n  color: #5e5873;\n}\n[dir] .swal2-container .swal2-popup button.swal2-confirm:focus {\n  box-shadow: none;\n}\n.swal2-container .swal2-popup input.swal2-input {\n  height: 2.714rem;\n  font-size: 0.9rem;\n  color: #6e6b7b;\n  line-height: 1.45;\n}\n[dir] .swal2-container .swal2-popup input.swal2-input {\n  padding: 0.438rem 1rem;\n  border-color: #d8d6de;\n  border-radius: 0.357rem;\n}\n[dir] .swal2-container .swal2-popup input.swal2-input:focus {\n  border-color: #7367f0 !important;\n  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n.swal2-container .swal2-popup .swal2-select {\n  width: 100%;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step {\n  background-color: #7367f0;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step-line, [dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step ~ .swal2-progress-step {\n  background-color: #b3adf7;\n}\n[dir] .swal2-container .swal2-popup .swal2-progress-steps .swal2-progress-step-line {\n  background-color: #7367f0;\n}\n.swal2-container .swal2-popup pre {\n  min-height: 1.35rem;\n}\n[dir] .swal2-container .swal2-popup pre {\n  margin-top: 0.5rem;\n}\n.swal2-container .swal2-popup .swal2-footer {\n  color: #6e6b7b;\n}\n[dir] .swal2-container .swal2-popup .swal2-footer {\n  border-color: #ebe9f1;\n}\n.dark-layout .swal2-container .swal2-popup .swal2-title {\n  color: #d0d2d6;\n}\n[dir] .dark-layout .swal2-container .swal2-modal {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-title {\n  color: #d0d2d6;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-header .swal2-icon-text {\n  color: inherit;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-left, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-circular-line-right, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-success-fix, [dir] .dark-layout .swal2-container .swal2-modal .swal2-header .swal2-animate-success-icon {\n  background-color: #283046 !important;\n}\n.dark-layout .swal2-container .swal2-modal input.swal2-input {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal input.swal2-input {\n  border-color: #3b4253;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-content,\n.dark-layout .swal2-container .swal2-modal .swal2-html-container {\n  color: #b4b7bd;\n}\n.dark-layout .swal2-container .swal2-modal pre,\n.dark-layout .swal2-container .swal2-modal code {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-input {\n  background-color: #283046;\n}\n.dark-layout .swal2-container .swal2-modal .swal2-footer {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-modal .swal2-footer {\n  border-color: #3b4253;\n}\n.dark-layout .swal2-container .swal2-validation-message {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .swal2-container .swal2-validation-message {\n  background-color: #161d31;\n}\nhtml[dir=rtl] .swal2-rtl .swal2-close {\n  left: 0;\n  right: auto;\n}", ""]);
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
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.jumlah_3,
                  expression: "jumlah_3",
                },
              ],
              staticClass: "heading-elements",
            },
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
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.data,
                      expression: "data",
                    },
                  ],
                  attrs: {
                    variant: "success",
                    href: _vm.link_cetak,
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
          _c("tr", [
            _vm.jumlah_3
              ? _c("td", [
                  _vm._v(_vm._s(_vm.jumlah_3) + " lembar Blangko Ijazah"),
                ])
              : _c("td", [_vm._v("-")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm.jumlah_3
              ? _c("td", [
                  _vm._v(
                    "Nomor Urut " +
                      _vm._s(_vm.start_3) +
                      " s/d " +
                      _vm._s(_vm.end_3)
                  ),
                ])
              : _c("td", [_vm._v("-")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _c("td", { attrs: { rowspan: "3" } }, [
              _vm._v("Blangko Ijazah SMK Program 4 Tahun"),
            ]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm.jumlah_4
              ? _c("td", [
                  _vm._v(_vm._s(_vm.jumlah_4) + " lembar Blangko Ijazah"),
                ])
              : _c("td", [_vm._v("-")]),
          ]),
          _vm._v(" "),
          _c("tr", [
            _vm.jumlah_4
              ? _c("td", [
                  _vm._v(
                    "Nomor Urut " +
                      _vm._s(_vm.start_4) +
                      " s/d " +
                      _vm._s(_vm.end_4)
                  ),
                ])
              : _c("td", [_vm._v("-")]),
          ]),
        ]),
        _vm._v(" "),
        _c("table", { staticClass: "mt-1", attrs: { width: "100%" } }, [
          _c("tr", [
            _c("td", [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.data ? _vm.data.kabupaten : "-") +
                  "\n          "
              ),
              _c("br"),
              _vm._v(
                "\n          " +
                  _vm._s(_vm.data ? _vm.data.jabatan : "-") +
                  "\n          "
              ),
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
            _c(
              "td",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.hasRole("sekolah"),
                    expression: "hasRole('sekolah')",
                  },
                ],
              },
              [
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
                _vm._v(
                  "\n          " +
                    _vm._s(_vm.data ? _vm.data.pengawas : "-") +
                    "\n        "
                ),
              ]
            ),
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
            "ok-title": "Simpan",
            "cancel-title": "Batal",
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
                    label: "Tanggal",
                    "label-for": "tanggal",
                    "invalid-feedback": _vm.feedback_tanggal,
                    state: _vm.tanggalState,
                  },
                },
                [
                  _c("b-form-datepicker", {
                    attrs: {
                      id: "tanggal",
                      state: _vm.tanggalState,
                      locale: "id-ID",
                    },
                    model: {
                      value: _vm.form_tanggal,
                      callback: function ($$v) {
                        _vm.form_tanggal = $$v
                      },
                      expression: "form_tanggal",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Nama",
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
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Jabatan",
                    "label-for": "jabatan",
                    "invalid-feedback": _vm.feedback_jabatan,
                    state: _vm.jabatanState,
                  },
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "jabatan", state: _vm.jabatanState },
                    model: {
                      value: _vm.jabatan,
                      callback: function ($$v) {
                        _vm.jabatan = $$v
                      },
                      expression: "jabatan",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Instansi",
                    "label-for": "instansi",
                    "invalid-feedback": _vm.feedback_instansi,
                    state: _vm.instansiState,
                  },
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "instansi", state: _vm.instansiState },
                    model: {
                      value: _vm.instansi,
                      callback: function ($$v) {
                        _vm.instansi = $$v
                      },
                      expression: "instansi",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Kabupaten/Kota",
                    "label-for": "kabupaten",
                    "invalid-feedback": _vm.feedback_kabupaten,
                    state: _vm.kabupatenState,
                  },
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "kabupaten", state: _vm.kabupatenState },
                    model: {
                      value: _vm.kabupaten,
                      callback: function ($$v) {
                        _vm.kabupaten = $$v
                      },
                      expression: "kabupaten",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Provinsi",
                    "label-for": "provinsi",
                    "invalid-feedback": _vm.feedback_provinsi,
                    state: _vm.provinsiState,
                  },
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "provinsi", state: _vm.provinsiState },
                    model: {
                      value: _vm.provinsi,
                      callback: function ($$v) {
                        _vm.provinsi = $$v
                      },
                      expression: "provinsi",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.fire,
                      expression: "fire",
                    },
                  ],
                  attrs: {
                    label: "Negara",
                    "label-for": "negara",
                    "invalid-feedback": _vm.feedback_negara,
                    state: _vm.negaraState,
                  },
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "negara", state: _vm.negaraState },
                    model: {
                      value: _vm.negara,
                      callback: function ($$v) {
                        _vm.negara = $$v
                      },
                      expression: "negara",
                    },
                  }),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.hasRole("sekolah"),
                      expression: "hasRole('sekolah')",
                    },
                  ],
                  attrs: {
                    label: "Pengawas Pembina",
                    "label-for": "pengawas",
                    "invalid-feedback": _vm.feedback_pengawas,
                    state: _vm.pengawasState,
                  },
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "pengawas", state: _vm.pengawasState },
                    model: {
                      value: _vm.pengawas,
                      callback: function ($$v) {
                        _vm.pengawas = $$v
                      },
                      expression: "pengawas",
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