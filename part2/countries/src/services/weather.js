import axios from 'axios'

const URL = "https://api.openweathermap.org/data/3.0/onecall"

const getWeather = (country) => {
    const latlng = country.capitalInfo.latlng
    const promise = axios.get(`${URL}?lat=${latlng[0]}&lon=${latlng[1]}&appid=${process.env.REACT_APP_API_KEY}`)
    return promise.then(response=>response.data)
}

export default {getWeather}