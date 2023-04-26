"use strict";const city=document.querySelector("#cityName"),state=document.querySelector("#stateCode"),country=document.querySelector("#countryCode"),btnSubmit=document.querySelector("#submit"),temp=document.querySelector("#temperature"),feelsLike=document.querySelector("#feels_like"),humidity=document.querySelector("#humidity"),windSpeed=document.querySelector("#wind-speed"),img=document.querySelector("#img"),dateInfo=document.querySelector("#date"),description=document.querySelector("#description"),infoContainer=document.querySelector(".info"),cityDisplayName=document.querySelector("#cityDisplayName"),displayDate=()=>{const e=new Date,t=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()].slice(0,3),n=e.getDate(),o=e.getHours(),i=e.getMinutes();console.log(typeof i);const c=`${t} ${n}, ${o}:${i}${o>12?"pm":"am"}`;dateInfo.textContent=c};displayDate(),infoContainer.style.display="none",btnSubmit.addEventListener("click",(function(e){if(""!=city.value&&""!=state.value&&""!=country.value){const e=city.value,t=state.value,n=country.value;fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${e},${t},${n}&limit=4&appid=7cb853706a03d9e315fea20cbd0c8d2f`).then((e=>e.json())).then((e=>{const{lat:t}=e[0],{lon:n}=e[0];fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${n}&appid=7cb853706a03d9e315fea20cbd0c8d2f&units=metric`).then((e=>e.json())).then((e=>{const t=e.weather[0].icon;img.src=` https://openweathermap.org/img/wn/${t}@2x.png`,infoContainer.style.display="block",console.log(e),temp.textContent=e.main.temp+"℃",feelsLike.textContent=e.main.feels_like,humidity.textContent=e.main.humidity,windSpeed.textContent=e.wind.speed,description.textContent=e.weather[0].description,cityDisplayName.textContent=`${e.name}, ${e.sys.country}`,console.log(cityDisplayName),console.log(cityDisplayName.textContent)}))}))}}));
//# sourceMappingURL=index.aab7f4b8.js.map