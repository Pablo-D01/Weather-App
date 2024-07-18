function displayWeather(data) {
  const weatherInfoElement = document.getElementById("weatherInfo");
  const { currentConditions, resolvedAddress, days, address } = data;
  const country = resolvedAddress.split(", ").pop();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getDayOfWeek = (dateString) =>
    daysOfWeek[new Date(dateString).getDay()];

  const currentWeatherHtml = `
    <h2>Weather in ${address}, ${country}</h2>
    <p>${getDayOfWeek(days[0].datetime)}</p>
    <p>Current Temperature: ${currentConditions.temp} °C</p>
    <p>Current Condition: ${currentConditions.conditions}</p>
  `;

  const forecastHtml = days
    .slice(1, 8)
    .map((day) => {
      const { datetime, temp, conditions, precipprob } = day;
      return `
      <div class="forecast-day">
        <h3>${getDayOfWeek(datetime)} - ${new Date(
        datetime
      ).toLocaleDateString()}</h3>
        <p>Temperature: ${temp} °C</p>
        <p>Condition: ${conditions}</p>
        <p>Chance of rain: ${precipprob}%</p>
      </div>
    `;
    })
    .join("");

  weatherInfoElement.innerHTML = `
    ${currentWeatherHtml}
    <h3>7-Day Forecast:</h3>
    <div class="forecast">${forecastHtml}</div>
  `;
}

export { displayWeather };
