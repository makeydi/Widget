import parseMillisec from "./parseMillisecondsIntoReadableTime.js";
import dayName from "./dayName.js";
import dataFiveDays from "./dataFiveDays.js";
import dataFiveNights from "./dataFiveNight.js";
function renderingWeather(data) {
    const mainInfo = document.querySelector(".main-info");
    const templateMainInfo = `
        <div class="day-name">${dayName(data.list[0].dt)}</div>
        <div class="weather-status">${data.list[0].weather[0].description}</div>
        <img class="icon-today" src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="icon-today">
        <div class="wether-temper">${Math.round(data.list[0].main.temp)} &degC</div>`;
    const otherInfo = document.querySelector(".other-info");
    const templateOtherInfo = `
        <div>Как будто ${Math.round(data.list[0].main.feels_like)} &degC</div>
        <div>Ветер ${data.list[0].wind.speed} км/ч</div>
        <div>Видимость ${data.list[0].visibility / 1000} км</div>
        <div>Барометр ${data.list[0].main.pressure} мбар</div>
        <div>Влажность ${data.list[0].main.humidity} %</div>
        <div>Восход ${parseMillisec(data.city.sunrise)}</div>
        <div>Заход солнца ${parseMillisec(data.city.sunset)}</div>`;
    otherInfo.innerHTML = templateOtherInfo;
    mainInfo.innerHTML = templateMainInfo;
    const fiveDays = document.querySelector('.week-container');
    const templateFiveDays = `
        <div class="week-day">
            <div class="day-name">${dayName(dataFiveDays(data)[0].dt)}</div>
            <div class="day-icon"><img src="https://openweathermap.org/img/wn/${dataFiveDays(data)[0].weather[0].icon}@2x.png" alt="icon-today"></div>
            <div class="day-temp">${Math.round(dataFiveDays(data)[0].main.temp)} &deg</div>
            <div class="night-temp">${Math.round(dataFiveNights(data)[0].main.temp)} &deg</div>
        </div>
        <div class="week-day">
            <div class="day-name">${dayName(dataFiveDays(data)[1].dt)}</div>
            <div class="day-icon"><img src="https://openweathermap.org/img/wn/${dataFiveDays(data)[1].weather[0].icon}@2x.png" alt="icon-today"></div>    
            <div class="day-temp">${Math.round(dataFiveDays(data)[1].main.temp)} &deg</div>
            <div class="night-temp">${Math.round(dataFiveNights(data)[1].main.temp)} &deg</div>
        </div>
        <div class="week-day">
            <div class="day-name">${dayName(dataFiveDays(data)[2].dt)}</div>
            <div class="day-icon"><img src="https://openweathermap.org/img/wn/${dataFiveDays(data)[2].weather[0].icon}@2x.png" alt="icon-today"></div>
            <div class="day-temp">${Math.round(dataFiveDays(data)[2].main.temp)} &deg</div>
            <div class="night-temp">${Math.round(dataFiveNights(data)[2].main.temp)} &deg</div>
        </div>
        <div class="week-day">
            <div class="day-name">${dayName(dataFiveDays(data)[3].dt)}</div>
            <div class="day-icon"><img src="https://openweathermap.org/img/wn/${dataFiveDays(data)[3].weather[0].icon}@2x.png" alt="icon-today"></div>
            <div class="day-temp">${Math.round(dataFiveDays(data)[3].main.temp)} &deg</div>
            <div class="night-temp">${Math.round(dataFiveNights(data)[3].main.temp)} &deg</div>
        </div>
        <div class="week-day">
            <div class="day-name">${dayName(dataFiveDays(data)[4].dt)}</div>
            <div class="day-icon"><img src="https://openweathermap.org/img/wn/${dataFiveDays(data)[4].weather[0].icon}@2x.png" alt="icon-today"></div>
            <div class="day-temp">${Math.round(dataFiveDays(data)[4].main.temp)} &deg</div>
            <div class="night-temp">${Math.round(dataFiveNights(data)[4].main.temp)} &deg</div>
        </div>`;
    fiveDays.innerHTML = templateFiveDays;
}
export default renderingWeather;