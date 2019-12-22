import React from 'react'
import Person from './Person'
import Filter from './Filter'

  //TOIMII - ÄLÄ KOSKE
  const FilteredRows = (props) => {
      console.log(props)
    return props.filteredRows.filter(person =>
        person.id.toLowerCase().includes(props.filterValue.toLowerCase())).map(filteredPerson => {
            return (
                //Komponentti
                <Person
                    //Tämän perusteella komponentit erotellaan arrayssa
                    key={filteredPerson.id}

                    //Tämä sisältö näytetään
                    person={filteredPerson}
                />
            )
        })
}

export default FilteredRows