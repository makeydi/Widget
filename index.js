import getQuotes from "./getQuotes.js";
import getWeather from "./getWeather.js";
const inputCity = document.querySelector('.input-city');
const btnForm = document.querySelector(".btn-form");
btnForm.addEventListener('click',  e => {weatherStart()})  
document.addEventListener( 'keydown', event => {
    if (event.code === 'Enter') {
    console.log('start')
    return weatherStart()
    }
})
document.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    weatherStart();
    console.log("start");
  }
});
function weatherStart(){
    let myCity = inputCity.value;
    getWeather(myCity);
};
getQuotes();