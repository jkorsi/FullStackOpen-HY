import React from 'react'


let filterValue;
let handleFilterChange;

const Filter = ( filter ) =>
{

    if ( typeof filter.filterValue == null )
    {
        filterValue = ''
    } else
    {
        filterValue = filter.filterValue
    }

    if ( typeof filter.handleFilterChange == null )
    {
        handleFilterChange = ''
    } else
    {
        handleFilterChange = filter.handleFilterChange
    }

    return (
        <div style={ { padding: 10 } }>
            Filtteri: <input value={ filterValue } onChange={ handleFilterChange } />
        </div>
    )
}

export default Filter 