import axios from 'axios'
const baseUrl = '/api/notes'


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const promise = axios.post(baseUrl, newObject)
  return promise.then(response => response.data)
}

const update = (id, newObject) => {
  const promise = axios.put(`${baseUrl}/${id}`, newObject)
  return promise.then(response => response.data)
}

// export default { 
//   getAll: getAll, 
//   create: create, 
//   update: update 
// } Can define the object as

export default {getAll, create, update}