function displayWeather(data) {
  const weatherInfo = document.getElementById("weatherInfo");
  const tempC = data.currentConditions.temp;
  const country = data.resolvedAddress.split(", ").pop();

  const forecastHtml = data.days
    .slice(1, 8)
    .map((day) => {
      return `
          <div class="forecast-day">
              <h3>${new Date(day.datetime).toLocaleDateString()}</h3>
              <p>Temperature: ${day.temp} °C</p>
              <p>Condition: ${day.conditions}</p>
              <p>Chance of rain: ${day.precipprob}%</p>
          </div>
      `;
    })
    .join("");

  weatherInfo.innerHTML = `
      <h2>Weather in ${data.address}, ${country}</h2>
      <p>Current Temperature: ${tempC} °C</p>
      <p>Current Condition: ${data.currentConditions.conditions}</p>
      <h3>7-Day Forecast:</h3>
      <div class="forecast">${forecastHtml}</div>
  `;
}

export { displayWeather };
