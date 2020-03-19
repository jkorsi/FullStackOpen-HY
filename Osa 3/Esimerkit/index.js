const express = require('express')
const app = express()

app.use(express.json())
//const http = require( 'http' )

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2020-01-10T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2020-01-10T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2020-01-10T19:20:14.298Z",
        important: true
    }
]

//--------------------------------
//------------GET ROOT------------
//--------------------------------
app.get('/', (request, response) =>
{
    console.log("request headers", request.headers)
    response.send('<h1>Hello World!</h1>')
})

//---------------------------------
//------------GET BY ID------------
//---------------------------------
app.get('/api/notes/:id', (request, response) =>
{
    console.log("request headers", request.headers)
    const id = Number(request.params.id)
    console.log(id)
    const note = notes.find(note =>
    {
        console.log(note.id, typeof note.id, id, typeof id, note.id === id)
        return note.id === id
    })

    console.log(note)

    if (note)
    {
        response.json(note)
        console.log("note", note)
    } else
    {
        response.status(404).end()
    }
})

//-------------------------------
//------------GET ALL------------
//-------------------------------
app.get('/api/notes', (request, response) =>
{
    console.log("request headers", request.headers)
    res.json(notes)
    console.log("notes get: ", notes)
})

//----------------------------------
//------------DELETE ONE------------
//----------------------------------
app.delete('/api/notes/:id', (request, response) =>
{
    console.log("request headers", request.headers)
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

const generateId = () =>
{
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => n.id))
        : 0
    return maxId + 1
}

//--------------------------------
//------------POST ONE------------
//--------------------------------
app.post('/api/notes', (request, response) =>
{
    console.log("request headers", request.headers)

    const body = request.body

    if (!body.content)
    {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId(),
    }

    notes = notes.concat(note)

    response.json(note)
})

const PORT = 3001
app.listen(PORT, () =>
{
    console.log(`Server running on port ${PORT}`)
})