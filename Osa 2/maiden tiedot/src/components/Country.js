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
            <br></br>
            <img
                style={ { width: 150, height: 90 } }
                src={ country.flag }
                alt="Country flag" />
        </div>
    )

}

export default Country