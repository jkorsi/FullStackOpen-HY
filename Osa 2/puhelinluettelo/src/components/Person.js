import React from 'react'

const Person = ({ person }) => {
  return (
    <li>
      {person.id} {person.number}
    </li>
  )
}

export default Person