import fetch from "node-fetch";
function getWeatherResponse () {

    let weatherData;
    let weatherInfo = fetch('http://api.openweathermap.org/data/2.5/weather?q=Addison&APPID=7498ebf6859f10448d9e3958cea02c93');
    
    weatherInfo
        .then(function (response) {
        return response.json();
        })
        .then( (response) => {
            let weatherData = response;
            console.log('City:', weatherData.name);
            console.log('Conditions:', weatherData.weather[0].description);
            console.log(weatherData.main.temp, 'Kelvin');
            console.log(weatherData.main.pressure);
            console.log(weatherData.main.humidity, '%');
        })
        .catch(err => console.log(err));

}

getWeatherResponse()
