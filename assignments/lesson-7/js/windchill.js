

var t = parseFloat(document.getElementById('temp').innerHTML);
var s = parseFloat(document.getElementById('wind').innerHTML);

var f = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(s, 0.16))) + ((0.4275 * t) * (Math.pow(s, 0.16)));

document.getElementById("chill").innerHTML = f.toFixed(1) + "&deg;F";