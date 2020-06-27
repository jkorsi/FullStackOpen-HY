import axios from 'axios'

const baseUrl = '/api/persons'

const updateData = (id, newObject) =>
{
    console.log("ID: ", id)
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default updateData