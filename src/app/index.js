import './../style.css';
const {Weather} = require('./weather');
const { UI } = require('./ui');

const ui = new UI();
const weather = new Weather('London');

async function fetchWeather() {
    const data = await weather.getWeather();
    ui.render(data);
}
document.addEventListener('DOMContentLoaded',fetchWeather);

document.querySelector('#weather-btn').addEventListener('click', (e) => {
    e.preventDefault;
    let city = document.querySelector('#city').value;
    weather.changeLocation(city);
    fetchWeather();
});