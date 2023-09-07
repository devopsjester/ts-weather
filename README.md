# Weather App
This is a command-line application that retrieves the current temperature in Fahrenheit for a given US ZIP code. It uses the [Zippopotam API](https://www.zipopotam.us) to retrieve the corresponding city and state information for the ZIP code, and the [OpenWeatherMap API](https://openweathermap.org) to retrieve the current temperature for that city and state.

## Installation
To install the application, you will need to have `Node.js` installed on your system. Once you have `Node.js` installed, you can install the application using `npm`:
```
npm install -g weather-app
```

## Usage
To use the application, run the following command:

Replace <zip code> with the US ZIP code you want to look up. For example:
```
weather-app --zip <zip code>
```

This will retrieve the current temperature for Beverly Hills, CA.

API Keys
The application requires an API key for the OpenWeatherMap API. You can obtain an API key by signing up for a free account on the OpenWeatherMap website. Once you have an API key, you can set it as an environment variable named `OPENWEATHERMAP_API_KEY`. For example:

>
License
This application is licensed under the [MIT License](LICENSE).