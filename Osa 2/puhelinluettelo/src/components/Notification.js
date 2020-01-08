import React, { useState } from 'react'

const Notification = ( { message, isSuccess } ) =>
{

    var color = 'green'
    console.log( 'Message', message )
    console.log( 'Success ', isSuccess.toString() )


    if ( message === null )
    {
        return null
    }


    if ( !isSuccess )
    {
        color = 'red'
        console.log( "No success" )
    } else if ( isSuccess )
    {
        color = 'green'
        console.log( "Success" )
    }

    return (
        <div className="error" style={ { color: color } }>
            { message }
        </div>
    )
}

export default Notification


//style = { { width: 150, height: 90 } }