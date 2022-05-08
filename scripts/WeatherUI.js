// Function for implementing received weather object's data to user interface.

export { displayWeatherData };

function displayWeatherData (data) {

    // Targets weather elements in DOM...
    let city = document.getElementById('city');
    // Find a way to associate conditions with respective icon...
    let conditionsIcon = document.getElementById('conditions-icon');
    let temperature = document.getElementById('temperature');
    let conditions = document.getElementById('conditions');
    let humidity = document.getElementById('humidity');
    // Display more data (i.e. UV Index)

    // Update with respective data from Weather object.

    city.textContent = `${data.city}`;
    temperature.textContent = `${data.temperature} °F`;
    conditions.textContent = `Conditions: ${data.conditions}`;
    humidity.textContent = `Humidity: ${data.humidity}`;
};