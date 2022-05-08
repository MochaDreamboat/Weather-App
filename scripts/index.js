import { displayWeatherData } from "./WeatherUI.js";

const searchButton = document.getElementById('search');


// Fetches weather data (city, conditions, temperature, humidity)
// from API and returns data in an object.

// To be returned UI generating function displaying data to user.


function WeatherInfo(data) {
    this.city = data.name;
    this.conditions = data.weather[0].description;
    this.temperature = data.main.temp;
    this.pressure = data.main.pressure;
    this.humidity = data.main.humidity;
}

function getWeatherResponse(searchedCity) {
    let weatherInfo = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&APPID=7498ebf6859f10448d9e3958cea02c93&units=imperial`);

    weatherInfo
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                alert('Please enter a valid city');
                throw new Error;
            }
        })
        .then((response) => {
            let userWeatherData = new WeatherInfo(response);
            displayWeatherData(userWeatherData);
        })
        .catch(err => console.log(err));
}

searchButton.addEventListener('click', () => {
    let query = document.getElementById('query').value;
    getWeatherResponse(query);
});