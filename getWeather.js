import renderingWeather from "./renderingWeather.js";
async function getWeather(myCity) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${myCity}&lang=ru&appid=64975721b9d80d9ce494207927888c6c&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  renderingWeather(data);
}
export default getWeather;
