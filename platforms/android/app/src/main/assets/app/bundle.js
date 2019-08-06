require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Detail_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Detail.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var Geolocation = __webpack_require__("nativescript-geolocation");

var Accuracy = __webpack_require__("tns-core-modules/ui/enums");

var http = __webpack_require__("tns-core-modules/http");

var accelerometer = __webpack_require__("nativescript-accelerometer");

var accelerometerListening = false;

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    startAccelerometer: function startAccelerometer() {
      if (accelerometerListening) {
        accelerometer.stopAccelerometerUpdates();
      }

      accelerometer.startAccelerometerUpdates(data => {
        accelerometerListening = true;
        this.accelerometerValues = data;
      }, {
        sensorDelay: "ui"
      });
    },

    onNavigateTap() {
      console.log("Button was pressed");
      this.$navigateTo(_components_Detail_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
    },

    onModalTap() {
      console.log("Button was pressed");
      this.$showModal(_components_Detail_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
    },

    onAlertTap() {
      console.log("Button was pressed");
      alert({
        title: "Your title",
        message: "Your message",
        okButtonText: "Your OK button text"
      }).then(() => {
        console.log("Alert dialog closed");
      });
    },

    getMyWeather() {
      console.log('Getting Weather...');
      Geolocation.enableLocationRequest();
      Geolocation.getCurrentLocation({
        desiredAccuracy: Accuracy.high,
        updateDistance: 0.1,
        timeout: 20000
      }).then(loc => {
        if (loc) {
          var appId = "473c9fd6cefce2c6223cf5914c7fe8dc";
          var url = "https://api.openweathermap.org/data/2.5/weather?APPID=" + appId + "&units=imperial&lat=" + loc.latitude + "&lon=" + loc.longitude;
          http.request({
            url: url,
            method: "GET"
          }).then(this.parseResponse);
        }
      }, function (e) {
        console.log("Error: " + e.message);
      });
    },

    parseResponse(response) {
      console.log('WEATHER', response.content.toJSON());
      var location = response.content.toJSON();
      this.city = location.name;
      this.summary = location.weather[0].main;
      this.icon = location.weather[0].description;
      this.setImage(this.icon);
      var weatherObj = JSON.stringify(location.main);
      var weather = JSON.parse(weatherObj);
      this.currentTemperature = Math.round(weather.temp).toString() + "°";
      this.humidity = "humidity: " + weather.humidity.toString() + "%";
      var windObj = JSON.stringify(location.wind);
      var wind = JSON.parse(windObj);
      this.windSpeed = "wind: " + wind.speed.toString() + " mph";
      var visibilityObj = Math.round(JSON.stringify(location.visibility) / 1609.344);
      this.visibility = "visibility: " + visibilityObj.toString() + " m";
    },

    setImage(icon) {
      console.log(icon);

      if (icon.includes('rain') || icon.includes('thunderstorm') || icon.includes('drizzle')) {
        this.image = "~/images/rainy.png";
      } else if (icon.includes('clouds')) {
        this.image = "~/images/cloudy.png";
      } else if (icon.includes('snow') || icon.includes('sleet') || icon.includes('mist') || icon.includes('drizzle') || icon.includes('haze')) {
        this.image = "~/images/foggy.png";
      } else if (icon.includes('clear')) {
        this.image = "~/images/sunny.png";
      }
    },

    loginFunc() {
      login("Your message", "Username field value", "Password field value").then(result => {
        console.log("Dialog result: ".concat(result.result, ", user: ").concat(result.userName, ", pwd: ").concat(result.password));
      });
    }

  },
  data: () => ({
    image: "",
    city: "",
    windSpeed: "",
    summary: "",
    visibility: "",
    humidity: "",
    currentTemperature: "",
    accelerometerValues: {
      x: null,
      y: null,
      z: null
    },
    textFieldValue: ""
  }),

  mounted() {
    this.loginFunc();
    console.log(this.getMyWeather());
    var currentDate = new Date();
    var day = currentDate.getDay();
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var dayName = weekdays[day];
    var currentHours = currentDate.getHours();
    var timeOfDay = currentHours >= 12 ? "Afternoon" : "Morning";
    this.day = dayName;
    this.time = timeOfDay;
  }

});

/***/ }),

/***/ "../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nlabel[data-v-763db97b] {\n    margin: 10 0;\n    font-family: \"Quicksand\";\n    font-size: 20;\n    text-transform: uppercase;\n    text-align: center;\n}\n.bold[data-v-763db97b] {\n    font-weight: bold;\n}\n.weather-box[data-v-763db97b] {\n    margin-top: 10;\n}\n.weather-image[data-v-763db97b] {\n    margin: 50;\n}\n.large[data-v-763db97b] {\n    font-size: 60;\n    vertical-align: top;\n}\n.small[data-v-763db97b] {\n    font-size: 15;\n    margin: 0;\n    text-align: left;\n}\n.tight[data-v-763db97b] {\n    margin: 5;\n}\n", ""]);

// exports

    const application = __webpack_require__("tns-core-modules/application");
    __webpack_require__("tns-core-modules/ui/styling/style-scope");

    exports.forEach(cssExport => {
        if (cssExport.length > 1 && cssExport[1]) {
            // applying the second item of the export as it contains the css contents
            application.addCss(cssExport[1]);
        }
    });
    ;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './components/HelloWorld.vue' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Detail.vue?vue&type=template&id=66f864ec&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "Page" },
    [
      _c("ActionBar", { staticClass: "action-bar", attrs: { title: "Home" } }),
      _c(
        "ScrollView",
        [
          _c(
            "GridLayout",
            { attrs: { rows: "auto, auto", columns: "*" } },
            [
              _c("StackLayout", { attrs: { row: "0" } }, [
                _vm._v("\n                TEst Detail page\n            ")
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Page",
    { staticClass: "Page" },
    [
      _c("ActionBar", { staticClass: "action-bar", attrs: { title: "Home" } }),
      _c(
        "ScrollView",
        [
          _c(
            "GridLayout",
            { attrs: { rows: "auto, auto", columns: "*" } },
            [
              _c(
                "StackLayout",
                { attrs: { row: "0" } },
                [
                  _c("Label", {
                    staticClass: "bold",
                    attrs: { text: _vm.city }
                  }),
                  _c("Label", { attrs: { text: _vm.summary } }),
                  _c("Image", {
                    staticClass: "weather-image",
                    attrs: { src: _vm.image }
                  }),
                  _c(
                    "GridLayout",
                    {
                      staticClass: "weather-box",
                      attrs: { columns: "1*,1*", rows: "auto" }
                    },
                    [
                      _c("Label", {
                        staticClass: "large",
                        attrs: {
                          col: "0",
                          row: "0",
                          text: _vm.currentTemperature
                        }
                      }),
                      _c(
                        "StackLayout",
                        { attrs: { col: "1", row: "0" } },
                        [
                          _c("Label", {
                            staticClass: "small bold",
                            attrs: { text: "details" }
                          }),
                          _c("StackLayout", { staticClass: "hr-light tight" }),
                          _c("Label", {
                            staticClass: "small",
                            attrs: { text: _vm.humidity }
                          }),
                          _c("Label", {
                            staticClass: "small",
                            attrs: { text: _vm.windSpeed }
                          }),
                          _c("Label", {
                            staticClass: "small",
                            attrs: { text: _vm.visibility }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _c(
                "StackLayout",
                { attrs: { row: "1" } },
                [
                  _c("Label", { attrs: { text: _vm.day } }),
                  _c("Label", { attrs: { text: _vm.time } }),
                  _c("Button", {
                    attrs: { text: "Refresh" },
                    on: { tap: _vm.getMyWeather }
                  }),
                  _c("Button", {
                    attrs: { text: "Login" },
                    on: { tap: _vm.loginFunc }
                  }),
                  _c("Button", {
                    attrs: { text: "Button" },
                    on: { tap: _vm.onAlertTap }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../node_modules/css-loader/index.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// module
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\nThe imported CSS rules must precede all other types of rules.\n*/\n", ""]);

// exports
;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-vue");
/* harmony import */ var nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/HelloWorld.vue");

        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        
 // Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new nativescript_vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  template: "\n        <Frame>\n            <HelloWorld />\n        </Frame>",
  components: {
    HelloWorld: _components_HelloWorld__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}).$start();
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/nativescript-dev-webpack/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./components/Detail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Detail.vue?vue&type=template&id=66f864ec&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('66f864ec')) {
      api.createRecord('66f864ec', component.options)
    } else {
      api.reload('66f864ec', component.options)
    }
    module.hot.accept("./components/Detail.vue?vue&type=template&id=66f864ec&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/Detail.vue?vue&type=template&id=66f864ec&");
(function () {
      api.rerender('66f864ec', {
        render: _Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/Detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/Detail.vue?vue&type=template&id=66f864ec&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/Detail.vue?vue&type=template&id=66f864ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_66f864ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./components/HelloWorld.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
/* harmony import */ var _HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/HelloWorld.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "763db97b",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__("../node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__("../node_modules/nativescript-vue/dist/index.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('763db97b')) {
      api.createRecord('763db97b', component.options)
    } else {
      api.reload('763db97b', component.options)
    }
    module.hot.accept("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
(function () {
      api.rerender('763db97b', {
        render: _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "components/HelloWorld.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=script&lang=js&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-dev-webpack/style-hot-loader.js!../node_modules/nativescript-dev-webpack/apply-css-loader.js!../node_modules/css-loader/index.js?!../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=style&index=0&id=763db97b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nativescript_dev_webpack_style_hot_loader_js_node_modules_nativescript_dev_webpack_apply_css_loader_js_node_modules_css_loader_index_js_ref_1_2_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_style_index_0_id_763db97b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./components/HelloWorld.vue?vue&type=template&id=763db97b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HelloWorld_vue_vue_type_template_id_763db97b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "nativescript-accelerometer":
/***/ (function(module, exports) {

module.exports = require("nativescript-accelerometer");

/***/ }),

/***/ "nativescript-geolocation":
/***/ (function(module, exports) {

module.exports = require("nativescript-geolocation");

/***/ }),

/***/ "nativescript-vue":
/***/ (function(module, exports) {

module.exports = require("nativescript-vue");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable-array");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/http":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/http");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/text/formatted-string":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/text/formatted-string");

/***/ }),

/***/ "tns-core-modules/text/span":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/text/span");

/***/ }),

/***/ "tns-core-modules/ui/action-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/action-bar");

/***/ }),

/***/ "tns-core-modules/ui/activity-indicator":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/activity-indicator");

/***/ }),

/***/ "tns-core-modules/ui/border":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/border");

/***/ }),

/***/ "tns-core-modules/ui/button":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/button");

/***/ }),

/***/ "tns-core-modules/ui/content-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/content-view");

/***/ }),

/***/ "tns-core-modules/ui/core/view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/core/view");

/***/ }),

/***/ "tns-core-modules/ui/date-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/date-picker");

/***/ }),

/***/ "tns-core-modules/ui/enums":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/enums");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/frame/fragment.transitions":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/fragment.transitions");

/***/ }),

/***/ "tns-core-modules/ui/html-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/html-view");

/***/ }),

/***/ "tns-core-modules/ui/image":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/image");

/***/ }),

/***/ "tns-core-modules/ui/label":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/label");

/***/ }),

/***/ "tns-core-modules/ui/layouts/absolute-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/absolute-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/dock-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/dock-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/flexbox-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/flexbox-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/grid-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/grid-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/layout-base":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/layout-base");

/***/ }),

/***/ "tns-core-modules/ui/layouts/stack-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/stack-layout");

/***/ }),

/***/ "tns-core-modules/ui/layouts/wrap-layout":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/layouts/wrap-layout");

/***/ }),

/***/ "tns-core-modules/ui/list-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/list-picker");

/***/ }),

/***/ "tns-core-modules/ui/list-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/list-view");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/placeholder":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/placeholder");

/***/ }),

/***/ "tns-core-modules/ui/progress":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/progress");

/***/ }),

/***/ "tns-core-modules/ui/proxy-view-container":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/proxy-view-container");

/***/ }),

/***/ "tns-core-modules/ui/scroll-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/scroll-view");

/***/ }),

/***/ "tns-core-modules/ui/search-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/search-bar");

/***/ }),

/***/ "tns-core-modules/ui/segmented-bar":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/segmented-bar");

/***/ }),

/***/ "tns-core-modules/ui/slider":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/slider");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ }),

/***/ "tns-core-modules/ui/switch":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/switch");

/***/ }),

/***/ "tns-core-modules/ui/tab-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/tab-view");

/***/ }),

/***/ "tns-core-modules/ui/text-field":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/text-field");

/***/ }),

/***/ "tns-core-modules/ui/text-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/text-view");

/***/ }),

/***/ "tns-core-modules/ui/time-picker":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/time-picker");

/***/ }),

/***/ "tns-core-modules/ui/web-view":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/web-view");

/***/ }),

/***/ "tns-core-modules/utils/types":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/utils/types");

/***/ }),

/***/ "tns-core-modules/utils/utils":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/utils/utils");

/***/ }),

/***/ "tns-core-modules/xml":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/xml");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlPzE5Y2IiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWwudnVlP2NjODMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZT8wMGI1Iiwid2VicGFjazovLy8uIHN5bmMgbm9ucmVjdXJzaXZlIF5cXC5cXC9hcHBcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSQiLCJ3ZWJwYWNrOi8vL1xcYl9bXFx3LV0qXFwuKXNjc3MpJCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EZXRhaWwudnVlPzc0NWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlPzI4ZGEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZT81ZWFjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVsbG9Xb3JsZC52dWU/NzgzMiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtYWNjZWxlcm9tZXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5hdGl2ZXNjcmlwdC12dWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy90ZXh0L3NwYW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGlvbi1iYXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvYm9yZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvbnRlbnQtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhZ21lbnQudHJhbnNpdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2h0bWwtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2Fic29sdXRlLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9kb2NrLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9mbGV4Ym94LWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9ncmlkLWxheW91dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9sYXlvdXQtYmFzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvd3JhcC1sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3QtcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BsYWNlaG9sZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvcHJveHktdmlldy1jb250YWluZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Njcm9sbC12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWdtZW50ZWQtYmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zbGlkZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGFiLXZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtdmlld1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvdGltZS1waWNrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3dlYi12aWV3XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy90eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3ht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Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLCtEOzs7Ozs7O0FDQUEsMkU7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLHNEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSx3RTs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEsdUU7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEscUU7Ozs7Ozs7QUNBQSxvRTs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7QUNBQSxxRDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxxRTs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSw4RDs7Ozs7OztBQ0FBLHVEOzs7Ozs7O0FDQUEsb0U7Ozs7Ozs7QUNBQSx1RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7QUNBQSwwRDs7Ozs7OztBQ0FBLDREOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLHlEOzs7Ozs7O0FDQUEsaUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGNsYXNzPVwiUGFnZVwiID5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkhvbWVcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiAvPlxuICAgICAgICA8U2Nyb2xsVmlldz5cbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLCBhdXRvXCIgY29sdW1ucz1cIipcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJib2xkXCIgOnRleHQ9XCJjaXR5XCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic3VtbWFyeVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzcz1cIndlYXRoZXItaW1hZ2VcIiA6c3JjPVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwid2VhdGhlci1ib3hcIiBjb2x1bW5zPVwiMSosMSpcIiByb3dzPVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXJnZVwiIDp0ZXh0PVwiY3VycmVudFRlbXBlcmF0dXJlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIxXCIgcm93PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInNtYWxsIGJvbGRcIiB0ZXh0PVwiZGV0YWlsc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHQgdGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInNtYWxsXCIgOnRleHQ9XCJodW1pZGl0eVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwic21hbGxcIiA6dGV4dD1cIndpbmRTcGVlZFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwic21hbGxcIiA6dGV4dD1cInZpc2liaWxpdHlcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZGF5XCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidGltZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlJlZnJlc2hcIiBAdGFwPVwiZ2V0TXlXZWF0aGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiTG9naW5cIiBAdGFwPVwibG9naW5GdW5jXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cIm9uQWxlcnRUYXBcIiAvPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPCEtLSA8U3RhY2tMYXlvdXQgcm93PVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTdGFydCBBY2NlbGVyb21ldGVyXCIgQHRhcD1cInN0YXJ0QWNjZWxlcm9tZXRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmlzaWJpbGl0eT1cImFjY2VsZXJvbWV0ZXJWYWx1ZXMueCA/ICdjb2xsYXBzZWQnIDogJ3Zpc2libGUnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IDp2aXNpYmlsaXR5PVwiYWNjZWxlcm9tZXRlclZhbHVlcy54ID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIidYOiAnICsgYWNjZWxlcm9tZXRlclZhbHVlcy54XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIidZOiAnICsgYWNjZWxlcm9tZXRlclZhbHVlcy55XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIidaOiAnICsgYWNjZWxlcm9tZXRlclZhbHVlcy56XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PiAtLT5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgY29uc3QgR2VvbG9jYXRpb24gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCIpXG4gICAgY29uc3QgQWNjdXJhY3kgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiKVxuICAgIGNvbnN0IGh0dHAgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIpXG4gICAgY29uc3QgYWNjZWxlcm9tZXRlciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYWNjZWxlcm9tZXRlclwiKVxuICAgIGxldCBhY2NlbGVyb21ldGVyTGlzdGVuaW5nID0gZmFsc2VcbiAgICBpbXBvcnQgRGV0YWlsIGZyb20gJ0AvY29tcG9uZW50cy9EZXRhaWwudnVlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdGFydEFjY2VsZXJvbWV0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChhY2NlbGVyb21ldGVyTGlzdGVuaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY2VsZXJvbWV0ZXIuc3RvcEFjY2VsZXJvbWV0ZXJVcGRhdGVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFjY2VsZXJvbWV0ZXIuc3RhcnRBY2NlbGVyb21ldGVyVXBkYXRlcyhcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlbGVyb21ldGVyTGlzdGVuaW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyb21ldGVyVmFsdWVzID0gZGF0YVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5zb3JEZWxheTogXCJ1aVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uTmF2aWdhdGVUYXAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gd2FzIHByZXNzZWRcIilcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKERldGFpbClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbk1vZGFsVGFwKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKERldGFpbClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkFsZXJ0VGFwKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpXG4gICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiWW91ciB0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3VyIG1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZb3VyIE9LIGJ1dHRvbiB0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFsZXJ0IGRpYWxvZyBjbG9zZWRcIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRNeVdlYXRoZXIoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dldHRpbmcgV2VhdGhlci4uLicpXG4gICAgICAgICAgICAgICAgR2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgR2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHsgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLCB1cGRhdGVEaXN0YW5jZTogMC4xLCB0aW1lb3V0OiAyMDAwMCB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihsb2MgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcHBJZCA9IFwiNDczYzlmZDZjZWZjZTJjNjIyM2NmNTkxNGM3ZmU4ZGNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9BUFBJRD1cIiArIGFwcElkICsgXCImdW5pdHM9aW1wZXJpYWwmbGF0PVwiICsgbG9jLmxhdGl0dWRlICsgXCImbG9uPVwiICsgbG9jLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwLnJlcXVlc3QoeyB1cmw6IHVybCwgbWV0aG9kOiBcIkdFVFwiIH0pLnRoZW4odGhpcy5wYXJzZVJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZSkgeyBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUubWVzc2FnZSk7IH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV0VBVEhFUicsIHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCkpXG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKVxuICAgICAgICAgICAgICAgIHRoaXMuY2l0eSA9IGxvY2F0aW9uLm5hbWVcbiAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnkgPSBsb2NhdGlvbi53ZWF0aGVyWzBdLm1haW5cbiAgICAgICAgICAgICAgICB0aGlzLmljb24gPSBsb2NhdGlvbi53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbWFnZSh0aGlzLmljb24pXG4gICAgICAgICAgICAgICAgdmFyIHdlYXRoZXJPYmogPSBKU09OLnN0cmluZ2lmeShsb2NhdGlvbi5tYWluKVxuICAgICAgICAgICAgICAgIHZhciB3ZWF0aGVyID0gSlNPTi5wYXJzZSh3ZWF0aGVyT2JqKVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZCh3ZWF0aGVyLnRlbXApLnRvU3RyaW5nKCkgKyBcIsKwXCJcbiAgICAgICAgICAgICAgICB0aGlzLmh1bWlkaXR5ID0gXCJodW1pZGl0eTogXCIgKyB3ZWF0aGVyLmh1bWlkaXR5LnRvU3RyaW5nKCkgKyBcIiVcIlxuICAgICAgICAgICAgICAgIHZhciB3aW5kT2JqID0gSlNPTi5zdHJpbmdpZnkobG9jYXRpb24ud2luZClcbiAgICAgICAgICAgICAgICB2YXIgd2luZCA9IEpTT04ucGFyc2Uod2luZE9iailcbiAgICAgICAgICAgICAgICB0aGlzLndpbmRTcGVlZCA9IFwid2luZDogXCIgKyB3aW5kLnNwZWVkLnRvU3RyaW5nKCkgKyBcIiBtcGhcIlxuICAgICAgICAgICAgICAgIHZhciB2aXNpYmlsaXR5T2JqID0gTWF0aC5yb3VuZChKU09OLnN0cmluZ2lmeShsb2NhdGlvbi52aXNpYmlsaXR5KS8xNjA5LjM0NClcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSBcInZpc2liaWxpdHk6IFwiICsgdmlzaWJpbGl0eU9iai50b1N0cmluZygpICsgXCIgbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0SW1hZ2UoaWNvbikgeyBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpY29uKVxuICAgICAgICAgICAgICAgIGlmIChpY29uLmluY2x1ZGVzKCdyYWluJykgfHwgaWNvbi5pbmNsdWRlcygndGh1bmRlcnN0b3JtJykgfHwgaWNvbi5pbmNsdWRlcygnZHJpenpsZScpKVxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuaW1hZ2UgPSBcIn4vaW1hZ2VzL3JhaW55LnBuZ1wiOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaWNvbi5pbmNsdWRlcygnY2xvdWRzJykpIFxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuaW1hZ2UgPSBcIn4vaW1hZ2VzL2Nsb3VkeS5wbmdcIjsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGljb24uaW5jbHVkZXMoJ3Nub3cnKSB8fCBpY29uLmluY2x1ZGVzKCdzbGVldCcpIHx8IGljb24uaW5jbHVkZXMoJ21pc3QnKSB8fCBpY29uLmluY2x1ZGVzKCdkcml6emxlJykgfHwgaWNvbi5pbmNsdWRlcygnaGF6ZScpKSBcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLmltYWdlID0gXCJ+L2ltYWdlcy9mb2dneS5wbmdcIjsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGljb24uaW5jbHVkZXMoJ2NsZWFyJykpXG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5pbWFnZSA9IFwifi9pbWFnZXMvc3VubnkucG5nXCI7IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2dpbkZ1bmMoKSB7XG4gICAgICAgICAgICAgICAgbG9naW4oXCJZb3VyIG1lc3NhZ2VcIiwgXCJVc2VybmFtZSBmaWVsZCB2YWx1ZVwiLCBcIlBhc3N3b3JkIGZpZWxkIHZhbHVlXCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYERpYWxvZyByZXN1bHQ6ICR7cmVzdWx0LnJlc3VsdH0sIHVzZXI6ICR7cmVzdWx0LnVzZXJOYW1lfSwgcHdkOiAke3Jlc3VsdC5wYXNzd29yZH1gKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgICAgICAgaW1hZ2U6IFwiXCIsXG4gICAgICAgICAgICBjaXR5OiBcIlwiLFxuICAgICAgICAgICAgd2luZFNwZWVkOiBcIlwiLFxuICAgICAgICAgICAgc3VtbWFyeTogXCJcIixcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IFwiXCIsXG4gICAgICAgICAgICBodW1pZGl0eTogXCJcIixcbiAgICAgICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZTogXCJcIixcbiAgICAgICAgICAgIGFjY2VsZXJvbWV0ZXJWYWx1ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgeTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgejogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB0ZXh0RmllbGRWYWx1ZTogXCJcIlxuICAgICAgICB9KSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5GdW5jKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0TXlXZWF0aGVyKCkpXG4gICAgICAgICAgICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdmFyIGRheSA9IGN1cnJlbnREYXRlLmdldERheSgpO1xuICAgICAgICAgICAgdmFyIHdlZWtkYXlzID0gbmV3IEFycmF5KDcpO1xuICAgICAgICAgICAgd2Vla2RheXNbMF0gPSBcIlN1bmRheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbMV0gPSBcIk1vbmRheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbMl0gPSBcIlR1ZXNkYXlcIjtcbiAgICAgICAgICAgIHdlZWtkYXlzWzNdID0gXCJXZWRuZXNkYXlcIjtcbiAgICAgICAgICAgIHdlZWtkYXlzWzRdID0gXCJUaHVyc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbNV0gPSBcIkZyaWRheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbNl0gPSBcIlNhdHVyZGF5XCI7XG4gICAgICAgICAgICB2YXIgZGF5TmFtZSA9IHdlZWtkYXlzW2RheV07XG4gICAgICAgICAgICB2YXIgY3VycmVudEhvdXJzID0gY3VycmVudERhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgIHZhciB0aW1lT2ZEYXkgPSAoY3VycmVudEhvdXJzID49IDEyICkgPyBcIkFmdGVybm9vblwiIDogXCJNb3JuaW5nXCI7XG4gICAgICAgICAgICB0aGlzLmRheSA9IGRheU5hbWU7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSB0aW1lT2ZEYXlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAxMCAwO1xuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgICAgICAgZm9udC1zaXplOiAyMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLndlYXRoZXItYm94IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTA7XG4gICAgfVxuXG4gICAgLndlYXRoZXItaW1hZ2Uge1xuICAgICAgICBtYXJnaW46IDUwO1xuICAgIH1cblxuICAgIC5sYXJnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNjA7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgfVxuXG4gICAgLnNtYWxsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIC50aWdodCB7XG4gICAgICAgIG1hcmdpbjogNTtcbiAgICB9XG48L3N0eWxlPiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxubGFiZWxbZGF0YS12LTc2M2RiOTdiXSB7XFxuICAgIG1hcmdpbjogMTAgMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiO1xcbiAgICBmb250LXNpemU6IDIwO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5ib2xkW2RhdGEtdi03NjNkYjk3Yl0ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLndlYXRoZXItYm94W2RhdGEtdi03NjNkYjk3Yl0ge1xcbiAgICBtYXJnaW4tdG9wOiAxMDtcXG59XFxuLndlYXRoZXItaW1hZ2VbZGF0YS12LTc2M2RiOTdiXSB7XFxuICAgIG1hcmdpbjogNTA7XFxufVxcbi5sYXJnZVtkYXRhLXYtNzYzZGI5N2JdIHtcXG4gICAgZm9udC1zaXplOiA2MDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLnNtYWxsW2RhdGEtdi03NjNkYjk3Yl0ge1xcbiAgICBmb250LXNpemU6IDE1O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi50aWdodFtkYXRhLXYtNzYzZGI5N2JdIHtcXG4gICAgbWFyZ2luOiA1O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cbiAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xuICAgIHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5cbiAgICBleHBvcnRzLmZvckVhY2goY3NzRXhwb3J0ID0+IHtcbiAgICAgICAgaWYgKGNzc0V4cG9ydC5sZW5ndGggPiAxICYmIGNzc0V4cG9ydFsxXSkge1xuICAgICAgICAgICAgLy8gYXBwbHlpbmcgdGhlIHNlY29uZCBpdGVtIG9mIHRoZSBleHBvcnQgYXMgaXQgY29udGFpbnMgdGhlIGNzcyBjb250ZW50c1xuICAgICAgICAgICAgYXBwbGljYXRpb24uYWRkQ3NzKGNzc0V4cG9ydFsxXSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICA7XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZScgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIlBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiLCBhdHRyczogeyB0aXRsZTogXCJIb21lXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0bywgYXV0b1wiLCBjb2x1bW5zOiBcIipcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiU3RhY2tMYXlvdXRcIiwgeyBhdHRyczogeyByb3c6IFwiMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICBURXN0IERldGFpbCBwYWdlXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIlBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiLCBhdHRyczogeyB0aXRsZTogXCJIb21lXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0bywgYXV0b1wiLCBjb2x1bW5zOiBcIipcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCIwXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5jaXR5IH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5zdW1tYXJ5IH0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2VhdGhlci1pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5pbWFnZSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndlYXRoZXItYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCIxKiwxKlwiLCByb3dzOiBcImF1dG9cIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhcmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uY3VycmVudFRlbXBlcmF0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbDogXCIxXCIsIHJvdzogXCIwXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzbWFsbCBib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJkZXRhaWxzXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0IHRpZ2h0XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmh1bWlkaXR5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLndpbmRTcGVlZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS52aXNpYmlsaXR5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0uZGF5IH0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogX3ZtLnRpbWUgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJSZWZyZXNoXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0uZ2V0TXlXZWF0aGVyIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkxvZ2luXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ubG9naW5GdW5jIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJCdXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZXh0OiBcIkJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHRhcDogX3ZtLm9uQWxlcnRUYXAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIHJlY3Vyc2l2ZSAoPzwhXFxcXGJBcHBfUmVzb3VyY2VzXFxcXGIuKilcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIW5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1wiKSwgXCJcIik7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAuY3NzIGZpbGUgaXMgd2hlcmUgeW91IHBsYWNlIENTUyBydWxlcyB0aGF0XFxueW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdG8geW91ciBlbnRpcmUgYXBwbGljYXRpb24uIENoZWNrIG91dFxcbmh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvc3R5bGluZyBmb3IgYSBmdWxsIGxpc3Qgb2YgdGhlIENTU1xcbnNlbGVjdG9ycyBhbmQgcHJvcGVydGllcyB5b3UgY2FuIHVzZSB0byBzdHlsZSBVSSBjb21wb25lbnRzLlxcblxcbi8qXFxuSW4gbWFueSBjYXNlcyB5b3UgbWF5IHdhbnQgdG8gdXNlIHRoZSBOYXRpdmVTY3JpcHQgY29yZSB0aGVtZSBpbnN0ZWFkXFxub2Ygd3JpdGluZyB5b3VyIG93biBDU1MgcnVsZXMuIEZvciBhIGZ1bGwgbGlzdCBvZiBjbGFzcyBuYW1lcyBpbiB0aGUgdGhlbWVcXG5yZWZlciB0byBodHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL3RoZW1lLlxcblRoZSBpbXBvcnRlZCBDU1MgcnVsZXMgbXVzdCBwcmVjZWRlIGFsbCBvdGhlciB0eXBlcyBvZiBydWxlcy5cXG4qL1xcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbjtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiAnc3R5bGUnLCBwYXRoOiAnLi9hcHAuY3NzJyB9KTtcbiAgICAgICAgfSlcbiAgICB9XG4iLCJpbXBvcnQgVnVlIGZyb20gJ25hdGl2ZXNjcmlwdC12dWUnO1xuXG5pbXBvcnQgSGVsbG9Xb3JsZCBmcm9tICcuL2NvbXBvbmVudHMvSGVsbG9Xb3JsZCc7XG5cbi8vIFVuY29tbW1lbnQgdGhlIGZvbGxvd2luZyB0byBzZWUgTmF0aXZlU2NyaXB0LVZ1ZSBvdXRwdXQgbG9nc1xuLy8gVnVlLmNvbmZpZy5zaWxlbnQgPSBmYWxzZTtcblxubmV3IFZ1ZSh7XG5cbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8RnJhbWU+XG4gICAgICAgICAgICA8SGVsbG9Xb3JsZCAvPlxuICAgICAgICA8L0ZyYW1lPmAsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEhlbGxvV29ybGRcbiAgICB9XG59KS4kc3RhcnQoKTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjZmODY0ZWMmXCJcbnZhciBzY3JpcHQgPSB7fVxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL1RyZXZvci5taWNoYWVsaXMvaW5ub3ZhdGlvbi9hcHBzL25zLXNpdGVtYW5hZ2VyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY2Zjg2NGVjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY2Zjg2NGVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY2Zjg2NGVjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY2Zjg2NGVjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY2Zjg2NGVjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL0RldGFpbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NmY4NjRlYyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc2M2RiOTdiXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL1RyZXZvci5taWNoYWVsaXMvaW5ub3ZhdGlvbi9hcHBzL25zLXNpdGVtYW5hZ2VyL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc2M2RiOTdiJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc2M2RiOTdiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc2M2RiOTdiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NjNkYjk3YiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3NjNkYjk3YicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL3N0eWxlLWhvdC1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL25hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9hcHBseS1jc3MtbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9IZWxsb1dvcmxkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc2M2RiOTdiJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9uYXRpdmVzY3JpcHQtZGV2LXdlYnBhY2svc3R5bGUtaG90LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbmF0aXZlc2NyaXB0LWRldi13ZWJwYWNrL2FwcGx5LWNzcy1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMS0yIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0hlbGxvV29ybGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSGVsbG9Xb3JsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzYzZGI5N2Imc2NvcGVkPXRydWUmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYWNjZWxlcm9tZXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXZ1ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYnVuZGxlLWVudHJ5LXBvaW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdGV4dC9zcGFuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvYWN0aW9uLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2FjdGl2aXR5LWluZGljYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2JvcmRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvbnRlbnQtdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2NvcmUvdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhZ21lbnQudHJhbnNpdGlvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9odG1sLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9hYnNvbHV0ZS1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2RvY2stbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9mbGV4Ym94LWxheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvZ3JpZC1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL2xheW91dC1iYXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3dyYXAtbGF5b3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC1waWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvcGxhY2Vob2xkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3Byb3h5LXZpZXctY29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc2Nyb2xsLXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zZWFyY2gtYmFyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvc2VnbWVudGVkLWJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3NsaWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9zd2l0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3RleHQtZmllbGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LXZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS90aW1lLXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3dlYi12aWV3XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdXRpbHMvdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3htbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9