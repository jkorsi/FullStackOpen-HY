import axios from 'axios'

const baseUrl = '/api/persons/'

const addData = newObject =>
{
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

export default addData