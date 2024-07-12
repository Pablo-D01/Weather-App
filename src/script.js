import { getWeather } from "./api.js";
import { displayWeather } from "./dom.js";

async function loadDefaultWeather() {
  try {
    const weatherData = await getWeather("Singapore");
    displayWeather(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

document
  .getElementById("weatherForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const city = document.getElementById("city").value;
    try {
      const weatherData = await getWeather(city);
      displayWeather(weatherData);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  });

document.addEventListener("DOMContentLoaded", loadDefaultWeather);
