import React from 'react'
import Languages from './Languages'

const Language = ( { language } ) =>
{
    return (
        <li>
            { language.name }
        </li>
    )
}

export default Language