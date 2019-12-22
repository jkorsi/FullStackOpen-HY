import React, { useState } from 'react'
import { ReactDOM, render } from 'react-dom'
import Person from './components/Person'
import Filter from './components/Filter'
import FilteredRows from './components/FilteredRows'
import Inputs from './components/Inputs'

import './App.css';

const App = () => {

    // State list variable --, with a place holder name in it
    const [personsList, setpersonsList] = useState([
        { id: 'Arto Hellas', number: '040-123456' },
        { id: 'Ada Lovelace', number: '39-44-5323523' },
        { id: 'Dan Abramov', number: '12-43-234345' },
        { id: 'Mary Poppendieck', number: '39-23-6423122' }
    ])

    console.log('Initial list: ', personsList)

    // State Variable initialized with place holder
    const [newName, setName] = useState('')
    const [newPhone, setPhone] = useState('')
    const [filterValue, setFilter] = useState('')

    const filteredRows = personsList

    // TOIMII - ÄLÄ KOSKE 
    const handlePersonsChange = (event) => {
        setName(event.target.value)
    }

    // TOIMII - ÄLÄ KOSKE 
    const handlePhoneChange = (event) => {
        setPhone(event.target.value)
    }

    //TOIMII - ÄLÄ KOSKE
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    // TOIMII - ÄLÄ KOSKE 
    const addPersonAndNumber = (event) => {
        event.preventDefault()

        if (personsList.filter(person => person.id.toLowerCase() === newName.toLowerCase()).length > 0) {
            alert(`Nimi "${newName}" on jo varattu!!!`)
        } else {
            const personObject = {
                id: newName,
                number: newPhone
            }
            setpersonsList(personsList.concat(personObject))
            setName('')
            setPhone('')
        }
    }

    const newLocal = <form onSubmit={addPersonAndNumber}>
        <div style={{ padding: 10 }}>
            Nimi: <input value={newName} onChange={handlePersonsChange} />
        </div>
        <div style={{ padding: 10 }}>
            Puhelinnumero: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
            <br></br>
            <button type="submit">Lisää</button>
        </div>
    </form>
    // Refaktoroi komponentit omiin tiedostoihin
    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <Filter
                filterValue={filterValue}
                handleFilterChange={handleFilterChange} 
            />
            <Inputs
                addPersonAndNumber={addPersonAndNumber}
                newName={newName}
                handlePersonsChange={handlePersonsChange}
                newPhone={newPhone}
                handlePhoneChange={handlePhoneChange}
            />
            <h2>Numerot</h2>
            <ul>
                <FilteredRows
                    filterValue={filterValue}
                    filteredRows={filteredRows}
                />
            </ul>
        </div>
    )
}

export default App