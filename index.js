const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey ="32ea5e5907fd409b8b3867531756c1e0";
const searchbox = document.querySelector(".field input");
const searchbtn = document.querySelector(".field button")
const weathericon= document.querySelector(".weather-icon")

async function clickweather(city){
    const reponse = await fetch(apiUrl +city+ `&appid=${apikey}`);


    if(reponse.status==404){
      document.querySelector(".error").style.display="block";
      document.querySelector(".about").style.display="none"

    }else{
      var data = await reponse.json();

    

      document.querySelector(".city").innerHTML = data.name
      document.querySelector(".dig").innerHTML = data.main.temp+"°c"
      document.querySelector(".par").innerHTML = data.main.humidity+"%"
      document.querySelector(".speed").innerHTML = data.wind.speed+"Km/ph"
  
      if(data.weather[0].main=="Clouds"){
        weathericon.src = "cloud.png"
      }else if(data.weather[0].main=="Clear"){
          weathericon.src = "clear.jpeg"
        }else if(data.weather[0].main=="Rain"){
          weathericon.src = "rain.png"
        }else if(data.weather[0].main=="Drizzle"){
          weathericon.src = "drizzle.png"
        }else if(data.weather[0].main=="Mist"){
          weathericon.src = "weather1.jpeg"
        }
   
        document.querySelector(".about").style.display="flex"
        
    }


    
}
 
searchbtn.addEventListener("click",()=>{
    clickweather(searchbox.value);
})