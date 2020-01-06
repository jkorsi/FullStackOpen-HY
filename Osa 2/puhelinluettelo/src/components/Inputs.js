import React from 'react'

const Inputs = ( inputs ) =>
{

    return (
        <form onSubmit={ inputs.addPersonAndNumber }>
            <div style={ { padding: 10 } }>
                Nimi: <input value={ inputs.newName } onChange={ inputs.handlePersonsChange } />
            </div>
            <div style={ { padding: 10 } }>
                Puhelinnumero: <input value={ inputs.newPhone } onChange={ inputs.handlePhoneChange } />
            </div>
            <div>
                <br></br>
                <button type="submit">Lisää</button>
            </div>
        </form>
    )

}

export default Inputs 