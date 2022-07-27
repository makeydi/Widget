import getWeather from "./getWeather.js";
const inputCity = document.querySelector('.input-city');
const btnForm = document.querySelector(".btn-form");
btnForm.addEventListener('click', (e) => {
    let myCity = inputCity.value;
    getWeather(myCity); 
})