<<<<<<< HEAD
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
=======
# WeatherApp

### Overview
The Weather App is a React Native application that allows users to view current weather information for a specified city or their current location. The app provides details such as temperature, humidity, wind speed, and weather conditions with corresponding icons. It uses the OpenWeatherMap API to fetch weather data and integrates location services to provide weather information based on the user's current location.

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

	const API_KEY="Enter you API KEY";

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
>>>>>>> 8738981373e4e3ec1ec347e9376d2229b189d56e
