import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/workouts'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getFilter = (params) => {
  const request = axios.get(baseUrl, params)
  
  return request.then(response => response.data)
}

export default { getAll, getFilter }

