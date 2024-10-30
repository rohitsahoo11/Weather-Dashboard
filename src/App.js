import React, { useState } from 'react'
import axios from 'axios'
import './App.css';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

function App() {

  const [inputCity, setInputCity] = useState('')
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [error, setError] = useState('')

  const searchCity = async()=>{
    setLoading(true)
    setError(null)
    const api_url = process.env.REACT_APP_WEATHER_API_URL
    const api_key = process.env.REACT_APP_WEATHER_API_KEY


    try {
      const weatherResponse = await axios.get(
         `${api_url}/weather?q=${inputCity}&appid=${api_key}&units=metric`
      )
      const forecastResponse = await axios.get(
         `${api_url}/forecast?q=${inputCity}&appid=${api_key}&units=metric`
      )

      setWeather(weatherResponse.data)
      setForecast(forecastResponse.data)
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
      setForecast(null);
    }
    finally{
      setLoading(false)
    }
  }



  return (
    <div>
    <h1 style={{ fontFamily: 'Roboto, sans-serif', color: '#333', textAlign: 'center', marginTop: '20px', padding: '10px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      Weather Dashboard
    </h1>
    <input
      type='text'
      placeholder='Enter City'
      value={inputCity}
      onChange={(e)=> setInputCity(e.target.value)}
      style={{ padding: '10px', fontSize: '16px', marginTop: '20px', marginLeft:'44%', borderRadius: '5px', border: '1px solid #ccc', width: '200px'}} 
    />
    <button
      onClick={searchCity}
      style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px',marginLeft:'48%', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
    >
      Search
    </button>

    { loading ? (
      <div style={{ marginTop: '20px', marginLeft:'44%' }}>Loading...</div>
    ): error? (
      <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>
    ) : (
      <div style={{ marginTop: '20px', marginLeft:'40%' }}>
        {weather && <CurrentWeather data={weather}/>}
        {forecast && <Forecast data={forecast}/>}
      </div>
    ) 
    }
    </div>
  );
}

export default App;
