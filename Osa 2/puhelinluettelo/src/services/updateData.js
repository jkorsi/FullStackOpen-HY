import axios from 'axios'

const baseUrl = 'http://localhost:3300/persons'

const updateData = ( id, newObject ) =>
{
    console.log( "ID: ", id )
    const request = axios.put( `${ baseUrl }/${ id }`, newObject )
    return request.then( response => response.data )
}

export default updateData