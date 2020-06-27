import React from 'react'
import Person from './Person'
import Filter from './Filter'
import deleteData from '../services/deleteData'


//TOIMII - ÄLÄ KOSKE
const PersonsList = (props) =>
{
    console.log('Filtered rows propsit: ', props)
    console.log(props.filteredRows)
    return props.filteredRows.filter(person =>

        person.name.toLowerCase().includes(props.filterValue.toLowerCase())).map(filteredPerson =>
        {
            return (
                //Komponentti
                <Person
                    //Tämän perusteella komponentit erotellaan arrayssa
                    key={filteredPerson.id}

                    //Tämä sisältö näytetään
                    person={filteredPerson}

                    //Rekisteröidään nappula id:n avulla tälle objektille
                    deletePerson={() => props.deletePerson(filteredPerson.id)}
                />
            )
        })
}

export default PersonsList