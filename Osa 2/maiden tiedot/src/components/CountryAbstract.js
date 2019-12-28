import React from 'react'

const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <div>
                Capital: {country.capital}
                Population: {country.population}
            </div>
            <h2>Languages: </h2>
            <ul>
                {country.languages}
            </ul>
        </div>
    )
}

export default Country