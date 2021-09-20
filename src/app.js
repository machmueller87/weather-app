// Current Date
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#currentDate");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//
//
//
//
//
//
// Search + API
function displayWeather(response) {
  let iconElement = document.querySelector("currentTempIcon"); 
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("h3").innerHTML = Math.round(response.data.main.temp);
  iconElement.innerHTML=""
}

function search(event) {
  event.preventDefault();
  let apiKey = "ea97b57ce7c5e5f67f7b9f59b21d70bf";
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let searchInput = document.querySelector("#search-text-input");
  axios.get(apiUrl).then(displayWeather);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
