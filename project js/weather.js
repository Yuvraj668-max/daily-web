document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherButton = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const tempratureDisplay = document.getElementById("tempreture");
  const feelsLike = document.getElementById("feelsLike");
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "0ff6a23d15f6c04f79149139bdedc5e0";

  getWeatherButton.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (city === "") return;

    // it may throw an error
    //sever/database is always in other continent

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      // console.log("affing error class");
      // console.log(error);

      showError();
    }
  });

  async function fetchWeatherData(city) {
    //gets the data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    console.log(response);

    if (!response.ok) {
      throw new Error("city not found");
    }
    const data = await response.json();
    return data;
  }
  function displayWeatherData(data) {
    //displays tthe data
    console.log(data);
    console.log(tempratureDisplay);

    const { name, main, weather } = data;
    cityNameDisplay.textContent = name;
    tempratureDisplay.textContent = `Tempreture = ${main.temp} C`;
    descriptionDisplay.textContent = `Weather = ${weather[0].description}`;
    feelsLike.textContent = `Feels Like =${main.feels_like}`
    //unlock the display
    weatherInfo.classList.remove("hidden");
    weatherInfo.classList.add("centralise");

    errorMessage.classList.add("hidden");
  }
  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
