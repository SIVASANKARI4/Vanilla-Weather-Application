function displayTemperature(response) {
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.name;
  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "088d8a6c5e7273acf522248253ec0282";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Vellore&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
