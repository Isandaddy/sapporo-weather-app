import { Cloud } from "./cloud.js";
import { Rain } from "./rain.js";
import { Clear } from "./clear.js";
import { Drizzle } from "./drizzle.js";
import { Snow } from "./snow.js";
import { Atmosphere } from "./atmosphere.js";
import { Thunder } from "./thunderstorm.js";

const canvas = document.getElementById('canvas');
const canvas2 = document.getElementById('canvas2');
const desc = document.querySelector('.desc');

async function getWeatherData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const { name, weather: [{ id, main }] } = data;
    addDesc(name, main);
    const checkedAtmosphereWeather = convertAtmosphere(main, id);
    const weather = instanceWeather(checkedAtmosphereWeather);
    weather.generateWeather();
  } catch (error) {
    console.error(error);
  }
}

function instanceWeather(weather) {
  switch (weather) {
    case 'Clear':
      console.log('Clear');
      return new Clear(canvas);
    case 'Clouds':
      console.log('Clouds');
      return new Cloud(canvas);
    case 'Rain':
      console.log('Rain');
      return new Rain(canvas);
    case 'Snow':
      console.log('Snow');
      return new Snow(canvas);
    case 'Drizzle':
      console.log('Drizzle');
      return new Drizzle(canvas);
    case 'Thunderstorm':
      console.log('Thunderstorm');
      const clouds = new Cloud(canvas);
      const rain = new Rain(canvas2);
      return new Thunder(canvas, clouds, rain);
    case 'Atmosphere':
      console.log('Atmosphere');
      return new Atmosphere(canvas);
    default:
      console.log(`Sorry, we are out of ${weather}.`);
      break;
  }
}

function addDesc(name, main) {
  desc.innerHTML = `
      <h1 class="city">${name}</h1>
      <h3 class="weather_status">${main}</h3>
    `;
}

function convertAtmosphere(weatherStatus, weatherId) {
  const firstDigit = Math.floor(weatherId / 100);
  return firstDigit === 7 ? 'Atmosphere' : weatherStatus;
}

getWeatherData('https://api.openweathermap.org/data/2.5/weather?lat=43.061936&lon=141.3542924&appid=9b40b9ecb9005f6efc5dbdbda64df340');
