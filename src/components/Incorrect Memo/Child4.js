import React from 'react'

function Child4({name}) {
    console.log("child four render");
    const date=new Date()
    return (
        <div>
            Child 4 {name} {date.getHours()}:{date.getMinutes()}:{date.getSeconds()} 
        </div>
    )
}

export default Child4

export const MemoizedCom4=React.memo(Child4)