import React, { useState } from 'react'
import Country from './Country'
import CountrySimple from './CountrySimple'

const FilteredRows = ( props ) =>
{
    const [ filter, setFilter ] = useState( '' )
    const [ showAll, setShowAll ] = useState( true )

    if ( props.filterValue !== filter && showAll )
    {
        setFilter( props.filterValue )
    }

    console.log( "Filtteri on: ", filter )

    const filtered = props.filteredRows.filter( country =>
        country.name.toLowerCase().includes( filter.toLowerCase() ) )

    console.log( 'Filtered rows propsit: ', props )
    console.log( 'Filtered: ', filtered )
    console.log( 'FilteredRows length: ', props.filteredRows.length )
    console.log( 'Filtered length: ', filtered.length )

    if ( filtered.length > 1 )
    {
        console.log( '1' )
        return filtered.map( filteredCountry =>
        {
            return (
                <div>
                    <CountrySimple
                        key={ filteredCountry.name }
                        country={ filteredCountry }
                    />
                    <button onClick={ () => { setFilter( filteredCountry.name ); setShowAll( false ) } }>
                        Näytä maa
                    </button>
                </div >
            )
        }
        )
    } else if ( filtered.length = 1 )
    {
        console.log( '2' )
        return filtered.map( filteredCountry =>
        {
            return detailedCountry( filteredCountry )
        } )
    }
}


export default FilteredRows


function detailedCountry ( filteredCountry )
{
    return <Country key={ filteredCountry.name } country={ filteredCountry } />
}

