function mic(){

  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
            
// This runs when the speech recognition service starts
recognition.onstart = function() {
    recognition.continious=true;

};

recognition.onspeechend = function() {
    // when user is done speaking
    recognition.stop();
}
              
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;
    transcript = transcript.toLowerCase();
document.getElementById('city').value =  transcript;
document.getElementById("sumb").click();
}
let src = document.getElementById("mics").src;
console.log(src);
if(src == "https://qidasqidas.github.io/Weather-webapp-Mubin/mic.png"){
document.getElementById("mics").src = "https://qidasqidas.github.io/Weather-webapp-Mubin/mic_off.png";
recognition.start();
}
if(src == "https://qidasqidas.github.io/Weather-webapp-Mubin/mic_off.png"){
  document.getElementById("mics").src = "https://qidasqidas.github.io/Weather-webapp-Mubin//mic.png";
  recognition.stop()
}
}


function what(){
document.getElementById("nfLoader").style.width = "100px";
document.getElementById("nfLoader").style.height = "100px";
document.getElementById("nfLoader").style.marginTop = "50px";
document.getElementById("ibox").style.visibility = "hidden";
document.getElementById("icon").style.visibility = "hidden";
document.getElementById("loa").style.visibility = "visible";
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
   document.getElementById("icon").style.visibility = "visible"
   document.getElementById("icon").style.width = "105px";
   document.getElementById("icon").style.height = "105px"

   document.getElementById("nfLoader").style.width = "0px";
   document.getElementById("nfLoader").style.height = "0px";
   document.getElementById("nfLoader").style.marginTop = "0px";
   document.getElementById("ibox").style.visibility = "visible";
   document.getElementById("loa").style.visibility = "hidden";
})
.catch(Error => error())
function error(){
  document.getElementById('wrong').innerHTML = "";
  document.getElementById("nfLoader").style.width = "0px";
  document.getElementById("nfLoader").style.height = "0px";
  document.getElementById("nfLoader").style.marginTop = "0px";
  document.getElementById("ibox").style.visibility = "visible";
  document.getElementById("icon").style.visibility = "hidden"
  document.getElementById("icon").style.width = "0px";
  document.getElementById("icon").style.height = "0px"
  document.getElementById("icon").style.visibility = "hidden"
  document.getElementById('wrongs').play()
  document.getElementById('temp').innerHTML = "Temperature:";
  document.getElementById('wspe').innerHTML = "Wind speed:";
  document.getElementById('weather').innerHTML = "Weather:";
  document.getElementById('humidity').innerHTML = "Humidity:";
  document.getElementById('icon').src = "#"
  document.getElementById('name').innerHTML = "";
  let location = "#";
  document.getElementById('map').href = "#";
  document.getElementById('map').style.color = "#3e0115"
  document.getElementById('map').style.cursor = "not-allowed"
  document.getElementById('wrong').innerHTML = "Please enter a valid City Name!";
  document.getElementById("loa").style.visibility = "hidden";
setTimeout(() => {
  readOut("Please enter a valid city name")
}, 500);
}
}
function readOut(message){
  const speech = new SpeechSynthesisUtterance();
  const allVoices = speechSynthesis.getVoices();
  speech.text = message;
  speech.voice = allVoices[0];
  speech.volume = 1;
  window.speechSynthesis.speak(speech);  
}  
setInterval(() => {
  console.clear()
}, 1000);   