# Weather App

This Weather App is a web application that provides real-time weather data, and currency exchange rates for a specified city. The app uses the OpenWeatherMap API, ExchangeRate API, and Pixabay API to fetch weather information, currency rates, and city images, respectively.

## Installation
1. Clone the repository: `git clone https://github.com/Saiarenn/Weather-App`
2. Navigate to the project folder: `cd Weather-App`
3. Install dependencies: `npm install`
4. Run the server: `npm start`

## Usage
1. Open your browser and go to `http://localhost:3000`
2. Enter the name of a city in the input field.
3. Click the "Get Weather" button to fetch and display weather information.

## API Keys
To use this app, you need to obtain API keys for the following services:
- OpenWeatherMap: [Get API Key](https://openweathermap.org/appid)
- ExchangeRate API: [Get API Key](https://www.exchangerate-api.com/)
- Pixabay API: [Get API Key](https://pixabay.com/api/docs/)

## Features

- Real-time weather data display (temperature, wind speed, weather description, etc.).
- Conversion of temperature to the corresponding currency.
- Retrieval of city images using Pixabay API.
- Display of weather markers on a Leaflet map.

## Running the Server
The server runs on port 3000. You can access the Weather App by navigating to `http://localhost:3000` in your web browser.

## Additional Information
- The Leaflet map displays weather markers for each city requested.
- Currency conversion is based on the ExchangeRate API.