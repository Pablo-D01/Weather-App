function displayWeather(data) {
  const weatherInfo = document.getElementById("weatherInfo");
  const tempF = data.currentConditions.temp;
  const tempC = ((tempF - 32) * 5) / 9; // Convert Fahrenheit to Celsius
  weatherInfo.innerHTML = `
      <h2>Weather in ${data.address}</h2>
      <p>Temperature: ${tempC.toFixed(1)} °C</p>
      <p>Condition: ${data.currentConditions.conditions}</p>
      <p>Description: ${data.description}</p>

  `;
}

export { displayWeather };
