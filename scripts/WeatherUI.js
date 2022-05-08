// Function for implementing received weather object's data to user interface.
export {
    displayWeatherData
};

function displayWeatherData(data) {
    // Targets weather elements in DOM...
    let city = document.getElementById('city');
    // Find a way to associate conditions with respective icon...
    let conditionsIcon = document.getElementById('conditions-icon');
    let temperature = document.getElementById('temperature');
    let conditions = document.getElementById('conditions');
    let humidity = document.getElementById('humidity');
    // Display more data (i.e. UV Index)

    // Update with respective data from Weather object.
    conditionsIcon.setAttribute('src', setIcon(data.conditions));
    city.textContent = `${data.city}`;
    temperature.textContent = `${data.temperature} °F`;
    conditions.textContent = `Conditions: ${data.conditions}`;
    humidity.textContent = `Humidity: ${data.humidity}`;

    // Switch statement for setting weather icon based on conditions data.
    function setIcon(conditions) {
        console.log(conditions)
        switch (conditions) {
            case ('clear sky'):
                return 'sources/weather_icons/sunny.svg';
            case ('broken clouds'):
            case ('few clouds'):
                return 'sources/weather_icons/partlycloudy.svg'
            case ('scattered clouds'):
            case ('overcast clouds'):
                return 'sources/weather_icons/cloudy.svg'
            case ('rain'):
            case ('shower-rain'):
                return 'sources/weather_icons/rain.svg'
            case ('snow'):
                return 'sources/weather_icons/snow.svg'
            case ('mist'):
                return 'sources/weather_icons/mist.svg'
            default:
                console.log('Sorry Charlie :(');
        }
    };
};