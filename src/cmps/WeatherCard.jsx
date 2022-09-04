import React from 'react'

const WeatherCard = ({ day }) => {
  return (
    <div className='weather-card'>
      <p>{day.date}</p>
      <img src={day.condition.icon} alt="" />
      <div className='temp'>
        <p>{day.tempC}℃</p>
        <p>{day.tempF}℉</p>
      </div>
    </div>
  )
}

export default WeatherCard