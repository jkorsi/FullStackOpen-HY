import React, { useState, useEffect } from 'react'

import Filter from './components/Filter'
import FilteredRows from './components/FilteredRows'

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
      <button onClick={ () => window.location.reload() }>
        Lataa uudelleen
                    </button>
      <h1>Maan tiedot</h1>
      <div>
        <FilteredRows
          filterValue={ filterValue }
          filteredRows={ countryData }
        />
      </div>
    </div>
  )
}

export default App;
