// script.js
const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetchWeatherData(url);
});

document.getElementById('getLocationWeather').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

            fetchWeatherData(url);
        }, () => {
            alert('Unable to retrieve your location');
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});

function fetchWeatherData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('cityName').textContent = `Weather in ${data.name}, ${data.sys.country}`;
                document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
                document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
                document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
                document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
            } else {
                document.getElementById('cityName').textContent = 'City not found';
                document.getElementById('description').textContent = '';
                document.getElementById('temperature').textContent = '';
                document.getElementById('humidity').textContent = '';
                document.getElementById('windSpeed').textContent = '';
            }
        })
        .catch(error => console.error('Error fetching the weather data:', error));
}
