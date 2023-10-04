const cityElement = document.querySelector('.input');

const error = document.getElementsByClassName('error')[0];

cityElement.focus();

const searchButton = document.querySelector('.button');


searchButton.addEventListener('click', () => {
  const city = cityElement.value;
  checkWeather(city);
});

cityElement.addEventListener('keydown', (key) => {
  if (key.key === 'Enter') {
    const city = cityElement.value;
    checkWeather(city);
  }
});

async function checkWeather(cityName) {

  const apiKey = "a8eeb490e36ac458b1c4925ec6ab6eb2";

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;

  const response = await fetch(API_URL);

  if (response.status == 404) {
    error.style.display = `block`;
    document.getElementsByClassName('weather')[0].style.display = `none`;
    cityElement.value = '';
    cityElement.focus();
  }
  else {
    const result = await response.json();

    document.getElementsByClassName('city')[0].innerHTML = result.name;

    document.getElementsByClassName('temperature')[0].innerHTML = `${Math.round(result.main.temp)}&deg;C`;

    document.getElementsByClassName('humidity')[0].innerHTML = `${result.main.humidity}%`;

    document.getElementsByClassName('wind')[0].innerHTML = `${result.wind.speed} km/h`;

    cityElement.value = '';

    const weatherIcon = document.getElementsByClassName('weather-icon')[0];

    weatherIcon.src = `images/${result.weather[0].main}.png`

    weatherIcon.alt = `${result.weather[0].main}`

    document.getElementsByClassName('weather')[0].classList.add('active');

    error.style.display = `none`;

    document.getElementsByClassName('weather')[0].style.display = `block`;

  }


  // console.log(result.weather[0].main)
}



// weather.firstChild.innerHTML = `<img src=\"images/${result.weather[0].main}.png\" class=\"weather-icon\">`

// console.log(weather.firstChild)
// console.log(cityName.value)
// const cityName = 'shimoga';
// console.log(typeof result.main.pressure);
// console.log(result.sys['country']);
// console.log(result.weather[0].main);
// console.log(result.wind.deg);



// name, sys {country}, weather[{0}] -> main, wind{ speed,deg }, main -> humidity, pressure, temp