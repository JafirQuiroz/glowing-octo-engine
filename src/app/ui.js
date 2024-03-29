export class UI {
  constructor() {
    this.location = document.querySelector("#weather-location");
    this.desc = document.querySelector("#weather-description");
    this.string = document.querySelector("#weather-string");
    this.humidity = document.querySelector("#weather-humidity");
    this.wind = document.querySelector("#weather-wind");
  }

  render(weather) {
    this.location.textContent = weather.name;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = weather.main.temp + ' ºC';
    this.humidity.textContent = 'Humidity: ' + weather.main.humidity + ' %';
    this.wind.textContent = 'Wind: ' + weather.wind.speed + 'ms';
  }

}
