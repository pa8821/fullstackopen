import axios from 'axios'

const URL = "https://restcountries.com/v3.1/all"

const getAll = () => {
    const promise = axios.get(URL)
    return promise.then(response => response.data)
}

export default {getAll}