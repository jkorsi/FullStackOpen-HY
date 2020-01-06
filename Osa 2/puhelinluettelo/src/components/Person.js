import React from 'react'

const Person = ( { person, deletePerson } ) =>
{
  const label = 'Poista'
  const space = ' '
  const comma = ','
  return (
    <li>
      { person.id }{ comma } { person.number } { space }
      <button onClick={ deletePerson }>{ label }</button>
    </li>
  )
}

export default Person