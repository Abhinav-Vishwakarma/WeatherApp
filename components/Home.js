import React, { useEffect, useState } from 'react';
import {Text,View, ActivityIndicator,TextInput,Pressable,Image } from 'react-native';
import axios from 'axios';
import GetLocation from 'react-native-get-location'
import Icon from "react-native-vector-icons/FontAwesome5"
import styles from "./styles";


const weatherConditions = {
  '800': '🌞', // Clear Sky
  '801': '🌤️', // Few Clouds
  '802': '🌥️', // Scattered Clouds
  '803': '⛅', // Broken Clouds
  '804': '☁️', // Overcast Clouds
  '500': '🌦️', // Shower Rain
  '501': '🌧️', // Rain
  '200': '⛈️', // Thunderstorm
  '600': '❄️', // Snow
  '701': '🌫️', // Mist
  '711': '🌫️', // Smoke
  '721': '🌫️', // Haze
  '731': '🌪️', // Dust
  '741': '🌁', // Fog
  '751': '🌪️', // Sand
  '761': '🌋', // Ash
  '771': '🌬️', // Squall
  '772': '🌪️', // Tornado
  '502': '🌧️', // Heavy Intensity Rain
  '503': '🌦️', // Light Rain
  '504': '🌧️', // Very Heavy Rain
  '511': '🌧️', // Extreme Rain
  '520': '🌨️', // Freezing Rain
  '602': '❄️', // Heavy Snow
  '611': '🌨️', // Sleet
  '612': '🌨️', // Light Snow
  '621': '🌨️', // Snow Showers
  '230': '⛈️🌨️', // Thunderstorm with Light Snow
  '231': '⛈️🌨️', // Thunderstorm with Snow
  '232': '⛈️🌨️', // Thunderstorm with Heavy Snow
};
const API_KEY=" enter you api key here";
function Home(){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city,setCity]=useState('');
  const [error2,setError2]=useState(null);

  const WeatherCard =(props)=>{
    return(
      <View style={styles.weatherContainer}>
        <Image blurRadius={10} style={styles.backgroundImage2} source={require('../assests/bg9.jpg')} />
      {loading?(<ActivityIndicator size={200} />):error2?
      <View>
        <Text>Error fetching data</Text>
        <Text>Error Code{error.code}:{error.message}</Text>
        {error2===null?null:(<Text>Error Code{error2.code}:{error2.message}</Text>)}
      </View>:
      <View>
        <View style={styles.weatherIconBox}>
        <Text style={styles.weatherIcon}>{weatherConditions[data.weather[0].id]}</Text>
        </View>
        <Text style={styles.textCity}>{data.name}</Text>
        <Text style={styles.textWeather}>⦿Weather:<Text style={{fontWeight:300}}> {data.weather[0].description}</Text></Text>
        <Text style={styles.textTemperature}>⦿Temperature: <Text style={{fontWeight:300}}>{data.main.temp} °C</Text></Text>
        <Text style={styles.textHumidity}>⦿Humidity: <Text style={{fontWeight:300}}>{data.main.humidity}%</Text></Text>
        <Text style={styles.textHumidity}>⦿Wind: <Text style={{fontWeight:300}}>{(data.wind.speed * 3.6).toFixed(2)} Km/hr</Text></Text>
      </View>}
     </View>
     
    )
  }

  


  const fetchWeather = async (city='') => {
    setLoading(true);
    setError2(null);
    let url;
    
    if(city===''){
      try{
        const loc = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 60000,});
          url=`https://api.openweathermap.org/data/2.5/weather?lat=${loc.latitude}&lon=${loc.longitude}&units=metric&appid=${API_KEY}`;
      }catch(err){
        setError2(err);
      }
    }else{
      url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    }
    
      
    try{
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(err);
    }
    finally{
      setLoading(false);
      setCity('');
    }
  };
  useEffect(() => {
    fetchWeather();
  }, []); 
  
  return(
    <View style={styles.container}>
    <Image blurRadius={70} style={styles.backgroundImage} source={require('../assests/bg6.jpg')} />
    <View style={styles.overlay}>
      <View style={styles.searchContainer}>
        <TextInput
          //onSubmitEditing={() => fetchWeather(city)}
          onChangeText={setCity}
          value={city}
          style={styles.searchInput}
          placeholder="'Search City'"
        />
        <Pressable onPress={() => fetchWeather(city)}>
          <Icon name="searchengin" size={40} style={{ color: 'black' }} />
        </Pressable>
      </View>
      <WeatherCard />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Made by - Abhinav Vishwakarma [CSE AIML-A] 2nd Year</Text>
      </View>
    </View>
  </View>

  )
   
}


export default Home;