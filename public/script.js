const map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const getWeather = () => {
    const city = document.getElementById('city').value;

    fetch('/getWeather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({city}),
    })
        .then(response => response.json())
        .then(async data => {
            document.getElementById('name').textContent = `City: ${data.name}`;
            document.getElementById('temperature').innerHTML = `Temperature: ${data.temperature} &deg;C`;
            document.getElementById('windspeed').textContent = `Wind Speed: ${data.windspeed} m/sec`;
            document.getElementById('weather').textContent = `Weather: ${data.weather}`;
            document.getElementById('feels-like').innerHTML = `Feels Like: ${data.feelsLike} &deg;C`;
            document.getElementById('humidity').textContent = `Humidity: ${data.humidity}%`;
            document.getElementById('pressure').textContent = `Pressure: ${data.pressure} hPa`;
            document.getElementById('country').textContent = `Country: ${data.country}`;
            document.getElementById('coordinates').textContent = `Coordinates: Lat ${data.lat}, Lon ${data.lon}`;

            const iconUrl = `https://openweathermap.org/img/w/${data.iconCode}.png`;
            document.getElementById('weather-icon').src = iconUrl;

            fetch('/markers')
                .then(response => response.json())
                .then(markers => {
                    markers.forEach(marker => {
                        L.marker([marker.lat, marker.lon])
                            .addTo(map)
                            .bindPopup(`<b>${marker.city}</b><br>Temperature: ${marker.temperature} &deg;C`);
                    });
                })
                .catch(error => {
                    console.error('Error fetching markers: ', error);
                });

            document.getElementById('currency').textContent = `${data.currency.curr}: ${data.currency.value}`;

            const photoResponse = await fetch(`/photo?city=${encodeURIComponent(city)}`);
            if (!photoResponse.ok) {
                throw new Error(`Pixabay API error! Status: ${photoResponse.status}`);
            }

            const photoData = await photoResponse.json();
            displayImage(photoData.webformatURL);
        })
        .catch(error => {
            console.error('Error fetching weather data: ', error);
        });
}

function displayImage(imageURL) {
    const imageElement = document.getElementById('pixabay-image');
    imageElement.src = imageURL;
    imageElement.alt = 'Pixabay Image';
}