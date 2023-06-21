import React from 'react'

function Info(props) {
  const weather = props.weather;
  const message = props.message;
  return (
    <>
     {weather ? (
        <div className="info">
          <div>{weather.name}</div>
          <div>현재온도: {(weather.main.temp - 273.15).toFixed(1)}℃ </div>
          <div>
             <span>최저온도 : {(weather.main.temp_min - 273.15).toFixed(1)}℃</span>
             <span>/ 최고온도 : {(weather.main.temp_max - 273.15).toFixed(1)}℃</span> 
          </div>
          <div className='des'>
            <span>설명: {weather.weather[0].description}</span>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/>
          </div>
      </div>) : message? 
      <div className='msg'>{message}</div> : null}   
    </>
  )
}

export default Info