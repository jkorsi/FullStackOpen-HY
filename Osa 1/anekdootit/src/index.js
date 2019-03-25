import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [likes, setLikes] = useState([0, 0, 0, 0, 0, 0])

    const giveAnecdote = (value) => setSelected(value)
    const likeAnecdote = (index) => {
        const updatedLikes = [...likes]
        updatedLikes[index] += 1
        setLikes(updatedLikes)
    }
    const mostLikedAnecdote = props.anecdotes[likes.indexOf(Math.max(...likes))]

    const randomAnecdote = () =>
        props.anecdotes[Math.floor(Math.random() * props.anecdotes.length)];

    //For initialization    
    if (!selected) {
        giveAnecdote(randomAnecdote)
    }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Button
                                handleClick={() => giveAnecdote(randomAnecdote)}
                                text='Give me anecdote'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1>Your anecdote:</h1> <br></br>
                            {selected}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>
                                Likes for this anecdote: {likes[props.anecdotes.indexOf(selected)]}
                            </h3>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Button
                                handleClick={() => likeAnecdote(props.anecdotes.indexOf(selected))}
                                text='Like this'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>Most liked anecdote: </h3>
                            {mostLikedAnecdote}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)