import React from 'react'

function ChildTwo() {
    console.log("child two render");
    return (
        <div>
            child Component
        </div>
    )
}

export default ChildTwo
export const Memoized=React.memo(ChildTwo)