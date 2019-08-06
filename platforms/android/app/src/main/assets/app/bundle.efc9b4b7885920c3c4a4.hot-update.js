webpackHotUpdate("bundle",{

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

  created() {
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
                    on: { tap: _vm.refreshWeather }
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



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlbGxvV29ybGQudnVlPzAwYjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLDhDQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsRUFJQTtBQUNBO0FBREEsT0FKQTtBQVFBLEtBYkE7O0FBY0E7QUFDQTtBQUNBO0FBQ0EsS0FqQkE7O0FBa0JBO0FBQ0E7QUFDQTtBQUNBLEtBckJBOztBQXNCQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLCtCQUZBO0FBR0E7QUFIQSxTQUlBLElBSkEsQ0FJQTtBQUNBO0FBQ0EsT0FOQTtBQU9BLEtBL0JBOztBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLE9BUEEsRUFRQTtBQUFBO0FBQUEsT0FSQTtBQVVBLEtBN0NBOztBQThDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBOURBOztBQStEQTtBQUNBOztBQUNBLDhGQUNBO0FBQUE7QUFBQSxPQURBLE1BRUEsNkJBQ0E7QUFBQTtBQUFBLE9BREEsTUFFQSxtSUFDQTtBQUFBO0FBQUEsT0FEQSxNQUVBLDRCQUNBO0FBQUE7QUFBQTtBQUNBLEtBekVBOztBQTBFQTtBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7O0FBOUVBLEdBREE7QUFpRkE7QUFDQSxhQURBO0FBRUEsWUFGQTtBQUdBLGlCQUhBO0FBSUEsZUFKQTtBQUtBLGtCQUxBO0FBTUEsZ0JBTkE7QUFPQSwwQkFQQTtBQVFBO0FBQ0EsYUFEQTtBQUVBLGFBRkE7QUFHQTtBQUhBLEtBUkE7QUFjQTtBQWRBLElBakZBOztBQWlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFuSEEsRzs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxzQkFBc0I7QUFDM0I7QUFDQSx1QkFBdUIsb0NBQW9DLGdCQUFnQixFQUFFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFNBQVMsbUNBQW1DLEVBQUU7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsV0FBVyxFQUFFO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkIsK0JBQStCLFNBQVMsb0JBQW9CLEVBQUU7QUFDOUQ7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHlCQUF5QixTQUFTLHFCQUFxQixFQUFFO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQywyQkFBMkI7QUFDM0IsNkNBQTZDLGdDQUFnQztBQUM3RTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVMsV0FBVyxFQUFFO0FBQ3ZDO0FBQ0EsK0JBQStCLFNBQVMsZ0JBQWdCLEVBQUU7QUFDMUQsK0JBQStCLFNBQVMsaUJBQWlCLEVBQUU7QUFDM0Q7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQSw0QkFBNEIsaUJBQWlCO0FBQzdDLHlCQUF5QjtBQUN6QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5lZmM5YjRiNzg4NTkyMGMzYzRhNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGNsYXNzPVwiUGFnZVwiID5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkhvbWVcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiAvPlxuICAgICAgICA8U2Nyb2xsVmlldz5cbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLCBhdXRvXCIgY29sdW1ucz1cIipcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJib2xkXCIgOnRleHQ9XCJjaXR5XCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic3VtbWFyeVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzcz1cIndlYXRoZXItaW1hZ2VcIiA6c3JjPVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwid2VhdGhlci1ib3hcIiBjb2x1bW5zPVwiMSosMSpcIiByb3dzPVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXJnZVwiIDp0ZXh0PVwiY3VycmVudFRlbXBlcmF0dXJlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIxXCIgcm93PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInNtYWxsIGJvbGRcIiB0ZXh0PVwiZGV0YWlsc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHQgdGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInNtYWxsXCIgOnRleHQ9XCJodW1pZGl0eVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwic21hbGxcIiA6dGV4dD1cIndpbmRTcGVlZFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwic21hbGxcIiA6dGV4dD1cInZpc2liaWxpdHlcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZGF5XCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidGltZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlJlZnJlc2hcIiBAdGFwPVwicmVmcmVzaFdlYXRoZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJMb2dpblwiIEB0YXA9XCJsb2dpbkZ1bmNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJCdXR0b25cIiBAdGFwPVwib25BbGVydFRhcFwiIC8+XG4gICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8IS0tIDxTdGFja0xheW91dCByb3c9XCIyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlN0YXJ0IEFjY2VsZXJvbWV0ZXJcIiBAdGFwPVwic3RhcnRBY2NlbGVyb21ldGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2aXNpYmlsaXR5PVwiYWNjZWxlcm9tZXRlclZhbHVlcy54ID8gJ2NvbGxhcHNlZCcgOiAndmlzaWJsZSdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgOnZpc2liaWxpdHk9XCJhY2NlbGVyb21ldGVyVmFsdWVzLnggPyAndmlzaWJsZScgOiAnY29sbGFwc2VkJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiJ1g6ICcgKyBhY2NlbGVyb21ldGVyVmFsdWVzLnhcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiJ1k6ICcgKyBhY2NlbGVyb21ldGVyVmFsdWVzLnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiJ1o6ICcgKyBhY2NlbGVyb21ldGVyVmFsdWVzLnpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+IC0tPlxuICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICA8L1Njcm9sbFZpZXc+XG4gICAgPC9QYWdlPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBjb25zdCBHZW9sb2NhdGlvbiA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIilcbiAgICBjb25zdCBBY2N1cmFjeSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCIpXG4gICAgY29uc3QgaHR0cCA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2h0dHBcIilcbiAgICBjb25zdCBhY2NlbGVyb21ldGVyID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hY2NlbGVyb21ldGVyXCIpXG4gICAgbGV0IGFjY2VsZXJvbWV0ZXJMaXN0ZW5pbmcgPSBmYWxzZVxuICAgIGltcG9ydCBEZXRhaWwgZnJvbSAnQC9jb21wb25lbnRzL0RldGFpbC52dWUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN0YXJ0QWNjZWxlcm9tZXRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjY2VsZXJvbWV0ZXJMaXN0ZW5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZWxlcm9tZXRlci5zdG9wQWNjZWxlcm9tZXRlclVwZGF0ZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWNjZWxlcm9tZXRlci5zdGFydEFjY2VsZXJvbWV0ZXJVcGRhdGVzKFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VsZXJvbWV0ZXJMaXN0ZW5pbmcgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY2VsZXJvbWV0ZXJWYWx1ZXMgPSBkYXRhXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbnNvckRlbGF5OiBcInVpXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25OYXZpZ2F0ZVRhcCgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKVxuICAgICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlVG8oRGV0YWlsKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uTW9kYWxUYXAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gd2FzIHByZXNzZWRcIilcbiAgICAgICAgICAgICAgICB0aGlzLiRzaG93TW9kYWwoRGV0YWlsKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQWxlcnRUYXAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gd2FzIHByZXNzZWRcIilcbiAgICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJZb3VyIHRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgbWVzc2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIllvdXIgT0sgYnV0dG9uIHRleHRcIlxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWxlcnQgZGlhbG9nIGNsb3NlZFwiKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldE15V2VhdGhlcigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2V0dGluZyBXZWF0aGVyLi4uJylcbiAgICAgICAgICAgICAgICBHZW9sb2NhdGlvbi5lbmFibGVMb2NhdGlvblJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICBHZW9sb2NhdGlvbi5nZXRDdXJyZW50TG9jYXRpb24oeyBkZXNpcmVkQWNjdXJhY3k6IEFjY3VyYWN5LmhpZ2gsIHVwZGF0ZURpc3RhbmNlOiAwLjEsIHRpbWVvdXQ6IDIwMDAwIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGxvYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFwcElkID0gXCI0NzNjOWZkNmNlZmNlMmM2MjIzY2Y1OTE0YzdmZThkY1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP0FQUElEPVwiICsgYXBwSWQgKyBcIiZ1bml0cz1pbXBlcmlhbCZsYXQ9XCIgKyBsb2MubGF0aXR1ZGUgKyBcIiZsb249XCIgKyBsb2MubG9uZ2l0dWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHAucmVxdWVzdCh7IHVybDogdXJsLCBtZXRob2Q6IFwiR0VUXCIgfSkudGhlbih0aGlzLnBhcnNlUmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihlKSB7IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZS5tZXNzYWdlKTsgfVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2VSZXNwb25zZShyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXRUFUSEVSJywgcmVzcG9uc2UuY29udGVudC50b0pTT04oKSlcbiAgICAgICAgICAgICAgICB2YXIgbG9jYXRpb24gPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpXG4gICAgICAgICAgICAgICAgdGhpcy5jaXR5ID0gbG9jYXRpb24ubmFtZVxuICAgICAgICAgICAgICAgIHRoaXMuc3VtbWFyeSA9IGxvY2F0aW9uLndlYXRoZXJbMF0ubWFpblxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbiA9IGxvY2F0aW9uLndlYXRoZXJbMF0uZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB0aGlzLnNldEltYWdlKHRoaXMuaWNvbilcbiAgICAgICAgICAgICAgICB2YXIgd2VhdGhlck9iaiA9IEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uLm1haW4pXG4gICAgICAgICAgICAgICAgdmFyIHdlYXRoZXIgPSBKU09OLnBhcnNlKHdlYXRoZXJPYmopXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50VGVtcGVyYXR1cmUgPSBNYXRoLnJvdW5kKHdlYXRoZXIudGVtcCkudG9TdHJpbmcoKSArIFwiwrBcIlxuICAgICAgICAgICAgICAgIHRoaXMuaHVtaWRpdHkgPSBcImh1bWlkaXR5OiBcIiArIHdlYXRoZXIuaHVtaWRpdHkudG9TdHJpbmcoKSArIFwiJVwiXG4gICAgICAgICAgICAgICAgdmFyIHdpbmRPYmogPSBKU09OLnN0cmluZ2lmeShsb2NhdGlvbi53aW5kKVxuICAgICAgICAgICAgICAgIHZhciB3aW5kID0gSlNPTi5wYXJzZSh3aW5kT2JqKVxuICAgICAgICAgICAgICAgIHRoaXMud2luZFNwZWVkID0gXCJ3aW5kOiBcIiArIHdpbmQuc3BlZWQudG9TdHJpbmcoKSArIFwiIG1waFwiXG4gICAgICAgICAgICAgICAgdmFyIHZpc2liaWxpdHlPYmogPSBNYXRoLnJvdW5kKEpTT04uc3RyaW5naWZ5KGxvY2F0aW9uLnZpc2liaWxpdHkpLzE2MDkuMzQ0KVxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJpbGl0eSA9IFwidmlzaWJpbGl0eTogXCIgKyB2aXNpYmlsaXR5T2JqLnRvU3RyaW5nKCkgKyBcIiBtXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRJbWFnZShpY29uKSB7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGljb24pXG4gICAgICAgICAgICAgICAgaWYgKGljb24uaW5jbHVkZXMoJ3JhaW4nKSB8fCBpY29uLmluY2x1ZGVzKCd0aHVuZGVyc3Rvcm0nKSB8fCBpY29uLmluY2x1ZGVzKCdkcml6emxlJykpXG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5pbWFnZSA9IFwifi9pbWFnZXMvcmFpbnkucG5nXCI7IH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpY29uLmluY2x1ZGVzKCdjbG91ZHMnKSkgXG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5pbWFnZSA9IFwifi9pbWFnZXMvY2xvdWR5LnBuZ1wiOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaWNvbi5pbmNsdWRlcygnc25vdycpIHx8IGljb24uaW5jbHVkZXMoJ3NsZWV0JykgfHwgaWNvbi5pbmNsdWRlcygnbWlzdCcpIHx8IGljb24uaW5jbHVkZXMoJ2RyaXp6bGUnKSB8fCBpY29uLmluY2x1ZGVzKCdoYXplJykpIFxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuaW1hZ2UgPSBcIn4vaW1hZ2VzL2ZvZ2d5LnBuZ1wiOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaWNvbi5pbmNsdWRlcygnY2xlYXInKSlcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLmltYWdlID0gXCJ+L2ltYWdlcy9zdW5ueS5wbmdcIjsgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxvZ2luRnVuYygpIHtcbiAgICAgICAgICAgICAgICBsb2dpbihcIllvdXIgbWVzc2FnZVwiLCBcIlVzZXJuYW1lIGZpZWxkIHZhbHVlXCIsIFwiUGFzc3dvcmQgZmllbGQgdmFsdWVcIikudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRGlhbG9nIHJlc3VsdDogJHtyZXN1bHQucmVzdWx0fSwgdXNlcjogJHtyZXN1bHQudXNlck5hbWV9LCBwd2Q6ICR7cmVzdWx0LnBhc3N3b3JkfWApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6ICgpID0+ICh7XG4gICAgICAgICAgICBpbWFnZTogXCJcIixcbiAgICAgICAgICAgIGNpdHk6IFwiXCIsXG4gICAgICAgICAgICB3aW5kU3BlZWQ6IFwiXCIsXG4gICAgICAgICAgICBzdW1tYXJ5OiBcIlwiLFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogXCJcIixcbiAgICAgICAgICAgIGh1bWlkaXR5OiBcIlwiLFxuICAgICAgICAgICAgY3VycmVudFRlbXBlcmF0dXJlOiBcIlwiLFxuICAgICAgICAgICAgYWNjZWxlcm9tZXRlclZhbHVlczoge1xuICAgICAgICAgICAgICAgICAgICB4OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB5OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICB6OiBudWxsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHRleHRGaWVsZFZhbHVlOiBcIlwiXG4gICAgICAgIH0pLFxuICAgICAgICBjcmVhdGVkKCkge1xuICAgICAgICAgICAgdGhpcy5sb2dpbkZ1bmMoKVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5nZXRNeVdlYXRoZXIoKSlcbiAgICAgICAgICAgIHZhciBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICB2YXIgZGF5ID0gY3VycmVudERhdGUuZ2V0RGF5KCk7XG4gICAgICAgICAgICB2YXIgd2Vla2RheXMgPSBuZXcgQXJyYXkoNyk7XG4gICAgICAgICAgICB3ZWVrZGF5c1swXSA9IFwiU3VuZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1sxXSA9IFwiTW9uZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1syXSA9IFwiVHVlc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbM10gPSBcIldlZG5lc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbNF0gPSBcIlRodXJzZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1s1XSA9IFwiRnJpZGF5XCI7XG4gICAgICAgICAgICB3ZWVrZGF5c1s2XSA9IFwiU2F0dXJkYXlcIjtcbiAgICAgICAgICAgIHZhciBkYXlOYW1lID0gd2Vla2RheXNbZGF5XTtcbiAgICAgICAgICAgIHZhciBjdXJyZW50SG91cnMgPSBjdXJyZW50RGF0ZS5nZXRIb3VycygpO1xuICAgICAgICAgICAgdmFyIHRpbWVPZkRheSA9IChjdXJyZW50SG91cnMgPj0gMTIgKSA/IFwiQWZ0ZXJub29uXCIgOiBcIk1vcm5pbmdcIjtcbiAgICAgICAgICAgIHRoaXMuZGF5ID0gZGF5TmFtZTtcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHRpbWVPZkRheVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4gICAgbGFiZWwge1xuICAgICAgICBtYXJnaW46IDEwIDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiO1xuICAgICAgICBmb250LXNpemU6IDIwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmJvbGQge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAud2VhdGhlci1ib3gge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMDtcbiAgICB9XG5cbiAgICAud2VhdGhlci1pbWFnZSB7XG4gICAgICAgIG1hcmdpbjogNTA7XG4gICAgfVxuXG4gICAgLmxhcmdlIHtcbiAgICAgICAgZm9udC1zaXplOiA2MDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG5cbiAgICAuc21hbGwge1xuICAgICAgICBmb250LXNpemU6IDE1O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLnRpZ2h0IHtcbiAgICAgICAgbWFyZ2luOiA1O1xuICAgIH1cbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIlBhZ2VcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcIlBhZ2VcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiQWN0aW9uQmFyXCIsIHsgc3RhdGljQ2xhc3M6IFwiYWN0aW9uLWJhclwiLCBhdHRyczogeyB0aXRsZTogXCJIb21lXCIgfSB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcIlNjcm9sbFZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJHcmlkTGF5b3V0XCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHJvd3M6IFwiYXV0bywgYXV0b1wiLCBjb2x1bW5zOiBcIipcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCIwXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS5jaXR5IH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJMYWJlbFwiLCB7IGF0dHJzOiB7IHRleHQ6IF92bS5zdW1tYXJ5IH0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2VhdGhlci1pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5pbWFnZSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcIkdyaWRMYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndlYXRoZXItYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sdW1uczogXCIxKiwxKlwiLCByb3dzOiBcImF1dG9cIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhcmdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2w6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3c6IFwiMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBfdm0uY3VycmVudFRlbXBlcmF0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlN0YWNrTGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbDogXCIxXCIsIHJvdzogXCIwXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzbWFsbCBib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJkZXRhaWxzXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJTdGFja0xheW91dFwiLCB7IHN0YXRpY0NsYXNzOiBcImhyLWxpZ2h0IHRpZ2h0XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLmh1bWlkaXR5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogX3ZtLndpbmRTcGVlZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IF92bS52aXNpYmlsaXR5IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiU3RhY2tMYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHJvdzogXCIxXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiTGFiZWxcIiwgeyBhdHRyczogeyB0ZXh0OiBfdm0uZGF5IH0gfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkxhYmVsXCIsIHsgYXR0cnM6IHsgdGV4dDogX3ZtLnRpbWUgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiQnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGV4dDogXCJSZWZyZXNoXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ucmVmcmVzaFdlYXRoZXIgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiTG9naW5cIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyB0YXA6IF92bS5sb2dpbkZ1bmMgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcIkJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRleHQ6IFwiQnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgdGFwOiBfdm0ub25BbGVydFRhcCB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==