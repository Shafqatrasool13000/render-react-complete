import React, { useState } from 'react'
import { MemoizedCom4 } from './Child4';

const Parent3 = () => {
    const [count, setCount] = useState(0)
    console.log('Parent Three render');
    const [name, setName] = useState('shafqat')
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>count - {count}</button>
           <button onClick={()=>setName('arslan')}>Change Name</button>
           <MemoizedCom4 name={name}/>
        </div>
    )
}

export default Parent3
