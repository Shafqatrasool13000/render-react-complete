import React, { useContext } from 'react'
import { countContext } from './Parent';

export default function ChildA() {
    console.log("child A");
    return (
        <div>
            <ChildB/>
        </div>
    )
}

export function ChildB() {
    console.log("child B");

    return (
        <div>
            <ChildC/>
        </div>
    )
}
export function ChildC() {
    console.log("child C");
    const count = useContext(countContext)

    return (
        <div>
            count value is = {count} 
        </div>
    )
}