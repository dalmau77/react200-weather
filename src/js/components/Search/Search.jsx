import React, { Component } from 'react'
import { getCity, getWeather } from './searchActions';


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.clickHandler = this.clickHandler.bind(this)
    this.clickPill = this.clickPill.bind(this)
  }
  handleInput(e) {
   
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(getCity(value))
  }
  clickHandler(e) {
    e.preventDefault();
    const { dispatch, city } = this.props;
    dispatch(getWeather(city))

  }
  clickPill(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    e.preventDefault();
    dispatch(getWeather(value))

  }
  render() {
    const { city } = this.props;
    console.log(city)
    return (
      <div>
        <div className='row'>
          <div className='d-flex'>
            <div className="p-2">
              <button className='btn btn-primary' value='granada' onClick={this.clickPill}>Granada</button>
            </div>
            <div className="p-2">
              <button className='btn btn-primary' value='san diego' onClick={this.clickPill}>San Diego</button>
            </div>
            <div className="p-2">
              <button className='btn btn-primary' value='los angeles' onClick={this.clickPill}>Los Angeles</button>
            </div>
            <div className='p-2'>
              <button className='btn btn-primary' value="london" onClick={this.clickPill}>London</button>
            </div>
            <div className='p-2'>
              <button className='btn btn-primary' value='tokyo' onClick={this.clickPill}>Tokyo</button>
            </div>
          </div>
        </div>
        <div className='col-md-12'>
          <div className="input-group mb-3">
            <input className="form-control" placeholder="Search a City" value={city} onChange={this.handleInput} />
            <div className="input-group-append">
              <button className="input-group-text" type='submit' onClick={this.clickHandler}>Search</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

