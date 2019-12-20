import React, { useState } from 'react'
import { ReactDOM, render } from 'react-dom';
import Person from './components/Person'
import './App.css';

const App = () => {

    // State list variable --, with a place holder name in it
    const [personsList, setpersonsList] = useState([
        { id: 'Arto Hellas', number: '040-123456' },
        { id: 'Ada Lovelace', number: '39-44-5323523' },
        { id: 'Dan Abramov', number: '12-43-234345' },
        { id: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
  
    console.log('Initial list: ',personsList)

    // State Variable initialized with place holder
    const [newName, setName] = useState('')
    const [newPhone, setPhone] = useState('')
    const [filterValue, setFilter] = useState('')

    const personsListToShow = personsList

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

        if (personsList.filter(person => person.id === newName).length > 0) {
            alert(`Nimi "${newName}" on jo varattu!!!`)
        }else{
            const personObject = {
                id: newName,
                number: newPhone
            }
            setpersonsList(personsList.concat(personObject))
            setName('')
            setPhone('')
        }
    }
    
    //TOIMII - ÄLÄ KOSKE
    const returnRows = () => {
        return personsListToShow.filter(person =>
            person.id.includes(filterValue.toLowerCase())).map(filteredPerson => {
                return(
                <Person
                    key={filteredPerson.id}
                    person={filteredPerson}
                />
                )
            })
    }

    // TOIMII - ÄLÄ KOSKE 
    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <div style={{padding:10}}>
                Filtteri: <input value={filterValue}
                onChange={handleFilterChange}/>
            </div>

            <form onSubmit={addPersonAndNumber}>
                <div style={{padding:10}}>
                    Nimi: <input value={newName} 
                    onChange={handlePersonsChange} />    
                </div>
                <div style={{padding:10}}>
                    Puhelinnumero: <input value={newPhone}
                    onChange={handlePhoneChange} />
                </div>
                <div>
                    <br></br>
                    <button type="submit">Lisää</button>
                </div>
            </form> 

             <h2>Numerot</h2>
            <ul>
                {returnRows()}
            </ul>         
        </div>
    )
}

export default App