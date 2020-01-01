import React, { useState, useEffect } from 'react'
import Languages from './Languages'
import axios from 'axios'

const Weather = ( weather ) =>
{
    let tempToShow = 'Ei löytynyt'
    let wind = 'Ei löytynyt'
    let weatherMain = 'Ei löytynyt'
    let icon = 'Ikoni hukassa'
    let iconCode = ''

    console.log( weather )
    const [ weatherPromise, setWeatherPromise ] = useState( [] )
    const weatherlink = `http://api.openweathermap.org/data/2.5/weather?q=${ weather.capital },${ weather.isoCode.toLowerCase() }&APPID=f214260c0b5e5489a62227b5b54a0003&lang={fi}}]`
    console.log( weatherlink )
    //Example http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f214260c0b5e5489a62227b5b54a0003

    const hook = () =>
    {
        console.log( 'Weather effect' )
        axios
            .get( weatherlink )
            .then( response =>
            {
                console.log( 'Weather promise fulfilled' )
                console.log( 'Response: ', response )
                setWeatherPromise( response.data )
                console.log( 'Data: ', response.data )
            } )
    }
    useEffect( hook, [] )
    console.log( 'Weather data: ', weatherPromise )

    //Only set after the promise has been fulfilled & data has been set
    if ( Object.entries( weatherPromise ).length > 0 )
    {
        console.log( 'FINALS', weatherPromise )

        tempToShow = ( ( weatherPromise.main.temp - 273.15 ).toFixed( 1 ) ).toString()
        wind = ( weatherPromise.wind.speed.toString() )
        weatherMain = ( weatherPromise.weather[ 0 ].description.toString() )
        iconCode = weatherPromise.weather[ 0 ].icon
        icon = `https://openweathermap.org/img/wn/${ iconCode }@2x.png`
    }

    console.log( 'Main 2: ', weatherPromise.main )
    //console.log( 'TEMP: ', weatherPromise.main.temp )
    return (
        <div>
            <h2>Sää</h2>
            Lämpötila: { tempToShow } &#8451;
            <br></br>
            Tuuli: { wind } m/s
            <br></br>
            <h3>Säätila:</h3>
            <img
                src={ icon } alt="Sää"
            //style={ { width: 150, height: 150 } }
            />
        </div>

    )
}

export default Weather