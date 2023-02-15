import axios from 'axios'

const url = "http://localhost:3001/persons"

const getAll = () => {
    const promise = axios.get(url)
    return promise.then(response => response.data)
}

const add = (person) => {
    const promise = axios.post(url, person)
    return promise.then(response => response.data)
}

const deletePerson = (id) => {
    const promise = axios.delete(`${url}/${id}`)
    return promise.then(response => response.data)
}

const changePerson = (id, newPerson) => {
    const promise = axios.put(`${url}/${id}`, newPerson)
    return promise.then(response => response.data)
}

export default {getAll, add, deletePerson, changePerson}