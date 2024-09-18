# WeatherApp

### Overview
The Weather App is a React Native application that allows users to view current weather information for a specified city or their current location. The app provides details such as temperature, humidity, wind speed, and weather conditions with corresponding icons. It uses the OpenWeatherMap API to fetch weather data and integrates location services to provide weather information based on the user's current location.

### Watch the Video of APP:
	APP_Video.mp4
 
### Features

* Search for weather information by city name.
* Fetch weather details based on the user's current location.
* Display weather conditions with emojis representing different weather types.
* Responsive and user-friendly interface.

### Technologies Used

* React Native
* Axios (for API requests)
* `react-native-get-location` (for fetching current location)
* OpenWeatherMap API
* FontAwesome5 (for icons)

### Setup

## Prerequisites

Ensure you have Node.js and npm (or yarn) installed. You will also need to have `react-native-cli`

## Installation

1.Clone the repository:

	git clone https://github.com/Abhinav-Vishwakarma/WeatherApp.git

2.Navigate to the project directory:

	cd weather-app

3.Install dependencies:

	npm install

4.Get Your API Key From 

* https://openweathermap.org/api
  
5.Set up API_KEY

	Go to ../components/Home.js
	Edit const API_KEY="Enter you API KEY";

6.Run React-Native Doctor for checkinig requirements:

	npx react-native doctor

7.Start the development server:

 	npx react-native start

8.Run the app on iOS or Android:

  For iOS:

	npx react-native run-ios

  for Android:

	npx react-native run-android

### Usage

1.Search City: Enter the name of a city in the search input and press "Search" or hit Enter on the keyboard to fetch weather details for that city.

2.Current Location: If no city is provided, the app will attempt to fetch and display the weather for the user's current location.

3.Weather Details: The app displays the current weather conditions, temperature, humidity, and wind speed. Weather conditions are represented with emojis.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Contact

For any inquiries or issues, please contact:

* Author: Abhinav Vishwakarma
* Email: avrk97945@gmail.com
