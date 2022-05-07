// Function for implementing received weather object's data to user interface.

export { displayWeatherData };

function displayWeatherData (data) {
    let city = document.getElementById('city');
    let temperature = document.getElementById('temperature');
    let conditions = document.getElementById('conditions');
    let humidity = document.getElementById('humidity');
    // let uv = document.getElementById('uv').textContent;

    city.textContent = `${data.city}`;
    temperature.textContent = `Temperature: ${data.temperature}`;
    conditions.textContent = `Conditions: ${data.conditions}`;
    humidity.textContent = `Humidity: ${data.humidity}`;
};