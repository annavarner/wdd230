const currentTemp = document.querySelector('#current-temp');
const conditions = document.querySelector('figcaption');
const humidity = document.querySelector('#humidity');
const icon = document.querySelector('#icon')
const threeDay = document.querySelector('#forecast');
const url = 'https://api.openweathermap.org/data/2.5/forecast?zip=92008&units=imperial&cnt=24&appid=c3b80b0b52a3df6207da3081ae49e184';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
        const forecast = data.list.filter((day) => {
          return day.dt_txt.endsWith("15:00:00")});
        forecast.forEach(displayForecast);
      } 
      else {
        throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
  }

}
function displayResults(weatherData) {
  const temp = weatherData.list[0].main.temp.toFixed(0);
  currentTemp.innerHTML = `<strong><em>${temp}&deg;F</em></strong>`;

  const description = weatherData.list[0].weather[0].description;
  conditions.innerHTML = `<strong><em>${description}</em></strong>`;

  const currentHumidity = weatherData.list[0].main.humidity.toFixed(0);
  humidity.innerHTML = `<strong><em>${currentHumidity}% humidity</em></strong> `;

  const currentIcon = `https://openweathermap.org/img/w/${weatherData.list[0].weather[0].icon}.png`;
  const desc = weatherData.list[0].weather[0].description;
  icon.setAttribute('src', currentIcon);
  icon.setAttribute('alt', desc);
  icon.setAttribute('loading', 'lazy');


}

function displayForecast(day) {
  list = document.createElement("ul");
  threeDay.appendChild(list);

  forecastDate = document.createElement ("li");
  forecastTemp = document.createElement ("li");
  forecastIcon = document.createElement ("img");

  const iconsrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
  const desc = day.weather[0].description;

  forecastDate.innerHTML = `<strong>${day.dt_txt.substr(5, 5)}</strong>`
  forecastTemp.innerHTML = `${day.main.temp.toFixed(0)}&deg;F`;
  forecastIcon.setAttribute('src', iconsrc);
  forecastIcon.setAttribute('alt', desc);
  forecastIcon.setAttribute('loading', 'lazy');

  list.appendChild(forecastDate);
  list.appendChild(forecastTemp);
  list.appendChild(forecastIcon);
  }

apiFetch();
  