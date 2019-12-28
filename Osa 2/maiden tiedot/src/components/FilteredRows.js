import React from 'react'
import Filter from './Filter'
import Country from './CountryAbstract'

  //TOIMII - ÄLÄ KOSKE
  const FilteredRows = (props) => {
      console.log('Filtered rows propsit: ',props)
    return props.filteredRows.filter(country =>
        country.id.toLowerCase().includes(props.filterValue.toLowerCase())).map(filteredCountry => {
            return (
                //Komponentti
                <Country
                    //Tämän perusteella komponentit erotellaan arrayssa
                    key={filteredCountry.name}

                    //Tämä sisältö näytetään
                    country={filteredCountry}
                />
            )
        })
}

export default FilteredRows