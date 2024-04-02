const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");

const API_KEY = "259727be066c857f6ac66d43426bd7c9";

const getCityCoordinates = () => {}
    const cityName = cityInput.value.trim();
    if(!cityName) return;
const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        if(!data.length) return alert(`No coordinates found for ${cityName}`);
        const { name, lat, lon } = data[0];
        getWeatherDetails(name, lat, lon);
        const(we)
    }).catch(() => {
alert("An error occurs while fetching the coordinates!")
    });

searchButton.addEventListener("click", getCityCoordinates);
