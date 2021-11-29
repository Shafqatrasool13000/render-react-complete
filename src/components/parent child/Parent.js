import React,{useState} from 'react'
import Child from './Child';

const Parent = () => {
const [count, setCount] = useState(0)
console.log('Parent render');
    return (
        <div>
                <button onClick={()=>setCount(count+1)}>count - {count}</button>
                <button onClick={()=>setCount(0)}>count to 0</button>
                <button onClick={()=>setCount(5)}>count to 5</button>
                <Child/>
        </div>
    )
}

export default Parent
