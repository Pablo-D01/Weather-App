import * as apiFncs from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  apiFncs
    .getWeather()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
});
