/*  f1032fc36d05c17197425dc4e32cd89e */

// Preston 5061036

let weatherRequest = new XMLHttpRequest ();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f1032fc36d05c17197425dc4e32cd89e';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('current-temp').innerHTML = weatherData.main.temp.toFixed(1);

    let icon = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    let desc = weatherData.weather[0].description;

    document.getElementById('cc-img').setAttribute('src', icon);
    document.getElementById('cc-img').setAttribute('alt', desc);
    
}