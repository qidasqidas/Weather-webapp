function what(){
  let city = document.getElementById('city').value;
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&APPID=143454aa39bbe3442a890cdbf3f9db36')
.then(Response => Response.json())
.then(data => {
  document.getElementById('wrong').innerHTML = ""
   let name = data['name'];
   let temp = data['main']['temp'];
   let desc = data['weather'][0]['description'];
   let humi = data['main']['humidity'];
   let icon = data['weather'][0]['icon'];
   let wse = data['wind']['speed'];
   document.getElementById('temp').innerHTML = "Temperature: "+Math.floor((temp-32)*5/9)+"°C";
   document.getElementById('wspe').innerHTML = "Wind speed: "+    Math.floor(wse);
   document.getElementById('weather').innerHTML = "Weather: "+desc;
   document.getElementById('humidity').innerHTML = "Humidity: "+Math.floor(humi);
   document.getElementById('icon').src = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
   document.getElementById('name').innerHTML = name;
   let location = "https://www.google.com/maps/place/"+name;
   document.getElementById('map').href = location;
   document.getElementById('map').style.color = "blue"
   document.getElementById('map').style.cursor = "pointer"

})
.catch(Error => error())
function error(){
  document.getElementById('wrong').innerHTML = "Wrong city name!"
}
}