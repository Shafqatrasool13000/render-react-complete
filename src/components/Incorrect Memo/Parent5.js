import React, { useState,useMemo,useCallback } from 'react'
import { MemoizedCom5 } from './Child5';

const Parent5 = () => {
    const [count, setCount] = useState(0)
    console.log('Parent 5 render');
    const [name, setName] = useState('shafqat')
    const person={
        name:'shafqat',
        age:23
    }
    const memoPerson=useMemo(()=>person,[])
    const  handleClick=()=>{
       
    }
    const memoHandleClick=useCallback(handleClick,[])
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>count - {count}</button>
           <button onClick={()=>setName('arslan')}>Change Name</button>
           <MemoizedCom5 name={name} person={memoPerson}/>
           <MemoizedCom5 name={name} handleClick={memoHandleClick }/>
        </div>
    )
}

export default Parent5
