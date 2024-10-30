import React from 'react'

const Forecast = ({data }) => {
  const dailyForcast = data.list.filter((_, index)=> index % 8 === 0)
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f8ff', borderRadius: '10px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '500px', marginTop:'20px', marginLeft: '-100px'}}>
    <h2 style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>5-Day Forecast</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {dailyForcast.map((item) => {
        const date = new Date(item.dt * 1000).toLocaleDateString('en-US', {
          weekday: 'long',
        });
        const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        const temperature = item.main.temp;
        return (
          <div 
            key={item.dt} 
            style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '10px', margin: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', textAlign: 'center', width: '120px' }}
          >
            <p style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>{date}</p>
            <img 
              src={iconUrl} 
              alt={item.weather[0].description} 
              style={{ width: '50px', height: '50px' }} 
            />
            <p style={{ fontFamily: 'Roboto, sans-serif', color: '#333' }}>{temperature}°C</p>
            <p style={{ fontFamily: 'Roboto, sans-serif', color: '#666' }}>{item.weather[0].description}</p>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Forecast