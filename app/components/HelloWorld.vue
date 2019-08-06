<template>
    <Page class="Page" >
        <ActionBar title="Home" class="action-bar" />
        <ScrollView>
            <GridLayout rows="auto, auto" columns="*">
                <StackLayout row="0">
                    <Label class="bold" :text="city"></Label>
                    <Label :text="summary"></Label>
                    <Image class="weather-image" :src="image" />

                    <GridLayout class="weather-box" columns="1*,1*" rows="auto">
                        <Label col="0" row="0" class="large" :text="currentTemperature"></Label>
                        <StackLayout col="1" row="0">
                            <Label class="small bold" text="details"></Label>
                            <StackLayout class="hr-light tight"></StackLayout>
                            <Label class="small" :text="humidity"></Label>
                            <Label class="small" :text="windSpeed"></Label>
                            <Label class="small" :text="visibility"></Label>
                        </StackLayout>
                    </GridLayout>
                </StackLayout>
                
                <StackLayout row="1">
                    <Label :text="day"></Label>
                    <Label :text="time"></Label>
                    <Button text="Refresh" @tap="getMyWeather" />
                    <Button text="Login" @tap="loginFunc" />
                    <Button text="Button" @tap="onAlertTap" />
                </StackLayout>
                
                <!-- <StackLayout row="2">
                    <Button text="Start Accelerometer" @tap="startAccelerometer"
                        :visibility="accelerometerValues.x ? 'collapsed' : 'visible'" />
                    <StackLayout :visibility="accelerometerValues.x ? 'visible' : 'collapsed'">
                        <Label :text="'X: ' + accelerometerValues.x" />
                        <Label :text="'Y: ' + accelerometerValues.y" />
                        <Label :text="'Z: ' + accelerometerValues.z" />
                    </StackLayout>
                </StackLayout> -->
            </GridLayout>
        </ScrollView>
    </Page>
</template>

<script>
    const Geolocation = require("nativescript-geolocation")
    const Accuracy = require("tns-core-modules/ui/enums")
    const http = require("tns-core-modules/http")
    const accelerometer = require("nativescript-accelerometer")
    let accelerometerListening = false
    import Detail from '@/components/Detail.vue'

    export default {
        methods: {
            startAccelerometer: function() {
                if (accelerometerListening) {
                    accelerometer.stopAccelerometerUpdates();
                }
                accelerometer.startAccelerometerUpdates(
                    data => {
                        accelerometerListening = true
                        this.accelerometerValues = data
                    }, {
                        sensorDelay: "ui"
                    }
                );
            },
            onNavigateTap() {
                console.log("Button was pressed")
                this.$navigateTo(Detail)
            },
            onModalTap() {
                console.log("Button was pressed")
                this.$showModal(Detail)
            },
            onAlertTap() {
                console.log("Button was pressed")
                alert({
                        title: "Your title",
                        message: "Your message",
                        okButtonText: "Your OK button text"
                    }).then(() => {
                        console.log("Alert dialog closed")
                    })
            },
            getMyWeather() {
                console.log('Getting Weather...')
                Geolocation.enableLocationRequest();
                Geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, updateDistance: 0.1, timeout: 20000 })
                    .then(loc => {
                        if (loc) {
                            var appId = "473c9fd6cefce2c6223cf5914c7fe8dc";
                            var url = "https://api.openweathermap.org/data/2.5/weather?APPID=" + appId + "&units=imperial&lat=" + loc.latitude + "&lon=" + loc.longitude;
                            http.request({ url: url, method: "GET" }).then(this.parseResponse)
                        }
                    },
                        function(e) { console.log("Error: " + e.message); }
                    )
            },
            parseResponse(response) {
                console.log('WEATHER', response.content.toJSON())
                var location = response.content.toJSON()
                this.city = location.name
                this.summary = location.weather[0].main
                this.icon = location.weather[0].description
                this.setImage(this.icon)
                var weatherObj = JSON.stringify(location.main)
                var weather = JSON.parse(weatherObj)
                this.currentTemperature = Math.round(weather.temp).toString() + "°"
                this.humidity = "humidity: " + weather.humidity.toString() + "%"
                var windObj = JSON.stringify(location.wind)
                var wind = JSON.parse(windObj)
                this.windSpeed = "wind: " + wind.speed.toString() + " mph"
                var visibilityObj = Math.round(JSON.stringify(location.visibility)/1609.344)
                this.visibility = "visibility: " + visibilityObj.toString() + " m"
            },
            setImage(icon) { 
                console.log(icon)
                if (icon.includes('rain') || icon.includes('thunderstorm') || icon.includes('drizzle'))
                    { this.image = "~/images/rainy.png"; }
                else if (icon.includes('clouds')) 
                    { this.image = "~/images/cloudy.png"; }
                else if (icon.includes('snow') || icon.includes('sleet') || icon.includes('mist') || icon.includes('drizzle') || icon.includes('haze')) 
                    { this.image = "~/images/foggy.png"; }
                else if (icon.includes('clear'))
                    { this.image = "~/images/sunny.png"; }
            },
            loginFunc() {
                login("Your message", "Username field value", "Password field value").then(result => {
                    console.log(`Dialog result: ${result.result}, user: ${result.userName}, pwd: ${result.password}`);
                })
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
            this.loginFunc()
            console.log(this.getMyWeather())
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
            var timeOfDay = (currentHours >= 12 ) ? "Afternoon" : "Morning";
            this.day = dayName;
            this.time = timeOfDay
        }
    }
</script>

<style scoped>
    label {
        margin: 10 0;
        font-family: "Quicksand";
        font-size: 20;
        text-transform: uppercase;
        text-align: center;
    }

    .bold {
        font-weight: bold;
    }

    .weather-box {
        margin-top: 10;
    }

    .weather-image {
        margin: 50;
    }

    .large {
        font-size: 60;
        vertical-align: top;
    }

    .small {
        font-size: 15;
        margin: 0;
        text-align: left;
    }

    .tight {
        margin: 5;
    }
</style>