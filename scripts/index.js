function getWeatherResponse () {

    let weatherInfo = fetch('http://api.openweathermap.org/data/2.5/weather?q=Addison&APPID=7498ebf6859f10448d9e3958cea02c93');
    
    weatherInfo
        .then(function (response) {
        return response.json();
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

getWeatherResponse();