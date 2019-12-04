import React, { useState } from 'react'
import { ReactDOM, render } from 'react-dom';



const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('TestiNimi')



    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <form>
                <div>
                    debug: {newName}
                </div>

                <div>
                    nimi: <input />
                </div>

                <div>
                    <button type="submit">lisää</button>
                </div>
                
            </form>
            <h2>Numerot</h2>

        </div>
    )
}

export default App