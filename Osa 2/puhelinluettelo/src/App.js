import React, { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonsList from './components/PersonsList'
import Inputs from './components/Inputs'
import Person from './components/Person'
import getAll from './services/getData'
import addData from './services/addData'
import deleteData from './services/deleteData'
import updateData from './services/updateData'
import Notification from './components/Notification'

import axios from 'axios'

import './App.css';


const App = () =>
{
    // Tilamuuttujat
    const [ personsList, setPersonsList ] = useState( [] )
    const [ newName, setName ] = useState( '' )
    const [ newPhone, setPhone ] = useState( '' )
    const [ filterValue, setFilter ] = useState( '' )
    const [ errorMessage, setErrorMessage ] = useState( null )

    const filteredRows = personsList
    const personsLink = 'http://localhost:3300/persons'

    //Efekti, jolla noudetaan henkilölista ja asetetaan se tilamuuttujaan
    const hook = () =>
    {
        getAll()
            .then( initialPersons =>
            {
                console.log( 'Promise fulfilled' )
                setPersonsList( initialPersons )
            } )
    }

    useEffect( hook, [] )

    // TOIMII - ÄLÄ KOSKE 
    const handlePersonsChange = ( event ) =>
    {
        setName( event.target.value )
    }

    // TOIMII - ÄLÄ KOSKE 
    const handlePhoneChange = ( event ) =>
    {
        setPhone( event.target.value )
    }

    //TOIMII - ÄLÄ KOSKE
    const handleFilterChange = ( event ) =>
    {
        setFilter( event.target.value )
    }

    // TOIMII - ÄLÄ KOSKE 
    const addPersonAndNumber = ( event ) =>
    {
        event.preventDefault()

        if ( personsList.filter( person => person.id.toLowerCase() === newName.toLowerCase() ).length > 0 )
        {
            if ( window.confirm( `Henkilö ${ newName } on jo olemassa. Päivitetäänkö numero?` ) )
            {
                //const person = personsList.filter( person => person.id.toLowerCase() === newName.toLowerCase() )
                const id = newName
                const url = `http://localhost:3300/persons/${ id }`
                const personToUpdate = personsList.find( person => person.id === id )
                console.log( personToUpdate )
                const changedPerson = { ...personToUpdate, number: newPhone }
                console.log( changedPerson )

                updateData( id, changedPerson )
                    .then( changedPerson =>
                    {
                        setPersonsList( personsList.map( person => person.id !== id ? person : changedPerson ) )
                        setName( '' )
                        setPhone( '' )
                        throwMessage( `Henkilön ${ id } numero päivitetty.` )
                    } )
                    .catch( error =>
                    {
                        alert( `Henkilö ${ id } on poistettu palvelimelta. :( Kokeile lisätä henkilö uudelleen!` )
                        setPersonsList( personsList.map( person => person.id !== id ) )
                    } )

            }
        } else
        {
            const personObject = {
                id: newName,
                number: newPhone
            }
            addData( personObject )
                .then( response =>
                {
                    setPersonsList( personsList.concat( personObject ) )
                    setName( '' )
                    setPhone( '' )
                    throwMessage( `Henkilö ${ personObject.id } lisätty` )
                } )
        }
    }

    function deletePerson ( id )
    {
        deleteData( id )
            .then( setPersonsList( personsList.filter( person => person.id !== id ) ) )

        throwMessage( `Poistettiin henkilö ${ id }` )
    }

    function throwMessage ( errorParam )
    {
        setErrorMessage(
            `${ errorParam }`
        )
        setTimeout( () =>
        {
            setErrorMessage( null )
        }, 5000 )

    }


    // Refaktoroi komponentit omiin tiedostoihin
    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <Notification message={ errorMessage } />

            <h3>Hae henkilöä</h3>
            <Filter
                filterValue={ filterValue }
                handleFilterChange={ handleFilterChange }
            />
            <h3>Lisää henkilö</h3>
            <Inputs
                addPersonAndNumber={ addPersonAndNumber }
                newName={ newName }
                handlePersonsChange={ handlePersonsChange }
                newPhone={ newPhone }
                handlePhoneChange={ handlePhoneChange }
            />
            <h2>Numerot</h2>
            <ul>
                <PersonsList
                    filterValue={ filterValue }
                    filteredRows={ filteredRows }
                    deletePerson={ deletePerson }
                />
            </ul>
        </div>
    )
}

export default App