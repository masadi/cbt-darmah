(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{117:function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));var r={data:function(){return{passwordFieldType:"password"}},methods:{togglePasswordVisibility:function(){this.passwordFieldType="password"===this.passwordFieldType?"text":"password"}}}},1324:function(t,a,e){"use strict";e(676)},1325:function(t,a,e){(a=e(19)(!1)).push([t.i,'.auth-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  min-height: calc(var(--vh, 1vh) * 100);\n  width: 100%;\n}\n.auth-wrapper .auth-inner {\n  width: 100%;\n  position: relative;\n}\n.auth-wrapper.auth-v1 {\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.auth-wrapper.auth-v1 .auth-inner:before {\n  width: 244px;\n  height: 243px;\n  content: " ";\n  position: absolute;\n  top: -54px;\n}\n[dir] .auth-wrapper.auth-v1 .auth-inner:before {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADzCAMAAACG9Mt0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA9KADAAQAAAABAAAA8wAAAADhQHfUAAAAyVBMVEUAAAD///+AgP+AgP9mZv+AgNWAgP9tbf9gYP+AgP9xcf9mZv+AZuaAgP9dXf90dOhiYv92dv9mZu5mZv93d+53d/9paf94afCAcfFrXvJra/9mZvJzZvJzc/JoaP96b/Rqav91aupsYvV2bOt2bPVxaPZ7cfZqavZyau1waPd4aO9xafBxafh4afB1bfh4avFuZ/F2afJzZvJzZ/N0aPN0bvN3bPR0ae5yZ/R3be93bfR1au9zafBxbPVzavV0a/F0a/ZyafFwaPKZm3nTAAAAQ3RSTlMAAQIEBQYGBwgICQoKCgsLDQ0PDw8PERESExMUFBQWFxgYGhoaGxsdHSAgIiIiIyQlJygqLCwtLi8vLzAzNDU3Nzg7h9vbHgAAA9RJREFUeNrt3ftS2kAUx/Fc1gSyWsErtuJdRDQiiteolb7/QzUoTm07k4AzObuu3/MCez45yWbzT36eZ6b8erO1e1B97baadd+zocJWmg0HaXe/+uqmg2GWtkLT5Lle1m9LdhG2+1lvzuiUO1knEF81yFc1N+35m15kZOGodz1vyLx+v2Lseq/erxtZd/NuweCTtfiwaWLOD5FnsqI7+VnP3y8afnEs3Es/1+H1qvETwuq18B7e6VlwLup1ZM8kWWQBOsrmHL7GVtxvYRZYgQ4ywae61ffsqH5Lbq20bQm6ncp9P2ehJegwE/u+rl95ttSwLrVSc2ANetAU28dSa9Cp2E623bUG3d2VWmn/wBq0XCugQYMGLdVKoOJaoiuok1NdXSW1WAUfRPtRUllflaJf5ZE/O9pXVbZUPTov5c+IDqvtRwStdTgLutoxy6GnGfYb2o+1I2gd+1OiqzfLocvVE7TSDqG1mgodaqfQZbvZC9rXjqG1X45WzqFVKVpk0LLo4lGP0ZGD6KgMnTiITkrQgXYQrYNitHISrYrRsZPouBhdcxJdK0YnTqKTYrR2Eq1BgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRoh9DH59ag86ACoSYOL61B55EUQk1s3VqDzsNHhJpYe7QGncfMSHUxaliCHgcKSXVxeWQJehwdJdXF4dAS9DgkTKqLxuibFeiXODixNi7OrEC/BP+JtbE0WrYA/RrxKNfH2YUF6NegSbk+Gk87xtErN6EsWm88fzeMXpwE9EruLns/l42io4dJFLPo2/Po1w+D6IW7t9Bt2SPx3vOOMfS7eHVZtN54ulg2go56138Ct4XRunE2Ovsmjg46WeddUoUWr6WL0fCoIYgO2/2s91fstDZQjcPL0ePt5flpdXUwqW46uMrS1j95JNpQrW0dHp9UV/uT2m416/8HVGg3qzhpBjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KC/FDpx0pwUo2tOomvF6NhJdFyMVk6iVTE6cBIdeF9vJyvZx/I/AzuIjsrQvoNovwzt4FamSs0Ojrp80PmvoB0zh940pb7azf1yg7t0LIt978uppzbnalfucDW92ZndLPRmKweGPduYJ+zoM5/Dk+gD5NdvLhXXPp88qcUqmEH5G5JZRs6cuxwIAAAAAElFTkSuQmCC");\n}\n[dir=ltr] .auth-wrapper.auth-v1 .auth-inner:before {\n  left: -46px;\n}\n[dir=rtl] .auth-wrapper.auth-v1 .auth-inner:before {\n  right: -46px;\n}\n@media (max-width: 575.98px) {\n.auth-wrapper.auth-v1 .auth-inner:before {\n    display: none;\n}\n}\n.auth-wrapper.auth-v1 .auth-inner:after {\n  width: 272px;\n  height: 272px;\n  content: " ";\n  position: absolute;\n  bottom: -55px;\n  z-index: -1;\n}\n[dir] .auth-wrapper.auth-v1 .auth-inner:after {\n  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAEQCAMAAABP1NsnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABEKADAAQAAAABAAABEAAAAAAQWxS2AAAAwFBMVEUAAAD///+AgICAgP9VVaqqVf+qqv+AgL+AgP9mZsxmZv+ZZv+AgNWAgP9tbdttbf+Sbf+AYN+AgN+AgP9xceNmZv+AZuaAZv90dOh0dP9qav+AauqAav+AgP92dv9tbf+Abe2Abf93Zu53d+6AcO94afCAcfF5a+R5a/JzZuaAZvKAc/J5bed5bfOAaPN6b/R1auqAavR6ZvV6cPV2bOuAbPV7aPZ2be2AbfZ7au17avZ3Zu53b+57a+97a/d4aO9J6CoeAAAAQHRSTlMAAQICAwMDBAQFBQUGBgcHBwgICAkKCgoLCwwMDAwNDg4ODw8QERITExQUFBUVFhcYGBkZGhobHBwdHR4eHx8gJ5uMWwAAA/FJREFUeNrt2G1XEkEYxvHZNk2xHGzdbKFl0cTwgdSkCKzu7/+t4pw6sAjtjIueE/f8r3fMO35nZnbuy5gVGcvfzJe0rnTfGI+MggGJRUZnbpPIhJKt88nU53JnFULvyISY6KAv8vPj0vr2rYwiE2Z2B9J+uNYcyyQxwWZvaeGH3G4bMjsvI/kcwTC/V+7kLoahlITzQojP3ZFgsJCh7IJQzpX0QFj4uMiY18eDMZ9bZCF9OQahnK6cm/Y7js0sh/LF3Auv1PlQd3MxbdXYIQspV44EEEAAAWTNDAYYkKdJbNMsLzYueZbaZ2iM46RVbHBaiZ9Js+nHEdli42N9XuSen5hGp1CQTuOJQDRsD99N4gMSpYWapNH6IJo83CIeILZQFesEaber79NCWRoukOpNEnW0gXQqD81w6ACxhbrYde7VuFCYeA2QRCNIsgZISyNIqz6IyhPjOjNVIFYniK3dmKU6QdLaJUimEySrDZLrBMlrgxRKU7sxCw/EMe0CAggggADySJCqxixIkKpNEh6IozELD8RxjQACCCCAAPJIkKrGLEgQXqqAAEJjxrQLCCCAAEJjRmNGY8a0CwgggABCYwYIfQgggNCYMe0CAggggNCY0ZjRmDHtAgIIIIAAQmNGHwIIIDRmTLuAAAIIIDRmNGY0Zky7gAACCCCA0JjRhwACCI0Z0y4ggAACCI0ZjRmNGdMuIIAAAgggNGb0IYAAQmPGtAsIIIAAQmNGY0ZjxrQLCCCAAAIIjRl9CCCA0Jgx7QICCCCA0JjRmNGYMe0CAggggABCY0YfAgggNGZMu4AAAgggNGY0ZjRmTLuAAAIIIIDQmNGHAAIIjRnTLiCAAAIIjRmNGY0ZIEy7gAACCCA0ZvQhgABCY8a0CwgggABCY0ZjBgiNGdMuIIAAAgiN2f/Sh+Q6PfLaIJlOkKw2SKoTJK3dmFmdILb2tBvrBIlrg5iWRo+WqQ+SaARJ1gCJAzsxThCN16p1vNurGjNjoo42j07kAHFskoY2kEbl33U0ZgoPjXW+Rl0gkarnahqtDaJKxMPDDWIiNafGenh4gExvVhXfmk7Da6L1AVGxSby2h6MxK79Zk42ea1pJbJ48sU2zDezQ8iy1z6BBwoyjMQsvXp8YQAAhgADilRfyy+wf8WqZZUfGZihvgZiB3FybC+kCUU5XLkAo50C+gbBQdUzkAIVyejIAYfFTI1solHP2HgNCnHn5AYNy4jvpoVB6fVzL91cwzLJ9Lfd7S0jhehxO5H5/yePr1W6gHonI7fJ5ORSR/n6Q2yQanq763zuXU5LJZRKiyD/W9/pjkdPZz0/yJ8fqVyry+qQZDMjJKoDfy8bRVhHhQTwAAAAASUVORK5CYII=");\n}\n[dir=ltr] .auth-wrapper.auth-v1 .auth-inner:after {\n  right: -75px;\n}\n[dir=rtl] .auth-wrapper.auth-v1 .auth-inner:after {\n  left: -75px;\n}\n@media (max-width: 575.98px) {\n.auth-wrapper.auth-v1 .auth-inner:after {\n    display: none;\n}\n}\n.auth-wrapper.auth-v2 {\n  align-items: flex-start;\n}\n.auth-wrapper.auth-v2 .auth-inner {\n  height: 100vh;\n  overflow-y: auto;\n  height: calc(var(--vh, 1vh) * 100);\n}\n.auth-wrapper.auth-v2 .brand-logo {\n  position: absolute;\n  top: 2rem;\n  z-index: 1;\n}\n[dir] .auth-wrapper.auth-v2 .brand-logo {\n  margin: 0;\n}\n[dir=ltr] .auth-wrapper.auth-v2 .brand-logo {\n  left: 2rem;\n}\n[dir=rtl] .auth-wrapper.auth-v2 .brand-logo {\n  right: 2rem;\n}\n.auth-wrapper.auth-v1 .auth-inner {\n  max-width: 400px;\n}\n.auth-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n}\n[dir] .auth-wrapper .brand-logo {\n  margin: 1rem 0 2rem 0;\n}\n.auth-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n[dir] .auth-wrapper .auth-footer-btn .btn {\n  padding: 0.6rem !important;\n}\n[dir=ltr] .auth-wrapper .auth-footer-btn .btn:not(:last-child) {\n  margin-right: 1rem;\n}\n[dir=rtl] .auth-wrapper .auth-footer-btn .btn:not(:last-child) {\n  margin-left: 1rem;\n}\n@media (min-width: 1200px) {\n.auth-wrapper.auth-v2 .auth-card {\n    width: 400px;\n}\n}\n[dir] .auth-wrapper .auth-bg {\n  background-color: #fff;\n}\n[dir] .dark-layout .auth-wrapper .auth-bg {\n  background-color: #283046;\n}\n@media (max-height: 625px) {\n[dir] .dark-layout .auth-wrapper .auth-inner {\n    background-color: #283046;\n}\n[dir] .auth-wrapper .auth-bg {\n    padding-top: 3rem;\n}\n[dir] .auth-wrapper .auth-inner {\n    background-color: #fff;\n    padding-bottom: 1rem;\n}\n.auth-wrapper.auth-v2 .brand-logo {\n    width: 100%;\n    display: flex;\n    justify-content: unset;\n    position: relative;\n}\n[dir=ltr] .auth-wrapper.auth-v2 .brand-logo {\n    left: 0;\n    padding-left: 1.5rem;\n}\n[dir=rtl] .auth-wrapper.auth-v2 .brand-logo {\n    right: 0;\n    padding-right: 1.5rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 40.95px;\n}',""]),t.exports=a},1647:function(t,a,e){"use strict";e.r(a);e(84),e(73),e(52);var r=e(32),n=e(53),i=e(1907),s=e(228),o=e(355),u=e(59),A=e(92),l=e(440),d=e(1908),g=e(344),c=e(536),p=e(1947),h=e(1910),m=e(1911),f=e(533),v=e(37),b=e(117),w=e(15),x=(e(288),{components:{VuexyLogo:n.a,BRow:i.a,BImg:s.a,BCol:o.a,BLink:u.a,BButton:A.a,BForm:l.a,BCardText:d.a,BCardTitle:g.a,BFormCheckbox:c.a,BFormGroup:p.a,BFormInput:h.a,BInputGroup:m.a,BInputGroupAppend:f.a,ValidationProvider:r.b,ValidationObserver:r.a},mixins:[b.a],data:function(){return{status:"",name:"",userEmail:"",password:"",sideImg:e(579),required:v.l,email:v.g}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return"dark"===w.a.state.appConfig.layout.skin?(this.sideImg=e(580),this.sideImg):this.sideImg}},methods:{register:function(){var t=this;this.$refs.registerForm.validate().then((function(a){a&&t.$http.post("/auth/register",{name:t.name,email:t.userEmail,password:t.password,c_password:t.password}).then((function(a){var e=a.data;localStorage.setItem("accessToken",e.accessToken),localStorage.setItem("refreshToken",e.accessToken),localStorage.setItem("userData",JSON.stringify(e.user));t.$ability.update([{action:"manage",subject:"all"}]),t.$router.push("/"),console.log(a)})).catch((function(a){t.$refs.registerForm.setErrors(a.response.data.errors)}))}))}}}),C=(e(1324),e(0)),I=Object(C.a)(x,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"auth-wrapper auth-v2"},[e("b-row",{staticClass:"auth-inner m-0"},[e("b-link",{staticClass:"brand-logo"},[e("vuexy-logo"),t._v(" "),e("h2",{staticClass:"brand-text text-primary ml-1"},[t._v("\n        Vuexy\n      ")])],1),t._v(" "),e("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[e("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[e("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Register V2"}})],1)]),t._v(" "),e("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[e("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[e("b-card-title",{staticClass:"mb-1"},[t._v("\n          Adventure starts here 🚀\n        ")]),t._v(" "),e("b-card-text",{staticClass:"mb-2"},[t._v("\n          Make your app management easy and fun!\n        ")]),t._v(" "),e("validation-observer",{ref:"registerForm",scopedSlots:t._u([{key:"default",fn:function(a){var r=a.invalid;return[e("b-form",{staticClass:"auth-register-form mt-2",on:{submit:function(a){return a.preventDefault(),t.register(a)}}},[e("b-form-group",{attrs:{label:"name","label-for":"register-name"}},[e("validation-provider",{attrs:{name:"name",vid:"name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[e("b-form-input",{attrs:{id:"register-name",name:"register-name",state:!(r.length>0)&&null,placeholder:"johndoe"},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}}),t._v(" "),e("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),t._v(" "),e("b-form-group",{attrs:{label:"Email","label-for":"register-email"}},[e("validation-provider",{attrs:{name:"Email",vid:"email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[e("b-form-input",{attrs:{id:"register-email",name:"register-email",state:!(r.length>0)&&null,placeholder:"john@example.com"},model:{value:t.userEmail,callback:function(a){t.userEmail=a},expression:"userEmail"}}),t._v(" "),e("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),t._v(" "),e("b-form-group",{attrs:{"label-for":"register-password",label:"Password"}},[e("validation-provider",{attrs:{name:"Password",vid:"password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[e("b-input-group",{staticClass:"input-group-merge",class:r.length>0?"is-invalid":null},[e("b-form-input",{staticClass:"form-control-merge",attrs:{id:"register-password",type:t.passwordFieldType,state:!(r.length>0)&&null,name:"register-password",placeholder:"············"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),t._v(" "),e("b-input-group-append",{attrs:{"is-text":""}},[e("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.passwordToggleIcon},on:{click:t.togglePasswordVisibility}})],1)],1),t._v(" "),e("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1),t._v(" "),e("b-form-group",[e("b-form-checkbox",{attrs:{id:"register-privacy-policy",name:"checkbox-1"},model:{value:t.status,callback:function(a){t.status=a},expression:"status"}},[t._v("\n                I agree to\n                "),e("b-link",[t._v("privacy policy & terms")])],1)],1),t._v(" "),e("b-button",{attrs:{variant:"primary",block:"",type:"submit",disabled:r}},[t._v("\n              Sign up\n            ")])],1)]}}])}),t._v(" "),e("p",{staticClass:"text-center mt-2"},[e("span",[t._v("Already have an account?")]),t._v(" "),e("b-link",{attrs:{to:{name:"auth-login"}}},[e("span",[t._v(" Sign in instead")])])],1),t._v(" "),e("div",{staticClass:"divider my-2"},[e("div",{staticClass:"divider-text"},[t._v("\n            or\n          ")])]),t._v(" "),e("div",{staticClass:"auth-footer-btn d-flex justify-content-center"},[e("b-button",{attrs:{variant:"facebook",href:"javascript:void(0)"}},[e("feather-icon",{attrs:{icon:"FacebookIcon"}})],1),t._v(" "),e("b-button",{attrs:{variant:"twitter",href:"javascript:void(0)"}},[e("feather-icon",{attrs:{icon:"TwitterIcon"}})],1),t._v(" "),e("b-button",{attrs:{variant:"google",href:"javascript:void(0)"}},[e("feather-icon",{attrs:{icon:"MailIcon"}})],1),t._v(" "),e("b-button",{attrs:{variant:"github",href:"javascript:void(0)"}},[e("feather-icon",{attrs:{icon:"GithubIcon"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);a.default=I.exports},37:function(t,a,e){"use strict";e.d(a,"l",(function(){return o})),e.d(a,"g",(function(){return u})),e.d(a,"j",(function(){return A})),e.d(a,"e",(function(){return l})),e.d(a,"d",(function(){return d})),e.d(a,"a",(function(){return g})),e.d(a,"h",(function(){return c})),e.d(a,"f",(function(){return p})),e.d(a,"b",(function(){return h})),e.d(a,"c",(function(){return m})),e.d(a,"i",(function(){return f})),e.d(a,"k",(function(){return v})),e.d(a,"m",(function(){return b}));var r=e(32),n=e(143),i=e(548),s=e(547),o=(e(62),e(544),Object(r.c)("required",n.l)),u=Object(r.c)("email",n.g),A=Object(r.c)("min",n.j),l=Object(r.c)("confirmed",n.e),d=(Object(r.c)("regex",n.k),Object(r.c)("between",n.d)),g=Object(r.c)("alpha",n.a),c=Object(r.c)("integer",n.h),p=Object(r.c)("digits",n.f),h=Object(r.c)("alpha-dash",n.b),m=Object(r.c)("alpha-num",n.c),f=Object(r.c)("length",n.i),v=(Object(r.c)("positive",{validate:function(t){return t>=0},message:"Please enter positive number!"}),Object(r.c)("credit-card",{validate:function(t){return/^(?:3[47][0-9]{13})$/.test(t)},message:"It is not valid credit card!"}),Object(r.c)("password",{validate:function(t){return/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/.test(t)},message:"Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit"})),b=Object(r.c)("url",{validate:function(t){if(null==t||0===t.length)return!0;return/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(t)},message:"URL is invalid"});Object(r.d)({en:{messages:s.messages,names:{email:"Email",password:"Password"},fields:{password:{min:"{_field_} is too short, you want to get hacked?"}}},ar:{messages:i.messages,names:{email:"البريد الإلكتروني",password:"كلمة السر"},fields:{password:{min:"كلمة السر قصيرة جداً سيتم اختراقك"}}}})},53:function(t,a,e){"use strict";var r={components:{BImg:e(228).a},data:function(){return{sideImg:e(259)}},computed:{imgUrl:function(){return this.sideImg}}},n=e(0),i=Object(n.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("b-img",{attrs:{src:this.imgUrl,height:"24",alt:"Logo"}})}),[],!1,null,null,null);a.a=i.exports},579:function(t,a){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/pages/register-v2.svg"},580:function(t,a){t.exports="/images/_/_/_/_/simazah/resources/js/src/assets/images/pages/register-v2-dark.svg"},676:function(t,a,e){var r=e(1325);"string"==typeof r&&(r=[[t.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};e(21)(r,n);r.locals&&(t.exports=r.locals)}}]);