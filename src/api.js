const apiKey = "RJY37TAWZKRJ2X87PHNK7G4XD";

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}`,
      { mode: "cors" }
    );
    if (!response.ok) {
      throw new Error("City not found");
    }
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

export { getWeather };
