const getWeatherButton = document.getElementById('get-weather');
const cityInput = document.getElementById('city');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

const apiKey = 'YOUR_API_KEY'; // Replace with your weather API key

getWeatherButton.addEventListener('click', function () {
    const city = cityInput.value;
    if (!city) return;

    // Fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                locationElement.textContent = 'City not found';
                temperatureElement.textContent = '';
                descriptionElement.textContent = '';
            } else {
                const location = data.name;
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                locationElement.textContent = `Location: ${location}`;
                temperatureElement.textContent = `Temperature: ${temperature}°C`;
                descriptionElement.textContent = `Description: ${description}`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
