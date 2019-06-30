
let weatherRequest = new XMLHttpRequest ();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f1032fc36d05c17197425dc4e32cd89e';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    //console.log(weatherData);

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


//Spent about 5 hours on dynamic code possiblilities - have to move on.

/*let icon = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
    let desc = weatherData.weather[0].description;

    document.getElementById('abc-img').setAttribute('src', icon);
    document.getElementById('abc-img').setAttribute('alt', desc); */
    
    /*var t = parseFloat(document.getElementById('temp').innerHTML);
var s = parseFloat(document.getElementById('wind').innerHTML);

var f = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(s, 0.16))) + ((0.4275 * t) * (Math.pow(s, 0.16)));
document.getElementById("chill").innerHTML = f.toFixed(1) <==== NOOO!   + "&deg;F"; */

/*  f1032fc36d05c17197425dc4e32cd89e */

// Preston 5604473

//Soda Springs 5607916

//Fish Haven  5593814

//HaHa...nice try.  Arggghhh!

/*if (document.getElementById('townid').innerHTML == "Preston") {
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f1032fc36d05c17197425dc4e32cd89e';
}
else if (document.getElementById('townid').innerHTML == "Soda Springs") {
    let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=f1032fc36d05c17197425dc4e32cd89e';  
}
else if (document.getElementById('townid').innerHTML == "Fish Haven")  {
    let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5593814&units=imperial&APPID=f1032fc36d05c17197425dc4e32cd89e';
}
else {
    let apiURLstring = NaN;
}
*/

/*let weatherRequest = new XMLHttpRequest ();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f1032fc36d05c17197425dc4e32cd89e';
*/