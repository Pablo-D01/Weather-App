async function getWeather() {
  try {
    const response = await fetch(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=RJY37TAWZKRJ2X87PHNK7G4XD",
      { mode: "cors" }
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

export { getWeather };
