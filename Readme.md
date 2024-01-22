# Weather App

This Weather App is a web application that provides real-time weather data, currency exchange rates, and random trivia for a specified city. The app uses the OpenWeatherMap API, ExchangeRate API, and Pixabay API to fetch weather information, currency rates, and city images, respectively.

## Installation
1. Clone the repository: `git clone https://github.com/YourUsername/Weather-App`
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

## Contributing
If you would like to contribute to the Weather App project, please follow these steps:
1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your changes: `git checkout -b feature/new-feature`
4. Make your changes and commit them: `git commit -m "Add new feature"`
5. Push your changes to your forked repository: `git push origin feature/new-feature`
6. Open a pull request on the original repository.