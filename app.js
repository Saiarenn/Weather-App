const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());


let markers = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/getWeather', async (req, res) => {
    const apiKey = "df67cae18034bfa338da04d46f7bbb54";
    const city = req.body.city;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data;

        const currencyApiUrl = 'https://api.exchangerate-api.com/v4/latest/USD';
        const currencyResponse = await axios.get(currencyApiUrl);
        const currencyData = currencyResponse.data.rates;



        const weatherData = {
            name: data.name,
            temperature: Math.round(data.main.temp - 273),
            windspeed: data.wind.speed,
            weather: data.weather[0].description,
            iconCode: data.weather[0].icon,
            feelsLike: Math.round(data.main.feels_like - 273),
            humidity: data.main.humidity,
            country: data.sys.country,
            pressure: data.main.pressure,
            lat: data.coord.lat,
            lon: data.coord.lon,
            currency: findCurrency(currencyData, data.sys.country)
        };

        const marker = {
            city: weatherData.name,
            lat: weatherData.lat,
            lon: weatherData.lon,
            temperature: weatherData.temperature,
        };

        markers.push(marker);

        res.json(weatherData);
    } catch (error) {
        console.error('Error fetching weather data: ', error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/markers', (req, res) => {
    res.json(markers);
});

app.get('/photo', async (req, res) => {
    const apiKey = "30856833-7403c4fca5957f3a24a6fce79";
    const city = req.query.city;
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${city}&image_type=photo`;

    try {
        const response = await axios.get(apiUrl);
        const data = response.data.hits[0];

        res.json(data)
    } catch (error) {
        console.error('Error fetching photo: ', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});


function findCurrency(data, substring) {
    const ratesKeys = Object.keys(data);

    for (const key of ratesKeys) {
        if (key.includes(substring)) {
            return {curr: key, value: data[key]};
        }
    }

    return {curr: 'EUR', value: data['EUR']};
}