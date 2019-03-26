import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'



const App = () => {

    const courses = [
        {
            name: 'Half Stack -sovelluskehitys',
            id: 1,
            parts: [
                {
                    name: 'Reactin perusteet',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Tiedonvälitys propseilla',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'Komponenttien tila',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Neljäs osa',
                    exercises: 5,
                    id: 4
                }
            ]
        },
        {
            name: 'Toinen kurssi',
            id: 2,
            parts: [
                {
                    name: 'Eka osa',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Toka osa',
                    exercises: 7,
                    id: 2
                }
            ]
        }

    ]

    return (
        <div>
            <Course courses={courses} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))