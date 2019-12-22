import React from 'react'

const Inputs = (inputs) => {

return(
    <form onSubmit={inputs.addPersonAndNumber}>
    <div style={{ padding: 10 }}>
        Nimi: <input value={inputs.newName} onChange={inputs.handlePersonsChange} />
    </div>
    <div style={{ padding: 10 }}>
        Puhelinnumero: <input value={inputs.newPhone} onChange={inputs.handlePhoneChange} />
    </div>
    <div>
        <br></br>
        <button type="submit">Lisää</button>
    </div>
</form>
)

}



// const Filter = ( filter ) => {

//     if(typeof filter.filterValue == null){
//         filterValue=''
//     }else{
//         filterValue = filter.filterValue      
//     } 

//     if(typeof filter.handleFilterChange == null){
//         handleFilterChange = ''
//     }else{
//         handleFilterChange = filter.handleFilterChange
//     } 

//     return (
//         <div style={{ padding: 10 }}>
//             Filtteri: <input value={filterValue} onChange={handleFilterChange} />
//         </div>
//     )
// }

export default Inputs 