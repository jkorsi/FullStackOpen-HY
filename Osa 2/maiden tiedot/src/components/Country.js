import React from 'react'
import Languages from './Languages'
import Weather from './Weather'


const Country = ( { country } ) =>
{
    return (
        <div>
            <h1>{ country.name }</h1>
            <div>
                Pääkaupunki: { country.capital }
                <br></br>
                Väkiluku: { country.population }
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
            <br></br>
            <div>
                <Weather
                    capital={ country.capital }
                    isoCode={ country.alpha2Code }
                />
            </div>

        </div>
    )

}

export default Country