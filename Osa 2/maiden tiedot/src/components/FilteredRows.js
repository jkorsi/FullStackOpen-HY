import React from 'react'
import Filter from './Filter'
import Country from './Country'
import CountrySimple from './CountrySimple'

//TOIMII - ÄLÄ KOSKE
const FilteredRows = ( props ) =>
{
    const filtered = props.filteredRows.filter( country =>
        country.name.toLowerCase().includes( props.filterValue.toLowerCase() ) )

    console.log( 'Filtered rows propsit: ', props )
    console.log( 'FilteredRows length: ', props.filteredRows.length )
    console.log( 'Filtered length: ', filtered.length )

    if ( filtered.length > 1 )
    {

        console.log( '2' )
        return filtered.map( filteredCountry =>
        {
            return (
                <CountrySimple
                    key={ filteredCountry.name }
                    country={ filteredCountry }
                />
            )
        }
        )
    } else if ( filtered.length = 1 )
    {
        console.log( '1' )
        return filtered.map( filteredCountry =>
        {
            return (
                <Country
                    key={ filteredCountry.name }
                    country={ filteredCountry }
                />
            )
        } )

    }

}

export default FilteredRows