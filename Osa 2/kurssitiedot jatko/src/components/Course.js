import React from 'react'

const Course = (props) => {
    const tempCourses = props.courses
    console.log("Course props: ", props)
    console.log(tempCourses);
    const mappedCourses = () => tempCourses.map(
        aCourse =>
            <div key={aCourse.id}>
                <Header course={aCourse.name} />
                <Content parts={aCourse.parts} />
                <Total exercises={aCourse.parts} />
            </div>

    )
    return (
        <>
            {mappedCourses()}
        </>
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
    const contents = props.parts

    const mappedParts = () => contents.map(
        content =>
            <div key={content.id}>
                <Part part={content} />
            </div>)

    return (
        <>
            {mappedParts()}
        </>
    )
}
const Total = (props) => {
    console.log("Total props: ", props)
    console.log("Total props exercises: ", props.exercises[0].exercises)

    const exercArray = props.exercises.map(exercObj => {
        return exercObj.exercises
    }
    )

    const amount = exercArray.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0)

    return (
        <>

            <h4>Yhteensä {amount} tehtävää.</h4>

        </>
    )
}

const Part = (props) => {
    console.log("PART PROPS", props)
    return (
        <>
            <p>
                Osa: {props.part.name}. Tehtäviä osassa: {props.part.exercises}
            </p>
        </>
    )
}

export default Course