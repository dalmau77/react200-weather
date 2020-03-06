import Axios from 'axios';


export function getWeather(city){
    console.log("hi")
    return {
        type: 'GET_WEATHER',
        payload: Axios.get(`/search/${ city }`)
    }
}

export function getCity(city) {
    console.log("yoyo")
  return {
      type:'GET_CITY',
      payload: {city}
  }
}
