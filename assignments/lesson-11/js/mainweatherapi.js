let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f1032fc36d05c17197425dc4e32cd89e';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('wscurrent').innerHTML = " " + weatherData.weather[0].main;
    document.getElementById('temp').innerHTML = " " + weatherData.main.temp_max.toFixed(0);
    document.getElementById('wshumidity').innerHTML = " " + weatherData.main.humidity + "%";
    document.getElementById('wind').innerHTML = " " + weatherData.wind.speed.toFixed(0);



    function windChill(t, s) {
        var x = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(s, 0.16))) + ((0.4275 * t) * (Math.pow(s, 0.16)));
        return x.toFixed()
    }

    document.getElementById('chill').innerHTML = windChill(weatherData.main.temp_max, weatherData.wind.speed) + "&deg;F";

}

let forecastRequest = new XMLHttpRequest();
let forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=f1032fc36d05c17197425dc4e32cd89e';
forecastRequest.open('Get', forecastURL, true);
forecastRequest.send();

forecastRequest.onload = function () {
    let forecastData = JSON.parse(forecastRequest.responseText);
    //console.log(forecastData);

    let tempforecast = [];
    let forecasticon = [];
    let foremain = [];
    let altforecast = [];
    let day = 1;

    forecastData.list.forEach(hour => {
        if (hour.dt_txt.includes('18:00:00')) {
            forecasticon[day] = "http://openweathermap.org/img/w/" + hour.weather[0].icon + ".png";
            tempforecast[day] = hour.main.temp_max.toFixed();
            foremain[day] = hour.weather[0].main;
            altforecast[day] = hour.weather[0].description;
            day++;
        }

    });

    for (let i = 1; i <= 5; i++) {
        document.getElementById('fimg' + i).setAttribute('src', forecasticon[i]);
        document.getElementById('fimg' + i).setAttribute('alt', altforecast[i]);
        document.getElementById('fdiv' + i).innerHTML = foremain[i];
        document.getElementById('temp' + i).innerHTML = tempforecast[i];

    }
}


const weekday = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const output = document.getElementsByTagName("thead");
let tdate = new Date();
let dayb = weekday[tdate.getDay()];

for (let i = 1; i <= 5; i++) {
	dayb = document.createElement("th");
	dayb.textContent = weekday[(tdate.getDay() + i)%7];
	output[0].appendChild(dayb);
}
