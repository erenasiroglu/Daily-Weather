const url = "https://api.openweathermap.org/data/2.5/";

const key = "8551aad0492b5c93c3c2ef4b0d4ec834";

const setQuery = (e) => {
  if (e.keyCode == "13") getResult(searchBar.value);
};

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  let city = document.querySelector(".city");
  city.innerText = `${result.name},${result.sys.country}`;

  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`;

  let description = document.querySelector(".description");
  description.innerText = result.weather[0].description;

  let minMax = document.querySelector(".minMax");
  minMax.innerText = `${Math.round(result.main.temp_min)}°C/${Math.round(
    result.main.temp_max
  )}°C`;
};

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery);
