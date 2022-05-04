const searchButton = document.getElementById('search');


// Fetches weather data (city, conditions, temperature, humidity)
// from API and returns data in an object.

// To be returned UI generating function displaying data to user.
function getWeatherResponse (searchedCity) {

    let weatherInfo = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&APPID=7498ebf6859f10448d9e3958cea02c93`);
    
    weatherInfo
        .then(response => {
            if (response.status == 200) {
            return response.json();
        } else {
            alert('Please enter a valid city');
            throw new Error;
            }
        })
        .then( (response) => {
            let userWeatherData = {};
            let weatherData = response;
            userWeatherData.city = weatherData.name;
            userWeatherData.conditions = weatherData.weather[0].description;
            userWeatherData.temperature = weatherData.main.temp;
            userWeatherData.pressure = weatherData.main.pressure;
            userWeatherData.humidity = weatherData.main.humidity;
            console.log(userWeatherData);   
            return userWeatherData;
        })
        .catch(err => console.log(err));
}

searchButton.addEventListener('click', () => {
    let query = document.getElementById('query').value;
    getWeatherResponse(query);
});

