import React, { useState } from 'react'

const ParentOne = ({ children }) => {
    const [count, setCount] = useState(0)
    console.log('Parent one render');
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>count - {count}</button>
            {children}
        </div>
    )
}

export default ParentOne
