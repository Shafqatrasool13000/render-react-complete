import React, { useState } from 'react'
import  { Memoized } from './Child2';

const ParentTwo = () => {
    const [count, setCount] = useState(0)
    console.log('Parent Two render');
    const [name, setName] = useState('shafqat')
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>count - {count}</button>
           <button onClick={()=>setName('arslan')}>Change Name</button>
           <Memoized name={name}/>
        </div>
    )
}

export default ParentTwo
