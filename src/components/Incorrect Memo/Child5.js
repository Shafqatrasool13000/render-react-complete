import React from 'react'

function Child5({name}) {
console.log("chiild 5 render");
    return (
        <div>
            Hello {name}
        </div>
    )
}

export default Child5

export const MemoizedCom5=React.memo(Child5)