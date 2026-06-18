export function fetchWeather() {
  fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=43.36&longitude=-5.85&current=temperature_2m,relative_humidity_2m,weather_code",
  )
    .then((res) => res.json())
    .then((data) => {
      const temperature2m = data.current.temperature_2m;
      const relativeHumidity2m = data.current.relative_humidity_2m;
      const weatherCode = data.current.weather_code;
      const liveliness = BallLiveliness(temperature2m, relativeHumidity2m);
      const icon = weatherIcon(weatherCode);
      const weatherDesc = weatherDescription(weatherCode);
      document.getElementById("weather-data").innerHTML = `
              <span class="weather-desc"><i class="fa-solid ${icon} weather-icon"></i>${weatherDesc}</span>
              <span class="weather-temp"><i class="fa-solid fa-temperature-half"></i> ${temperature2m}°C</span>
              <span class="weather-humidity"><i class="fa-solid fa-droplet"></i> ${relativeHumidity2m}%</span>
        `;

      document
        .querySelectorAll(
          "#liveliness-low, #liveliness-normal, #liveliness-high",
        )
        .forEach((el) => el.classList.remove("active"));
      document
        .getElementById(`liveliness-${liveliness}`)
        .classList.add("active");
    })
    .catch(() => {
      document.getElementById("weather-data").innerHTML =
        `<p class="weather-error">Could not load weather</p>`;
    });
}


export function BallLiveliness(temp, humidity) {
  if (temp <= 10) {
    return "low";
  } else if (temp <= 16) {
    if (humidity > 70) {
      return "low";
    } else {
      return "normal";
    }
  } else if (temp <= 26) {
    if (humidity > 75) {
      return "low";
    } else if (humidity < 35) {
      return "high";
    } else {
      return "normal";
    }
  } else if (temp <= 33) {
    if (humidity > 70) {
      return "normal";
    } else {
      return "high";
    }
  } else {
    if (humidity > 60) {
      return "normal";
    } else {
      return "high";
    }
  }
}

export function weatherIcon(code) {
  switch (true) {
    case code === 0:
      return "fa-sun";
    case code <= 2:
      return "fa-cloud-sun";
    case code <= 3:
      return "fa-cloud";
    case code <= 48:
      return "fa-smog";
    case code <= 67:
      return "fa-cloud-rain";
    case code <= 77:
      return "fa-snowflake";
    case code <= 82:
      return "fa-cloud-showers-heavy";
    case code <= 86:
      return "fa-snowflake";
    default:
      return "fa-cloud-bolt";
  }
}

export function weatherDescription(code) {
  if (code === 0) return "Clear sky";
  if (code <= 2) return "Partly cloudy";
  if (code <= 3) return "Overcast";
  if (code <= 48) return "Foggy";
  if (code <= 57) return "Drizzle";
  if (code <= 67) return "Rain";
  if (code <= 77) return "Snow";
  if (code <= 82) return "Rain showers";
  if (code <= 86) return "Snow showers";
  return "Thunderstorm";
}


