import React from 'react'

function Child3({children,name}) {
    console.log("child three render");
    return (
        <div>
            {children} {name}
        </div>
    )
}

export default Child3
export const Memoized=React.memo(Child3)