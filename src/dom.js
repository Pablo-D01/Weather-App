function displayWeather(data) {
  const weatherInfo = document.getElementById("weatherInfo");
  const currentConditions = data.currentConditions;
  const country = data.resolvedAddress.split(", ").pop();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDay = new Date(data.days[0].datetime).getDay();
  const currentHtml = `
      <h2>Weather in ${data.address}, ${country}</h2>
      <p>${daysOfWeek[currentDay]}</p>
      <p>Current Temperature: ${currentConditions.temp} °C</p>
      <p>Current Condition: ${currentConditions.conditions}</p>
  `;

  const forecastHtml = data.days
    .slice(1, 8)
    .map((day) => {
      const dayOfWeek = new Date(day.datetime).getDay();
      return `
          <div class="forecast-day">
              <h3>${daysOfWeek[dayOfWeek]} - ${new Date(
        day.datetime
      ).toLocaleDateString()}</h3>
              <p>Temperature: ${day.temp} °C</p>
              <p>Condition: ${day.conditions}</p>
              <p>Chance of rain: ${day.precipprob}%</p>
          </div>
      `;
    })
    .join("");

  weatherInfo.innerHTML =
    currentHtml +
    `<h3>7-Day Forecast:</h3><div class="forecast">${forecastHtml}</div>`;
}

export { displayWeather };
