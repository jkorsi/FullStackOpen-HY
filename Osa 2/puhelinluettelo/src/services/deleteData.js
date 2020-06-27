import axios from 'axios'

const baseUrl = '/api/persons'

const deleteData = id =>
{
    if (window.confirm('Haluatko varmasti poistaa henkilön?'))
    {

        const request = axios.delete(`${baseUrl}/${id}`)
        return request
            .then(response => response.data)
            .catch(error =>
            {
                alert(
                    `The person '${id}' was already deleted from server`
                )
            })
    }
}

export default deleteData

    // .then( returnedNote =>
    // {
    //     setNotes( notes.map( note => note.id !== id ? note : returnedNote ) )
    // } ).catch( error =>
    // {
    //     alert(
    //         `the note '${ note.content }' was already deleted from server`
    //     )
    //     setNotes( notes.filter( n => n.id !== id ) )
    // } )