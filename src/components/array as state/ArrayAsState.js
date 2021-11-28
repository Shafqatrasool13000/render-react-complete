import React, { useState } from 'react'
const initState=['shafqat','jatt']
const ArrayAsState = () => {
    const [persons, setPersons] = useState(initState)
    const handleChange=()=>{
        // persons.push('arslan')
        // persons.push('jaffar')
        // setPersons(persons)
        const persons2=[...persons]
        persons2.push('arslan')
        persons2.push('jaffar')
        setPersons(persons2)
    }
    console.log('ArrayAsState Render');
    return (
        <div>
            <button onClick={handleChange}>Click</button>
            {persons.map(person=><div key={person}>
                {person}
            </div>)}
        </div>
    )
}

export default ArrayAsState
