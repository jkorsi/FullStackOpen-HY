import axios from 'axios'

const baseUrl = 'http://localhost:3300/persons'

const addData = newObject =>
{
    const request = axios.post( baseUrl, newObject )
    return request.then( response => response.data )
}

export default addData

// {
//     "persons": [ {
//         "id": "Martti",
//         "number": "444"
//     },
//     {
//         "id": "Matti KAtti",
//         "number": "123-123-123"
//     },
//     {
//         "id": "Tomppa",
//         "number": "123-111111111"
//     },
//     {
//         "id": "Pertti",
//         "number": "123-111111111"
//     },
//     {
//         "id": "Aa",
//         "number": "Bee"
//     },
//     {
//         "id": "Cee",
//         "number": "11111111"
//     },
//     {
//         "id": "Alfa",
//         "number": "Beta"
//     },
//     {
//         "id": "Graniitti",
//         "number": "1234444444444-555"
//     },
//     {
//         "id": "PH7fNSK",
//         "number": ""
//     },
//     {
//         "id": "Amgmg",
//         "number": "2345566"
//     }
//     ]
// }