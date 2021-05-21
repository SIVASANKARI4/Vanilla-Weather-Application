function displayTemperature(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = Math.round(response.data.name);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

let apiKey = "088d8a6c5e7273acf522248253ec0282";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Vellore&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemperature);
