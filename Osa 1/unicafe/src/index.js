import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//Optional: Needed for percentage mark
const Statistic = props => <>{props.id} {props.text}
    {props.value} {props.optional}</>

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistics = (props) => {
    const overallRatings = props.good + props.bad + props.neutral
    const average = ((props.good + props.bad * -1) / 3).toPrecision(4)
    const goodInPercent = (((props.good / overallRatings) * 100)).toPrecision(4)

    const rateArr = [
        <Statistic id={0} text={"Positiiviset: "} value={props.good}/>,
        <Statistic id={1} text={"Neutraalit: "} value={props.neutral}/>,
        <Statistic id={2} text={"Negatiiviset: "} value={props.bad}/>,
        <Statistic id={3} text={"Yhteensä arvosteluitaa: "} value={overallRatings}/>,
        <Statistic id={4} text={"Keskiarvo: "} value={average}/>,
        <Statistic id={5} text={"Positiivisten osuus: "} value={goodInPercent} optional ={"%"}/>
    ]
    console.log(rateArr)
    const rateTable = () => rateArr.map((item, i) =>
        <tr key={rateArr[i].props.id}>
            <td key={rateArr[i].props.id}>{rateArr[i].props.text}</td>
            <td>{rateArr[i].props.value} {rateArr[i].props.optional}</td>
        </tr>)

    if (overallRatings !== 0) {
        return (
            <table>
                <tbody>

                    {rateTable(rateArr)}

                </tbody>
            </table>
        )
    }
    return (<>
        <h1>Aiemmat palautteet: </h1>
        Ei yhään palautetta.
        </>)
}


const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setGoodRating = (value) => setGood(value)
    const setNeutralRating = (value) => setNeutral(value)
    const setBadRating = (value) => setBad(value)

    return (
        <div>
            <h1>Anna palaute: </h1>
            <Button
                handleClick={() => setGoodRating(good + 1)}
                text='Good rating'
            />
            <Button
                handleClick={() => setNeutralRating(neutral + 1)}
                text='Neutral rating'
            />
            <Button
                handleClick={() => setBadRating(bad + 1)}
                text='Bad rating'
            />
            <br></br>
            <Statistics good={good} bad={bad} neutral={neutral} />

        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)