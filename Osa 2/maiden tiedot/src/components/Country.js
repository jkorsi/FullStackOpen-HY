import React from 'react'
import Languages from './Languages'

const Country = ( { country } ) =>
{
    return (
        <div>
            <h1>{ country.name }</h1>
            <div>
                Capital: { country.capital }
                <br></br>
                Population: { country.population }
            </div>
            <h2>Languages: </h2>
            <ul>
                <Languages
                    languages={ country.languages }
                />
            </ul>
        </div>
    )

}

export default Country