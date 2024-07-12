import { getWeather } from "./api.js";
import { displayWeather } from "./dom.js";

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
