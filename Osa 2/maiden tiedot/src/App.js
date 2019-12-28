import React, { useState, useEffect } from 'react'
import './App.css';

import Filter from './components/Filter'
import FilteredRows from './components/FilteredRows'

import axios from 'axios'


const [countryData, setCountryData] = useState([])

//FILTER--------------------------------------
const [filterValue, setFilter] = useState('')

const handleFilterChange = (event) => {
  setFilter(event.target.value)
}
//-------------------------------------------

const apiLink = 'https://restcountries.eu/rest/v2/all'

const hook = () => {
  console.log('effect')
  axios
    .get(apiLink)
    .then(response => {
      console.log('promise fulfilled')
      console.log(response.data)
      setCountryData(response.data)
    })
}

useEffect(hook, [])

function App() {
  return (
    <div className="App">
      <h1>Hae maata</h1>
      <Filter
        filterValue={filterValue}
        handleFilterChange={handleFilterChange}
      />
      <h1>Maan tiedot</h1>
      <ul>
        <FilteredRows
          filterValue={filterValue}
          filteredRows={countryData}
        />
      </ul>
    </div>
  );
}

export default App;
