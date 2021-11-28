import React,{useState} from 'react'

const UseState = () => {
const [count, setCount] = useState(0)
console.log('useState render');
    return (
        <div>
                <button onClick={()=>setCount(count+1)}>count - {count}</button>
                <button onClick={()=>setCount(0)}>count to 0</button>
            
                <button onClick={()=>setCount(5)}>count to 5</button>
        </div>
    )
}

export default UseState