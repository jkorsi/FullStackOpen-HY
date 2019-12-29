import React, { useState, useEffect } from 'react'

import Filter from './components/Filter'
import FilteredRows from './components/FilteredRows'
import Language from './components/Language'
import Languages from './components/Languages'
import Country from './components/Country'

import axios from 'axios'

const App = () =>
{
  const [ countryData, setCountryData ] = useState( [] )

  //FILTER--------------------------------------
  const [ filterValue, setFilter ] = useState( '' )

  const handleFilterChange = ( event ) =>
  {
    setFilter( event.target.value )
  }
  //--------------------------------------------

  //HOOK AND EFFECT-----------------------------
  const apiLink = 'https://restcountries.eu/rest/v2/all'

  const hook = () =>
  {
    console.log( 'effect' )
    axios
      .get( apiLink )
      .then( response =>
      {
        console.log( 'promise fulfilled' )
        console.log( response.data )
        setCountryData( response.data )
      } )
  }

  useEffect( hook, [] )
  //---------------------------------------------


  return (
    <div className="App">
      <h1>Hae maata</h1>
      <Filter
        filterValue={ filterValue }
        handleFilterChange={ handleFilterChange }
      />
      <h1>Maan tiedot</h1>
      <ul>
        <FilteredRows
          filterValue={ filterValue }
          filteredRows={ countryData }
        />
      </ul>
    </div>
  )
}

export default App;
