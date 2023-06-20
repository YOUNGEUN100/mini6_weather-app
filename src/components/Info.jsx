import React from 'react'

function Info(props) {
  const weather = props.weather;
  const message = props.message;
  return (
    <>
     {weather ? (
        <div className="info">
          <div>{weather.name}</div>
          <div>현재온도: {weather.main.temp} </div>
          <div>설명: {weather.weather[0].description}</div>
      </div>) : message? 
      <div className='msg'>{message}</div> : null}   
    </>
  )
}

export default Info