const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind-speed');
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=44646&units=imperial&appid=c3b80b0b52a3df6207da3081ae49e184';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
  }

}
function  displayResults(weatherData) {
  const temp = weatherData.main.temp.toFixed(0)
  currentTemp.innerHTML = `<strong>${temp}</strong>&deg;F`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

  const speed = weatherData.wind.speed.toFixed(0)
  windSpeed.innerHTML = `${speed} mph`;
  calc_windChill(temp, speed);

}

function calc_windChill(temp, speed){
  if (temp <= 50  && speed >= 3.0) {
    const chill = 
        35.74 + 
        0.6215 * temp - 
        35.75 * speed ** 0.16 +
        0.4275 * temp * speed ** 0.16;

    //round result & insert windchill into wind-chill span 
    document.getElementById("wind-chill").textContent = Math.round(chill);
  }
  else {
      document.getElementById("wind-chill").textContent = "N/A";
  }
}
apiFetch();
  