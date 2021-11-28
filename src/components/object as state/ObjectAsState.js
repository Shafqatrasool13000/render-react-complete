import React,{useState} from 'react'
const initState={
    fName:'shafqat',
    lName:'jatt'
}
const ObjectAsState = () => {
const [person, setPerson] = useState(initState)
console.log('component renders');
const changePerson=()=>{
    // person.fName='arslan'
    // person.lName='jaffar'
    // setPerson(person)
    const person2={...person}
    person2.fName='arslan'
    person2.lName='jaffar'
    setPerson(person2)
}
    return (
        <div>
            <button onClick={changePerson}>{person.fName} {person.lName}</button>
        </div>
    )
}

export default ObjectAsState
