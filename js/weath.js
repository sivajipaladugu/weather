window.onload = function(){
var latt;
var long;
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
    latt=position.coords.latitude;
    long=position.coords.longitude;



var weather = new XMLHttpRequest();
weather.open("GET","http://api.openweathermap.org/data/2.5/weather?lat="+latt+"&lon="+long+"&appid=b86d21440d8c9a110912a2eb0845abb4&preventCache=%27%20+%20new%20Date();",false);
weather.send(null);

var r = JSON.parse(weather.response);
console.log(r);
var loc = "Your Current location :" + r.name + "<br />";
var temp = r.main.temp + "<br/>";
var pres = r.main.pressure + "<br/>";
var hum = r.main.humidity + "<br/>";
var wind = r.wind.speed + "<br/>";
var main = r.weather[0].main ;
var des = r.weather[0].description + "<br/>";
var cood = r.coord.lon +"&nbsp;"+"&nbsp;" ;
var lat = r.coord.lat + "<br/>";
var img = "<img id='ims' src='https:\\openweathermap.org/img/w/"+r.weather[0].icon+".png'>" + "<br/>";


document.getElementById("weather").innerHTML = loc;
document.getElementById("temp").innerHTML = temp;
document.getElementById("wind").innerHTML = wind;
document.getElementById("wmain").innerHTML = main;
document.getElementById("des").innerHTML = des;
document.getElementById("cod").innerHTML = cood;
document.getElementById("lat").innerHTML = lat;
document.getElementById("pres").innerHTML = pres;
document.getElementById("hum").innerHTML = hum;
document.getElementById("im").innerHTML = img;

});
}
}