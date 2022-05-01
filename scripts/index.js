
function getWeatherResponse () {

    let weatherData;
    weatherInfo = fetch('http://api.openweathermap.org/data/2.5/weather?q=Addison&APPID=7498ebf6859f10448d9e3958cea02c93');
    
    weatherInfo
        .then(function (response) {
        return response.json();
        })
        .then( (weatherData) => {
            console.log(weatherData);
            console.log(weatherData.main.temp);
        })
        .catch(err => console.log(err));

}

getWeatherResponse()
