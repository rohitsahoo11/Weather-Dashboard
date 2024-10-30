import React from 'react'

const CurrentWeather = ({data}) => {
  const { name, main, weather } = data;
  const temperature = main.temp;
  const description = weather[0].description;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;


  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '10px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '300px',  }}>
      <h2 style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>{name}</h2>
      <img 
        src={iconUrl} 
        alt={description} 
        style={{ width: '100px', height: '100px', margin: '10px 0' }} 
      />
      <p style={{ fontFamily: 'Roboto, sans-serif', color: '#333', margin: '5px 0' }}>Temperature: {temperature}°C</p>
      <p style={{ fontFamily: 'Roboto, sans-serif', color: '#666', margin: '5px 0' }}>{description.charAt(0).toUpperCase() + description.slice(1)}</p>
    </div>
  )
  
}

export default CurrentWeather