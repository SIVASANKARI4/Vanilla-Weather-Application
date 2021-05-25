function formatDate(timestamp) {
  //calculate date
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();

  return;
}

function displayTemperature(response) {
  console.log(response.data);
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let SpeedElement = document.querySelector("#windSpeed");
  let dateElement = document.querySelector("#date");

  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  SpeedElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "088d8a6c5e7273acf522248253ec0282";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Vellore&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
