import React from 'react'
import Language from './Language'

const Languages = ( props ) =>
{

    return (
        props.languages.map( language =>
        {
            return (
                <Language
                    key={ language.name }
                    language={ language }
                />
            )
        } )
    )
}

export default Languages