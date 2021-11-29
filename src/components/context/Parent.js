import React, { useState } from 'react'

export const countContext=React.createContext()
const CountProvider=countContext.Provider
const Parent = ({children}) => {
    const [count, setCount] = useState(0)
      console.log('Parent Render');
      return (
          <div>
            <button onClick={()=>setCount(count+1)}>count {0}</button>
            <CountProvider value={count}>
            {children}
            </CountProvider>
        </div>
    )
}

export default Parent
