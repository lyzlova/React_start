import React from 'react';

const Weather = props => (
  <div className="infoWeath">
    {props.city && (
      <div>
        <p>Place: {props.city}</p>
        <p>Temperature: {props.temp}</p>
        <p>Sunset: {props.sunset}</p>
        <p>Pressure: {props.pressure}</p>
      </div>
    )}
    <p className="error">{props.error}</p>
  </div>
);

export default Weather;
