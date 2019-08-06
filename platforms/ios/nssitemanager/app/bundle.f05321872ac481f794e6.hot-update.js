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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY29tcG9uZW50cy9IZWxsb1dvcmxkLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsOENBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxFQUlBO0FBQ0E7QUFEQSxPQUpBO0FBUUEsS0FiQTs7QUFjQTtBQUNBO0FBQ0E7QUFDQSxLQWpCQTs7QUFrQkE7QUFDQTtBQUNBO0FBQ0EsS0FyQkE7O0FBc0JBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsK0JBRkE7QUFHQTtBQUhBLFNBSUEsSUFKQSxDQUlBO0FBQ0E7QUFDQSxPQU5BO0FBT0EsS0EvQkE7O0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQSxJQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsT0FQQSxFQVFBO0FBQUE7QUFBQSxPQVJBO0FBVUEsS0E3Q0E7O0FBOENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E5REE7O0FBK0RBO0FBQ0E7O0FBQ0EsOEZBQ0E7QUFBQTtBQUFBLE9BREEsTUFFQSw2QkFDQTtBQUFBO0FBQUEsT0FEQSxNQUVBLG1JQUNBO0FBQUE7QUFBQSxPQURBLE1BRUEsNEJBQ0E7QUFBQTtBQUFBO0FBQ0EsS0F6RUE7O0FBMEVBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTs7QUE5RUEsR0FEQTtBQWlGQTtBQUNBLGFBREE7QUFFQSxZQUZBO0FBR0EsaUJBSEE7QUFJQSxlQUpBO0FBS0Esa0JBTEE7QUFNQSxnQkFOQTtBQU9BLDBCQVBBO0FBUUE7QUFDQSxhQURBO0FBRUEsYUFGQTtBQUdBO0FBSEEsS0FSQTtBQWNBO0FBZEEsSUFqRkE7O0FBaUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW5IQSxHIiwiZmlsZSI6ImJ1bmRsZS5mMDUzMjE4NzJhYzQ4MWY3OTRlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxQYWdlIGNsYXNzPVwiUGFnZVwiID5cbiAgICAgICAgPEFjdGlvbkJhciB0aXRsZT1cIkhvbWVcIiBjbGFzcz1cImFjdGlvbi1iYXJcIiAvPlxuICAgICAgICA8U2Nyb2xsVmlldz5cbiAgICAgICAgICAgIDxHcmlkTGF5b3V0IHJvd3M9XCJhdXRvLCBhdXRvXCIgY29sdW1ucz1cIipcIj5cbiAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3M9XCJib2xkXCIgOnRleHQ9XCJjaXR5XCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwic3VtbWFyeVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzcz1cIndlYXRoZXItaW1hZ2VcIiA6c3JjPVwiaW1hZ2VcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxHcmlkTGF5b3V0IGNsYXNzPVwid2VhdGhlci1ib3hcIiBjb2x1bW5zPVwiMSosMSpcIiByb3dzPVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNvbD1cIjBcIiByb3c9XCIwXCIgY2xhc3M9XCJsYXJnZVwiIDp0ZXh0PVwiY3VycmVudFRlbXBlcmF0dXJlXCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XCIxXCIgcm93PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInNtYWxsIGJvbGRcIiB0ZXh0PVwiZGV0YWlsc1wiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IGNsYXNzPVwiaHItbGlnaHQgdGlnaHRcIj48L1N0YWNrTGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cInNtYWxsXCIgOnRleHQ9XCJodW1pZGl0eVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwic21hbGxcIiA6dGV4dD1cIndpbmRTcGVlZFwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzPVwic21hbGxcIiA6dGV4dD1cInZpc2liaWxpdHlcIj48L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IHJvdz1cIjFcIj5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwiZGF5XCI+PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIDp0ZXh0PVwidGltZVwiPjwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cIlJlZnJlc2hcIiBAdGFwPVwiZ2V0TXlXZWF0aGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiTG9naW5cIiBAdGFwPVwibG9naW5GdW5jXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQnV0dG9uXCIgQHRhcD1cIm9uQWxlcnRUYXBcIiAvPlxuICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPCEtLSA8U3RhY2tMYXlvdXQgcm93PVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJTdGFydCBBY2NlbGVyb21ldGVyXCIgQHRhcD1cInN0YXJ0QWNjZWxlcm9tZXRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmlzaWJpbGl0eT1cImFjY2VsZXJvbWV0ZXJWYWx1ZXMueCA/ICdjb2xsYXBzZWQnIDogJ3Zpc2libGUnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrTGF5b3V0IDp2aXNpYmlsaXR5PVwiYWNjZWxlcm9tZXRlclZhbHVlcy54ID8gJ3Zpc2libGUnIDogJ2NvbGxhcHNlZCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIidYOiAnICsgYWNjZWxlcm9tZXRlclZhbHVlcy54XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIidZOiAnICsgYWNjZWxlcm9tZXRlclZhbHVlcy55XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCA6dGV4dD1cIidaOiAnICsgYWNjZWxlcm9tZXRlclZhbHVlcy56XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cbiAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PiAtLT5cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgPC9TY3JvbGxWaWV3PlxuICAgIDwvUGFnZT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgY29uc3QgR2VvbG9jYXRpb24gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uXCIpXG4gICAgY29uc3QgQWNjdXJhY3kgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiKVxuICAgIGNvbnN0IGh0dHAgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCIpXG4gICAgY29uc3QgYWNjZWxlcm9tZXRlciA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtYWNjZWxlcm9tZXRlclwiKVxuICAgIGxldCBhY2NlbGVyb21ldGVyTGlzdGVuaW5nID0gZmFsc2VcbiAgICBpbXBvcnQgRGV0YWlsIGZyb20gJ0AvY29tcG9uZW50cy9EZXRhaWwudnVlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdGFydEFjY2VsZXJvbWV0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmIChhY2NlbGVyb21ldGVyTGlzdGVuaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjY2VsZXJvbWV0ZXIuc3RvcEFjY2VsZXJvbWV0ZXJVcGRhdGVzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFjY2VsZXJvbWV0ZXIuc3RhcnRBY2NlbGVyb21ldGVyVXBkYXRlcyhcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlbGVyb21ldGVyTGlzdGVuaW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NlbGVyb21ldGVyVmFsdWVzID0gZGF0YVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5zb3JEZWxheTogXCJ1aVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uTmF2aWdhdGVUYXAoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gd2FzIHByZXNzZWRcIilcbiAgICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZVRvKERldGFpbClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbk1vZGFsVGFwKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpXG4gICAgICAgICAgICAgICAgdGhpcy4kc2hvd01vZGFsKERldGFpbClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkFsZXJ0VGFwKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBwcmVzc2VkXCIpXG4gICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiWW91ciB0aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJZb3VyIG1lc3NhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJZb3VyIE9LIGJ1dHRvbiB0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFsZXJ0IGRpYWxvZyBjbG9zZWRcIilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRNeVdlYXRoZXIoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dldHRpbmcgV2VhdGhlci4uLicpXG4gICAgICAgICAgICAgICAgR2VvbG9jYXRpb24uZW5hYmxlTG9jYXRpb25SZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgR2VvbG9jYXRpb24uZ2V0Q3VycmVudExvY2F0aW9uKHsgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLCB1cGRhdGVEaXN0YW5jZTogMC4xLCB0aW1lb3V0OiAyMDAwMCB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihsb2MgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcHBJZCA9IFwiNDczYzlmZDZjZWZjZTJjNjIyM2NmNTkxNGM3ZmU4ZGNcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9BUFBJRD1cIiArIGFwcElkICsgXCImdW5pdHM9aW1wZXJpYWwmbGF0PVwiICsgbG9jLmxhdGl0dWRlICsgXCImbG9uPVwiICsgbG9jLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodHRwLnJlcXVlc3QoeyB1cmw6IHVybCwgbWV0aG9kOiBcIkdFVFwiIH0pLnRoZW4odGhpcy5wYXJzZVJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oZSkgeyBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGUubWVzc2FnZSk7IH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV0VBVEhFUicsIHJlc3BvbnNlLmNvbnRlbnQudG9KU09OKCkpXG4gICAgICAgICAgICAgICAgdmFyIGxvY2F0aW9uID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKVxuICAgICAgICAgICAgICAgIHRoaXMuY2l0eSA9IGxvY2F0aW9uLm5hbWVcbiAgICAgICAgICAgICAgICB0aGlzLnN1bW1hcnkgPSBsb2NhdGlvbi53ZWF0aGVyWzBdLm1haW5cbiAgICAgICAgICAgICAgICB0aGlzLmljb24gPSBsb2NhdGlvbi53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbWFnZSh0aGlzLmljb24pXG4gICAgICAgICAgICAgICAgdmFyIHdlYXRoZXJPYmogPSBKU09OLnN0cmluZ2lmeShsb2NhdGlvbi5tYWluKVxuICAgICAgICAgICAgICAgIHZhciB3ZWF0aGVyID0gSlNPTi5wYXJzZSh3ZWF0aGVyT2JqKVxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFRlbXBlcmF0dXJlID0gTWF0aC5yb3VuZCh3ZWF0aGVyLnRlbXApLnRvU3RyaW5nKCkgKyBcIsKwXCJcbiAgICAgICAgICAgICAgICB0aGlzLmh1bWlkaXR5ID0gXCJodW1pZGl0eTogXCIgKyB3ZWF0aGVyLmh1bWlkaXR5LnRvU3RyaW5nKCkgKyBcIiVcIlxuICAgICAgICAgICAgICAgIHZhciB3aW5kT2JqID0gSlNPTi5zdHJpbmdpZnkobG9jYXRpb24ud2luZClcbiAgICAgICAgICAgICAgICB2YXIgd2luZCA9IEpTT04ucGFyc2Uod2luZE9iailcbiAgICAgICAgICAgICAgICB0aGlzLndpbmRTcGVlZCA9IFwid2luZDogXCIgKyB3aW5kLnNwZWVkLnRvU3RyaW5nKCkgKyBcIiBtcGhcIlxuICAgICAgICAgICAgICAgIHZhciB2aXNpYmlsaXR5T2JqID0gTWF0aC5yb3VuZChKU09OLnN0cmluZ2lmeShsb2NhdGlvbi52aXNpYmlsaXR5KS8xNjA5LjM0NClcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liaWxpdHkgPSBcInZpc2liaWxpdHk6IFwiICsgdmlzaWJpbGl0eU9iai50b1N0cmluZygpICsgXCIgbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0SW1hZ2UoaWNvbikgeyBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpY29uKVxuICAgICAgICAgICAgICAgIGlmIChpY29uLmluY2x1ZGVzKCdyYWluJykgfHwgaWNvbi5pbmNsdWRlcygndGh1bmRlcnN0b3JtJykgfHwgaWNvbi5pbmNsdWRlcygnZHJpenpsZScpKVxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuaW1hZ2UgPSBcIn4vaW1hZ2VzL3JhaW55LnBuZ1wiOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaWNvbi5pbmNsdWRlcygnY2xvdWRzJykpIFxuICAgICAgICAgICAgICAgICAgICB7IHRoaXMuaW1hZ2UgPSBcIn4vaW1hZ2VzL2Nsb3VkeS5wbmdcIjsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGljb24uaW5jbHVkZXMoJ3Nub3cnKSB8fCBpY29uLmluY2x1ZGVzKCdzbGVldCcpIHx8IGljb24uaW5jbHVkZXMoJ21pc3QnKSB8fCBpY29uLmluY2x1ZGVzKCdkcml6emxlJykgfHwgaWNvbi5pbmNsdWRlcygnaGF6ZScpKSBcbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLmltYWdlID0gXCJ+L2ltYWdlcy9mb2dneS5wbmdcIjsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGljb24uaW5jbHVkZXMoJ2NsZWFyJykpXG4gICAgICAgICAgICAgICAgICAgIHsgdGhpcy5pbWFnZSA9IFwifi9pbWFnZXMvc3VubnkucG5nXCI7IH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsb2dpbkZ1bmMoKSB7XG4gICAgICAgICAgICAgICAgbG9naW4oXCJZb3VyIG1lc3NhZ2VcIiwgXCJVc2VybmFtZSBmaWVsZCB2YWx1ZVwiLCBcIlBhc3N3b3JkIGZpZWxkIHZhbHVlXCIpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYERpYWxvZyByZXN1bHQ6ICR7cmVzdWx0LnJlc3VsdH0sIHVzZXI6ICR7cmVzdWx0LnVzZXJOYW1lfSwgcHdkOiAke3Jlc3VsdC5wYXNzd29yZH1gKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiAoKSA9PiAoe1xuICAgICAgICAgICAgaW1hZ2U6IFwiXCIsXG4gICAgICAgICAgICBjaXR5OiBcIlwiLFxuICAgICAgICAgICAgd2luZFNwZWVkOiBcIlwiLFxuICAgICAgICAgICAgc3VtbWFyeTogXCJcIixcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IFwiXCIsXG4gICAgICAgICAgICBodW1pZGl0eTogXCJcIixcbiAgICAgICAgICAgIGN1cnJlbnRUZW1wZXJhdHVyZTogXCJcIixcbiAgICAgICAgICAgIGFjY2VsZXJvbWV0ZXJWYWx1ZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgeDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgeTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgejogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB0ZXh0RmllbGRWYWx1ZTogXCJcIlxuICAgICAgICB9KSxcbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMubG9naW5GdW5jKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0TXlXZWF0aGVyKCkpXG4gICAgICAgICAgICB2YXIgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdmFyIGRheSA9IGN1cnJlbnREYXRlLmdldERheSgpO1xuICAgICAgICAgICAgdmFyIHdlZWtkYXlzID0gbmV3IEFycmF5KDcpO1xuICAgICAgICAgICAgd2Vla2RheXNbMF0gPSBcIlN1bmRheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbMV0gPSBcIk1vbmRheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbMl0gPSBcIlR1ZXNkYXlcIjtcbiAgICAgICAgICAgIHdlZWtkYXlzWzNdID0gXCJXZWRuZXNkYXlcIjtcbiAgICAgICAgICAgIHdlZWtkYXlzWzRdID0gXCJUaHVyc2RheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbNV0gPSBcIkZyaWRheVwiO1xuICAgICAgICAgICAgd2Vla2RheXNbNl0gPSBcIlNhdHVyZGF5XCI7XG4gICAgICAgICAgICB2YXIgZGF5TmFtZSA9IHdlZWtkYXlzW2RheV07XG4gICAgICAgICAgICB2YXIgY3VycmVudEhvdXJzID0gY3VycmVudERhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgIHZhciB0aW1lT2ZEYXkgPSAoY3VycmVudEhvdXJzID49IDEyICkgPyBcIkFmdGVybm9vblwiIDogXCJNb3JuaW5nXCI7XG4gICAgICAgICAgICB0aGlzLmRheSA9IGRheU5hbWU7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSB0aW1lT2ZEYXlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuICAgIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAxMCAwO1xuICAgICAgICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIjtcbiAgICAgICAgZm9udC1zaXplOiAyMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5ib2xkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLndlYXRoZXItYm94IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTA7XG4gICAgfVxuXG4gICAgLndlYXRoZXItaW1hZ2Uge1xuICAgICAgICBtYXJnaW46IDUwO1xuICAgIH1cblxuICAgIC5sYXJnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNjA7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgfVxuXG4gICAgLnNtYWxsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cblxuICAgIC50aWdodCB7XG4gICAgICAgIG1hcmdpbjogNTtcbiAgICB9XG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=