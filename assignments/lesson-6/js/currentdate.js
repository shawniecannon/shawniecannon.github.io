var mydate=new Date()
var year=mydate.getYear()
if (year < 1000)
year+=2000
var day=mydate.getDay()
var month=mydate.getMonth()
var daym=mydate.getDate()
var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
var thedate = (dayarray[day]+", "+montharray[month]+" "+daym+", "+year+")
document.getElementById('currentdate').innerHTML = thedate;

/*if (daym<10)
daym="0"+daym*/