import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

    const course = {
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10
            },
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            },
            {
                name: 'Komponenttien tila',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total exercises={course.parts} />
        </div>
    )
}

const Header = (props) => {
    return (
        <>
            <h1>Kurssi: {props.course}</h1>
        </>
    )
}
const Content = (props) => {
    return (
        <>
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </>
    )
}
const Total = (props) => {
    console.log(props)
    console.log(props.exercises[0].exercises)
    const amount = props.exercises[0].exercises
        + props.exercises[1].exercises
        + props.exercises[2].exercises

    return (
        <>
            <p>
                Yhteensä {amount} tehtävää.
            </p>
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>
                Osa: {props.part.name}. Tehtäviä osassa: {props.part.exercises}
            </p>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))