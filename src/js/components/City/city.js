import React, { Component } from 'react'

export default class City extends Component {
    render() {
        const { city, temp, tempMin, tempMax, pressure, humidity, speed, lon, lat, icon } = this.props;
        return (
            <div className='col-md-6'>
            <div className="card border-info">
              <div className="card">
                <div className='card-header' id="header">City Information</div>
                <div className="card-body">
                  <h5 className="card-title text-center" id="city-name">
                     <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} id="weather-icon"/>
                        {city}</h5>
                    <p className='text-center' id="lat-lon"> Latitude & Longitude: {lat},{lon}</p>
                  <hr />
    
                  <div className="d-flex bd-highlight mb-3 justify-content-center">
                    <div className="p-1 bd-highlight mr-auto">
                      <strong>Temperature(F)</strong>
                    </div>
                    <div className="p-1 bd-highlight mr-auto">
                      <strong>Pressure</strong>
                    </div>
                    <div className="p-1 bd-highlight mr-auto">
                      <strong>Humidity</strong>
                    </div>
                  </div>
    
    
                  <div className="d-flex bd-highlight mb-3 align-items-right" id="temp-values">
                    <div className='p-1 bd-highlight mr-auto'>
                      <p>{temp}°F</p>
                    </div>
                    <div className='p-1 bd-highlight mr-auto'>
                      <p>{pressure}</p>
                    </div>
                    <div className='p-1 bd-highlight mr-auto'>
                      <p>{humidity}%</p>
                    </div>
                  </div>
    
    
                  <div className="d-flex bd-highlight mb-3 justify-content-center">
                    <div className='p-1 bd-highlight mr-auto'>
                      <strong>Lowest Temp(F)</strong>
                    </div>
                    <div className='p-1 bd-highlight mr-auto'>
                      <strong>Highest Temp(F)</strong>
                    </div>
                    <div className='p-1 bd-highlight mr-auto'>
                      <strong>Wind Speed</strong>
                    </div>
                  </div>
    
                  <div className="d-flex bd-highlight mb-3 align-items-center" id="temp-values">
                    <div className='p-1 bd-highlight mr-auto'>
                      <p>{tempMin}°F</p>
                    </div>
                    <div className='p-1 bd-highlight mr-auto'>
                      <p>{tempMax}°F</p>
                    </div>
                    <div className='p-1 bd-highlight mr-auto'>
                      <p>{speed} mph</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
        );
    }
}




